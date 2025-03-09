# 🔗 Friends Page Guide

The friends page is a common feature in blogs. In SuzuBlog, we use a specific style to render and display friends links, making it easier to manage and showcase them.

The file `/posts/_pages/Friends.md` is the location for your friends page. You can write any markdown content in this file, but the links section must follow the format described below to ensure the correct rendering of the link card style.

## 📜 Frontmatter Configuration

Follow the configuration method in the [\_pages introduction](./pages) to set up the Frontmatter for the friends page, which is used to set the basic information and display effects of the page.

It is recommended to set `showComments` to `true` to allow visitors to leave messages on the friends page to exchange links or update information.

## 🖇️ Friends Link Format

Each link must follow a specific JSON format to ensure the correct rendering of link cards:

### Example Structure

Note that the links must be included inside a code block with the ` ```Links` marker at the start. Below is an example configuration you can refer to.

````markdown
```Links
[
  {
    "title": "Personal Academic Website",
    "link": "https://www.zla.app/",
    "img": "https://r2.img.zla.app/2024/12/02/ae779a.webp",
    "des": "My personal academic website (English)."
  },
  {
    "title": "React Toolkit",
    "link": "https://react.zla.app/",
    "img": "https://react.zla.app/logo.png",
    "des": "A React toolkit that I built and maintain."
  }
]
```
````

### Configuration Explanation

The JSON structure for each friend link is as follows:

```json
{
  "title": "The name of the link",
  "link": "The URL of the link",
  "img": "The image or avatar URL of the link",
  "des": "A short description of the link"
}
```

- **`title`**: The title of the link, such as the name of a personal blog or project.
- **`link`**: The complete URL of the link.
- **`img`**: The URL of the link's avatar or image. Supports any size and format.
- **`des`**: A short description of the link, used to describe the website or project. It will be displayed when hovering over the link (if empty, it will not be displayed).

By following this format, your friends page will render correctly, allowing you to effectively manage and display your links. Happy blogging! ✨
