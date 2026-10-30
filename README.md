# SuzuBlog Docs

Chinese and English documentation for [SuzuBlog 1.14.0](https://github.com/ZL-Asica/SuzuBlog/releases/tag/v1.14.0), built with VitePress.

- [中文文档](https://suzu.zla.app/)
- [English documentation](https://suzu.zla.app/en/)
- [SuzuBlog source](https://github.com/ZL-Asica/SuzuBlog)
- [Live demo](https://zla.pub/)

## Development

Use Node.js from `.node-version` and pnpm 12.16.1 from `package.json`.

```bash
pnpm install
pnpm docs:dev
```

Open `http://localhost:4000`.

```bash
pnpm lint:fix
pnpm docs:build
pnpm docs:preview
```

Chinese pages live in `docs`, with matching English pages in `docs/en`. Update both languages when changing instructions or examples. Keep explanations short and check them against the SuzuBlog source.

Submit changes in a pull request. Report documentation errors in [Issues](https://github.com/ZL-Asica/docs-SuzuBlog/issues).

## License

Documentation code uses the [MIT License](./LICENSE). Documentation content uses [CC BY 4.0](./LICENSE-CC). SuzuBlog uses [AGPL-3.0](https://github.com/ZL-Asica/SuzuBlog/blob/main/LICENSE).

Citation metadata is available in [CITATION.cff](./CITATION.cff).
