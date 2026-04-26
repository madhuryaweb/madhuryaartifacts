import type { Metadata } from "next";
import { Phone, Mail, MapPin, Instagram, Facebook, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/data";

export const metadata: Metadata = {
  title: "Contact Madhurya | Get In Touch",
  description:
    "Reach Madhurya via WhatsApp, phone, or email. Visit our showroom in Indore or connect with us on social media.",
};

const contactItems = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: siteConfig.address,
    href: "#map",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-cream">
        <div className="container-md">
          <p className="section-subtitle">Reach Out</p>
          <h1 className="section-title">
            Let's <span className="italic text-gold">Connect</span>
          </h1>
          <p className="font-body text-charcoal-light mt-3 max-w-lg">
            Whether you have a question, want to place an order, or just want to
            say hello — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-white">
        <div className="container-md grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left — contact info */}
          <div className="space-y-10">
            {/* WhatsApp CTA */}
            <a
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-5 p-7 bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366] transition-colors group"
            >
              <div className="w-14 h-14 bg-[#25D366] flex items-center justify-center shrink-0">
                <MessageCircle size={24} className="text-white" />
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-[#128C7E] mb-1">
                  Fastest Response
                </p>
                <p className="font-heading text-xl text-charcoal group-hover:text-[#128C7E] transition-colors">
                  Chat on WhatsApp
                </p>
                <p className="font-body text-sm text-charcoal-light mt-1">
                  Usually replies within 1 hour
                </p>
              </div>
            </a>

            {/* Contact items */}
            <div className="space-y-6">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-12 h-12 bg-cream border border-cream-dark flex items-center justify-center shrink-0 group-hover:border-gold transition-colors">
                    <Icon size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="font-body text-xs tracking-[0.15em] uppercase text-gold mb-1">
                      {label}
                    </p>
                    <p className="font-body text-sm text-charcoal-light group-hover:text-charcoal transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-gold mb-4">
                Follow Us
              </p>
              <div className="flex gap-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-cream-dark px-4 py-2.5 font-body text-xs tracking-wide text-charcoal-light hover:border-gold hover:text-gold transition-colors"
                >
                  <Instagram size={14} /> Instagram
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-cream-dark px-4 py-2.5 font-body text-xs tracking-wide text-charcoal-light hover:border-gold hover:text-gold transition-colors"
                >
                  <Facebook size={14} /> Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Right — map */}
          <div id="map" className="space-y-4">
           <div className="w-full h-[400px] md:h-[500px] rounded-lg overflow-hidden shadow-sm">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16443.58200806424!2d75.91923746854889!3d22.70883035463825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd22c3cd5683%3A0x9641f0b0f483b7f7!2sMadhurya%20Handicrafts%20%26%20Artifacts%20Store!5e0!3m2!1sen!2sin!4v1777179034131!5m2!1sen!2sin" 
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
          </div>
        </div>
      </section>

      {/* Business hours */}
      <section className="py-16 bg-cream">
        <div className="container-md max-w-2xl">
          <p className="section-subtitle">Showroom Timings</p>
          <h2 className="section-title mb-8">
            Visit <span className="italic text-gold">Us</span>
          </h2>
          <div className="divide-y divide-cream-dark">
            {[
              { day: "Monday – Friday", time: "10:00 AM – 7:00 PM" },
              { day: "Saturday", time: "10:00 AM – 8:00 PM" },
              { day: "Sunday", time: "11:00 AM – 6:00 PM" },
            ].map((row) => (
              <div
                key={row.day}
                className="flex justify-between py-4 font-body text-sm"
              >
                <span className="text-charcoal-light">{row.day}</span>
                <span className="text-charcoal font-medium">{row.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
