import type { Metadata } from "next";
import Image from "next/image";
import { Package, Users, Truck, BadgeCheck, MessageCircle, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/data";

export const metadata: Metadata = {
  title: "Bulk Orders | Madhurya",
  description:
    "Order Madhurya décor in bulk for hotels, offices, weddings, and gifting. Custom quantities, special pricing, and dedicated support.",
};

const benefits = [
  { icon: Package, title: "Custom Quantities", desc: "Order from 10 to 10,000 units with flexible MOQ." },
  { icon: BadgeCheck, title: "Special Pricing", desc: "Volume-based discounts that scale with your order." },
  { icon: Truck, title: "Pan-India Delivery", desc: "Reliable bulk shipping to any location in India." },
  { icon: Users, title: "Dedicated Manager", desc: "A single point of contact for your entire order." },
];

const useCases = [
  "Hotels & Resorts",
  "Corporate Gifting",
  "Wedding Décor",
  "Interior Design Projects",
  "Real Estate Staging",
  "Retail Resellers",
];

export default function BulkOrderPage() {
  const waMsg = encodeURIComponent(
    "Hi Madhurya! I'm interested in placing a bulk order. Please share details."
  );

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-0 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt="Bulk order background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="container-md relative z-10 pb-20">
          <p className="section-subtitle text-gold">For Businesses</p>
          <h1 className="font-heading text-5xl md:text-6xl text-white mb-6">
            Bulk Orders &<br />
            <span className="italic text-gold-light">Volume Pricing</span>
          </h1>
          <p className="font-body text-white/70 text-lg max-w-xl leading-relaxed">
            Whether you're furnishing a boutique hotel, planning corporate gifting,
            or sourcing for resale — Madhurya offers flexible bulk solutions tailored to your needs.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container-md">
          <div className="text-center mb-14">
            <p className="section-subtitle">Why Bulk With Us</p>
            <h2 className="section-title">Built for <span className="italic text-gold">Scale</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-8 border border-cream-dark hover:border-gold/40 transition-colors text-center">
                <div className="w-14 h-14 bg-gold/10 flex items-center justify-center mx-auto mb-5">
                  <Icon size={24} className="text-gold" />
                </div>
                <h3 className="font-heading text-xl text-charcoal mb-2">{title}</h3>
                <p className="font-body text-sm text-charcoal-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 bg-cream">
        <div className="container-md grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-subtitle">Who We Serve</p>
            <h2 className="section-title mb-8">
              Perfect for<br />
              <span className="italic text-gold">Every Context</span>
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {useCases.map((uc) => (
                <div key={uc} className="flex items-center gap-3 bg-white p-4 border border-cream-dark">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                  <span className="font-body text-sm text-charcoal">{uc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-96">
            <Image
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80"
              alt="Bulk order context"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="container-md max-w-2xl text-center">
          <p className="section-subtitle">Get Started</p>
          <h2 className="section-title mb-5">
            Tell Us About Your<br />
            <span className="italic text-gold">Requirements</span>
          </h2>
          <p className="font-body text-charcoal-light mb-10 leading-relaxed">
            Share your project details — product type, quantity, and timeline —
            and our team will get back to you with a custom quote within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <ExternalLink size={16} />
              Fill Enquiry Form
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
