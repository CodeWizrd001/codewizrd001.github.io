# Ajay P Sakthikumar — Portfolio

A modern, interactive portfolio built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**.

This replaces the older static, terminal-themed GitHub Pages site with a full Next.js application that keeps a nod to the old terminal aesthetic while adding a proper timeline, animated sections, and a polished layout.

## Sections

- **Hero** — animated typing headline, terminal-style card, quick links to resume/socials
- **About** — bio and focus areas (Fullstack, App Dev, Security)
- **Timeline** — scroll-linked, alternating employment + education timeline
- **Skills** — grouped tech stack chips (languages, frameworks, platforms, interests)
- **Certificates** — links to the archived PDFs
- **Contact** — email (with copy-to-clipboard) and social links

Data is centralized in [`lib/data.ts`](./lib/data.ts) — edit that file to update timeline entries, skills, certificates, or profile info without touching any components.

## Tech stack

- [Next.js 15](https://nextjs.org) (App Router, React 19)
- [Tailwind CSS 3](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for animations
- [lucide-react](https://lucide.dev) for icons
- TypeScript

## Local development

```bash
npm install
npm run dev
```

Then open <http://localhost:3000>.

Other scripts:

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # eslint
```

## Deploy

The site is designed to deploy to **Vercel** with zero configuration:

1. Push this repo to GitHub (already there — `codewizrd001.github.io`).
2. Go to <https://vercel.com/new>, import the repo.
3. Vercel auto-detects Next.js — just click **Deploy**.

Alternatively, deploy to Netlify, Cloudflare Pages, or any Node-capable host — no custom config needed.

### About the old GitHub Pages site

The old static files (`index.html`, `dev.html`, `style.css`, `scripts/`, `assets/`) are still in the repo but are no longer used by the Next.js build. They can be deleted once the new site is live on Vercel and DNS is pointed there. All required assets have been copied into [`public/`](./public).

## Project layout

```
app/
  layout.tsx      # root layout, fonts, metadata
  page.tsx        # single-page site (all sections)
  globals.css     # tailwind + custom utilities
components/
  Background.tsx  # pointer-following gradient background
  Navbar.tsx      # sticky nav with mobile menu
  Hero.tsx        # hero with typing animation + terminal card
  About.tsx       # bio + focus areas
  Timeline.tsx    # scroll-linked vertical timeline
  Skills.tsx      # grouped skill chips
  Certificates.tsx
  Contact.tsx
  Footer.tsx
  SectionHeader.tsx
lib/
  data.ts         # all content lives here
public/
  dp.jpg
  icon.png
  resume/resume.pdf
  certificates/*.pdf
```
