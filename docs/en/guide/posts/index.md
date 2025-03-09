# 📝 Blog Posts Settings

You only need to write your posts in Markdown and place them in the **`posts` folder**. SuzuBlog will automatically render your posts, and the filename will serve as the post's URL.

Each post **must** include **Frontmatter**, which is used to define essential metadata and display settings.

## Frontmatter

### 🔖 What is Frontmatter?

Frontmatter is a metadata block at the top of a Markdown file, enclosed within triple dashes, for example:

```yaml
---
title: Sample Post
date: 2024-12-08
author: ZL Asica # Author (optional)
thumbnail: /images/example-thumbnail.jpg # Thumbnail (optional)
tags: # Tags (optional)
  - SuzuBlog
  - Frontmatter
categories: # Categories (optional)
  - Tutorial
redirect: /example-redirect # Redirect URL (optional)
showComments: true # Show comments (optional)
showLicense: true # Show license statement (optional)
autoSlug: true # Automatically generate hierarchical paths (optional)
---
```

### 🛠️ Explanation of Frontmatter Fields

#### **Required Fields**

- **`title`**: The title of the post, which will be displayed in the page title and summary.
- **`date`**: The publication date of the post, formatted as `YYYY-MM-DD`. (If not set, the last modified date of the file will be used.)

#### **Global Fields**

- **`author`**: The name of the post’s author. (If not set, the global author name will be used.)
- **`thumbnail`**: The thumbnail image path for the post, which can be a relative path or a full URL. (If not set, the default thumbnail specified in `config.yml` will be used.)

#### **Optional Fields**

::: warning
⚠️ The values for `tags` and `categories` must be arrays and are case-sensitive. It is recommended to maintain a consistent capitalization format to avoid duplicate categories.
:::

- **`tags`**: An array of tags for finer classification of the post. Example:

  ```yaml
  tags:
    - SuzuBlog
    - Frontmatter
    - Next.js
  ```

  Tags are primarily used for indexing and filtering posts. You can add multiple tags, but it's recommended to keep them between 2-5 per post.

- **`categories`**: An array of categories for higher-level content organization. Example:

  ```yaml
  categories:
    - Tutorial
    - Development
  ```

  Categories typically represent broader topics, and each post should have 1-2 categories for better content organization.

- **`redirect`**: Specifies a redirect URL for the post (e.g., `"/new-url"`). If set, the post content will not be displayed, and visitors will be redirected to the specified URL.
- **`showComments`**: Determines whether to show the comment section. Default is `true`.
- **`showLicense`**: Determines whether to display the post's copyright license. Default is `true`.
- **`showThumbnail`**: Determines whether to display the post's thumbnail. Default is `true`.
- **`autoSlug`**: Automatically generates hierarchical paths for the post. Default is `true`. (If set to `false`, the post’s slug will be derived from the title inside the Markdown file instead.)

## ✂️ Excerpt Truncation

Use `<!--more-->` to manually define where the post excerpt should be truncated, for example:

```markdown
This is the beginning of the post.

<!--more-->

This is the remaining content of the post.
```

- If `<!--more-->` is not set, the system will automatically generate an excerpt that fits within the post card without overflowing.
