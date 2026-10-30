# 关于和友链页面

`posts/_pages/About.md` 对应 `/about`，`posts/_pages/Friends.md` 对应 `/friends`。文件名区分大小写。其他文件不会自动生成新路由。

页面使用与文章相同的 Markdown 渲染，支持 [扩展语法](./grammar)。

```yaml
---
title: 关于我
thumbnail: /images/about.jpg
showComments: false
showLicense: false
showThumbnail: false
autoSlug: false
---
```

| 字段            | 用途                                                          |
| --------------- | ------------------------------------------------------------- |
| `title`         | 页面标题，未填时回退到文件名，不改变导航文案                  |
| `thumbnail`     | 页面缩略图，未填时使用全局 `background`，填空字符串可清空图片 |
| `showComments`  | 显示评论，默认 `true`                                         |
| `showLicense`   | 显示许可声明，默认 `true`                                     |
| `showThumbnail` | 显示缩略图，默认 `true`                                       |
| `autoSlug`      | 显示正文标题的层级编号，默认 `true`                           |

需要保留固定路径。`status` 不控制这两个页面的访问，`redirect` 也不会让它们跳转。友情链接卡片的写法见 [友情链接](./friends)。
