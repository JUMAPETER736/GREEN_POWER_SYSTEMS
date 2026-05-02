"use client";
import Link from "next/link";
import { useState } from "react";

const charityImages = [
  {
    src: "/images/community_support/image0.jpeg",
    alt: "Green Power Systems team presenting donations at Chiwamba Hospital",
    caption: "Handing over essentials to hospital staff",
  },
  {
    src: "/images/community_support/image1.jpeg",
    alt: "Donation items laid out ready for distribution",
    caption: "Donations ready for distribution",
  },
  {
    src: "/images/community_support/image2.jpeg",
    alt: "Green Power Systems staff at Chiwamba Hospital maternity ward",
    caption: "Visiting the maternity & antenatal ward",
  },
];

const donated = [
  {
    icon: "M12 3c-1.2 5.4-5 7.5-5 12a5 5 0 0 0 10 0c0-4.5-3.8-6.6-5-12z",
    label: "Pampers (Nappies)",
    desc: "Packs of nappies for newborns and infants in the under-5 ward.",
    category: "essential",
  },
  {
    icon: "M7 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-4-4H7zm5 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
    label: "Bathing Soap",
    desc: "Hygiene soap to keep mothers and their newborns clean and healthy during their hospital stay.",
    category: "essential",
  },
  {
    icon: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2v-4M9 21H5a2 2 0 0 1-2-2v-4m0 0h18",
    label: "Baby Oil (Gel)",
    desc: "Gentle baby oil gel for moisturising and caring for the delicate skin of newborns.",
    category: "essential",
  },
  {
    icon: "M3 7h18M3 7a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M3 7V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2",
    label: "Pails (Buckets)",
    desc: "Sturdy pails provided for washing, bathing, and general hygiene use on the ward.",
    category: "essential",
  },
  {
    icon: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
    label: "Sugar",
    desc: "Bags of sugar donated to help provide energy and basic nutritional support to mothers in care.",
    category: "nutrition",
  },
  {
    icon: "M7 16V4m0 0L3 8m4-4 4 4M17 8v12m0 0 4-4m-4 4-4-4",
    label: "Pegs",
    desc: "Pegs for drying baby clothing and linens — a small but practical necessity for new mothers.",
    category: "essential",
  },
  {
    icon: "M4.318 6.318a4.5 4.5 0 0 0 0 6.364L12 20.364l7.682-7.682a4.5 4.5 0 0 0-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 0 0-6.364 0z",
    label: "Spiritual & Emotional Support",
    desc: "Beyond physical items, our team spent time with the mothers — offering prayers, encouragement, and a compassionate presence to lift their spirits during a vulnerable time.",
    category: "support",
  },
];

export default function CompanyCommunitySupport() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <div style={{ backgroundColor: "var(--gp-bg-page)", overflowX: "hidden", width: "100%" }}>

      {/* ── Hero ── */}
      <div className="gp-page-hero">
        <div className="gp-container">
          <span className="gp-eyebrow">Community Care</span>
          <h1
            className="gp-section-title"
            style={{ width: "100%", wordBreak: "break-word" }}
          >
            <span style={{ color: "var(--gp-green)" }}>Giving back to our community</span>
          </h1>
          <p className="gp-section-sub" style={{ marginTop: 14, wordBreak: "break-word" }}>
            At Green Power Systems Limited, we believe that powering communities goes beyond solar panels.
            We are committed to the wellbeing of the most vulnerable in society — especially mothers and young children.
          </p>
        </div>
      </div>

      {/* ── Story + Donated items ── */}
      <section style={{ padding: "clamp(48px, 8vw, 80px) 0", backgroundColor: "var(--gp-bg-page)" }}>
        <div className="gp-container">
          <div className="cs-two-col">

            {/* Left: story */}
            <div className="cs-left-panel">
              <span className="gp-eyebrow">Chiwamba Hospital Visit</span>
              <h2
                style={{
                  fontSize: "clamp(1.3rem, 3vw, 1.9rem)",
                  fontWeight: 800,
                  color: "var(--gp-text-primary)",
                  margin: "8px 0 0",
                  letterSpacing: "-0.01em",
                  wordBreak: "break-word",
                }}
              >
                A visit to Chiwamba Hospital, Lilongwe
              </h2>
              <p style={{ fontSize: "clamp(14px, 2vw, 15.5px)", color: "var(--gp-text-muted)", lineHeight: 1.8, marginBottom: 16, marginTop: 14, wordBreak: "break-word" }}>
                Our team visited <strong style={{ color: "var(--gp-text-primary)" }}>Chiwamba Hospital</strong> in Lilongwe,
                Malawi — a facility that serves thousands of families, including a dedicated
                <strong style={{ color: "var(--gp-text-primary)" }}> Under-5 Department</strong> caring for
                pregnant women and mothers with young children.
              </p>
              <p style={{ fontSize: "clamp(14px, 2vw, 15.5px)", color: "var(--gp-text-muted)", lineHeight: 1.8, marginBottom: 16, wordBreak: "break-word" }}>
                Recognising the daily challenges these families face, our staff came bearing a range of
                essential items — pampers, soap, baby oil (gel), pails, sugar, and pegs — donated
                directly to the mothers and babies receiving care in the ward.
              </p>
              <p style={{ fontSize: "clamp(14px, 2vw, 15.5px)", color: "var(--gp-text-muted)", lineHeight: 1.8, marginBottom: 0, wordBreak: "break-word" }}>
                This is part of our ongoing commitment: as we harness the sun's energy to power homes and
                businesses, we equally strive to power lives with compassion, dignity, and care.
              </p>

              <div style={{ marginTop: "auto", paddingTop: 24 }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "10px 18px",
                  borderRadius: 12,
                  backgroundColor: "var(--gp-green-light)",
                  border: "1px solid var(--gp-green-border)",
                  alignSelf: "flex-start",
                }}>
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none"
                    stroke="var(--gp-green)" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                    <path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  </svg>
                  <span style={{ fontSize: 13.5, fontWeight: 600, color: "var(--gp-green)" }}>
                    Chiwamba Hospital · Lilongwe, Malawi
                  </span>
                </div>
              </div>
            </div>

            {/* Right: donated items */}
            <div className="cs-right-panel">
              <span className="gp-eyebrow">What we donated</span>
              <h2
                style={{
                  fontSize: "clamp(1.3rem, 3vw, 1.9rem)",
                  fontWeight: 800,
                  color: "var(--gp-text-primary)",
                  margin: "8px 0 0",
                  letterSpacing: "-0.01em",
                  wordBreak: "break-word",
                }}
              >
                Items given to mothers &amp; babies
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1, marginTop: 14 }}>
                {donated.map(({ icon, label, desc, category }) => (
                  <div key={label} className="gp-card" style={{
                    padding: "11px 14px", display: "flex", gap: 12, alignItems: "flex-start",
                    ...(category === "support" ? {
                      borderLeft: "4px solid #7c3aed",
                      backgroundColor: "rgba(124,58,237,0.04)",
                    } : {}),
                  }}>
                    <div className="gp-icon-badge" style={{
                      flexShrink: 0, marginTop: 1, width: 32, height: 32,
                      ...(category === "support" ? { backgroundColor: "rgba(124,58,237,0.1)" } : {}),
                    }}>
                      <svg width={16} height={16} viewBox="0 0 24 24" fill="none"
                        stroke={category === "support" ? "#7c3aed" : "var(--gp-green)"}
                        strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                        <path d={icon} />
                      </svg>
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <p style={{ fontWeight: 700, fontSize: "clamp(12.5px, 1.8vw, 13.5px)", color: "var(--gp-text-primary)", margin: "0 0 2px", wordBreak: "break-word" }}>{label}</p>
                      <p style={{ fontSize: "clamp(11.5px, 1.6vw, 12.5px)", color: "var(--gp-text-muted)", lineHeight: 1.55, margin: 0, wordBreak: "break-word" }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Photo gallery ── */}
      <section style={{
        padding: "clamp(48px, 8vw, 80px) 0",
        backgroundColor: "var(--gp-bg-section)",
        borderTop: "1px solid var(--gp-border)",
        borderBottom: "1px solid var(--gp-border)",
      }}>
        <div className="gp-container">
          <span className="gp-eyebrow">Photos from the visit</span>
          <h2
            style={{
              fontSize: "clamp(1.3rem, 3vw, 1.9rem)",
              fontWeight: 800,
              color: "var(--gp-text-primary)",
              margin: "8px 0 0",
              letterSpacing: "-0.01em",
              wordBreak: "break-word",
            }}
          >
            Moments from Chiwamba Hospital
          </h2>
          <div className="cs-gallery-grid" style={{ marginTop: 28 }}>
            {charityImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="cs-gallery-btn"
                aria-label={`View photo: ${img.caption}`}
              >
                <img src={img.src} alt={img.alt} className="cs-gallery-img" />
                <div className="cs-gallery-overlay" />
                <div className="cs-gallery-caption">
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#fff", margin: 0 }}>{img.caption}</p>
                </div>
                <div className="cs-gallery-zoom">
                  <svg width={14} height={14} viewBox="0 0 24 24" fill="none"
                    stroke="#fff" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35M11 8v6M8 11h6" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "clamp(48px, 8vw, 72px) 0", backgroundColor: "var(--gp-bg-dark)" }}>
        <div className="gp-container cs-cta-inner">
          <div style={{ maxWidth: 520, minWidth: 0 }}>
            <h2 style={{
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 800, color: "#fff",
              margin: "0 0 12px", letterSpacing: "-0.01em",
              wordBreak: "break-word",
            }}>
              More than energy — we power communities
            </h2>
            <p style={{
              fontSize: "clamp(13px, 2vw, 15px)",
              color: "rgba(255,255,255,0.62)",
              margin: 0, lineHeight: 1.7,
              wordBreak: "break-word",
            }}>
              Interested in partnering with us for future community initiatives? We welcome collaborations
              with hospitals, schools, and organisations across Malawi.
            </p>
          </div>
          <Link href="/company_contact_details" className="gp-btn-accent">
            Partner with Us
          </Link>
        </div>
      </section>

      {/* ── Lightbox ── */}
      {lightbox !== null && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed", inset: 0, zIndex: 200,
            backgroundColor: "rgba(0,0,0,0.88)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "1rem",
            backdropFilter: "blur(6px)",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              position: "relative", maxWidth: 820, width: "100%",
              borderRadius: 16, overflow: "hidden",
              boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
            }}
          >
            <img
              src={charityImages[lightbox].src}
              alt={charityImages[lightbox].alt}
              style={{ width: "100%", display: "block", maxHeight: "80vh", objectFit: "contain" }}
            />
            <div style={{
              position: "absolute", bottom: 0, left: 0, right: 0,
              padding: "16px 20px",
              background: "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
            }}>
              <p style={{ color: "#fff", margin: 0, fontSize: 14, fontWeight: 600 }}>
                {charityImages[lightbox].caption}
              </p>
            </div>
            {lightbox > 0 && (
              <button onClick={() => setLightbox(lightbox - 1)} style={navBtnStyle("left")}>‹</button>
            )}
            {lightbox < charityImages.length - 1 && (
              <button onClick={() => setLightbox(lightbox + 1)} style={navBtnStyle("right")}>›</button>
            )}
            <button
              onClick={() => setLightbox(null)}
              style={{
                position: "absolute", top: 12, right: 12,
                background: "rgba(0,0,0,0.5)", border: "none",
                color: "#fff", fontSize: 20, cursor: "pointer",
                borderRadius: 8, width: 36, height: 36,
                display: "flex", alignItems: "center", justifyContent: "center",
                backdropFilter: "blur(4px)",
              }}
              aria-label="Close"
            >✕</button>
          </div>
        </div>
      )}

      {/* ── Styles ── */}
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

        /* ── Two-col layout ── */
        .cs-two-col {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }
        .cs-left-panel,
        .cs-right-panel {
          width: 100%;
          min-width: 0;
        }
        @media (min-width: 768px) {
          .cs-two-col {
            flex-direction: row;
            align-items: stretch;
            gap: 2rem;
          }
          .cs-left-panel {
            flex: 1 1 0;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            background: var(--gp-bg-card);
            border: 1px solid var(--gp-border);
            border-radius: 16px;
            padding: clamp(22px, 3vw, 32px);
          }
          .cs-right-panel {
            flex: 1 1 0;
            display: flex;
            flex-direction: column;
          }
        }
        @media (min-width: 1024px) {
          .cs-two-col {
            gap: 2.5rem;
          }
        }

        /* ── Gallery ── */
        .cs-gallery-grid {
          display: grid;
          gap: 14px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 600px) {
          .cs-gallery-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 1024px) {
          .cs-gallery-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .cs-gallery-btn {
          border: none;
          padding: 0;
          cursor: pointer;
          border-radius: 14px;
          overflow: hidden;
          position: relative;
          min-height: 200px;
          display: block;
          width: 100%;
          box-shadow: 0 2px 12px rgba(0,0,0,0.10);
          transition: transform 0.22s, box-shadow 0.22s;
        }
        @media (min-width: 600px) {
          .cs-gallery-btn { min-height: 230px; }
        }
        @media (min-width: 1024px) {
          .cs-gallery-btn { min-height: 260px; }
        }
        .cs-gallery-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 36px rgba(0,0,0,0.18);
        }
        .cs-gallery-img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; display: block;
        }
        .cs-gallery-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%);
        }
        .cs-gallery-caption {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 14px 16px;
        }
        .cs-gallery-zoom {
          position: absolute; top: 12px; right: 12px;
          background-color: rgba(0,0,0,0.4);
          border-radius: 8px; padding: 5px 7px;
          backdrop-filter: blur(4px);
        }

        /* ── CTA ── */
        .cs-cta-inner {
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: flex-start;
        }
        @media (min-width: 640px) {
          .cs-cta-inner {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
          }
        }
      `}</style>

    </div>
  );
}

function navBtnStyle(side: "left" | "right"): React.CSSProperties {
  return {
    position: "absolute",
    top: "50%",
    [side]: 12,
    transform: "translateY(-50%)",
    background: "rgba(0,0,0,0.5)",
    border: "none",
    color: "#fff",
    fontSize: 28,
    cursor: "pointer",
    borderRadius: 8,
    width: 44,
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(4px)",
  };
}