/**
 * 本地说说 / 相册照片存储（浏览器 IndexedDB）
 *
 * 站点是纯静态的，没有后端；用户在本机发表的说说、上传的相册照片都存进浏览器
 * IndexedDB（与 /notes/ 的本地笔记方案一致），只在当前浏览器可见。
 */

export interface LocalMoment {
	id: string;
	body: string;
	tags: string[];
	/** 原图，直接存 Blob 数组 */
	images: Blob[];
	createdAt: number;
	/** 仅自己可见：导出为 md 时写入 frontmatter 的 private: true，构建后生产环境不公开 */
	private?: boolean;
}

export interface LocalPhoto {
	id: string;
	name: string;
	tags: string[];
	blob: Blob;
	createdAt: number;
}

const DB_NAME = "aurora-social";
const DB_VERSION = 1;
const MOMENTS = "moments";
const PHOTOS = "photos";

function openDB(): Promise<IDBDatabase> {
	return new Promise((resolve, reject) => {
		if (typeof indexedDB === "undefined") {
			reject(new Error("当前环境不支持 IndexedDB"));
			return;
		}
		const req = indexedDB.open(DB_NAME, DB_VERSION);
		req.onupgradeneeded = () => {
			const db = req.result;
			if (!db.objectStoreNames.contains(MOMENTS)) {
				const store = db.createObjectStore(MOMENTS, { keyPath: "id" });
				store.createIndex("createdAt", "createdAt");
			}
			if (!db.objectStoreNames.contains(PHOTOS)) {
				const store = db.createObjectStore(PHOTOS, { keyPath: "id" });
				store.createIndex("createdAt", "createdAt");
			}
		};
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error ?? new Error("打开本地数据库失败"));
	});
}

function requestToPromise<T>(req: IDBRequest<T>): Promise<T> {
	return new Promise((resolve, reject) => {
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error);
	});
}

/** 全部本地说说，按发表时间倒序 */
export async function listLocalMoments(): Promise<LocalMoment[]> {
	const db = await openDB();
	const store = db.transaction(MOMENTS, "readonly").objectStore(MOMENTS);
	const all = await requestToPromise(store.getAll() as IDBRequest<LocalMoment[]>);
	return all.sort((a, b) => b.createdAt - a.createdAt);
}

export async function saveLocalMoment(moment: LocalMoment): Promise<void> {
	const db = await openDB();
	const store = db.transaction(MOMENTS, "readwrite").objectStore(MOMENTS);
	await requestToPromise(store.put(moment));
}

export async function deleteLocalMoment(id: string): Promise<void> {
	const db = await openDB();
	const store = db.transaction(MOMENTS, "readwrite").objectStore(MOMENTS);
	await requestToPromise(store.delete(id));
}

/** 全部本地上传的相册照片，按上传时间倒序 */
export async function listLocalPhotos(): Promise<LocalPhoto[]> {
	const db = await openDB();
	const store = db.transaction(PHOTOS, "readonly").objectStore(PHOTOS);
	const all = await requestToPromise(store.getAll() as IDBRequest<LocalPhoto[]>);
	return all.sort((a, b) => b.createdAt - a.createdAt);
}

export async function saveLocalPhoto(photo: LocalPhoto): Promise<void> {
	const db = await openDB();
	const store = db.transaction(PHOTOS, "readwrite").objectStore(PHOTOS);
	await requestToPromise(store.put(photo));
}

export async function deleteLocalPhoto(id: string): Promise<void> {
	const db = await openDB();
	const store = db.transaction(PHOTOS, "readwrite").objectStore(PHOTOS);
	await requestToPromise(store.delete(id));
}

/** 生成本地记录 id（前缀 + 时间戳 + 随机串，避免同一毫秒内重复） */
export function createLocalId(prefix: string): string {
	const random = Math.random().toString(36).slice(2, 8);
	return `${prefix}-${Date.now().toString(36)}-${random}`;
}
