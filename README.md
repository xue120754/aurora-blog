<div align="center">

# Aurora 的博客

> 一个用 Astro + Firefly 搭起来的个人站点，记录技术学习、日常动态与生活碎片。

![Node.js >= 22](https://img.shields.io/badge/node.js-%3E%3D22-brightgreen)
![pnpm >= 9](https://img.shields.io/badge/pnpm-%3E%3D9-blue)
![Astro](https://img.shields.io/badge/Astro-7.1.6-orange)
![License MIT](https://img.shields.io/badge/license-MIT-green)

线上站点：**https://xuegost.top**

</div>

---

## 这是什么

Aurora 的个人博客。除了常规文章，还包含流光时钟、动态、相册、足迹、友链、学习日志等页面。

## 技术栈

| 项 | 值 |
|---|---|
| 框架 | Astro 7.1.6（静态输出） |
| 交互组件 | Svelte 5 |
| 样式 | Tailwind CSS 4（无 tailwind.config.js） |
| 内容 | Markdown + Astro Content Collections（Zod 校验） |
| 站内搜索 | Pagefind |
| 部署 | Cloudflare Pages（静态托管） |

## 页面一览

| 路径 | 内容 |
|---|---|
| `/` | 首页（Hero + 最新文章 + 分类入口） |
| `/posts/` | 文章列表，**分类由文件夹决定** |
| `/flowlight/` | 流光时钟（时钟 / 正计时 / 倒计时） |
| `/moments/` | 动态（说说） |
| `/album/` | 相册 |
| `/archive/` | 归档（时间 / 分类 / 标签三视图） |
| `/categories/` | 分类总览 |
| `/friends/` | 友链 |
| `/study/` | 学习日志 |
| `/about/` | 关于我 |
| `/search/` | 站内搜索 |

## 本地开发

```bash
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # 产出 dist/
pnpm preview  # 预览构建结果
```

要求 **Node >= 22**，包管理器**仅限 pnpm**（`preinstall` 已强制校验）。

## 内容怎么放

```
src/content/
├── 文章/          # 博客文章，子文件夹名 = 分类名
├── 动态/          # 说说
├── 相册/
├── 足迹/
├── 页面/          # about / friends / guestbook 等固定页
├── 友链/          # 含 墓碑/ 子目录
├── 导航/
├── 影视/
├── 资源/
└── 更新日志/
```

**新建一篇文章**：在 `src/content/文章/<分类名>/` 下新建 `.md` 文件，front matter 最少写两项：

```yaml
---
title: 文章标题
published: 2026-11-20
---
```

分类不需要写在 front matter 里——**目录名就是分类名**，页面会按文件夹路径自动推导。

不想公开的文章，加一行 `private: true`，生产构建会完全排除它（连详情页都不会生成）。

## 部署

本项目是纯静态站点，`pnpm build` 产出的 `dist/` 可直接托管。

Cloudflare Pages 两种方式都行：

- **直接上传**：把 `dist/` 打包后上传
- **连接仓库**：Build command `pnpm build`，Output directory `dist`，环境变量 `NODE_VERSION=22`

## 致谢与许可

本项目基于 [tianshihao2003](https://github.com/tianshihao2003) 的开源项目进行二次修改，在此致谢。
上游主题为 [CuteLeaf/Firefly](https://github.com/CuteLeaf/Firefly)，其前身为 [saicaca/fuwari](https://github.com/saicaca/fuwari)。

遵循 **MIT License**，原作者及上游项目的版权声明已完整保留，见 [LICENSE](./LICENSE)。
