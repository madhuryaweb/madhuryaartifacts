import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "15+", label: "Years of Legacy" },
  { value: "1000+", label: "Projects Completed" },
  { value: "10k", label: "Sq. Ft. Showroom" },
  { value: "100%", label: "Customised" },
];

export default function AboutPreview() {
  return (
    <section className="py-24 bg-m-cream">
      <div className="container-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Media Side - Video for Desktop, Image for Mobile */}
          <div className="relative group">
            {/* Mobile — Image */}
            <div className="relative h-[450px] overflow-hidden rounded-2xl block lg:hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
                alt="Madhurya interior inspiration"
                fill
                sizes="100vw"
                className="object-cover"
              />
            </div>

            {/* Desktop — Video (Representing the 10,000 sq ft experience) */}
            <div className="relative h-[650px] rounded-[2rem] overflow-hidden hidden lg:block shadow-2xl border border-m-brown/5">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              >
                <source src="/video/hero.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-m-brown/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Stats Badge - Real Client Stats */}
           
          </div>

          {/* Text Side - Authentic Client Content */}
          <div className="pt-20 lg:pt-0 pl-0 lg:pl-8">
            <p className="text-gold-light font-bold uppercase tracking-[0.3em] text-xs mb-4">
              Our Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-m-brown mb-8 leading-tight">
              15 Years of <br />
              <span className="italic">Interior Inspiration</span>
            </h2>

            <div className="space-y-6 mb-10">
              <p className="font-body text-lg text-m-brown/80 leading-relaxed">
                From a modest retail space to Indore&apos;s trusted 10,000 sq. ft. 
                design destination, our journey is rooted in one idea: 
                <span className="text-m-brown font-semibold italic"> every space should be tailored to stand out, not just fit.</span>
              </p>
              <p className="font-body text-base text-m-brown/70 leading-relaxed">
                With 1000+ projects across Madhya Pradesh, we offer a curated range 
                of artifacts and customised designs, paired with end-to-end styling 
                for residential and commercial spaces.
              </p>
            </div>

            {/* Quote with Brand Tone */}
            <blockquote className="border-l-4 border-m-orange pl-6 mb-12">
              <p className="font-serif text-2xl text-m-brown italic leading-snug">
                &quot;We help you build a reputation for quality and detail, creating 
                experiences that remain unforgettable.&quot;
              </p>
            </blockquote>

            <Link 
              href="/about" 
              className="inline-flex items-center gap-4 bg-m-brown text-gold-light  px-10 py-4 rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-m-orange transition-all duration-500 shadow-lg"
            >
              The Full Story
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}