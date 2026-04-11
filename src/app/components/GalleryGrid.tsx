"use client";
import { useState } from "react";
import Link from "next/link";

type Category = "residential" | "commercial" | "industrial";

type Project = {
  id: number;
  title: string;
  location: string;
  category: Category;
  kw: number;
  panels: number;
  year: number;
  description: string;
  beforeGradient: string;
  afterGradient: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Area 43 Family Home",
    location: "Lilongwe, Area 43",
    category: "residential",
    kw: 3.5,
    panels: 10,
    year: 2024,
    description:
      "Complete rooftop solar system with battery backup, eliminating load-shedding disruption for a family of six.",
    beforeGradient: "linear-gradient(135deg,#c9b99a 0%,#a89070 100%)",
    afterGradient: "linear-gradient(135deg,#2d6a4f 0%,#52b788 100%)",
  },
  {
    id: 2,
    title: "Shoprite Plaza Offices",
    location: "Lilongwe City Centre",
    category: "commercial",
    kw: 22,
    panels: 55,
    year: 2024,
    description:
      "Large-scale commercial installation cutting electricity bills by 70% and providing uninterrupted daytime power.",
    beforeGradient: "linear-gradient(135deg,#b0bec5 0%,#78909c 100%)",
    afterGradient: "linear-gradient(135deg,#1b4332 0%,#40916c 100%)",
  },
  {
    id: 3,
    title: "Kanengo Warehouse",
    location: "Kanengo Industrial Area",
    category: "industrial",
    kw: 48,
    panels: 120,
    year: 2023,
    description:
      "Industrial solar array powering cold-storage units, reducing diesel generator dependency by 85%.",
    beforeGradient: "linear-gradient(135deg,#9e9e9e 0%,#616161 100%)",
    afterGradient: "linear-gradient(135deg,#1a3a2a 0%,#52b788 100%)",
  },
  {
    id: 4,
    title: "Nyambadwe Residence",
    location: "Blantyre, Nyambadwe",
    category: "residential",
    kw: 5,
    panels: 14,
    year: 2023,
    description:
      "Premium residential system with smart monitoring, giving homeowners real-time energy usage data.",
    beforeGradient: "linear-gradient(135deg,#d4a373 0%,#b5835a 100%)",
    afterGradient: "linear-gradient(135deg,#2d6a4f 0%,#74c69d 100%)",
  },
  {
    id: 5,
    title: "Mchinji Road Clinic",
    location: "Lilongwe, Mchinji Road",
    category: "commercial",
    kw: 10,
    panels: 26,
    year: 2024,
    description:
      "Solar + battery system for a private clinic, ensuring critical medical equipment stays powered 24/7.",
    beforeGradient: "linear-gradient(135deg,#cfd8dc 0%,#90a4ae 100%)",
    afterGradient: "linear-gradient(135deg,#1b4332 0%,#95d5b2 100%)",
  },
  {
    id: 6,
    title: "Bunda College Hostel Block",
    location: "Lilongwe, Bunda",
    category: "commercial",
    kw: 15,
    panels: 38,
    year: 2023,
    description:
      "Student accommodation block fully powered by solar, reducing institutional energy costs significantly.",
    beforeGradient: "linear-gradient(135deg,#bcaaa4 0%,#8d6e63 100%)",
    afterGradient: "linear-gradient(135deg,#2d6a4f 0%,#52b788 100%)",
  },
];

const CATEGORY_LABEL: Record<Category, string> = {
  residential: "Residential",
  commercial: "Commercial",
  industrial: "Industrial",
};

const FILTERS = ["all", "residential", "commercial", "industrial"] as const;
type Filter = (typeof FILTERS)[number];

function PlaceholderImage({
  gradient,
  icon,
  label,
}: {
  gradient: string;
  icon: string;
  label: string;
}) {
  return (
    <div
      style={{
        background: gradient,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 8,
      }}
    >
      <span style={{ fontSize: 30 }}>{icon}</span>
      <span
        style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.85)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const [activeId, setActiveId] = useState<number | null>(null);
  const [tab, setTab] = useState<"before" | "after">("after");

  const filtered =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  const active = PROJECTS.find((p) => p.id === activeId) ?? null;

  return (
    <>
      {/* Filter Bar */}
      <section style={{ padding: "40px 0 0", backgroundColor: "var(--gp-bg-page)" }}>
        <div
          className="gp-container"
          style={{ display: "flex", gap: 8, flexWrap: "wrap" }}
        >
          {FILTERS.map((cat) => {
            const isActive = filter === cat;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: "8px 18px",
                  borderRadius: 8,
                  border: "1.5px solid",
                  borderColor: isActive ? "var(--gp-green)" : "var(--gp-border)",
                  background: isActive ? "var(--gp-green)" : "var(--gp-bg-card)",
                  color: isActive ? "#fff" : "var(--gp-text-muted)",
                  fontWeight: isActive ? 600 : 500,
                  fontSize: 13.5,
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                  textTransform: "capitalize",
                }}
              >
                {cat === "all" ? "All Projects" : CATEGORY_LABEL[cat as Category]}
              </button>
            );
          })}
        </div>
      </section>

      {/* Grid */}
      <section style={{ padding: "32px 0 80px", backgroundColor: "var(--gp-bg-page)" }}>
        <div
          className="gp-container"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20,
          }}
        >
          {filtered.map((project) => (
            <article
              key={project.id}
              className="gp-card"
              onClick={() => {
                setActiveId(project.id);
                setTab("after");
              }}
              style={{ cursor: "pointer", overflow: "hidden" }}
            >
              {/* Image placeholder */}
              <div style={{ height: 190, position: "relative" }}>
                <PlaceholderImage
                  gradient={project.afterGradient}
                  icon="⚡"
                  label="After Installation"
                />
                {/* Category badge */}
                <span
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    backgroundColor: "var(--gp-green)",
                    color: "#fff",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "3px 10px",
                    borderRadius: 100,
                  }}
                >
                  {CATEGORY_LABEL[project.category]}
                </span>
                {/* Before/after hint */}
                <span
                  style={{
                    position: "absolute",
                    bottom: 12,
                    right: 12,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "3px 10px",
                    borderRadius: 100,
                    backdropFilter: "blur(4px)",
                  }}
                >
                  Before &amp; After →
                </span>
              </div>

              {/* Card body */}
              <div style={{ padding: "20px 20px 22px" }}>
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "var(--gp-text-primary)",
                    margin: "0 0 4px",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "var(--gp-text-subtle)",
                    margin: "0 0 16px",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx={12} cy={10} r={3} />
                  </svg>
                  {project.location}
                </p>
                <div
                  style={{
                    display: "flex",
                    gap: 20,
                    paddingTop: 14,
                    borderTop: "1px solid var(--gp-border)",
                  }}
                >
                  {[
                    { value: `${project.kw} kW`, label: "System Size" },
                    { value: project.panels, label: "Panels" },
                    { value: project.year, label: "Year" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p
                        style={{
                          fontSize: 15,
                          fontWeight: 800,
                          color: "var(--gp-green)",
                          margin: 0,
                          lineHeight: 1,
                        }}
                      >
                        {s.value}
                      </p>
                      <p style={{ fontSize: 11, color: "var(--gp-text-subtle)", marginTop: 4 }}>
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {active && (
        <div
          onClick={() => setActiveId(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            backdropFilter: "blur(6px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="gp-card"
            style={{
              maxWidth: 660,
              width: "100%",
              overflow: "hidden",
              border: "none",
              boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
            }}
          >
            {/* Before / After image */}
            <div style={{ height: 260, position: "relative" }}>
              {tab === "before" ? (
                <PlaceholderImage
                  gradient={active.beforeGradient}
                  icon="🏠"
                  label="Before Installation"
                />
              ) : (
                <PlaceholderImage
                  gradient={active.afterGradient}
                  icon="⚡"
                  label="After Installation"
                />
              )}

              {/* Toggle */}
              <div
                style={{
                  position: "absolute",
                  bottom: 14,
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  background: "rgba(0,0,0,0.45)",
                  borderRadius: 8,
                  padding: 3,
                  gap: 3,
                  backdropFilter: "blur(8px)",
                }}
              >
                {(["before", "after"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    style={{
                      padding: "6px 16px",
                      borderRadius: 6,
                      border: "none",
                      background: tab === t ? "#fff" : "transparent",
                      color: tab === t ? "var(--gp-text-primary)" : "rgba(255,255,255,0.8)",
                      fontWeight: 600,
                      fontSize: 13,
                      cursor: "pointer",
                      textTransform: "capitalize",
                      transition: "all 0.18s",
                    }}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {/* Close */}
              <button
                onClick={() => setActiveId(null)}
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.45)",
                  border: "none",
                  color: "#fff",
                  fontSize: 18,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(4px)",
                  lineHeight: 1,
                }}
              >
                ×
              </button>
            </div>

            {/* Details */}
            <div style={{ padding: "22px 24px 24px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 10,
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: 800,
                      color: "var(--gp-text-primary)",
                      margin: 0,
                    }}
                  >
                    {active.title}
                  </h2>
                  <p style={{ fontSize: 13, color: "var(--gp-text-subtle)", marginTop: 3 }}>
                    📍 {active.location} · {active.year}
                  </p>
                </div>
                <span
                  style={{
                    backgroundColor: "var(--gp-green-light)",
                    color: "var(--gp-green)",
                    border: "1px solid var(--gp-green-border)",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    padding: "3px 10px",
                    borderRadius: 100,
                  }}
                >
                  {CATEGORY_LABEL[active.category]}
                </span>
              </div>

              <p
                style={{
                  fontSize: 13.5,
                  color: "var(--gp-text-muted)",
                  lineHeight: 1.65,
                  margin: "0 0 18px",
                }}
              >
                {active.description}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 24,
                  padding: "14px 0",
                  borderTop: "1px solid var(--gp-border)",
                  borderBottom: "1px solid var(--gp-border)",
                  marginBottom: 18,
                  flexWrap: "wrap",
                }}
              >
                {[
                  { label: "System Size", value: `${active.kw} kW` },
                  { label: "Panels Installed", value: active.panels },
                  { label: "Year Completed", value: active.year },
                ].map((s) => (
                  <div key={s.label}>
                    <p
                      style={{
                        fontSize: 17,
                        fontWeight: 800,
                        color: "var(--gp-green)",
                        margin: 0,
                        lineHeight: 1,
                      }}
                    >
                      {s.value}
                    </p>
                    <p style={{ fontSize: 11, color: "var(--gp-text-subtle)", marginTop: 4 }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              <Link href="/company_contact_details" className="gp-btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Get a Similar System →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}