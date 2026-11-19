import DOMPurify from "dompurify";
import { marked } from "marked";

/**
 * 本地内容（笔记 / 学习日志）共用的 Markdown 渲染管线：
 * - marked 解析 + DOMPurify 清洗
 * - highlight.js 语法高亮（按站点主题切换亮/暗样式）
 * - 代码块加 macOS 窗口栏与行号（样式见 notes.css 的 .note-code）
 * 笔记页与学习日志页共用，保证两边渲染效果完全一致。
 */

export type Hljs = {
	getLanguage: (name: string) => boolean;
	highlight: (code: string, options: { language: string }) => { value: string };
	highlightAuto: (code: string) => { value: string };
};

let hljsRef: Hljs | null = null;
let hljsPromise: Promise<Hljs | null> | null = null;
let lightCssRef: HTMLLinkElement | null = null;
let darkCssRef: HTMLLinkElement | null = null;
let themeObserver: MutationObserver | null = null;

function syncHighlightTheme() {
	const dark = document.documentElement.classList.contains("dark");
	if (lightCssRef) lightCssRef.disabled = dark;
	if (darkCssRef) darkCssRef.disabled = !dark;
}

function watchHighlightTheme() {
	syncHighlightTheme();
	if (themeObserver) themeObserver.disconnect();
	themeObserver = new MutationObserver(syncHighlightTheme);
	themeObserver.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ["class"],
	});
}

function escapeHtml(text: string): string {
	return text
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;");
}

function ensureHighlightStyles() {
	const base = import.meta.env.BASE_URL;
	if (!lightCssRef) {
		const light = document.createElement("link");
		light.rel = "stylesheet";
		light.href = `${base}assets/css/highlight-github.min.css`;
		light.id = "local-md-hljs-css-light";
		document.head.appendChild(light);
		lightCssRef = light;
	}
	if (!darkCssRef) {
		const dark = document.createElement("link");
		dark.rel = "stylesheet";
		dark.href = `${base}assets/css/highlight-github-dark.min.css`;
		dark.id = "local-md-hljs-css-dark";
		document.head.appendChild(dark);
		darkCssRef = dark;
	}
}

/** 预加载高亮脚本与主题样式；重复调用会复用同一个 Promise */
export function prepareMarkdown(): Promise<Hljs | null> {
	const existing = (window as unknown as { hljs?: Hljs }).hljs;
	if (existing) {
		if (!lightCssRef || !darkCssRef) ensureHighlightStyles();
		watchHighlightTheme();
		return Promise.resolve(existing);
	}
	if (hljsPromise) {
		hljsPromise.then(() => watchHighlightTheme());
		return hljsPromise;
	}

	ensureHighlightStyles();

	hljsPromise = new Promise((resolve) => {
		const script = document.createElement("script");
		script.src = `${import.meta.env.BASE_URL}assets/js/highlight.min.js`;
		script.onload = () => {
			hljsRef = (window as unknown as { hljs?: Hljs }).hljs ?? null;
			watchHighlightTheme();
			resolve(hljsRef);
		};
		script.onerror = () => resolve(null);
		document.head.appendChild(script);
	});
	return hljsPromise;
}

const renderer = new marked.Renderer();
renderer.code = ({ text, lang }) => {
	const language = (lang || "").trim().split(/\s+/)[0];
	let highlighted = escapeHtml(text);
	if (hljsRef) {
		try {
			highlighted =
				language && hljsRef.getLanguage(language)
					? hljsRef.highlight(text, { language }).value
					: hljsRef.highlightAuto(text).value;
		} catch {
			highlighted = escapeHtml(text);
		}
	}
	return `<pre class="note-pre" data-lang="${escapeHtml(language || "text")}"><code class="hljs">${highlighted}</code></pre>`;
};
renderer.image = ({ href, title, text }) => {
	const src = escapeHtml(href.replace(/\\/g, "/"));
	const titleAttr = title ? ` title="${escapeHtml(title)}"` : "";
	return `<img src="${src}" alt="${escapeHtml(text)}"${titleAttr}>`;
};

/** 给代码块加上 macOS 窗口栏与行号（行号按固定行高与代码逐行对齐） */
function decorateCodeBlocks(root: HTMLElement) {
	root.querySelectorAll<HTMLPreElement>("pre.note-pre").forEach((pre) => {
		const code = pre.querySelector("code");
		const language = pre.dataset.lang || "text";
		const lineCount = Math.max(1, (code?.textContent ?? "").split("\n").length);

		const wrapper = document.createElement("div");
		wrapper.className = "note-code";
		wrapper.dataset.lang = language;

		const head = document.createElement("div");
		head.className = "note-code__head";
		head.title = language;
		const dots = document.createElement("span");
		dots.className = "note-code__dots";
		dots.setAttribute("aria-hidden", "true");
		for (const tone of ["red", "yellow", "green"]) {
			const dot = document.createElement("span");
			dot.className = `note-code__dot note-code__dot--${tone}`;
			dots.appendChild(dot);
		}
		head.appendChild(dots);

		const body = document.createElement("div");
		body.className = "note-code__body";

		const gutter = document.createElement("div");
		gutter.className = "note-code__gutter";
		gutter.setAttribute("aria-hidden", "true");
		for (let i = 1; i <= lineCount; i++) {
			const line = document.createElement("span");
			line.textContent = String(i);
			gutter.appendChild(line);
		}

		pre.parentNode?.insertBefore(wrapper, pre);
		body.appendChild(gutter);
		body.appendChild(pre);
		wrapper.appendChild(head);
		wrapper.appendChild(body);
	});
}

/** 把 Markdown 渲染进目标容器（容器建议带 notes-content custom-md 类） */
export function renderMarkdown(markdown: string, target: HTMLElement) {
	const html = marked.parse(markdown, {
		renderer,
		gfm: true,
		async: false,
	}) as string;
	const sanitized = DOMPurify.sanitize(html, {
		ADD_ATTR: ["data-lang", "target", "rel", "referrerpolicy"],
	});
	// 在图片进入文档前设置引用策略，避免首次请求已被图床防盗链拦截。
	const template = document.createElement("template");
	template.innerHTML = sanitized;
	template.content.querySelectorAll<HTMLImageElement>("img").forEach((img) => {
		if (/^https?:\/\//i.test(img.getAttribute("src") ?? "")) {
			img.setAttribute("referrerpolicy", "no-referrer");
		}
	});
	target.replaceChildren(template.content);
	target.querySelectorAll("a[href]").forEach((a) => {
		a.setAttribute("target", "_blank");
		a.setAttribute("rel", "noopener noreferrer");
	});
	decorateCodeBlocks(target);
}

/** 去掉常见 Markdown 标记，用于卡片摘要等纯文本场景 */
export function stripMarkdownText(markdown: string): string {
	return markdown
		.replace(/```[\s\S]*?```/g, " ")
		.replace(/~~~[\s\S]*?~~~/g, " ")
		.replace(/!\[[^\]]*\]\([^)]*\)/g, " ")
		.replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
		.replace(/[#>*_`~|]/g, " ")
		.replace(/^\s*[-+]\s+/gm, " ")
		.replace(/\s+/g, " ")
		.trim();
}
