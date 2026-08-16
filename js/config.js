/* =====================================================================
   CONFIG.JS — AQSA COLLECTION
   Sakib Tower, Keranihat, Satkania, Chittagong, Bangladesh
   ===================================================================== */

const CONFIG = {

  /* ---------------------------------------------------------------
     1. BUSINESS
     --------------------------------------------------------------- */
  business: {
    name: "Aqsa Collection",
    shortName: "Aqsa",
    tagline: "Style for Men, Women & Kids",
    type: "Clothing Store",
    ownerName: "Saiful",
    category: "Men's, Women's & Kids Fashion",
    logo: "assets/images/logo-aqsa.jpg",
    favicon: "assets/images/logo-aqsa.jpg",

    address: "Sakib Tower, Keranihat, Satkania, Chittagong",
    area: "Keranihat, Satkania",
    city: "Chittagong",
    division: "Chittagong Division",
    country: "Bangladesh",

    openingHours: {
      display: "Everyday: Open All Day",
      structured: [
        { days: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "09:00", closes: "21:00" }
      ]
    }
  },

  /* ---------------------------------------------------------------
     2. CONTACT
     --------------------------------------------------------------- */
  contact: {
    phone: "+8801616724075",
    whatsapp: "+8801616724075",
    email: "aqsa.automotion23@gmail.com",
    website: "https://example.com"
  },

  /* ---------------------------------------------------------------
     3. SOCIAL
     --------------------------------------------------------------- */
  social: {
    facebook: "https://www.facebook.com/share/1DMAJ6sZvz/?mibextid=wwXIfr",
    instagram: "",
    tiktok: "",
    youtube: ""
  },

  /* ---------------------------------------------------------------
     4. MAP
     --------------------------------------------------------------- */
  map: {
    googleMapsUrl: "https://maps.google.com/?q=Sakib+Tower+Keranihat+Satkania+Chittagong+Bangladesh",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3690.5!2d92.05!3d22.00!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDAwJzAwLjAiTiA5MsKwMDMnMDAuMCJF!5e0!3m2!1sen!2sbd!4v1620000000000!5m2!1sen!2sbd"
  },

  /* ---------------------------------------------------------------
     5. SEO
     --------------------------------------------------------------- */
  seo: {
    title: "Aqsa Collection | Style for Men, Women & Kids | Satkania, Chittagong",
    description: "Aqsa Collection — Trendy, Comfortable & Affordable fashion for Men, Women & Kids. Nationwide Cash on Delivery. Located in Satkania, Chittagong.",
    keywords: "Aqsa Collection, clothing, fashion, kids wear, women wear, men wear, Satkania, Chittagong, Bangladesh, cash on delivery",
    ogImage: "assets/images/logo-aqsa.jpg",
    canonicalUrl: "https://example.com",
    twitterHandle: ""
  },

  /* ---------------------------------------------------------------
     6. BRANDING — Black & Gold theme matching Aqsa logo
     --------------------------------------------------------------- */
  branding: {
    primaryColor: "#0d0d0d",
    secondaryColor: "#c9a838",
    accentColor: "#e8b84b",
    backgroundColor: "#ffffff",
    fontFamily: "'Poppins', sans-serif",
    buttonStyle: "rounded"
  },

  /* ---------------------------------------------------------------
     7. HERO SECTION
     --------------------------------------------------------------- */
  hero: {
    backgroundImage: "assets/images/hero-cover.jpg",
    heading: "Trendy. Comfortable. Affordable.",
    subheading: "Style for Men, Women & Kids — with Nationwide Cash on Delivery across Bangladesh.",
    primaryButtonText: "Shop Now",
    primaryButtonLink: "#products",
    secondaryButtonText: "Contact Us",
    secondaryButtonLink: "#contact"
  },

  /* ---------------------------------------------------------------
     8. TRUST / FEATURE HIGHLIGHTS
     --------------------------------------------------------------- */
  features: [
    { icon: "fa-solid fa-shirt",          title: "Quality Products",      text: "Carefully selected fabrics and styles" },
    { icon: "fa-solid fa-tags",           title: "Affordable Price",      text: "Premium fashion without the premium price" },
    { icon: "fa-solid fa-truck",          title: "Cash on Delivery",      text: "Nationwide delivery across Bangladesh" },
    { icon: "fa-solid fa-children",       title: "For the Whole Family",  text: "Men, Women & Kids collections" },
    { icon: "fa-brands fa-whatsapp",      title: "WhatsApp Order",        text: "Easy ordering via WhatsApp anytime" }
  ],

  /* ---------------------------------------------------------------
     9. ABOUT SECTION
     --------------------------------------------------------------- */
  about: {
    image: "assets/images/about.jpg",
    heading: "About Aqsa Collection",
    story: "Aqsa Collection is a clothing brand based in Satkania, Chittagong, dedicated to bringing trendy, comfortable, and affordable fashion to families across Bangladesh. From stylish kids' suits to elegant women's dresses and men's wear, we offer something for everyone — delivered right to your door with nationwide Cash on Delivery.",
    experience: "Quality You Can Trust",
    mission: "To make stylish, quality fashion accessible to every family in Bangladesh.",
    whyUs: [
      "Trendy & Comfortable designs",
      "Affordable pricing for every budget",
      "Nationwide Cash on Delivery",
      "Easy WhatsApp ordering",
      "Kids, Women & Men collections"
    ]
  },

  /* ---------------------------------------------------------------
     10. PRODUCT CATEGORIES
     --------------------------------------------------------------- */
  productCategories: ["All", "Kids", "Women's", "Men's"],

  /* ---------------------------------------------------------------
     11. PRODUCTS
     --------------------------------------------------------------- */
  products: [
    /* ── Kids ── */
    {
      id: "p001",
      name: "Kids 'Surprise' Tracksuit — Mint Green",
      category: "Kids",
      price: 680,
      oldPrice: 850,
      discount: "20% OFF",
      image: "assets/images/products/kids-tracksuit-green-surprise.jpg",
      description: "Soft cotton sweatshirt & jogger set with fun 'Surprise' monster print. Ages 2–6 yrs.",
      availability: "In Stock"
    },
    {
      id: "p002",
      name: "Kids Mickey Tracksuit — Lime Green",
      category: "Kids",
      price: 720,
      oldPrice: 900,
      discount: "New Arrival",
      image: "assets/images/products/kids-tracksuit-green-mickey.jpg",
      description: "Disney Mickey embroidered sweatshirt with matching black jogger pants. Ages 2–6 yrs.",
      availability: "Stock Out"
    },

    /* ── Women's ── */
    {
      id: "p003",
      name: "Women's Long Trench Coat — Navy Blue",
      category: "Women's",
      price: 2450,
      oldPrice: 2900,
      discount: "Special Offer",
      image: "assets/images/products/women-trench-navy.jpg",
      description: "Elegant double-breasted long trench coat, premium fabric. Perfect for winter styling.",
      availability: "In Stock"
    },
    {
      id: "p004",
      name: "Women's Long Trench Coat — Classic Black",
      category: "Women's",
      price: 2350,
      oldPrice: 2800,
      discount: "15% OFF",
      image: "assets/images/products/women-trench-black.jpg",
      description: "Belted black trench dress with sharp collar — sophisticated everyday elegance.",
      availability: "Stock Out"
    },
    {
      id: "p005",
      name: "Women's Bridal Lehenga — Black & Gold",
      category: "Women's",
      price: 6500,
      oldPrice: 8000,
      discount: "Premium",
      image: "assets/images/products/women-lehenga-black-gold.jpg",
      description: "Heavy embroidered bridal lehenga with dupatta — ideal for weddings & receptions.",
      availability: "In Stock"
    },
    {
      id: "p006",
      name: "Women's Printed Kurti Set — Purple",
      category: "Women's",
      price: 1450,
      oldPrice: 1800,
      discount: "20% OFF",
      image: "assets/images/products/women-kurti-purple.jpg",
      description: "3-piece kurti, palazzo & dupatta set with lace detailing. Comfortable daily wear.",
      availability: "In Stock"
    },
    {
      id: "p007",
      name: "Women's Anarkali Gown — Yellow",
      category: "Women's",
      price: 2600,
      oldPrice: 3200,
      discount: "Festive Offer",
      image: "assets/images/products/women-anarkali-yellow.jpg",
      description: "Embroidered mustard-yellow anarkali with matching dupatta — festive & wedding wear.",
      availability: "Stock Out"
    },

    /* ── Men's ── */
    {
      id: "p008",
      name: "Men's Hoodie — 'Two Wheels' Print, Brown",
      category: "Men's",
      price: 950,
      oldPrice: 1200,
      discount: "20% OFF",
      image: "assets/images/products/men-hoodie-brown-bike.jpg",
      description: "Heavyweight cotton hoodie with retro motorcycle graphic print. Relaxed fit.",
      availability: "In Stock"
    },
    {
      id: "p009",
      name: "Men's Oversized Hoodie — White",
      category: "Men's",
      price: 890,
      oldPrice: 1100,
      discount: "New Arrival",
      image: "assets/images/products/men-hoodie-white.jpg",
      description: "Minimal oversized fit hoodie, soft fleece inner. Everyday streetwear staple.",
      availability: "In Stock"
    },
    {
      id: "p010",
      name: "Men's Puffer Jacket — Maroon",
      category: "Men's",
      price: 1850,
      oldPrice: 2300,
      discount: "Winter Sale",
      image: "assets/images/products/men-puffer-maroon.jpg",
      description: "Ultra-lightweight, breathable puffer jacket rated up to 5°C winter conditions.",
      availability: "In Stock"
    },
    {
      id: "p011",
      name: "Men's Puffer Jacket — Khaki",
      category: "Men's",
      price: 1850,
      oldPrice: 2300,
      discount: "Winter Sale",
      image: "assets/images/products/men-puffer-khaki.jpg",
      description: "Warm, lightweight quilted puffer jacket with zip pockets — ideal for cold weather.",
      availability: "Stock Out"
    },
    {
      id: "p012",
      name: "Men's Sneakers — Orange/Black High-Top",
      category: "Men's",
      price: 1650,
      oldPrice: 2000,
      discount: "20% OFF",
      image: "assets/images/products/men-sneakers-orange.jpg",
      description: "High-top basketball-style sneakers with bold color-block design. Durable sole.",
      availability: "In Stock"
    },
    {
      id: "p013",
      name: "Men's Sneakers — Grey/Teal Chunky",
      category: "Men's",
      price: 1750,
      oldPrice: 2100,
      discount: "New Arrival",
      image: "assets/images/products/men-sneakers-grey-teal.jpg",
      description: "Chunky sole sneakers with breathable mesh upper — sporty everyday comfort.",
      availability: "In Stock"
    },
    {
      id: "p014",
      name: "Men's Polo Shirt — White (Li-Ning)",
      category: "Men's",
      price: 780,
      oldPrice: 950,
      discount: "15% OFF",
      image: "assets/images/products/men-polo-white-lining.jpg",
      description: "Classic fit polo with contrast navy collar. Breathable cotton-blend fabric.",
      availability: "In Stock"
    },
    {
      id: "p015",
      name: "Men's Polo Shirt — White/Red Sporty",
      category: "Men's",
      price: 820,
      oldPrice: 1000,
      discount: "18% OFF",
      image: "assets/images/products/men-polo-white-red.jpg",
      description: "Sporty polo with contrast red shoulder panels and ribbed collar detailing.",
      availability: "Stock Out"
    },
    {
      id: "p016",
      name: "Men's Oversized T-Shirt — Navy 'Norway'",
      category: "Men's",
      price: 650,
      oldPrice: 800,
      discount: "New Arrival",
      image: "assets/images/products/men-tshirt-navy-norway.jpg",
      description: "Premium oversized fit tee with minimal flag-print graphic. Heavyweight cotton.",
      availability: "In Stock"
    },
    {
      id: "p017",
      name: "Men's Oversized T-Shirt — Maroon 'Norway'",
      category: "Men's",
      price: 650,
      oldPrice: 800,
      discount: "New Arrival",
      image: "assets/images/products/men-tshirt-maroon-norway.jpg",
      description: "Relaxed fit maroon tee with minimal flag-print graphic. Soft breathable cotton.",
      availability: "In Stock"
    },
    {
      id: "p018",
      name: "Men's Polo Shirt — White, Beige Collar",
      category: "Men's",
      price: 790,
      oldPrice: 980,
      discount: "20% OFF",
      image: "assets/images/products/men-polo-white-beige-collar.jpg",
      description: "Premium pique polo with striped beige collar & cuffs. Smart-casual essential.",
      availability: "In Stock"
    },
    {
      id: "p019",
      name: "Men's Polo Shirt — Red (Li-Ning)",
      category: "Men's",
      price: 780,
      oldPrice: 950,
      discount: "15% OFF",
      image: "assets/images/products/men-polo-red.jpg",
      description: "Bold red polo with contrast black collar & cuffs. Comfortable regular fit.",
      availability: "In Stock"
    },
    {
      id: "p020",
      name: "Men's Polo Shirt — White Anchor Print",
      category: "Men's",
      price: 810,
      oldPrice: 1000,
      discount: "19% OFF",
      image: "assets/images/products/men-polo-white-anchor.jpg",
      description: "Smart diamond anchor-print polo with contrast black collar. Premium cotton feel.",
      availability: "In Stock"
    }
  ],

  /* ---------------------------------------------------------------
     12. COLLECTIONS
     --------------------------------------------------------------- */
  collections: [
    { title: "Kids Collection",    image: "assets/images/products/kids-tracksuit-green-surprise.jpg", description: "Fun, durable & adorable outfits for your little ones.",     link: "#products" },
    { title: "Women's Collection", image: "assets/images/products/women-anarkali-yellow.jpg",          description: "Elegant dresses for every occasion — casual to festive.",    link: "#products" },
    { title: "Men's Collection",   image: "assets/images/products/men-puffer-maroon.jpg",              description: "Trendy hoodies, jackets, polos & sneakers for every day.",  link: "#products" }
  ],

  /* ---------------------------------------------------------------
     13. GALLERY
     --------------------------------------------------------------- */
  gallery: [
    "assets/images/products/kids-tracksuit-green-surprise.jpg",
    "assets/images/products/kids-tracksuit-green-mickey.jpg",
    "assets/images/products/women-trench-navy.jpg",
    "assets/images/products/women-trench-black.jpg",
    "assets/images/products/women-lehenga-black-gold.jpg",
    "assets/images/products/women-kurti-purple.jpg",
    "assets/images/products/women-anarkali-yellow.jpg",
    "assets/images/products/men-hoodie-brown-bike.jpg",
    "assets/images/products/men-hoodie-white.jpg",
    "assets/images/products/men-puffer-maroon.jpg",
    "assets/images/products/men-puffer-khaki.jpg",
    "assets/images/products/men-sneakers-orange.jpg",
    "assets/images/products/men-sneakers-grey-teal.jpg",
    "assets/images/products/men-polo-white-lining.jpg",
    "assets/images/products/men-polo-white-red.jpg",
    "assets/images/products/men-tshirt-navy-norway.jpg",
    "assets/images/products/men-tshirt-maroon-norway.jpg",
    "assets/images/products/men-polo-white-beige-collar.jpg",
    "assets/images/products/men-polo-red.jpg",
    "assets/images/products/men-polo-white-anchor.jpg"
  ],

  /* ---------------------------------------------------------------
     14. TESTIMONIALS
     --------------------------------------------------------------- */
  testimonials: [
    { name: "Rina Begum", text: "অনেক সুন্দর কাপড়। বাচ্চার জন্য স্যুটটা নিয়েছিলাম, quality অনেক ভালো। ধন্যবাদ Aqsa Collection!", rating: 5 },
    { name: "Karim Hossain", text: "Cash on delivery তে পেলাম, product দেখে মন ভরে গেল। দাম ও সাশ্রয়ী। আবার অর্ডার করব।", rating: 5 }
  ],

  /* ---------------------------------------------------------------
     15. CTA SECTION
     --------------------------------------------------------------- */
  cta: {
    heading: "অর্ডার করুন আজই!",
    subtext: "WhatsApp এ message করুন অথবা সরাসরি আমাদের দোকানে আসুন। সারা বাংলাদেশে Cash on Delivery সুবিধা পাচ্ছেন।",
  },

  /* ---------------------------------------------------------------
     16. FOOTER
     --------------------------------------------------------------- */
  footer: {
    shortDescription: "Trendy, Comfortable & Affordable fashion for Men, Women & Kids. Nationwide Cash on Delivery.",
    quickLinks: [
      { label: "Home", link: "#home" },
      { label: "About", link: "#about" },
      { label: "Products", link: "#products" },
      { label: "Gallery", link: "#gallery" },
      { label: "Contact", link: "#contact" }
    ],
    privacyPolicyLink: "#",
    termsLink: "#"
  }
};

const BUSINESS_TYPE_PRESETS = {
  "Clothing Store":   { shopVerb: "Shop Now", ctaVerb: "Order Now" },
  "Boutique":         { shopVerb: "Explore Collection", ctaVerb: "Order Now" },
  "Saree Shop":       { shopVerb: "Browse Sarees", ctaVerb: "Order Now" },
  "Tailoring Shop":   { shopVerb: "View Services", ctaVerb: "Book Now" },
  "Shoe Store":       { shopVerb: "Shop Shoes", ctaVerb: "Order Now" },
  "Cosmetics Store":  { shopVerb: "Shop Now", ctaVerb: "Order Now" },
  "Jewellery Store":  { shopVerb: "View Collection", ctaVerb: "Enquire Now" },
  "General Retail Store": { shopVerb: "Shop Now", ctaVerb: "Order Now" }
};

// Expose to the page — index.html's inline engine reads window.CONFIG
window.CONFIG = CONFIG;
window.BUSINESS_TYPE_PRESETS = BUSINESS_TYPE_PRESETS;
