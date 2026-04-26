import { Star } from "lucide-react";
import { testimonials } from "@/data/data";

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-charcoal text-white overflow-hidden">
      <div className="container-md mb-12">
        <p className="section-subtitle text-gold">Client Love</p>
        <h2 className="font-heading text-4xl md:text-5xl text-white">
          What Our Customers
          <span className="italic text-gold-light"> Say</span>
        </h2>
      </div>

      <div className="container-md grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="border border-white/10 p-7 hover:border-gold/40 transition-colors duration-300"
          >
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-gold text-gold"
                />
              ))}
            </div>

            <p className="font-heading text-xl italic text-white/90 leading-relaxed mb-6">
              "{t.review}"
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gold/20 border border-gold/30 flex items-center justify-center">
                <span className="font-heading text-gold text-lg">
                  {t.name.charAt(0)}
                </span>
              </div>
              <div>
                <p className="font-body text-sm font-medium text-white">
                  {t.name}
                </p>
                <p className="font-body text-xs text-white/40 tracking-wide">
                  {t.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
