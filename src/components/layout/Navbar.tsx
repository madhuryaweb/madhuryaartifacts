"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, MessageCircle } from "lucide-react";
import { categories } from "@/data/data";
import { siteConfig } from "@/data/data";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    dropdown: categories.map((c) => ({
      label: c.name,
      href: `/products?category=${c.id}`,
    })),
  },
  // { label: "Blog", href: "/blog" },
  // { label: "Bulk Order", href: "/bulk-order" },
  // { label: "Partner With Us", href: "/partner" },
  // { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0F0D0A]/95 backdrop-blur-sm shadow-[0_1px_20px_rgba(0,0,0,0.08)]"
          : "bg-[#0F0D0A]/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-md">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          {/* <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 border border-gold flex items-center justify-center">
              <span className="font-heading text-gold text-lg leading-none">M</span>
            </div>
            <div>
              <p className="font-heading text-xl tracking-[0.15em] text-charcoal leading-none">
                MADHURYA
              </p>
              <p className="font-body text-[9px] tracking-[0.25em] text-gold uppercase leading-none mt-0.5">
                Where Craft Meets Home
              </p>
            </div>
          </Link> */}
          {/* Logo Section - Replaced text with Image */}
          <Link href="/" className="flex items-center overflow-hidden">
            <div className="relative h-10 md:h-16 w-32 md:w-44 flex items-center justify-center">
              <Image
                src="/images/logo4.png"
                alt="Madhurya Logo"
                fill
                className="object-contain " // 'scale' se logo bada hoga bina box bada kiye
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              // Check if current path matches link href
              const isActive = pathname === link.href;

              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() =>
                    link.dropdown && setOpenDropdown(link.label)
                  }
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className={`flex items-center gap-1 px-3 py-2 font-body text-xs tracking-[0.12em] uppercase transition-colors duration-200 ${
                      isActive
                        ? "text-gold font-bold"
                        : "text-white hover:text-gold"
                    }`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown
                        size={12}
                        className={`transition-transform duration-200 ${
                          openDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </Link>
                  {link.dropdown && openDropdown === link.label && (
                    <div className="absolute top-full left-0 mt-0 w-52 bg-white shadow-xl border-t-2 border-gold py-2 z-50">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-5 py-2.5 font-body text-xs tracking-wide text-charcoal-light hover:text-gold hover:bg-cream transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                  {/* ... dropdown logic stays the same */}
                </div>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.social.whatsapp.replace("https://wa.me/", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-xs py-2.5 px-5"
            >
              <MessageCircle size={14} />
              Enquire Now
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-gray-400"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-cream-dark">
          <div className="container-md py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block py-3 font-body text-sm tracking-widest uppercase text-charcoal border-b border-cream-dark"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 space-y-1 pt-1 pb-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="block py-2 font-body text-xs tracking-wide text-charcoal-light"
                        onClick={() => setMobileOpen(false)}
                      >
                        → {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full text-center justify-center text-xs"
              >
                <MessageCircle size={14} />
                Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
