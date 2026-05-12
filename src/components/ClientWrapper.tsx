"use client";

import { useEffect, useRef, useState } from "react";

// 1. TypeScript interface for children taaki layout mein error na aaye
interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  const curtainRef = useRef<SVGRectElement>(null);
  const inkdotRef = useRef<SVGCircleElement>(null);
  
  const [hidden, setHidden] = useState(false);     // Fade out animation ke liye
  const [showLoader, setShowLoader] = useState(true); // DOM se loader hatane ke liye

  useEffect(() => {
    const curtain = curtainRef.current;
    const inkdot = inkdotRef.current;
    if (!curtain || !inkdot) return;

    const totalW = 440;
    const dur = 2600;
    const start = performance.now();

    function step(now: number) {
      const t = Math.min((now - start) / dur, 1);
      // Easing function for smooth handwriting effect
      const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      
      if (curtain) curtain.setAttribute("width", String(e * totalW));
      if (inkdot) inkdot.setAttribute("cx", String(-20 + e * totalW));
      
      if (t < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);

    // Timeline logic
    const t1 = setTimeout(() => setHidden(true), 4000);   // Start fading
    const t2 = setTimeout(() => setShowLoader(false), 4800); // Fully unmount loader

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
            background: "#080603",
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
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <svg
              style={{ width: 380, overflow: "visible" }}
              viewBox="-20 -10 420 110"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="cg" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7a3f10" />
                  <stop offset="25%" stopColor="#c8702a" />
                  <stop offset="50%" stopColor="#f0c060" />
                  <stop offset="75%" stopColor="#d4882e" />
                  <stop offset="100%" stopColor="#8B4513" />
                </linearGradient>
                <clipPath id="reveal">
                  <rect ref={curtainRef} x="-20" y="-20" width="0" height="160" />
                </clipPath>
              </defs>

              {/* Shadow Text */}
              <text x="190" y="88" textAnchor="middle" fontFamily="'Pinyon Script', cursive" fontSize="96" fill="#c8702a" opacity="0.06" clipPath="url(#reveal)">
                Madhurya
              </text>

              {/* Animated Text */}
              <text x="190" y="88" textAnchor="middle" fontFamily="'Pinyon Script', cursive" fontSize="96" fill="url(#cg)" stroke="url(#cg)" strokeWidth="0.5" clipPath="url(#reveal)">
                Madhurya
              </text>

              {/* Ink Dot */}
              <circle ref={inkdotRef} cx="-20" cy="72" r="3" fill="#f0c060" />
            </svg>

            {/* Subtitle */}
            <div style={{ opacity: 0, animation: "subIn 0.8s ease 3.2s forwards", marginTop: 28 }}>
              <span style={{ fontSize: 10, letterSpacing: 6, color: "#9a7535", textTransform: "uppercase", fontStyle: "italic" }}>
                Home Decor · Indore
              </span>
            </div>

            {/* Glowing Line */}
            <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #c8862a, #f0c060, #c8862a, transparent)", marginTop: 32, width: 0, animation: "glowExpand 1s ease 3.8s forwards" }} />
          </div>

          {/* Hydration Error Solution */}
          <style dangerouslySetInnerHTML={{ __html: `
            @import url('https://fonts.googleapis.com/css2?family=Pinyon+Script&display=swap');
            @keyframes subIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
            @keyframes glowExpand { to { width: 280px; } }
          `}} />
        </div>
      )}

      {/* MAIN CONTENT (Aapki site ka data yahan render hoga) */}
      <div style={{ 
       
        transition: "opacity ease-in",
        visibility: showLoader && !hidden ? "hidden" : "visible"
      }}>
        {children}
      </div>
    </>
  );
}