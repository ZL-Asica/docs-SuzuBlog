# Post settings

Save posts as `posts/*.md`. The filename sets the path: `posts/my-post.md` becomes `/my-post`.

## Frontmatter

Wrap YAML metadata in `---` at the top of the file. Quote dates so YAML treats them as strings.

```yaml
---
title: Example post
date: '2026-10-30 09:00:00'
author: ZL Asica
thumbnail: /images/example.jpg
tags:
  - Markdown
categories:
  - Tutorials
showComments: true
showLicense: true
showThumbnail: true
autoSlug: true
status: published
---
```

| Field                | Purpose and default                                                                                 |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| `title`              | Title, up to 100 characters. Falls back to the filename                                             |
| `date`               | Publication date as `'YYYY-MM-DD'` or `'YYYY-MM-DD HH:mm:ss'`. Falls back to file modification time |
| `author`             | Author, up to 30 characters. Falls back to the author in `config.yml`                               |
| `thumbnail`          | Image path. Falls back to `background` in `config.yml`                                              |
| `tags`, `categories` | Arrays of strings, case-sensitive                                                                   |
| `redirect`           | Redirect destination. The article redirects instead of rendering its content                        |
| `showComments`       | Show comments, default `true`. Requires a configured comment service                                |
| `showLicense`        | Show the license notice, default `true`                                                             |
| `showThumbnail`      | Show the thumbnail, default `true`                                                                  |
| `autoSlug`           | Show hierarchical numbering before body headings, default `true`. Does not change the post URL      |
| `status`             | Post visibility, default `published`                                                                |

## Visibility

| Status      | Production page  | Post list and search             | RSS, sitemap, LLM files | Search engine indexing |
| ----------- | ---------------- | -------------------------------- | ----------------------- | ---------------------- |
| `published` | Available        | Included                         | Included                | Allowed                |
| `unlisted`  | Available by URL | Excluded                         | Excluded                | `noindex`              |
| `draft`     | 404 by default   | Included when preview is enabled | Excluded                | `noindex`              |
| `hidden`    | Always 404       | Excluded                         | Excluded                | `noindex`              |

Drafts are available in development. To preview drafts in a production build, set `ALLOW_DRAFTS=true` when building and running the app. Hidden posts are available only outside production with `ALLOW_HIDDEN=true`. This setting cannot enable them in production.

Anyone with the URL can access an unlisted post. Visibility settings do not provide access control.

## Excerpts

Use `<!--more-->` to choose the source of the excerpt:

```markdown
This is the excerpt.

<!--more-->

The rest of the post goes here.
```

The excerpt uses content before the marker, truncated to 150 characters before Markdown cleanup. Without a marker, it uses the beginning of the post.
