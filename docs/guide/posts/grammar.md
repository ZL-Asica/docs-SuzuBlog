# Markdown 语法

以下语法适用于 SuzuBlog 1.14.0 的文章和页面。这里展示的是写法，扩展语法的实际效果请在博客中预览。

## 基本语法

正文从二级标题开始，页面标题由 Frontmatter 提供。

```markdown
## 二级标题

### 三级标题

**加粗**、_斜体_、~~删除线~~、<u>下划线</u>

> 引用

- 无序列表
- [ ] 待办事项
- [x] 已完成事项

1. 有序列表
2. 下一项

[链接](https://example.com)

第一行<br>第二行

---
```

支持表格、行内代码和带语言标记的代码块。代码块使用 Shiki 高亮，并提供复制按钮。

````markdown
`inline code`

<kbd>Ctrl</kbd> + <kbd>C</kbd>

```typescript
const message = 'Hello, SuzuBlog!'
```

| 名称     | 类型     |
| -------- | -------- |
| SuzuBlog | 博客模板 |
````

## 行内扩展

```markdown
==高亮==
H~2~O
E=mc^2^

[spoiler]隐藏内容，也支持 :wink: 表情[/spoiler]

:sparkles: :smile:
```

`~...~` 是下标，`~~...~~` 是删除线。剧透内容可点击或轻触显示，再次操作隐藏。

普通文本中的 `--` 会转换为短破折号，`---` 会转换为长破折号。行内代码和代码块保持原样。

## 图片

将图片放入 `public/images`，使用 `/images/...` 引用。外链图片使用完整的 HTTPS 地址。

```markdown
![图片说明](/images/photo.jpg)
![图片说明|640x360, 75%](/images/photo.jpg)
![左侧图片|320x180, left](/images/photo.jpg)
![宽幅图片|wide](/images/photo.jpg)
```

`|` 前的文字用于替代文本和图片说明，后面可填写尺寸、宽度百分比和布局，用逗号分隔。

| 参数            | 用途                       |
| --------------- | -------------------------- |
| `640x360`       | 图片宽高                   |
| `75%`           | 容器宽度百分比，上限 100%  |
| `center`        | 居中，默认布局             |
| `left`、`right` | 大屏下左右浮动，小屏下堆叠 |
| `thumbnail`     | 缩略图                     |
| `wide`          | 宽幅图片                   |
| `full`          | 跨视口宽度的图片           |

点击图片可放大查看。

## 图库

使用 `[grid]` 将多张图片放入一个网格，按源文件顺序排列。建议填写图片宽高。

```markdown
[grid]
![第一张|640x360](/images/first.jpg)
![第二张|480x720](/images/second.jpg)
![第三张|640x640](/images/third.jpg)
[/grid]
```

使用 `mode=carousel` 切换为轮播：

```markdown
[grid mode=carousel]
![第一张|640x360](/images/first.jpg)
![第二张|480x720](/images/second.jpg)
[/grid]
```

轮播每次显示一张图片，可切换查看。

点击图库中的图片可放大查看，并切换同组图片。

## 提示块

```markdown
::: warning 注意事项
这里可以使用 **Markdown**。
:::
```

支持 `info`、`note`、`tip`、`success`、`warning`、`caution` 和 `danger`，`error` 是 `danger` 的别名。类型后可填写标题，省略时使用默认英文标题。

## 折叠内容

支持 HTML 和 Discourse 风格两种写法，内容可以包含 Markdown。

```markdown
<details>
<summary>查看详情</summary>

这里是 **详情**。

</details>

[details="查看详情"]

这里是 **详情**。

[/details]
```

## 脚注和缩写

```markdown
这里有一条脚注[^note]。

[^note]: 脚注内容。

HTML 是一种标记语言。

*[HTML]: HyperText Markup Language
```

脚注和缩写支持预览提示。缩写定义单独成段，匹配正文中的同名缩写。

## 数学公式

使用 KaTeX 渲染 LaTeX 公式。行内公式使用 `$...$`，独立公式使用 `$$`。

```markdown
行内公式 $E = mc^2$。

$$
E = mc^2
$$
```

友情链接卡片使用专门的 `Links` 代码块，见 [友情链接](./friends)。
