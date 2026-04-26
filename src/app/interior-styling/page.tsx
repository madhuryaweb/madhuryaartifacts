import type { Metadata } from "next";
import Image from "next/image";
import { MessageCircle, Eye, Layout, Sparkles, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/data";

export const metadata: Metadata = {
  title: "Online Interior Styling | Madhurya",
  description:
    "Get expert online interior styling from Madhurya. Share your space photos and receive a personalised décor plan — curated just for you.",
};

const steps = [
  { num: "01", title: "Share Your Space", desc: "Send us photos of your room and tell us your style preferences and budget." },
  { num: "02", title: "Expert Curation", desc: "Our styling team creates a personalised décor plan using our collections." },
  { num: "03", title: "Review & Refine", desc: "We share a mood board and product selection for your feedback." },
  { num: "04", title: "Bring It Home", desc: "Enquire for your curated pieces via WhatsApp and transform your space." },
];

const services = [
  { icon: Eye, title: "Room Mood Board", desc: "A visual styling guide for your specific room with curated product selections." },
  { icon: Layout, title: "Full Room Plan", desc: "Complete décor layout including furniture arrangement suggestions and accent pieces." },
  { icon: Sparkles, title: "Style Refresh", desc: "Quick, targeted styling advice to refresh a room without a full overhaul." },
];

export default function InteriorStylingPage() {
  const waMsg = encodeURIComponent(
    "Hi Madhurya! I'm interested in your Online Interior Styling service. Can you share details?"
  );

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-0 overflow-hidden">
        <div className="absolute inset-0 h-[600px]">
          <Image
            src="https://images.unsplash.com/photo-1616137466211-f939a420be84?w=1800&q=85"
            alt="Interior styling service"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/70 to-charcoal/30" />
        </div>
        <div className="container-md relative z-10 pb-24">
          <div className="max-w-xl text-white">
            <p className="section-subtitle text-gold">New Service</p>
            <h1 className="font-heading text-5xl md:text-6xl text-white mb-6">
              Expert Styling,<br />
              <span className="italic text-gold-light">From Your Sofa</span>
            </h1>
            <p className="font-body text-white/75 text-lg leading-relaxed mb-10">
              You share the space. We design the vision. Our styling team creates
              a bespoke décor plan — personalised to your taste, home, and budget.
            </p>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <MessageCircle size={16} />
              Book a Styling Session
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container-md">
          <div className="text-center mb-14">
            <p className="section-subtitle">What We Offer</p>
            <h2 className="section-title">Styling <span className="italic text-gold">Services</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-8 bg-cream border border-cream-dark hover:border-gold/40 transition-colors">
                <div className="w-12 h-12 bg-white border border-cream-dark flex items-center justify-center mb-5">
                  <Icon size={20} className="text-gold" />
                </div>
                <h3 className="font-heading text-xl text-charcoal mb-3">{title}</h3>
                <p className="font-body text-sm text-charcoal-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-cream">
        <div className="container-md">
          <div className="text-center mb-14">
            <p className="section-subtitle">The Process</p>
            <h2 className="section-title">How It <span className="italic text-gold">Works</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <div className="font-heading text-6xl text-gold/20 mb-4">{step.num}</div>
                <h3 className="font-heading text-xl text-charcoal mb-2">{step.title}</h3>
                <p className="font-body text-sm text-charcoal-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-white">
        <div className="container-md grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div className="relative h-96">
            <Image
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
              alt="Interior styling result"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="section-subtitle">What You Get</p>
            <h2 className="section-title mb-8">
              A Complete<br />
              <span className="italic text-gold">Décor Roadmap</span>
            </h2>
            <ul className="space-y-4">
              {[
                "Personalised mood board for your room",
                "Curated product shortlist from our collections",
                "Colour palette and material recommendations",
                "Arrangement suggestions and spatial tips",
                "Direct WhatsApp access to your stylist",
                "One revision round included",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-gold mt-0.5 shrink-0" />
                  <span className="font-body text-sm text-charcoal-light">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <a
                href={`https://wa.me/${siteConfig.whatsapp}?text=${waMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <MessageCircle size={16} />
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
