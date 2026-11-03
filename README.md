# PrepBangla — Free bilingual exam practice MVP

A mobile-friendly Next.js website for free WBCS practice in Bengali and English.

## Included
- Responsive homepage
- Bengali / English language toggle
- MCQ test flow with question navigation
- Submit, score, accuracy, correct / incorrect / skipped counts
- Answer review with explanations
- No login required
- SEO metadata, robots.txt and sitemap.xml
- Question data separated in `src/data/questions.ts`

## Important content note
The included questions are demo questions, not verified WBCS previous-year questions. Replace or supplement them only with verified, source-attributed questions and appropriate republication permissions. Do not publish sample content as PYQs.

## Run locally
Requires Node.js 18.17+.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production
```bash
npm run build
npm start
```

## Deploy on Vercel
Import this GitHub repository into Vercel and keep the default Next.js settings. The project is configured with the Vercel deployment URL as its current metadata base. If you later connect a custom domain, update the metadata base, robots.txt, and sitemap.xml to use that domain.

## Current limitations
This MVP stores questions in source code and does not include an admin panel, database, user accounts, server-side result storage, analytics, timed exam mode, or anti-cheating controls. The question bank and answer key are delivered to the browser. Add server-side assessment logic and a database before scaling.
