
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/",                        label: "Home" },
  { href: "/about_our_company",       label: "About" },
  { href: "/our_services",            label: "Services" },
  { href: "/our_products",            label: "Products" },
  { href: "/customers_feed_back",     label: "Testimonials" },
  { href: "/company_contact_details", label: "Contact" },
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
          height: 68,
        }}>

          {/* Logo */}
          <Link href="/" style={{
            display: "flex", alignItems: "center",
            gap: 12, textDecoration: "none", flexShrink: 0,
          }}>
            <div
              className="gp-logo-wrap"
              style={{
                borderRadius: 10, overflow: "hidden",
                border: "1.5px solid var(--gp-green-border)",
                flexShrink: 0, position: "relative",
              }}
            >
              <Image
                src="/logo.jpeg"
                alt="Green Power Systems logo"
                fill
                sizes="48px"
                className="gp-logo-img"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
              <span className="gp-logo-name" style={{
                fontWeight: 700,
                color: "var(--gp-text-primary)",
                letterSpacing: "-0.01em",
              }}>
                GREEN POWER SYSTEMS LIMITED
              </span>
              <span className="gp-logo-tag" style={{
                color: "var(--gp-green)",
                marginTop: 3,
                fontWeight: 500,
                letterSpacing: "0.03em",
              }}>
                Solar Systems · Malawi
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="gp-nav-links" style={{ alignItems: "center", gap: 2 }}>
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  style={{
                    padding: "7px 14px",
                    fontSize: 14,
                    fontWeight: active ? 600 : 400,
                    color: active ? "var(--gp-green)" : "var(--gp-text-muted)",
                    textDecoration: "none",
                    borderRadius: 7,
                    backgroundColor: active ? "var(--gp-green-light)" : "transparent",
                    transition: "background 0.15s, color 0.15s",
                  }}
                  onMouseEnter={e => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "var(--gp-bg-section)";
                      (e.currentTarget as HTMLElement).style.color = "var(--gp-text-primary)";
                    }
                  }}
                  onMouseLeave={e => {
                    if (!active) {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                      (e.currentTarget as HTMLElement).style.color = "var(--gp-text-muted)";
                    }
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
            style={{ fontSize: 13, padding: "9px 20px" }}
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
              padding: 8, borderRadius: 8, color: "var(--gp-text-muted)",
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
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}