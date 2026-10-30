# Contributing

Submit code and feature changes to [SuzuBlog](https://github.com/ZL-Asica/SuzuBlog). Submit documentation changes to [docs-SuzuBlog](https://github.com/ZL-Asica/docs-SuzuBlog).

## Blog code

Read the [contribution guide](https://github.com/ZL-Asica/SuzuBlog/blob/v1.14.0/CONTRIBUTING.md) and [development guide](https://github.com/ZL-Asica/SuzuBlog/blob/v1.14.0/DEVELOPMENT.md). Fork the repository, work on a new branch, and run `pnpm lint:fix` and any relevant build checks before opening a PR.

For new config fields, update `config.yml`, `src/schemas/config.ts`, and the docs together. Changes to content visibility need checks across pages, lists, search, RSS, sitemap, and LLM output.

## Documentation

```bash
git clone https://github.com/your-username/docs-SuzuBlog.git
cd docs-SuzuBlog
pnpm install
pnpm docs:dev
```

Open `http://localhost:4000`. The docs use VitePress. Chinese pages live in `docs` and English pages in `docs/en`.

Update both languages and keep settings, examples, and feature descriptions aligned. Describe the action and its result, and remove repetition. Before submitting, run:

```bash
pnpm lint:fix
pnpm docs:build
```

## Report a problem

Include the version, minimal reproduction steps, and relevant logs. Add screenshots for UI issues. Send security-sensitive reports to <zl@zla.app>.
