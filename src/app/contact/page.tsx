"use client";

import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  MessageCircle,
  Clock,
} from "lucide-react";
import { siteConfig } from "@/data/data";

// Note: In Next.js, 'metadata' should be in a separate layout or a server component.
// If this is a 'use client' file, move metadata to a parent server file.

const contactItems = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: siteConfig.social.whatsapp,
    // subValue: "Fastest response (under 1hr)",
  },
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
            Whether you have a question, want to visit our store, or are
            interested in collaborating — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-white">
        <div className="container-md grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left — contact info */}
          <div className="space-y-12">
            {/* Main Contact items */}
            <div className="space-y-8">
              {contactItems.map(
                ({ icon: Icon, label, value, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={label === "WhatsApp" ? "_blank" : undefined}
                    rel={
                      label === "WhatsApp" ? "noopener noreferrer" : undefined
                    }
                    className="flex items-start gap-5 group"
                  >
                    <div className="w-12 h-12 bg-cream border border-cream-dark flex items-center justify-center shrink-0 group-hover:bg-gold group-hover:border-gold transition-all duration-300 rounded-lg">
                      <Icon
                        size={20}
                        className="text-gray-500 group-hover:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-1 font-bold">
                        {label}
                      </p>
                      <p className="font-heading text-lg text-charcoal group-hover:text-gold transition-colors">
                        {value}
                      </p>
                     
                    </div>
                  </a>
                ),
              )}

              {/* Address Section with Timings */}
              <div className="flex items-start gap-5 pt-4">
                <div className="w-12 h-12 bg-cream border border-cream-dark flex items-center justify-center shrink-0 rounded-lg">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-1 font-bold">
                    Address
                  </p>
                  <p className="font-body text-sm text-charcoal-light leading-relaxed max-w-xs">
                    {siteConfig.address}
                  </p>

                  {/* Store Timings below Address */}
                  <div className="mt-4 flex items-center gap-2 text-charcoal-light">
                    <Clock size={14} className="text-gold" />
                    <span className="text-xs font-medium">
                      10:00 AM – 8:00 PM (Mon-Sat)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social - Rounded Icons */}
            <div className="pt-6">
              <p className="font-body text-[10px] tracking-[0.2em] uppercase text-gold mb-5 font-bold">
                Follow Us
              </p>
              <div className="flex gap-4">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-cream-dark flex items-center justify-center text-charcoal-light hover:bg-gold hover:text-white hover:border-gold transition-all"
                  aria-label="Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-cream-dark flex items-center justify-center text-charcoal-light hover:bg-gold hover:text-white hover:border-gold transition-all"
                  aria-label="Facebook"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right — Map */}
          <div id="map" className="relative group">
            <div className="w-full h-[250px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-cream-dark">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.560621954935!2d75.92569527784833!3d22.707394774913496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd22c3cd5683%3A0x9641f0b0f483b7f7!2sMadhurya%20Handicrafts%20%26%20Artifacts%20Store!5e0!3m2!1sen!2sin!4v1778253161077!5m2!1sen!2sin"
                width="600"
                height="450"
                className="w-full h-full border-0  contrast-100  transition-all duration-700"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: Detailed Timings Section if needed */}
    </>
  );
}
