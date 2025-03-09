# 📄 `_pages` 文件夹特殊配置

**`_pages` 文件夹** 中的文件（如 "关于" 和 "朋友"）需要使用本页面的配置，而非使用常规文章的 Frontmatter。

示例：

```yaml
---
title: "" # （可选）默认是“关于”
thumbnail: "" # (可选) 页面缩略图
showComments: false # 是否显示评论功能
showLicense: false # 是否显示版权声明
showThumbnail: false # 是否显示缩略图
---
```

## 🛠️ Frontmatter 字段解释

所有字段均为选填字段。

- **`title`**: 页面标题，将显示在页面标题和导航栏中，可以设置任何文本（默认为“关于”）。
- **`thumbnail`**: 页面的缩略图路径，可以是相对路径或完整 URL。（若未设置，将不会显示缩略图）
- **`showComments`**: 是否显示评论功能，默认为 `true`。（若设置为 `false`，将不会显示评论功能）
- **`showLicense`**: 是否显示版权声明，默认为 `true`。（若设置为 `false`，将不会显示版权声明）
- **`showThumbnail`**: 是否显示缩略图，默认为 `true`。（若设置为 `false`，将不会显示缩略图）
