/* =====================================================================
   SCRIPT.JS — THE ENGINE
   =====================================================================
   Reads CONFIG (from config.js) and renders every dynamic section,
   wires up interactions. This file is reusable across all client
   sites — it should never need editing when reskinning for a new
   client. All client-specific data lives in config.js only.
   ===================================================================== */

(function () {
  "use strict";

  /* ---------------------------------------------------------------
     0. HELPERS
     --------------------------------------------------------------- */
  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  function digitsOnly(str) {
    return (str || "").replace(/[^\d+]/g, "");
  }

  function isPlaceholder(value) {
    return typeof value === "string" && /\[ADD[^\]]*\]/i.test(value.trim());
  }

  function isValidBDPhone(str) {
    // Accepts +8801XXXXXXXXX or 01XXXXXXXXX style numbers, 11 local digits
    const cleaned = digitsOnly(str).replace(/^\+?880/, "0");
    return /^01[3-9]\d{8}$/.test(cleaned);
  }

  function warnIfPlaceholder(label, value) {
    if (isPlaceholder(value)) {
      console.warn(`[CONFIG NOTICE] "${label}" still has a placeholder value: ${value}. Replace it in config.js before going live.`);
    }
  }

  /* Local, network-free placeholder image (data URI). Used as the onerror
     fallback for product/collection/gallery images so a missing client
     photo never renders as a broken-image icon — even fully offline. */
  function placeholderImage(label, w, h) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <rect width="100%" height="100%" fill="#ecebf0"/>
      <text x="50%" y="50%" font-family="sans-serif" font-size="${Math.max(12, Math.round(w / 14))}"
            fill="#8a8894" text-anchor="middle" dominant-baseline="middle">${label}</text>
    </svg>`;
    return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
  }

  function formatPrice(num) {
    if (typeof num !== "number") return num;
    return "৳" + num.toLocaleString("en-BD");
  }

  function setText(id, value) {
    const el = document.getElementById(id);
    if (el && value !== undefined && value !== null && value !== "") el.textContent = value;
  }

  function setAttr(id, attr, value) {
    const el = document.getElementById(id);
    if (el && value) el.setAttribute(attr, value);
  }

  /* ---------------------------------------------------------------
     1. APPLY BRANDING (CSS variables)
     --------------------------------------------------------------- */
  function applyBranding() {
    const b = CONFIG.branding;
    const root = document.documentElement.style;
    root.setProperty("--primary", b.primaryColor);
    root.setProperty("--secondary", b.secondaryColor);
    root.setProperty("--accent", b.accentColor);
    root.setProperty("--bg", b.backgroundColor);
    root.setProperty("--font-main", b.fontFamily);

    const radiusMap = { rounded: "10px", pill: "999px", square: "4px" };
    root.setProperty("--btn-radius", radiusMap[b.buttonStyle] || "10px");
  }

  /* ---------------------------------------------------------------
     2. APPLY BUSINESS / CONTACT / SEO / SOCIAL TEXT CONTENT
     --------------------------------------------------------------- */
  function applyBusinessInfo() {
    const biz = CONFIG.business;
    const contact = CONFIG.contact;
    const seo = CONFIG.seo;
    const map = CONFIG.map;

    // Placeholder audit (console only — never shown to visitors)
    [
      ["business.address", biz.address], ["business.area", biz.area],
      ["business.ownerName", biz.ownerName], ["contact.phone", contact.phone],
      ["contact.whatsapp", contact.whatsapp], ["about.story", CONFIG.about.story],
      ["about.mission", CONFIG.about.mission]
    ].forEach(([label, val]) => warnIfPlaceholder(label, val));

    // Document head
    document.title = seo.title;
    document.documentElement.lang = "bn";
    const metaDesc = $('meta[name="description"]'); if (metaDesc) metaDesc.setAttribute("content", seo.description);
    const metaKeywords = $('meta[name="keywords"]'); if (metaKeywords) metaKeywords.setAttribute("content", seo.keywords);
    const canonical = $('link[rel="canonical"]'); if (canonical) canonical.setAttribute("href", seo.canonicalUrl);
    const ogTitle = $('meta[property="og:title"]'); if (ogTitle) ogTitle.setAttribute("content", seo.title);
    const ogDesc = $('meta[property="og:description"]'); if (ogDesc) ogDesc.setAttribute("content", seo.description);
    const ogImage = $('meta[property="og:image"]'); if (ogImage) ogImage.setAttribute("content", seo.ogImage);
    const ogUrl = $('meta[property="og:url"]'); if (ogUrl) ogUrl.setAttribute("content", seo.canonicalUrl);
    const twTitle = $('meta[name="twitter:title"]'); if (twTitle) twTitle.setAttribute("content", seo.title);
    const twDesc = $('meta[name="twitter:description"]'); if (twDesc) twDesc.setAttribute("content", seo.description);
    const twImage = $('meta[name="twitter:image"]'); if (twImage) twImage.setAttribute("content", seo.ogImage);
    const favicon = $('link[rel="icon"]'); if (favicon) favicon.setAttribute("href", biz.favicon);

    // Header
    setText("brandName", biz.shortName || biz.name);
    setAttr("brandLogo", "src", biz.logo);
    setAttr("brandLogo", "alt", biz.name + " Logo");
    const preset = BUSINESS_TYPE_PRESETS[biz.type] || BUSINESS_TYPE_PRESETS["Clothing Store"];
    setText("headerCtaBtn", preset.shopVerb);
    setAttr("mobileCallBtn", "href", "tel:" + digitsOnly(contact.phone));
    setAttr("mobileWhatsappBtn", "href", "https://wa.me/" + digitsOnly(contact.whatsapp).replace("+", ""));

    // Hero
    document.getElementById("home").style.backgroundImage = `url('${CONFIG.hero.backgroundImage}')`;
    setText("heroHeading", CONFIG.hero.heading);
    setText("heroSubheading", CONFIG.hero.subheading);
    setText("heroPrimaryBtn", CONFIG.hero.primaryButtonText);
    setAttr("heroPrimaryBtn", "href", CONFIG.hero.primaryButtonLink);
    setText("heroSecondaryBtn", CONFIG.hero.secondaryButtonText);
    setAttr("heroSecondaryBtn", "href", CONFIG.hero.secondaryButtonLink);

    // About
    setAttr("aboutImage", "src", CONFIG.about.image);
    setText("aboutHeading", CONFIG.about.heading);
    setText("aboutStory", CONFIG.about.story);
    setText("aboutExperience", " " + CONFIG.about.experience);
    const whyList = document.getElementById("aboutWhyList");
    if (whyList) {
      whyList.innerHTML = CONFIG.about.whyUs.map(item =>
        `<li><i class="fa-solid fa-check"></i> ${item}</li>`
      ).join("");
    }

    // CTA
    setText("ctaHeading", CONFIG.cta.heading);
    setText("ctaSubtext", CONFIG.cta.subtext);
    setAttr("ctaCallBtn", "href", "tel:" + digitsOnly(contact.phone));
    setAttr("ctaWhatsappBtn", "href", buildWhatsAppLink(contact.whatsapp, `আমি ${biz.name} সম্পর্কে জানতে চাই।`));
    setAttr("ctaVisitBtn", "href", map.googleMapsUrl);

    // Contact section
    setText("contactAddress", [biz.address, biz.area, biz.city, biz.country].filter(Boolean).join(", "));
    setText("contactPhone", contact.phone);
    setAttr("contactPhone", "href", "tel:" + digitsOnly(contact.phone));
    setText("contactWhatsapp", contact.whatsapp);
    setAttr("contactWhatsapp", "href", buildWhatsAppLink(contact.whatsapp, `আমি ${biz.name} সম্পর্কে জানতে চাই।`));
    setText("contactEmail", contact.email);
    setAttr("contactEmail", "href", "mailto:" + contact.email);
    setText("contactHours", biz.openingHours.display);
    setupMapEmbed(map);

    // Footer
    setAttr("footerLogo", "src", biz.logo);
    setText("footerBusinessName", biz.name);
    setText("footerDescription", CONFIG.footer.shortDescription);
    setText("footerAddress", [biz.address, biz.area, biz.city].filter(Boolean).join(", "));
    setText("footerPhone", contact.phone);
    setText("footerEmail", contact.email);
    setAttr("footerMapLink", "href", map.googleMapsUrl);
    setAttr("footerPrivacyLink", "href", CONFIG.footer.privacyPolicyLink);
    setAttr("footerTermsLink", "href", CONFIG.footer.termsLink);
    // NOTE: footerCopyright's assignment below replaces this <p>'s entire
    // contents (including the #footerYear span nested in it in index.html),
    // so the year is included directly in this one string instead of being
    // set separately — setting #footerYear on its own would just get wiped.
    setText("footerCopyright", `© ${new Date().getFullYear()} ${biz.name}. All rights reserved.`);

    const quickLinksEl = document.getElementById("footerQuickLinks");
    if (quickLinksEl) {
      quickLinksEl.innerHTML = CONFIG.footer.quickLinks.map(l =>
        `<li><a href="${l.link}">${l.label}</a></li>`
      ).join("");
    }

    // Floating WhatsApp
    setAttr("floatingWhatsapp", "href", buildWhatsAppLink(contact.whatsapp, `আমি ${biz.name} সম্পর্কে জানতে চাই।`));

    // JSON-LD
    updateJsonLd();
  }

  function buildWhatsAppLink(waNumber, message) {
    const num = digitsOnly(waNumber).replace(/^\+/, "");
    return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
  }

  /* Google Maps embed: if the client hasn't supplied a real embed code yet,
     fall back to a plain "open in Google Maps" link/button instead of an
     iframe pointing at a placeholder URL (which would render a broken box). */
  function setupMapEmbed(map) {
    const wrap = document.querySelector(".map-wrap");
    const iframe = document.getElementById("googleMapEmbed");
    if (!wrap || !iframe) return;

    if (isPlaceholder(map.googleMapsEmbedUrl)) {
      wrap.innerHTML = `
        <div class="map-fallback">
          <i class="fa-solid fa-map-location-dot"></i>
          <p>ম্যাপ এখনো যুক্ত করা হয়নি।</p>
          <a href="${map.googleMapsUrl}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">
            Google Maps-এ দেখুন
          </a>
        </div>`;
    } else {
      iframe.setAttribute("src", map.googleMapsEmbedUrl);
    }
  }

  function updateJsonLd() {
    const el = document.getElementById("jsonLdBusiness");
    if (!el) return;
    const biz = CONFIG.business, contact = CONFIG.contact;
    const data = {
      "@context": "https://schema.org",
      "@type": "ClothingStore",
      "name": biz.name,
      "image": CONFIG.seo.ogImage,
      "logo": biz.logo,
      "telephone": contact.phone,
      "email": contact.email,
      "url": CONFIG.seo.canonicalUrl,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": biz.address,
        "addressLocality": biz.city,
        "addressRegion": biz.division,
        "addressCountry": "BD"
      },
      "openingHours": "Mo-Su 10:00-21:00",
      "sameAs": Object.values(CONFIG.social).filter(Boolean)
    };
    el.textContent = JSON.stringify(data, null, 2);
  }

  /* ---------------------------------------------------------------
     3. RENDER FEATURES
     --------------------------------------------------------------- */
  function renderFeatures() {
    const grid = document.getElementById("featuresGrid");
    if (!grid) return;
    grid.innerHTML = CONFIG.features.map(f => `
      <div class="feature-card aos-fade-up">
        <div class="feature-icon"><i class="${f.icon}"></i></div>
        <h3 class="feature-title">${f.title}</h3>
        <p class="feature-text">${f.text}</p>
      </div>
    `).join("");
  }

  /* ---------------------------------------------------------------
     4. RENDER PRODUCT FILTER + GRID
     --------------------------------------------------------------- */
  let currentFilter = "All";

  function renderFilterBar() {
    const bar = document.getElementById("productFilterBar");
    if (!bar) return;
    bar.innerHTML = CONFIG.productCategories.map((cat, i) => `
      <button class="filter-btn ${i === 0 ? "active" : ""}" data-category="${cat}" role="tab" aria-selected="${i === 0}">${cat}</button>
    `).join("");

    $$(".filter-btn", bar).forEach(btn => {
      btn.addEventListener("click", () => {
        $$(".filter-btn", bar).forEach(b => { b.classList.remove("active"); b.setAttribute("aria-selected", "false"); });
        btn.classList.add("active");
        btn.setAttribute("aria-selected", "true");
        currentFilter = btn.dataset.category;
        renderProducts();
      });
    });
  }

  function productCardHtml(p) {
    const availClass = /limited/i.test(p.availability) ? "limited" : "in-stock";
    const preset = BUSINESS_TYPE_PRESETS[CONFIG.business.type] || BUSINESS_TYPE_PRESETS["Clothing Store"];
    // Message template includes category + availability so the shop owner
    // has enough context to reply without asking follow-up questions.
    const waMsg = [
      "আমি এই পণ্যটি সম্পর্কে জানতে চাই:",
      `পণ্য: ${p.name}`,
      `ক্যাটাগরি: ${p.category}`,
      `মূল্য: ${formatPrice(p.price)}`,
      `লিংক/পেজ: ${CONFIG.seo.canonicalUrl}#products`
    ].join("\n");
    const waLink = buildWhatsAppLink(CONFIG.contact.whatsapp, waMsg);
    return `
      <div class="product-card aos-fade-up" data-category="${p.category}">
        <div class="product-image-wrap">
          ${p.discount ? `<span class="product-badge">${p.discount}</span>` : ""}
          <img class="product-image" src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src='${placeholderImage("Product Image", 400, 500)}'">
        </div>
        <div class="product-body">
          <span class="product-category">${p.category}</span>
          <h3 class="product-name">${p.name}</h3>
          <p class="product-desc">${p.description}</p>
          <div class="product-price-row">
            <span class="product-price">${formatPrice(p.price)}</span>
            ${p.oldPrice ? `<span class="product-oldprice">${formatPrice(p.oldPrice)}</span>` : ""}
          </div>
          <span class="product-availability ${availClass}"><i class="fa-solid fa-circle" style="font-size:8px;"></i> ${p.availability}</span>
          <div class="product-actions">
            <a href="${waLink}" target="_blank" rel="noopener" class="btn btn-whatsapp">
              <i class="fa-brands fa-whatsapp"></i> ${preset.ctaVerb}
            </a>
          </div>
        </div>
      </div>
    `;
  }

  function renderProducts() {
    const grid = document.getElementById("productGrid");
    const noMsg = document.getElementById("noProductsMsg");
    if (!grid) return;
    const list = currentFilter === "All"
      ? CONFIG.products
      : CONFIG.products.filter(p => p.category === currentFilter);

    grid.innerHTML = list.map(productCardHtml).join("");
    if (noMsg) noMsg.hidden = list.length > 0;
    observeRevealTargets();
  }

  /* ---------------------------------------------------------------
     5. RENDER COLLECTIONS
     --------------------------------------------------------------- */
  function renderCollections() {
    const grid = document.getElementById("collectionsGrid");
    if (!grid) return;
    grid.innerHTML = CONFIG.collections.map(c => `
      <a href="${c.link}" class="collection-card aos-fade-up">
        <img src="${c.image}" alt="${c.title}" loading="lazy" onerror="this.onerror=null;this.src='${placeholderImage("Collection", 500, 625)}'">
        <div class="collection-overlay">
          <h3 class="collection-title">${c.title}</h3>
          <p class="collection-desc">${c.description}</p>
          <span class="btn btn-outline-light btn-sm">View Collection</span>
        </div>
      </a>
    `).join("");
  }

  /* ---------------------------------------------------------------
     6. RENDER GALLERY + LIGHTBOX
     --------------------------------------------------------------- */
  let galleryIndex = 0;
  let lightboxTriggerEl = null;

  function renderGallery() {
    const grid = document.getElementById("galleryGrid");
    if (!grid) return;
    grid.innerHTML = CONFIG.gallery.map((img, i) => `
      <div class="gallery-item aos-fade-up" data-index="${i}" role="button" tabindex="0" aria-label="Open gallery image ${i + 1}">
        <img src="${img}" alt="Gallery image ${i + 1}" loading="lazy" onerror="this.onerror=null;this.src='${placeholderImage("Gallery", 400, 400)}'">
      </div>
    `).join("");

    $$(".gallery-item", grid).forEach(item => {
      item.addEventListener("click", () => openLightbox(parseInt(item.dataset.index, 10)));
      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(parseInt(item.dataset.index, 10));
        }
      });
    });
  }

  function openLightbox(index) {
    galleryIndex = index;
    lightboxTriggerEl = document.activeElement;
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightboxImage");
    img.src = CONFIG.gallery[galleryIndex];
    img.alt = `Gallery image ${galleryIndex + 1}`;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.getElementById("lightboxClose").focus();
  }

  function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lightboxTriggerEl && typeof lightboxTriggerEl.focus === "function") {
      lightboxTriggerEl.focus();
    }
  }

  function shiftLightbox(delta) {
    const len = CONFIG.gallery.length;
    galleryIndex = (galleryIndex + delta + len) % len;
    document.getElementById("lightboxImage").src = CONFIG.gallery[galleryIndex];
  }

  function initLightbox() {
    document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
    document.getElementById("lightboxPrev").addEventListener("click", () => shiftLightbox(-1));
    document.getElementById("lightboxNext").addEventListener("click", () => shiftLightbox(1));
    document.getElementById("lightbox").addEventListener("click", (e) => {
      if (e.target.id === "lightbox") closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      const lightbox = document.getElementById("lightbox");
      if (!lightbox.classList.contains("open")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") shiftLightbox(-1);
      if (e.key === "ArrowRight") shiftLightbox(1);
    });
  }

  /* ---------------------------------------------------------------
     7. RENDER SOCIAL ICONS (contact + footer)
     --------------------------------------------------------------- */
  const SOCIAL_ICONS = {
    facebook: "fa-brands fa-facebook-f",
    instagram: "fa-brands fa-instagram",
    tiktok: "fa-brands fa-tiktok",
    youtube: "fa-brands fa-youtube"
  };

  function renderSocialIcons() {
    const html = Object.entries(CONFIG.social)
      .filter(([, url]) => url && url.trim() !== "")
      .map(([key, url]) => `<a href="${url}" target="_blank" rel="noopener" aria-label="${key}"><i class="${SOCIAL_ICONS[key]}"></i></a>`)
      .join("");
    const contactSocial = document.getElementById("contactSocial");
    const footerSocial = document.getElementById("footerSocial");
    if (contactSocial) contactSocial.innerHTML = html;
    if (footerSocial) footerSocial.innerHTML = html;
  }

  /* ---------------------------------------------------------------
     8. MOBILE MENU
     --------------------------------------------------------------- */
  function initMobileMenu() {
    const btn = document.getElementById("hamburgerBtn");
    const menu = document.getElementById("mobileMenu");
    if (!btn || !menu) return;

    btn.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("open");
      btn.classList.toggle("active", isOpen);
      btn.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    $$(".mobile-nav-link", menu).forEach(link => {
      link.addEventListener("click", () => {
        menu.classList.remove("open");
        btn.classList.remove("active");
        btn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---------------------------------------------------------------
     9. DARK MODE
     --------------------------------------------------------------- */
  function initDarkMode() {
    const toggle = document.getElementById("darkModeToggle");
    if (!toggle) return;
    const icon = toggle.querySelector("i");

    function applyTheme(theme) {
      document.documentElement.setAttribute("data-theme", theme);
      icon.className = theme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
    }

    let saved = null;
    try { saved = localStorage.getItem("theme"); } catch (err) { /* storage unavailable, ignore */ }
    if (saved) applyTheme(saved);

    toggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem("theme", next); } catch (err) { /* storage unavailable, ignore */ }
    });
  }

  /* ---------------------------------------------------------------
     10. BACK TO TOP
     --------------------------------------------------------------- */
  function initBackToTop() {
    const btn = document.getElementById("backToTopBtn");
    if (!btn) return;
    window.addEventListener("scroll", () => {
      const show = window.scrollY > 480;
      btn.hidden = false;
      btn.classList.toggle("visible", show);
    });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  /* ---------------------------------------------------------------
     11. HEADER SCROLL SHADOW (subtle nicety, cheap perf)
     --------------------------------------------------------------- */
  function initHeaderScrollState() {
    const header = document.getElementById("siteHeader");
    if (!header) return;
    window.addEventListener("scroll", () => {
      header.style.boxShadow = window.scrollY > 10 ? "var(--shadow-md)" : "var(--shadow-sm)";
    });
  }

  /* ---------------------------------------------------------------
     12. CONTACT FORM -> WHATSAPP FALLBACK (no backend)
     --------------------------------------------------------------- */
  function initContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    function showFieldError(input, message) {
      let err = input.parentElement.querySelector(".field-error");
      if (!err) {
        err = document.createElement("p");
        err.className = "field-error";
        input.parentElement.appendChild(err);
      }
      err.textContent = message;
      input.setAttribute("aria-invalid", "true");
    }

    function clearFieldError(input) {
      const err = input.parentElement.querySelector(".field-error");
      if (err) err.remove();
      input.removeAttribute("aria-invalid");
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = $("#contactName");
      const phoneInput = $("#contactPhoneInput");
      const msgInput = $("#contactMessage");
      [nameInput, phoneInput, msgInput].forEach(clearFieldError);

      const name = nameInput.value.trim();
      const phone = phoneInput.value.trim();
      const msg = msgInput.value.trim();
      let valid = true;

      if (name.length < 2) { showFieldError(nameInput, "সঠিক নাম লিখুন।"); valid = false; }
      if (!isValidBDPhone(phone)) { showFieldError(phoneInput, "সঠিক মোবাইল নম্বর দিন (উদাহরণ: 01712345678)।"); valid = false; }
      if (msg.length < 5) { showFieldError(msgInput, "একটু বিস্তারিত লিখুন।"); valid = false; }

      if (!valid) return;

      const message = `নতুন যোগাযোগ (${CONFIG.business.name} ওয়েবসাইট থেকে)\nনাম: ${name}\nফোন: ${phone}\nবার্তা: ${msg}`;
      window.open(buildWhatsAppLink(CONFIG.contact.whatsapp, message), "_blank", "noopener");
      form.reset();
    });

    // Clear error as soon as the person starts fixing a field
    ["contactName", "contactPhoneInput", "contactMessage"].forEach(id => {
      const input = document.getElementById(id);
      input.addEventListener("input", () => clearFieldError(input));
    });
  }

  /* ---------------------------------------------------------------
     13. SCROLL-REVEAL ANIMATIONS (IntersectionObserver, lightweight)
     --------------------------------------------------------------- */
  let revealObserver;

  function observeRevealTargets() {
    if (typeof IntersectionObserver === "undefined") {
      // Old/unsupported browser: skip the animation, just show everything.
      $$(".aos-fade-up:not(.aos-visible)").forEach(el => el.classList.add("aos-visible"));
      return;
    }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12 });
    }
    $$(".aos-fade-up:not(.aos-visible)").forEach(el => revealObserver.observe(el));
  }

  /* ---------------------------------------------------------------
     14. SMOOTH SCROLL OFFSET FOR STICKY HEADER (anchor links)
     --------------------------------------------------------------- */
  function initAnchorScrollOffset() {
    $$('a[href^="#"]').forEach(link => {
      link.addEventListener("click", (e) => {
        const id = link.getAttribute("href").slice(1);
        const target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        const headerH = document.getElementById("siteHeader").offsetHeight;
        const top = target.getBoundingClientRect().top + window.scrollY - headerH + 1;
        window.scrollTo({ top, behavior: "smooth" });
      });
    });
  }

  /* ---------------------------------------------------------------
     INIT
     --------------------------------------------------------------- */
  /* Each step runs independently — if one throws (bad config data, a
     missing browser API, etc.) it's logged to console and every other
     section still initializes instead of the whole page silently
     breaking (e.g. mobile menu / WhatsApp button stuck non-functional
     because an earlier, unrelated render call threw). */
  function safeRun(label, fn) {
    try {
      fn();
    } catch (err) {
      console.error(`[INIT ERROR] "${label}" failed to initialize:`, err);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    safeRun("applyBranding", applyBranding);
    safeRun("applyBusinessInfo", applyBusinessInfo);
    safeRun("renderFeatures", renderFeatures);
    safeRun("renderFilterBar", renderFilterBar);
    safeRun("renderProducts", renderProducts);
    safeRun("renderCollections", renderCollections);
    safeRun("renderGallery", renderGallery);
    safeRun("renderSocialIcons", renderSocialIcons);
    safeRun("initLightbox", initLightbox);
    safeRun("initMobileMenu", initMobileMenu);
    safeRun("initDarkMode", initDarkMode);
    safeRun("initBackToTop", initBackToTop);
    safeRun("initHeaderScrollState", initHeaderScrollState);
    safeRun("initContactForm", initContactForm);
    safeRun("initAnchorScrollOffset", initAnchorScrollOffset);
    safeRun("observeRevealTargets", observeRevealTargets);
  });

})();
