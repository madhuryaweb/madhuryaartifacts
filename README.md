# 🏡 Madhurya — Premium Handcrafted Home Décor Website

A clean, fast, production-ready **Next.js 14** website for **Madhurya** — a premium Indian home décor brand.

---

## 🚀 Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 14.2.5 | Framework (App Router) |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 3.4 | Styling |
| Framer Motion | 11 | Animations (ready to use) |
| Lucide React | 0.408 | Icons |
| next/image | built-in | Optimised images |
| next/font | built-in | Google Fonts (Cormorant + Jost) |

---

## 📁 Folder Structure

```
madhurya/
├── public/
│   └── images/          # Add your real product images here
├── src/
│   ├── app/             # All pages (App Router)
│   │   ├── page.tsx              # Home
│   │   ├── about/page.tsx        # About
│   │   ├── products/             # Products + filter
│   │   ├── blog/                 # Blog list + [slug]
│   │   ├── contact/page.tsx      # Contact + map
│   │   ├── bulk-order/page.tsx   # Bulk Orders
│   │   ├── partner/page.tsx      # Partner With Us
│   │   ├── career/page.tsx       # Career (LinkedIn)
│   │   ├── interior-styling/     # Styling Service
│   │   ├── sitemap.ts            # Auto-generated sitemap
│   │   ├── robots.ts             # robots.txt
│   │   ├── layout.tsx            # Root layout + fonts
│   │   ├── globals.css           # Design tokens + utilities
│   │   └── not-found.tsx         # 404 page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Sticky nav + dropdown + mobile menu
│   │   │   └── Footer.tsx        # Full footer
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CategoriesSection.tsx
│   │   │   ├── FeaturedProducts.tsx   # Auto-scroll strip
│   │   │   ├── AboutPreview.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── BlogPreview.tsx
│   │   │   └── CTABanner.tsx
│   │   └── ui/
│   │       ├── ProductCard.tsx    # Reusable card with WhatsApp CTA
│   │       └── WhatsAppFloat.tsx  # Sticky floating button
│   └── data/
│       └── data.ts               # ← ALL CONTENT LIVES HERE
```

---

## ⚡ Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000

# 4. Build for production
npm run build
npm start
```

---

## ✏️ How to Update Content

**All content is centralised in `src/data/data.ts`.**

### Add a product:
```ts
// src/data/data.ts
export const products: Product[] = [
  {
    id: 27,                          // Unique ID
    name: "My New Product",
    category: "lamps",               // Must match a category id
    image: "/images/my-product.jpg", // or Unsplash URL
    tag: "New",                      // Optional: "New" | "Bestseller" | "Limited"
    material: "Handwoven Bamboo",    // Optional
  },
  // ...
];
```

### Add a category:
```ts
export const categories: Category[] = [
  {
    id: "mirrors",           // URL-safe id
    name: "Mirrors",
    image: "/images/mirrors.jpg",
    description: "Artisan framed mirrors",
    count: 5,
  },
  // ...
];
```

### Add a blog post:
```ts
export const blogs: Blog[] = [
  {
    id: 4,
    title: "My New Blog Post",
    slug: "my-new-blog-post",        // Used in URL: /blog/my-new-blog-post
    excerpt: "Short teaser...",
    content: `
## Section Heading
Paragraph text here.
    `,
    image: "/images/blog4.jpg",
    author: "Madhurya Team",
    date: "1 April 2025",
    readTime: "4 min read",
    tags: ["Tips", "Styling"],
  },
];
```

### Update contact info:
```ts
export const siteConfig = {
  phone: "+91 98765 43210",
  whatsapp: "919876543210",   // Country code + number, no + or spaces
  email: "hello@madhurya.in",
  address: "Your full address here",
  // ...
};
```

---

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `--gold` | `#B8963E` | Accents, CTAs, highlights |
| `--cream` | `#F8F4EE` | Section backgrounds |
| `--charcoal` | `#2C2C2C` | Text, dark backgrounds |
| Font: Heading | Cormorant Garamond | All H1–H6 |
| Font: Body | Jost | All paragraphs, labels, buttons |

### Utility Classes (globals.css)
- `.btn-primary` — Dark filled button
- `.btn-outline` — Bordered button
- `.btn-gold` — Gold filled button
- `.section-title` — H2-level page title
- `.section-subtitle` — Gold uppercase label above titles
- `.container-md` — Max-width container with padding
- `.gold-rule` — Short gold horizontal rule

---

## 📱 Pages Overview

| Route | Page | Notes |
|-------|------|-------|
| `/` | Home | Hero, Categories, Products, About, Testimonials, Blog, CTA |
| `/about` | About | Brand story, values, timeline, artisan CTA |
| `/products` | Products | Category filter, grid, WhatsApp enquiry per product |
| `/blog` | Blog | Featured post hero, listing grid |
| `/blog/[slug]` | Blog Post | Renders from data.ts, static generated |
| `/contact` | Contact | WhatsApp card, phone/email/address, Google Map |
| `/bulk-order` | Bulk Orders | Benefits, use cases, WhatsApp + Google Form CTA |
| `/partner` | Partner | Artisan/designer/creator/reseller sections |
| `/career` | Career | Culture + LinkedIn redirect |
| `/interior-styling` | Styling Service | Service tiers, process steps, WhatsApp booking |

---

## 🔍 SEO

- Every page has unique `title` and `description` metadata
- Semantic HTML heading hierarchy (H1 → H2 → H3)
- All images use descriptive `alt` text
- Auto-generated `/sitemap.xml` (via `sitemap.ts`)
- Auto-generated `/robots.txt` (via `robots.ts`)
- Clean URL structure
- `next/image` for lazy loading + WebP optimisation
- Google Fonts loaded via `next/font` (no render-blocking CSS)

---

## 🖼️ Using Real Product Images

Replace Unsplash URLs with your own:

1. Add images to `/public/images/`
2. Update paths in `src/data/data.ts`:
   ```ts
   image: "/images/your-product-photo.jpg"
   ```
3. `next/image` will auto-optimise, resize, and lazy-load them.

**Recommended sizes:**
- Product images: `800×800px` (square)
- Category images: `600×800px` (portrait)
- Blog images: `1200×630px` (landscape)
- Hero: `1920×1080px`

---

## 🌐 Deployment

### Vercel (recommended — free)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

### Other platforms
The build output in `.next/` works with any Node.js server or static export.

---

## 📞 WhatsApp Integration

All enquiry buttons use this format:
```
https://wa.me/919876543210?text=Hi%20Madhurya!%20I'm%20interested%20in...
```

Update `siteConfig.whatsapp` in `data.ts` to change the number globally.

---

## 🔮 Future Enhancements (CMS-Ready)

The `data.ts` structure is designed to be replaced by a CMS:
- **Sanity.io** — swap `import { products } from "@/data/data"` with `sanity.fetch()`
- **Contentful** — same pattern
- **Strapi** — REST API calls replacing static imports
- No component changes needed — just the data source.

---

*Built with ❤️ for Madhurya — Where Craft Meets Home.*
