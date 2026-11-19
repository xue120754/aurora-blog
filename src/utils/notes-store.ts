/**
 * 本地笔记存储（浏览器 IndexedDB）
 *
 * 站点是纯静态的，浏览器没有写项目目录的权限，所以 Typora 里导出的 md 先存进
 * IndexedDB，在 /notes/ 里直接阅读；需要沉淀成正式文章时用页面上的「导出 md」
 * 把文件下载下来，自己放进 src/content/文章/ 再构建。
 */

export interface NoteRecord {
	/** 文件名（去扩展名），重复导入同一文件会覆盖 */
	id: string;
	/** 展示标题：frontmatter.title → 正文第一个 H1 → 文件名 */
	title: string;
	/** 原始 md（含 frontmatter），导出时原样写回 */
	raw: string;
	/** 去掉 frontmatter 的正文 */
	body: string;
	/** 字数（中文按字、英文按词） */
	words: number;
	/** 封面文件名，对应 images 仓库里的图片；同时写入 frontmatter.image */
	cover?: string;
	tags: string[];
	createdAt: number;
	updatedAt: number;
}

export interface NoteImage {
	/** `${noteId}::${文件名}`，同一篇笔记重复上传同名图片会覆盖 */
	key: string;
	noteId: string;
	/** 小写文件名，渲染时用于匹配 md 里的相对图片路径 */
	name: string;
	type: string;
	blob: Blob;
	updatedAt: number;
}

const DB_NAME = "aurora-notes";
const DB_VERSION = 2;
const STORE = "notes";
const IMAGES = "images";

function openDB(): Promise<IDBDatabase> {
	return new Promise((resolve, reject) => {
		const req = indexedDB.open(DB_NAME, DB_VERSION);
		req.onupgradeneeded = () => {
			const db = req.result;
			if (!db.objectStoreNames.contains(STORE)) {
				const store = db.createObjectStore(STORE, { keyPath: "id" });
				store.createIndex("updatedAt", "updatedAt");
			}
			if (!db.objectStoreNames.contains(IMAGES)) {
				const store = db.createObjectStore(IMAGES, { keyPath: "key" });
				store.createIndex("noteId", "noteId");
			}
		};
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});
}

function requestToPromise<T>(req: IDBRequest<T>): Promise<T> {
	return new Promise((resolve, reject) => {
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});
}

export async function listNotes(): Promise<NoteRecord[]> {
	const db = await openDB();
	const store = db.transaction(STORE, "readonly").objectStore(STORE);
	const all = await requestToPromise(store.getAll() as IDBRequest<NoteRecord[]>);
	return all.sort((a, b) => b.updatedAt - a.updatedAt);
}

export async function saveNote(note: NoteRecord): Promise<void> {
	const db = await openDB();
	const store = db.transaction(STORE, "readwrite").objectStore(STORE);
	await requestToPromise(store.put(note));
}

export async function deleteNote(id: string): Promise<void> {
	const db = await openDB();
	const store = db.transaction(STORE, "readwrite").objectStore(STORE);
	await requestToPromise(store.delete(id));
	await deleteImagesForNote(id, db);
}

/** 从文件名或 Markdown 图片路径中取出用于匹配的小写文件名。 */
export function normalizeNoteImageName(source: string): string {
	const path = source.split(/[?#]/)[0].replace(/\\/g, "/");
	let decoded = path;
	try {
		decoded = decodeURIComponent(path);
	} catch {
		// 路径里有未转义的 % 时仍按原始文件名匹配
	}
	return (decoded.split("/").pop() ?? "").trim().toLowerCase();
}

/** 保存笔记内引用的本地图片（按文件名匹配 md 里的相对路径） */
export async function saveNoteImages(noteId: string, files: File[]): Promise<number> {
	const images = files.filter(
		(file) => file.type.startsWith("image/") || /\.(png|jpe?g|gif|webp|avif|svg|bmp)$/i.test(file.name),
	);
	if (images.length === 0) return 0;

	const db = await openDB();
	const store = db.transaction(IMAGES, "readwrite").objectStore(IMAGES);
	const now = Date.now();
	for (const file of images) {
		const name = normalizeNoteImageName(file.name);
		await requestToPromise(
			store.put({
				key: `${noteId}::${name}`,
				noteId,
				name,
				type: file.type || "application/octet-stream",
				blob: file,
				updatedAt: now,
			} satisfies NoteImage),
		);
	}
	return images.length;
}

export async function listNoteImages(noteId: string): Promise<NoteImage[]> {
	const db = await openDB();
	const store = db.transaction(IMAGES, "readonly").objectStore(IMAGES);
	const index = store.index("noteId");
	return requestToPromise(index.getAll(noteId) as IDBRequest<NoteImage[]>);
}

export async function getNoteImage(
	noteId: string,
	name: string,
): Promise<NoteImage | undefined> {
	const images = await listNoteImages(noteId);
	const normalized = normalizeNoteImageName(name);
	return images.find((image) => normalizeNoteImageName(image.name) === normalized);
}

export async function deleteImagesForNote(noteId: string, db?: IDBDatabase): Promise<void> {
	const database = db ?? (await openDB());
	if (!database.objectStoreNames.contains(IMAGES)) return;

	await new Promise<void>((resolve, reject) => {
		const tx = database.transaction(IMAGES, "readwrite");
		const store = tx.objectStore(IMAGES);
		const index = store.index("noteId");
		const req = index.openKeyCursor(IDBKeyRange.only(noteId));
		req.onsuccess = () => {
			const cursor = req.result;
			if (cursor) {
				store.delete(cursor.primaryKey);
				cursor.continue();
			}
		};
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
		tx.onabort = () => reject(tx.error);
	});
}

/** 极简 frontmatter 解析：只认 `---` 包裹的 `key: value` 行 */
function parseFrontmatter(raw: string): {
	data: Record<string, string | string[]>;
	body: string;
} {
	const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
	if (!match) return { data: {}, body: raw };

	const data: Record<string, string | string[]> = {};
	for (const line of match[1].split(/\r?\n/)) {
		const kv = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
		if (!kv) continue;
		const key = kv[1];
		const value = kv[2].trim().replace(/^["']|["']$/g, "");
		if (value.startsWith("[") && value.endsWith("]")) {
			data[key] = value
				.slice(1, -1)
				.split(",")
				.map((v) => v.trim().replace(/^["']|["']$/g, ""))
				.filter(Boolean);
		} else if (value) {
			data[key] = value;
		}
	}
	return { data, body: raw.slice(match[0].length) };
}

function stripMarkdown(text: string): string {
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

export function countWords(text: string): number {
	const plain = stripMarkdown(text);
	const cjk = plain.match(/[\u4e00-\u9fa5]/g)?.length ?? 0;
	const latin = plain.match(/[A-Za-z0-9]+/g)?.length ?? 0;
	return cjk + latin;
}

/** 把上传的文件解析成一条笔记记录 */
export function parseNoteFile(fileName: string, raw: string): NoteRecord {
	const id = fileName.replace(/\.(md|markdown)$/i, "") || "未命名笔记";
	const { data, body } = parseFrontmatter(raw);

	const fmTitle = typeof data.title === "string" ? data.title : "";
	const h1 = body.match(/^\s*#\s+(.+)$/m)?.[1]?.trim() ?? "";
	const title = fmTitle || h1 || id;

	let tags: string[] = [];
	if (Array.isArray(data.tags)) tags = data.tags;
	else if (typeof data.tags === "string") {
		tags = data.tags
			.split(/[,，\s]+/)
			.map((t) => t.replace(/^#/, "").trim())
			.filter(Boolean);
	}

	const now = Date.now();
	const cover =
		typeof data.image === "string"
			? data.image
			: typeof data.cover === "string"
				? data.cover
				: "";
	return {
		id,
		title,
		raw,
		body,
		words: countWords(body),
		...(cover ? { cover } : {}),
		tags,
		createdAt: now,
		updatedAt: now,
	};
}

/** 编辑器保存时用：按给定 id 与原始 md 生成记录（保留创建时间） */
export function composeNote(id: string, raw: string, createdAt?: number): NoteRecord {
	const base = parseNoteFile(`${id}.md`, raw);
	const now = Date.now();
	return {
		...base,
		id,
		createdAt: createdAt ?? now,
		updatedAt: now,
	};
}
