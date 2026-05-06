import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/data";
import { ArrowRight } from "lucide-react";

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-cream overflow-hidden">
      <div className="container-md  md:mb-10">
        <div className="flex items-end justify-between px-4">
          <div>
            <p className="section-subtitle">Collections</p>
            {/* <h2 className="section-title">
              Shop by
              <span className="italic text-gold"> Category</span>
            </h2> */}
          </div>
          <Link
            href="/products"
            className="hidden md:flex items-center gap-2 font-body text-xs tracking-widest uppercase text-charcoal-light hover:text-gold transition-colors"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="pl-4 sm:pl-8 lg:pl-[calc((100vw-72rem)/2+2rem)]">
        <div className="flex gap-8 overflow-x-auto pb-4 custom-scrollbar  snap-x snap-mandatory">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/products?category=${cat.id}`}
              className="group shrink-0 snap-start flex flex-col items-center text-center"
            >
              {/* Small Circular Image Container */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-2 border-transparent group-hover:border-gold transition-all duration-300 bg-cream-dark">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  sizes="(max-width: 640px) 96px, 128px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Category Name */}
              <h3 className="mt-4 font-heading text-sm sm:text-base text-charcoal group-hover:text-gold transition-colors uppercase tracking-wider">
                {cat.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile View All Link */}
      <div className="container-md mt-8 md:hidden px-4 border-b border-gray-300 pb-4">
  <Link
    href="/products"
    className="flex items-center gap-2 font-body text-xs tracking-widest uppercase text-charcoal-light hover:text-gold transition-colors"
  >
    View All Collections <ArrowRight size={14} />
  </Link>
</div>
    </section>
  );
}