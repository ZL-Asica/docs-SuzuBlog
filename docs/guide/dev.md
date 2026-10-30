# 本地开发

## 环境

安装 Git，使用仓库 `.node-version` 指定的 Node.js 24 和 `package.json` 指定的 pnpm 12.16.1。

```bash
corepack enable pnpm
git clone https://github.com/your-username/your-blog.git
cd your-blog
pnpm install
pnpm dev
```

打开 `http://localhost:3000`。

## 常用命令

| 命令            | 用途                              |
| --------------- | --------------------------------- |
| `pnpm dev`      | 启动 Next.js 开发服务器           |
| `pnpm lint`     | 检查代码                          |
| `pnpm lint:fix` | 检查并修复代码格式                |
| `pnpm build`    | 先运行 `lint:fix`，再构建生产版本 |
| `pnpm start`    | 启动已构建的生产版本              |

```bash
pnpm build
pnpm start
```

生产预览同样使用 `http://localhost:3000`。部署到自己的服务器时，需要保留 Next.js 运行环境并配置进程管理。

## 文件位置

| 路径                      | 内容                          |
| ------------------------- | ----------------------------- |
| `config.yml`              | 站点设置                      |
| `posts/*.md`              | 文章                          |
| `posts/_pages/About.md`   | 关于页面                      |
| `posts/_pages/Friends.md` | 友链页面                      |
| `public/images`           | 图片，通过 `/images/...` 引用 |
| `src/app`                 | 路由和元数据                  |
| `src/components`          | 界面组件和 Markdown 渲染      |
| `src/services`            | 配置读取、内容读取和生成文件  |
| `src/styles`              | 主题和样式                    |

`pnpm build` 会生成 `public/feed.xml`、`public/llms.txt` 和 `public/llms-full.txt`。提交前检查这些文件的变化。RSS 生成取决于 `socialMedia.rss`，详见 [站点配置](./config/)。

## 检查修改

提交前运行 `pnpm lint:fix`。修改配置、路由、内容处理或界面后，再运行 `pnpm build`。项目目前没有测试脚本。

修改配置字段时，同时更新 `config.yml` 和 `src/schemas/config.ts`。更多开发约定见 [贡献指南](https://github.com/ZL-Asica/SuzuBlog/blob/v1.14.0/CONTRIBUTING.md)。
