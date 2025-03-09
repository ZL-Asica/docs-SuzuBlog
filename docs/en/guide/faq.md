# ❓ FAQ (Frequently Asked Questions)

## **1. Why choose SuzuBlog?**

SuzuBlog is a minimalist blog template built with **Next.js** and pure **Markdown**, offering the following features:

- **Blazing fast performance**: Supports both Incremental Static Regeneration (ISR) and Static Site Generation (SSG) for instant page loads.
- **Easy to use**: Launch your blog in minutes without databases or complex configurations.
- **Highly customizable**: Quickly adjust site styles and features via a simple `config.yml` file.
- **Strong compatibility**: Supports Markdown articles and pages with code highlighting, LaTeX formulas, and various tags.

## **2. How do I configure site information?**

Locate the `config.yml` file in your project root and follow the detailed instructions on the [config.yml](./config/) page:

- Modify the site title, description, and author information.
- Set up the navigation bar and social links.
- Configure multi-language options.

## **3. How do I write and manage articles?**

- Place your Markdown files in the `posts` folder.
  The filename will automatically become the article's URL (e.g., `posts/my-post.md` will be accessible as `/my-post`).
- To customize special pages like "About Me" or "Friends," edit the corresponding files in the `posts/_pages` folder.

## **4. How do I deploy my blog?**

### Recommended: Use [Vercel](https://vercel.com)

1. Log in to Vercel and import your GitHub project.
2. Click the deploy button, and Vercel will automatically build and host your blog.

### Local Preview or Deployment

1. Ensure that [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/) are installed.
2. Run the following commands in your project directory:

   ```bash
   pnpm install
   pnpm dev
   ```

3. Open your browser and visit `http://localhost:3000`.

## **5. Will my changes be overwritten during updates?**

No! With **GitHub Actions**, your blog automatically syncs with the latest updates from the SuzuBlog template. However, the following directories are excluded from updates to preserve your custom content:

- `public`: For your static assets.
- `posts`: For all your article content.
- `config.yml`: For your site configuration.

## **6. Does SuzuBlog support multiple languages?**

Yes! SuzuBlog supports multi-language functionality. Here's how to set it up:

1. Add multi-language configurations in the `config.yml` file, such as `zh`, `en`, or `ja`.
2. The system will automatically generate navigation bar translations (including aria content) based on your settings.

## **7. How do I optimize SEO?**

SuzuBlog has built-in SEO support with the following features:

- Automatically generates `sitemap.xml` and `robots.txt`.
- Provides Open Graph and Twitter Card metadata.
- Allows configuration of site-level `meta` tags and descriptions to improve visibility in search engines.
- Automatically generates `meta` tags for each page based on content, including article titles, descriptions, and keywords.

## **8. Why do I need Node.js 18 or higher?**

SuzuBlog uses modern tools and features (e.g., ESM modules, `pnpm`, and Tailwind CSS) that require Node.js 18 or higher for compatibility and optimal performance.

## **9. What should I do if I encounter issues?**

- **Read the documentation**: Check the complete SuzuBlog documentation for detailed usage instructions.
- **Join the community**: Visit [GitHub Issues](https://github.com/ZL-Asica/SuzuBlog/issues) to report problems or browse existing solutions.
- **Contact us**: Use the contact methods provided on the GitHub page to reach out for help.

We hope these answers help you use SuzuBlog smoothly! If you have any additional questions, feel free to reach out or submit feedback. 💕✨
