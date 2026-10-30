# 友情链接

编辑 `posts/_pages/Friends.md`。使用语言标记为 `Links` 的代码块写入 JSON 数组，大小写需要一致。

````markdown
```Links
[
  {
    "title": "示例博客",
    "link": "https://example.com/",
    "img": "https://example.com/avatar.png",
    "des": "朋友的博客"
  }
]
```
````

| 字段    | 用途                 |
| ------- | -------------------- |
| `title` | 站点名称，可选       |
| `link`  | 完整 URL，必填       |
| `img`   | 图标或头像路径，必填 |
| `des`   | 简短说明，可选       |

内容必须是有效 JSON，不能包含注释或末尾多余的逗号。可添加多个 `Links` 代码块，在它们之间使用 Markdown 标题分组。

如需接收友链申请，可在页面 Frontmatter 中设置 `showComments: true`，并在 `config.yml` 中配置评论服务。
