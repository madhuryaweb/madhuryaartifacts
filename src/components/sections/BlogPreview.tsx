import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { blogs } from "@/data/data";

export default function BlogPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container-md">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="section-subtitle">From Our Journal</p>
            <h2 className="section-title">
              Décor
              <span className="italic text-gold"> Insights</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="hidden md:flex items-center gap-2 font-body text-xs tracking-widest uppercase text-charcoal-light hover:text-gold transition-colors"
          >
            All Articles <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link key={blog.id} href={`/blog/${blog.slug}`} className="group">
              <div className="relative h-56 overflow-hidden bg-cream mb-5">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Tag */}
                <span className="absolute top-3 left-3 bg-white font-body text-[10px] tracking-[0.15em] uppercase px-2.5 py-1 text-gold">
                  {blog.tags[0]}
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <Clock size={11} className="text-gold" />
                <span className="font-body text-xs text-charcoal-light tracking-wide">
                  {blog.readTime}
                </span>
                <span className="text-charcoal-light/40">·</span>
                <span className="font-body text-xs text-charcoal-light">
                  {blog.date}
                </span>
              </div>

              <h3 className="font-heading text-xl text-charcoal leading-snug group-hover:text-gold transition-colors mb-2">
                {blog.title}
              </h3>
              {/* <p className="font-body text-sm text-charcoal-light leading-relaxed line-clamp-2">
                {blog.excerpt}
              </p> */}
            </Link>
          ))}
        </div>

        <div className="mt-10 md:hidden">
          <Link href="/blog" className="btn-outline">
            All Articles <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
