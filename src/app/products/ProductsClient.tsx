"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ChevronRight, SlidersHorizontal } from "lucide-react";
import { products, categories } from "@/data/data";
import ProductCard from "@/components/ui/ProductCard";

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCat);

  useEffect(() => {
    const cat = searchParams.get("category") || "all";
    setActiveCategory(cat);
  }, [searchParams]);

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const activeCatName =
    activeCategory === "all"
      ? "All Products"
      : categories.find((c) => c.id === activeCategory)?.name ?? "Products";

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-14 bg-cream">
        <div className="container-md">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 font-body text-xs text-charcoal-light mb-6">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/products" className="hover:text-gold transition-colors">Products</Link>
            {activeCategory !== "all" && (
              <>
                <ChevronRight size={12} />
                <span className="text-gold">{activeCatName}</span>
              </>
            )}
          </nav>

          <p className="section-subtitle">Our Catalogue</p>
          <h1 className="section-title">
            {activeCatName === "All Products" ? (
              <>All <span className="italic text-gold">Collections</span></>
            ) : (
              <><span className="italic text-gold">{activeCatName}</span></>
            )}
          </h1>
          <p className="font-body text-charcoal-light mt-2">
            {filtered.length} piece{filtered.length !== 1 ? "s" : ""} available
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 md:top-20 z-30 bg-white border-b border-cream-dark shadow-sm">
        <div className="container-md py-4">
          <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
            <SlidersHorizontal size={14} className="text-gold shrink-0" />
            <button
              onClick={() => setActiveCategory("all")}
              className={`shrink-0 font-body text-xs tracking-widest uppercase px-4 py-2 border transition-all ${
                activeCategory === "all"
                  ? "bg-charcoal text-white border-charcoal"
                  : "border-cream-dark text-charcoal-light hover:border-gold hover:text-gold"
              }`}
            >
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`shrink-0 font-body text-xs tracking-widest uppercase px-4 py-2 border transition-all ${
                  activeCategory === cat.id
                    ? "bg-charcoal text-white border-charcoal"
                    : "border-cream-dark text-charcoal-light hover:border-gold hover:text-gold"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-white">
        <div className="container-md">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-heading text-3xl text-charcoal-light">No products found</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
