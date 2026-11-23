# Shaikh Faizan Portfolio

Personal portfolio for Shaikh Faizan, an iOS Developer specializing in native iOS development, banking applications, fintech solutions, digital payments and enterprise mobile applications.

Live site: https://Faizan-iOS-Dev.github.io/portfolio/

## Stack

- Next.js 16 App Router with static export
- TypeScript
- Tailwind CSS
- Lucide React
- GitHub Pages and GitHub Actions

## Local development

```bash
npm install --legacy-peer-deps
npm run dev
```

Open http://localhost:3000/portfolio/.

## Checks

```bash
npm run lint
npm run build
```

All personal profile data, skills, projects, experience, links and education are kept in `lib/data.ts`. The deployment workflow builds `out/` and publishes it to GitHub Pages whenever `main` changes.
