"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin, Sparkles, PencilRuler, ShieldCheck } from "lucide-react";

const values = [
  { 
    icon: Sparkles,
    title: "Curated Selection", 
    desc: "A handpicked range of artifacts and décor pieces that make every space stand out." 
  },
  { 
    icon: PencilRuler,
    title: "Tailored Design", 
    desc: "Customised statement designs for those who seek something unique, not just mass-produced." 
  },
  { 
    icon: MapPin,
    title: "10,000 Sq. Ft. Inspiration", 
    desc: "Our massive showroom in Indore is a design-led destination for pure interior inspiration." 
  },
  { 
    icon: ShieldCheck,
    title: "Trusted Expertise", 
    desc: "15+ years of experience and 1000+ completed projects across Madhya Pradesh." 
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero - Using the new Dark Brown tone from the logo */}
      <section className=" pt-20 md:pt-32 md:pb-24 bg-m-brown ">
        <div className="container-md">
          <div className="max-w-3xl">
            <p className="section-subtitle text-m-orange uppercase tracking-widest">Our Legacy</p>
            <h1 className="section-title mb-8 text-">
              Every space should stand out,<br />
              <span className="italic font-script text-m-brown/80  text-6xl md:text-8xl">Not just fit.</span>
            </h1>
            <p className="font-body text-lg text-m-brown/20  leading-relaxed max-w-2xl">
              Over the past 15 years, Madhurya has evolved from a modest retail space into a 10,000 sq. ft. 
              design-led destination for curated and customised home décor in Indore.
            </p>
          </div>
        </div>
      </section>

      {/* Story - Clean Ivory Background with Dark Brown Text */}
      <section className=" py-10 md:py-24 bg-m-cream">
        <div className="container-md grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[300px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <Image
              src="/images/img-5.webp"
              alt="Madhurya Indore Showroom"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="space-y-8">
            <div>
              <p className="section-subtitle text-m-orange">The Journey</p>
              <h2 className="text-4xl md:text-5xl font-serif text-m-brown leading-tight">
                15 Years of <br />
                <span className="italic">Interior Inspiration</span>
              </h2>
            </div>
            
            <div className="space-y-6 font-body text-m-brown/80 text-lg leading-relaxed">
              <p>
                Our journey is rooted in a simple idea: your home is a reflection of your soul. 
                What started as a modest dream has now grown into Indore&apos;s trusted destination 
                for premium artifacts and end-to-end styling solutions.
              </p>
              <p>
                With more than <strong>1000 projects completed</strong> across Madhya Pradesh, 
                we have built a reputation for detail and quality. We collaborate strongly with 
                architects and designers to bring unforgettable experiences to life.
              </p>
              <p>
                From residential statement designs to commercial styling, our 10,000 sq. ft. space 
                is dedicated to helping you find pieces that truly stand out.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-2 gap-8 pt-6 border-t border-m-brown/10">
              <div>
                <p className="text-4xl font-serif text-m-orange">1000+</p>
                <p className="text-xs uppercase tracking-widest text-m-brown font-bold mt-1">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-m-orange">10k</p>
                <p className="text-xs uppercase tracking-widest text-m-brown font-bold mt-1">Sq. Ft. Showroom</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Using Orange only for Icons as per instructions */}
      <section className=" py-10 md:py-24 bg-white">
        <div className="container-md">
          <div className="text-center mb-16">
            <p className="section-subtitle text-m-brown">The Madhurya Way</p>
            <h2 className="text-3xl md:text-4xl font-serif text-m-brown">Our <span className="italic font-script text-m-orange">Commitments</span></h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v) => (
              <div key={v.title} className="p-8 rounded-xl border border-m-cream-dark hover:shadow-xl transition-all duration-500 group">
                <v.icon size={32} className="text-m-orange mb-2 md:mb-6 group-hover:scale-110 transition-transform" />
                <h3 className="font-heading text-xl text-m-brown mb-3 tracking-wide">{v.title}</h3>
                <p className="font-body text-sm text-m-brown/70 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration CTA - Dark Background to match Logo tone */}
      <section className="py-5 md:py-24 bg-m-brown text-m-brown/80 ">
        <div className="container-md flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <p className="section-subtitle text-m-orange">Collaborations</p>
            <h2 className="font-heading text-3xl md:text-5xl text-m-brown/80  mb-8">
              Architects, Designers & <br />
              <span className="italic font-script text-m-orange text-3xl md:text-5xl">Styling Professionals</span>
            </h2>
            <p className="font-body text-m-brown/80 text-lg leading-relaxed mb-10 max-w-xl">
              We offer bespoke collaborations and end-to-end styling solutions for both 
              residential and commercial projects. Let&apos;s build something unforgettable together.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/contact" className="bg-white hover:bg-black hover:text-white text-m-brown/80  px-10 py-4 rounded-full transition-all duration-300 font-bold tracking-widest text-xs flex items-center gap-2">
                WORK WITH US <ArrowRight size={16} />
              </Link>
            </div>
          </div>
          <div className="flex-1 relative w-full h-[400px] rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
            <Image
              src="/images/hero.webp" 
              alt="Interior design collaboration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}