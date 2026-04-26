import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Jost:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-charcoal antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
