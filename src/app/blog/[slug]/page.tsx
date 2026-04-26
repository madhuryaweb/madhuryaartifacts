import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogs } from "@/data/data";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return { title: "Post Not Found | Madhurya" };
  return {
    title: `${blog.title} | Madhurya Blog`,
    description: blog.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) notFound();

  const renderContent = (raw: string) =>
    raw
      .trim()
      .split("\n")
      .map((line, i) => {
        if (line.startsWith("## "))
          return (
            <h2 key={i} className="font-heading text-3xl text-charcoal mt-10 mb-4">
              {line.replace("## ", "")}
            </h2>
          );
        if (line.trim() === "") return <div key={i} className="h-3" />;
        return (
          <p key={i} className="font-body text-base text-charcoal-light leading-relaxed">
            {line}
          </p>
        );
      });

  return (
    <>
      <div className="relative h-[50vh] min-h-[360px] w-full">
        <Image src={blog.image} alt={blog.title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container-md pb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              {blog.tags.map((t) => (
                <span key={t} className="bg-gold text-white font-body text-[10px] tracking-[0.15em] uppercase px-3 py-1">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="font-heading text-3xl md:text-5xl text-white max-w-2xl leading-snug">{blog.title}</h1>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="container-md max-w-3xl">
          <div className="flex items-center gap-5 mb-10 pb-8 border-b border-cream-dark">
            <Link href="/blog" className="flex items-center gap-2 font-body text-xs tracking-widest uppercase text-charcoal-light hover:text-gold transition-colors">
              <ArrowLeft size={14} /> Back to Blog
            </Link>
            <div className="flex items-center gap-3 text-xs text-charcoal-light font-body ml-auto">
              <Clock size={12} className="text-gold" />
              <span>{blog.readTime}</span>
              <span className="opacity-40">·</span>
              <Calendar size={12} className="text-gold" />
              <span>{blog.date}</span>
            </div>
          </div>
          <div className="space-y-4">
            <p className="font-heading text-xl italic text-gold mb-8">{blog.excerpt}</p>
            {renderContent(blog.content)}
          </div>
          <div className="mt-14 p-8 bg-cream border border-cream-dark text-center">
            <p className="font-heading text-2xl text-charcoal mb-3">Ready to Style Your Home?</p>
            <p className="font-body text-sm text-charcoal-light mb-6">Browse our curated collections and enquire via WhatsApp.</p>
            <Link href="/products" className="btn-gold">Shop Collections</Link>
          </div>
        </div>
      </section>
    </>
  );
}
