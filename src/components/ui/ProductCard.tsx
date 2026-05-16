"use client";

import Image from "next/image";
import Link from "next/link";
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
  // 1. Pehle dynamic product URL banaya text preview ke liye
  const productUrl = `https://madhurya.in/products/${product.slug}`;


  const waMessage = encodeURIComponent(
    `Hi Madhurya! I'm interested in "${product.name}"\n` +
    `Image: ${productUrl}\n` +
    `Please share more details & pricing.`
  );

  
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="group relative bg-white border border-cream-dark hover:border-gold/40 transition-all duration-300 flex flex-col justify-between h-full">
      
      {/* 1. IMAGE SECTION (Detail Page Link) */}
      <Link href={`/products/${product.slug}`} className="relative aspect-square overflow-hidden bg-cream block">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.tag && (
          <span
            className={`absolute top-3 left-3 font-body text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 z-10 ${
              tagStyles[product.tag]
            }`}
          >
            {product.tag}
          </span>
        )}
        
        {/* Quick enquiry overlay (WhatsApp Link) */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-300 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 z-20">
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick} // Navigating to detail page stops here
            className="btn-gold text-xs py-2.5 px-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2"
          >
            <MessageCircle size={13} />
            Quick Enquiry
          </a>
        </div>
      </Link>

      {/* 2. INFO SECTION */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <Link href={`/products/${product.slug}`} className="block mb-3">
          {product.material && (
            <p className="font-body text-[10px] tracking-[0.15em] uppercase text-gold mb-1">
              {product.material}
            </p>
          )}
          <h3 className="font-heading text-lg text-charcoal leading-tight group-hover:text-gold transition-colors duration-300 line-clamp-2">
            {product.name}
          </h3>
        </Link>
        
        {/* Bottom Pricing Enquiry (WhatsApp Link) */}
        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=${waMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick} // Navigating to detail page stops here
          className="flex items-center gap-2 font-body text-xs tracking-widest uppercase text-charcoal-light hover:text-gold transition-colors mt-auto pt-2 w-fit"
        >
          <MessageCircle size={12} />
          Enquire for Price
        </a>
      </div>

    </div>
  );
}