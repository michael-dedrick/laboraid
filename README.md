# Design Handoff – LaborAid website

This repo includes the final front-end code exported from (https://laboraid.lovable.app)
Everything is cleaned up and organized for developer use. No prior commit history or noise.


## What's Inside

This project was built visually in Lovable, and uses:

- **Vite** for local dev & build
- **Tailwind CSS** for styling (compiled via PostCSS)
- **TypeScript** for typed JavaScript
- **ESLint** for linting & formatting

No backend — this is front-end only.


## Structure
```text
├── public/               → static assets (images, favicon, etc.)
├── src/                  → component logic and app source
├── index.html            → site entry point
├── tailwind.config.ts    → Tailwind setup
├── vite.config.ts        → Vite config
├── package.json          → dependencies & scripts
├── README.md             → you’re here
```

Notes for Devs
- This is a clean handoff — commit history has been reset
- Tailwind is compiled via PostCSS, no extra setup needed
- Components and structure reflect the Lovable visual layout
- Fully static — feel free to integrate backend or CMS

Ready to Deploy

Can be deployed to:
- Vercel
- Netlify
- Any static host (Vite builds via npm run build)
