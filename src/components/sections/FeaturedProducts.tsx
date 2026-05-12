"use client";

import { useEffect, useState } from "react"; // 1. useState aur useEffect add kiya
import Image from "next/image";
import Link from "next/link";
import { featuredProducts, siteConfig } from "@/data/data";

export default function FeaturedProducts() {
  const [baseUrl, setBaseUrl] = useState("");

  // 2. Browser mount hone ke baad base URL set karein
  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseUrl(window.location.origin);
    }
  }, []);

  return (
    <section className="bg-white py-12">
      <div className="container-md mb-10">
        <p className="section-subtitle">Handpicked for You</p>
        <h2 className="section-title">
          Featured <span className="italic text-gold">Pieces</span>
        </h2>
      </div>

      <div className="flex gap-6 overflow-x-auto px-6 pb-8 scroll-smooth snap-x snap-mandatory scrollbar-hide">
        {featuredProducts.map((product, index) => {
          
          // 3. Dynamic Message Logic
          // Agar baseUrl nahi mila (SSR state), toh hum placeholder bhejenge 
          // varna actual live link.
          const currentBaseUrl = baseUrl || "https://madhuryastore.com"; // Default fallback
          const waMsg = encodeURIComponent(
            `Hi Madhurya! I'm interested in this piece: \n*Product:* ${product.name} \n*Image Reference:* ${currentBaseUrl}${product.image}`
          );

          return (
            <div
              key={product.id}
              className="snap-center shrink-0 w-[85vw] md:w-[550px] lg:w-[650px] group"
            >
              <div className="relative aspect-[15/8] w-full overflow-hidden rounded-xl border border-gray-200 shadow-xl bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority={index === 0} 
                  sizes="(max-width: 550px) 55vw, 550px"
                  loading={index === 0 ? "eager" : "lazy"}
                  className="object-cover object-[center_40%] transition-transform duration-700 pointer-events-none group-hover:scale-105"
                  placeholder="blur"
                  blurDataURL="data:image/webp;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8AMp6Xf7VwAAAABJRU5ErkJggg==" 
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5 md:p-10">
                  <div className="flex w-full items-center justify-between gap-4">
                    <div className="text-white">
                      <h3 className="text-xs md:text-xl text-gray-300 font-serif tracking-wide drop-shadow-md">
                        {product.name}
                      </h3>
                    </div>

                    <a
                      href={`https://wa.me/${siteConfig.whatsapp}?text=${waMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 backdrop-blur-lg border border-white/30 text-white md:p-3 p-2 md:px-8 md:py-4 rounded-full hover:bg-black hover:text-white hover:border-gold transition-all duration-500 flex items-center gap-3 group/btn shadow-2xl"
                    >
                      <span className="hidden md:inline text-xs font-bold tracking-wider">ENQUIRE NOW</span>
                      <svg viewBox="0 0 24 24" className="w-4 h-4 md:w-5 md:h-5 fill-current">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.821 4.754c-1.882 0-3.724-.503-5.334-1.458l-.382-.227-3.966 1.04 1.059-3.868-.248-.395c-1.047-1.666-1.6-3.601-1.6-5.597 0-5.783 4.704-10.487 10.487-10.487 2.801 0 5.435 1.091 7.412 3.069 1.977 1.978 3.067 4.61 3.066 7.412-.001 5.784-4.706 10.487-10.489 10.487m8.446-17.944c-2.256-2.254-5.253-3.496-8.441-3.498-6.575 0-11.926 5.353-11.929 11.928 0 2.101.549 4.152 1.593 5.992l-1.694 6.186 6.33-1.66c1.766.962 3.753 1.469 5.772 1.47h.005c6.575 0 11.926-5.352 11.929-11.927.001-3.186-1.241-6.185-3.466-8.411" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}