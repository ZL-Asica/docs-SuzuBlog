# Quick start

This documentation covers SuzuBlog 1.14.0. SuzuBlog uses Next.js, React, and Markdown files. It needs no database.

## Deploy to Vercel

[Deploy with Vercel](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FZL-Asica%2FSuzuBlog) to create a repository in your account and deploy the blog.

Use Node.js 24 and set `ENABLE_EXPERIMENTAL_COREPACK` to `1` so the build uses pnpm 12.16.1 from the repository's `package.json`.

## Set up your site

1. Edit `config.yml` in the project root. Set the title, author, language, and `siteUrl`. Use your public origin without a trailing slash.
2. Replace the sample images in `public/images` and update avatar, background, and icon paths.
3. Save posts in `posts/*.md`. For example, `posts/hello.md` becomes `/hello`.
4. Edit `posts/_pages/About.md` and `posts/_pages/Friends.md` for the about and friends pages.
5. Push your changes and wait for Vercel to redeploy.

See [site configuration](./config/), [post settings](./posts/), and [Markdown syntax](./posts/grammar) for the available options.

## Preview locally

Use the Node.js version in `.node-version` and install pnpm 12.16.1, then run:

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`. See [local development](./dev) for build and deployment steps.

## Update the template

Open Actions in your GitHub repository, select `Sync SuzuBlog Main Branch 🎐`, and choose Run workflow. The workflow needs permission to write repository contents.

It updates template files and commits directly to `main`, preserving `posts`, `public`, and `config.yml`. Custom changes in other files may be overwritten. Commit or back them up before running it.

After syncing, compare your config with the upstream `config.yml` for new fields. Run `pnpm install` and `pnpm build`, review the result, and deploy.
