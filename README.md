# traintravel.guide

Independent train travel guides — Amtrak, Japan Rail, Europe, and Rail Passes.

## Stack
- Plain HTML / CSS / JS — no build tools, no frameworks
- Hosted on Vercel (free tier)
- Version controlled with Git + GitHub

## Project structure

```
traintravel-guide/
├── index.html              ← Homepage
├── css/
│   └── style.css           ← All shared styles & design tokens
├── js/
│   └── main.js             ← Component loader, scroll effects
├── components/
│   ├── nav.html            ← Shared navigation (edit once, updates everywhere)
│   └── footer.html         ← Shared footer
├── amtrak/
│   ├── index.html          ← Amtrak hub page
│   └── california-zephyr.html
├── japan/
│   └── index.html
├── europe/
│   └── index.html
└── passes/
    └── index.html
```

## How to add a new article

1. Copy `amtrak/california-zephyr.html` into the right folder
2. Update the `<title>`, `<meta name="description">`, breadcrumb, h1, and body content
3. Update the sidebar quick facts and related links
4. Update the "Next article" link at the bottom
5. `git add . && git commit -m "Add [article name]" && git push`
6. Vercel deploys automatically — live in ~30 seconds

## Editing the nav or footer

Edit `components/nav.html` or `components/footer.html` — changes apply site-wide on next deploy.

## Initial setup (one time)

```bash
git init
git add .
git commit -m "Initial commit"
# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/traintravel-guide.git
git push -u origin main
```

Then connect the GitHub repo to Vercel at vercel.com → New Project → Import.
Add your custom domain under Project Settings → Domains.

## Content priority (based on keyword research)

### Publish first (highest opportunity):
1. `amtrak/california-zephyr.html` ✅ Done
2. `amtrak/student-discount.html` — 50k/mo, comp index 1
3. `japan/jr-pass.html` — 50k/mo, comp index 2
4. `amtrak/coast-starlight.html` — 50k/mo, comp index 3
5. `amtrak/sleeper-cars.html` — 50k/mo, comp index 5

### High-CPC targets (best AdSense revenue):
- `amtrak/business-class.html` — $19.81 CPC
- `europe/rail-europe-agents.html` — $6.59 CPC
