# 参与贡献

代码和功能问题请提交到 [SuzuBlog](https://github.com/ZL-Asica/SuzuBlog)，文档修改请提交到 [docs-SuzuBlog](https://github.com/ZL-Asica/docs-SuzuBlog)。

## 修改博客代码

先阅读 [贡献指南](https://github.com/ZL-Asica/SuzuBlog/blob/v1.14.0/CONTRIBUTING.md) 和 [开发指南](https://github.com/ZL-Asica/SuzuBlog/blob/v1.14.0/DEVELOPMENT.md)。Fork 仓库，在新分支中修改，运行 `pnpm lint:fix` 和与改动相关的构建检查后提交 PR。

新增配置字段时，同步更新 `config.yml`、`src/schemas/config.ts` 和文档。内容状态的变更需要同时检查页面、列表、搜索、RSS、sitemap 和 LLM 输出。

## 修改文档

```bash
git clone https://github.com/your-username/docs-SuzuBlog.git
cd docs-SuzuBlog
pnpm install
pnpm docs:dev
```

打开 `http://localhost:4000`。文档使用 VitePress，中文文件位于 `docs`，英文文件位于 `docs/en`。

同时更新两种语言，保持配置、示例和功能说明一致。写清操作和结果，删去重复内容。提交前运行：

```bash
pnpm lint:fix
pnpm docs:build
```

## 报告问题

提供版本、最小复现步骤和相关日志。界面问题可附截图。涉及安全敏感信息时，请发送到 <zl@zla.app>。
