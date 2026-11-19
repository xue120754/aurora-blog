import { readFile } from "node:fs/promises";
import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";
import { isPublicPost } from "@/utils/content-utils";

type Props = { entry: CollectionEntry<"posts"> };

/**
 * 把每篇文章的 Markdown 源文件在构建时一起输出到 /downloads/<文章路径>.md，
 * 供文章页的「下载 Markdown」按钮使用（静态站，访客只读）。
 */
export async function getStaticPaths() {
	// 只有笔记（downloadable: true）提供源文件下载；普通文章仅可阅读
	const posts = await getCollection(
		"posts",
		({ data }) => data.downloadable === true && isPublicPost(data),
	);

	return posts.map((entry) => ({
		params: { slug: entry.id.replace(/\.(md|mdx)$/i, "") },
		props: { entry } satisfies Props,
	}));
}

export const GET: APIRoute = async ({ props }) => {
	const { entry } = props as Props;

	// 优先读取原始文件（含 frontmatter）；读不到时退回正文
	let raw = entry.body ?? "";
	if (entry.filePath) {
		try {
			raw = await readFile(entry.filePath, "utf8");
		} catch {
			// 保持正文回退
		}
	}

	return new Response(raw, {
		headers: { "Content-Type": "text/markdown; charset=utf-8" },
	});
};
