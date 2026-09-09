# Djurslinn James — Portfolio

> Minimalistic, premium portfolio website for a full stack developer.

![Tech](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Framework](https://img.shields.io/badge/TanStack_Start-SSR-FF4154?logo=react-router)
![Styling](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?logo=typescript&logoColor=white)
![Deploy](https://img.shields.io/badge/Deployed_on-Vercel-000000?logo=vercel)

---

## Overview

Personal portfolio showcasing projects, experience, technical stack, education, and certifications. Built with a minimalistic light colour theme (white · light blue · black) for a premium, clean aesthetic.

**Live sections:**
- 🚀 **Work** — Featured projects with GitHub links
- 💼 **Experience** — Internships and virtual simulations
- 🛠️ **Stack** — Languages, frameworks, tools, and concepts
- 🎓 **Education** — Academic background
- 🏅 **Certifications** — Verified credentials with links
- 📬 **Contact** — Social links and email

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (SSR) + TanStack Router |
| UI Library | React 19 |
| Styling | Tailwind CSS v4, tw-animate-css |
| Icons | Lucide React, React Icons |
| Build Tool | Vite 8 |
| Language | TypeScript 5.8 |
| Deployment | Vercel |

---

## Projects Featured

| # | Project | Stack |
|---|---|---|
| 01 | Campus Placement Training System | Django · PostgreSQL · GenAI |
| 02 | Turf Booking Web Application | PHP · MySQL · Chart.js |
| 03 | SmartScout — Football Trial Analytics | Django · React · Python · scikit-learn |

---

## Getting Started

**Prerequisites:** Node.js 18+ or Bun

```sh
# 1. Clone the repository
git clone https://github.com/djurslinn/unique-folio-light.git
cd unique-folio-light

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Build for production (client + SSR) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint checks |
| `npm run format` | Format code with Prettier |

---

## Deployment

This project is configured for **Vercel** with SSR via the Nitro Vercel adapter.

### Option 1 — Vercel Dashboard (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository
3. Vercel auto-detects the framework — click **Deploy**

### Option 2 — Vercel CLI

```sh
npm i -g vercel
vercel
```

### Build Output

```
dist/
├── client/          # Static assets served by CDN
│   └── assets/      # CSS + JS bundles
└── server/          # SSR server entry for Vercel
    └── server.js
```

---

## Project Structure

```
src/
├── routes/
│   ├── __root.tsx   # Root layout, head tags, error/404 boundaries
│   └── index.tsx    # Main portfolio page (all sections)
├── lib/
│   ├── error-capture.ts   # Server-side error capture utility
│   └── error-page.ts      # Fallback HTML error page
├── router.tsx       # TanStack Router + QueryClient setup
├── start.ts         # TanStack Start middleware (CSRF, error handling)
├── server.ts        # SSR server entry with h3 error normalisation
└── styles.css       # Global styles (Tailwind base + custom)
```

---

## Connect

- **GitHub** — [github.com/djurslinn](https://github.com/djurslinn)
- **LinkedIn** — [linkedin.com/in/djurslinn-james](https://linkedin.com/in/djurslinn-james)
- **Instagram** — [instagram.com/djurslinn](https://instagram.com/djurslinn)

