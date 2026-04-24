"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { href: "/",                        label: "Home" },
    { href: "/about_our_company",       label: "About" },
    { href: "/our_services",            label: "Services" },
    { href: "/our_products",            label: "Products" },
    { href: "/company_contact_details", label: "Contact" },
  ];

  const serviceLinks = [
    { href: "/our_services#installation",  label: "Installation" },
    { href: "/our_services#maintenance",   label: "Maintenance" },
    { href: "/our_services#consultation",  label: "Consultation" },
    { href: "/our_services#repairs",       label: "Repairs" },
  ];

  const linkStyle: React.CSSProperties = {
    fontSize: 13, color: "#6b7280",
    textDecoration: "none", display: "block",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: 11, fontWeight: 600,
    color: "#111827",
    letterSpacing: "0.07em",
    textTransform: "uppercase",
    marginBottom: 16, marginTop: 0,
  };

  const labelStyle: React.CSSProperties = {
    fontSize: 11, color: "#9ca3af",
    marginBottom: 4, marginTop: 0,
  };

  return (
    <footer style={{ backgroundColor: "#fff", borderTop: "1px solid #e5e7eb" }}>

      {/* ── Floating WhatsApp Button ── */}
      <a
        href="https://wa.me/265999534305"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        style={{
          position: "fixed",
          bottom: 28,
          right: 28,
          zIndex: 9999,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 56,
          height: 56,
          borderRadius: "50%",
          backgroundColor: "#25D366",
          boxShadow: "0 4px 20px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.18)",
          textDecoration: "none",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1.1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(37,211,102,0.55), 0 4px 12px rgba(0,0,0,0.22)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.18)";
        }}
      >
        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width={30}
          height={30}
          style={{ position: "relative", zIndex: 1 }}
        >
          <path
            fill="#fff"
            d="M16 2.9C8.8 2.9 3 8.7 3 15.9c0 2.3.6 4.5 1.8 6.5L3 29.1l6.9-1.8c1.9 1 4 1.6 6.1 1.6 7.2 0 13-5.8 13-13S23.2 2.9 16 2.9zm0 23.8c-2 0-3.9-.5-5.6-1.5l-.4-.2-4.1 1.1 1.1-3.9-.3-.4c-1.1-1.7-1.7-3.7-1.7-5.8 0-5.9 4.8-10.7 10.7-10.7s10.7 4.8 10.7 10.7-4.8 10.7-10.4 10.7zm5.9-8c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1s0-.5.2-.6l.5-.6c.1-.2.2-.4.3-.6s.1-.4 0-.6-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.5 1 2.9 1.2 3.1c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4s.2-1.3.2-1.4-.2-.3-.5-.5z"
          />
        </svg>

      </a>

      <div className="gp-container" style={{ padding: "56px 1.5rem 40px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
          gap: 40,
        }}>

          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <Link href="/" style={{
              display: "flex", alignItems: "center",
              gap: 10, textDecoration: "none", marginBottom: 14,
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                overflow: "hidden", backgroundColor: "#0f5f3f", flexShrink: 0,
              }}>
                <Image
                  src="/company_logo.jpeg"
                  alt="Green Power"
                  width={36}
                  height={36}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div>
                <p style={{ fontSize: 14, fontWeight: 600, color: "#111827", margin: 0 }}>Green Power</p>
                <p style={{ fontSize: 11, color: "#9ca3af", marginTop: 2 }}>Solar Solutions</p>
              </div>
            </Link>
            <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.65, margin: 0 }}>
              Professional solar energy solutions for a sustainable future in Malawi.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p style={headingStyle}>Navigation</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {quickLinks.map(({ href, label }) => (
                <Link key={href} href={href} style={linkStyle}>{label}</Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <p style={headingStyle}>Services</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {serviceLinks.map(({ href, label }) => (
                <Link key={href} href={href} style={linkStyle}>{label}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={headingStyle}>Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>

              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <p style={{ ...labelStyle, marginBottom: 0, flexShrink: 0 }}>Phone</p>
                <Link
                  href="tel:+265999534305"
                  style={{ fontSize: 13, color: "#0f5f3f", textDecoration: "none" }}
                >
                  +265 999 534 305
                </Link>
              </div>

              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <p style={{ ...labelStyle, marginBottom: 0, flexShrink: 0 }}>Email</p>
                <Link
                  href="mailto:greenpowersystemsltd@gmail.com"
                  style={{ fontSize: 13, color: "#0f5f3f", textDecoration: "none", wordBreak: "break-all" }}
                >
                  greenpowersystemsltd@gmail.com
                </Link>
              </div>

              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <p style={{ ...labelStyle, marginBottom: 0, flexShrink: 0 }}>Hours</p>
                <p style={{ fontSize: 13, color: "#6b7280", margin: 0, lineHeight: 1.7 }}>
                  Mon – Sat: 8:00am – 5:00pm<br />
                  Sunday: Closed
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <p style={{ ...labelStyle, marginBottom: 0, flexShrink: 0 }}>Address</p>
                <address style={{ fontSize: 13, color: "#6b7280", fontStyle: "normal", lineHeight: 1.7, margin: 0 }}>
                  QuickTrip Shopping Complex<br />
                  NYUMBA YA SOLAR<br />
                  Area 25 Sungwi, Lilongwe<br />
                  P.O Box 40135, Malawi
                </address>
              </div>

            </div>
          </div>

        </div>
      </div>

      <div style={{ borderTop: "1px solid #f3f4f6" }}>
        <div className="gp-container" style={{
          padding: "16px 1.5rem",
          display: "flex", flexWrap: "wrap",
          justifyContent: "space-between", alignItems: "center", gap: 8,
        }}>
          <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>
            © {new Date().getFullYear()} Green Power Systems Ltd. All rights reserved.
          </p>
          <p style={{ fontSize: 12, color: "#9ca3af", margin: 0 }}>Lilongwe, Malawi</p>
        </div>
      </div>

    </footer>
  );
}