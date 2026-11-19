# 记录板块与学习日志改造计划

## Context

当前顶部“导航”位于“文章”之前；“记录”包含书架、影视与游戏、更新日志和足迹。书架只能由构建时的 `bangumi` 内容集合生成，网页内无法新增。用户希望调整导航顺序、移除影视与游戏、保留书架并支持手动添加，同时新增可记录学习内容、图片和总结的学习日志。

本站为静态站点，本次新增数据保存在当前浏览器的 IndexedDB 中，不引入后端；静态书籍和正式文章数据保持不变，学习日志不会混入文章列表。

## 实施步骤

### 1. 调整导航并移除影视与游戏

- 修改 `src/config/navBarConfig.ts`：把“导航”移到“记录”之后、“关于”之前。
- “记录”子项调整为：书架 → 学习日志（`/study/`）→ 更新日志 → 足迹；桌面端和移动端会自动同步。
- 修改 `src/config/siteConfig.ts`：将 `pages.moviesGames` 设为 `false`，同时移除导航及 `QuickNav.astro` 中的影视与游戏入口。
- 修改 `src/pages/movies-games/index.astro`：复用书架页的页面开关检查，关闭后访问该地址跳转到 404。

### 2. 书架支持网页手动添加

- 新增 `src/utils/records-store.ts`，建立 `aurora-records` IndexedDB，统一管理记录板块的本地数据。
- 手动书籍字段：`id/title/cover(Blob，可选)/link/status/score/category/createdAt/updatedAt`；提供列出、保存、删除方法。
- 修改 `src/pages/books/index.astro` 与 `src/components/pages/books/Bookshelf.astro`：增加“添加书籍”按钮和表单（书名、封面、链接、阅读状态、评分），手动书籍默认归入“未分类”。
- 静态书籍继续由内容集合生成；手动书籍加载后插入同一 `.shelf-grid`。使用包含 `BookCard` 的 `<template>` 克隆卡片，保留 Astro 作用域样式和现有 3D 书本外观。
- 手动卡片写入现有 `data-item-section/data-books-item-cat/data-books-item-status` 属性，复用 `applyFilter()` 和 `ClientPagination` 的 `updatePagination`；同步刷新分类、状态及页头数量。
- 支持删除手动书籍；无封面上传时使用站内现有默认封面。即使静态书籍为空，也显示添加入口。
- 所有交互脚本留在 Swup 容器内，沿用现有重绑模式。

### 3. 新增学习日志 `/study/`

- 新增 `src/pages/study/index.astro`，复用笔记页的左侧列表、右侧阅读/编辑布局与 `notes.css` 基础样式，仅补充学习图片网格和总结区域样式。
- 在 `records-store.ts` 中增加学习日志表与图片表：日志字段为 `id/title/content/summary/createdAt/updatedAt`；图片按 `entryId + 文件名` 存储 Blob，并建立 `entryId` 索引。
- 编辑器提供：日志主题、学习内容、多图片上传与预览、学习总结；支持新建、保存、修改、删除。阅读视图按“学习内容 → 图片 → 学习总结”展示。
- 正文使用安全的纯文本段落渲染，图片通过 Object URL 显示；页面离开时释放 Object URL，删除日志时同时删除关联图片。
- 脚本放在 Swup 容器内，复用笔记页的初始化/销毁生命周期；暗色模式显式使用 `color: var(--deep-text)`。
- 不修改 `notes-store.ts`、`content.config.ts` 或文章列表逻辑。

## 关键文件

- `src/config/navBarConfig.ts`
- `src/config/siteConfig.ts`
- `src/pages/movies-games/index.astro`
- `src/pages/books/index.astro`
- `src/components/pages/books/Bookshelf.astro`
- `src/components/pages/books/BookCard.astro`（作为动态卡片模板复用）
- `src/utils/records-store.ts`（新增）
- `src/pages/study/index.astro`（新增）
- `src/pages/notes/index.astro`、`src/styles/pages/notes.css`（布局与生命周期参考）

## 验证

1. 运行 `pnpm build`，确认 Astro、TypeScript 和样式构建通过。
2. 浏览器检查顶部顺序为“动态 → 记录 → 导航 → 关于”，记录下拉只含书架、学习日志、更新日志、足迹；影视与游戏入口及页面不可访问。
3. 在书架添加含封面书籍，验证刷新后保留、卡片样式一致、分类/状态筛选、数量、分页和删除正常。
4. 新建包含学习内容、多张图片和总结的日志，验证刷新后保留、编辑和删除正常、暗色模式可读、SPA 导航进入后按钮仍可点击。
5. 回归 `/notes/` 与 `/posts/`，确认原笔记和文章列表不受影响。
