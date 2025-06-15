# 💻 Local Development Guide

SuzuBlog can run without local development. However, if you'd like to preview how your articles will be rendered on the site before publishing, setting up a local development environment is recommended.

## 1. Environment & Tool Setup

You may skip any or all of the following steps if you're certain your local environment already meets the requirements:

```plaintext
Node.js >= 20
git
pnpm
```

### 1.1 Install Node.js

Check if Node.js is installed by running:

```bash
node --version
```

If you see a version like `v22.0.0`, you're good to go. Otherwise, please install Node.js.

We recommend using the latest LTS version:

- **macOS/Linux**: Use `nvm` for version management
- **Windows**: Use `WSL` or the installer directly

👉 [Download Node.js](https://nodejs.org/en/download)

### 1.2 Install Git

Make sure Git is installed before cloning the repository:

```bash
git --version
```

If the output looks like `git version 2.40.0`, Git is installed. If not, download it here:

👉 [Download Git](https://git-scm.com/downloads)

### 1.3 Clone the Repository

Run the following command in your terminal to clone the project locally:

```bash
git clone https://github.com/your-username/your-repo-name.git
```

### 1.4 Install pnpm

SuzuBlog uses `pnpm` as the package manager. To check if it’s installed:

```bash
pnpm --version
```

If it's not installed, you can install it using `corepack`:

```bash
npm install --global corepack@latest
corepack enable pnpm
```

For more help, see the official docs:

👉 [pnpm Installation Guide](https://pnpm.io/installation)

## 2. Install Dependencies

In the project directory, run:

```bash
pnpm install
```

## 3. Start the Local Development Server

To launch the development environment:

```bash
pnpm dev
```

Then visit `http://localhost:3000` in your browser to preview the site.

## 4. Build & Preview Production Version

To simulate the production environment and preview the final build:

```bash
pnpm build
pnpm start
```

Visit `http://localhost:3000` again to view the result.

## 5. Additional Commands

- **Lint your code:**

  ```bash
  pnpm lint
  ```

- **Auto-fix code style issues:**

  ```bash
  pnpm lint:fix
  ```
