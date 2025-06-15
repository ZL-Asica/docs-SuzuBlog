# `config.yml`

本文档将逐步介绍 **`config.yml`** 文件中的各项配置，帮助你快速设置和定制 SuzuBlog。

## 📝 站点设置 (Site Settings)

```yaml
title: Suzu
subTitle: Next.js Blog Template
description: "Suzu is a minimalist blog template with a serene sakura-inspired theme, blending modern design with a touch of traditional Japanese aesthetics."
keywords: "Suzu, blog template, sakura, ZL Asica"
author:
  name: ZL Asica
  link: "https://www.zla.pub"
lang: zh
siteUrl: "https://www.zla.pub"
```

- **`title`**: 站点名称，显示在标题和 `meta` 标签中，也是默认的社交分享标题与左上角的站点名称。
- **`subTitle`**: 站点的副标题，通常用于补充描述，不会显示在左上角。
- **`description`**: 网站的描述信息，出现在搜索引擎的摘要中，推荐 50-150 个字符。
- **`keywords`**: 用逗号分隔的关键字，用于 SEO 优化，推荐 3-5 个关键词。
- **`author`**: 包括作者的名字和个人链接。
- **`lang`**: 语言代码（例如 `zh` 表示中文，`en` 表示英文，`ja` 表示日文）。
- **`siteUrl`**: 网站的公共根 URL，用于生成 SEO 标签 **（请勿包含末尾的斜杠）**。

## 🖼️ 图像和视觉元素

```yaml
avatar: /images/avatar.jpg
background: /images/background.jpg
slogan: "As long as the code or the developer is able to run, it's all good."
googleAnalytics: G-659VZ9NH28
```

::: tip
📌 **相对路径**：相对路径是相对于 `public` 目录的，例如 `/images/avatar.jpg` 表示 `public/images/avatar.jpg`。
:::

- **`avatar`**: 头像图片路径，可以是相对路径或完整 URL。
- **`background`**: 默认的背景图片路径，用于文章没有单独缩略图时显示。
- **`slogan`**: 显示在首页头像下方的标语。
- **`googleAnalytics`**: Google Analytics 跟踪 ID（可选，用于流量统计）。

## 🌐 HTML 头部设置(HTML head Settings)

```yaml
links:
  - rel: icon
    type: image/png
    href: /icons/favicon-96x96.png
    sizes: 96x96
  - rel: icon
    type: image/svg+xml
    href: /icons/favicon.svg
  - rel: apple-touch-icon
    href: /icons/apple-touch-icon.png
    sizes: 180x180
```

可以设置多个 head 中的链接标签，通常用于添加网站图标和其他资源。

- **`links`**: 用于在 HTML `<head>` 中添加额外的链接标签。
  - **`rel`**: 链接关系类型（如 `icon`、`apple-touch-icon`）。
  - **`type`**: 图标的 MIME 类型。
  - **`href`**: 图标的路径或 URL。
  - **`sizes`**: 图标的尺寸（可选）。

## ✍️ 文章设置 (Posts Settings)

```yaml
postsPerPage: 5
creativeCommons:
  type: CC BY-SA 4.0 Deed
  link: https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans
```

- **`postsPerPage`**: 每页显示的文章数量。（默认/留空为 5，最大为 15）
- **`creativeCommons`**: 配置文章默认的版权许可，例如 `CC BY-SA 4.0`，链接到相应的许可证页面。

## 📌 页头设置 (Header Settings)

```yaml
travellings: true
```

- **`travellings`**: 开往！友链接力！一个友情链接助推计划，欢迎参与 [开往项目官网](https://www.travellings.cn/) (若不需要友链功能，可将此项设置为 `false`。)

## 🔚 页脚设置 (Footer Settings)

```yaml
startYear: 2017
```

- **`startYear`**: 你的博客开始年份（可选）。如果不设置，将只显示当前年份。

## 📄 页面设置 (Pages Settings)

```yaml
anilist_username: zlasica
anilist_anime_name_style: english
```

- **`anilist_username`**: 你的 AniList 用户名，用于显示你的动画列表（位于 `/about/anime` 页面），了解 [Anilist](https://anilist.co/)。（留空以隐藏动画列表）
- **`anilist_anime_name_style`**: AniList 动画名称的显示风格，支持 `english`（英文）、`romaji`（罗马音）和 `native`（原名）。

## 🐦 社交媒体设置 (Social Media Settings)

```yaml
socialMedia:
  github_username: ZL-Asica
  linkedin_username: elara-liu
  instagram_id: zl_asica
  # 其他支持的平台
  email: zl@zla.app
  rss: true
```

- 为你的社交媒体账号添加链接。
- 留空某些字段可以隐藏对应的社交图标。
- 支持的平台包括 GitHub、LinkedIn、Instagram、ORCID、Telegram、Bluesky、YouTube、Bilibili、Zhihu 等。

## 💬 评论设置 (Comments Settings)

```yaml
twikooEnvId: https://xxx.vercel.app
disqusShortname: zla-pub
```

- **`twikooEnvId`**: Twikoo 评论系统的云函数部署地址，具体请参考 [Twikoo 文档](https://twikoo.js.org/)。
- **`disqusShortname`**: 用于集成 Disqus 评论系统的短名称（可从 Disqus 账户中获取）。

## 🔧 自定义代码 (Custom Code Blocks)

::: danger
❗️ 请谨慎使用自定义代码，确保代码的正确性和安全性。
:::

```yaml
headerJavascript:
  - /scripts/custom.js
slotFooter: |
  <!-- Add your custom footer HTML here -->
```

- **`headerJavascript`**: 在 `<head>` 中插入的自定义 JavaScript 文件。
- **`slotFooter`**: 在 `<footer>` 中插入的自定义 HTML 代码。
