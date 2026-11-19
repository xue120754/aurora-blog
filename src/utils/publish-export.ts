/**
 * 本地内容导出为「可发布 Markdown」的通用工具。
 *
 * 静态站没有后端：浏览器 IndexedDB 里写的笔记、学习日志、说说、相册只有站长本机能看到。
 * 想让访客看到，需要把内容导出成 Markdown（连同图片）放进 src/content/ 对应集合，
 * 再重新构建部署。导出的 Markdown 用相对路径（./xxx-1.jpg）引用图片，
 * 把 md 和图片放在同一个文件夹即可被 Astro 正常识别。
 */

export interface ExportImage {
	/** 下载后的文件名，需与 Markdown 里的引用一致，例如 `标题-1.jpg` */
	name: string;
	blob: Blob;
}

/** 去掉文件名里的非法字符，避免 Windows / macOS 下载失败 */
export function sanitizeFileName(input: string): string {
	const trimmed = input.trim() || "未命名";
	return trimmed
		.replace(/[\\/:*?"<>|#%{}$!'@+`&=~]/g, "-")
		.replace(/\s+/g, " ")
		.slice(0, 80);
}

/** YAML 字符串值：双引号 + 转义，避免标题里的冒号、引号破坏 frontmatter */
export function yamlString(value: string): string {
	return JSON.stringify(value);
}

/** 时间戳 → `YYYY-MM-DD`（frontmatter 里必须原样输出，不能加引号，否则 z.date() 校验失败） */
export function toDateOnly(timestamp: number): string {
	const date = new Date(timestamp);
	const pad = (value: number) => String(value).padStart(2, "0");
	return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

/** 根据 Blob MIME（或原始文件名）推断图片扩展名 */
export function imageExtension(blob: Blob, fallbackName = ""): string {
	const type = blob.type.toLowerCase();
	if (type.includes("png")) return "png";
	if (type.includes("webp")) return "webp";
	if (type.includes("gif")) return "gif";
	if (type.includes("avif")) return "avif";
	if (type.includes("svg")) return "svg";
	if (type.includes("bmp")) return "bmp";
	if (type.includes("jpeg") || type.includes("jpg")) return "jpg";

	const match = /\.([a-z0-9]+)$/i.exec(fallbackName);
	return match?.[1] ? match[1].toLowerCase() : "jpg";
}

/**
 * 生成 frontmatter。
 * 字符串一律加引号；日期、数字等需要原样写入的值用 `{ raw: "..." }`。
 */
export function buildFrontmatter(
	fields: Record<string, string | string[] | { raw: string } | undefined>,
): string {
	const lines: string[] = ["---"];

	for (const [key, value] of Object.entries(fields)) {
		if (value === undefined) continue;

		if (Array.isArray(value)) {
			if (value.length === 0) continue;
			lines.push(`${key}:`);
			for (const item of value) {
				lines.push(`  - ${yamlString(item)}`);
			}
			continue;
		}

		if (typeof value === "object") {
			lines.push(`${key}: ${value.raw}`);
			continue;
		}

		if (value === "") continue;
		lines.push(`${key}: ${yamlString(value)}`);
	}

	lines.push("---", "");
	return lines.join("\n");
}

function triggerDownload(blob: Blob, filename: string): void {
	const url = URL.createObjectURL(blob);
	const anchor = document.createElement("a");
	anchor.href = url;
	anchor.download = filename;
	anchor.rel = "noopener";
	document.body.appendChild(anchor);
	anchor.click();
	anchor.remove();
	window.setTimeout(() => URL.revokeObjectURL(url), 4000);
}

/**
 * 下载 Markdown 与配套图片。
 * 浏览器可能提示「下载多个文件」，允许即可。
 */
export function downloadPublishBundle(
	markdown: string,
	baseName: string,
	images: ExportImage[] = [],
): { markdownName: string; imageCount: number } {
	const safeBase = sanitizeFileName(baseName);
	const markdownName = `${safeBase}.md`;

	triggerDownload(
		new Blob([markdown], { type: "text/markdown;charset=utf-8" }),
		markdownName,
	);

	images.forEach((image, index) => {
		window.setTimeout(
			() => triggerDownload(image.blob, image.name),
			350 * (index + 1),
		);
	});

	return { markdownName, imageCount: images.length };
}
