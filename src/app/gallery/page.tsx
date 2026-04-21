

// src/app/gallery/page.tsx
"use client";
import Link from "next/link";
import { useState } from "react";

const projects = [
  { src: "/images/gallery/image1.jpeg",  tag: "Commercial",    tagColor: "#0066cc",          kw: "22 kW",  title: "Large Commercial Rooftop",     location: "Lilongwe" },
  { src: "/images/gallery/image3.jpeg",  tag: "Residential",   tagColor: "var(--gp-green)",  kw: "8 kW",   title: "Rural Rooftop Array",           location: "Dedza District" },
  { src: "/images/gallery/image22.jpeg", tag: "Industrial",    tagColor: "#b45309",          kw: "48 kW",  title: "Industrial Warehouse Array",    location: "Kanengo" },
  { src: "/images/gallery/image4.jpeg",  tag: "Energy Storage",tagColor: "#6d4c41",          kw: "5 kW",   title: "Inverter & Battery System",     location: "Lilongwe" },
  { src: "/images/gallery/image8.jpeg",  tag: "Residential",   tagColor: "var(--gp-green)",  kw: "5 kW",   title: "Precision Panel Alignment",     location: "Lilongwe" },

  { src: "/images/gallery/image7.jpeg",  tag: "Residential",   tagColor: "var(--gp-green)",  kw: "4 kW",   title: "Home Solar System",             location: "Lilongwe" },
  { src: "/images/gallery/image9.jpeg",  tag: "Residential",   tagColor: "var(--gp-green)",  kw: "6 kW",   title: "Rooftop Panel Array",           location: "Blantyre" },
  { src: "/images/gallery/image10.jpeg", tag: "Commercial",    tagColor: "#0066cc",          kw: "20 kW",  title: "Office Building Install",       location: "Lilongwe" },
  { src: "/images/gallery/image11.jpeg", tag: "Industrial",    tagColor: "#b45309",          kw: "35 kW",  title: "Factory Solar Array",          location: "Kanengo" },
  { src: "/images/gallery/image12.jpeg", tag: "Energy Storage",tagColor: "#6d4c41",          kw: "10 kW",  title: "Battery Storage System",        location: "Lilongwe" },
 
  { src: "/images/gallery/image13.jpeg", tag: "Residential",   tagColor: "var(--gp-green)",  kw: "5 kW",   title: "Suburban Home Install",         location: "Area 43, Lilongwe" },
  { src: "/images/gallery/image14.jpeg", tag: "Commercial",    tagColor: "#0066cc",          kw: "18 kW",  title: "Retail Centre Rooftop",         location: "Blantyre" },
  { src: "/images/gallery/image15.jpeg", tag: "Residential",   tagColor: "var(--gp-green)",  kw: "4 kW",   title: "Rural Home System",             location: "Kasungu" },
  { src: "/images/gallery/image16.jpeg", tag: "Industrial",    tagColor: "#b45309",          kw: "60 kW",  title: "Large Industrial Array",        location: "Lilongwe" },
  { src: "/images/gallery/image17.jpeg", tag: "Commercial",    tagColor: "#0066cc",          kw: "12 kW",  title: "School Solar Project",          location: "Mzuzu" },

  { src: "/images/gallery/image19.jpeg", tag: "Residential",   tagColor: "var(--gp-green)",  kw: "3 kW",   title: "Compact Home Install",          location: "Zomba" },
  { src: "/images/gallery/image23.jpeg", tag: "Energy Storage",tagColor: "#6d4c41",          kw: "8 kW",   title: "Hybrid Inverter Setup",         location: "Lilongwe" },
  { src: "/images/gallery/image24.jpeg", tag: "Commercial",    tagColor: "#0066cc",          kw: "25 kW",  title: "Warehouse Rooftop",             location: "Kanengo" },
  { src: "/images/gallery/image25.jpeg", tag: "Residential",   tagColor: "var(--gp-green)",  kw: "7 kW",   title: "Family Home Array",             location: "Area 25, Lilongwe" },
 
  { src: "/images/gallery/image32.jpeg", tag: "Industrial",    tagColor: "#b45309",          kw: "40 kW",  title: "Industrial Rooftop System",     location: "Blantyre" },
  { src: "/images/gallery/image33.jpeg", tag: "Commercial",    tagColor: "#0066cc",          kw: "16 kW",  title: "Commercial Complex",            location: "Lilongwe" },
  { src: "/images/gallery/image35.jpeg", tag: "Residential",   tagColor: "var(--gp-green)",  kw: "5 kW",   title: "Residential Rooftop",           location: "Dedza" },
  { src: "/images/gallery/image36.jpeg", tag: "Energy Storage",tagColor: "#6d4c41",          kw: "6 kW",   title: "Solar & Battery Combo",         location: "Lilongwe" },
];

const FILTERS = ["All", "Residential", "Commercial", "Industrial", "Energy Storage"];

export default function GalleryPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter(p => p.tag === active);

  return (
    <div style={{ backgroundColor: "var(--gp-bg-page)" }}>

      {/* ── Hero ── */}
      <section style={{
        backgroundColor: "var(--gp-bg-card)",
        borderBottom: "1px solid var(--gp-border)",
        padding: "64px 0 56px",
      }}>
        <div className="gp-container">
          <span className="gp-eyebrow">Our work</span>
          <h1 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
            fontWeight: 800, color: "var(--gp-text-primary)",
            lineHeight: 1.15, margin: "0 0 16px",
            letterSpacing: "-0.02em", maxWidth: 560,
          }}>
            Real installations,{" "}
            <span style={{ color: "var(--gp-green)" }}>real results</span>
          </h1>
          <p style={{
            fontSize: "clamp(14px, 2vw, 16px)",
            color: "var(--gp-text-muted)", lineHeight: 1.7,
            margin: 0, maxWidth: 520,
          }}>
            Every project below was designed, installed, and supported by our team —
            from single homes to large commercial rooftops across Malawi.
          </p>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section style={{
        backgroundColor: "var(--gp-green-light)",
        borderBottom: "1px solid var(--gp-green-border)",
        padding: "18px 0",
      }}>
        <div className="gp-container" style={{
          display: "flex", flexWrap: "wrap", gap: "10px 36px", alignItems: "center",
        }}>
          {[
            { value: "50+",     label: "Projects completed" },
            { value: "800+ kW", label: "Total capacity installed" },
            { value: "6",       label: "Regions covered" },
            { value: "100%",    label: "Client satisfaction" },
          ].map(s => (
            <div key={s.label} style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
              <span style={{ fontSize: 18, fontWeight: 800, color: "var(--gp-green)" }}>{s.value}</span>
              <span style={{ fontSize: 13, color: "var(--gp-text-muted)" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Gallery ── */}
      <section style={{ padding: "52px 0 80px" }}>
        <div className="gp-container">

          {/* Filter pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
            {FILTERS.map(f => (
              <button
                key={f}
                onClick={() => setActive(f)}
                style={{
                  padding: "7px 20px", borderRadius: 100, fontSize: 13,
                  fontWeight: 600, cursor: "pointer", border: "1px solid",
                  transition: "all 0.15s",
                  backgroundColor: active === f ? "var(--gp-green)" : "var(--gp-bg-card)",
                  color:           active === f ? "#fff" : "var(--gp-text-muted)",
                  borderColor:     active === f ? "var(--gp-green)" : "var(--gp-border)",
                }}
              >
                {f}
                <span style={{
                  marginLeft: 7, fontSize: 11, fontWeight: 700,
                  opacity: 0.75,
                }}>
                  {f === "All" ? projects.length : projects.filter(p => p.tag === f).length}
                </span>
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gp-gallery-grid">
            {filtered.map((p) => (
              <div
                key={p.src}
                className="gp-gallery-card"
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 36px rgba(0,0,0,0.22)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.10)";
                }}
              >
                <img src={p.src} alt={p.title} className="gp-gallery-img" />
                <div className="gp-gallery-overlay" />
                <div className="gp-gallery-badges">
                  <span style={{
                    backgroundColor: p.tagColor, color: "#fff",
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", padding: "3px 10px", borderRadius: 100,
                  }}>{p.tag}</span>
                  <span style={{
                    backgroundColor: "rgba(0,0,0,0.45)", color: "#fff",
                    fontSize: 12, fontWeight: 800, padding: "3px 10px",
                    borderRadius: 100, backdropFilter: "blur(4px)",
                  }}>{p.kw}</span>
                </div>
                <div className="gp-gallery-info">
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: "0 0 3px" }}>{p.title}</p>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.72)", margin: 0 }}>📍 {p.location}</p>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0", color: "var(--gp-text-muted)" }}>
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section style={{ padding: "64px 0", backgroundColor: "var(--gp-bg-dark)" }}>
        <div className="gp-container" style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between", gap: 28,
        }}>
          <div style={{ maxWidth: 480 }}>
            <h2 style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800,
              color: "#fff", margin: "0 0 10px", letterSpacing: "-0.02em",
            }}>
              Want a system like these?
            </h2>
            <p style={{
              fontSize: "clamp(14px, 2vw, 15px)",
              color: "rgba(255,255,255,0.62)", margin: 0, lineHeight: 1.7,
            }}>
              Book a free consultation and we'll design the right system for your home or business.
            </p>
          </div>
          <Link href="/company_contact_details" className="gp-btn-accent">
            Get a free quote
          </Link>
        </div>
      </section>

      <style>{`
        .gp-gallery-grid {
          display: grid;
          gap: 14px;
          grid-template-columns: 1fr;
        }
        .gp-gallery-card {
          border-radius: 14px;
          overflow: hidden;
          position: relative;
          min-height: 220px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.10);
          transition: transform 0.22s, box-shadow 0.22s;
          cursor: pointer;
        }
        .gp-gallery-img {
          position: absolute;
          inset: 0; width: 100%; height: 100%;
          object-fit: cover; display: block;
        }
        .gp-gallery-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.68) 0%, transparent 55%);
        }
        .gp-gallery-badges {
          position: absolute;
          top: 12px; left: 12px; right: 12px;
          display: flex; justify-content: space-between; align-items: center;
        }
        .gp-gallery-info {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 14px 16px;
        }
        @media (min-width: 600px) {
          .gp-gallery-grid { grid-template-columns: repeat(2, 1fr); }
          .gp-gallery-card { min-height: 240px; }
        }
        @media (min-width: 1024px) {
          .gp-gallery-grid { grid-template-columns: repeat(3, 1fr); }
          .gp-gallery-card { min-height: 260px; }
        }
      `}</style>

    </div>
  );
}