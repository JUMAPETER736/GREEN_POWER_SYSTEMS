

"use client";
import Link from "next/link";
import { useState } from "react";
 
const charityImages = [
  {
    src: "/images/charity_work/image10.jpeg",
    alt: "Green Power Systems team presenting donations at Chiwamba Hospital",
    caption: "Handing over essentials to hospital staff",
  },
  {
    src: "/images/charity_work/image2 (1).jpeg",
    alt: "Team with mothers and babies at Chiwamba Hospital under-5 ward",
    caption: "With mothers in the Under-5 Department",
  },
  {
    src: "/images/charity_work/image3 (1).jpeg",
    alt: "Donation items — pampers, soap, and soya pieces laid out",
    caption: "Pampers, soap & soya pieces ready for distribution",
  },
  {
    src: "/images/charity_work/image5.jpeg",
    alt: "Green Power Systems staff at Chiwamba Hospital maternity ward",
    caption: "Visiting the maternity & antenatal ward",
  },
  {
    src: "/images/charity_work/image8.jpeg",
    alt: "Company representatives with pregnant mothers at Chiwamba Hospital Lilongwe",
    caption: "Supporting expectant mothers at Chiwamba",
  },
];
 
const donated = [
  {
    icon: "M12 3c-1.2 5.4-5 7.5-5 12a5 5 0 0 0 10 0c0-4.5-3.8-6.6-5-12z",
    label: "Pampers (Nappies)",
    desc: "Packs of nappies for newborns and infants in the under-5 ward.",
  },
  {
    icon: "M7 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-4-4H7zm5 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6z",
    label: "Bathing Soap",
    desc: "Hygiene soap for mothers and their newborns during hospital stays.",
  },
  {
    icon: "M3 6h18M3 12h18M3 18h18",
    label: "Soya Pieces",
    desc: "Nutritious soya pieces to support the dietary needs of new and expectant mothers.",
  },
];

xport default function CompanyCharityWork() {
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
            {/* Story text */}
            <div>
              <span className="gp-eyebrow">Chiwamba Hospital Visit</span>
              <h2 className="gp-section-title">A visit to Chiwamba Hospital, Lilongwe</h2>
              <p style={{ fontSize: 15.5, color: "var(--gp-text-muted)", lineHeight: 1.8, marginBottom: 16 }}>
                Our team visited <strong style={{ color: "var(--gp-text-primary)" }}>Chiwamba Hospital</strong> in Lilongwe,
                Malawi — a facility that serves thousands of families, including a dedicated
                <strong style={{ color: "var(--gp-text-primary)" }}> Under-5 Department</strong> caring for
                pregnant women and mothers with young children.
              </p>
              <p style={{ fontSize: 15.5, color: "var(--gp-text-muted)", lineHeight: 1.8, marginBottom: 16 }}>
                Recognising the daily challenges these families face, our staff came bearing essential items
                — pampers (nappies), bathing soap, and soya pieces — donated directly to the mothers and
                babies receiving care in the ward.
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
 
 