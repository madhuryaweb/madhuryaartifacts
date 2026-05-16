// ============================================================
// MADHURYA — Central Data Source
// Edit here to update all pages. CMS-ready structure.
// ============================================================

export const siteConfig = {
  name: "Madhurya",
  tagline: "Where Craft Meets Home",
  description:
    "Premium handcrafted home décor — wall art, clocks, lamps, and bespoke pieces that transform living spaces.",
  phone: "919425057991",
  whatsapp: "919425057991",
  email: "madhuryaartifacts@gmail.com contact.madhuryastore@gmail.com",
  address: "1, Agra - Mumbai Hwy, Bicholi Hapsi, Indore, Madhya Pradesh – 452016",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.715665711702!2d75.92799127476103!3d22.707394828017478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd22c3cd5683%3A0x9641f0b0f483b7f7!2sMadhurya%20Handicrafts%20%26%20Artifacts%20Store!5e1!3m2!1sen!2sin!4v1777178068030!5m2!1sen!2sin",
  social: {
    instagram: "https://www.instagram.com/madhuryaartifacts/",
    whatsapp: "https://wa.me/9425057991",
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
      "/images/p3.webp",
    description: "Hand-painted canvases that become conversation pieces",
    count: 12,
  },
  {
    id: "Clocks",
    name: "Clocks",
    image:
      "/images/c1.webp",
    description: "Artisanal timepieces blending function and beauty",
    count: 8,
  },
  {
    id: "Artifacts",
    name: "Artifacts",
    image:
      "/images/a4.webp",
    description: "Ambient lighting that sets the perfect mood",
    count: 10,
  },
  {
    id: "Vases",
    name: "Vases",
    image:
      "/images/v1.webp",
    description: "Sculptural vessels for botanicals and blooms",
    count: 7,
  },
  {
    id: "Artificial Plants",
    name: "Artificial Plants",
    image:
      "/images/v5.webp",
    description: "Luxe cushions, throws, and woven accents",
    count: 9,
  },
];

export const featuredProducts = [
  {
    id: "f1",
    name: "Luxury Wall Frame",
    image: "/images/p2.webp",
  },
  {
    id: "f2",
    name: "Modern Lamp",
    image: "/images/c1.webp",
  },
  {
    id: "f3",
    name: "Classic Watch",
    image: "/images/a1.webp",
  },
  {
    id: "f4",
    name: "Decor Statue",
    image: "/images/img1.webp",
  },
  {
    id: "f5",
    name: "Premium Painting",
    image: "/images/p3.webp",
  },
  {
    id: "f6",
    name: "Designer Vase",
    image: "/images/product.webp",
  },
];
export interface Product {
  id: number;
  name: string;
  slug: string;
  category: string;
  image: string;
  tag?: string;
  material: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}


export const products: Product[] = [
  // Wall Paintings
  {
    id: 1,
    name: "Golden Horizon Canvas",
    slug: "golden-horizon-canvas",
    category: "Painting",
    image: "/images/p1.webp",
    tag: "Bestseller",
    material: "Acrylic on Canvas",
    description: "A breathtaking abstract piece featuring warm golden tones that mimic a serene sunset horizon. Hand-painted with premium acrylics to bring a touch of sophisticated luxury to any modern living space.",
    metaTitle: "Golden Horizon Canvas Painting | Luxury Wall Art | Madhurya",
    metaDescription: "Shop the premium Golden Horizon Canvas painting at Madhurya. Handcrafted luxury acrylic wall art on canvas, perfect for sophisticated living room decor."
  },
  {
    id: 2,
    name: "Forest Whisper Triptych",
    slug: "forest-whisper-triptych",
    category: "Painting",
    image: "/images/p2.webp",
    tag: "New",
    material: "Oil on Canvas",
    description: "A stunning three-panel oil painting masterpiece capturing the deep mystery and calming whispers of a dense forest canopy. Features rich, deep textures that create an immersive natural atmosphere.",
    metaTitle: "Forest Whisper Triptych Oil Painting | Modern Art | Madhurya",
    metaDescription: "Discover the Forest Whisper Triptych at Madhurya. A luxury 3-panel oil painting sequence designed to elevate minimalist and contemporary walls."
  },
  {
    id: 3,
    name: "Abstract Terracotta Series",
    slug: "abstract-terracotta-series",
    category: "Painting",
    image: "/images/p3.webp",
    material: "Mixed Media",
    description: "An elegant mixed-media composition focusing on earthy terracotta profiles and minimalist geometric curves. Perfectly balances raw texture with contemporary artistic expression.",
    metaTitle: "Abstract Terracotta Series Wall Art | Mixed Media | Madhurya",
    metaDescription: "Buy modern Abstract Terracotta Series mixed media painting from Madhurya. Ideal neutral-toned premium wall decor for luxury home styling."
  },
  {
    id: 4,
    name: "Moonlit Botanicals",
    slug: "moonlit-botanicals",
    category: "Painting",
    image: "/images/p4.webp",
    tag: "Limited",
    material: "Watercolour on Paper",
    description: "A delicate and rare watercolor painting illustration depicting ethereal botanical silhouettes resting under a serene moonlit glow. Brings a calming, poetic mood to bedrooms or study lounges.",
    metaTitle: "Moonlit Botanicals Watercolour Painting | Limited Edition | Madhurya",
    metaDescription: "Shop luxury limited edition Moonlit Botanicals watercolor art online at Madhurya. Exquisite botanical framing for elegant home aesthetics."
  },
  {
    id: 5,
    name: "Marble Wash Study",
    slug: "marble-wash-study",
    category: "Painting",
    image: "/images/p5.webp",
    material: "Acrylic on Canvas",
    description: "An intriguing fluid-art exploration mimicry of premium marble vein textures on smooth canvas. Blends monochrome simplicity with high-end premium interior styling seamlessly.",
    metaTitle: "Marble Wash Study Abstract Acrylic Painting | Madhurya",
    metaDescription: "Enhance your interiors with the fluid Marble Wash Study acrylic canvas art by Madhurya. Premium monochrome luxury decor statement piece."
  },
  {
    id: 6,
    name: "Desert Dunes Panorama",
    slug: "desert-dunes-panorama",
    category: "Painting",
    image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80",
    tag: "New",
    material: "Oil on Canvas",
    description: "An expansive wide panoramic oil painting showcasing the majestic contours and golden light gradients of rolling desert dunes. Adds depth and a luxurious, warm warmth to grand accent walls.",
    metaTitle: "Desert Dunes Panorama Wide Oil Painting | Wall Art | Madhurya",
    metaDescription: "Explore the wide-angle Desert Dunes Panorama oil painting at Madhurya. Premium majestic desert wall art for high-end luxury styling."
  },

  // Clocks
  {
    id: 7,
    name: "Teak Sunburst Wall Clock",
    slug: "teak-sunburst-wall-clock",
    category: "clocks",
    image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=600&q=80",
    tag: "Bestseller",
    material: "Solid Teak Wood",
    description: "A striking sculptural timekeeper individually crafted from genuine solid teak wood. The dynamic sunburst design functions both as a premium luxury statement wall art and a reliable clock.",
    metaTitle: "Teak Sunburst Wall Clock | Premium Designer Clocks | Madhurya",
    metaDescription: "Buy handcrafted solid wood Teak Sunburst wall clock by Madhurya. A luxury mid-century modern accent for premium living spaces."
  },
  {
    id: 8,
    name: "Copper Rim Minimalist",
    slug: "copper-rim-minimalist",
    category: "clocks",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=600&q=80",
    material: "Metal & Glass",
    description: "Sleek contemporary design language featuring a brushed copper rim and a pristine, quiet clear glass dial cover. Provides a flawless minimalist aesthetic accent with completely silent sweep movement.",
    metaTitle: "Copper Rim Minimalist Silent Wall Clock | Luxury Clock | Madhurya",
    metaDescription: "Shop sleek Copper Rim Minimalist wall clocks from Madhurya. Quiet premium metal design crafted for high-end contemporary offices and homes."
  },
  {
    id: 9,
    name: "Vintage Gear Wall Clock",
    slug: "vintage-gear-wall-clock",
    category: "clocks",
    image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=600&q=80",
    tag: "Limited",
    material: "Reclaimed Wood & Brass",
    description: "An industrial steampunk-inspired focal piece showing beautiful interlocked gears resting on warm reclaimed wood base with pure brass numbering details. Perfect for classic lounges.",
    metaTitle: "Vintage Gear Wall Clock | Reclaimed Wood & Brass | Madhurya",
    metaDescription: "Acquire limited vintage style industrial Gear wall clocks online at Madhurya. Masterful brass and reclaimed wood craftsmanship."
  },
  {
    id: 10,
    name: "Marble Face Silent Clock",
    slug: "marble-face-silent-clock",
    category: "clocks",
    image: "https://images.unsplash.com/photo-1577436705536-4f2b677b1639?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNsb2NrfGVufDB8fDB8fHww",
    tag: "New",
    material: "Marble & Gold",
    description: "Crafted out of a solid slab of premium polished white marble, decorated with subtle gold hands. A masterclass item representing pure modern opulence and luxury interior styling.",
    metaTitle: "Marble Face Silent Wall Clock | Gold Accents | Madhurya",
    metaDescription: "Discover pure opulence with Madhurya's luxury Marble Face Silent Clock. Hand-polished natural marble base paired with minimalist golden elements."
  },

  // Lamps (Artifacts)
  {
    id: 11,
    name: "Rattan Pendant Lamp",
    slug: "rattan-pendant-lamp",
    category: "Artifacts",
    image: "/images/a1.webp",
    tag: "Bestseller",
    material: "Natural Rattan",
    description: "Hand-woven organic premium rattan threads curved meticulously to form an elegant light shade dome. Projects intricate, cozy ambient shadow lines across boho-chic and organic modern spaces.",
    metaTitle: "Natural Rattan Pendant Light Artifact | Ceiling Lamps | Madhurya",
    metaDescription: "Elevate your dining space or lounge using the Bestselling Rattan Pendant Lamp hanging artifact from Madhurya. Organic handcrafted luxury."
  },
  {
    id: 12,
    name: "Brass Arc Floor Lamp",
    slug: "brass-arc-floor-lamp",
    category: "Artifacts",
    image: "/images/a2.webp",
    tag: "New",
    material: "Brushed Brass & Marble",
    description: "A towering, gracefully curved brass overhead arc lamp counterbalanced perfectly by a heavy, premium black marble foundational block pedestal. An elite lighting solution for reading corners.",
    metaTitle: "Premium Brass Arc Floor Lamp Artifact | Lounge Lighting | Madhurya",
    metaDescription: "Shop the architectural luxury Brass Arc Floor Lamp by Madhurya. Elegant brushed brass finish combined with a solid dark marble baseline."
  },
  {
    id: 13,
    name: "Terracotta Table Lamp",
    slug: "terracotta-table-lamp",
    category: "Artifacts",
    image: "/images/v4.webp",
    material: "Hand-thrown Terracotta",
    description: "An artisan earthenware masterwork showcasing an organic, hand-thrown clay silhouette foundation paired alongside a raw textured neutral linen lampshade. Radiates soothing diffuse warm light.",
    metaTitle: "Artisan Terracotta Table Lamp | Luxury Clay Artifacts | Madhurya",
    metaDescription: "Purchase handcrafted warm earthy Terracotta Table Lamps online at Madhurya. Beautiful rustic modern ceramic lamp artifact."
  },
  {
    id: 14,
    name: "Bamboo Lantern Set",
    slug: "bamboo-lantern-set",
    category: "Artifacts",
    image: "/images/a4.webp",
    tag: "Limited",
    material: "Handwoven Bamboo",
    description: "A curated tiered assembly of handwoven structural bamboo lanterns. Housing internal glass candle protective units to emit safe, peaceful ambient illumination across patio layouts or corridors.",
    metaTitle: "Handwoven Bamboo Lantern Set | Luxury Lighting Accents | Madhurya",
    metaDescription: "Limited run Bamboo Lantern Set artifact from Madhurya. Exotic light design styling suited elegantly for premium verandah or living setups."
  },

  // Décor Items
  {
    id: 15,
    name: "Hand-carved Teak Bowl",
    slug: "hand-carved-teak-bowl",
    category: "decor-items",
    image: "https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?w=600&q=80",
    tag: "Bestseller",
    material: "Solid Teak",
    description: "Finely chiseled center-piece bowl carved entirely out of premium sustainably-sourced heavy teak roots. Every individual unit displays its own entirely distinctive organic grain lines and knot structures.",
    metaTitle: "Hand-carved Solid Teak Wood Bowl | Luxury Centerpiece | Madhurya",
    metaDescription: "Order the iconic raw luxury Hand-carved Teak Wood Bowl from Madhurya. Elegant rustic accent piece for premium table styling layouts."
  },
  {
    id: 16,
    name: "Brass Elephant Figurine",
    slug: "brass-elephant-figurine",
    category: "decor-items",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=600&q=80",
    material: "Handcast Brass",
    description: "A heavy cast traditional elephant figurine artifact boasting sophisticated antiqued finish texture work. Captures royal elegance and symbolizes prosperity within modern premium office shelves.",
    metaTitle: "Luxury Handcast Brass Elephant Figurine | Table Accents | Madhurya",
    metaDescription: "Classic brass elephant figurine home decor sculpture item at Madhurya. Timeless metal styling and luxury gifting collectible art."
  },
  {
    id: 17,
    name: "Wabi-Sabi Stone Trio",
    slug: "wabi-sabi-stone-trio",
    category: "decor-items",
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80",
    tag: "New",
    material: "Natural Stone",
    description: "A minimalist balancing arrangement of three uniquely smooth natural river stones. Celebrating the raw beauty found within natural imperfections as conceptualized by Japanese Wabi-Sabi designs.",
    metaTitle: "Wabi-Sabi Natural Stone Trio Sculpture | Zen Decor | Madhurya",
    metaDescription: "Incorporate organic minimalist zen aesthetics using Madhurya's new Wabi-Sabi Stone Trio balance showpiece accent."
  },
  {
    id: 18,
    name: "Gold Leaf Mirror Frame",
    slug: "gold-leaf-mirror-frame",
    category: "decor-items",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    tag: "Limited",
    material: "Wood & 24K Gold Leaf",
    description: "An incredibly detailed ornate baroque vanity mirror wall frame gilded masterfully using premium delicate 24K gold foil sheets. Instantly transforms standard home entryways into royal corridors.",
    metaTitle: "Ornate 24K Gold Leaf Mirror Frame | Luxury Mirrors | Madhurya",
    metaDescription: "Buy premium limited edition 24K Gold Leaf gilded wooden mirror framing from Madhurya. Ultimate luxury statement piece for entryways."
  },
  {
    id: 19,
    name: "Jute Macramé Wall Hanging",
    slug: "jute-macrame-wall-hanging",
    category: "decor-items",
    image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&q=80",
    material: "Natural Jute",
    description: "Intricately knotted handmade textile wall decor woven entirely with earthy premium grade organic jute fibers. Adds depth, texture, and visual coziness across bedroom or backdrop layouts.",
    metaTitle: "Premium Jute Macramé Bohemian Wall Hanging Art | Madhurya",
    metaDescription: "Add textured bohemian style using Madhurya's organic Jute Macramé fiber wall hanging. Beautifully handcrafted neutral home styling artifact."
  },
  {
    id: 20,
    name: "Ceramic Trinket Dish Set",
    slug: "ceramic-trinket-dish-set",
    category: "decor-items",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
    tag: "New",
    material: "Hand-glazed Ceramic",
    description: "A matching pair of organic shallow pottery trays boasting spectacular crystalline deep teal reactive glaze details. Highly practical for holding fine everyday jewelry or luxury personal items.",
    metaTitle: "Hand-glazed Ceramic Jewelry Trinket Dishes | Vanity Set | Madhurya",
    metaDescription: "Purchase gorgeous custom hand-glazed Ceramic Trinket Dishes by Madhurya. Delicate pottery vanity trays for luxury jewelry arrangement."
  },

  // Vases & Planters
  {
    id: 21,
    name: "Matte Black Stoneware Vase",
    slug: "matte-black-stoneware-vase",
    category: "Vases",
    image: "/images/v1.webp",
    tag: "Bestseller",
    material: "Stoneware",
    description: "An incredibly smooth, ultra-matte charcoal textured premium clay flower vase. The minimalist structural silhouette makes it highly compatible for holding dried pampas reeds or single branches.",
    metaTitle: "Minimalist Matte Black Stoneware Vase | Pampas Pot | Madhurya",
    metaDescription: "Shop the Bestselling luxury Matte Black Stoneware Ceramic Vase at Madhurya. Ideal minimalist flower vase accessory for modern table setups."
  },
  {
    id: 22,
    name: "Speckled Cream Planter",
    slug: "speckled-cream-planter",
    category: "Vases",
    image: "/images/v2.webp",
    material: "Hand-thrown Ceramic",
    description: "A premium heavy ceramic desktop planter base showcasing an earthy off-white color glaze peppered gently with organic volcanic ash flecks. Includes lower water drainage outlets.",
    metaTitle: "Speckled Cream Premium Ceramic Indoor Planter Pots | Madhurya",
    metaDescription: "Buy elegant Speckled Cream Planter pottery at Madhurya. Handcrafted heavy luxury planter pot perfect for premium internal botanicals."
  },
  {
    id: 23,
    name: "Ribbed Terracotta Trio",
    slug: "ribbed-terracotta-trio",
    category: "Vases",
    image: "/images/v3.webp",
    tag: "New",
    material: "Terracotta",
    description: "Three distinct, nested premium clay pottery vases with highly textured ribbed lines running across their organic exteriors. Captures beautiful old Mediterranean design sensibilities.",
    metaTitle: "Ribbed Terracotta Clay Vase Trio | Ancient Pottery Set | Madhurya",
    metaDescription: "Order the new rustic Mediterranean style Ribbed Terracotta Trio decorative flower vases from Madhurya. Perfect shelf styling statement accents."
  },

  // Textiles
  {
    id: 24,
    name: "Block Print Linen Cushion",
    slug: "block-print-linen-cushion",
    category: "textiles",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    tag: "Bestseller",
    material: "100% Linen",
    description: "Woven using authentic pure Belgian linen yarn threads and decorated carefully via traditional hand-carved teak block stamping methods. Adds effortless elegance to luxury sofas.",
    metaTitle: "Hand Block Printed Pure Linen Cushion Covers | Luxury Textiles | Madhurya",
    metaDescription: "Discover authentic artisanal premium Block Print Linen Cushion casings from Madhurya. Sustainable fine fabric upholstery for living setups."
  },
  {
    id: 25,
    name: "Handloom Throw Blanket",
    slug: "handloom-throw-blanket",
    category: "textiles",
    image: "https://images.unsplash.com/photo-1580237541049-2d715a09486e?w=600&q=80",
    material: "Organic Cotton",
    description: "An incredibly soft, heavy throw blanket loomed carefully by experienced traditional craft weavers. Features delicate frayed tassel margins, ideal for draping beautifully over lounge armchairs.",
    metaTitle: "Cozy Handloom Organic Cotton Throw Blanket | Sofa Throws | Madhurya",
    metaDescription: "Purchase high-quality artisan-crafted Handloom Throw Blankets online at Madhurya. Soft organic cotton styling layer for premium beds."
  },
  {
    id: 26,
    name: "Ikat Velvet Cushion Cover",
    slug: "ikat-velvet-cushion-cover",
    category: "textiles",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80",
    tag: "New",
    material: "Velvet",
    description: "An extremely rich plush premium silk velvet pillow casing boasting striking royal Ikat heritage dye pattern grids. Brings a heavy burst of rich color saturation and palatial textures into minimal lounge rooms.",
    metaTitle: "Luxury Ikat Velvet Silk Cushion Shells | Decorative Pillows | Madhurya",
    metaDescription: "Shop luxury new heavy Ikat Velvet Cushion Cases at Madhurya. Extravagant heritage pattern silk-velvet fabrics for exquisite interior spaces."
  }
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
