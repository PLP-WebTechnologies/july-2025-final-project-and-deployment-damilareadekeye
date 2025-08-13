# Multipage Website — Build, Organize, Deploy

Purpose: A small, production-ready multipage site to demonstrate HTML5, CSS, and JavaScript with proper structure and deployment.

Live URL: REPLACE_WITH_DEPLOYED_LINK

## Planning (Part 1)
- Site purpose: Portfolio/product-style brochure website
- Pages (5):
  - Home (`index.html`): Hero, highlights, CTA
  - About (`about.html`): Mission, team snapshot
  - Services (`services.html`): Offerings with accordion
  - Gallery (`gallery.html`): Filterable items
  - Contact (`contact.html`): Custom-validated form
- Layout sketch:
  - Shared header with logo + navigation, sticky on top
  - Main container with sections; cards or grids for content
  - Shared footer with copyright
- Navigation:
  - All pages link to one another via top navigation bar

## Build Notes (Part 2)
- HTML5 semantics: `header`, `nav`, `main`, `section`, `article`, `footer`
- CSS: Responsive Grid/Flex, variables, media queries, animations
- JS: Interactivity (mobile menu, scroll-reveal, gallery filtering, form validation)
- Accessibility: Skip link, ARIA where appropriate, focus styles

## Organization (Part 3)
- Folders:
  - `css/styles.css`
  - `js/main.js`, `js/form.js`
  - `images/` (assets placeholder)
- Naming: Lowercase, simple names, relative paths
- Validation: Pages tested at common widths (mobile/tablet/desktop)

## Deployment (Part 4)
Pick one:

### GitHub Pages
1. Push this folder to a GitHub repo
2. Settings → Pages → Deploy from branch → `main` → `/root`
3. Wait for the green check, copy the Pages URL and replace at top of this README

### Netlify
1. New site from Git → connect your repo → deploy
2. Or drag-and-drop this folder in Netlify UI
3. Copy the live URL and replace in README

### Vercel
1. New Project → import Git repo → deploy
2. Copy the live URL and replace in README

## Features Checklist
- Responsive header/nav and layout
- Mobile menu toggle (JS)
- Scroll reveal animations (JS + CSS)
- Gallery filtering (JS)
- Contact form with custom JS validation (no HTML5-only)

## How to Run Locally
Open `index.html` in a browser. No build step required.


