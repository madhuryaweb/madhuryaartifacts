"use client";

import Image from "next/image";
import Link from "next/link";
import { featuredProducts, siteConfig } from "@/data/data";

export default function FeaturedProducts() {
  return (
    <section className="bg-white py-10">
      <div className="container-md mb-8">
        <p className="section-subtitle">Handpicked for You</p>
        <h2 className="section-title">
          Featured <span className="italic text-gold">Pieces</span>
        </h2>
      </div>

      {/* Slider */}
      <div className="flex gap-4 overflow-x-auto px-4 scrollbar-hide scrollbar-hide snap-x snap-mandatory">
        {featuredProducts.map((product) => {
          const waMsg = encodeURIComponent(
            `Hi Madhurya! I'm interested in "${product.name}".`
          );

          return (
            <div
              key={product.id}
              className="snap-center shrink-0 w-[260px] sm:w-56 bg-white rounded-2xl overflow-hidden  shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-52 sm:h-64 bg-cream">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-3 text-center">
                <h3 className="text-sm sm:text-base font-medium text-charcoal mb-3">
                  {product.name}
                </h3>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${waMsg}`}
                  target="_blank"
                  className="inline-block text-xs sm:text-sm bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div className="container-md mt-8 text-center">
        <Link href="/products" className="btn-outline">
          View Full Catalogue
        </Link>
      </div>
    </section>
  );
}