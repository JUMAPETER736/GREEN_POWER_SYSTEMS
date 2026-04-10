"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const links = [
  { href: "/",             label: "Home" },
  { href: "/about",        label: "About" },
  { href: "/services",     label: "Services" },
  { href: "/products",     label: "Products" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact",      label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      backgroundColor: "#fff",
      borderBottom: "1px solid #e5e7eb",
    }}>
      <div className="gp-container">
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          height: 64, gap: 32,
        }}>

          {/* Logo */}
          <Link href="/" style={{
            display: "flex", alignItems: "center",
            gap: 10, textDecoration: "none", flexShrink: 0,
          }}>
            <div style={{
              width: 36, height: 36, borderRadius: 8,
              overflow: "hidden", backgroundColor: "#0f5f3f",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0,
            }}>
              <Image src="/logo.jpeg" alt="Green Power" width={36} height={36} style={{ objectFit: "contain" }} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span style={{ fontSize: 14, fontWeight: 600, color: "#111827" }}>Green Power</span>
              <span style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>Solar Solutions</span>
            </div>
          </Link>

          {/* Desktop links */}
          <nav style={{
            display: "flex", alignItems: "center", gap: 4,
            // hide on mobile via media query — handled in the mobile block below
          }} className="gp-nav-desktop">
            {links.map(({ href, label }) => (
              <Link key={href} href={href} style={{
                padding: "6px 12px",
                fontSize: 14,
                color: "#4b5563",
                textDecoration: "none",
                borderRadius: 6,
                transition: "background 0.15s, color 0.15s",
              }}
              onMouseEnter={e => {
                (e.target as HTMLElement).style.backgroundColor = "#f3f4f6";
                (e.target as HTMLElement).style.color = "#111827";
              }}
              onMouseLeave={e => {
                (e.target as HTMLElement).style.backgroundColor = "transparent";
                (e.target as HTMLElement).style.color = "#4b5563";
              }}>
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA + burger */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Link href="/contact" className="gp-btn-primary" style={{ display: "none" }}
              id="nav-cta">
              Get Quote
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              style={{
                background: "none", border: "none", cursor: "pointer",
                padding: 8, borderRadius: 6, color: "#6b7280",
              }}>
              <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {open
                  ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            borderTop: "1px solid #f3f4f6",
            paddingBottom: 12,
          }}>
            {links.map(({ href, label }) => (
              <Link key={href} href={href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block", padding: "10px 12px",
                  fontSize: 14, color: "#374151",
                  textDecoration: "none", borderRadius: 6,
                }}>
                {label}
              </Link>
            ))}
            <div style={{ padding: "8px 12px 4px" }}>
              <Link href="/contact" className="gp-btn-primary" style={{ width: "100%" }}>
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .gp-nav-desktop { display: flex !important; }
          #nav-cta { display: inline-flex !important; }
        }
        @media (max-width: 767px) {
          .gp-nav-desktop { display: none !important; }
        }
      `}</style>
    </header>
  );
}