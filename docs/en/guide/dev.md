# Local development

## Setup

Install Git, use Node.js 24 as specified in `.node-version`, and use pnpm 12.16.1 from `package.json`.

```bash
corepack enable pnpm
git clone https://github.com/your-username/your-blog.git
cd your-blog
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Commands

| Command         | Purpose                                   |
| --------------- | ----------------------------------------- |
| `pnpm dev`      | Start the Next.js development server      |
| `pnpm lint`     | Check code                                |
| `pnpm lint:fix` | Check code and apply formatting fixes     |
| `pnpm build`    | Run `lint:fix`, then build for production |
| `pnpm start`    | Serve the production build                |

```bash
pnpm build
pnpm start
```

The production preview also runs at `http://localhost:3000`. Self-hosting requires a Next.js runtime and process management.

## Files

| Path                      | Contents                                             |
| ------------------------- | ---------------------------------------------------- |
| `config.yml`              | Site settings                                        |
| `posts/*.md`              | Blog posts                                           |
| `posts/_pages/About.md`   | About page                                           |
| `posts/_pages/Friends.md` | Friends page                                         |
| `public/images`           | Images referenced as `/images/...`                   |
| `src/app`                 | Routes and metadata                                  |
| `src/components`          | UI components and Markdown rendering                 |
| `src/services`            | Config loading, content loading, and generated files |
| `src/styles`              | Theme and styles                                     |

`pnpm build` generates `public/feed.xml`, `public/llms.txt`, and `public/llms-full.txt`. Review changes to these files before committing. RSS generation depends on `socialMedia.rss`, as described in [site configuration](./config/).

## Validate changes

Run `pnpm lint:fix` before committing. Also run `pnpm build` after changing configuration, routes, content processing, or UI. The project currently has no test script.

When changing config fields, update both `config.yml` and `src/schemas/config.ts`. See the [contribution guide](https://github.com/ZL-Asica/SuzuBlog/blob/v1.14.0/CONTRIBUTING.md) for development conventions.
