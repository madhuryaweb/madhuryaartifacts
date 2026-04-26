import type { Metadata } from "next";
import Image from "next/image";
import { Palette, TrendingUp, Heart, Star, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/data";

export const metadata: Metadata = {
  title: "Partner With Madhurya | Artisans & Designers",
  description:
    "Are you an artisan, craftsperson, or interior designer? Partner with Madhurya to reach thousands of home décor enthusiasts across India.",
};

const partnerTypes = [
  {
    icon: Palette,
    title: "Artisans & Craftspeople",
    desc: "Have a craft skill? We'll help you reach customers who truly value handmade work and pay fairly for it.",
  },
  {
    icon: TrendingUp,
    title: "Interior Designers",
    desc: "Collaborate with us to source exclusive pieces for your projects, with trade pricing and priority access.",
  },
  {
    icon: Heart,
    title: "Content Creators",
    desc: "Love home décor? Partner with us for gifting collaborations, affiliate programs, and brand storytelling.",
  },
  {
    icon: Star,
    title: "Boutique Retailers",
    desc: "Stock Madhurya in your store. We offer wholesale terms, display support, and co-branded marketing.",
  },
];

const perks = [
  "Prompt payment — always within agreed timelines",
  "Creative freedom — we respect your artistic vision",
  "Long-term relationships — not one-off transactions",
  "National reach — your work, seen across India",
  "Co-marketing — we promote you, not just the product",
  "Dedicated account manager for all partners",
];

export default function PartnerPage() {
  const waMsg = encodeURIComponent(
    "Hi Madhurya! I'm interested in partnering with you. Let me share more about what I do."
  );

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream">
        <div className="container-md grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-subtitle">Collaborate</p>
            <h1 className="section-title mb-6">
              Grow With<br />
              <span className="italic text-gold">Madhurya</span>
            </h1>
            <p className="font-body text-charcoal-light text-lg leading-relaxed mb-8">
              We believe the best things happen when talented people work together.
              Whether you make, design, sell, or create content — there's a place
              for you in the Madhurya family.
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <MessageCircle size={16} />
              Start the Conversation
            </a>
          </div>
          <div className="relative h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Madhurya partner collaboration"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Partner types */}
      <section className="py-20 bg-white">
        <div className="container-md">
          <div className="text-center mb-14">
            <p className="section-subtitle">Who Can Partner</p>
            <h2 className="section-title">
              Find Your<span className="italic text-gold"> Place</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {partnerTypes.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-6 p-8 border border-cream-dark hover:border-gold/40 transition-colors">
                <div className="w-12 h-12 bg-gold/10 flex items-center justify-center shrink-0">
                  <Icon size={22} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-charcoal mb-2">{title}</h3>
                  <p className="font-body text-sm text-charcoal-light leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container-md grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-subtitle text-gold">Why Partner With Us</p>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-10">
              We Invest in<br />
              <span className="italic text-gold-light">Our Partners</span>
            </h2>
            <ul className="space-y-4">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0 mt-2" />
                  <span className="font-body text-sm text-white/80 leading-relaxed">{perk}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-96">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Madhurya team"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cream text-center">
        <div className="container-md max-w-xl">
          <p className="section-subtitle">Ready?</p>
          <h2 className="section-title mb-5">
            Let's Build Something<br />
            <span className="italic text-gold">Beautiful Together</span>
          </h2>
          <p className="font-body text-charcoal-light mb-8 leading-relaxed">
            Drop us a message on WhatsApp with a quick introduction about yourself
            and what kind of partnership you're looking for.
          </p>
          <a
            href={`https://wa.me/${siteConfig.whatsapp}?text=${waMsg}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <MessageCircle size={16} />
            Message Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
