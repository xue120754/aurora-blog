import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	// 图片路径支持三种格式：
	// 1. public 目录（以 "/" 开头，不优化）："/assets/images/avatar.webp"
	// 2. src 目录（不以 "/"开头，自动优化但会增加构建时间，推荐）："assets/images/avatar.webp"
	// 3. 远程 URL："https://example.com/avatar.jpg"
	avatar: "/assets/ziyuan/aurora-avatar.jpg",

	// 下班时间头像（为空则始终使用上方 avatar）
	avatarOffWork: "",

	// 名字
	name: "Aurora",

	// 首页展示名字（留空则使用 name）
	displayName: "Aurora",

	// 首页 Aurora 上方的一句话（逐字显示 → 停留 → 逐字删除 → 循环，改这里即可）
	occupation: "你好，我是 Aurora，喜欢把生活里细碎的瞬间慢慢收进这里。",

	// 个人签名（支持多条，会循环打字+删除效果）
	bio: ["把喜欢的东西慢慢收进来。", "这里是我的小小宇宙。"],

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	// TODO: 把下面的 url 换成你自己的社交主页地址
	links: [
		{
			name: "GitHub",
			icon: "simple-icons:github",
			url: "https://github.com/xue120754",
			showName: false,
		},
		{
			name: "Email",
			icon: "material-symbols:mail-outline",
			url: "mailto:3866029674@qq.com",
			showName: false,
		},
		{
			name: "Bilibili",
			icon: "simple-icons:bilibili",
			url: "https://space.bilibili.com/3546915333474682",
			showName: false,
		},
	],
};
