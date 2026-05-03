"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const quickLinks = [
    { href: "/",                          label: "Home" },
    { href: "/about_our_company",         label: "About" },
    { href: "/our_services",              label: "Services" },
    { href: "/our_products",              label: "Products" },
    { href: "/company_contact_details",   label: "Contact" },
    { href: "/company_community_support", label: "Community Support" },
    { href: "/customers_feed_back",       label: "Feedback" },
  ];

  const serviceLinks = [
    { href: "/our_services#installation", label: "Installation" },
    { href: "/our_services#maintenance",  label: "Maintenance" },
    { href: "/our_services#consultation", label: "Consultation" },
    { href: "/our_services#repairs",      label: "Repairs" },
  ];

  const linkStyle: React.CSSProperties = {
    fontSize: "clamp(12px, 1.5vw, 13px)",
    color: "#6b7280",
    textDecoration: "none",
    display: "block",
    wordBreak: "break-word",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "clamp(10px, 1.2vw, 11px)",
    fontWeight: 600,
    color: "#111827",
    letterSpacing: "0.07em",
    textTransform: "uppercase",
    marginBottom: "clamp(8px, 1.5vw, 12px)",
    marginTop: 0,
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "clamp(10px, 1.2vw, 11px)",
    color: "#9ca3af",
    marginBottom: 4,
    marginTop: 0,
    flexShrink: 0,
  };

  const socialIconStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "clamp(28px, 5vw, 34px)",
    height: "clamp(28px, 5vw, 34px)",
    borderRadius: "50%",
    textDecoration: "none",
    transition: "transform 0.2s, opacity 0.2s",
  };

  function onIconEnter(e: React.MouseEvent<HTMLAnchorElement>) {
    e.currentTarget.style.opacity = "0.82";
    e.currentTarget.style.transform = "scale(1.1)";
  }
  function onIconLeave(e: React.MouseEvent<HTMLAnchorElement>) {
    e.currentTarget.style.opacity = "1";
    e.currentTarget.style.transform = "scale(1)";
  }

  const WaPath = () => (
    <path fill="#fff" d="M16 2.9C8.8 2.9 3 8.7 3 15.9c0 2.3.6 4.5 1.8 6.5L3 29.1l6.9-1.8c1.9 1 4 1.6 6.1 1.6 7.2 0 13-5.8 13-13S23.2 2.9 16 2.9zm0 23.8c-2 0-3.9-.5-5.6-1.5l-.4-.2-4.1 1.1 1.1-3.9-.3-.4c-1.1-1.7-1.7-3.7-1.7-5.8 0-5.9 4.8-10.7 10.7-10.7s10.7 4.8 10.7 10.7-4.8 10.7-10.4 10.7zm5.9-8c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1c-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1s0-.5.2-.6l.5-.6c.1-.2.2-.4.3-.6s.1-.4 0-.6-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4s-1 1-1 2.5 1 2.9 1.2 3.1c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4s.2-1.3.2-1.4-.2-.3-.5-.5z" />
  );

  return (
    <footer style={{ backgroundColor: "#fff", borderTop: "1px solid var(--gp-border)", width: "100%" }}>

      {/* ── Main footer content ── */}
      <div className="gp-container" style={{
        paddingTop: "clamp(20px, 3.5vw, 32px)",
        paddingBottom: "clamp(16px, 3vw, 24px)",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 160px), 1fr))",
          gap: "clamp(16px, 3.5vw, 28px)",
        }}>

          {/* Brand */}
          <div style={{ minWidth: 0 }}>
            <Link href="/" style={{
              display: "flex", alignItems: "center",
              gap: "clamp(8px, 1.5vw, 10px)",
              textDecoration: "none",
              marginBottom: "clamp(8px, 1.5vw, 10px)",
            }}>
              <div style={{
                width: "clamp(30px, 5vw, 36px)",
                height: "clamp(30px, 5vw, 36px)",
                borderRadius: 8, overflow: "hidden",
                border: "1.5px solid var(--gp-green-border)",
                flexShrink: 0, position: "relative",
              }}>
                <Image
                  src="/company_logo.jpeg"
                  alt="Green Power"
                  fill
                  sizes="clamp(30px, 5vw, 36px)"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
              <div style={{ minWidth: 0 }}>
                <p style={{ fontSize: "clamp(12px, 1.5vw, 14px)", fontWeight: 600, color: "#111827", margin: 0, wordBreak: "break-word" }}>Green Power</p>
                <p style={{ fontSize: "clamp(10px, 1.2vw, 11px)", color: "#9ca3af", marginTop: 2, margin: 0 }}>Solar Solutions</p>
              </div>
            </Link>
            <p style={{ fontSize: "clamp(12px, 1.5vw, 13px)", color: "#6b7280", lineHeight: 1.65, margin: 0, wordBreak: "break-word" }}>
              Professional solar energy solutions for a sustainable future in Malawi.
            </p>
          </div>

          {/* Navigation */}
          <div style={{ minWidth: 0 }}>
            <p style={headingStyle}>Navigation</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(5px, 1.2vw, 8px)" }}>
              {quickLinks.map(({ href, label }) => (
                <Link key={href} href={href} style={linkStyle}>{label}</Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div style={{ minWidth: 0 }}>
            <p style={headingStyle}>Services</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(5px, 1.2vw, 8px)" }}>
              {serviceLinks.map(({ href, label }) => (
                <Link key={href} href={href} style={linkStyle}>{label}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div style={{ minWidth: 0 }}>
            <p style={headingStyle}>Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "clamp(7px, 1.5vw, 10px)" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <p style={{ ...labelStyle, marginBottom: 0 }}>Phone</p>
                <Link href="tel:+265999534305" style={{ fontSize: "clamp(12px, 1.5vw, 13px)", color: "#0f5f3f", textDecoration: "none" }}>
                  +265 999 534 305
                </Link>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <p style={{ ...labelStyle, marginBottom: 0 }}>Email</p>
                <Link href="mailto:greenpowersystemsltd@gmail.com" style={{ fontSize: "clamp(12px, 1.5vw, 13px)", color: "#0f5f3f", textDecoration: "none", wordBreak: "break-all" }}>
                  greenpowersystemsltd@gmail.com
                </Link>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <p style={{ ...labelStyle, marginBottom: 0 }}>Hours</p>
                <p style={{ fontSize: "clamp(12px, 1.5vw, 13px)", color: "#6b7280", margin: 0, lineHeight: 1.6 }}>
                  Mon – Sat: 8:00am – 5:00pm<br />Sunday: Closed
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                <p style={{ ...labelStyle, marginBottom: 0 }}>Address</p>
                <address style={{ fontSize: "clamp(12px, 1.5vw, 13px)", color: "#6b7280", fontStyle: "normal", lineHeight: 1.6, margin: 0, wordBreak: "break-word" }}>
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

      {/* ── Bottom bar ── */}
      <div style={{
        borderTop: "1px solid var(--gp-border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "clamp(10px, 2vw, 14px)",
        flexWrap: "wrap",
        paddingTop: "clamp(8px, 1.5vw, 12px)",
        paddingBottom: "clamp(8px, 1.5vw, 12px)",
        paddingLeft: "clamp(1rem, 4vw, 1.5rem)",
        paddingRight: "clamp(1rem, 4vw, 1.5rem)",
      }}>
        <p style={{ fontSize: "clamp(11px, 1.3vw, 12px)", color: "#14360f", margin: 0, wordBreak: "break-word" }}>
          © {new Date().getFullYear()} Green Power Systems Ltd. All rights reserved.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <a
            href="https://wa.me/265999534305"
            target="_blank" rel="noopener noreferrer"
            aria-label="WhatsApp"
            style={{ ...socialIconStyle, backgroundColor: "#25D366" }}
            onMouseEnter={onIconEnter}
            onMouseLeave={onIconLeave}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width={18} height={18}>
              <WaPath />
            </svg>
          </a>
          <a
            href="https://facebook.com/greenpowersystemsmalawi"
            target="_blank" rel="noopener noreferrer"
            aria-label="Facebook"
            style={{ ...socialIconStyle, backgroundColor: "#1877F2" }}
            onMouseEnter={onIconEnter}
            onMouseLeave={onIconLeave}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={18} height={18} fill="#fff">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
          </a>
        </div>
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

    </footer>
  );
}