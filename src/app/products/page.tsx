import type { Metadata } from "next";
import { Suspense } from "react";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: "Products | Handcrafted Home Décor Catalogue",
  description:
    "Browse Madhurya's full catalogue of handcrafted home décor — wall paintings, clocks, lamps, vases, textiles and more. Enquire via WhatsApp.",
  keywords: ["home decor catalogue", "handmade decor India", "buy wall art India"],
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center font-heading text-2xl text-charcoal-light">Loading...</div>}>
      <ProductsClient />
    </Suspense>
  );
}
