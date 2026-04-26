import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { Product, siteConfig } from "@/data/data";

interface ProductCardProps {
  product: Product;
}

const tagStyles: Record<string, string> = {
  New: "bg-gold text-white",
  Bestseller: "bg-charcoal text-white",
  Limited: "bg-[#8B1C1C] text-white",
};

export default function ProductCard({ product }: ProductCardProps) {
  const waMessage = encodeURIComponent(
    `Hi Madhurya! I'm interested in "${product.name}". Please share details & pricing.`
  );

  return (
    <div className="group relative bg-white border border-cream-dark hover:border-gold/40 transition-all duration-300">
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-cream">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.tag && (
          <span
            className={`absolute top-3 left-3 font-body text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 ${
              tagStyles[product.tag]
            }`}
          >
            {product.tag}
          </span>
        )}
        {/* Quick enquiry overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-xs py-2.5 px-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
          >
            <MessageCircle size={13} />
            Quick Enquiry
          </a>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        {product.material && (
          <p className="font-body text-[10px] tracking-[0.15em] uppercase text-gold mb-1">
            {product.material}
          </p>
        )}
        <h3 className="font-heading text-lg text-charcoal leading-tight mb-3">
          {product.name}
        </h3>
        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-body text-xs tracking-widest uppercase text-charcoal-light hover:text-gold transition-colors"
        >
          <MessageCircle size={12} />
          Enquire for Price
        </a>
      </div>
    </div>
  );
}
