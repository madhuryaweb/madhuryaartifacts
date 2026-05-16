import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import localFont from "next/font/local";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import ClientWrapper from "@/components/ClientWrapper";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});
const andasia = localFont({
  src: "./fonts/Andasia.ttf", 
  variable: "--font-andasia",  
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Madhurya | Premium Handcrafted Home Décor",
    template: "%s | Madhurya",
  },
  description:
    "Explore Madhurya's collection of premium handcrafted home décor — wall art, clocks, lamps, and bespoke pieces that transform living spaces. Based in Indore.",
  keywords: [
    "handcrafted home decor",
    "premium home decor India",
    "wall paintings",
    "artisan lamps",
    "Indore home decor",
    "luxury decor items",
  ],
  openGraph: {
    title: "Madhurya | Premium Handcrafted Home Décor",
    description:
      "Where Craft Meets Home. Premium handmade décor pieces from Indore, India.",
    url: "https://madhurya.in",
    siteName: "Madhurya",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable} ${andasia.variable}` }>
      <body className="bg-cream text-charcoal antialiased">
        <ClientWrapper>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppFloat />
        </ClientWrapper>
      </body>
    </html>
  );
}
