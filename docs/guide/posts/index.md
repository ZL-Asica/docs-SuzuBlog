# 📝 博客文章配置

你的文章只需要使用 markdown 进行撰写，直接放在 **`posts` 文件夹**下，SuzuBlog 会自动对你的文章进行渲染，文件名即位你的的文章链接。

每篇文章都 **必须** 包含一个 **Frontmatter**，用于设置文章的基本信息和显示效果。

## 🔖 什么是 Frontmatter？

Frontmatter 是 Markdown 文件顶部的元数据块，使用三条短划线包裹，例如：

```yaml
---
title: 示例文章
date: 2024-12-08
author: ZL Asica # 作者（可选）
thumbnail: /images/example-thumbnail.jpg # 缩略图（可选）
tags: # 标签（可选）
  - SuzuBlog
  - Frontmatter
categories: # 分类（可选）
  - 教程
redirect: /example-redirect # 重定向地址（可选）
showComments: true # 是否显示评论（可选）
showLicense: true # 是否显示版权声明（可选）
autoSlug: true # 是否自动生成层级路径（可选）
status: published # 文章状态（可选）
---
```

## 🛠️ Frontmatter 字段解释

### **必填字段**

- **`title`**: 文章标题，将显示在页面标题和摘要中。
- **`date`**: 文章发布日期，格式为 `YYYY-MM-DD`。（若未设置，将使用文件最后修改日期）

### **全局字段**

- **`author`**: 作者名称，用于标记文章的作者。（若未设置，将使用全局作者名称）
- **`thumbnail`**: 文章的缩略图路径，可以是相对路径或完整 URL。（若未设置，将使用默认缩略图，在 `config.yml` 中设置）

### **选填字段**

::: warning
⚠️ `tags` 和 `categories` 字段的值必须是数组且大小写敏感。因此建议保持统一的大小写规范，避免产生重复分类。
:::

- **`tags`**: 文章标签（数组），用于对文章进行更细粒度的标记。例如：

  ```yaml
  tags:
    - SuzuBlog
    - Frontmatter
    - Next.js
  ```

  标签主要用于文章的内容索引和筛选，可以有多个，每篇文章的标签建议控制在 2-5 个。

- **`categories`**: 文章分类（数组），用于对文章进行更高层次的归类。例如：

  ```yaml
  categories:
    - 教程
    - 开发
  ```

  分类通常是更广义的主题，每篇文章通常有 1-2 个分类即可，便于内容组织。

- **`redirect`**: 设置文章的跳转地址（例如 `"/new-url"`），适用于需要重定向的文章。（填写后，文章将不会显示内容，而是直接跳转到指定地址）
- **`showComments`**: 是否显示评论功能，默认为 `true`。
- **`showLicense`**: 是否显示文章的版权声明，默认为 `true`。
- **`showThumbnail`**: 是否显示文章的缩略图，默认为 `true`。
- **`autoSlug`**: 是否自动生成文章的层级路径，默认为 `true`。（若设置为 `false`，将不会自动生成文章的层级路径，而是使用 markdown 文件内的标题）
- **`status`**: 文章状态，用于控制文章是否生成页面、是否在列表展示、以及是否会被爬虫/搜索引擎收录。

  可选值如下（不填写时默认为 `published`）：
  - **`published`（默认）**：正常发布
    - ✅ 会生成文章页面
    - ✅ 会出现在 `/posts` 列表
    - ✅ 会进入 RSS / sitemap / LLMs.txt 等站点索引入口
    - ✅ 搜索引擎可收录（index）
  - **`unlisted`**：可访问但不公开分发（“知道链接才能看到”）
    - ✅ 会生成文章页面（可通过 URL 直接访问）
    - ❌ 不会出现在 `/posts` 列表
    - ❌ 不会进入 RSS / sitemap / LLMs.txt
    - 🚫 默认不会被搜索引擎收录（noindex）
  - **`draft`**：草稿（未完成/待修改）
    - 🚫 默认不会在生产环境生成页面（访问会 404）
    - ❌ 不会出现在 `/posts` 列表
    - ❌ 不会进入 RSS / sitemap / LLMs.txt
    - 🚫 不会被搜索引擎收录（noindex）
    - 💡 如需在本地以“接近生产”的方式预览草稿，可在构建/运行时设置环境变量 `ALLOW_DRAFTS=true`。
  - **`hidden`**：强隐藏（内部用/永久不公开）
    - 🚫 不会在生产环境生成页面（访问会 404）
    - ❌ 不会出现在 `/posts` 列表
    - ❌ 不会进入 RSS / sitemap / LLMs.txt
    - 🚫 不会被搜索引擎收录（noindex）
    - 💡 仅用于本地调试时可设置环境变量 `ALLOW_HIDDEN=true` 进行渲染预览。

  ::: tip
  `status` 只控制“是否生成页面 / 是否出现在站点入口 / 是否允许收录”，**不是权限系统**：如果你把内容发布到公网（例如 `published` 或可访问的 `unlisted`），任何拿到链接的人仍然可以访问。
  :::

## ✂️ 文章摘要截断

使用 `<!--more-->` 在文章内容中手动截断摘要，例如：

```markdown
这是文章的开头部分。

<!--more-->

这是文章的剩余内容。
```

- 如果未设置 `<!--more-->`，系统会自动截断能够不溢出显示在文章卡片的内容作为摘要显示。
