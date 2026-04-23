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

              <div>
                <p style={labelStyle}>Phone</p>
                <Link
                  href="tel:+265999534304"
                  style={{ fontSize: 13, color: "#0f5f3f", textDecoration: "none" }}
                >
                  +265 999 534 304
                </Link>
              </div>

              <div>
                <p style={labelStyle}>Email</p>
                <Link
                  href="mailto:greenpowersystemsltd@gmail.com"
                  style={{ fontSize: 13, color: "#0f5f3f", textDecoration: "none", wordBreak: "break-all" }}
                >
                  greenpowersystemsltd@gmail.com
                </Link>
              </div>

              <div>
                <p style={labelStyle}>Opening Hours</p>
                <p style={{ fontSize: 13, color: "#6b7280", margin: 0, lineHeight: 1.7 }}>
                  Mon – Sat: 8:00am – 5:00pm<br />
                  Sunday: Closed
                </p>
              </div>

              <div>
                <p style={labelStyle}>Address</p>
                <address style={{ fontSize: 13, color: "#6b7280", fontStyle: "normal", lineHeight: 1.7 }}>
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