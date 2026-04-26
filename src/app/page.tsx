import type { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import AboutPreview from "@/components/sections/AboutPreview";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTABanner from "@/components/sections/CTABanner";
import BlogPreview from "@/components/sections/BlogPreview";

export const metadata: Metadata = {
  title: "Madhurya | Premium Handcrafted Home Décor",
  description:
    "Explore Madhurya's collection of premium handcrafted home décor — wall paintings, clocks, lamps, and bespoke accent pieces that transform living spaces.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProducts />
      <AboutPreview />
      <TestimonialsSection />
      <BlogPreview />
      <CTABanner />
    </>
  );
}
