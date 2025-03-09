# ❓ 常见问题（FAQ）

## **1. 为什么选择 SuzuBlog？**

SuzuBlog 是一个基于 **Next.js** 和纯 **Markdown** 的极简博客模板，具有以下特点：

- 极速性能：支持增量静态再生（ISR）和静态站点生成（SSG），让你的博客秒开。
- 简单易用：只需几分钟即可启动，无需数据库和复杂的配置。
- 易于定制：通过简单的 `config.yml` 配置文件即可快速调整站点样式和功能。
- 兼容性强：Markdown 格式的文章和页面，支持代码高亮、LaTeX 公式和多种标签。

## **2. 如何配置站点信息？**

在项目根目录中找到 `config.yml` 文件，按照以下左侧 [config.yml](./config/) 页面的详细教程进行修改：

- 修改站点名称、描述和作者信息。
- 配置导航栏和社交链接。
- 设置支持的多语言选项。

## **3. 如何撰写和管理文章？**

- 将 Markdown 格式的文章文件放置在 `posts` 文件夹中。
- 文件名会自动成为文章的 URL，例如 `posts/my-post.md` 将被访问为 `/my-post`。
- 如果需要自定义页面，例如“关于我”或“友情链接”，可以编辑 `posts/_pages` 文件夹中的对应文件。

## **4. 如何部署我的博客？**

### 推荐方法：使用 [Vercel](https://vercel.com)

1. 登录 Vercel 并导入你的 GitHub 项目。
2. 点击部署按钮，Vercel 将自动完成构建和托管。

### 本地预览或部署

1. 确保安装了 [Node.js](https://nodejs.org/) 和 [pnpm](https://pnpm.io/)。
2. 运行以下命令：

   ```bash
   pnpm install
   pnpm dev
   ```

3. 打开浏览器访问 `http://localhost:3000`。

## **5. 模板更新时，我的修改会丢失吗？**

不会！通过 **GitHub Actions**，你的博客会自动同步模板的最新更新，但以下目录不会被覆盖：

- `public`：你的静态资源文件。
- `posts`：你的所有文章内容。
- `config.yml`：你的站点配置信息。

## **6. 是否支持多语言？**

是的！SuzuBlog 支持多语言功能，具体实现如下：

1. 在 `config.yml` 中添加多语言配置，例如 `zh`、`en`、`ja`。
2. 系统会根据你的设置自动生成对应语言的导航栏翻译（包括 aria 内容）。

## **7. 如何优化 SEO？**

SuzuBlog 内置了完整的 SEO 支持：

- 自动生成 `sitemap.xml` 和 `robots.txt`。
- 提供 Open Graph 和 Twitter Card 元信息。
- 支持配置站点的 `meta` 标签和描述信息，提升搜索引擎可见性。
- 每一个页面都会根据内容自动生成 `meta` 标签，包括文章的标题、描述和关键词。

## **8. 为什么我需要 Node.js 18 或更高版本？**

SuzuBlog 使用了现代的工具链和功能（如 ESM 模块、`pnpm` 和 Tailwind CSS），这些功能需要 Node.js 18 或更高版本支持。

## **9. 如果遇到问题，该怎么办？**

- **查看文档**：阅读完整的 SuzuBlog 文档，了解详细的使用说明。
- **加入社区**：访问 [GitHub Issues](https://github.com/ZL-Asica/SuzuBlog/issues) 提交问题或查看已有的解决方案。
- **联系我们**：通过 GitHub 页面上的联系方式获取帮助。

希望这些解答能帮助你顺利使用 SuzuBlog！如果还有其他问题，请随时联系或提交反馈哦～ 💕✨
