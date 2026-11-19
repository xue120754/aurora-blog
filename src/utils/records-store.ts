/**
 * 记录板块的本地存储（浏览器 IndexedDB）
 *
 * 站点是纯静态的，新增的书架书籍与学习日志只保存在当前浏览器里，不引入后端。
 * 数据库 `aurora-records` 统一管理：
 * - books：书架里手动添加的书籍（封面以 Blob 保存）
 * - studyLogs：学习日志正文与总结
 * - studyImages：学习日志图片，按 `entryId` 关联
 */

export interface ManualBook {
	id: string;
	title: string;
	cover: Blob | null;
	/** 可选，默认为 "#" */
	link: string;
	/** 1 想读 / 2 读过 / 3 在读 / 4 搁置 / 5 抛弃 */
	status: number;
	/** 0-10，允许小数 */
	score: number;
	/** 手动书籍默认 "未分类" */
	category: string;
	createdAt: number;
	updatedAt: number;
}

export interface StudyLog {
	id: string;
	title: string;
	/** 学习内容，纯文本 */
	content: string;
	/** 学习总结，纯文本 */
	summary: string;
	/** 封面图（本地图片，存在当前浏览器里） */
	cover: Blob | null;
	createdAt: number;
	updatedAt: number;
}

export interface StudyImage {
	/** `${entryId}::${文件名}`，同一日志重复上传同名图片会覆盖 */
	key: string;
	entryId: string;
	/** 文件名 */
	name: string;
	type: string;
	blob: Blob;
	updatedAt: number;
}

const DB_NAME = "aurora-records";
const DB_VERSION = 1;
const BOOKS = "books";
const STUDY_LOGS = "studyLogs";
const STUDY_IMAGES = "studyImages";

function openDB(): Promise<IDBDatabase> {
	return new Promise((resolve, reject) => {
		if (typeof indexedDB === "undefined") {
			reject(new Error("当前浏览器不支持 IndexedDB"));
			return;
		}

		const req = indexedDB.open(DB_NAME, DB_VERSION);
		req.onupgradeneeded = () => {
			const db = req.result;
			if (!db.objectStoreNames.contains(BOOKS)) {
				const store = db.createObjectStore(BOOKS, { keyPath: "id" });
				store.createIndex("createdAt", "createdAt");
			}
			if (!db.objectStoreNames.contains(STUDY_LOGS)) {
				const store = db.createObjectStore(STUDY_LOGS, { keyPath: "id" });
				store.createIndex("updatedAt", "updatedAt");
			}
			if (!db.objectStoreNames.contains(STUDY_IMAGES)) {
				const store = db.createObjectStore(STUDY_IMAGES, { keyPath: "key" });
				store.createIndex("entryId", "entryId");
			}
		};
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error ?? new Error("无法打开本地数据库"));
		req.onblocked = () => reject(new Error("本地数据库被其它标签页占用"));
	});
}

function requestToPromise<T>(req: IDBRequest<T>): Promise<T> {
	return new Promise((resolve, reject) => {
		req.onsuccess = () => resolve(req.result);
		req.onerror = () => reject(req.error ?? new Error("本地数据库操作失败"));
	});
}

/** 生成一条新记录的 id（优先使用 crypto.randomUUID） */
export function createRecordId(): string {
	if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
		return crypto.randomUUID();
	}
	return `rec-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

/* ── 手动书籍 ── */

export async function listManualBooks(): Promise<ManualBook[]> {
	const db = await openDB();
	const store = db.transaction(BOOKS, "readonly").objectStore(BOOKS);
	const all = await requestToPromise(store.getAll() as IDBRequest<ManualBook[]>);
	return all.sort((a, b) => b.createdAt - a.createdAt);
}

export async function saveManualBook(book: ManualBook): Promise<void> {
	const db = await openDB();
	const store = db.transaction(BOOKS, "readwrite").objectStore(BOOKS);
	await requestToPromise(store.put(book));
}

export async function deleteManualBook(id: string): Promise<void> {
	const db = await openDB();
	const store = db.transaction(BOOKS, "readwrite").objectStore(BOOKS);
	await requestToPromise(store.delete(id));
}

/* ── 学习日志 ── */

export async function listStudyLogs(): Promise<StudyLog[]> {
	const db = await openDB();
	const store = db.transaction(STUDY_LOGS, "readonly").objectStore(STUDY_LOGS);
	const all = await requestToPromise(store.getAll() as IDBRequest<StudyLog[]>);
	return all.sort((a, b) => b.updatedAt - a.updatedAt);
}

export async function saveStudyLog(log: StudyLog): Promise<void> {
	const db = await openDB();
	const store = db.transaction(STUDY_LOGS, "readwrite").objectStore(STUDY_LOGS);
	await requestToPromise(store.put(log));
}

/** 删除学习日志，同时删除它关联的图片 */
export async function deleteStudyLog(id: string): Promise<void> {
	const db = await openDB();
	const store = db.transaction(STUDY_LOGS, "readwrite").objectStore(STUDY_LOGS);
	await requestToPromise(store.delete(id));
	await deleteStudyImages(id);
}

/* ── 学习日志图片 ── */

/** 从文件名中取出最后一段，避免带路径的名字生成奇怪的 key */
function normalizeFileName(source: string): string {
	const name = source.split(/[\\/]/).pop()?.trim() ?? "";
	return name || "image";
}

/** 保存日志图片；同一日志下同名文件会覆盖旧图 */
export async function saveStudyImages(entryId: string, files: File[]): Promise<number> {
	const images = files.filter(
		(file) =>
			file.type.startsWith("image/") ||
			/\.(png|jpe?g|gif|webp|avif|svg|bmp)$/i.test(file.name),
	);
	if (images.length === 0) return 0;

	const db = await openDB();
	const store = db.transaction(STUDY_IMAGES, "readwrite").objectStore(STUDY_IMAGES);
	const now = Date.now();
	for (const file of images) {
		const name = normalizeFileName(file.name);
		await requestToPromise(
			store.put({
				key: `${entryId}::${name}`,
				entryId,
				name,
				type: file.type || "application/octet-stream",
				blob: file,
				updatedAt: now,
			} satisfies StudyImage),
		);
	}
	return images.length;
}

export async function listStudyImages(entryId: string): Promise<StudyImage[]> {
	const db = await openDB();
	const store = db.transaction(STUDY_IMAGES, "readonly").objectStore(STUDY_IMAGES);
	const index = store.index("entryId");
	const images = await requestToPromise(
		index.getAll(entryId) as IDBRequest<StudyImage[]>,
	);
	return images.sort((a, b) => a.updatedAt - b.updatedAt);
}

export async function deleteStudyImages(entryId: string): Promise<void> {
	const db = await openDB();
	await new Promise<void>((resolve, reject) => {
		const tx = db.transaction(STUDY_IMAGES, "readwrite");
		const store = tx.objectStore(STUDY_IMAGES);
		const index = store.index("entryId");
		const req = index.openKeyCursor(IDBKeyRange.only(entryId));
		req.onsuccess = () => {
			const cursor = req.result;
			if (cursor) {
				store.delete(cursor.primaryKey);
				cursor.continue();
			}
		};
		tx.oncomplete = () => resolve();
		tx.onerror = () => reject(tx.error ?? new Error("删除图片失败"));
		tx.onabort = () => reject(tx.error ?? new Error("删除图片已取消"));
	});
}
