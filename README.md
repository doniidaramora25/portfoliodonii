# Doni Daramora — Portfolio

Dark minimalist portfolio built with Next.js App Router, Tailwind CSS, Lenis, Framer Motion, Lucide React, and JSON-driven content.

## Run locally
Requirements: Node.js 20.9 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel
1. Push this project folder to a GitHub repository.
2. In Vercel, choose **Add New → Project**.
3. Import the GitHub repository.
4. Keep the framework preset as **Next.js**.
5. Keep the build command as `npm run build` and output settings as defaults.
6. Select **Deploy**.

No environment variables are required for the starter project.

## Customize your content
Edit `data/portfolio.json`:
- `profile`: name, role, headline, location, intro
- `about`: biography and stats
- `skills`: skill groups
- `projects`: project cards
- `experience`: work, organization, education
- `contact`: email and social links

Also update the JSON-LD canonical URL in `app/page.tsx` (`https://your-domain.com`) and metadata/social links before publishing.

## Design system
- Background: #080808
- Accent: #8cff00
- Display font: Space Grotesk
- Body font: Inter
- Smooth scrolling: Lenis
- Scroll reveal: Framer Motion

## Notes
Project visuals are currently icon-based placeholders, not screenshots of real projects. Replace them with genuine screenshots or mockups when available. Update sample experience details and contact links before publishing.
