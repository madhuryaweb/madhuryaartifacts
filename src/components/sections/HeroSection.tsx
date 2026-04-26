"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/data";

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=85"
          alt="Madhurya premium home decor interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container-md relative z-10">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-rule" />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-gold-light">
              Handcrafted in India
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl text-white leading-[1.05] mb-6">
            Art That Speaks.
            <br />
            <span className="italic text-gold-light">Spaces That</span>
            <br />
            Remember.
          </h1>

          <p className="font-body text-base text-white/70 leading-relaxed mb-10 max-w-md">
            Discover our curated collection of premium handcrafted décor — where
            every piece tells a story of skill, soul, and timeless elegance.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/products" className="btn-gold">
              Explore Collection
              <ArrowRight size={16} />
            </Link>
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline border-white text-white hover:bg-white hover:text-charcoal"
            >
              <MessageCircle size={16} />
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/40" />
        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-white/40">
          Scroll
        </span>
      </div>
    </section>
  );
}
