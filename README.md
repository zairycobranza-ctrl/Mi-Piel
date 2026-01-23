# Next.js conversion for MIPIEL

This project wraps your original static `index.html` inside a Next.js App Router project.

## Structure
- `app/layout.tsx` – global head, fonts, icons, and CSS import
- `app/page.tsx` – renders the original body HTML via `dangerouslySetInnerHTML`
- `styles/globals.css` – merged CSS from your uploaded `style.css` and inline `<style>` blocks
- `public/img/` – place your real images here: `favicon.png`, `favicon.ico`, `logo-horizontal.png`, `logo-header-250x75.png`, etc.

## Run locally
```bash
npm i
npm run dev
```
Open http://localhost:3000

## Deploy to Vercel
```bash
vercel
vercel --prod
```

## Notes
- External assets (Unsplash, etc.) will load as-is.
- Later you can refactor sections into React components under `components/` if you want.
