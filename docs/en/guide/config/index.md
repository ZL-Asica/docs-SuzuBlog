# config.yml

Site settings live in `config.yml` at the project root and are validated with Zod. Field names are case-sensitive. Rebuild and redeploy after editing. See the [1.14.0 config file](https://github.com/ZL-Asica/SuzuBlog/blob/v1.14.0/config.yml) for a complete example.

## Site identity

```yaml
title: Suzu
subTitle: My blog
description: Notes on everyday life and development
keywords: 'Suzu, blog, Next.js'
author:
  name: Your name
  link: https://example.com
lang: en
siteUrl: https://blog.example.com
avatar: /images/avatar.jpg
background: /images/background.jpg
slogan: Notes from my day
googleAnalytics:
```

| Field                        | Purpose                                                          |
| ---------------------------- | ---------------------------------------------------------------- |
| `title`                      | Site name                                                        |
| `subTitle`                   | Subtitle                                                         |
| `description`                | Default description and SEO summary                              |
| `keywords`                   | Comma-separated keywords, optional                               |
| `author.name`, `author.link` | Author name and full personal website URL                        |
| `lang`                       | BCP 47 language tag such as `zh-CN`, `en`, or `ja`. Default `en` |
| `siteUrl`                    | Public origin without a trailing slash                           |
| `avatar`                     | Homepage avatar                                                  |
| `background`                 | Fallback image for posts without a thumbnail                     |
| `slogan`                     | Text below the homepage avatar, up to 100 characters             |
| `googleAnalytics`            | Tracking ID such as `G-XXXXXXXXXX`. Leave empty to disable       |

Place local images in `public/images` and reference them as `/images/...`. Full HTTPS image URLs also work.

`lang` controls interface text and page language attributes. Chinese, English, and Japanese translations are included. Other languages fall back to English. This setting does not translate posts or create language-specific routes.

## Icons and head links

```yaml
links:
  - rel: icon
    type: image/png
    href: /icons/favicon-96x96.png
    sizes: 96x96
  - rel: icon
    type: image/svg+xml
    href: /icons/favicon.svg
  - rel: apple-touch-icon
    href: /icons/apple-touch-icon.png
    sizes: 180x180
```

Each entry becomes an HTML `<link>` tag. `rel` and `href` are required. `type` and `sizes` are optional. Place the example files in `public/icons`.

## Posts and footer

```yaml
postsPerPage: 5
creativeCommons:
  type: CC BY-SA 4.0
  link: https://creativecommons.org/licenses/by-sa/4.0/
travellings: false
startYear: 2024
```

| Field             | Purpose                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------- |
| `postsPerPage`    | Posts per page, from 1 to 15. Defaults to 5 when omitted or empty                           |
| `creativeCommons` | Content license name and full URL                                                           |
| `travellings`     | Show the [Travellings](https://www.travellings.cn/) link                                    |
| `startYear`       | Footer start year, from 1900 to the current year. Leave empty to show only the current year |

Use `showLicense: false` in a post to hide its license notice.

## Anime list

```yaml
anilist_username: your-username
anilist_anime_name_style: english
```

`anilist_username` supplies the list at `/about/anime`. Leave it empty to hide the list. Name styles are `english`, `romaji`, and `native`. When unset, Japanese sites use `native` and other languages use `english`. Missing names fall back to `romaji`.

## Social links and RSS

```yaml
socialMedia:
  github_username: your-username
  linkedin_username:
  instagram_id:
  orcid_id:
  telegram_username:
  bluesky_username:
  youtube_id:
  zhihu_username:
  bilibili_id:
  email: hello@example.com
  rss: true
```

Enter usernames or IDs. Empty fields hide their icons. Use the `0000-0000-0000-0000` format for `orcid_id` and a full address for `email`.

`rss` has three settings:

| Value   | Result                                 |
| ------- | -------------------------------------- |
| `true`  | Generate `/feed.xml` and show its icon |
| `false` | Generate the feed and hide its icon    |
| Empty   | Skip feed generation and hide its icon |

The build also generates `/llms.txt` and `/llms-full.txt`. Posts in RSS, sitemap, and LLM files are limited to `published` content. After disabling RSS, check for and remove any previously generated `public/feed.xml`.

## Comments

```yaml
twikooEnvId: https://comments.example.com
disqusShortname:
```

Set `twikooEnvId` to the full Twikoo service URL or set `disqusShortname` to your Disqus site shortname. Twikoo takes priority when both are set. Leave both empty to disable comments. Use `showComments: false` in an individual post or page to disable its comments.

## Custom code

```yaml
headerJavascript:
  - /scripts/custom.js
slotFooter: |
  <p>Custom footer</p>
```

Each `headerJavascript` entry is a script URL or a root-relative path under `public`. For example, `public/scripts/custom.js` is referenced as `/scripts/custom.js`. `slotFooter` inserts HTML into the footer. Use trusted content only.
