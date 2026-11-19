<script lang="ts">
import { onMount } from "svelte";
import AnimatedTabs from "@/components/controls/AnimatedTabs.svelte";
import { commentConfig } from "@/config/commentConfig";
import I18nKey from "@/i18n/i18nKey";
import { i18n } from "@/i18n/translation";
import {
	clearAssignment,
	clearPostCover,
	createFolderId,
	deleteFolder,
	deleteItemData,
	listAssignments,
	listFolders,
	listPostCovers,
	saveFolder,
	setAssignment,
	setPostCover,
	type LibraryFolder,
} from "@/utils/article-library-store";
import {
	createArticleCoverLifecycle,
	parseArticleCoverApiUrls,
} from "@/utils/article-cover-lifecycle";
import {
	deleteNote,
	getNoteImage,
	listNotes,
	saveNote,
	saveNoteImages,
	type NoteRecord,
} from "@/utils/notes-store";
import { removeFileExtension } from "@/utils/url-utils";
import "../../styles/pages/article-list.css";

type ArticleListView = "list" | "grid";

type ArticleListTag = {
	name: string;
	url: string;
};

export type ArticleListPost = {
	id: string;
	title: string;
	url: string;
	publishedIso: string;
	publishedText: string;
	category: string;
	categoryUrl: string;
	tags: ArticleListTag[];
	description: string;
	imageUrl: string;
	imageApiUrls: string[];
	apiUrls?: string[];
	fallbackImageUrl?: string;
	categoryHue?: number;
	wordCount?: number;
	pinned: boolean;
	// 仅 dev 可见：私密文章在卡片上显示「私密」角标，生产构建不渲染
	private: boolean;
	hasRealCover: boolean;
};

interface Props {
	posts: ArticleListPost[];
	defaultView?: ArticleListView;
	postsPerPage?: number;
	allowLayoutSwitch?: boolean;
}

let {
	posts,
	defaultView = "list",
	postsPerPage = 9,
	allowLayoutSwitch = true,
}: Props = $props();

let containerRef = $state<HTMLElement | null>(null);
let view = $state<ArticleListView>(getInitialViewFromDOM());
let viewInitialized = false;

function getInitialViewFromDOM(): ArticleListView {
	if (typeof document !== "undefined") {
		const attr = document.documentElement.getAttribute("data-article-view");
		if (isArticleListView(attr)) return attr;
	}
	if (typeof localStorage !== "undefined") {
		const saved = localStorage.getItem("postListLayout");
		if (isArticleListView(saved)) return saved;
	}
	return defaultView;
}
let gridColumnCount = $state(3);
let currentPage = $state(1);
// 页码输入框：唯一数据源是 pageInput，DOM 值由 value={pageInput} 驱动，
// 输入时在 handlePageInput 里回写。
// 不要写成 bind:value + oninput 并存——两者会互相覆盖，导致读不到用户清空后的空值。
let pageInput = $state("1");
let isMobile = $state(false);

// 浏览器里写的笔记：与正式文章混排，卡片样式完全一致
let localNotes = $state<NoteRecord[]>([]);
let localNoteCoverUrls = $state<Record<string, string>>({});
let noteCoverObjectUrls: string[] = [];

// 本地整理数据（IndexedDB）：文件夹、归类关系、逐篇封面覆盖
let folders = $state<LibraryFolder[]>([]);
let folderCoverUrls = $state<Record<string, string>>({});
let folderCoverObjectUrls: string[] = [];
let assignments = $state<Record<string, string>>({});
let postCoverUrls = $state<Record<string, string>>({});
let postCoverIds = $state<string[]>([]);
let postCoverObjectUrls: string[] = [];
let activeFolderId = $state("all");
let libraryLoadVersion = 0;

// 文件夹新建模态框
let showFolderModal = $state(false);
let folderName = $state("");
let folderCoverFile = $state<File | null>(null);
let folderCoverPreviewUrl = $state("");
let folderSaving = $state(false);

// 归类菜单（组件内固定层，跟随按钮定位）
let assignMenu = $state<{ itemId: string; x: number; y: number } | null>(null);
// 共享的封面选择 input 当前服务的条目
let pendingCoverItemId: string | null = null;

/** frontmatter 里以 http(s)/绝对路径/data: 写的封面直接用，其余按文件名去 IndexedDB 找 */
function resolveDirectCover(source: string | undefined): string {
	const value = (source ?? "").trim();
	if (!value) return "";
	return /^(https?:\/\/|\/\/|\/|data:|blob:)/i.test(value) ? value : "";
}

function stripNoteMarkdown(text: string): string {
	return text
		.replace(/```[\s\S]*?```/g, " ")
		.replace(/`[^`]*`/g, " ")
		.replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
		.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
		.replace(/^#{1,6}\s+/gm, "")
		.replace(/[*_>~#-]/g, " ")
		.replace(/\s+/g, " ")
		.trim();
}

const notePosts = $derived.by((): ArticleListPost[] => {
	// 本地草稿只在本机开发环境出现，公开构建不能混入访客的 IndexedDB 内容。
	if (!import.meta.env.DEV) return [];
	const fallback =
		posts.flatMap((post) => post.imageApiUrls)[0] ||
		"/assets/images/covers/1.webp";
	const dateFormatter = new Intl.DateTimeFormat("zh-CN", {
		year: "numeric",
		month: "2-digit",
		day: "2-digit",
	});
	return localNotes.map((note) => {
		const itemId = `note-${note.id}`;
		const category = note.tags[0] || "未分类";
		// 笔记自身封面 > 逐篇封面覆盖 > frontmatter 里的直接路径。
		// 从文章列表换封面时两者会同步写入，优先笔记自身封面可避免
		// 用户在 /notes/ 里改过封面后仍显示旧的覆盖图。
		const coverUrl =
			localNoteCoverUrls[note.id] ||
			postCoverUrls[itemId] ||
			resolveDirectCover(note.cover) ||
			"";
		return {
			id: itemId,
			title: note.title,
			url: `/notes/?n=${encodeURIComponent(note.id)}`,
			publishedIso: new Date(note.updatedAt).toISOString(),
			publishedText: dateFormatter.format(note.updatedAt),
			category,
			categoryUrl: "",
			tags: note.tags.map((tag) => ({ name: tag, url: "" })),
			description:
				stripNoteMarkdown(note.body).slice(0, 120) ||
				"本地笔记，点击查看全文。",
			imageUrl: coverUrl || fallback,
			imageApiUrls: [],
			apiUrls: [],
			fallbackImageUrl: fallback,
			categoryHue: getCategoryHue(category),
			wordCount: note.words,
			pinned: false,
			private: false,
			hasRealCover: Boolean(coverUrl),
		} satisfies ArticleListPost;
	});
});

// 正式文章：有本地封面覆盖时优先用 Object URL，并清空随机图 API，避免覆盖被替换
const displayPosts = $derived(
	posts.map((post) => {
		const override = postCoverUrls[post.id];
		if (!override) return post;
		return {
			...post,
			imageUrl: override,
			imageApiUrls: [],
			apiUrls: [],
			hasRealCover: true,
		} satisfies ArticleListPost;
	}),
);

const allPosts = $derived(
	[...notePosts, ...displayPosts].sort(
		(a, b) => Date.parse(b.publishedIso) - Date.parse(a.publishedIso),
	),
);

// 文件夹筛选：置顶与常规文章一起筛，避免「已选文件夹但置顶还显示文件夹外文章」
const filteredPosts = $derived(
	activeFolderId === "all"
		? allPosts
		: allPosts.filter((post) => assignments[post.id] === activeFolderId),
);

/**
 * 统一加载链：笔记、文件夹、归类关系、封面覆盖一起读，
 * 每次重新加载都先释放上一轮 Object URL，避免 Swup 切页后泄漏。
 */
async function loadLibraryData() {
	const version = ++libraryLoadVersion;
	// 重新加载时收起归类菜单，避免菜单挂在即将重绘的列表上
	assignMenu = null;
	const createdNoteUrls: string[] = [];
	const createdPostCoverUrls: string[] = [];
	const createdFolderCoverUrls: string[] = [];
	const revokeCreated = () => {
		createdNoteUrls.forEach((url) => URL.revokeObjectURL(url));
		createdPostCoverUrls.forEach((url) => URL.revokeObjectURL(url));
		createdFolderCoverUrls.forEach((url) => URL.revokeObjectURL(url));
	};
	try {
		const [loadedNotes, loadedFolders, loadedAssignments, loadedCovers] =
			await Promise.all([
				import.meta.env.DEV ? listNotes() : Promise.resolve([]),
				listFolders(),
				listAssignments(),
				listPostCovers(),
			]);
		const noteCovers = await Promise.all(
			loadedNotes.map(async (note) => {
				const direct = resolveDirectCover(note.cover);
				if (direct) return [note.id, direct] as const;
				if (!note.cover) return null;
				try {
					const image = await getNoteImage(note.id, note.cover);
					if (!image) return null;
					const url = URL.createObjectURL(image.blob);
					createdNoteUrls.push(url);
					return [note.id, url] as const;
				} catch {
					return null;
				}
			}),
		);

		const nextPostCoverUrls: Record<string, string> = {};
		for (const cover of loadedCovers) {
			try {
				const url = URL.createObjectURL(cover.blob);
				createdPostCoverUrls.push(url);
				nextPostCoverUrls[cover.itemId] = url;
			} catch {
				// 单条封面损坏不影响其它条目
			}
		}

		const nextFolderCoverUrls: Record<string, string> = {};
		for (const folder of loadedFolders) {
			if (!folder.cover) continue;
			try {
				const url = URL.createObjectURL(folder.cover);
				createdFolderCoverUrls.push(url);
				nextFolderCoverUrls[folder.id] = url;
			} catch {
				// 同上
			}
		}

		if (version !== libraryLoadVersion) {
			revokeCreated();
			return;
		}

		noteCoverObjectUrls.forEach((url) => URL.revokeObjectURL(url));
		postCoverObjectUrls.forEach((url) => URL.revokeObjectURL(url));
		folderCoverObjectUrls.forEach((url) => URL.revokeObjectURL(url));
		noteCoverObjectUrls = createdNoteUrls;
		postCoverObjectUrls = createdPostCoverUrls;
		folderCoverObjectUrls = createdFolderCoverUrls;

		localNoteCoverUrls = Object.fromEntries(
			noteCovers.filter(
				(entry): entry is readonly [string, string] => entry !== null,
			),
		);
		postCoverUrls = nextPostCoverUrls;
		postCoverIds = loadedCovers.map((cover) => cover.itemId);
		folderCoverUrls = nextFolderCoverUrls;
		folders = loadedFolders;
		assignments = Object.fromEntries(
			loadedAssignments.map((entry) => [entry.itemId, entry.folderId]),
		);
		localNotes = loadedNotes;

		if (
			activeFolderId !== "all" &&
			!loadedFolders.some((folder) => folder.id === activeFolderId)
		) {
			activeFolderId = "all";
			currentPage = 1;
			pageInput = "1";
		}
	} catch {
		revokeCreated();
		if (version !== libraryLoadVersion) return;
		localNotes = [];
		localNoteCoverUrls = {};
		postCoverUrls = {};
		postCoverIds = [];
		folderCoverUrls = {};
		folders = [];
		assignments = {};
	}
	requestAnimationFrame(() => {
		if (version !== libraryLoadVersion) return;
		// 文件夹筛选 / 删除笔记后条目数可能变少，页码要收回到有效范围
		if (currentPage > totalPages) {
			pageInput = String(totalPages);
			currentPage = totalPages;
			requestAnimationFrame(() => initCoverLifecycles());
		}
		initCoverLifecycles();
		initViews();
	});
}

/** 每个文件夹的有效条目数：正式文章 + 本地笔记，已不存在的条目不计数 */
const folderCounts = $derived.by(() => {
	const existing = new Set(allPosts.map((post) => post.id));
	const counts: Record<string, number> = {};
	for (const [itemId, folderId] of Object.entries(assignments)) {
		if (!existing.has(itemId)) continue;
		counts[folderId] = (counts[folderId] ?? 0) + 1;
	}
	return counts;
});

function hasLocalCover(itemId: string): boolean {
	return postCoverIds.includes(itemId);
}

function selectFolder(folderId: string) {
	if (activeFolderId === folderId) return;
	activeFolderId = folderId;
	currentPage = 1;
	pageInput = "1";
	assignMenu = null;
	requestAnimationFrame(() => {
		initCoverLifecycles();
		initViews();
	});
}

// —— 逐篇封面 ——
let coverInputRef = $state<HTMLInputElement | null>(null);

function openCoverPicker(event: MouseEvent, itemId: string) {
	event.preventDefault();
	event.stopPropagation();
	pendingCoverItemId = itemId;
	if (coverInputRef) {
		coverInputRef.value = "";
		coverInputRef.click();
	}
}

async function handleCoverFileChange(event: Event) {
	const input = event.currentTarget as HTMLInputElement;
	const file = input.files?.[0] ?? null;
	input.value = "";
	const itemId = pendingCoverItemId;
	pendingCoverItemId = null;
	if (!file || !itemId) return;
	if (!file.type.startsWith("image/")) return;
	try {
		await setPostCover(itemId, file);
		if (itemId.startsWith("note-")) {
			const noteId = itemId.slice(5);
			const note = localNotes.find((item) => item.id === noteId);
			if (note) {
				// 笔记封面同时写回笔记库，/notes/ 页看到的是同一张图
				await saveNoteImages(noteId, [file]);
				await saveNote({ ...note, cover: file.name, updatedAt: Date.now() });
			}
		}
		await loadLibraryData();
	} catch {
		// 浏览器存储不可用时保持原封面
	}
}

async function restoreCover(event: MouseEvent, itemId: string) {
	event.preventDefault();
	event.stopPropagation();
	try {
		await clearPostCover(itemId);
		if (itemId.startsWith("note-")) {
			const noteId = itemId.slice(5);
			const note = localNotes.find((item) => item.id === noteId);
			if (note) await saveNote({ ...note, cover: undefined });
		}
		await loadLibraryData();
	} catch {
		// 忽略本地库异常
	}
}

// —— 归类菜单 ——
function openAssignMenu(event: MouseEvent, itemId: string) {
	event.preventDefault();
	event.stopPropagation();
	if (assignMenu?.itemId === itemId) {
		assignMenu = null;
		return;
	}
	if (typeof window === "undefined") return;
	const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
	const width = 184;
	const height = Math.min(280, 56 + folders.length * 34);
	let x = Math.min(rect.left, window.innerWidth - width - 8);
	let y = rect.bottom + 6;
	if (y + height > window.innerHeight) {
		y = Math.max(8, rect.top - height - 6);
	}
	assignMenu = { itemId, x: Math.max(8, x), y: Math.max(8, y) };
}

async function moveItemToFolder(itemId: string, folderId: string | null) {
	assignMenu = null;
	try {
		if (folderId) await setAssignment(itemId, folderId);
		else await clearAssignment(itemId);
		const next = { ...assignments };
		if (folderId) next[itemId] = folderId;
		else delete next[itemId];
		assignments = next;
		requestAnimationFrame(() => {
			// 当前文件夹视图下移出后条目消失，页码可能越界
			if (currentPage > totalPages) {
				pageInput = String(totalPages);
				currentPage = totalPages;
				requestAnimationFrame(() => initCoverLifecycles());
			} else {
				initCoverLifecycles();
			}
		});
	} catch {
		// 忽略本地库异常
	}
}

function handleDocumentPointerDown(event: PointerEvent) {
	if (!assignMenu) return;
	const target = event.target as HTMLElement | null;
	if (
		target?.closest(
			".article-folder-menu, .article-card-action--assign, .article-folder-modal",
		)
	)
		return;
	assignMenu = null;
}

function handleDocumentKeyDown(event: KeyboardEvent) {
	if (event.key !== "Escape") return;
	assignMenu = null;
	if (showFolderModal) closeFolderModal();
}

// —— 新建文件夹 ——
function revokeFolderPreview() {
	if (folderCoverPreviewUrl) {
		URL.revokeObjectURL(folderCoverPreviewUrl);
		folderCoverPreviewUrl = "";
	}
}

function openFolderModal() {
	folderName = "";
	folderCoverFile = null;
	revokeFolderPreview();
	assignMenu = null;
	showFolderModal = true;
}

function closeFolderModal() {
	showFolderModal = false;
	folderName = "";
	folderCoverFile = null;
	revokeFolderPreview();
}

function handleFolderNameInput(event: Event) {
	folderName = (event.currentTarget as HTMLInputElement).value;
}

function handleFolderCoverChange(event: Event) {
	const input = event.currentTarget as HTMLInputElement;
	const file = input.files?.[0] ?? null;
	input.value = "";
	if (!file || !file.type.startsWith("image/")) return;
	folderCoverFile = file;
	revokeFolderPreview();
	folderCoverPreviewUrl = URL.createObjectURL(file);
}

async function submitFolder(event: Event) {
	event.preventDefault();
	const name = folderName.trim();
	if (!name || folderSaving) return;
	folderSaving = true;
	try {
		await saveFolder({
			id: createFolderId(),
			name,
			cover: folderCoverFile,
			createdAt: Date.now(),
		});
		closeFolderModal();
		await loadLibraryData();
	} catch {
		// 存储失败时保留弹窗，方便重试
	} finally {
		folderSaving = false;
	}
}

async function removeFolder(event: MouseEvent, folder: LibraryFolder) {
	event.preventDefault();
	event.stopPropagation();
	if (
		!window.confirm(`删除文件夹「${folder.name}」？其中的文章会回到「全部」。`)
	)
		return;
	try {
		await deleteFolder(folder.id);
		// 删除后统一回到「全部」，避免停留在已不存在的文件夹视图
		activeFolderId = "all";
		currentPage = 1;
		pageInput = "1";
		await loadLibraryData();
	} catch {
		// 忽略本地库异常
	}
}

// —— 本地笔记的编辑 / 删除 ——
async function removeNote(event: MouseEvent, itemId: string) {
	event.preventDefault();
	event.stopPropagation();
	const noteId = itemId.slice(5);
	const note = localNotes.find((item) => item.id === noteId);
	if (!window.confirm(`删除「${note?.title ?? noteId}」？该操作不可恢复。`))
		return;
	try {
		await deleteNote(noteId);
		// 同时清掉归类关系与本地封面覆盖
		await deleteItemData(itemId);
		await loadLibraryData();
	} catch {
		// 忽略本地库异常
	}
}

const categoryColorPalette = [
	"#fbbf24",
	"#fb7185",
	"#34d399",
	"#60a5fa",
	"#a78bfa",
	"#f472b6",
	"#2dd4bf",
	"#fb923c",
	"#22d3ee",
	"#818cf8",
	"#e879f9",
	"#a3e635",
	"#f87171",
	"#a78bfa",
	"#06b6d4",
	"#f59e0b",
	"#f43f5e",
	"#10b981",
];

const categoryColors = $derived.by(() => {
	const map = new Map<string, string>();
	const cats = [
		...new Set(allPosts.map((p) => p.category).filter(Boolean)),
	].sort((a, b) => a.localeCompare(b, "zh-CN"));
	for (let i = 0; i < cats.length; i++) {
		map.set(cats[i], categoryColorPalette[i % categoryColorPalette.length]);
	}
	return map;
});

function getCategoryHue(name: string): number {
	let hash = 2166136261;
	for (let i = 0; i < name.length; i++) {
		hash ^= name.charCodeAt(i);
		hash = Math.imul(hash, 16777619);
	}
	return (hash >>> 0) % 360;
}

function getCategoryColor(name: string): string {
	return `--article-category-hue: ${getCategoryHue(name)}`;
}

const pinnedPosts = $derived(filteredPosts.filter((post) => post.pinned));
const regularPosts = $derived(filteredPosts.filter((post) => !post.pinned));
const paginatedPosts = $derived(
	regularPosts.slice(
		(currentPage - 1) * postsPerPage,
		currentPage * postsPerPage,
	),
);
const totalPages = $derived(
	Math.max(1, Math.ceil(regularPosts.length / postsPerPage)),
);
let pinnedActiveIndex = $state(0);
let pinnedCarouselTimer: ReturnType<typeof setTimeout> | null = null;
let pinnedPaused = $state(false);
let coverLifecycles: ReturnType<typeof createArticleCoverLifecycle>[] = [];
let coverAbortController: AbortController | null = null;
let viewCountAbort: (() => void) | null = null;
let viewCountDisposers: (() => void)[] = [];
let pinnedSectionRef = $state<HTMLElement | null>(null);
let wheelLockUntil = 0;
let touchStartRef: { x: number; y: number; t: number } | null = null;

const columns = $derived(
	(() => {
		const cols = Array.from(
			{ length: gridColumnCount },
			() => [] as { post: ArticleListPost; index: number }[],
		);
		paginatedPosts.forEach((post, idx) => {
			const colIdx = idx % gridColumnCount;
			cols[colIdx].push({
				post,
				index: (currentPage - 1) * postsPerPage + idx,
			});
		});
		return cols;
	})(),
);

function isArticleListView(
	value: string | null | undefined,
): value is ArticleListView {
	return value === "list" || value === "grid";
}

function syncViewFromStorage() {
	if (typeof localStorage === "undefined") return;
	const savedView = localStorage.getItem("postListLayout");
	if (isArticleListView(savedView)) {
		view = savedView;
	} else if (!viewInitialized) {
		view = defaultView;
	}
	viewInitialized = true;
}

function getGridColumnCount() {
	if (typeof window === "undefined") return 3;
	if (view !== "grid") return 1;
	return window.innerWidth <= 768 ? 1 : 3;
}

function updateGridColumns() {
	if (typeof window === "undefined") return;
	gridColumnCount = getGridColumnCount();
}

function startPinnedCarousel() {
	if (pinnedPaused || typeof window === "undefined") return;
	if (pinnedPosts.length <= 1) return;
	if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
	if (pinnedCarouselTimer) clearTimeout(pinnedCarouselTimer);
	pinnedCarouselTimer = setTimeout(() => {
		pinnedActiveIndex = (pinnedActiveIndex + 1) % pinnedPosts.length;
		startPinnedCarousel();
	}, 6000);
}

function stopPinnedCarousel() {
	if (pinnedCarouselTimer) {
		clearTimeout(pinnedCarouselTimer);
		pinnedCarouselTimer = null;
	}
}

function goToPinned(index: number) {
	if (pinnedPosts.length === 0) return;
	pinnedActiveIndex =
		((index % pinnedPosts.length) + pinnedPosts.length) % pinnedPosts.length;
	stopPinnedCarousel();
	startPinnedCarousel();
	requestAnimationFrame(() => initCoverLifecycles());
}

function handlePinnedWheel(event: WheelEvent) {
	if (pinnedPosts.length <= 1) return;
	const deltaY = event.deltaY;
	if (Math.abs(deltaY) < 8) return;
	if (Date.now() < wheelLockUntil) return;
	event.preventDefault();
	const dir = deltaY > 0 ? 1 : -1;
	wheelLockUntil = Date.now() + 550;
	goToPinned(pinnedActiveIndex + dir);
}

function handlePinnedTouchStart(event: TouchEvent) {
	if (pinnedPosts.length <= 1) return;
	const t = event.touches[0];
	if (!t) return;
	touchStartRef = { x: t.clientX, y: t.clientY, t: Date.now() };
}

function handlePinnedTouchMove(event: TouchEvent) {
	if (!touchStartRef || pinnedPosts.length <= 1) return;
	const t = event.touches[0];
	if (!t) return;
	const dx = t.clientX - touchStartRef.x;
	const dy = t.clientY - touchStartRef.y;
	if (Math.abs(dx) > 28 && Math.abs(dx) > Math.abs(dy) * 1.2) {
		event.preventDefault();
	}
}

function handlePinnedTouchEnd(event: TouchEvent) {
	if (!touchStartRef || pinnedPosts.length <= 1) return;
	const t = event.changedTouches[0];
	const start = touchStartRef;
	touchStartRef = null;
	if (!t || !start) return;
	const dx = t.clientX - start.x;
	const dy = t.clientY - start.y;
	if (Math.abs(dx) < 28 || Math.abs(dx) <= Math.abs(dy) * 1.2) return;
	const dir = dx < 0 ? 1 : -1;
	goToPinned(pinnedActiveIndex + dir);
}

function initViews() {
	viewCountAbort?.();
	viewCountAbort = null;
	if (typeof document === "undefined") return;
	const serverURL = commentConfig.waline?.serverURL;
	if (
		commentConfig.type !== "waline" ||
		!commentConfig.waline?.visitorCount ||
		!serverURL
	)
		return;
	if (
		document.querySelectorAll(".article-views .waline-pageview-count")
			.length === 0
	)
		return;
	let disposed = false;
	import("@waline/client/pageview")
		.then(({ pageviewCount }) => {
			if (disposed) return;
			// update: false —— 列表页只读浏览量，不把列表页访问计入文章计数
			viewCountAbort = pageviewCount({
				serverURL,
				selector: ".article-views .waline-pageview-count",
				update: false,
			});
		})
		.catch(() => undefined);
	viewCountDisposers.push(() => {
		disposed = true;
	});
}

function initCoverLifecycles() {
	if (coverAbortController) coverAbortController.abort();
	coverAbortController = new AbortController();
	const signal = coverAbortController.signal;
	for (const lc of coverLifecycles) lc.dispose();
	coverLifecycles = [];
	if (typeof document === "undefined") return;
	const wraps = document.querySelectorAll<HTMLElement>(
		"[data-article-list-cover-wrap]",
	);
	for (const wrap of wraps) {
		const img = wrap.querySelector<HTMLImageElement>(
			"[data-article-list-cover]",
		);
		if (!img) return;
		const apiUrls = parseArticleCoverApiUrls(img.dataset.apiUrls);
		const fallbackSrc = img.dataset.fallbackSrc || undefined;
		const lc = createArticleCoverLifecycle({
			host: wrap,
			image: img,
			apiUrls,
			fallbackSrc,
			baseUrl: document.baseURI,
			signal,
		});
		coverLifecycles.push(lc);
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) lc.setVisible(entry.isIntersecting);
			},
			{ rootMargin: "200px 0px" },
		);
		observer.observe(wrap);
		signal.addEventListener("abort", () => observer.disconnect(), {
			once: true,
		});
		// initial check: if already visible
		const rect = wrap.getBoundingClientRect();
		const visible = rect.top < window.innerHeight + 200 && rect.bottom > -200;
		lc.setVisible(visible);
	}
}

function handleLayoutChange(event: Event) {
	const layout = (event as CustomEvent<{ layout?: string }>).detail?.layout;
	if (!isArticleListView(layout) || layout === view) return;
	view = layout;
	updateGridColumns();
	requestAnimationFrame(() => initCoverLifecycles());
	requestAnimationFrame(() => initViews());
}

function handleImageLoad(event: Event) {
	const img = event.currentTarget as HTMLImageElement;
	img.classList.add("is-loaded");
	img.parentElement?.classList.remove("skeleton-shimmer");
}

function handleImageError(event: Event, apiUrls: string[]) {
	const image = event.currentTarget as HTMLImageElement;
	const nextIndex = Number(image.dataset.apiIndex || "0") + 1;
	if (nextIndex < apiUrls.length) {
		image.dataset.apiIndex = String(nextIndex);
		image.src = apiUrls[nextIndex];
		return;
	}
	image
		.closest(
			".article-grid-card__image-wrapper, .article-list-row-card__bg-wrapper",
		)
		?.classList.add("is-hidden");
}

function goToPage(page: number) {
	const nextPage = Math.max(1, Math.min(totalPages, page));
	if (nextPage === currentPage) {
		// 页码没变也要把输入框恢复成当前页（例如输入了超出范围的值）
		pageInput = String(currentPage);
		return;
	}
	pageInput = String(nextPage);
	if (containerRef) {
		window.scrollTo(
			0,
			Math.max(0, window.scrollY + containerRef.getBoundingClientRect().top),
		);
	}
	requestAnimationFrame(() => {
		currentPage = nextPage;
		requestAnimationFrame(() => initCoverLifecycles());
	});
}

function generatePageNumbers(
	current: number,
	total: number,
): (number | string)[] {
	const delta = 2;
	const rangeWithDots: (number | string)[] = [];
	if (total <= 7) {
		for (let i = 1; i <= total; i++) rangeWithDots.push(i);
		return rangeWithDots;
	}
	const left = Math.max(2, current - delta);
	const right = Math.min(total - 1, current + delta);
	rangeWithDots.push(1);
	if (left > 2) rangeWithDots.push("...");
	for (let i = left; i <= right; i++) rangeWithDots.push(i);
	if (right < total - 1) rangeWithDots.push("...");
	if (total > 1) rangeWithDots.push(total);
	return rangeWithDots;
}

const pageNumbers = $derived(generatePageNumbers(currentPage, totalPages));

// 注意：不要把 currentPage 回写成 pageInput 的 $effect——那会在用户清空输入框时
// 把状态又改回当前页，导致「留空回车跳末页」失效。
// 输入框显示由模板的 value={pageInput} 单向驱动，翻页时在 goToPage 里同步。

function handlePageFocus(event: FocusEvent) {
	// 聚焦即全选，直接键入即可替换当前页码
	const el = event.currentTarget as HTMLInputElement;
	requestAnimationFrame(() => {
		if (document.activeElement === el) el.select();
	});
}

function handlePageInput(event: Event) {
	// 只保留数字，避免粘贴或输入法带进非数字字符；空字符串要保留（供「留空跳末页」用）
	const el = event.currentTarget as HTMLInputElement;
	const digits = el.value.replace(/\D/g, "");
	if (digits !== el.value) el.value = digits;
	pageInput = digits;
}

function handlePageKeyDown(event: KeyboardEvent) {
	if (event.key === "Enter") {
		event.preventDefault();
		const raw = pageInput.trim();
		// 留空回车 → 跳到最后一页
		const parsed = raw === "" ? totalPages : Number.parseInt(raw, 10);
		const target = Number.isNaN(parsed) ? currentPage : parsed;
		pageInput = String(target);
		goToPage(target);
		return;
	}
	if (event.key === "Escape") {
		event.preventDefault();
		(event.currentTarget as HTMLInputElement).blur();
	}
}

function handlePageBlur() {
	// 未提交就离开：恢复显示当前页，避免输入框留着无效值
	pageInput = String(currentPage);
}

onMount(() => {
	syncViewFromStorage();
	if (!viewInitialized) view = defaultView;
	updateGridColumns();
	startPinnedCarousel();
	requestAnimationFrame(() => initCoverLifecycles());
	initViews();
	void loadLibraryData();

	// 检测移动端
	const checkMobile = () => {
		isMobile = window.innerWidth < 768;
	};
	checkMobile();

	let resizeTicking = false;
	const onResize = () => {
		if (resizeTicking) return;
		resizeTicking = true;
		requestAnimationFrame(() => {
			updateGridColumns();
			checkMobile();
			resizeTicking = false;
		});
	};

	window.addEventListener("resize", onResize);
	window.addEventListener("layoutChange", handleLayoutChange);
	// 归类菜单：点外部关闭，Esc 关闭（同时清理模态框）
	document.addEventListener("pointerdown", handleDocumentPointerDown);
	document.addEventListener("keydown", handleDocumentKeyDown);

	// Swup 替换 DOM 后重新初始化（Svelte onMount 不会重新执行）
	const onSwupReplaced = () => {
		syncViewFromStorage();
		updateGridColumns();
		checkMobile();
		startPinnedCarousel();
		initCoverLifecycles();
		initViews();
		// 重置临时交互状态，避免旧菜单/弹窗挂在新页面上
		assignMenu = null;
		closeFolderModal();
		pendingCoverItemId = null;
		void loadLibraryData();
	};
	window.addEventListener("swup:content:replaced", onSwupReplaced);

	return () => {
		libraryLoadVersion += 1;
		noteCoverObjectUrls.forEach((url) => URL.revokeObjectURL(url));
		noteCoverObjectUrls = [];
		postCoverObjectUrls.forEach((url) => URL.revokeObjectURL(url));
		postCoverObjectUrls = [];
		folderCoverObjectUrls.forEach((url) => URL.revokeObjectURL(url));
		folderCoverObjectUrls = [];
		revokeFolderPreview();
		stopPinnedCarousel();
		if (coverAbortController) coverAbortController.abort();
		for (const lc of coverLifecycles) lc.dispose();
		viewCountAbort?.();
		for (const dispose of viewCountDisposers) dispose();
		viewCountDisposers = [];
		window.removeEventListener("resize", onResize);
		window.removeEventListener("layoutChange", handleLayoutChange);
		window.removeEventListener("swup:content:replaced", onSwupReplaced);
		document.removeEventListener("pointerdown", handleDocumentPointerDown);
		document.removeEventListener("keydown", handleDocumentKeyDown);
	};
});

$effect(() => {
	view;
	allPosts;
	if (typeof window !== "undefined") updateGridColumns();
});

$effect(() => {
	pinnedPosts.length;
	if (typeof window !== "undefined") {
		pinnedActiveIndex = 0;
		stopPinnedCarousel();
		startPinnedCarousel();
	}
});
</script>

{#snippet articleViews(postId: string)}
		{#if commentConfig.type === "waline" && commentConfig.waline?.visitorCount && !postId.startsWith("note-")}
		<span class="article-views" aria-label={i18n(I18nKey.pageViews)}>
			<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" /></svg>
			<span class="waline-pageview-count" data-path={`/posts/${removeFileExtension(postId)}`}></span>
		</span>
	{/if}
{/snippet}

<!-- 共享的封面选择器：正式文章与本地笔记都用它 -->
<input
	class="article-cover-file-input"
	bind:this={coverInputRef}
	type="file"
	accept="image/*"
	hidden
	onchange={handleCoverFileChange}
/>

{#if pinnedPosts.length > 0}
		<section
			class="article-list-pinned"
			aria-labelledby="article-list-pinned-title"
			bind:this={pinnedSectionRef}
			style="touch-action: pan-y;"
			onmouseenter={() => { pinnedPaused = true; stopPinnedCarousel(); }}
			onmouseleave={() => { pinnedPaused = false; startPinnedCarousel(); }}
			onfocusin={() => { pinnedPaused = true; stopPinnedCarousel(); }}
			onfocusout={() => { pinnedPaused = false; startPinnedCarousel(); }}
			onwheel={handlePinnedWheel}
			ontouchstart={handlePinnedTouchStart}
			ontouchmove={handlePinnedTouchMove}
			ontouchend={handlePinnedTouchEnd}
		>
			<div class="article-list-pinned__heading">
				<h2 id="article-list-pinned-title" class="article-list-section-title">置顶</h2>
				<div class="article-list-pinned__switch" class:is-hidden={!allowLayoutSwitch}>
					<AnimatedTabs activeTab={view} />
				</div>
			</div>
			<div
				class="article-list-pinned__collection"
				data-article-list-pinned-carousel
			>
				{#each pinnedPosts as pinnedPost, pinnedIndex (pinnedPost.id)}
					<article
						class="article-list-pinned-item"
						data-article-list-pinned-item
						hidden={pinnedIndex !== pinnedActiveIndex}
						aria-hidden={pinnedIndex !== pinnedActiveIndex}
					>
						<div class="article-list-pinned-item__content">
							<h3 class="article-list-pinned-item__title">
								<span class="article-list-pinned-item__title-text">{pinnedPost.title}</span>
							</h3>
							<div class="article-list-pinned-item__meta">
								<span
									class="article-list-pinned-item__taxonomy article-list-pinned-item__taxonomy--category"
									style={getCategoryColor(pinnedPost.category)}
								>
									{pinnedPost.category}
								</span>
								{#if import.meta.env.DEV && pinnedPost.private}
									<span class="article-private-badge" title="私密内容，生产环境不可见">
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17Zm-3-6V8q0-1.25.875-2.125T12 5q1.25 0 2.125.875T15 8v3h1q.425 0 .713.288T17 12v6q0 .425-.288.713T16 19H8q-.425 0-.713-.288T7 18v-6q0-.425.288-.713T8 11h1Zm1 0h4V8q0-.825-.588-1.413T12 6q-.825 0-1.413.588T10 8v3Z"/></svg>
										<span>私密</span>
									</span>
								{/if}
								{@render articleViews(pinnedPost.id)}
								<span class="article-list-pinned-item__meta-item">
									<svg class="article-calendar-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path fill="currentColor" fill-rule="evenodd" d="M8 4h8V2h2v2h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V2h2zM5 8v12h14V8zm2 3h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm0 4h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2H7z" /></svg>
									<time datetime={pinnedPost.publishedIso}>{pinnedPost.publishedText}</time>
								</span>
								<span class="article-list-pinned-item__meta-item">
									<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
									<span>{(pinnedPost.wordCount ?? 0).toLocaleString()} 字</span>
								</span>
								{#if pinnedPost.tags.length > 0}
									{#each pinnedPost.tags.slice(0, 3) as tag, i (tag.name)}
										<span class="article-list-pinned-item__taxonomy article-list-pinned-item__taxonomy--tag">{tag.name}</span>
									{/each}
									{#if pinnedPost.tags.length > 3}
										<span class="article-list-pinned-item__tag-overflow">+{pinnedPost.tags.length - 3}</span>
									{/if}
								{/if}
							</div>
							<p class="article-list-pinned-item__description">{pinnedPost.description}</p>
						</div>
						<div class="article-list-pinned-item__cover-wrap image-pixel-reveal-host" data-article-list-cover-wrap>
							<span class="article-list-pinned-item__cover-loader" aria-hidden="true">
								<span class="article-list-pinned-item__cover-loader-dot"></span>
								<span class="article-list-pinned-item__cover-loader-dot"></span>
								<span class="article-list-pinned-item__cover-loader-dot"></span>
								<span class="article-list-pinned-item__cover-loader-dot"></span>
							</span>
							<span class="image-pixel-reveal" data-image-pixel-reveal aria-hidden="true"></span>
							{#if pinnedPost.imageUrl}
								<img
									class="article-list-pinned-item__cover image-pixel-reveal-source"
									src={pinnedPost.imageUrl}
									alt={`置顶文章配图：${pinnedPost.title}`}
									data-article-list-cover
									data-fallback-src={pinnedPost.fallbackImageUrl ?? ""}
									data-api-urls={(pinnedPost.apiUrls ?? pinnedPost.imageApiUrls ?? []).length > 0 ? JSON.stringify(pinnedPost.apiUrls ?? pinnedPost.imageApiUrls) : undefined}
									loading={pinnedIndex === 0 ? "eager" : "lazy"}
									decoding="async"
								/>
							{:else}
								<div class="article-grid-card__image-placeholder"></div>
							{/if}
						</div>
						<a href={pinnedPost.url} class="article-list-pinned-item__surface-link" aria-label={`打开置顶文章：${pinnedPost.title}`}></a>
					</article>
				{/each}
			</div>
			{#if pinnedPosts.length > 1}
				<div class="article-list-pinned__dots" role="tablist" aria-label="置顶轮播">
					{#each pinnedPosts as _, dotIndex (dotIndex)}
						<button
							type="button"
							data-article-list-pinned-dot
							role="tab"
							aria-label={`切换到第 ${dotIndex + 1} 篇置顶`}
							aria-selected={dotIndex === pinnedActiveIndex}
							aria-current={dotIndex === pinnedActiveIndex ? "true" : undefined}
							onclick={() => goToPinned(dotIndex)}
						></button>
					{/each}
				</div>
			{/if}
		</section>
	{/if}

	<section class="article-folder-bar" aria-label="文章文件夹">
		<div class="article-folder-bar__head">
			<h2 class="article-list-section-title">文件夹</h2>
			<button type="button" class="article-folder-create" onclick={openFolderModal}>
				+ 新建文件夹
			</button>
		</div>
		<div class="article-folder-bar__list">
			<article class="article-folder-card" class:is-active={activeFolderId === "all"}>
				<button
					type="button"
					class="article-folder-card__main"
					aria-pressed={activeFolderId === "all"}
					onclick={() => selectFolder("all")}
				>
					<span class="article-folder-card__cover article-folder-card__cover--all" aria-hidden="true">▦</span>
					<span class="article-folder-card__meta">
						<span class="article-folder-card__name">全部</span>
						<span class="article-folder-card__count">{allPosts.length}</span>
					</span>
				</button>
			</article>
			{#each folders as folder (folder.id)}
				<article class="article-folder-card" class:is-active={activeFolderId === folder.id}>
					<button
						type="button"
						class="article-folder-card__main"
						aria-pressed={activeFolderId === folder.id}
						onclick={() => selectFolder(folder.id)}
					>
						<span class="article-folder-card__cover">
							{#if folderCoverUrls[folder.id]}
								<img src={folderCoverUrls[folder.id]} alt="" loading="lazy" decoding="async" />
							{:else}
								<span aria-hidden="true">▤</span>
							{/if}
						</span>
						<span class="article-folder-card__meta">
							<span class="article-folder-card__name" title={folder.name}>{folder.name}</span>
							<span class="article-folder-card__count">{folderCounts[folder.id] ?? 0}</span>
						</span>
					</button>
					<button
						type="button"
						class="article-folder-card__delete"
						aria-label={`删除文件夹：${folder.name}`}
						title="删除文件夹"
						onclick={(event) => removeFolder(event, folder)}
					>×</button>
				</article>
			{/each}
		</div>
	</section>

	{#if filteredPosts.length === 0}
		<div class="article-list-empty">
			<span class="article-list-empty__title">{activeFolderId === "all" ? "暂无文章" : "这个文件夹还没有文章"}</span>
			<span class="article-list-empty__meta">{activeFolderId === "all" ? "新的内容会显示在这里。" : "在文章卡片上点「归类」把它放进这个文件夹。"}</span>
		</div>
	{:else}
	<div
		class="article-list-virtual"
		data-view={view}
		bind:this={containerRef}
		style={`--article-list-grid-columns: ${gridColumnCount};`}
	>
		{#if view === "grid"}
		<div class="article-list-view">
			<div class="article-list-regular__toolbar" aria-label="常规文章">
				<h2 class="article-list-regular__title">文章</h2>
				<span class="article-list-regular__count">共 <strong>{regularPosts.length}</strong> 篇文章</span>
			</div>
			<div
				class="article-list-masonry"
				style="--cols: {gridColumnCount};"
				aria-label="文章卡片列表"
			>
				{#each columns as column}
					<div class="article-list-masonry__col">
						{#each column as entry (entry.post.id)}
							{@const post = entry.post}
							{@const isPinned = post.pinned}
							<article
								class="article-list-card"
								data-article-list-card
								style={`--article-category-hue: ${post.categoryHue ?? getCategoryHue(post.category)}`}
							>
								<div
									class="article-list-card__cover-wrap image-pixel-reveal-host"
									data-article-list-cover-wrap
								>
									<span class="article-list-card__cover-loader" aria-hidden="true">
										<span class="article-list-card__cover-loader-dot"></span>
										<span class="article-list-card__cover-loader-dot"></span>
										<span class="article-list-card__cover-loader-dot"></span>
										<span class="article-list-card__cover-loader-dot"></span>
									</span>
									<span class="image-pixel-reveal" data-image-pixel-reveal aria-hidden="true"></span>
									<img
										class="article-list-card__cover image-pixel-reveal-source"
										src={post.imageUrl}
										alt={`文章配图：${post.title}`}
										data-article-list-cover
										data-fallback-src={post.fallbackImageUrl ?? ""}
										data-api-urls={(post.apiUrls ?? post.imageApiUrls ?? []).length > 0 ? JSON.stringify(post.apiUrls ?? post.imageApiUrls) : undefined}
										loading="lazy"
										decoding="async"
									/>
								</div>
								<div class="article-list-card__content">
										<div class="article-list-card__title-row">
											<h3 class="article-list-card__title">
												<span class="article-list-card__title-text" title={post.title}>{post.title}</span>
											</h3>
										</div>
										<div class="article-list-card__meta">
											<span class="article-list-card__taxonomy">{post.category}</span>
											{#if import.meta.env.DEV && post.private}
												<span class="article-private-badge" title="私密内容，生产环境不可见">
													<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17Zm-3-6V8q0-1.25.875-2.125T12 5q1.25 0 2.125.875T15 8v3h1q.425 0 .713.288T17 12v6q0 .425-.288.713T16 19H8q-.425 0-.713-.288T7 18v-6q0-.425.288-.713T8 11h1Zm1 0h4V8q0-.825-.588-1.413T12 6q-.825 0-1.413.588T10 8v3Z"/></svg>
													<span>私密</span>
												</span>
											{/if}
											{@render articleViews(post.id)}
											<span class="article-list-card__meta-item">
												<svg class="article-calendar-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path fill="currentColor" fill-rule="evenodd" d="M8 4h8V2h2v2h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V2h2zM5 8v12h14V8zm2 3h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm0 4h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2H7z" /></svg>
												<time datetime={post.publishedIso}>{post.publishedText}</time>
											</span>
											<span class="article-list-card__meta-item">
												<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
												<span>{(post.wordCount ?? 0).toLocaleString()} 字</span>
											</span>
										</div>
										<div class="article-list-card__rule" aria-hidden="true"></div>
										<p class="article-list-card__description">{post.description}</p>
									</div>
									{#if import.meta.env.DEV}
									<div class="article-card-actions">
										<button
											type="button"
											class="article-card-action article-card-action--cover"
											title="为这篇文章选择本地封面"
											onclick={(event) => openCoverPicker(event, post.id)}
										>换封面</button>
										{#if hasLocalCover(post.id)}
											<button
												type="button"
												class="article-card-action article-card-action--restore"
												title="清除本地封面覆盖"
												onclick={(event) => restoreCover(event, post.id)}
											>恢复</button>
										{/if}
										<button
											type="button"
											class="article-card-action article-card-action--assign"
											title="把文章放进文件夹"
											onclick={(event) => openAssignMenu(event, post.id)}
										>归类</button>
										{#if post.id.startsWith("note-")}
											<a
												class="article-card-action"
												href={`/notes/?n=${encodeURIComponent(post.id.slice(5))}&edit=1`}
												title="到笔记页编辑这篇本地笔记"
											>编辑</a>
											<button
												type="button"
												class="article-card-action article-card-action--danger"
												onclick={(event) => removeNote(event, post.id)}
											>删除</button>
										{/if}
									</div>
									{/if}
									<a href={post.url} class="article-list-card__surface-link" aria-label={`查看文章：${post.title}`} title={post.title}></a>
								</article>
						{/each}
					</div>
				{/each}
			</div>
		</div>
		{/if}

		{#if view === "list"}
		<div class="article-list-view">
			<div class="article-list-regular__toolbar" aria-label="常规文章">
				<h2 class="article-list-regular__title">文章</h2>
				<span class="article-list-regular__count">共 <strong>{regularPosts.length}</strong> 篇文章</span>
			</div>
			<div class="article-list-vertical article-list-vertical--pinned" aria-label="文章列表">
				{#each paginatedPosts as post (post.id)}
					<article class="article-list-pinned-item article-list-row-pinned" data-article-list-pinned-item>
						<div class="article-list-pinned-item__content">
							<h3 class="article-list-pinned-item__title">
								<span class="article-list-pinned-item__title-text" title={post.title}>{post.title}</span>
							</h3>
							<div class="article-list-pinned-item__meta">
								<span class="article-list-pinned-item__taxonomy article-list-pinned-item__taxonomy--category" style={getCategoryColor(post.category)}>{post.category}</span>
								{#if import.meta.env.DEV && post.private}
									<span class="article-private-badge" title="私密内容，生产环境不可见">
										<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17q.825 0 1.413-.588T14 15q0-.825-.588-1.413T12 13q-.825 0-1.413.588T10 15q0 .825.588 1.413T12 17Zm-3-6V8q0-1.25.875-2.125T12 5q1.25 0 2.125.875T15 8v3h1q.425 0 .713.288T17 12v6q0 .425-.288.713T16 19H8q-.425 0-.713-.288T7 18v-6q0-.425.288-.713T8 11h1Zm1 0h4V8q0-.825-.588-1.413T12 6q-.825 0-1.413.588T10 8v3Z"/></svg>
										<span>私密</span>
									</span>
								{/if}
								{@render articleViews(post.id)}
								<span class="article-list-pinned-item__meta-item">
									<svg class="article-calendar-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path fill="currentColor" fill-rule="evenodd" d="M8 4h8V2h2v2h1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1V2h2zM5 8v12h14V8zm2 3h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2zm0 4h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2H7z" /></svg>
									<time datetime={post.publishedIso}>{post.publishedText}</time>
								</span>
								<span class="article-list-pinned-item__meta-item">
									<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
									<span>{(post.wordCount ?? 0).toLocaleString()} 字</span>
								</span>
								{#if post.tags.length > 0}
									{#each post.tags.slice(0, 3) as tag (tag.name)}
										<span class="article-list-pinned-item__taxonomy article-list-pinned-item__taxonomy--tag">{tag.name}</span>
									{/each}
									{#if post.tags.length > 3}
										<span class="article-list-pinned-item__tag-overflow">+{post.tags.length - 3}</span>
									{/if}
								{/if}
							</div>
							<p class="article-list-pinned-item__description">{post.description}</p>
						</div>
						<div class="article-list-pinned-item__cover-wrap image-pixel-reveal-host" data-article-list-cover-wrap aria-hidden="true">
							<span class="article-list-card__cover-loader" aria-hidden="true">
								<span class="article-list-card__cover-loader-dot"></span>
								<span class="article-list-card__cover-loader-dot"></span>
								<span class="article-list-card__cover-loader-dot"></span>
								<span class="article-list-card__cover-loader-dot"></span>
							</span>
							<span class="image-pixel-reveal" data-image-pixel-reveal aria-hidden="true"></span>
							{#if post.imageUrl}
								<img class="article-list-pinned-item__cover image-pixel-reveal-source" src={post.imageUrl} alt="" loading="lazy" decoding="async" data-article-list-cover data-fallback-src={post.fallbackImageUrl ?? ""} data-api-urls={(post.apiUrls ?? post.imageApiUrls ?? []).length > 0 ? JSON.stringify(post.apiUrls ?? post.imageApiUrls) : undefined} />
							{:else}
								<div class="article-list-pinned-item__cover" style="background: var(--btn-plain-bg-hover);"></div>
							{/if}
						</div>
						{#if import.meta.env.DEV}
						<div class="article-card-actions article-card-actions--row">
							<button
								type="button"
								class="article-card-action article-card-action--cover"
								title="为这篇文章选择本地封面"
								onclick={(event) => openCoverPicker(event, post.id)}
							>换封面</button>
							{#if hasLocalCover(post.id)}
								<button
									type="button"
									class="article-card-action article-card-action--restore"
									title="清除本地封面覆盖"
									onclick={(event) => restoreCover(event, post.id)}
								>恢复</button>
							{/if}
							<button
								type="button"
								class="article-card-action article-card-action--assign"
								title="把文章放进文件夹"
								onclick={(event) => openAssignMenu(event, post.id)}
							>归类</button>
							{#if post.id.startsWith("note-")}
								<a
									class="article-card-action"
									href={`/notes/?n=${encodeURIComponent(post.id.slice(5))}&edit=1`}
									title="到笔记页编辑这篇本地笔记"
								>编辑</a>
								<button
									type="button"
									class="article-card-action article-card-action--danger"
									onclick={(event) => removeNote(event, post.id)}
								>删除</button>
							{/if}
						</div>
						{/if}
						<a href={post.url} class="article-list-pinned-item__surface-link" aria-label={`查看文章：${post.title}`} title={post.title}></a>
					</article>
				{/each}
			</div>
		</div>
		{/if}
	</div>

	{#if totalPages > 1}
		<div class="article-list-pagination">
			<div class="article-list-pagination__inner article-list-pagination__inner--simple">
				<button
					type="button"
					class="article-list-pagination__btn"
					disabled={currentPage === 1}
					aria-label="上一页"
					onclick={() => goToPage(currentPage - 1)}
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
				</button>

				<div class="bg-[var(--card-bg)] flex items-center rounded-[0.5rem] px-3.5 h-11 gap-1 border border-dashed border-[var(--line-divider)] shadow-sm transition-colors focus-within:border-[var(--primary)]">
					<input
						class="article-list-pagination__input tabular-nums"
						type="text"
						inputmode="numeric"
						autocomplete="off"
						aria-label="输入页码后回车跳转"
						title="输入页码后回车跳转；留空回车跳到最后页"
						value={pageInput}
						oninput={handlePageInput}
						onkeydown={handlePageKeyDown}
						onfocus={handlePageFocus}
						onblur={handlePageBlur}
					/>
					<span class="text-sm text-[var(--content-meta)]">/</span>
					<span class="text-sm font-bold text-[var(--content-meta)] tabular-nums">{totalPages}</span>
				</div>

				<button
					type="button"
					class="article-list-pagination__btn"
					disabled={currentPage === totalPages}
					aria-label="下一页"
					onclick={() => goToPage(currentPage + 1)}
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
				</button>
			</div>
		</div>
		{/if}
	{/if}

{#if assignMenu}
	{@const menuItemId = assignMenu.itemId}
	{@const currentFolderId = assignments[menuItemId] ?? ""}
	<div
		class="article-folder-menu"
		role="menu"
		aria-label="移动到文件夹"
		style={`top: ${assignMenu.y}px; left: ${assignMenu.x}px;`}
	>
		<div class="article-folder-menu__title">移动到文件夹</div>
		{#if currentFolderId}
			<button
				type="button"
				class="article-folder-menu__item"
				role="menuitem"
				onclick={() => moveItemToFolder(menuItemId, null)}
			>移出文件夹</button>
		{/if}
		{#each folders as folder (folder.id)}
			<button
				type="button"
				class="article-folder-menu__item"
				class:is-active={currentFolderId === folder.id}
				role="menuitem"
				onclick={() => moveItemToFolder(menuItemId, folder.id)}
			>
				<span class="article-folder-menu__name">{folder.name}</span>
				<span class="article-folder-menu__count">{folderCounts[folder.id] ?? 0}</span>
			</button>
		{/each}
		{#if folders.length === 0}
			<span class="article-folder-menu__hint">还没有文件夹，先点上方「新建文件夹」。</span>
		{/if}
	</div>
{/if}

{#if showFolderModal}
	<div class="article-folder-modal">
		<button
			type="button"
			class="article-folder-modal__backdrop"
			aria-label="关闭新建文件夹"
			onclick={closeFolderModal}
		></button>
		<form class="article-folder-modal__card" onsubmit={submitFolder}>
			<div class="article-folder-modal__head">
				<h3 class="article-folder-modal__title">新建文件夹</h3>
				<button
					type="button"
					class="article-folder-modal__close"
					aria-label="关闭"
					onclick={closeFolderModal}
				>×</button>
			</div>
			<label class="article-folder-modal__field">
				<span>名称</span>
				<input
					class="article-folder-modal__input"
					type="text"
					value={folderName}
					oninput={handleFolderNameInput}
					placeholder="例如：技术分享"
					maxlength="40"
					required
				/>
			</label>
			<label class="article-folder-modal__field">
				<span>封面（可选）</span>
				<input
					class="article-folder-modal__input article-folder-modal__file"
					type="file"
					accept="image/*"
					onchange={handleFolderCoverChange}
				/>
			</label>
			{#if folderCoverPreviewUrl}
				<img
					class="article-folder-modal__preview"
					src={folderCoverPreviewUrl}
					alt="文件夹封面预览"
				/>
			{:else}
				<div class="article-folder-modal__preview article-folder-modal__preview--empty">
					未选择封面
				</div>
			{/if}
			<div class="article-folder-modal__actions">
				<button type="button" class="article-folder-modal__btn" onclick={closeFolderModal}>取消</button>
				<button
					type="submit"
					class="article-folder-modal__btn article-folder-modal__btn--primary"
					disabled={folderSaving || !folderName.trim()}
				>{folderSaving ? "创建中…" : "创建"}</button>
			</div>
		</form>
	</div>
{/if}
