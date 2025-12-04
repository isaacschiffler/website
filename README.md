# Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Features

-   ⚡ Fast and performant with Next.js 14
-   🎨 Beautiful UI built with Tailwind CSS
-   📱 Fully responsive design
-   🔍 SEO optimized
-   🚀 Deployed automatically to GitHub Pages via GitHub Actions
-   📦 Static site export for GitHub Pages hosting

## Getting Started

### Prerequisites

-   Node.js 18+
-   npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/isaacschiffler/website.git
cd website
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building

To build the project for production:

```bash
npm run build
```

This generates a static export in the `out` directory that can be deployed to GitHub Pages.

## Customization

### Update Your Information

1. **Personal Details**: Edit `src/app/page.tsx` to update your name, bio, and contact information
2. **Projects**: Add your projects in the portfolio section of the home page
3. **Skills**: Update your skills in the about section
4. **Links**: Update GitHub, email, and other social links

### Styling

-   Tailwind CSS configuration is in `tailwind.config.js`
-   Global styles are in `src/styles/globals.css`
-   Color scheme can be customized in the Tailwind config

## Deployment

### GitHub Pages Setup

1. Go to your repository settings on GitHub
2. Navigate to **Settings → Pages**
3. Under "Build and deployment", select:
    - Source: **GitHub Actions**
4. The workflow will automatically deploy on every push to `main` branch

### GitHub Actions Workflow

The deployment workflow is defined in `.github/workflows/deploy.yml` and:

1. Triggers on every push to the `main` branch
2. Installs dependencies
3. Builds the static site
4. Deploys to GitHub Pages automatically

Your site will be available at: `https://isaacschiffler.github.io/website`

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   ├── styles/
│   │   └── globals.css     # Global styles
├── public/                 # Static assets
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
├── next.config.ts          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Technologies Used

-   **Next.js 14** - React framework
-   **TypeScript** - Type safety
-   **Tailwind CSS** - Utility-first CSS framework
-   **PostCSS** - CSS processing
-   **ESLint** - Code linting

## License

See LICENSE file for details.
