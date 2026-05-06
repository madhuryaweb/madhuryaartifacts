"use client";

import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/data";
import { useRef } from "react";

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -350 : 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="md:py-24   bg-white relative">
      <hr/>

      {/* Heading */}
      <div className="container-md mb-12">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900">
  <span className="block sm:hidden">
    Customer <span className="italic text-yellow-600">Stories</span>
  </span>
  <span className="hidden sm:block">
    What Our Customers <span className="italic text-yellow-600">Say</span>
  </span>
</h2>
      </div>

      {/* Arrows */}
      {/* <div className="absolute right-6 top-24 flex gap-3">
        <button
          onClick={() => scroll("left")}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
        >
          <ChevronRight size={18} />
        </button>
      </div> */}

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-6 px-20 md:px-12 overflow-x-auto overflow-hidden scrollbar-hide scroll-smooth snap-x snap-mandatory"
      >
        {testimonials.map((t, index) => (
          <div
            key={t.id}
            className={`snap-start min-w-[300px] sm:min-w-[340px] md:min-w-[360px]
            rounded-2xl p-10  border transition duration-300
            ${
           
                 "bg-white border-gray-400 shadow-sm hover:shadow-lg hover:-translate-y-1"
            }`}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
              ))}
            </div>

            {/* Review */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              "{t.review}"
            </p>

            {/* User */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-100 border border-yellow-300 flex items-center justify-center">
                <span className="text-yellow-700 text-sm font-semibold">
                  {t.name.charAt(0)}
                </span>
              </div>

              <div>
                <p className="text-gray-900 text-sm font-medium">
                  {t.name}
                </p>
                <p className="text-gray-400 text-xs">
                  {t.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom fade effect (premium touch) */}
      <div className="pointer-events-none absolute top-0 right-0 h-full w-20 bg-gradient-to-l from-white to-transparent" />
    </section>
  );
}