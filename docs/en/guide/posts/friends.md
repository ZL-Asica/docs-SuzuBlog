# Friends

Edit `posts/_pages/Friends.md`. Put a JSON array in a code block with the case-sensitive language label `Links`.

````markdown
```Links
[
  {
    "title": "Example blog",
    "link": "https://example.com/",
    "img": "https://example.com/avatar.png",
    "des": "A friend's blog"
  }
]
```
````

| Field   | Purpose                       |
| ------- | ----------------------------- |
| `title` | Site name, optional           |
| `link`  | Full URL, required            |
| `img`   | Icon or avatar path, required |
| `des`   | Short description, optional   |

Use valid JSON without comments or trailing commas. Add multiple `Links` blocks with Markdown headings between them to group sites.

To accept link requests in comments, set `showComments: true` in the page frontmatter and configure a comment service in `config.yml`.
