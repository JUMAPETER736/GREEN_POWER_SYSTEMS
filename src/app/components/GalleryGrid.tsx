

"use client";
import { useState } from "react";

type Project = {
  id: number;
  title: string;
  location: string;
  category: "residential" | "commercial" | "industrial";
  kw: number;
  panels: number;
  beforeColor: string;   // placeholder gradient "before"
  afterColor: string;    // placeholder gradient "after"
  year: number;
  description: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Area 43 Family Home",
    location: "Lilongwe, Area 43",
    category: "residential",
    kw: 3.5,
    panels: 10,
    beforeColor: "linear-gradient(135deg,#c9b99a 0%,#a89070 100%)",
    afterColor: "linear-gradient(135deg,#2d6a4f 0%,#52b788 100%)",
    year: 2024,
    description:
      "Complete rooftop solar system with battery backup, eliminating load-shedding disruption for a family of six.",
  },
  {
    id: 2,
    title: "Shoprite Plaza Offices",
    location: "Lilongwe City Centre",
    category: "commercial",
    kw: 22,
    panels: 55,
    beforeColor: "linear-gradient(135deg,#b0bec5 0%,#78909c 100%)",
    afterColor: "linear-gradient(135deg,#1b4332 0%,#40916c 100%)",
    year: 2024,
    description:
      "Large-scale commercial installation cutting electricity bills by 70% and providing uninterrupted daytime power.",
  },
  {
    id: 3,
    title: "Kanengo Warehouse",
    location: "Kanengo Industrial Area",
    category: "industrial",
    kw: 48,
    panels: 120,
    beforeColor: "linear-gradient(135deg,#9e9e9e 0%,#616161 100%)",
    afterColor: "linear-gradient(135deg,#1a3a2a 0%,#52b788 100%)",
    year: 2023,
    description:
      "Industrial solar array powering cold-storage units, reducing diesel generator dependency by 85%.",
  },
  {
    id: 4,
    title: "Nyambadwe Residence",
    location: "Blantyre, Nyambadwe",
    category: "residential",
    kw: 5,
    panels: 14,
    beforeColor: "linear-gradient(135deg,#d4a373 0%,#b5835a 100%)",
    afterColor: "linear-gradient(135deg,#2d6a4f 0%,#74c69d 100%)",
    year: 2023,
    description:
      "Premium residential system with smart monitoring, giving homeowners real-time energy usage data.",
  },
  {
    id: 5,
    title: "Mchinji Road Clinic",
    location: "Lilongwe, Mchinji Road",
    category: "commercial",
    kw: 10,
    panels: 26,
    beforeColor: "linear-gradient(135deg,#cfd8dc 0%,#90a4ae 100%)",
    afterColor: "linear-gradient(135deg,#1b4332 0%,#95d5b2 100%)",
    year: 2024,
    description:
      "Solar + battery system for a private clinic, ensuring critical medical equipment stays powered 24/7.",
  },
  {
    id: 6,
    title: "Bunda College Hostel Block",
    location: "Lilongwe, Bunda",
    category: "commercial",
    kw: 15,
    panels: 38,
    beforeColor: "linear-gradient(135deg,#bcaaa4 0%,#8d6e63 100%)",
    afterColor: "linear-gradient(135deg,#2d6a4f 0%,#52b788 100%)",
    year: 2023,
    description:
      "Student accommodation block fully powered by solar, reducing institutional energy costs significantly.",
  },
];

const CATEGORIES = ["all", "residential", "commercial", "industrial"] as const;
type Category = (typeof CATEGORIES)[number];

function PlaceholderImage({
  gradient,
  label,
  icon,
}: {
  gradient: string;
  label: string;
  icon: string;
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
        color: "rgba(255,255,255,0.9)",
      }}
    >
      <span style={{ fontSize: 32 }}>{icon}</span>
      <span
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          opacity: 0.85,
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function GalleryGrid() {
  const [filter, setFilter] = useState<Category>("all");
  const [activeId, setActiveId] = useState<number | null>(null);
  const [tab, setTab] = useState<"before" | "after">("after");

  const filtered =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  const active = PROJECTS.find((p) => p.id === activeId) ?? null;

  const categoryLabel: Record<string, string> = {
    residential: "Residential",
    commercial: "Commercial",
    industrial: "Industrial",
  };

  const categoryBadgeColor: Record<string, string> = {
    residential: "#2d6a4f",
    commercial: "#1a4731",
    industrial: "#52b788",
  };

  return (
    <>
      {/* Filter Bar */}
      <section
        style={{
          padding: "40px 24px 0",
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          gap: 10,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: "9px 22px",
              borderRadius: 50,
              border: "2px solid",
              borderColor: filter === cat ? "var(--gp-green)" : "#d1d5db",
              background: filter === cat ? "var(--gp-green)" : "#fff",
              color: filter === cat ? "#fff" : "#374151",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              transition: "all 0.2s",
              textTransform: "capitalize",
            }}
          >
            {cat === "all" ? "All Projects" : categoryLabel[cat]}
          </button>
        ))}
      </section>

      {/* Stats Bar */}
      <section
        style={{
          maxWidth: 1200,
          margin: "24px auto 0",
          padding: "0 24px",
          display: "flex",
          gap: 32,
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {[
          { label: "Projects Completed", value: "50+" },
          { label: "kW Installed", value: "800+" },
          { label: "Happy Clients", value: "48" },
          { label: "Regions Covered", value: "6" },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "1.6rem",
                fontWeight: 800,
                color: "var(--gp-green)",
              }}
            >
              {stat.value}
            </div>
            <div style={{ fontSize: 13, color: "#6b7280", marginTop: 2 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      {/* Grid */}
      <section
        style={{
          maxWidth: 1200,
          margin: "40px auto 80px",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 28,
        }}
      >
        {filtered.map((project) => (
          <article
            key={project.id}
            onClick={() => {
              setActiveId(project.id);
              setTab("after");
            }}
            style={{
              background: "#fff",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
              cursor: "pointer",
              transition: "transform 0.22s, box-shadow 0.22s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-6px)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 12px 32px rgba(0,0,0,0.14)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow =
                "0 2px 16px rgba(0,0,0,0.08)";
            }}
          >
            {/* Image area */}
            <div style={{ position: "relative", height: 200 }}>
              <PlaceholderImage
                gradient={project.afterColor}
                label="After Installation"
                icon="⚡"
              />
              {/* Category badge */}
              <span
                style={{
                  position: "absolute",
                  top: 14,
                  left: 14,
                  background: categoryBadgeColor[project.category],
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "4px 10px",
                  borderRadius: 50,
                }}
              >
                {categoryLabel[project.category]}
              </span>
              {/* View badge */}
              <span
                style={{
                  position: "absolute",
                  bottom: 14,
                  right: 14,
                  background: "rgba(0,0,0,0.55)",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "4px 10px",
                  borderRadius: 50,
                  backdropFilter: "blur(4px)",
                }}
              >
                Before &amp; After →
              </span>
            </div>

            {/* Card body */}
            <div style={{ padding: "20px 22px 22px" }}>
              <h3
                style={{
                  fontSize: "1.05rem",
                  fontWeight: 700,
                  color: "#111827",
                  marginBottom: 4,
                }}
              >
                {project.title}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  color: "#6b7280",
                  marginBottom: 14,
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <svg
                  width={13}
                  height={13}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                {project.location}
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 16,
                  borderTop: "1px solid #f3f4f6",
                  paddingTop: 14,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--gp-green)",
                    }}
                  >
                    {project.kw} kW
                  </div>
                  <div style={{ fontSize: 11, color: "#9ca3af" }}>
                    System Size
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--gp-green)",
                    }}
                  >
                    {project.panels}
                  </div>
                  <div style={{ fontSize: 11, color: "#9ca3af" }}>Panels</div>
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--gp-green)",
                    }}
                  >
                    {project.year}
                  </div>
                  <div style={{ fontSize: 11, color: "#9ca3af" }}>Year</div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* CTA Banner */}
      <section
        style={{
          background: "linear-gradient(135deg, #1a4731 0%, var(--gp-green) 100%)",
          padding: "56px 24px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 12 }}>
          Ready to be our next success story?
        </h2>
        <p style={{ opacity: 0.85, marginBottom: 28, maxWidth: 480, margin: "0 auto 28px" }}>
          Get a free site assessment and custom quote for your home or business.
        </p>
        
          href="/contact"
          style={{
            background: "#fff",
            color: "var(--gp-green)",
            fontWeight: 700,
            padding: "13px 32px",
            borderRadius: 50,
            textDecoration: "none",
            fontSize: "0.95rem",
            display: "inline-block",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLElement).style.transform =
              "translateY(-2px)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLElement).style.transform = "translateY(0)")
          }
        >
          Get Your Free Quote
        </a>
      </section>

      {/* Lightbox */}
      {active && (
        <div
          onClick={() => setActiveId(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
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
            style={{
              background: "#fff",
              borderRadius: 20,
              overflow: "hidden",
              maxWidth: 680,
              width: "100%",
              boxShadow: "0 32px 80px rgba(0,0,0,0.35)",
            }}
          >
            {/* Before/After toggle */}
            <div style={{ position: "relative", height: 280 }}>
              {tab === "before" ? (
                <PlaceholderImage
                  gradient={active.beforeColor}
                  label="Before Installation"
                  icon="🏠"
                />
              ) : (
                <PlaceholderImage
                  gradient={active.afterColor}
                  label="After Installation"
                  icon="⚡"
                />
              )}
              {/* Toggle buttons */}
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  background: "rgba(0,0,0,0.5)",
                  borderRadius: 50,
                  padding: 4,
                  gap: 4,
                  backdropFilter: "blur(8px)",
                }}
              >
                {(["before", "after"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    style={{
                      padding: "6px 18px",
                      borderRadius: 50,
                      border: "none",
                      background: tab === t ? "#fff" : "transparent",
                      color: tab === t ? "#111" : "rgba(255,255,255,0.85)",
                      fontWeight: 700,
                      fontSize: 13,
                      cursor: "pointer",
                      textTransform: "capitalize",
                      transition: "all 0.2s",
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
                  top: 14,
                  right: 14,
                  width: 34,
                  height: 34,
                  borderRadius: "50%",
                  background: "rgba(0,0,0,0.5)",
                  border: "none",
                  color: "#fff",
                  fontSize: 18,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(4px)",
                }}
              >
                ×
              </button>
            </div>

            {/* Details */}
            <div style={{ padding: "24px 28px 28px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: 8,
                  marginBottom: 12,
                }}
              >
                <div>
                  <h2
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 800,
                      color: "#111827",
                    }}
                  >
                    {active.title}
                  </h2>
                  <p style={{ fontSize: 13, color: "#6b7280", marginTop: 2 }}>
                    📍 {active.location} · {active.year}
                  </p>
                </div>
                <span
                  style={{
                    background: categoryBadgeColor[active.category],
                    color: "#fff",
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 12px",
                    borderRadius: 50,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {categoryLabel[active.category]}
                </span>
              </div>

              <p
                style={{
                  fontSize: "0.95rem",
                  color: "#374151",
                  lineHeight: 1.65,
                  marginBottom: 20,
                }}
              >
                {active.description}
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 16,
                  padding: "16px 0",
                  borderTop: "1px solid #f3f4f6",
                  borderBottom: "1px solid #f3f4f6",
                  marginBottom: 20,
                  flexWrap: "wrap",
                }}
              >
                {[
                  { label: "System Size", value: `${active.kw} kW` },
                  { label: "Panels Installed", value: active.panels },
                  { label: "Installation Year", value: active.year },
                ].map((s) => (
                  <div key={s.label} style={{ flex: 1, minWidth: 100 }}>
                    <div
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 800,
                        color: "var(--gp-green)",
                      }}
                    >
                      {s.value}
                    </div>
                    <div style={{ fontSize: 12, color: "#9ca3af", marginTop: 2 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              
                href="/contact"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "var(--gp-green)",
                  color: "#fff",
                  fontWeight: 700,
                  padding: "13px",
                  borderRadius: 10,
                  textDecoration: "none",
                  fontSize: "0.95rem",
                }}
              >
                Get a Similar System →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}