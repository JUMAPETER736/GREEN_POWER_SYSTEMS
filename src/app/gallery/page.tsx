import type { Metadata } from "next";
import GalleryGrid from "../components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Green Power Systems",
  description:
    "Browse our portfolio of solar installations across Lilongwe and Malawi. Real projects, real results.",
};

export default function GalleryPage() {
  return (
    <div style={{ backgroundColor: "var(--gp-bg-page)" }}>

      {/* Page Hero */}
      <section className="gp-page-hero">
        <div className="gp-container">
          <span className="gp-eyebrow">Our Work</span>
          <h1 className="gp-section-title" style={{ marginBottom: 12 }}>
            Installations We&rsquo;re Proud Of
          </h1>
          <p className="gp-section-sub">
            Every project is a commitment to quality. Browse before-and-after
            photos, system specs, and client outcomes from across Malawi.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        style={{
          backgroundColor: "var(--gp-bg-card)",
          borderBottom: "1px solid var(--gp-border)",
          padding: "28px 0",
        }}
      >
        <div
          className="gp-container"
          style={{
            display: "flex",
            gap: 40,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {[
            { value: "50+", label: "Projects Completed" },
            { value: "800+ kW", label: "Installed Capacity" },
            { value: "48", label: "Happy Clients" },
            { value: "6", label: "Regions Covered" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <p
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: "var(--gp-green)",
                  margin: 0,
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: 12,
                  color: "var(--gp-text-subtle)",
                  marginTop: 5,
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <GalleryGrid />

      {/* CTA */}
      <section
        style={{
          padding: "80px 0",
          backgroundColor: "var(--gp-bg-dark)",
        }}
      >
        <div
          className="gp-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 32,
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                fontWeight: 800,
                color: "#fff",
                margin: "0 0 10px",
                letterSpacing: "-0.02em",
              }}
            >
              Ready to be our next success story?
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "rgba(255,255,255,0.62)",
                margin: 0,
                lineHeight: 1.7,
                maxWidth: 440,
              }}
            >
              Get a free site assessment and custom quote for your home or
              business.
            </p>
          </div>
          <a href="/company_contact_details" className="gp-btn-accent">
            Get Your Free Quote
          </a>
        </div>
      </section>
    </div>
  );
}