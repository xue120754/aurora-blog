/**
 * 自定义壁纸（浏览器本地）
 *
 * 站点是纯静态的，没有后端，所以「在网页里换壁纸」的做法是：
 * 把上传的图片存进 IndexedDB，页面加载时替换对应壁纸层。
 * - site：全站壁纸层（非首页）
 * - home：首页 Hero 背景
 * 两类壁纸互不影响；只影响当前浏览器，换设备/清缓存后恢复默认壁纸。
 */

type WallpaperScope = "site" | "home";

const DB_NAME = "aurora-wallpaper";
const STORE = "wallpaper";
const SCOPE_KEY: Record<WallpaperScope, string> = {
	site: "custom",
	home: "custom-home",
};
const SCOPE_FLAG: Record<WallpaperScope, string> = {
	site: "customWallpaper",
	home: "customHomeWallpaper",
};
const SCOPE_SELECTOR: Record<WallpaperScope, string> = {
	site: "#aurora-wallpaper picture",
	home: ".home-hero__video-picture",
};
const SCOPE_LABEL: Record<WallpaperScope, string> = {
	site: "全站壁纸",
	home: "首页壁纸",
};

interface WallpaperRecord {
	key: string;
	name: string;
	type: string;
	blob: Blob;
	updatedAt: number;
}

const objectUrls: Record<WallpaperScope, string | null> = {
	site: null,
	home: null,
};

function normalizeScope(value?: string | null): WallpaperScope {
	return value === "home" ? "home" : "site";
}

function openDB(): Promise<IDBDatabase> {
	return new Promise((resolve, reject) => {
		const req = indexedDB.open(DB_NAME, 1);
		req.onupgradeneeded = () => {
			const db = req.result;
			if (!db.objectStoreNames.contains(STORE)) {
				db.createObjectStore(STORE, { keyPath: "key" });
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

async function readRecord(
	scope: WallpaperScope,
): Promise<WallpaperRecord | null> {
	try {
		const db = await openDB();
		const store = db.transaction(STORE, "readonly").objectStore(STORE);
		const record = await requestToPromise(
			store.get(SCOPE_KEY[scope]) as IDBRequest<WallpaperRecord | undefined>,
		);
		return record ?? null;
	} catch {
		return null;
	}
}

export function hasCustomWallpaperFlag(
	scope: WallpaperScope = "site",
): boolean {
	try {
		return localStorage.getItem(SCOPE_FLAG[scope]) === "1";
	} catch {
		return false;
	}
}

/** 保存上传的壁纸（同时写一个 localStorage 标记，用于跳过对应默认壁纸） */
export async function saveCustomWallpaper(
	file: File,
	scope: WallpaperScope = "site",
): Promise<void> {
	const targetScope = normalizeScope(scope);
	const db = await openDB();
	const store = db.transaction(STORE, "readwrite").objectStore(STORE);
	await requestToPromise(
		store.put({
			key: SCOPE_KEY[targetScope],
			name: file.name,
			type: file.type || "image/jpeg",
			blob: file,
			updatedAt: Date.now(),
		} satisfies WallpaperRecord),
	);
	try {
		localStorage.setItem(SCOPE_FLAG[targetScope], "1");
	} catch {
		// 忽略隐私模式下的存储限制
	}
	revokeCache(targetScope);
}

async function clearCustomWallpaper(
	scope: WallpaperScope = "site",
): Promise<void> {
	revokeCache(scope);
	try {
		const db = await openDB();
		const store = db.transaction(STORE, "readwrite").objectStore(STORE);
		await requestToPromise(store.delete(SCOPE_KEY[scope]));
	} catch {
		// 忽略
	}
	try {
		localStorage.removeItem(SCOPE_FLAG[scope]);
	} catch {
		// 忽略
	}
}

function revokeCache(scope?: WallpaperScope) {
	const scopes: WallpaperScope[] = scope ? [scope] : ["site", "home"];
	scopes.forEach((item) => {
		if (objectUrls[item]) {
			URL.revokeObjectURL(objectUrls[item] as string);
			objectUrls[item] = null;
		}
	});
}

async function getObjectUrl(scope: WallpaperScope): Promise<string | null> {
	if (objectUrls[scope]) return objectUrls[scope];
	const record = await readRecord(scope);
	if (!record?.blob) return null;
	objectUrls[scope] = URL.createObjectURL(record.blob);
	return objectUrls[scope];
}

function applyScope(scope: WallpaperScope, url: string) {
	document
		.querySelectorAll<HTMLPictureElement>(SCOPE_SELECTOR[scope])
		.forEach((picture) => {
			const img = picture.querySelector("img");
			const source = picture.querySelector("source");
			const video = picture.querySelector("video");
			// 首页可能正在播放动态壁纸，上传自定义图后停掉并让出背景层
			if (video) {
				video.pause();
				video.style.display = "none";
			}
			if (img) img.style.display = "";
			if (img && img.getAttribute("src") !== url) {
				img.src = url;
				img.style.opacity = "";
			}
			if (source) source.srcset = url;
		});
}

/** 把自定义壁纸写到对应壁纸层（没有自定义壁纸时不动） */
export async function applyCustomWallpaper(): Promise<void> {
	const scopes: WallpaperScope[] = ["site", "home"];
	await Promise.all(
		scopes.map(async (scope) => {
			if (!hasCustomWallpaperFlag(scope)) return;
			const url = await getObjectUrl(scope);
			if (url) applyScope(scope, url);
		}),
	);
}

function triggerDefaultWallpaperRefresh() {
	// 亮暗主题的默认壁纸逻辑都监听根元素 class 变化；
	// 无闪烁地触发一次同状态 class 切换，让默认壁纸重新接管。
	requestAnimationFrame(() => {
		const root = document.documentElement;
		const dark = root.classList.contains("dark");
		root.classList.toggle("dark", !dark);
		root.classList.toggle("dark", dark);
	});
}

/** 恢复默认壁纸：清掉指定范围（默认全部）的本地自定义图并写回默认图 */
export async function resetCustomWallpaper(
	scope: WallpaperScope | "all" = "all",
): Promise<void> {
	const scopes: WallpaperScope[] =
		scope === "all" ? ["site", "home"] : [normalizeScope(scope)];
	await Promise.all(scopes.map((item) => clearCustomWallpaper(item)));
	triggerDefaultWallpaperRefresh();
}

export function getWallpaperScopeLabel(scope: WallpaperScope): string {
	return SCOPE_LABEL[scope];
}
