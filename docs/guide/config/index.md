# config.yml

站点设置保存在项目根目录的 `config.yml`，由 Zod 校验。修改后重新构建部署，字段名区分大小写。完整示例见 [1.14.0 的配置文件](https://github.com/ZL-Asica/SuzuBlog/blob/v1.14.0/config.yml)。

## 站点信息

```yaml
title: Suzu
subTitle: My blog
description: 日常记录与技术笔记
keywords: 'Suzu, blog, Next.js'
author:
  name: Your name
  link: https://example.com
lang: zh-CN
siteUrl: https://blog.example.com
avatar: /images/avatar.jpg
background: /images/background.jpg
slogan: 记录日常
googleAnalytics:
```

| 字段                         | 用途                                               |
| ---------------------------- | -------------------------------------------------- |
| `title`                      | 站点名称                                           |
| `subTitle`                   | 副标题                                             |
| `description`                | 默认描述和 SEO 摘要                                |
| `keywords`                   | 逗号分隔的关键词，可留空                           |
| `author.name`、`author.link` | 作者名称和个人主页完整 URL                         |
| `lang`                       | BCP 47 语言标签，如 `zh-CN`、`en`、`ja`，默认 `en` |
| `siteUrl`                    | 公开站点的根 URL，不带末尾斜杠                     |
| `avatar`                     | 首页头像                                           |
| `background`                 | 文章未设置缩略图时使用的图片                       |
| `slogan`                     | 首页头像下方的文字，最多 100 个字符                |
| `googleAnalytics`            | 跟踪 ID，如 `G-XXXXXXXXXX`，留空禁用               |

本地图片放在 `public/images`，引用时使用 `/images/...`。也可使用完整的 HTTPS 图片地址。

`lang` 控制界面文案和页面语言属性。内置中文、英文、日文文案，其他语言回退到英文。它不会翻译文章或创建多语言路由。

## 图标和头部链接

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

每项对应一个 HTML `<link>` 标签。`rel` 和 `href` 必填，`type` 和 `sizes` 可选。示例文件放在 `public/icons`。

## 文章和页脚

```yaml
postsPerPage: 5
creativeCommons:
  type: CC BY-SA 4.0
  link: https://creativecommons.org/licenses/by-sa/4.0/
travellings: false
startYear: 2024
```

| 字段              | 用途                                           |
| ----------------- | ---------------------------------------------- |
| `postsPerPage`    | 每页文章数，范围 1–15，未设置或留空时使用 5    |
| `creativeCommons` | 文章许可的名称和完整链接                       |
| `travellings`     | 显示 [开往](https://www.travellings.cn/) 入口  |
| `startYear`       | 页脚起始年份，范围 1900 至当年，留空只显示当年 |

文章可通过 `showLicense: false` 隐藏许可声明。

## 动画列表

```yaml
anilist_username: your-username
anilist_anime_name_style: english
```

`anilist_username` 用于 `/about/anime`，留空隐藏列表。名称风格支持 `english`、`romaji`、`native`。未设置时，日语站点使用 `native`，其他语言使用 `english`，名称缺失时回退到 `romaji`。

## 社交链接和 RSS

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

填写用户名或 ID，留空隐藏对应图标。`orcid_id` 使用 `0000-0000-0000-0000` 格式，`email` 填完整邮箱。

`rss` 有三种设置：

| 值      | 结果                        |
| ------- | --------------------------- |
| `true`  | 生成 `/feed.xml` 并显示图标 |
| `false` | 生成 feed，隐藏图标         |
| 留空    | 不生成 feed，隐藏图标       |

构建还会生成 `/llms.txt` 和 `/llms-full.txt`。RSS、sitemap 和 LLM 文件中的文章仅包含 `published` 状态。停用 RSS 后，检查并删除之前生成的 `public/feed.xml`。

## 评论

```yaml
twikooEnvId: https://comments.example.com
disqusShortname:
```

`twikooEnvId` 填 Twikoo 服务完整 URL，`disqusShortname` 填 Disqus 站点短名称。两项都填写时优先使用 Twikoo，都留空则禁用评论。单篇文章或页面可用 `showComments: false` 关闭评论。

## 自定义代码

```yaml
headerJavascript:
  - /scripts/custom.js
slotFooter: |
  <p>Custom footer</p>
```

`headerJavascript` 每项是脚本 URL 或 `public` 下的根路径，例如 `public/scripts/custom.js` 对应 `/scripts/custom.js`。`slotFooter` 将 HTML 插入页脚，仅填写你信任的内容。
