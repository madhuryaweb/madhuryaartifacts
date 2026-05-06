// ============================================================
// MADHURYA — Central Data Source
// Edit here to update all pages. CMS-ready structure.
// ============================================================

export const siteConfig = {
  name: "Madhurya",
  tagline: "Where Craft Meets Home",
  description:
    "Premium handcrafted home décor — wall art, clocks, lamps, and bespoke pieces that transform living spaces.",
  phone: "+91 9098448492",
  whatsapp: "919098448492",
  email: "hello@madhurya.in",
  address: "1, Agra - Mumbai Hwy, Bicholi Hapsi, Indore, Madhya Pradesh – 452016",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.715665711702!2d75.92799127476103!3d22.707394828017478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd22c3cd5683%3A0x9641f0b0f483b7f7!2sMadhurya%20Handicrafts%20%26%20Artifacts%20Store!5e1!3m2!1sen!2sin!4v1777178068030!5m2!1sen!2sin",
  social: {
    instagram: "https://www.instagram.com/madhuryaartifacts/",
    whatsapp: "https://wa.me/919098448492",
    facebook: "https://facebook.com/madhurya",
    pinterest: "https://pinterest.com/madhurya",
  },
};

export type Category = {
  id: string;
  name: string;
  image: string;
  description: string;
  count: number;
};

export const categories: Category[] = [
  {
    id: "Painting",
    name: "Painting",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=600&q=80",
    description: "Hand-painted canvases that become conversation pieces",
    count: 12,
  },
  {
    id: "Clocks",
    name: "Clocks",
    image:
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=600&q=80",
    description: "Artisanal timepieces blending function and beauty",
    count: 8,
  },
  {
    id: "Artifacts",
    name: "Artifacts & Décor",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&q=80",
    description: "Ambient lighting that sets the perfect mood",
    count: 10,
  },
  {
    id: "Rugs",
    name: "Rugs & Textiles",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    description: "Curated accent pieces for every corner",
    count: 15,
  },
  {
    id: "Vases",
    name: "Vases & Planters",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80",
    description: "Sculptural vessels for botanicals and blooms",
    count: 7,
  },
  {
    id: "Artificial Planter",
    name: "Artificial Planter",
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80",
    description: "Luxe cushions, throws, and woven accents",
    count: 9,
  },
];

export const featuredProducts = [
  {
    id: "f1",
    name: "Luxury Wall Frame",
    image: "/images/p1.png",
  },
  {
    id: "f2",
    name: "Modern Lamp",
    image: "/images/c1.png",
  },
  {
    id: "f3",
    name: "Classic Watch",
    image: "/images/a1.png",
  },
  {
    id: "f4",
    name: "Decor Statue",
    image: "/images/img1.jpeg",
  },
  {
    id: "f5",
    name: "Premium Painting",
    image: "/images/p3.png",
  },
  {
    id: "f6",
    name: "Designer Vase",
    image: "/images/v1.png",
  },
];
export type Product = {
  id: number;
  name: string;
  category: string;
  image: string;
  tag?: "New" | "Bestseller" | "Limited";
  material?: string;
};

export const products: Product[] = [
  // Wall Paintings
  {
    id: 1,
    name: "Golden Horizon Canvas",
    category: "Painting",
    image:
      "/images/p1.png",
    tag: "Bestseller",
    material: "Acrylic on Canvas",
  },
  {
    id: 2,
    name: "Forest Whisper Triptych",
    category: "Painting",
    image:
       "/images/p2.png",
    tag: "New",
    material: "Oil on Canvas",
  },
  {
    id: 3,
    name: "Abstract Terracotta Series",
    category: "Painting",
    image:
       "/images/p3.png",
    material: "Mixed Media",
  },
  {
    id: 4,
    name: "Moonlit Botanicals",
    category: "Painting",
    image:
       "/images/p4.png",
    tag: "Limited",
    material: "Watercolour on Paper",
  },
  {
    id: 5,
    name: "Marble Wash Study",
    category: "Painting",
    image:
       "/images/p5.png",
    material: "Acrylic on Canvas",
  },
  {
    id: 6,
    name: "Desert Dunes Panorama",
    category: "Painting",
    image:
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80",
    tag: "New",
    material: "Oil on Canvas",
  },

  // Clocks
  {
    id: 7,
    name: "Teak Sunburst Wall Clock",
    category: "clocks",
    image:
      "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=600&q=80",
    tag: "Bestseller",
    material: "Solid Teak Wood",
  },
  {
    id: 8,
    name: "Copper Rim Minimalist",
    category: "clocks",
    image:
      "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600&q=80",
    material: "Metal & Glass",
  },
  {
    id: 9,
    name: "Vintage Gear Wall Clock",
    category: "clocks",
    image:
      "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&q=80",
    tag: "Limited",
    material: "Reclaimed Wood & Brass",
  },
  {
    id: 10,
    name: "Marble Face Silent Clock",
    category: "clocks",
    image:
      "https://images.unsplash.com/photo-1577436705536-4f2b677b1639?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb2NrfGVufDB8fDB8fHww",
    tag: "New",
    material: "Marble & Gold",
  },

  // Lamps
  {
    id: 11,
    name: "Rattan Pendant Lamp",
    category: "Artifacts",
    image:
      "/images/a1.png",
    tag: "Bestseller",
    material: "Natural Rattan",
  },
  {
    id: 12,
    name: "Brass Arc Floor Lamp",
    category: "Artifacts",
    image:
      "/images/a2.png",
    tag: "New",
    material: "Brushed Brass & Marble",
  },
  {
    id: 13,
    name: "Terracotta Table Lamp",
    category: "Artifacts",
    image:
      "/images/v4.png",
    material: "Hand-thrown Terracotta",
  },
  {
    id: 14,
    name: "Bamboo Lantern Set",
    category: "Artifacts",
    image:
      "/images/a4.png",
    tag: "Limited",
    material: "Handwoven Bamboo",
  },

  // Décor Items
  {
    id: 15,
    name: "Hand-carved Teak Bowl",
    category: "decor-items",
    image:
      "https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?w=600&q=80",
    tag: "Bestseller",
    material: "Solid Teak",
  },
  {
    id: 16,
    name: "Brass Elephant Figurine",
    category: "decor-items",
    image:
      "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&q=80",
    material: "Handcast Brass",
  },
  {
    id: 17,
    name: "Wabi-Sabi Stone Trio",
    category: "decor-items",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80",
    tag: "New",
    material: "Natural Stone",
  },
  {
    id: 18,
    name: "Gold Leaf Mirror Frame",
    category: "decor-items",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    tag: "Limited",
    material: "Wood & 24K Gold Leaf",
  },
  {
    id: 19,
    name: "Jute Macramé Wall Hanging",
    category: "decor-items",
    image:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&q=80",
    material: "Natural Jute",
  },
  {
    id: 20,
    name: "Ceramic Trinket Dish Set",
    category: "decor-items",
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
    tag: "New",
    material: "Hand-glazed Ceramic",
  },

  // Vases & Planters
  {
    id: 21,
    name: "Matte Black Stoneware Vase",
    category: "Vases",
    image:
      "/images/v1.png",
    tag: "Bestseller",
    material: "Stoneware",
  },
  {
    id: 22,
    name: "Speckled Cream Planter",
    category: "Vases",
    image:
      "/images/v2.png",
    material: "Hand-thrown Ceramic",
  },
  {
    id: 23,
    name: "Ribbed Terracotta Trio",
    category: "Vases",
    image:
      "/images/v3.png",
    tag: "New",
    material: "Terracotta",
  },

  // Textiles
  {
    id: 24,
    name: "Block Print Linen Cushion",
    category: "textiles",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    tag: "Bestseller",
    material: "100% Linen",
  },
  {
    id: 25,
    name: "Handloom Throw Blanket",
    category: "textiles",
    image:
      "https://images.unsplash.com/photo-1580237541049-2d715a09486e?w=600&q=80",
    material: "Organic Cotton",
  },
  {
    id: 26,
    name: "Ikat Velvet Cushion Cover",
    category: "textiles",
    image:
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80",
    tag: "New",
    material: "Velvet",
  },
];

export type Testimonial = {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  avatar?: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Indore",
    rating: 5,
    review:
      "The Golden Horizon canvas completely transformed our living room. The craftsmanship is extraordinary — you can feel the care in every brushstroke. Madhurya is our go-to for all things home.",
  },
  {
    id: 2,
    name: "Rahul & Neha Gupta",
    location: "Mumbai",
    rating: 5,
    review:
      "Ordered the Rattan Pendant Lamp for our new home and it exceeded every expectation. The packaging was premium, delivery was on time, and the quality is unmatched at this price point.",
  },
  {
    id: 3,
    name: "Sanjana Mehta",
    location: "Pune",
    rating: 5,
    review:
      "I've been styling interiors for 8 years and Madhurya is the most consistent handcraft brand I've found in India. My clients always ask where I source these pieces. Highly recommended.",
  },
  {
    id: 4,
    name: "Vikram Nair",
    location: "Bangalore",
    rating: 5,
    review:
      "The Before/After transformation they did for my home office was stunning. The team truly understands spatial aesthetics. Professional, prompt, and passionate.",
  },
];

export type Blog = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
};

export const blogs: Blog[] = [
  {
    id: 1,
    title: "10 Home Décor Trends Defining Indian Interiors in 2025",
    slug: "home-decor-trends-india-2025",
    excerpt:
      "From earthy terracotta palettes to sculptural brass accents — discover the design movements shaping Indian homes this year.",
    content: `
Home décor in India is experiencing a renaissance. Designers and homeowners alike are embracing a rich blend of traditional craft and contemporary minimalism.

## 1. Earthy Terracotta Palettes
Warm terracotta, burnt sienna, and raw umber are replacing cool greys. These grounded hues bring warmth and connect us to India's clay craft heritage.

## 2. Statement Handmade Ceramics
One-of-a-kind ceramic pieces — from textured vases to sculptural bowls — are replacing mass-produced décor. The imperfection is the point.

## 3. Natural Material Layering
Combining rattan, jute, bamboo, and linen creates rich textural interiors that feel curated, not cluttered.

## 4. Artisan Wall Art
Large-format handpainted canvases are becoming the focal point of living spaces — replacing gallery walls with single, powerful works.

## 5. Warm Metals
Brushed brass and unlacquered copper are favoured over cold chrome and silver. These metals patinate beautifully over time.
    `,
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
    author: "Madhurya Team",
    date: "15 March 2025",
    readTime: "5 min read",
    tags: ["Trends", "Interior Design", "India"],
  },
  {
    id: 2,
    title: "Why Handmade Always Wins: The Case for Artisanal Home Décor",
    slug: "why-handmade-wins-artisanal-decor",
    excerpt:
      "In a world of fast furniture, handcrafted pieces offer something rare — soul. Here's why investing in handmade décor is always the right choice.",
    content: `
Every handmade piece carries within it the hours, skill, and intention of the artisan who created it. That's something no factory can replicate.

## The Story in the Grain
When you run your hand across a hand-carved teak bowl, you're touching a story. The slight variations in finish, the unique grain pattern — these are marks of authenticity.

## Sustainability by Design
Handmade production inherently uses fewer resources than industrial manufacturing. Local artisans use traditional techniques with lower carbon footprints.

## Supporting Craft Ecosystems
Choosing handmade directly supports craft communities across India. Each purchase keeps an ancient skill alive.

## Investment Value
Well-crafted handmade pieces retain and often appreciate in value. Unlike flat-pack furniture, they age gracefully and can be passed down.
    `,
    image:
      "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80",
    author: "Madhurya Team",
    date: "2 February 2025",
    readTime: "4 min read",
    tags: ["Handmade", "Artisanal", "Sustainability"],
  },
  {
    id: 3,
    title: "How to Style Your Living Room with Madhurya Pieces",
    slug: "style-living-room-madhurya",
    excerpt:
      "A practical guide to building a cohesive, elegant living room using our most popular collections — with before and after inspiration.",
    content: `
Styling a living room that feels both personal and designed is easier than it looks. The secret is a layered approach.

## Start with Anchor Pieces
Choose one large artwork or a striking floor lamp as the room's anchor. Everything else should complement, not compete.

## The Rule of Three
Group décor items in odd numbers — three vases of varying heights, three cushions in complementary textures. It feels natural, not staged.

## Layer Your Lighting
A ceiling light, a floor lamp, and a table lamp together create depth and warmth. Avoid relying on a single overhead source.

## Mix Textures, Not Too Many Colours
Stick to a palette of 2–3 colours but layer textures freely — linen, rattan, ceramic, and wood together create richness.

## Leave Breathing Room
Negative space is as important as the objects you place. Resist the urge to fill every surface.
    `,
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    author: "Madhurya Team",
    date: "10 January 2025",
    readTime: "6 min read",
    tags: ["Styling Tips", "Living Room", "Guide"],
  },
];
