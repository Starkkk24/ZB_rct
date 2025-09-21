import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const GlobalSpotlight = ({ gridRef, glowColor = "132, 0, 255", size = 800 }) => {
  const spotlightRef = useRef(null);

  useEffect(() => {
    if (!gridRef?.current) return;

    const spotlight = document.createElement("div");
    spotlight.className = "global-spotlight";
    spotlight.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      pointer-events: none;
      background: radial-gradient(circle,
        rgba(${glowColor}, 0.2) 0%,
        rgba(${glowColor}, 0.08) 20%,
        rgba(${glowColor}, 0.04) 35%,
        transparent 70%
      );
      z-index: 0; /* 👈 stays behind cards */
      opacity: 0;
      transform: translate(-50%, -50%);
      mix-blend-mode: screen;
    `;

    // Append INSIDE grid container instead of <body>
    gridRef.current.appendChild(spotlight);
    spotlightRef.current = spotlight;

    const handleMouseMove = (e) => {
      if (!spotlightRef.current || !gridRef.current) return;

      const rect = gridRef.current.getBoundingClientRect();
      const inside =
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;

      gsap.to(spotlightRef.current, {
        left: e.clientX - rect.left,
        top: e.clientY - rect.top,
        opacity: inside ? 0.6 : 0,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      spotlightRef.current?.remove();
    };
  }, [gridRef, glowColor, size]);

  return null;
};

export default GlobalSpotlight;
