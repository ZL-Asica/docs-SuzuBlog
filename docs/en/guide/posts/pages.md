# About and friends pages

`posts/_pages/About.md` serves `/about`, and `posts/_pages/Friends.md` serves `/friends`. Filenames are case-sensitive. Other files in this folder do not create routes automatically.

Pages use the same Markdown renderer as posts, including [extended syntax](./grammar).

```yaml
---
title: About me
thumbnail: /images/about.jpg
showComments: false
showLicense: false
showThumbnail: false
autoSlug: false
---
```

| Field           | Purpose                                                                                |
| --------------- | -------------------------------------------------------------------------------------- |
| `title`         | Page title. Falls back to the filename when omitted. Does not change navigation labels |
| `thumbnail`     | Page image. Falls back to the global `background`. An empty string clears it           |
| `showComments`  | Show comments, default `true`                                                          |
| `showLicense`   | Show the license notice, default `true`                                                |
| `showThumbnail` | Show the thumbnail, default `true`                                                     |
| `autoSlug`      | Show hierarchical numbering before body headings, default `true`                       |

Keep the fixed paths. `status` does not control access to these pages, and `redirect` does not redirect them. See [friends](./friends) for link cards.
