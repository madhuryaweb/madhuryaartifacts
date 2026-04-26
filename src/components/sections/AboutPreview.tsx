import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "500+", label: "Happy Homes" },
  { value: "6+", label: "Collections" },
  { value: "100%", label: "Handcrafted" },
  { value: "5★", label: "Avg Rating" },
];

export default function AboutPreview() {
  return (
    <section className="py-20 bg-cream">
      <div className="container-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative h-[500px] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
                alt="Madhurya artisan crafting home decor"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Stats card overlay */}
            <div className="absolute -bottom-6 -right-4 sm:right-8 bg-white p-6 shadow-xl grid grid-cols-2 gap-5 w-64">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="font-heading text-3xl text-gold">{s.value}</p>
                  <p className="font-body text-xs tracking-wide text-charcoal-light uppercase mt-0.5">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Text side */}
          <div className="pt-10 lg:pt-0">
            <p className="section-subtitle">Our Story</p>
            <h2 className="section-title mb-6">
              Crafted with Intention,
              <br />
              <span className="italic text-gold">Made for Life</span>
            </h2>

            <div className="space-y-5 mb-8">
              <p className="font-body text-base text-charcoal-light leading-relaxed">
                Madhurya was born from a simple belief: your home deserves more
                than mass-produced furniture. Every corner of your space is an
                opportunity for self-expression.
              </p>
              <p className="font-body text-base text-charcoal-light leading-relaxed">
                We work directly with artisans across India to bring you pieces
                that carry the warmth of human hands — imperfect, intentional,
                and utterly unique.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-2 border-gold pl-5 mb-10">
              <p className="font-heading text-2xl text-charcoal italic leading-snug">
                "We don't just sell décor. We help you build a home with a soul."
              </p>
            </blockquote>

            <Link href="/about" className="btn-primary">
              Our Full Story
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
