# FAQ

## Which Node.js and pnpm versions should I use?

Use Node.js 24, matching the repository's `.node-version`. SuzuBlog 1.14.0 uses pnpm 12.16.1, recorded in the `packageManager` field of `package.json`.

## Why did my config change not take effect?

Edit `config.yml` in the project root. Restart the development server, or rebuild and redeploy. Check terminal output for Zod validation errors and confirm field names, types, and URL formats.

## Why does my post return 404?

Confirm the file is directly under `posts`, ends in `.md`, and matches the URL. Production builds exclude drafts by default. Hidden posts require explicit opt-in in development. See [visibility](./posts/#visibility).

Posts added after deployment need a new build. Only the fixed about and friends pages under `posts/_pages` have routes.

## Why does date parsing fail?

Use a string such as `date: '2026-10-30 09:00:00'`. Quote the date to prevent YAML from parsing it as a date object.

## Why do images or galleries look wrong?

Reference local images from the site root, such as `/images/photo.jpg`, and place them in `public/images`. Use HTTPS URLs for remote images.

Put gallery opening and closing markers on their own lines. Use `[grid mode=carousel]` for a carousel. See [galleries](./posts/grammar#galleries). Preview extensions in SuzuBlog, since a standard editor preview may not support them.

## Can I make a multilingual blog?

`lang` sets the interface language. Chinese, English, and Japanese are included, with English as the fallback. Post translations and language-specific routes require your own implementation.

## Will a template update overwrite my files?

The sync workflow runs manually. It preserves `posts`, `public`, and `config.yml` and updates other template files. Save custom changes first, then follow [template updates](./index#update-the-template). Add new config fields manually.

## How do I report a problem?

Open a [GitHub issue](https://github.com/ZL-Asica/SuzuBlog/issues) with your version, reproduction steps, relevant config, and terminal logs. Report documentation errors in the [docs repository](https://github.com/ZL-Asica/docs-SuzuBlog/issues).
