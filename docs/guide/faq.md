# 常见问题

## 应该使用哪个 Node.js 和 pnpm 版本？

使用 Node.js 24，具体版本见仓库 `.node-version`。SuzuBlog 1.14.0 使用 pnpm 12.16.1，版本记录在 `package.json` 的 `packageManager` 中。

## 修改配置后没有生效？

配置位于根目录的 `config.yml`。重启开发服务器，或重新构建并部署。检查终端中的 Zod 校验错误，确认字段名、类型和 URL 格式。

## 文章为什么是 404？

确认文件位于 `posts` 顶层，扩展名为 `.md`，URL 与文件名一致。生产环境默认不生成草稿页面，`hidden` 页面只能在开发环境显式开启。详见 [文章状态](./posts/#文章状态)。

部署后新增的文章需要重新构建。`posts/_pages` 中仅有固定的关于和友链页面会生成路由。

## 日期解析报错怎么办？

日期需要是字符串，例如 `date: '2026-10-30 09:00:00'`。给日期加引号，避免 YAML 将其解析为日期对象。

## 图片或图库没有按预期显示？

本地图片从站点根路径引用，例如 `/images/photo.jpg`，文件放在 `public/images`。远程图片使用 HTTPS URL。

图库的开始和结束标记各占一行。轮播使用 `[grid mode=carousel]`，详见 [图片与图库](./posts/grammar#图库)。扩展语法请在 SuzuBlog 中预览，编辑器的普通 Markdown 预览可能不支持。

## 是否支持多语言博客？

`lang` 设置界面语言，内置中文、英文和日文，其他语言回退到英文。文章翻译和多语言路由需要自行实现。

## 模板更新会覆盖我的文件吗？

同步工作流需手动运行。它保留 `posts`、`public` 和 `config.yml`，会更新其他模板文件。先保存自定义修改，再按 [更新模板](./index#更新模板) 操作。新配置需要手动补充。

## 如何反馈问题？

在 [GitHub Issues](https://github.com/ZL-Asica/SuzuBlog/issues) 中提供版本、复现步骤、相关配置和终端日志。文档错误可提交到 [文档仓库](https://github.com/ZL-Asica/docs-SuzuBlog/issues)。
