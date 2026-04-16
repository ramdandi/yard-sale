// ─────────────────────────────────────────────────────────────────────────────
// ITEMS DATA FILE
// Edit this file to add, remove, or update your listings.
//
// FIELDS:
//   id          — unique identifier (no spaces, e.g. "queen-bed-frame")
//   title       — catchy name for the item
//   description — a short, enticing description
//   category    — one of: "Furniture" | "Kitchen" | "Electronics" | "Decor" | "Clothing" | "Other"
//   condition   — one of: "Like New" | "Excellent" | "Good" | "Fair"
//   price       — asking price in USD (number)
//   image       — path to image in /public/images/ folder, e.g. "/images/queen-bed.jpg"
//                 use null to show a placeholder
//   status      — "available" | "sold" | "hold" (you can change this in the Admin dashboard too)
//   dimensions  — optional string, e.g. "60\" W × 80\" L × 48\" H"
//   note        — optional short note, e.g. "Pickup only — requires a truck"
// ─────────────────────────────────────────────────────────────────────────────

export const SALE_TITLE = "Hridaan's Yard Sale";
export const SALE_SUBTITLE = "We're relocating to India. A well-loved home's finest pieces — now looking for new ones.";
export const SALE_LOCATION = "Location shared upon confirmed offer";
export const SELLER_NAME = "Gaurav";
export const SELLER_EMAIL = "gauravatcs@aol.com"; // your email for coordination
export const VENMO_HANDLE = "@your-venmo";         // update this
export const ZELLE_CONTACT = "gauravatcs@aol.com"; // update if different
export const ADMIN_PASSWORD = "movingsale2026";    // change to something private!

// ─────────────────────────────────────────────────────────────────────────────
// FORMSPREE ENDPOINT
// 1. Go to https://formspree.io and create a free account
// 2. Create a new form → copy the form ID (e.g. "xpzvwkqr")
// 3. Replace "YOUR_FORM_ID" below with your actual ID
// ─────────────────────────────────────────────────────────────────────────────
export const FORMSPREE_ID = "mrerbwvg";

// ─────────────────────────────────────────────────────────────────────────────
// WHATSAPP (optional but recommended — completely free)
// Enter your full number with country code, no spaces or dashes
// e.g. US number +1 (555) 123-4567 → "15551234567"
// Leave as null to disable WhatsApp buttons
// ─────────────────────────────────────────────────────────────────────────────
export const WHATSAPP_NUMBER = null; // e.g. "14155552671"

// ─────────────────────────────────────────────────────────────────────────────
// YOUR LISTINGS — edit freely
// ─────────────────────────────────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
// START WITH 1 ITEM — test the full flow, then add more below.
// Copy the block below and fill in your real details for each item.
// ─────────────────────────────────────────────────────────────────────────────
export const items = [
  {
    id: "air-conditioner",
    title: "Black+Decker Portable Air Conditioner — 10,000 BTU",
    description: "No installation, no hassle — just cool air on demand. The Black+Decker BPACT10WT delivers 10,000 BTU of cooling power with multiple fan speeds, a digital display, and built-in controls. Rolls easily from room to room. Exhaust hose included — vent it out any window and you're set. Perfect for a bedroom, home office, or apartment.",
    category: "Electronics",
    condition: "Good",
    price: 225,
    images: [
      "/images/air-conditioner/1.jpg",
      "/images/air-conditioner/2.jpg",
      "/images/air-conditioner/3.jpg",
    ],
    status: "available",
    dimensions: null,
    note: "Exhaust hose included. Buyer responsible for pickup.",
  },

  {
    id: "tv-stand-fireplace",
    title: "Farmhouse TV Stand with Electric Fireplace — Dark Walnut",
    description: "Function meets atmosphere. This handsome farmhouse-style TV stand pairs barn door cabinets and open shelving with a built-in electric fireplace insert that fills the room with a warm, flickering glow. The rich dark walnut finish and X-detail doors add rustic character to any living space. Fits TVs up to 65\". A statement piece that does double duty as storage and ambiance.",
    category: "Furniture",
    condition: "Good",
    price: 150,
    images: [
      "/images/tv-stand/1.jpg",
      "/images/tv-stand/2.jpg",
    ],
    status: "available",
    dimensions: "27.5\" H · Fits TVs up to 65\"",
    note: "Electric fireplace insert included and functional. Requires disassembly for transport.",
  },

  {
    id: "lasko-space-heater",
    title: "Lasko Ceramic Space Heater — Compact Tabletop, 1500W",
    description: "Instant warmth exactly where you need it. The Lasko CD09250 is a compact 9\" ceramic heater that sits on a desk, countertop, or tucks neatly under a desk. Dial controls for heat settings and adjustable thermostat, 1500W output, and a quiet fan that won't distract you. Fully functional — ideal for a home office or bedroom.",
    category: "Electronics",
    condition: "Good",
    price: 15,
    images: [
      "/images/space-heater/1.jpg",
      "/images/space-heater/2.jpg",
    ],
    status: "available",
    dimensions: "9\" H",
    note: null,
  },

  {
    id: "corduroy-sofa",
    title: "Anwand 108.5\" Corduroy Modular Sofa — Golden Mustard",
    description: "A showstopper of a sofa. The Anwand's rich golden mustard corduroy and deeply tufted cushions bring instant warmth and character to any living room. At 108.5\" wide with three generous modular sections, there's room for everyone. Plush back cushions, wide arms, and a low-profile silhouette that looks as good as it feels. Retails at $719.99 on Wayfair — a 4.5-star bestseller. Normal signs of use, structurally solid.",
    category: "Furniture",
    condition: "Good",
    price: 275,
    images: [
      "/images/sofa/1.jpg",
      "/images/sofa/2.jpg",
      "/images/sofa/3.jpg",
      "/images/sofa/4.jpg",
    ],
    status: "available",
    dimensions: "108.5\" W × 3 modular sections",
    note: "Requires a truck or large SUV for pickup.",
  },

  {
    id: "razor-a-scooter",
    title: "Razor A Kick Scooter — Red",
    description: "The classic that started it all. The Razor A is the world's best-selling kick scooter — lightweight aluminum frame, smooth urethane wheels, and a foldable design that tucks away in seconds. Red handles and deck with the iconic silver frame. Great for kids or a quick neighborhood cruise. Fully functional with normal signs of use.",
    category: "Other",
    condition: "Good",
    price: 20,
    images: ["/images/scooter/1.jpg"],
    status: "available",
    dimensions: null,
    note: "Foldable. Suits ages 5+ / up to 143 lbs.",
  },

  {
    id: "samsung-55-qled-tv",
    title: "Samsung 55\" QLED 4K Smart TV — Barely Used",
    description: "Samsung's vivid QLED technology in a stunning 55\" display — manufactured June 2025 and barely used. Quantum dot color delivers rich, accurate hues with exceptional brightness. Samsung's Tizen smart platform gives you instant access to Netflix, Prime, YouTube, Disney+, and more. Ultra-slim profile, minimal bezels, and a picture that simply has to be seen to be believed.",
    category: "Electronics",
    condition: "Like New",
    price: 250,
    images: [
      "/images/samsung-tv/1.jpg",
      "/images/samsung-tv/2.jpg",
      "/images/samsung-tv/3.jpg",
    ],
    status: "available",
    dimensions: "55\" diagonal",
    note: "Model: QN55Q7FDAF · Manufactured June 2025 · Remote included.",
  },

  {
    id: "lenovo-thinkvision-p27h",
    title: "Lenovo ThinkVision P27h-10 — 27\" QHD Monitor",
    description: "A premium business-grade display from Lenovo's ThinkVision line. The P27h-10 delivers a sharp 2560×1440 QHD IPS panel with excellent color accuracy, thin bezels, and an ergonomic stand that tilts, swivels, and height-adjusts. USB-C, HDMI, and DisplayPort inputs plus a built-in USB hub. A serious upgrade for any home office setup. Clean screen, no dead pixels, original stand included.",
    category: "Electronics",
    condition: "Good",
    price: 150,
    images: [
      "/images/monitor/1.jpg",
      "/images/monitor/2.jpg",
    ],
    status: "available",
    dimensions: "27\" display · 2560×1440 QHD",
    note: "USB-C · HDMI · DisplayPort · Built-in USB hub · Height-adjustable stand.",
  },

  {
    id: "lenovo-chromebook-flex5i",
    title: "Lenovo Flex 5i Chromebook Plus — 14\" 2K Touch, i3, 8GB/128GB",
    description: "A premium 2-in-1 Chromebook that punches well above its class. The 14\" 2K touchscreen is crisp and bright, the Intel Core i3 1315U keeps everything smooth and responsive, and 8GB RAM handles multitasking effortlessly. Folds fully into tablet mode, runs Android apps, and lasts all day on a charge. 128GB SSD, Storm Grey finish. In excellent condition — barely shows use. Retails at $499.",
    category: "Electronics",
    condition: "Excellent",
    price: 280,
    images: [
      "/images/laptop/1.jpg",
      "/images/laptop/2.jpg",
      "/images/laptop/3.jpg",
      "/images/laptop/4.jpg",
    ],
    status: "available",
    dimensions: "14\" display",
    note: "Intel Core i3 1315U · 8GB RAM · 128GB SSD · 2K touchscreen · 2-in-1 convertible.",
  },

  {
    id: "instant-pot-smart-wifi",
    title: "Instant Pot Smart WiFi — Multi-Use Pressure Cooker",
    description: "The smartest Instant Pot in the lineup. The Smart WiFi connects to the Instant Pot app so you can monitor and control cooking from your phone. Pressure cook, slow cook, sauté, steam, rice, yogurt and more — all in one pot. LCD display, multiple preset programs, and the iconic stainless steel build. A genuine kitchen workhorse.",
    category: "Kitchen",
    condition: "Good",
    price: 50,
    images: ["/images/instant-pot/1.jpg"],
    status: "available",
    dimensions: null,
    note: "Inner pot and lid included.",
  },

  {
    id: "toaster-4-slot",
    title: "4-Slot Toaster — Black",
    description: "A no-fuss 4-slot toaster that does exactly what you need. Wide slots handle thick bread, bagels, and English muffins with ease. Adjustable browning control dial and a removable crumb tray for easy cleanup. Fully functional with normal signs of use.",
    category: "Kitchen",
    condition: "Good",
    price: 8,
    images: ["/images/toaster/1.jpg"],
    status: "available",
    dimensions: null,
    note: null,
  },

  {
    id: "sandwich-maker",
    title: "Sandwich Maker — 4-Slice Non-Stick",
    description: "Perfectly pressed, golden toasted sandwiches in minutes. This 4-triangle sandwich maker creates two panini-style sandwiches at once with non-stick plates that make cleanup a breeze. Great for quick lunches, grilled cheese, or hot pockets. Fully functional.",
    category: "Kitchen",
    condition: "Good",
    price: 10,
    images: ["/images/sandwich-maker/1.jpg"],
    status: "available",
    dimensions: null,
    note: null,
  },

  {
    id: "keyboard-apple-compact",
    title: "Apple Compact Wired Keyboard — Aluminum",
    description: "Apple's iconic slim aluminum keyboard in its compact form — no number pad, just clean, minimal design that fits beautifully on any desk. Quiet, responsive keys with the layout Mac users know and love. Plug-and-play via USB, no drivers needed. Normal signs of use with no damage to keys or chassis.",
    category: "Electronics",
    condition: "Good",
    price: 25,
    images: ["/images/keyboard-apple/1.jpg"],
    status: "available",
    dimensions: null,
    note: "USB wired. Compatible with Mac and PC.",
  },

  {
    id: "keyboard-redragon-gaming",
    title: "Redragon Full-Size Gaming Keyboard with Wrist Rest",
    description: "A full-featured gaming keyboard with satisfying tactile keys, dedicated media controls, and a built-in wrist rest for long sessions. Full 104-key layout with function row, number pad, and macro keys along the top. Solid build, responsive feedback, and everything you need for work or play. Shows normal signs of use.",
    category: "Electronics",
    condition: "Good",
    price: 20,
    images: ["/images/keyboard-redragon/1.jpg"],
    status: "available",
    dimensions: null,
    note: "USB wired. Wrist rest attached.",
  },

  {
    id: "lumbar-heating-pad",
    title: "CVS Health Lumbar Wrap Heating Pad — Series 500",
    description: "Targeted lower back relief at the touch of a button. This lumbar wrap heating pad heats up in just 30 seconds with 4 adjustable LED heat settings. The flexible microplush fabric conforms to your body and wraps securely with an elastic strap — perfect for a chair, couch, or bed. Machine washable, auto-off safety feature. Still in original box.",
    category: "Other",
    condition: "Like New",
    price: 15,
    images: ["/images/heating-pad/1.jpg"],
    status: "available",
    dimensions: "23.2\" × 10.1\"",
    note: "Still in original box.",
  },

  {
    id: "mazda-cx50-2024",
    title: "2024 Mazda CX-50 2.5 S Preferred AWD — 21K Miles",
    description: "A near-new 2024 CX-50 in stunning Polymetal Gray — Mazda's most refined SUV, driven just 21,340 miles. The Preferred trim brings everything you want: AWD, panoramic sunroof, black sport alloys on Goodyear tires, a premium interior with dual-zone climate, and Mazda's intuitive infotainment. Clean, well-maintained, and selling because we're relocating. Both key fobs included. Private party sale — title in hand.",
    category: "Other",
    condition: "Excellent",
    price: 27500,
    images: [
      "/images/car/1.jpg",
      "/images/car/2.jpg",
      "/images/car/3.jpg",
      "/images/car/4.jpg",
      "/images/car/5.jpg",
      "/images/car/6.jpg",
      "/images/car/7.jpg",
      "/images/car/8.jpg",
      "/images/car/9.jpg",
      "/images/car/10.jpg",
    ],
    status: "available",
    dimensions: null,
    note: "2024 · 21,340 miles · AWD · Polymetal Gray · Both keys included. Test drives welcome — buyer arranges own inspection.",
  },

  {
    id: "bike-woom-go3",
    title: "Woom GO 3 Kids' Bike — 16\" Metallic Blue",
    description: "One of the best kids' bikes money can buy, now available at a fraction of the price. The Woom GO 3 is legendary for its featherlight aluminum frame, Schwalbe tires, and ergonomic design built specifically for young riders. 16\" wheels, hand brakes, and a geometry that makes learning to ride genuinely easy. Metallic blue finish in good condition with normal signs of use. Retails at $499–$549.",
    category: "Other",
    condition: "Good",
    price: 350,
    images: [
      "/images/bike/1.jpg",
      "/images/bike/2.jpg",
      "/images/bike/3.jpg",
      "/images/bike/4.jpg",
      "/images/bike/5.jpg",
    ],
    status: "available",
    dimensions: "16\" wheels — suits ages 4–6 approx.",
    note: null,
  },

  {
    id: "baby-carrier",
    title: "Gingham Baby Carrier — Black & White Check",
    description: "A classic black-and-white gingham carrier that's as practical as it is charming. Padded shoulder straps and a supportive waist belt keep both parent and baby comfortable for hours. Multiple carry positions, easy-adjust buckles, and a clean, timeless pattern that goes with everything. Lightly used and in excellent condition.",
    category: "Other",
    condition: "Excellent",
    price: 35,
    images: [
      "/images/baby-carrier/1.jpg",
      "/images/baby-carrier/2.jpg",
    ],
    status: "available",
    dimensions: null,
    note: null,
  },

  {
    id: "queen-bed-frame",
    title: "Queen Bed Frame + Box Spring — Dark Espresso",
    description: "A bold, architectural statement in dark espresso. The striking tiled panel headboard commands the room, paired with a matching panelled base for a cohesive, designer look. Wood slats included. The box spring is still in its original plastic wrap — never used. Just add your mattress and you're done. Solid, sturdy construction that has held up beautifully. Originally retailed at $280+.",
    category: "Furniture",
    condition: "Good",
    price: 150,
    images: [
      "/images/bed-frame/1.jpg",
      "/images/bed-frame/2.jpg",
      "/images/bed-frame/3.jpg",
      "/images/bed-frame/4.jpg",
      "/images/bed-frame/5.jpg",
    ],
    status: "available",
    dimensions: "Queen (60\" W × 80\" L)",
    note: "Box spring included — still in original plastic. No mattress. Requires disassembly — buyer responsible for pickup.",
  },
];

export const categories = ["All", ...new Set(items.map(i => i.category))];
export const conditions = ["Like New", "Excellent", "Good", "Fair"];
