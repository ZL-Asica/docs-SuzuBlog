# Markdown syntax

These examples apply to posts and pages in SuzuBlog 1.14.0. Preview them in your blog to see how the extensions render.

## Basic syntax

Start body headings at level two. Frontmatter supplies the page title.

```markdown
## Heading two

### Heading three

**Bold**, _italic_, ~~strikethrough~~, <u>underline</u>

> A quotation

- An unordered item
- [ ] A task
- [x] A completed task

1. An ordered item
2. Another item

[A link](https://example.com)

First line<br>Second line

---
```

Tables, inline code, and fenced code blocks are supported. Code blocks use Shiki highlighting and include a copy button.

````markdown
`inline code`

<kbd>Ctrl</kbd> + <kbd>C</kbd>

```typescript
const message = 'Hello, SuzuBlog!'
```

| Name     | Type          |
| -------- | ------------- |
| SuzuBlog | Blog template |
````

## Inline extensions

```markdown
==Highlighted text==
H~2~O
E=mc^2^

[spoiler]Hidden content, including :wink: emoji[/spoiler]

:sparkles: :smile:
```

`~...~` produces subscript and `~~...~~` produces strikethrough. Click or tap a spoiler to reveal it and repeat to hide it.

In plain text, `--` becomes an en dash and `---` becomes an em dash. Inline code and code blocks stay unchanged.

## Images

Place images in `public/images` and reference them as `/images/...`. Use full HTTPS URLs for remote images.

```markdown
![Image caption](/images/photo.jpg)
![Image caption|640x360, 75%](/images/photo.jpg)
![Left image|320x180, left](/images/photo.jpg)
![Wide image|wide](/images/photo.jpg)
```

Text before `|` supplies the alt text and caption. After it, add dimensions, a width percentage, and a layout, separated by commas.

| Parameter       | Purpose                                           |
| --------------- | ------------------------------------------------- |
| `640x360`       | Image width and height                            |
| `75%`           | Container width, capped at 100%                   |
| `center`        | Centered, the default layout                      |
| `left`, `right` | Float on larger screens, stack on smaller screens |
| `thumbnail`     | Thumbnail layout                                  |
| `wide`          | Wide image                                        |
| `full`          | Viewport-width image                              |

Click an image to view it at a larger size.

## Galleries

Wrap images in `[grid]` to create a grid in source order. Include image dimensions where possible.

```markdown
[grid]
![First image|640x360](/images/first.jpg)
![Second image|480x720](/images/second.jpg)
![Third image|640x640](/images/third.jpg)
[/grid]
```

Set `mode=carousel` for a carousel:

```markdown
[grid mode=carousel]
![First image|640x360](/images/first.jpg)
![Second image|480x720](/images/second.jpg)
[/grid]
```

A carousel shows one image at a time and lets readers switch between images.

Click a gallery image to view it at a larger size and browse other images in the same gallery.

## Callouts

```markdown
::: warning Before you continue
The content supports **Markdown**.
:::
```

Supported types are `info`, `note`, `tip`, `success`, `warning`, `caution`, and `danger`. `error` is an alias for `danger`. Add a title after the type, or omit it to use the default English title.

## Collapsible content

Both HTML and Discourse-style blocks support Markdown content.

```markdown
<details>
<summary>Show details</summary>

Here are the **details**.

</details>

[details="Show details"]

Here are the **details**.

[/details]
```

## Footnotes and abbreviations

```markdown
A sentence with a footnote[^note].

[^note]: Footnote text.

HTML is a markup language.

*[HTML]: HyperText Markup Language
```

Footnotes and abbreviations have preview tooltips. Put each abbreviation definition in its own paragraph to annotate matching text in the body.

## Math

KaTeX renders LaTeX math. Use `$...$` for inline math and `$$` for a display equation.

```markdown
Inline math $E = mc^2$.

$$
E = mc^2
$$
```

Friend cards use a dedicated `Links` code block. See [friends](./friends).
