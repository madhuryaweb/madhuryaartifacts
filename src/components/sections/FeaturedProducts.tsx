import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { products, siteConfig } from "@/data/data";

// Duplicate for infinite scroll
const featured = products.slice(0, 10);
const scrollItems = [...featured, ...featured];

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container-md mb-12">
        <p className="section-subtitle">Handpicked for You</p>
        <h2 className="section-title">
          Featured
          <span className="italic text-gold"> Pieces</span>
        </h2>
      </div>

      {/* Auto-scroll track */}
      <div className="relative overflow-hidden">
        <div className="flex scroll-track gap-6 w-max px-6">
          {scrollItems.map((product, idx) => {
            const waMsg = encodeURIComponent(
              `Hi Madhurya! I'm interested in "${product.name}". Please share details.`
            );
            return (
              <div
                key={`${product.id}-${idx}`}
                className="group shrink-0 w-64 bg-white border border-cream-dark hover:border-gold/40 transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden bg-cream">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="256px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-gold text-white font-body text-[9px] tracking-[0.15em] uppercase px-2 py-1">
                      {product.tag}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-lg text-charcoal mb-3 leading-tight">
                    {product.name}
                  </h3>
                  <a
                    href={`https://wa.me/${siteConfig.whatsapp}?text=${waMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-body text-xs tracking-widest uppercase text-charcoal-light hover:text-gold transition-colors"
                  >
                    <MessageCircle size={12} />
                    Enquire
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="container-md mt-10 text-center">
        <Link href="/products" className="btn-outline">
          View Full Catalogue
        </Link>
      </div>
    </section>
  );
}
