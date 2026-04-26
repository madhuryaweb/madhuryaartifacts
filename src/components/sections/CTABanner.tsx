import Link from "next/link";
import { MessageCircle, Package } from "lucide-react";
import { siteConfig } from "@/data/data";

export default function CTABanner() {
  return (
    <section className="py-20 bg-cream">
      <div className="container-md">
        <div className="bg-charcoal text-white px-8 py-16 md:px-16 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-32 h-32 border border-gold/20 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border border-gold/20 translate-x-1/2 translate-y-1/2" />

          <p className="font-body text-xs tracking-[0.3em] uppercase text-gold mb-4">
            Bring Madhurya Home
          </p>
          <h2 className="font-heading text-4xl md:text-5xl text-white mb-5">
            Ready to Transform
            <br />
            <span className="italic text-gold-light">Your Space?</span>
          </h2>
          <p className="font-body text-white/60 mb-10 max-w-lg mx-auto">
            Whether you're looking for a single statement piece or outfitting an
            entire home — we're here to help you choose.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
            <Link href="/bulk-order" className="btn-outline border-white text-white hover:bg-white hover:text-charcoal">
              <Package size={16} />
              Bulk Orders
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
