# 🚀 Quick Start

Welcome to **SuzuBlog**! Follow these steps to quickly set up your blog:

## 1. Use the Template

Click the **`Use this template`** button to create your own blog repository.

## 2. Configure Site Information

Locate the `config.yml` file in the root directory of your project and modify it as follows:

- Set your **site title**, **description**, and **author information**.
- Configure your social links and other customization options.

## 3. Write Articles

- Place Markdown files in the `posts` folder. The filename will automatically become the URL of the article.
- To customize pages like "About Me" or "Friends," edit the corresponding files in the `posts/_pages` directory.

## 4. Deploy

### Recommended: Cloud Hosting

Use [Vercel](https://vercel.com) for deployment:

1. Import your GitHub project to Vercel.
2. Follow the prompts to complete the setup. Vercel will automatically build and host your blog.

### Local Deployment/Preview

1. Ensure you have installed [Node.js](https://nodejs.org/).
2. Ensure you have [pnpm](https://pnpm.io/) configured. If you're unsure, you can check and install it by running the following commands:

   ```bash
   pnpm --version
   ```

   If the command is not found, you can enable it by running the following commands:

   ```bash
   npm install --global corepack@latest
   corepack enable pnpm
   ```

3. After ensuring the prerequisites are met, run the following commands in the root directory of your project to install dependencies and start the local server:

   ```bash
   pnpm install
   pnpm dev
   ```

4. Open your browser and visit `http://localhost:3000` to preview your blog.

5. Local Build and Preview (the same steps apply if you want to deploy on your server, but remember to enable process guarding):

   If you want to try building and previewing locally, run the following commands:

   ```bash
   pnpm build
   pnpm start
   ```

## 5. Automatic Updates

Your blog is set up to automatically sync with the latest updates from the SuzuBlog template through **GitHub Actions**.

The following directories are excluded during synchronization to ensure your custom content remains untouched:

- `.git`: Git configuration files
- `public`: Your static files
- `posts`: Your blog posts
- `config.yml`: Your site configuration file

If you encounter any issues, don't forget to check our detailed documentation or join the community for support! ✨
