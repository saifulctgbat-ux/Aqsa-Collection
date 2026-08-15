# Universal Clothing Store Website — Customization Guide

One template, unlimited clients. To turn this into a new business's website you
only ever touch **`js/config.js`** and the images inside **`assets/images/`**.
You should never need to edit `index.html`, `css/style.css`, or `js/script.js`.

```
project/
├── index.html              ← page structure (don't edit)
├── css/style.css            ← design system (don't edit)
├── js/
│   ├── config.js             ← ✅ EDIT THIS — all business/product data
│   └── script.js             ← engine that reads config.js (don't edit)
├── assets/images/            ← ✅ REPLACE THESE — logo, hero, products, gallery
├── sitemap.xml / robots.txt  ← update the domain when you have one
└── README.md                 ← this file
```

---

## 1. Quick Start

1. Open `js/config.js` in any text editor.
2. Replace every `[ADD ...]` placeholder with the client's real information.
3. Replace the images in `assets/images/` (keep the same file names, or update
   the paths inside `config.js` if you rename them).
4. Open `index.html` in a browser (or deploy it — see Section 8) and check
   every section.
5. Open the browser console (F12) — any leftover placeholder fields are
   logged there as warnings so nothing fake ships to a real visitor.

---

## 2. Business Information

In `js/config.js`, edit the `business` and `contact` blocks:

```js
business: {
  name: "Client's Business Name",
  shortName: "Short Name",       // shown in header on small screens
  tagline: "...",
  type: "Clothing Store",         // see Section 6 — changes button wording
  ownerName: "...",
  logo: "assets/images/logo.png",
  favicon: "assets/images/favicon.png",
  address: "...", area: "...", city: "...", division: "...", country: "...",
  openingHours: { display: "Everyday: 10:00 AM – 9:00 PM", structured: [...] }
},
contact: {
  phone: "+8801XXXXXXXXX",
  whatsapp: "+8801XXXXXXXXX",
  email: "info@example.com",
  website: "https://example.com"
}
```

Phone/WhatsApp numbers can include spaces, dashes, or `+880` — the script
strips formatting automatically when it builds `tel:` and `wa.me` links.

---

## 3. Logo & Favicon

- Replace `assets/images/logo.png` (recommended: 200×60px, transparent PNG).
- Replace `assets/images/favicon.png` (512×512px, square).
- No code changes needed — the header, mobile menu, and footer all pull the
  same file automatically.

---

## 4. Brand Colors & Fonts

Everything on the site is driven by five values in `config.js`:

```js
branding: {
  primaryColor: "#1a1a2e",
  secondaryColor: "#c9a15a",
  accentColor: "#e94560",
  backgroundColor: "#ffffff",
  fontFamily: "'Poppins', sans-serif",
  buttonStyle: "rounded"   // "rounded" | "pill" | "square"
}
```

Change these and the entire site — buttons, badges, hover states, footer,
dark mode — reskins instantly. No CSS editing required.

> To use a different Google Font, also update the `<link href="https://fonts.googleapis.com/...">`
> tag in `index.html`'s `<head>` to load that font family.

---

## 5. Products

Products live in the `products` array in `config.js`. Copy the pattern to add
a new one:

```js
{
  id: "p004",
  name: "Product Name",
  category: "Men's",              // must match one of productCategories
  price: 1200,
  oldPrice: 1500,                 // set to null if there's no discount
  discount: "20% OFF",            // set to null to hide the badge
  image: "assets/images/products/your-image.jpg",
  description: "Short one-line description.",
  availability: "In Stock"        // or "Limited Stock"
}
```

- To change the filter tabs (All / Men's / Women's / …), edit the
  `productCategories` array — the filter bar and product `category` field
  must use matching text exactly.
- Each product card auto-generates a "WhatsApp Order" button pre-filled with
  the product name, category, and price.

---

## 6. Business Type (reusing this template for a different shop)

Change `business.type` to instantly swap button wording sitewide (e.g.
"Shop Now" → "Browse Sarees"). Supported types are listed in the
`BUSINESS_TYPE_PRESETS` object near the bottom of `config.js`:

Clothing Store · Boutique · Saree Shop · Tailoring Shop · Shoe Store ·
Cosmetics Store · Jewellery Store · General Retail Store

To add a new business type, add a new entry to `BUSINESS_TYPE_PRESETS` with
its own `shopVerb` / `ctaVerb`.

---

## 7. Collections & Gallery

- `collections` array: each item needs `title`, `image`, `description`, `link`.
- `gallery` array: just a list of image paths — add or remove as needed. The
  lightbox (click-to-enlarge, arrow keys, Esc to close) works automatically.

---

## 8. Social Media Links

```js
social: {
  facebook: "https://facebook.com/...",
  instagram: "",     // leave empty to auto-hide the icon
  tiktok: "",
  youtube: ""
}
```

Any field left as `""` is automatically hidden from both the contact section
and the footer — no icons are shown for platforms the client doesn't use.

---

## 9. Google Maps

```js
map: {
  googleMapsUrl: "https://maps.google.com/?q=Client+Address",
  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=..."
}
```

**How to get the embed code:**
1. Open [Google Maps](https://maps.google.com), search the business address.
2. Click **Share → Embed a map → Copy HTML**.
3. Copy only the URL inside `src="..."` and paste it as `googleMapsEmbedUrl`.

If you leave `googleMapsEmbedUrl` as the placeholder, the site automatically
shows a clean "View on Google Maps" button instead of a broken map box — so
the page never looks broken while you're still waiting on the client's exact
address.

---

## 10. Contact Form

There is no backend/server. The contact form validates the name, phone, and
message fields in the browser, then opens WhatsApp with a pre-filled message
using the number in `contact.whatsapp`. This requires no hosting setup or
monthly service — it works on any static host.

---

## 11. SEO

Edit the `seo` block in `config.js` (title, description, keywords, canonical
URL, social preview image). These values are injected into the page title,
meta tags, Open Graph/Twitter cards, and the JSON-LD structured data
automatically — you don't need to touch `index.html`.

Also update:
- `sitemap.xml` — replace `https://example.com` with the real domain.
- `robots.txt` — replace the sitemap URL with the real domain.

---

## 12. Dark Mode

Built in — visitors can toggle it with the moon/sun icon in the header, and
their choice is remembered for their next visit (via `localStorage`). No
setup needed.

---

## 13. Deploying the Site

This is a static site (HTML/CSS/JS only, no build step, no server). Any of
these work:

**GitHub Pages**
1. Create a new GitHub repository and upload all these files/folders.
2. Go to Settings → Pages → set the source branch to `main` and folder to `/root`.
3. Your site will be live at `https://yourusername.github.io/repo-name/`.

**Netlify**
1. Go to [netlify.com](https://netlify.com) → "Add new site" → "Deploy manually".
2. Drag and drop this whole project folder onto the upload area.
3. Netlify gives you a live URL immediately; you can attach a custom domain
   in Site Settings → Domain management.

**Vercel**
1. Go to [vercel.com](https://vercel.com) → "Add New Project" → "Deploy" and
   drag the folder in the same way, or connect it via a GitHub repo.

**Any regular web hosting (cPanel etc.)**
Upload all files/folders to the `public_html` directory via FTP — done.

---

## 14. Final Pre-Launch Checklist

Before handing the site to a client, confirm:

- [ ] No `[ADD ...]` placeholders remain in `config.js`
- [ ] Real logo, favicon, hero, about, product, collection, and gallery images added
- [ ] Phone / WhatsApp numbers are correct and working
- [ ] Google Maps embed shows the correct location
- [ ] Social media links point to the client's real profiles (or are left blank)
- [ ] `seo.canonicalUrl`, `sitemap.xml`, and `robots.txt` use the final domain
- [ ] Site tested on a real phone (not just browser resize)
- [ ] Browser console (F12) shows no red errors and no leftover `[CONFIG NOTICE]` warnings

---

## 15. Support Notes

- This template needs **no backend, database, or paid service** to run.
- All interactivity (filters, gallery, dark mode, forms) is plain
  JavaScript — nothing to install, nothing to keep updated.
- Font Awesome icons and Google Fonts are loaded from public CDNs; an
  internet connection is required for those (not for the rest of the site).
