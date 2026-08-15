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
  productCategories: ["All", "Kids", "Women's", "Men's", "New Arrival"],

  /* ---------------------------------------------------------------
     11. PRODUCTS
     --------------------------------------------------------------- */
  products: [
    {
      id: "p001",
      name: "Kids Tracker Suit — Orange",
      category: "Kids",
      price: 750,
      oldPrice: 950,
      discount: "New Arrival",
      image: "assets/images/products/kids-tracker-orange.jpg",
      description: "Pure cotton cute tracker suit. Class A quality. Fun vehicle print for active kids.",
      availability: "In Stock"
    },
    {
      id: "p002",
      name: "Kids Kemodee Suit — Green",
      category: "Kids",
      price: 700,
      oldPrice: 900,
      discount: "20% OFF",
      image: "assets/images/products/kids-kemodee-green.jpg",
      description: "Soft cotton sweatshirt + jogger pants set. 'I Am The Kemodee' tractor print.",
      availability: "In Stock"
    },
    {
      id: "p003",
      name: "Kids Kemodee Suit — White",
      category: "Kids",
      price: 700,
      oldPrice: 900,
      discount: "20% OFF",
      image: "assets/images/products/kids-kemodee-white.jpg",
      description: "Soft cotton sweatshirt + black jogger pants. Classic white with tractor graphic.",
      availability: "In Stock"
    },
    {
      id: "p004",
      name: "Women's Anarkali Dress — Red",
      category: "Women's",
      price: 2200,
      oldPrice: 2800,
      discount: "Special Offer",
      image: "assets/images/products/women-anarkali-red.jpg",
      description: "Elegant embroidered Anarkali gown with dupatta. Perfect for weddings & celebrations.",
      availability: "In Stock"
    }
  ],

  /* ---------------------------------------------------------------
     12. COLLECTIONS
     --------------------------------------------------------------- */
  collections: [
    { title: "Kids Collection",    image: "assets/images/products/kids-tracker-orange.jpg",  description: "Fun, durable & adorable outfits for your little ones.",     link: "#products" },
    { title: "Women's Collection", image: "assets/images/products/women-anarkali-red.jpg",   description: "Elegant dresses for every occasion — casual to festive.",    link: "#products" },
    { title: "Eid Special",        image: "assets/images/collections/eid.jpg",               description: "Exclusive Eid collection — celebrate in style this year.",   link: "#products" }
  ],

  /* ---------------------------------------------------------------
     13. GALLERY
     --------------------------------------------------------------- */
  gallery: [
    "assets/images/products/kids-tracker-orange.jpg",
    "assets/images/products/kids-kemodee-green.jpg",
    "assets/images/products/kids-kemodee-white.jpg",
    "assets/images/products/women-anarkali-red.jpg",
    "assets/images/products/kids-tracker-orange2.jpg",
    "assets/images/products/kids-kemodee-green2.jpg"
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
