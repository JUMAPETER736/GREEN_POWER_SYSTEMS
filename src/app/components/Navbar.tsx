"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",                          label: "Home" },
  { href: "/about_our_company",         label: "About" },
  { href: "/our_services",              label: "Services" },
  { href: "/our_products",              label: "Products" },
  { href: "/company_contact_details",   label: "Contact" },
 // { href: "/company_community_support", label: "Community Support" },
  { href: "/customers_feed_back",       label: "Feedback" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      backgroundColor: "#fff",
      borderBottom: "1px solid var(--gp-border)",
      boxShadow: "0 1px 0 0 rgba(0,0,0,0.04)",
      width: "100%",
    }}>
      <div className="gp-container">
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          minHeight: "clamp(56px, 8vw, 72px)",
          paddingTop: "clamp(8px, 1.5vw, 12px)",
          paddingBottom: "clamp(8px, 1.5vw, 12px)",
        }}>

          {/* Logo */}
          <Link href="/" style={{
            display: "flex", alignItems: "center",
            gap: "clamp(8px, 2vw, 12px)",
            textDecoration: "none", flexShrink: 0,
          }}>
            <div
              className="gp-logo-wrap"
              style={{
                borderRadius: 10, overflow: "hidden",
                border: "1.5px solid var(--gp-green-border)",
                flexShrink: 0, position: "relative",
                width: "clamp(38px, 6vw, 48px)",
                height: "clamp(38px, 6vw, 48px)",
              }}
            >
              <Image
                src="/company_logo.jpeg"
                alt="Green Power Systems logo"
                fill
                sizes="clamp(38px, 6vw, 48px)"
                style={{ objectFit: "cover" }}
                className="gp-logo-img"
              />
            </div>
            <span className="gp-logo-name" style={{
              fontWeight: 700,
              color: "var(--gp-text-primary)",
              letterSpacing: "-0.01em",
              fontSize: "clamp(11px, 1.5vw, 14px)",
            }}>
              GREEN POWER SYSTEMS LIMITED
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="gp-nav-links" style={{ alignItems: "center", gap: 2 }}>
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`gp-nav-link${active ? " active" : ""}`}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/company_contact_details"
            className="gp-nav-cta gp-btn-primary"
            style={{
              fontSize: "clamp(11px, 1.3vw, 13px)",
              padding: "clamp(7px, 1.2vw, 9px) clamp(14px, 2vw, 20px)",
            }}
          >
            Get Free Quote
          </Link>

          {/* Burger */}
          <button
            className="gp-burger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: "clamp(6px, 1vw, 8px)",
              borderRadius: 8,
              color: "var(--gp-text-muted)",
              alignItems: "center", justifyContent: "center",
            }}
          >
            <svg width="clamp(18px, 3vw, 22px)" height="clamp(18px, 3vw, 22px)" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {open
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            borderTop: "1px solid var(--gp-border)",
            paddingTop: "clamp(6px, 1.5vw, 10px)",
            paddingBottom: "clamp(12px, 3vw, 18px)",
          }}>
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block",
                    padding: "clamp(9px, 2vw, 12px) clamp(10px, 2vw, 14px)",
                    fontSize: "clamp(13px, 2vw, 15px)",
                    fontWeight: active ? 600 : 400,
                    color: active ? "var(--gp-green)" : "var(--gp-text-primary)",
                    backgroundColor: active ? "var(--gp-green-light)" : "transparent",
                    textDecoration: "none",
                    borderRadius: 8,
                    marginBottom: 2,
                  }}
                >
                  {label}
                </Link>
              );
            })}
            <div style={{
              marginTop: "clamp(8px, 2vw, 12px)",
              paddingTop: "clamp(8px, 2vw, 12px)",
              borderTop: "1px solid var(--gp-border)",
            }}>
              <Link
                href="/company_contact_details"
                className="gp-btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => setOpen(false)}
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        *, *::before, *::after {
          box-sizing: border-box;
        }
        .gp-container {
          width: 100%;
          max-width: 100%;
          padding-left: clamp(1rem, 4vw, 1.5rem);
          padding-right: clamp(1rem, 4vw, 1.5rem);
        }
        @media (max-width: 480px) {
          .gp-container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </header>
  );
}