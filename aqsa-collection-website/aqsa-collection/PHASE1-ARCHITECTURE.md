# PHASE 1 — Architecture, File Structure & Configuration System

## 1. Architecture Overview

This is a **single-template, multi-client** static website system.

```
                 ┌───────────────────┐
                 │     config.js      │  ← ONLY file that changes per client
                 │  (all business,    │
                 │  product, brand,   │
                 │  SEO data)         │
                 └─────────┬─────────┘
                           │ read by
                           ▼
   index.html  ──uses──►  script.js  ──renders──►  DOM sections
        │                                          (hero, products,
        │                                           gallery, footer…)
        ▼
   style.css  ──reads CSS variables set from config.branding
```

**Core principle:** `index.html`, `style.css`, and `script.js` are the reusable *engine*.
`config.js` is the *data*. To launch a new client site: duplicate the folder, edit
`config.js`, replace images in `/assets/images/`, done — no HTML/CSS/JS edits needed.

## 2. File Structure

```
clothing-store-template/
├── index.html                 # Single-page site, static skeleton + section containers
├── css/
│   └── style.css              # Design system (CSS variables) + all component styles
├── js/
│   ├── config.js              # ✅ Central config — edit this per client
│   └── script.js              # Engine: reads config.js, renders dynamic sections,
│                               #   handles filters, WhatsApp links, dark mode, etc.
├── assets/
│   ├── images/
│   │   ├── logo.png
│   │   ├── favicon.png
│   │   ├── hero-cover.jpg
│   │   ├── about.jpg
│   │   ├── og-cover.jpg
│   │   ├── products/           # product-*.jpg
│   │   ├── collections/        # eid.jpg, summer.jpg, winter.jpg…
│   │   └── gallery/             # gallery-*.jpg
│   └── icons/                  # optional custom icons (Font Awesome used by default)
└── README.md                  # Client-facing customization guide
```

## 3. Configuration System (built in Phase 1)

`js/config.js` is organized into 16 clearly labeled blocks:

1. `business` — name, tagline, type, address, hours
2. `contact` — phone, WhatsApp, email
3. `social` — Facebook, Instagram, TikTok, YouTube (empty string auto-hides icon)
4. `map` — Google Maps link + embed URL
5. `seo` — title, description, keywords, OG image, canonical URL
6. `branding` — 5 values that reskin the whole site (colors, font, button style)
7. `hero` — heading, subheading, CTA buttons
8. `features` — trust/highlight cards (icon + title + text)
9. `about` — story, mission, why-us bullets
10. `productCategories` — filter bar labels
11. `products` — array of product objects (id, name, category, price, image, etc.)
12. `collections` — showcase cards
13. `gallery` — image list
14. `testimonials` — optional customer quotes
15. `cta` — call-to-action section text
16. `footer` — quick links, short description

A second object, `BUSINESS_TYPE_PRESETS`, lets one config drive different micro-copy
(e.g. "Shop Now" vs "Browse Sarees") depending on `business.type` — this is how the
same engine serves a saree shop, a tailor, or a shoe store without touching code.

## 4. Placeholder Convention

Any value not yet known uses a bracketed placeholder like `[ADD PHONE]` or
`[ADD BUSINESS ADDRESS]`. `script.js` (built in Phase 4) will be able to detect
these at runtime and log a console warning, so nothing fake ever looks like real
business data to a site visitor.

## 5. How Branding Cascades

`branding.primaryColor`, `secondaryColor`, `accentColor`, `backgroundColor`, and
`fontFamily` will be injected as CSS custom properties (`--primary`, `--secondary`,
etc.) at runtime by `script.js`. `style.css` (Phase 3) will reference only these
variables — never hardcoded colors — so changing 5 values in `config.js` reskins
every button, card, and section site-wide.

## 6. Next Phases

| Phase | Deliverable |
|---|---|
| 2 | `index.html` — full semantic structure, all section containers, SEO meta tags, JSON-LD skeleton |
| 3 | `style.css` — design system, responsive layout, premium visual styling |
| 4 | `script.js` — renders products/collections/gallery from config, filter logic, WhatsApp/call links, dark mode, back-to-top |
| 5 | SEO finalization, WhatsApp order message templates, Maps embed logic, contact form fallback |
| 6 | Full QA pass against the Phase 1 checklist (mobile, filters, links, console errors, accessibility) |

---

## Quick-Start Customization (preview — full guide ships in README.md at the end)

1. Open `js/config.js`
2. Replace every `[ADD ...]` placeholder with real client info
3. Replace images in `/assets/images/` (keep the same filenames, or update the paths in `config.js`)
4. Adjust `branding.primaryColor` / `secondaryColor` / `accentColor` to match the client's brand
5. Add products by copying the object pattern under `products: [...]`
6. Deploy the folder as-is to GitHub Pages / Netlify / Vercel (no build step required)

---

**PHASE 1 COMPLETE — READY FOR PHASE 2**

Reply **"CONTINUE PHASE 2"** and I'll build the full `index.html` structure (header, hero, features, about, products, filter, collections, gallery, CTA, contact, map, footer, SEO meta tags, JSON-LD) using this exact config system.
