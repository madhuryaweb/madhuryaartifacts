"use client";

import { useEffect, useRef, useState } from "react";

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const curtainRef = useRef<SVGRectElement>(null);
  const inkdotRef = useRef<SVGCircleElement>(null);

  const [hidden, setHidden] = useState(false);
  const [showLoader, setShowLoader] = useState(true); 

  useEffect(() => {
    const curtain = curtainRef.current;
    const inkdot = inkdotRef.current;
    if (!curtain || !inkdot) return;

    
    const totalW = 900;
    const dur = 2600;
    const start = performance.now();

    function step(now: number) {
      const t = Math.min((now - start) / dur, 1);
      const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

      // -100 baseline standard shift calculation
      if (curtain) curtain.setAttribute("width", String(e * totalW));
      if (inkdot) inkdot.setAttribute("cx", String(-80 + e * totalW));

      if (t < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);

    // Timeline durations
    const t1 = setTimeout(() => setHidden(true), 4500);
    const t2 = setTimeout(() => setShowLoader(false), 5500);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return (
    <>
      {/* LOADER OVERLAY */}
      {showLoader && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "#14100D",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            opacity: hidden ? 0 : 1,
            visibility: hidden ? "hidden" : "visible",
            transition: "opacity 1.2s ease, visibility 1.2s ease",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <svg
              // Mobile par full-width (w-full), standard tablets par 420px, aur laptops par 500px
              className="w-full max-w-[340px] sm:max-w-[420px] md:max-w-[500px] h-auto overflow-visible"
              viewBox="-140 -40 760 240"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Metallic gradient configuration */}
                <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#CB7831" />
                  <stop offset="30%" stopColor="#CB7831" />
                  <stop offset="65%" stopColor="#CB7831" />
                  <stop offset="100%" stopColor="#CB7831" />
                </linearGradient>

                {/* Clip-path bound box dimensions aligned with viewBox grid start */}
                <clipPath id="reveal">
                  <rect
                    ref={curtainRef}
                    x="-200" 
                    y="-80" 
                    width="0" 
                    height="300"
                  />
                </clipPath>
              </defs>

              {/* Shadow Blur Text - Perfectly centered at x="210" with 90px font spacing scale */}
              <text
                x="210"
                y="92"
                textAnchor="middle"
                style={{
                  fontFamily: "var(--font-andasia), sans-serif",
                  fontSize: "150px",
                  fontWeight: "normal",
                }}
                fill="#CB7831"
                opacity="0.04"
                clipPath="url(#reveal)"
              >
                Madhurya
              </text>

              {/* Animated Core Text */}
              <text
                x="210"
                y="92"
                textAnchor="middle"
                style={{
                  fontFamily: "var(--font-andasia), sans-serif",
                  fontSize: "150px",
                  fontWeight: "normal",
                }}
                fill="url(#cg)"
                clipPath="url(#reveal)"
              >
                Madhurya
              </text>

              {/* Ink Dot tracking baseline curve safely */}
              <circle ref={inkdotRef} cx="-80" cy="80" r="2.5" fill="#f5ba63" />
            </svg>

            {/* Subtitle */}
            <div
             
              style={{
                opacity: 0,
                animation: "subIn 1s ease 3.2s forwards",
                marginTop: 20,
              }}
              className="flex justify-center text-center w-full px-4"
            >
              <span
                className="
      /* 1. FONT SIZE: Mobile par ek dam chota (text--[7.5px]), tablets par (text-[9px]), aur laptops par (text-[11px]) */
      text-[7.5px] sm:text-[9px] md:text-[11px] 
      
      /* 2. LETTER SPACING: Mobile par thoda kam spacing taaki break na ho, bade screens par full luxury spacing */
      tracking-[3px] sm:tracking-[5px] md:tracking-[7px] 
      
      /* 3. CORE STYLES */
      uppercase italic font-normal block
    "
                style={{
                  color: "#CB7831", 
                  fontFamily: "var(--font-jost), sans-serif", 
                }}
              >
                Home Decor | Interior Styling | Artificial Landscaping
              </span>
            </div>

            {/* Glowing Baseline expansion */}
            <div
              style={{
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, #c8862a, #f0c060, #c8862a, transparent)",
                marginTop: 24,
                width: 0,
                animation: "glowExpand 1s ease 3.8s forwards",
              }}
            />
          </div>

          {/* Dynamic Styles injection containing the CDN Web Font */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
            @import url('https://fonts.cdnfonts.com/css/andasia-2');
            @keyframes subIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes glowExpand { to { width: 280px; } }
          `,
            }}
          />
        </div>
      )}

      {/* MAIN LAYOUT CONTENT */}
      <div
        style={{
          transition: "opacity ease-in",
          visibility: showLoader && !hidden ? "hidden" : "visible",
        }}
      >
        {children}
      </div>
    </>
  );
}
