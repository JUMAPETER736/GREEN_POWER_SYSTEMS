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
  { href: "/customers_feed_back",       label: "Feedback" },
  { href: "/company_contact_details",   label: "Contact" },
  { href: "/company_community_support", label: "Community" },
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
    }}>
      <div className="gp-container">
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          height: 64,
          gap: 8,
        }}>

          {/* Logo */}
          <Link href="/" style={{
            display: "flex", alignItems: "center",
            gap: 8, textDecoration: "none", flexShrink: 0,
          }}>
            <div
              className="gp-logo-wrap"
              style={{
                borderRadius: 8, overflow: "hidden",
                border: "1.5px solid var(--gp-green-border)",
                flexShrink: 0, position: "relative",
                width: 40, height: 40,
              }}
            >
              <Image
                src="/company_logo.jpeg"
                alt="Green Power Systems logo"
                fill
                sizes="40px"
                style={{ objectFit: "cover" }}
                className="gp-logo-img"
              />
            </div>
            <span className="gp-logo-name" style={{
              fontWeight: 700,
              fontSize: 13,
              lineHeight: 1.2,
              maxWidth: 130,
              color: "var(--gp-text-primary)",
              letterSpacing: "-0.01em",
            }}>
              GREEN POWER SYSTEMS LIMITED
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="gp-nav-links" style={{
            display: "flex",
            alignItems: "center",
            gap: 0,
            flex: 1,
            justifyContent: "center",
          }}>
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`gp-nav-link${active ? " active" : ""}`}
                  style={{
                    fontSize: 12.5,
                    padding: "6px 8px",
                    whiteSpace: "nowrap",
                  }}
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
            style={{ fontSize: 12, padding: "8px 14px", whiteSpace: "nowrap", flexShrink: 0 }}
          >
            Get Quote
          </Link>

          {/* Burger */}
          <button
            className="gp-burger"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            style={{
              background: "none", border: "none", cursor: "pointer",
              padding: 8, borderRadius: 8, color: "var(--gp-text-muted)",
              display: "none",
              alignItems: "center", justifyContent: "center",
            }}
          >
            <svg width={22} height={22} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
            paddingTop: 8, paddingBottom: 16,
          }}>
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "block", padding: "11px 12px",
                    fontSize: 15,
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
            <div style={{ marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--gp-border)" }}>
              <Link
                href="/company_contact_details"
                className="gp-btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
                onClick={() => setOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .gp-nav-links {
            display: none !important;
          }
          .gp-nav-cta {
            display: none !important;
          }
          .gp-burger {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}