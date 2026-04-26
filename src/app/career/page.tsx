import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink, Heart, Zap, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Careers at Madhurya | Join Our Team",
  description:
    "Join the Madhurya team — a passionate group of designers, marketers, and décor enthusiasts building India's best handcrafted home décor brand.",
};

const culture = [
  { icon: Heart, title: "Purpose-Driven", desc: "Every role contributes to bringing better design into Indian homes." },
  { icon: Zap, title: "Fast-Moving", desc: "Small team, big decisions. Your work creates visible impact from day one." },
  { icon: Globe, title: "Creative Freedom", desc: "We value fresh ideas and encourage everyone to challenge the status quo." },
];

export default function CareerPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream">
        <div className="container-md grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-subtitle">Join the Team</p>
            <h1 className="section-title mb-6">
              Build the Future of<br />
              <span className="italic text-gold">Indian Décor</span>
            </h1>
            <p className="font-body text-charcoal-light text-lg leading-relaxed mb-8">
              We're a small, passionate team obsessed with craft, quality, and the
              idea that every home deserves to be beautiful. If that resonates with
              you — we'd love to meet you.
            </p>
            <a
              href="https://linkedin.com/company/madhurya"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Openings on LinkedIn
              <ExternalLink size={16} />
            </a>
          </div>
          <div className="relative h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Madhurya team workspace"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 bg-white">
        <div className="container-md">
          <div className="text-center mb-14">
            <p className="section-subtitle">Life at Madhurya</p>
            <h2 className="section-title">Our <span className="italic text-gold">Culture</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {culture.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-center p-8 border border-cream-dark">
                <div className="w-14 h-14 bg-gold/10 flex items-center justify-center mx-auto mb-5">
                  <Icon size={24} className="text-gold" />
                </div>
                <h3 className="font-heading text-xl text-charcoal mb-3">{title}</h3>
                <p className="font-body text-sm text-charcoal-light leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn CTA */}
      <section className="py-20 bg-charcoal text-white text-center">
        <div className="container-md max-w-xl">
          <p className="section-subtitle text-gold">Current Openings</p>
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-5">
            See What We're<br />
            <span className="italic text-gold-light">Looking For</span>
          </h2>
          <p className="font-body text-white/70 mb-10 leading-relaxed">
            All open positions are listed on our LinkedIn page. Follow us to stay
            updated when new roles become available.
          </p>
          <a
            href="https://linkedin.com/company/madhurya"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <ExternalLink size={16} />
            Visit LinkedIn Page
          </a>
        </div>
      </section>
    </>
  );
}
