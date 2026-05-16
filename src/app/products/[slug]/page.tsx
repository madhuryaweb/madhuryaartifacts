import { products } from '@/data/data'; 
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { Product, siteConfig } from "@/data/data";

interface Props {
  params: { slug: string };
}

// 1. DYNAMIC METADATA SETUP (FIXED BUGS)
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return { title: 'Product Not Found | Madhurya' };
  }

  return {
    title: `${product.name} | Premium Luxury Decor | Madhurya`,
    description: `Buy ${product.name} online at Madhurya. High-end handcrafted home decor styling for premium interiors.`,
    alternates: {
      canonical: `https://madhurya.in/products/${product.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// 2. MAIN PRODUCT DETAIL PAGE
export default function ProductDetailPage({ params }: Props) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const productUrl = `https://madhuryaartifacts.in/products/${product.slug}`;

  const waMessage = encodeURIComponent(
    `Hi Madhurya! I'm interested in "${product.name}"\n` +
    `Image: ${productUrl}\n` +
    `Please share more details & pricing.`
  );

  // Reference/Related Products Filter (Same category ke baaki items recommendation ke liye)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3); // Max 3 items display honge gallery me

  return (
    <main className="max-w-6xl mx-auto p-4 md:p-6 my-12 md:my-20 min-h-screen">
      
      {/* Product Detail Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20">
        
        {/* Left Side: Product Image (Fixed dimensions & layout) */}
        <div className="relative h-[320px] sm:h-[450px] w-full rounded-xl overflow-hidden bg-neutral-100 shadow-md border border-amber-900/10">
          <Image
            src={product.image}
            alt={`${product.name} - Luxury Home Decor by Madhurya`}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side: Product Information */}
        <div className="flex flex-col justify-center">
          <span className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#CB7831] font-semibold mb-2">
            {product.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-neutral-900 mb-4 leading-tight">
            {product.name}
          </h1>
          <div className="h-[2px] w-16 bg-[#CB7831] mb-6"></div>
          
          <p className="text-neutral-600 leading-relaxed text-base md:text-lg mb-8">
            {product.description || "Elevate your living spaces with this premium masterwork from Madhurya's luxury collection. Designed for elegant, modern interiors."}
          </p>
          
          {/* Action Area: WhatsApp Enquiry Button (Clean & Responsive Custom Fix) */}
          <div className="w-full sm:w-auto">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${waMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-[#CB7831] hover:bg-[#b06323] text-white font-medium text-sm tracking-wider uppercase px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <svg 
                className="w-5 h-5 fill-current" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.4.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.43 1.98 13.96 1.05 11.33 1.048c-5.44 0-9.866 4.373-9.87 9.803-.001 1.97.518 3.894 1.504 5.614l-.993 3.634 3.676-.945zm11.416-5.461c-.31-.156-1.836-.905-2.092-.998-.256-.092-.443-.139-.63.141-.186.281-.722.905-.886 1.092-.164.188-.328.211-.639.055-.31-.156-1.31-.483-2.496-1.541-.923-.823-1.547-1.84-1.728-2.152-.18-.312-.018-.48.137-.635.141-.139.312-.363.469-.546.156-.182.208-.312.312-.52.104-.207.052-.39-.026-.546-.078-.156-.63-1.518-.863-2.083-.227-.547-.457-.472-.63-.48-.164-.008-.353-.01-.542-.01-.189 0-.497.07-.757.353-.26.283-.993.971-.993 2.368 0 1.397 1.017 2.746 1.158 2.934.142.188 2.004 3.059 4.85 4.286.677.292 1.206.467 1.62.598.681.216 1.3.185 1.79.112.546-.08 1.836-.75 2.092-1.437.256-.687.256-1.277.18-1.397-.076-.12-.279-.193-.59-.349z"/>
              </svg>
              Quick Enquiry on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* 3. IMAGE REFERENCE GALLERY SECTION (RELATED PRODUCTS) */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-neutral-200 pt-16">
          <h2 className="text-2xl font-serif font-bold text-neutral-900 mb-2 text-center md:text-left">
            More Reference Designs
          </h2>
          <p className="text-neutral-500 text-sm mb-8 text-center md:text-left">
            Explore similar handcrafted pieces from the <span className="text-[#CB7831] font-medium">{product.category}</span> collection.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedProducts.map((item) => (
              <Link 
                href={`/products/${item.slug}`} 
                key={item.id || item.slug}
                className="group flex flex-col bg-white rounded-xl overflow-hidden border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                {/* Related Image Frame */}
                <div className="relative h-[240px] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {/* Related Text Specs */}
                <div className="p-4 flex flex-col flex-grow bg-[#FAF8F5]">
                  <h3 className="font-serif font-semibold text-neutral-800 text-lg group-hover:text-[#CB7831] transition-colors duration-200">
                    {item.name}
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-neutral-400 mt-1">
                    View Details →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

    </main>
  );
}