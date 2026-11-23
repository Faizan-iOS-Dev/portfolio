# Shaikh Faizan - Personal Portfolio Website

A modern, minimalistic, and responsive personal portfolio website built with **Next.js 16**, **TypeScript**, and **Tailwind CSS**. The site presents Shaikh Faizan's experience, projects, skills, education, and AI-focused development interests as an iOS Developer with 4 years of experience.

**[Live Preview](https://faizan-ios-dev.github.io/portfolio/)**

## 🚀 Features

*   **Modern Tech Stack**: Built with Next.js 16 App Router, TypeScript, and Tailwind CSS.
*   **Responsive Design**: Optimized for mobile, tablet, and desktop layouts.
*   **Dark Mode**: Includes a light/dark mode toggle with persisted preference.
*   **Portfolio Sections**: Covers skills, projects, professional experience, education, and AI development.
*   **Resume Download**: Provides the latest Faizan iOS Developer CV directly from the site.
*   **Static Export**: Configured for GitHub Pages deployment with static HTML export.
*   **Performance and SEO**: Uses Next.js metadata, optimized images, and accessible controls.
*   **CI/CD**: Automatic deployment via GitHub Actions whenever `main` changes.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 16](https://nextjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Deployment**: [GitHub Pages](https://pages.github.com/) with GitHub Actions
*   **Linting**: ESLint

## 📂 Project Structure

```bash
portfolio/
├── app/                 # Next.js App Router pages and layout
├── components/          # Reusable UI components
├── context/             # Theme and active-section context providers
├── lib/                 # Portfolio data and utility hooks
├── public/              # Profile image and downloadable CV
├── .github/workflows/   # GitHub Actions deployment workflow
└── ...config files      # Tailwind, Next.js, TypeScript, and ESLint configs
```

## ⚡️ Getting Started

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or higher)
*   [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Faizan-iOS-Dev/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000/portfolio/](http://localhost:3000/portfolio/) in your browser.

## 📝 Customization

1. **Update portfolio data**: Edit `lib/data.ts` for links, skills, projects, experience, and education.
2. **Replace the profile image**: Update `public/profile.jpg` with a new portrait.
3. **Replace the CV**: Update `public/Faizan_iOS_Developer_CV.pdf` with the latest resume.
4. **Adjust the layout**: Modify the components when changing the presentation or section structure.

## 🚀 Deployment

This project is configured for **GitHub Pages** deployment using GitHub Actions.

### How it works

1. Push changes to the `main` branch.
2. GitHub Actions runs the lint and static build workflow.
3. The generated `out/` directory is published to GitHub Pages.
4. The site is available at [https://faizan-ios-dev.github.io/portfolio/](https://faizan-ios-dev.github.io/portfolio/).

### Key configuration for GitHub Pages

```js
const nextConfig = {
  output: "export",
  basePath: "/portfolio",
  images: { unoptimized: true },
  trailingSlash: true,
};
```

## 🤝 Contributing

This is a personal portfolio, but improvements are welcome. Create a feature branch, make the change, run the checks below, and open a pull request.

```bash
npm run lint
npm run build
```

## 📄 License

This project is personal portfolio source code. Profile content and media are owned by Shaikh Faizan.
