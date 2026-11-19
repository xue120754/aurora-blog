/**
 * 文章列表的本地资料库（浏览器 IndexedDB）
 *
 * 站点是纯静态的，文件夹归类、单篇封面覆盖这些「个人整理」数据没有后端可存，
 * 统一放在 aurora-library 里，与 /notes/ 的 aurora-notes 相互独立：
 * - 正式文章：条目 id 就是文章 entry id；
 * - 本地笔记：条目 id 形如 `note-<笔记id>`。
 */

export interface LibraryFolder {
	/** 文件夹 id，由 createFolderId() 生成 */
	id: string;
	name: string;
	/** 文件夹封面（可选，直接存 Blob） */
	cover: Blob | null;
	createdAt: number;
}

export interface LibraryAssignment {
	/** 正式文章 entry id 或 `note-<笔记id>` */
	itemId: string;
	folderId: string;
}

export interface LibraryPostCover {
	/** 正式文章 entry id 或 `note-<笔记id>` */
	itemId: string;
	blob: Blob;
	updatedAt: number;
}

const DB_NAME = "aurora-library";
const DB_VERSION = 1;
const FOLDERS = "folders";
const ASSIGNMENTS = "assignments";
const COVERS = "covers";

function openDB(): Promise<IDBDatabase> {
	return new Promise((resolve, reject) => {
		if (typeof indexedDB === "undefined") {
			reject(new Error("当前环境不支持 IndexedDB"));
			return;
		}
		const req = indexedDB.open(DB_NAME, DB_VERSION);
		req.onupgradeneeded = () => {
			const db = req.result;
			if (!db.objectStoreNames.contains(FOLDERS)) {
				db.createObjectStore(FOLDERS, { keyPath: "id" });
			}
			if (!db.objectStoreNames.contains(ASSIGNMENTS)) {
				const store = db.createObjectStore(ASSIGNMENTS, {
					keyPath: "itemId",
				});
				// 删除文件夹时按 folderId 游标清理分配关系
				store.createIndex("folderId", "folderId");
			}
			if (!db.objectStoreNames.contains(COVERS)) {
				db.createObjectStore(COVERS, { keyPath: "itemId" });
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

/** 读取失败时一律返回空数组，避免列表页因为本地库被禁用而白屏 */
export async function listFolders(): Promise<LibraryFolder[]> {
	try {
		const db = await openDB();
		const store = db.transaction(FOLDERS, "readonly").objectStore(FOLDERS);
		const all = await requestToPromise(
			store.getAll() as IDBRequest<LibraryFolder[]>,
		);
		return all.sort((a, b) => a.createdAt - b.createdAt);
	} catch {
		return [];
	}
}

export async function saveFolder(folder: LibraryFolder): Promise<void> {
	const db = await openDB();
	const store = db.transaction(FOLDERS, "readwrite").objectStore(FOLDERS);
	await requestToPromise(store.put(folder));
}

/** 删除文件夹，同时清掉该文件夹下的所有归类关系 */
export async function deleteFolder(id: string): Promise<void> {
	const db = await openDB();
	await new Promise<void>((resolve, reject) => {
		const tx = db.transaction([FOLDERS, ASSIGNMENTS], "readwrite");
		tx.objectStore(FOLDERS).delete(id);
		const assignments = tx.objectStore(ASSIGNMENTS);
		const index = assignments.index("folderId");
		const req = index.openKeyCursor(IDBKeyRange.only(id));
		req.onsuccess = () => {
			const cursor = req.result;
			if (cursor) {
				assignments.delete(cursor.primaryKey);
				cursor.continue();
			}
		};
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
		tx.onabort = () => reject(tx.error);
	});
}

export async function listAssignments(): Promise<LibraryAssignment[]> {
	try {
		const db = await openDB();
		const store = db
			.transaction(ASSIGNMENTS, "readonly")
			.objectStore(ASSIGNMENTS);
		return await requestToPromise(
			store.getAll() as IDBRequest<LibraryAssignment[]>,
		);
	} catch {
		return [];
	}
}

export async function setAssignment(
	itemId: string,
	folderId: string,
): Promise<void> {
	const db = await openDB();
	const store = db
		.transaction(ASSIGNMENTS, "readwrite")
		.objectStore(ASSIGNMENTS);
	await requestToPromise(
		store.put({ itemId, folderId } satisfies LibraryAssignment),
	);
}

export async function clearAssignment(itemId: string): Promise<void> {
	const db = await openDB();
	const store = db
		.transaction(ASSIGNMENTS, "readwrite")
		.objectStore(ASSIGNMENTS);
	await requestToPromise(store.delete(itemId));
}

export async function listPostCovers(): Promise<LibraryPostCover[]> {
	try {
		const db = await openDB();
		const store = db.transaction(COVERS, "readonly").objectStore(COVERS);
		return await requestToPromise(
			store.getAll() as IDBRequest<LibraryPostCover[]>,
		);
	} catch {
		return [];
	}
}

export async function setPostCover(itemId: string, blob: Blob): Promise<void> {
	const db = await openDB();
	const store = db.transaction(COVERS, "readwrite").objectStore(COVERS);
	await requestToPromise(
		store.put({
			itemId,
			blob,
			updatedAt: Date.now(),
		} satisfies LibraryPostCover),
	);
}

export async function clearPostCover(itemId: string): Promise<void> {
	const db = await openDB();
	const store = db.transaction(COVERS, "readwrite").objectStore(COVERS);
	await requestToPromise(store.delete(itemId));
}

/** 删除一条条目的全部本地整理数据（归类 + 封面覆盖），笔记被删除时调用 */
export async function deleteItemData(itemId: string): Promise<void> {
	const db = await openDB();
	await new Promise<void>((resolve, reject) => {
		const tx = db.transaction([ASSIGNMENTS, COVERS], "readwrite");
		tx.objectStore(ASSIGNMENTS).delete(itemId);
		tx.objectStore(COVERS).delete(itemId);
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error);
		tx.onabort = () => reject(tx.error);
	});
}

export function createFolderId(): string {
	return `folder-${Date.now().toString(36)}-${Math.random()
		.toString(36)
		.slice(2, 8)}`;
}
