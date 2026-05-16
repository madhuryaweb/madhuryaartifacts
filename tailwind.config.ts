import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Linked to your CSS variables for Cormorant Garamond & Jost
       andasia: ['Andasia', 'serif'],
        heading: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-jost)", "sans-serif"],
      },
      colors: {
        gold: {
          DEFAULT: "#B8924A",
          light: "#D4AF6A",
          dark: "#8A6E28",
        },
        cream: {
          DEFAULT: "#F7F2EA", // ← Ivory
          dark: "#EDE6DA",
        },
        charcoal: {
          DEFAULT: "#1A1510", // ← Ink
          light: "#4A4A4A",
        },
      },
      animation: {
        "scroll-left": "scrollLeft 35s linear infinite",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slow-zoom": "slowZoom 20s ease-in-out infinite alternate",
      },
      keyframes: {
        scrollLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slowZoom: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
