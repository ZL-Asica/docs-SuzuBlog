# 🚀 Quick Start

Welcome to **SuzuBlog**! Follow these steps to quickly set up your blog:

## 1. Start with Vercel

Ready to launch your own Suzu Blog? Just click the button below to deploy instantly with Vercel:

[![Deploy with Vercel][vercel-button]][vercel-deploy-link]

:::warning
Remember to set the `ENABLE_EXPERIMENTAL_COREPACK` environment variable to `1` in Vercel to enable pnpm and eliminate warnings.
:::

This will create a new repository with the SuzuBlog template and deploy it to Vercel. You can then customize your blog by following the steps below.

## 2. Configure Site Information

Locate the `config.yml` file in the root directory of your project and modify it as follows:

- Set your **site title**, **description**, and **author information**.
- Configure your social links and other customization options.

## 3. Write Articles

- Place Markdown files in the `posts` folder. The filename will automatically become the URL of the article.
- To customize pages like "About Me" or "Friends," edit the corresponding files in the `posts/_pages` directory.

## 4. Local Deployment/Preview (Optional)

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

## 5. Manual Updates (Optional)

Your blog is set up to a manual sync with the latest updates from the SuzuBlog template through **GitHub Actions**.

Go to the `Actions` tab in your repository and click on the `Sync SuzuBlog Main Branch 🎐` workflow. Click on the `Run workflow` button to sync the latest updates from the SuzuBlog template.

The following directories are excluded during synchronization to ensure your custom content remains untouched:

- `.git`: Git configuration files
- `public`: Your static files
- `posts`: Your blog posts
- `config.yml`: Your site configuration file

If you encounter any issues, don't forget to check our detailed documentation or join the community for support! ✨

[vercel-button]: https://vercel.com/button
[vercel-deploy-link]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FZL-Asica%2FSuzuBlog&env=ENABLE_EXPERIMENTAL_COREPACK&envDescription=This%20is%20option%20to%20enable%20corepack%20by%20default%20to%20use%20pnpm.%20Set%20this%20to%201.&envLink=https%3A%2F%2Fvercel.com%2Fdocs%2Fbuilds%2Fconfigure-a-build%23corepack&project-name=suzu-blog&repository-name=SuzuBlog&redirect-url=https%3A%2F%2Fsuzu.zla.app%2F&demo-title=ZLA%20%E5%B0%8F%E7%AB%99%20(Demo)&demo-description=ZL%20Asica%2C%20the%20creator%20of%20SuzuBlog%2C%20personal%20Blog.&demo-url=https%3A%2F%2Fzla.pub%2F
