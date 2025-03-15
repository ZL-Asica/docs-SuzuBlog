# 📖 SuzuBlog 支持的 Markdown 语法指南

SuzuBlog 使用 **Markdown** 进行文章编写，并支持多种扩展语法，以增强文章的可读性和表现力。以下是我们支持的 Markdown 语法及示例：

## 1. 标题（Headings）

使用 `#` 号表示不同级别的标题：

::: warning
请注意：一级标题 `#` 会被用于文章标题，不要在文章正文中使用一级标题。
:::

```markdown
## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题
```

## 2. 文本格式（Text Formatting）

支持 **加粗**、_斜体_、~~删除线~~ 和 <u>下划线</u>：

```markdown
**加粗**
_斜体_
~~删除线~~
<u>下划线</u>
```

## 3. 引用（Blockquotes）

使用 `>` 进行引用：

```markdown
> 这是一个引用段落。
>
> > 这是一个嵌套的引用。
```

## 4. 列表（Lists）

支持无序列表（`-` 或 `*`）和有序列表（`1.` `2.` `3.`）：

```markdown
- 无序列表项 1
- 无序列表项 2
  - 嵌套项 1
  - 嵌套项 2

1. 有序列表项 1
2. 有序列表项 2
   1. 嵌套有序项
   2. 嵌套有序项
```

---

## 5. 代码块（Code Blocks）

支持 `行内代码` 、<kbd>kbd</kbd>和 **多行代码块**：

::: tip

1. 代码块支持多种语言的语法高亮，并且右上角可以点击复制代码。
2. \<kbd>\</kbd> 可以用于显示键盘按键，会自动添加对应按键 icon。

:::

````markdown
`行内代码示例`

<kbd>Ctrl</kbd> + <kbd>C</kbd>

```python
# Python 代码块示例
def hello():
    print("Hello, SuzuBlog!")
```
````

## 6. 分隔线（Horizontal Rule）

使用 `---` 添加分隔线：

```markdown
---
```

## 7. 链接（Links）

支持超链接（内链和外链）：

```markdown
[访问 SuzuBlog](https://www.zla.pub)
```

## 8. 图片（Images）

支持插入图片，可以使用相对路径或绝对路径：

::: tip

1. 相对路径是相对于 public 文件夹的路径，例如 `/images/logo.png` 是 public 文件夹下的 `images` 文件夹中的 `logo.png` 图片。
2. 外链需要使用 `https://` 开头的绝对路径。

:::

```markdown
![SuzuBlog Logo](/images/logo.png)
```

## 9. 表格（Tables）

使用 `|` 和 `-` 创建表格：

```markdown
| 名称    | 发布时间   | 评分       |
| ------- | ---------- | ---------- |
| Suzu    | 2024年11月 | ⭐⭐⭐⭐⭐ |
| Next.js | 2016年10月 | ⭐⭐⭐⭐   |
```

## 10. 表情符号（Emoji）

支持使用 **Emoji** 表情符号：

```markdown
🎉 ✨ 🚀 📖 🔗 😊
```

## 11. 数学公式（MathJax）

支持 **LaTeX** 语法的数学公式：

```markdown
$$
E = mc^2
$$
```

## 12. 折叠详情（Details & Summary）

使用 `<details>` 和 `<summary>` 创建折叠详情：

```markdown
<details>
<summary>点击查看详情</summary>

这里是折叠的内容。

</details>
```

## 13. 换行（Line Breaks）

使用 `<br>` 或者两个空格加回车进行换行：

```markdown
第一行<br>第二行
```

## 14. 清单（Checklists）

使用 `- [ ]` 和 `- [x]` 创建清单：

```markdown
- [ ] 未完成事项
- [x] 已完成事项
```

## 🚀 结语

以上就是 SuzuBlog 支持的 Markdown 语法。你可以使用这些语法来撰写更加丰富的文章，让你的博客内容更加生动、清晰！📖✨

如果你有任何问题或建议（比如想要支持的语法、样式问题等），欢迎在 [GitHub Issue](https://github.com/ZL-Asica/SuzuBlog/issues/new/choose) 提出！
