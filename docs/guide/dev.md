# 💻 本地开发指南

SuzuBlog 支持无需本地环境即可运行。但如果你希望在发布前预览文章在网站上的最终呈现效果，可以选择在本地进行开发与预览。

## 1. 环境与工具准备

如果你已经具备以下开发环境，也可以跳过本部分：

```plaintext
Node.js >= 20
git
pnpm
```

### 1.1 安装 Node.js

在终端（cmd/Powershell）中运行以下命令检查是否已安装 Node.js：

```bash
node --version
```

若显示类似 `v22.0.0` 的版本号，说明已安装；否则请前往官网安装。

推荐使用最新版 LTS：

- **macOS/Linux** 推荐使用 `nvm` 管理
- **Windows** 推荐试用 `WSL` 或直接使用 installer 安装

👉 [Node.js 官方下载地址](https://nodejs.org/en/download)

### 1.2 安装 Git

在 clone 仓库前，请确认已安装 Git。运行：

```bash
git --version
```

若输出类似 `git version 2.40.0`，说明已安装；否则请前往官网安装：

👉 [Git 官方下载地址](https://git-scm.com/downloads)

### 1.3 克隆项目仓库

在终端中运行以下命令，将仓库克隆到本地：

```bash
git clone https://github.com/你的用户名/你的仓库名.git
```

### 1.4 安装 pnpm

SuzuBlog 使用 `pnpm` 作为包管理工具。运行以下命令检查是否已安装：

```bash
pnpm --version
```

若未安装，可以使用 `corepack` 安装：

```bash
npm install --global corepack@latest
corepack enable pnpm
```

若遇问题，可参考官方文档：

👉 [pnpm 安装指南](https://pnpm.io/installation)

## 2. 安装依赖

在项目目录下运行：

```bash
pnpm install
```

## 3. 启动本地开发服务器

启动开发环境：

```bash
pnpm dev
```

浏览器访问 `http://localhost:3000` 即可预览本地网站。

## 4. 构建与预览发布效果

如需模拟正式发布后的效果，可运行：

```bash
pnpm build
pnpm start
```

同样访问 `http://localhost:3000` 查看效果。

## 5. 常用命令补充

- **代码检查：**

  ```bash
  pnpm lint
  ```

- **自动修复格式：**

  ```bash
  pnpm lint:fix
  ```
