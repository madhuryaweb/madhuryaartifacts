"use client";

import Link from "next/link";
import { MessageCircle, Package } from "lucide-react";
import { siteConfig } from "@/data/data";

export default function CTABanner() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-cream">
      <div className="container-md">

        <div className="relative overflow-hidden rounded-3xl 
        bg-gradient-to-br from-charcoal via-neutral-800 to-charcoal
        text-white px-6 py-14 md:px-16 md:py-20 shadow-xl">

          {/* Soft Gold Glow (subtle) */}
          <div className="absolute -top-16 -left-16 w-64 h-64 bg-gold/10 blur-[100px]" />
          <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-gold/5 blur-[100px]" />

          {/* Border */}
          <div className="absolute inset-0 rounded-3xl border border-white/10" />

          {/* Content */}
          <div className="relative z-10 text-center max-w-2xl mx-auto">

            <p className="text-xs tracking-[0.3em] uppercase text-gold-light mb-4">
              Bring Madhurya Home
            </p>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
              Elevate Your Space
              <br />
              <span className="italic text-gold-light">
                With Timeless Decor
              </span>
            </h2>

            <p className="text-white/70 text-sm sm:text-base mb-10">
              Handcrafted pieces designed to add elegance, warmth, and a lasting
              impression to your home.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <a
                href="/contact"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2  border
                border-white/30 text-white
                 text-charcoal font-medium 
                px-5 py-2.5 sm:px-6 sm:py-3 
                rounded-full hover:opacity-90 transition"
              >
                
                Contact Us
              </a>

              <Link
                href="/bulk-order"
                className="inline-flex items-center justify-center gap-2 
                border border-white/30 text-white 
                px-5 py-2.5 sm:px-6 sm:py-3 
                rounded-full hover:bg-white hover:text-charcoal transition"
              >
                <Package size={16} />
                Bulk Orders
              </Link>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}