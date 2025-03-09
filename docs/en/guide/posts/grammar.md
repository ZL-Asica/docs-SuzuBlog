# 📖 SuzuBlog Supported Markdown Syntax Guide

SuzuBlog uses **Markdown** for article writing and supports various extended syntaxes to enhance the readability and expressiveness of articles. Here are the Markdown syntaxes we support and examples:

## 1. Headings

Use `#` to indicate different levels of headings:

::: warning
Please note: Heading level 1 `#` will be used for the article title, do not use heading level 1 in the article body.
:::

```markdown
## Second-Level Heading

### Third-Level Heading

#### Fourth-Level Heading

##### Fifth-Level Heading

###### Sixth-Level Heading
```

## 2. Text Formatting

Support **bold**, _italic_, ~~strikethrough~~, and <u>underline</u>:

```markdown
**Bold**
_Italic_
~~Strikethrough~~
<u>Underline</u>
```

## 3. Blockquotes

Use `>` to create blockquotes:

```markdown
> This is a blockquote.
>
> > This is a nested blockquote.
```

## 4. Lists

Supports unordered lists (`-` or `*`) and ordered lists (`1.`, `2.`, `3.`):

```markdown
- Unordered item 1
- Unordered item 2
  - Nested item 1
  - Nested item 2

1. Ordered item 1
2. Ordered item 2
   1. Nested ordered item
   2. Nested ordered item
```

## 5. Code Blocks

Supports **inline code**, <kbd>kbd</kbd> keys, and **multi-line code blocks**:

::: tip

1. Code blocks support syntax highlighting for multiple languages, and you can click to copy the code.
2. `<kbd>` is used for displaying keyboard keys with a built-in icon.

:::

````markdown
`Inline code example`

<kbd>Ctrl</kbd> + <kbd>C</kbd>

```python
# Python code block example
def hello():
    print("Hello, SuzuBlog!")
```
````

## 6. Horizontal Rule

Use `---` to create a horizontal rule:

`markdown`

## 7. Links

Supports both internal and external hyperlinks:

```markdown
[Visit SuzuBlog](https://www.zla.pub)
```

## 8. Images

Supports inserting images using relative or absolute paths:

::: tip

1. A **relative path** is based on the `public` folder. For example, `/images/logo.png` refers to `logo.png` inside the `images` folder under `public`.
2. **External images** must use absolute URLs starting with `https://`.

:::

```markdown
![SuzuBlog Logo](/images/logo.png)
```

## 9. Tables

Use `|` and `-` to create tables:

```markdown
| Name    | Release Date | Rating     |
| ------- | ------------ | ---------- |
| Suzu    | Nov 2024     | ⭐⭐⭐⭐⭐ |
| Next.js | Oct 2016     | ⭐⭐⭐⭐   |
```

## 10. Emojis

Supports using **Emoji** symbols:

```markdown
🎉 ✨ 🚀 📖 🔗 😊
```

## 11. Mathematical Formulas (MathJax)

Supports **LaTeX** syntax for mathematical formulas:

```markdown
$$
E = mc^2
$$
```

## 12. Collapsible Details

Use `<details>` and `<summary>` to create collapsible content:

```markdown
<details>
<summary>Click to view details</summary>

This is the hidden content.

</details>
```

## 13. Line Breaks

Use `<br>` or two spaces followed by Enter to insert a line break:

```markdown
First line<br>Second line
```

## 🚀 Conclusion

These are the Markdown syntax features supported by SuzuBlog. You can use them to write rich and well-structured articles, making your blog content more engaging and readable! 📖✨

If you have any questions or suggestions (such as additional syntax support or styling issues), feel free to open an issue on [GitHub](https://github.com/ZL-Asica/SuzuBlog/issues/new/choose)! 🚀
