# 文章配置

将文章保存为 `posts/*.md`。文件名决定路径，例如 `posts/my-post.md` 对应 `/my-post`。

## Frontmatter

在文件顶部用 `---` 包裹 YAML 元数据。日期请加引号，避免被 YAML 解析成日期对象。

```yaml
---
title: 示例文章
date: '2026-10-30 09:00:00'
author: ZL Asica
thumbnail: /images/example.jpg
tags:
  - Markdown
categories:
  - 教程
showComments: true
showLicense: true
showThumbnail: true
autoSlug: true
status: published
---
```

| 字段                 | 用途和默认值                                                                     |
| -------------------- | -------------------------------------------------------------------------------- |
| `title`              | 标题，最多 100 个字符，未填时使用文件名                                          |
| `date`               | 发布日期，支持 `'YYYY-MM-DD'` 或 `'YYYY-MM-DD HH:mm:ss'`，未填时使用文件修改时间 |
| `author`             | 作者，未填时使用 `config.yml` 中的作者，最多 30 个字符                           |
| `thumbnail`          | 缩略图路径，未填时使用 `config.yml` 中的 `background`                            |
| `tags`、`categories` | 字符串数组，区分大小写                                                           |
| `redirect`           | 跳转地址，设置后访问文章会直接重定向                                             |
| `showComments`       | 显示评论，默认 `true`，需配置评论服务                                            |
| `showLicense`        | 显示许可声明，默认 `true`                                                        |
| `showThumbnail`      | 显示缩略图，默认 `true`                                                          |
| `autoSlug`           | 在正文标题前显示层级编号，默认 `true`，不改变文章 URL                            |
| `status`             | 文章状态，默认 `published`                                                       |

## 文章状态

| 状态        | 生产环境页面   | 文章列表和搜索 | RSS、sitemap、LLM 文件 | 搜索引擎索引 |
| ----------- | -------------- | -------------- | ---------------------- | ------------ |
| `published` | 可访问         | 显示           | 包含                   | 允许         |
| `unlisted`  | 可通过链接访问 | 隐藏           | 排除                   | `noindex`    |
| `draft`     | 默认 404       | 预览开启时显示 | 排除                   | `noindex`    |
| `hidden`    | 始终 404       | 隐藏           | 排除                   | `noindex`    |

开发环境会显示草稿。若需在生产构建中预览草稿，在构建和运行时设置 `ALLOW_DRAFTS=true`。`hidden` 仅在非生产环境且设置 `ALLOW_HIDDEN=true` 时可访问，生产环境无法开启。

`unlisted` 页面仍可被任何拿到链接的人访问。状态设置不提供访问权限控制。

## 摘要

使用 `<!--more-->` 指定摘要的来源：

```markdown
这里是摘要。

<!--more-->

这里是正文的后续内容。
```

系统从标记前的内容提取摘要，最多截取 150 个字符后清理 Markdown 标记。未加标记时，从正文开头提取。
