"use client";
import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Scroll to top"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 99,
        width: 44,
        height: 44,
        borderRadius: "50%",
        backgroundColor: "var(--gp-green)",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={e => (e.currentTarget.style.transform = "translateY(-3px)")}
      onMouseLeave={e => (e.currentTarget.style.transform = "translateY(0)")}
    >
      <svg width={18} height={18} viewBox="0 0 24 24" fill="none"
        stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}