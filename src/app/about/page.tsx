import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "About Madhurya | Our Story & Craft Philosophy",
  description:
    "Learn about Madhurya — our journey, our artisans, and our commitment to bringing premium handcrafted home décor to Indian homes.",
};

const values = [
  { title: "Artisan-First", desc: "Every piece is made by skilled craftspeople paid fairly for their expertise." },
  { title: "No Mass Production", desc: "Limited runs only — ensuring each piece remains special and unique." },
  { title: "Sustainable Materials", desc: "Natural, responsibly sourced materials that age beautifully." },
  { title: "Honest Quality", desc: "We stand behind every piece. If it isn't exceptional, it doesn't ship." },
];

const timeline = [
  { year: "2019", event: "Madhurya founded in Indore with 6 artisan partners" },
  { year: "2020", event: "First 100 homes furnished — all through word of mouth" },
  { year: "2021", event: "Launched Wall Paintings & Clocks collections" },
  { year: "2022", event: "Expanded to 500+ products across 6 categories" },
  { year: "2023", event: "Interior Styling service launched" },
  { year: "2024", event: "Serving customers across 50+ Indian cities" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-cream">
        <div className="container-md">
          <div className="max-w-2xl">
            <p className="section-subtitle">Who We Are</p>
            <h1 className="section-title mb-6">
              More Than Décor —<br />
              <span className="italic text-gold">A Living Philosophy</span>
            </h1>
            <p className="font-body text-lg text-charcoal-light leading-relaxed">
              Madhurya was built on one conviction: that the objects in your home shape
              the way you feel every single day. We exist to make that feeling extraordinary.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container-md grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80"
              alt="Madhurya artisan workshop"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-36 h-36 bg-gold/10 border border-gold/30" />
          </div>

          <div>
            <p className="section-subtitle">The Beginning</p>
            <h2 className="section-title mb-6">
              Born in Indore,<br />
              <span className="italic text-gold">Built for Every Home</span>
            </h2>
            <div className="space-y-5 font-body text-charcoal-light text-base leading-relaxed">
              <p>
                It began in a small workshop in Indore in 2019, where our founder —
                frustrated by the sameness of mass-produced décor — started working
                directly with local artisans to create something genuinely different.
              </p>
              <p>
                The first pieces were shared with friends. Then those friends told others.
                Within a year, Madhurya had furnished over 100 homes — every single
                customer arriving through word of mouth.
              </p>
              <p>
                Today we work with over 30 artisan families across Madhya Pradesh and
                Rajasthan, preserving craft traditions while creating pieces built for
                contemporary Indian living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream">
        <div className="container-md">
          <div className="text-center mb-14">
            <p className="section-subtitle">Why Madhurya</p>
            <h2 className="section-title">Our <span className="italic text-gold">Commitments</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-7 border border-cream-dark">
                <CheckCircle size={22} className="text-gold mb-4" />
                <h3 className="font-heading text-xl text-charcoal mb-2">{v.title}</h3>
                <p className="font-body text-sm text-charcoal-light leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container-md">
          <div className="max-w-xl mb-14">
            <p className="section-subtitle">Our Journey</p>
            <h2 className="section-title">Five Years of <span className="italic text-gold">Craft</span></h2>
          </div>
          <div className="space-y-0 max-w-2xl">
            {timeline.map((item, idx) => (
              <div key={item.year} className="flex items-start gap-8 pb-10 relative">
                {idx < timeline.length - 1 && (
                  <div className="absolute left-7 top-14 w-px h-full bg-cream-dark" />
                )}
                <div className="shrink-0 w-14 h-14 bg-gold/10 border border-gold/30 flex items-center justify-center">
                  <span className="font-heading text-gold text-sm leading-tight text-center">{item.year}</span>
                </div>
                <div className="pt-4">
                  <p className="font-body text-base text-charcoal-light">{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container-md grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <p className="section-subtitle text-gold">Work With Us</p>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
              Are You an Artisan<br />
              <span className="italic text-gold-light">or Interior Pro?</span>
            </h2>
            <p className="font-body text-white/70 leading-relaxed mb-8">
              We're always looking to collaborate with talented craftspeople, designers,
              and home stylists who share our passion for quality.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/partner" className="btn-gold">
                Partner With Us <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-charcoal">
                Get In Touch
              </Link>
            </div>
          </div>
          <div className="relative h-80 lg:h-[440px]">
            <Image
              src="https://images.unsplash.com/photo-1565183997392-2f6f122e5912?w=800&q=80"
              alt="Madhurya artisan collaboration"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
