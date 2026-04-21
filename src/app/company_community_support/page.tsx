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
    alt: "Donation items — pampers, soap, and soya pieces laid out",
    caption: "Pampers, soap & soya pieces ready for distribution",
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
    <div style={{ backgroundColor: "var(--gp-bg-page)" }}>

      {/* ── Hero ── */}
      <section style={{
        backgroundColor: "var(--gp-bg-card)",
        borderBottom: "1px solid var(--gp-border)",
        padding: "72px 0 60px",
      }}>
        <div className="gp-container">
          <span className="gp-eyebrow">Community Care</span>
          <h1 style={{
            fontSize: "clamp(1.9rem, 5vw, 3rem)",
            fontWeight: 800,
            color: "var(--gp-text-primary)",
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            margin: "10px 0 18px",
            maxWidth: 640,
          }}>
            Giving back to our{" "}
            <span style={{ color: "var(--gp-green)" }}>community</span>
          </h1>
          <p style={{
            fontSize: "clamp(15px, 2vw, 17px)",
            color: "var(--gp-text-muted)",
            lineHeight: 1.75,
            maxWidth: 620,
            margin: 0,
          }}>
            At Green Power Systems Limited, we believe that powering communities goes beyond solar panels.
            We are committed to the wellbeing of the most vulnerable in society — especially mothers and young children.
          </p>
        </div>
      </section>

      {/* ── Story section ── */}
      <section style={{ padding: "72px 0", backgroundColor: "var(--gp-bg-page)" }}>
        <div className="gp-container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))",
            gap: "3rem",
            alignItems: "start",
          }}>

            {/* Left — story text, sticky so it stays in view while right column scrolls */}
            <div style={{ position: "sticky", top: 88 }}>
              <span className="gp-eyebrow">Chiwamba Hospital Visit</span>
              <h2 className="gp-section-title">A visit to Chiwamba Hospital, Lilongwe</h2>
              <p style={{ fontSize: 15.5, color: "var(--gp-text-muted)", lineHeight: 1.8, marginBottom: 16 }}>
                Our team visited <strong style={{ color: "var(--gp-text-primary)" }}>Chiwamba Hospital</strong> in Lilongwe,
                Malawi — a facility that serves thousands of families, including a dedicated
                <strong style={{ color: "var(--gp-text-primary)" }}> Under-5 Department</strong> caring for
                pregnant women and mothers with young children.
              </p>
              <p style={{ fontSize: 15.5, color: "var(--gp-text-muted)", lineHeight: 1.8, marginBottom: 16 }}>
                Recognising the daily challenges these families face, our staff came bearing a range of
                essential items — pampers, soap, baby oil (gel), pails, sugar, and pegs — donated
                directly to the mothers and babies receiving care in the ward.
              </p>
              <p style={{ fontSize: 15.5, color: "var(--gp-text-muted)", lineHeight: 1.8 }}>
                This is part of our ongoing commitment: as we harness the sun's energy to power homes and
                businesses, we equally strive to power lives with compassion, dignity, and care.
              </p>

              {/* Location badge */}
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                marginTop: 28, padding: "10px 18px",
                borderRadius: 12,
                backgroundColor: "var(--gp-green-light)",
                border: "1px solid var(--gp-green-border)",
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

            {/* Right — donated items list */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span className="gp-eyebrow">What we donated</span>
              <h2 className="gp-section-title">Items given to mothers &amp; babies</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {donated.map(({ icon, label, desc, category }) => (
                  <div key={label} className="gp-card" style={{
                    padding: "18px 20px", display: "flex", gap: 16, alignItems: "flex-start",
                    ...(category === "support" ? {
                      borderLeft: "4px solid #7c3aed",
                      backgroundColor: "rgba(124,58,237,0.04)",
                    } : category === "nutrition" ? {
                      borderLeft: "4px solid var(--gp-green)",
                    } : {}),
                  }}>
                    <div className="gp-icon-badge" style={{
                      flexShrink: 0, marginTop: 2,
                      ...(category === "support" ? { backgroundColor: "rgba(124,58,237,0.1)" } : {}),
                    }}>
                      <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                        stroke={category === "support" ? "#7c3aed" : "var(--gp-green)"}
                        strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                        <path d={icon} />
                      </svg>
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: 14.5, color: "var(--gp-text-primary)", margin: "0 0 5px" }}>{label}</p>
                      <p style={{ fontSize: 13.5, color: "var(--gp-text-muted)", lineHeight: 1.65, margin: 0 }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Beneficiary highlight */}
              <div style={{
                marginTop: 20, padding: "16px 20px",
                borderRadius: 12, borderLeft: "4px solid var(--gp-green)",
                backgroundColor: "var(--gp-green-light)",
              }}>
                <p style={{ fontSize: 13.5, color: "var(--gp-text-muted)", lineHeight: 1.7, margin: 0 }}>
                  <strong style={{ color: "var(--gp-text-primary)" }}>Beneficiaries:</strong> Pregnant women
                  and mothers with children under 5 years old admitted in the Under-5 Department at Chiwamba Hospital.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Photo gallery ── */}
      <section style={{
        padding: "72px 0",
        backgroundColor: "var(--gp-bg-section)",
        borderTop: "1px solid var(--gp-border)",
        borderBottom: "1px solid var(--gp-border)",
      }}>
        <div className="gp-container">
          <span className="gp-eyebrow">Photos from the visit</span>
          <h2 className="gp-section-title">Moments from Chiwamba Hospital</h2>

          <div style={{
            display: "grid",
            gap: 14,
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          }}>
            {charityImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                style={{
                  border: "none", padding: 0, cursor: "pointer",
                  borderRadius: 14, overflow: "hidden",
                  position: "relative", minHeight: 220,
                  display: "block", width: "100%",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                  transition: "transform 0.22s, box-shadow 0.22s",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 36px rgba(0,0,0,0.18)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.10)";
                }}
                aria-label={`View photo: ${img.caption}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    position: "absolute", inset: 0,
                    width: "100%", height: "100%",
                    objectFit: "cover", display: "block",
                  }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)",
                }} />
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  padding: "14px 16px",
                }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#fff", margin: 0 }}>{img.caption}</p>
                </div>
                <div style={{
                  position: "absolute", top: 12, right: 12,
                  backgroundColor: "rgba(0,0,0,0.4)",
                  borderRadius: 8, padding: "5px 7px",
                  backdropFilter: "blur(4px)",
                }}>
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
      <section style={{ padding: "72px 0", backgroundColor: "var(--gp-bg-dark)" }}>
        <div className="gp-container" style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between", gap: 28,
        }}>
          <div style={{ maxWidth: 520 }}>
            <h2 style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.2rem)",
              fontWeight: 800, color: "#fff",
              margin: "0 0 10px", letterSpacing: "-0.02em",
            }}>
              More than energy — we power communities
            </h2>
            <p style={{
              fontSize: "clamp(14px, 2vw, 16px)",
              color: "rgba(255,255,255,0.62)",
              margin: 0, lineHeight: 1.7,
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
            padding: "1.5rem",
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