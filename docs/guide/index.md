# 🚀 快速开始

欢迎使用 **SuzuBlog**，以下是快速启动你的博客的步骤指南：

## 1. 使用 Vercel 部署

点击下方按钮即可使用 Vercel 部署你的博客：

[![Deploy with Vercel][vercel-button]][vercel-deploy-link]

::: warning
记得把 Vercel 环境变量中的 `ENABLE_EXPERIMENTAL_COREPACK` 设置为 `1` 以启用 pnpm 消除 Warning。
:::

这会自动创建一个新的 GitHub 仓库，并部署你的博客到 Vercel。部署完毕后，你就可以开始自定义你的博客了。

## 2. 配置站点信息

在项目的根目录找到 `config.yml` 文件，根据以下提示修改：

- 设置 **站点名称**、**描述** 和 **作者信息**。
- 配置你的社交链接和其他个性化选项。

## 3. 撰写文章

- 将 Markdown 格式的文章放入 `posts` 文件夹，文件名即为文章的 URL。
- 如果需要自定义页面（如“关于我”或“友情链接”），请修改 `posts/_pages` 目录下的对应文件。

## 4. 本地部署/预览 (可选)

1. 确保你安装了 [Node.js](https://nodejs.org/)。
2. 确保你配置了 [pnpm](https://pnpm.io/)，如果不确定，可以按照以下步骤检查并安装：

   ```bash
   pnpm --version
   ```

   如果提示没有该命令，可以运行以下命令开启：

   ```bash
   npm install --global corepack@latest
   corepack enable pnpm
   ```

3. 确保上午前置条件满足后，在项目根目录运行以下命令以安装依赖并启动本地服务：

   ```bash
   pnpm install
   pnpm dev
   ```

4. 打开浏览器访问 `http://localhost:3000`，即可预览你的博客。

5. 本地构建及预览（想要在自己的服务器上部署也是相同的步骤，但要记得开启进程守护）：

   如果你想要在本地尝试构建并预览可以运行以下命令：

   ```bash
   pnpm build
   pnpm start
   ```

## 5. 手动同步 (可选)

通过 **GitHub Actions**，你可以手动同步 SuzuBlog 模板的最新更新到你自己的博客。

前往你的 GitHub 仓库，点击 `Actions` 标签，找到 `Sync SuzuBlog Main Branch 🎐` Workflow，点击 `Run workflow` 按钮即可同步最新更新。

以下目录在同步时会被忽略，确保你的自定义内容安全：

- `.git`: Git 版本控制目录
- `public`: 你的静态文件目录
- `posts`: 你的文章目录
- `config.yml`: 你的站点配置文件

在同步完成后，自行检查对照 `config.yml`，手动补充和配置新增的配置项。

:::info
如果你在使用过程中遇到问题，别忘了查看我们的详细文档或加入社区寻求帮助！✨
:::

[vercel-button]: https://vercel.com/button
[vercel-deploy-link]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FZL-Asica%2FSuzuBlog&env=ENABLE_EXPERIMENTAL_COREPACK&envDescription=This%20is%20option%20to%20enable%20corepack%20by%20default%20to%20use%20pnpm.%20Set%20this%20to%201.&envLink=https%3A%2F%2Fvercel.com%2Fdocs%2Fbuilds%2Fconfigure-a-build%23corepack&project-name=suzu-blog&repository-name=SuzuBlog&redirect-url=https%3A%2F%2Fsuzu.zla.app%2F&demo-title=ZLA%20%E5%B0%8F%E7%AB%99%20(Demo)&demo-description=ZL%20Asica%2C%20the%20creator%20of%20SuzuBlog%2C%20personal%20Blog.&demo-url=https%3A%2F%2Fzla.pub%2F
