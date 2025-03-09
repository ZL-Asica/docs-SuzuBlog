# 📄 Special Configuration for the `_pages` Folder

Files inside the **`_pages` folder** (such as "About" and "Friends") require a different configuration than regular articles and do not use standard Frontmatter settings.

Example:

```yaml
---
title: "" # (Optional) Defaults to "About"
thumbnail: "" # (Optional) Page thumbnail
showComments: false # Whether to display the comment section
showLicense: false # Whether to display the copyright statement
showThumbnail: false # Whether to display the thumbnail
---
```

## 🛠️ Explanation of Frontmatter Fields

All fields are optional.

- **`title`**: The title of the page, which will appear in the page title and navigation bar. You can set any text (default is "About").
- **`thumbnail`**: The thumbnail image path for the page, which can be a relative path or a full URL. (If not set, no thumbnail will be displayed.)
- **`showComments`**: Determines whether to show the comment section. Default is `true`. (If set to `false`, the comment section will be hidden.)
- **`showLicense`**: Determines whether to display the copyright statement. Default is `true`. (If set to `false`, the copyright statement will not be shown.)
- **`showThumbnail`**: Determines whether to display the thumbnail. Default is `true`. (If set to `false`, the thumbnail will not be shown.)
