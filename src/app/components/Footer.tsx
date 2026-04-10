"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { href: "/",             label: "Home" },
    { href: "/about",        label: "About" },
    { href: "/services",     label: "Services" },
    { href: "/products",     label: "Products" },
    { href: "/contact",      label: "Contact" },
  ];

  const serviceLinks = [
    { href: "/services#installation",  label: "Installation" },
    { href: "/services#maintenance",   label: "Maintenance" },
    { href: "/services#consultation",  label: "Consultation" },
    { href: "/services#repairs",       label: "Repairs" },
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

  return (
    <footer style={{ backgroundColor: "#fff", borderTop: "1px solid #e5e7eb" }}>

      {/* Main grid */}
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
                  src="/logo.jpeg"
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

              {/* Email */}
              <div>
                <p style={{ fontSize: 11, color: "#9ca3af", marginBottom: 4, marginTop: 0 }}>Email</p>
                <a
                  href="mailto:greenpowersystemsltd@gmail.com"
                  style={{ fontSize: 13, color: "#0f5f3f", textDecoration: "none", wordBreak: "break-all" }}
                >
                  greenpowersystemsltd@gmail.com
                </a>
              </div>

              {/* Address with NYUMBA YA SOLAR badge */}
              <div>
                <p style={{ fontSize: 11, color: "#9ca3af", marginBottom: 8, marginTop: 0 }}>Address</p>

                {/* NYUMBA YA SOLAR badge */}
                <span style={{
                  display: "inline-block",
                  marginBottom: 10,
                  padding: "4px 12px",
                  backgroundColor: "#0c5436",
                  color: "#ffffff",
                  fontSize: 10,
                  fontWeight: 700,
                  borderRadius: 100,
                  letterSpacing: "0.09em",
                }}>
                  NYUMBA YA SOLAR
                </span>

                <address style={{
                  fontSize: 13, color: "#6b7280",
                  fontStyle: "normal", lineHeight: 1.7,
                }}>
                  QuickTrip Shopping Complex<br />
                  Area 25 Sungwi, Lilongwe<br />
                  P.O Box 40135, Malawi
                </address>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
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