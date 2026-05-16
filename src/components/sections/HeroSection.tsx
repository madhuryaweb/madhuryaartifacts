"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react"; // useRef add kiya

const slides = [
  { heading: "Designed To", sub: "Elevate Your Space" },
  { heading: "Crafted By Hand.", sub: "Loved for Generations." },
  { heading: "Your Home.", sub: "Our Finest Work." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null); 

  useEffect(() => {
    
    const videoTimer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(err => console.log("Video play blocked:", err));
      }
    }, 4400); 

    return () => clearTimeout(videoTimer);
  }, []);

  // SLIDE CHANGE LOGIC
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      
      {/* ── MOBILE & TABLET: Video background ── */}
      <div className="absolute inset-0 block lg:hidden">
        <video
          ref={videoRef}      // Ref assign kiya
          muted
          loop
          playsInline
          preload="auto"
          // autoPlay hatana zaroori hai warna timer kaam nahi karega
          className="w-full h-full object-cover"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      {/* ── DESKTOP: Static image background ── */}
      <div className="absolute inset-0 hidden lg:block">
        <Image
          src="/images/hero.webp"
          alt="Madhurya luxury home decor"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 max-w-6xl mx-auto w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl"
        >
          <motion.p variants={itemVariants} className="text-gold-light tracking-[0.3em] text-[10px] sm:text-xs uppercase mb-5">
            Luxury Home Decor
          </motion.p>

          <motion.div variants={itemVariants} className="mb-6 min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[180px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <h1 className="text-white font-heading font-bold leading-[1.05] text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  {slides[current].heading}
                </h1>
                <h1 className="text-gold-light italic font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                  {slides[current].sub}
                </h1>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.p variants={itemVariants} className="text-white/75 text-xs sm:text-sm max-w-sm sm:max-w-md mb-8 leading-relaxed">
            Discover timeless décor pieces crafted with precision, elegance, and
            a story that transforms your home into art.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-gold text-white font-body font-medium text-xs sm:text-sm px-6 py-3 tracking-widest uppercase hover:bg-gold-dark transition-colors duration-200"
            >
              Explore Now <ArrowRight size={15} />
            </Link>
            <a
              href="https://wa.me/9425057991"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/50 text-white font-body text-xs sm:text-sm px-6 py-3 tracking-widest uppercase hover:border-white hover:bg-white/10 transition-all duration-200"
            >
              <MessageCircle size={14} /> WhatsApp
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-2 mt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-px transition-all duration-300 ${
                  i === current ? "w-8 bg-gold" : "w-4 bg-white/40 hover:bg-white/60"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-white/40" />
        <span className="font-body text-[9px] tracking-[0.3em] uppercase text-white/40">Scroll</span>
      </motion.div>
    </section>
  );
}