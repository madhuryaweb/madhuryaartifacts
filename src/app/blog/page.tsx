import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import { blogs } from "@/data/data";

export const metadata: Metadata = {
  title: "Décor Journal | Madhurya Blog",
  description:
    "Home décor tips, styling guides, and artisan stories from the Madhurya team. Learn how to transform your living spaces.",
};

export default function BlogPage() {
  const [hero, ...rest] = blogs;

  return (
    <>
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-md">
          <p className="section-subtitle">Our Journal</p>
          <h1 className="section-title">
            Décor <span className="italic text-gold">Insights</span>
          </h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-md">
          {/* Hero post */}
          <Link href={`/blog/${hero.slug}`} className="group block mb-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-72 lg:h-[420px] overflow-hidden bg-cream">
                <Image
                  src={hero.image}
                  alt={hero.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="bg-cream p-10 lg:p-14 flex flex-col justify-center">
                <div className="flex flex-wrap gap-2 mb-5">
                  {hero.tags.map((t) => (
                    <span key={t} className="font-body text-[10px] tracking-[0.15em] uppercase bg-gold/10 text-gold px-3 py-1">
                      {t}
                    </span>
                  ))}
                </div>
                <h2 className="font-heading text-3xl md:text-4xl text-charcoal group-hover:text-gold transition-colors mb-4 leading-snug">
                  {hero.title}
                </h2>
                <p className="font-body text-sm text-charcoal-light leading-relaxed mb-6">
                  {hero.excerpt}
                </p>
                <div className="flex items-center gap-3 text-xs text-charcoal-light font-body mb-6">
                  <Clock size={12} className="text-gold" />
                  <span>{hero.readTime}</span>
                  <span className="opacity-40">·</span>
                  <span>{hero.date}</span>
                </div>
                <span className="flex items-center gap-2 font-body text-xs tracking-widest uppercase text-charcoal group-hover:text-gold transition-colors">
                  Read Article <ArrowRight size={14} />
                </span>
              </div>
            </div>
          </Link>

          {/* Rest posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rest.map((blog) => (
              <Link key={blog.id} href={`/blog/${blog.slug}`} className="group">
                <div className="relative h-56 overflow-hidden bg-cream mb-5">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {blog.tags.slice(0, 1).map((t) => (
                      <span key={t} className="bg-white font-body text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 text-gold">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-3 text-xs text-charcoal-light font-body">
                  <Clock size={11} className="text-gold" />
                  <span>{blog.readTime}</span>
                  <span className="opacity-40">·</span>
                  <span>{blog.date}</span>
                </div>
                <h3 className="font-heading text-2xl text-charcoal group-hover:text-gold transition-colors mb-2 leading-snug">
                  {blog.title}
                </h3>
                <p className="font-body text-sm text-charcoal-light line-clamp-2 leading-relaxed">
                  {blog.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
