# 🚀 快速开始

欢迎使用 **SuzuBlog**，以下是快速启动你的博客的步骤指南：

## 1. 使用模板

点击 **`Use this template`** 按钮，创建属于你的博客仓库。

## 2. 配置站点信息

在项目的根目录找到 `config.yml` 文件，根据以下提示修改：

- 设置 **站点名称**、**描述** 和 **作者信息**。
- 配置你的社交链接和其他个性化选项。

## 3. 撰写文章

- 将 Markdown 格式的文章放入 `posts` 文件夹，文件名即为文章的 URL。
- 如果需要自定义页面（如“关于我”或“友情链接”），请修改 `posts/_pages` 目录下的对应文件。

## 4. 部署

### 推荐：云端托管

使用 [Vercel](https://vercel.com) 进行部署：

1. 导入你的 GitHub 项目。
2. 按照提示完成部署设置，Vercel 将自动构建并托管你的博客。

### 本地部署/预览

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

## 5. 自动同步

通过 **GitHub Actions**，你的博客会每周自动同步 SuzuBlog 模板的最新更新。

以下目录在同步时会被忽略，确保你的自定义内容安全：

- `.git`: Git 版本控制目录
- `public`: 你的静态文件目录
- `posts`: 你的文章目录
- `config.yml`: 你的站点配置文件

如果你在使用过程中遇到问题，别忘了查看我们的详细文档或加入社区寻求帮助！✨
