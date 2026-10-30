# 快速开始

本文档对应 SuzuBlog 1.14.0。SuzuBlog 使用 Next.js、React 和 Markdown，无需数据库。

## 部署到 Vercel

[使用 Vercel 部署](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FZL-Asica%2FSuzuBlog)。这会在你的账户下创建仓库并部署博客。

使用 Node.js 24，并将 `ENABLE_EXPERIMENTAL_COREPACK` 环境变量设为 `1`，以使用仓库 `package.json` 中指定的 pnpm 12.16.1。

## 修改站点和内容

1. 编辑根目录的 `config.yml`，填写站点名称、作者、语言和 `siteUrl`。`siteUrl` 使用你的公开域名，不带末尾斜杠。
2. 替换 `public/images` 中的示例图片，更新头像、背景和图标路径。
3. 将文章保存到 `posts/*.md`。例如 `posts/hello.md` 对应 `/hello`。
4. 编辑 `posts/_pages/About.md` 和 `posts/_pages/Friends.md`，更新关于和友链页面。
5. 提交到你的仓库，等待 Vercel 重新部署。

完整选项见 [站点配置](./config/)、[文章配置](./posts/) 和 [Markdown 语法](./posts/grammar)。

## 本地预览

使用仓库 `.node-version` 指定的 Node.js 版本，安装 pnpm 12.16.1 后运行：

```bash
pnpm install
pnpm dev
```

打开 `http://localhost:3000`。构建和部署步骤见 [本地开发](./dev)。

## 更新模板

在你的 GitHub 仓库中打开 Actions，选择 `Sync SuzuBlog Main Branch 🎐`，点击 Run workflow。该工作流需要写入仓库内容的权限。

同步会更新模板文件并直接提交到 `main`，保留 `posts`、`public` 和 `config.yml`。其他文件中的自定义修改可能被覆盖，运行前请提交或备份。

同步后，对照上游 `config.yml` 补充新增配置，运行 `pnpm install` 和 `pnpm build`，检查结果后再部署。
