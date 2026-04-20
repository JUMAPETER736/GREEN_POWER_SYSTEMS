"use client";
import { useState } from "react";
import Link from "next/link";

type Category = "residential" | "commercial" | "industrial" | "community";

type Project = {
  id: number;
  title: string;
  location: string;
  category: Category;
  kw: number;
  panels: number;
  year: number;
  description: string;
  images: string[];
};

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Large Commercial Rooftop",
    location: "Lilongwe",
    category: "commercial",
    kw: 22,
    panels: 55,
    year: 2024,
    description:
      "Large-scale commercial rooftop installation by our certified team. Panels mounted across the full roof surface, cutting electricity bills by 70% and providing uninterrupted daytime power.",
    images: [
      "/images/gallery/image1.jpeg",
      "/images/gallery/image0.jpeg",
      "/images/gallery/image9.jpeg",
    ],
  },
  {
    id: 2,
    title: "Rural Rooftop Array",
    location: "Dedza District",
    category: "residential",
    kw: 8,
    panels: 20,
    year: 2024,
    description:
      "Completed rooftop solar array on a rural home, providing reliable off-grid energy with stunning views of the Malawian landscape.",
    images: [
      "/images/gallery/image3.jpeg",
      "/images/gallery/image15.jpeg",
      "/images/gallery/image12.jpeg",
    ],
  },
  {
    id: 3,
    title: "Inverter & Battery System",
    location: "Lilongwe",
    category: "residential",
    kw: 5,
    panels: 14,
    year: 2024,
    description:
      "Indoor SRNE inverter and Dyness lithium battery storage system installation, delivering reliable backup power and smart energy management.",
    images: [
      "/images/gallery/image4.jpeg",
      "/images/gallery/image7.jpeg",
    ],
  },
  {
    id: 4,
    title: "Rooftop Panel Installation",
    location: "Lilongwe",
    category: "commercial",
    kw: 15,
    panels: 38,
    year: 2024,
    description:
      "Professional team fitting and aligning panels on a commercial rooftop at golden hour. Precision mounting for maximum sun exposure throughout the day.",
    images: [
      "/images/gallery/image8.jpeg",
      "/images/gallery/image11.jpeg",
      "/images/gallery/image10.jpeg",
    ],
  },
  {
    id: 5,
    title: "Community Outreach & CSR",
    location: "Lilongwe",
    category: "community",
    kw: 0,
    panels: 0,
    year: 2024,
    description:
      "Green Power Systems team conducting community outreach — distributing supplies and engaging with local families as part of our corporate social responsibility programme.",
    images: [
      "/images/gallery/image14.jpeg",
    ],
  },
  {
    id: 6,
    title: "Indoor Inverter Setup",
    location: "Lilongwe",
    category: "residential",
    kw: 3.5,
    panels: 10,
    year: 2023,
    description:
      "Inverter and distribution board installation inside a residential property. Clean, organised wiring with a Puresolar inverter and breaker panel.",
    images: [
      "/images/gallery/image13.jpeg",
      "/images/gallery/image19.jpeg",
    ],
  },
  {
    id: 7,
    title: "Industrial Warehouse Array",
    location: "Kanengo Industrial Area",
    category: "industrial",
    kw: 48,
    panels: 120,
    year: 2023,
    description:
      "Massive industrial solar array powering cold-storage and warehouse operations. Reducing diesel generator dependency by 85% with high-capacity panels across the entire roof.",
    images: [
      "/images/gallery/image22.jpeg",
      "/images/gallery/image23.jpeg",
      "/images/gallery/image24.jpeg",
    ],
  },
  {
    id: 8,
    title: "Residential System Install",
    location: "Lilongwe, Area 43",
    category: "residential",
    kw: 4,
    panels: 12,
    year: 2023,
    description:
      "Full residential solar system including rooftop panels and indoor inverter cabinet. The team installed and commissioned the complete system in a single day.",
    images: [
      "/images/gallery/image25.jpeg",
      "/images/gallery/image32.jpeg",
    ],
  },
  {
    id: 9,
    title: "Commercial Panel Fitting",
    location: "Lilongwe",
    category: "commercial",
    kw: 12,
    panels: 30,
    year: 2023,
    description:
      "Team securing and aligning solar panels on a commercial building rooftop. Each panel carefully positioned and clamped for long-term structural integrity.",
    images: [
      "/images/gallery/image33.jpeg",
      "/images/gallery/image35.jpeg",
      "/images/gallery/image36.jpeg",
    ],
  },
];

const CATEGORY_LABEL: Record<Category, string> = {
  residential: "Residential",
  commercial: "Commercial",
  industrial: "Industrial",
  community: "Community",
};

const CATEGORY_COLOR: Record<Category, string> = {
  residential: "var(--gp-green)",
  commercial: "#0066cc",
  industrial: "#6d4c41",
  community: "#7b1fa2",
};

const FILTERS = ["all", "residential", "commercial", "industrial", "community"] as const;
type Filter = (typeof FILTERS)[number];

// Reusable cover-image style
const coverImg: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

export default function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const [activeId, setActiveId] = useState<number | null>(null);
  const [lightboxImg, setLightboxImg] = useState(0);

  const filtered =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  const active = PROJECTS.find((p) => p.id === activeId) ?? null;

  function openProject(id: number) {
    setActiveId(id);
    setLightboxImg(0);
  }

  return (
    <>
      {/* Filter Bar */}
      <section style={{ padding: "40px 0 0", backgroundColor: "var(--gp-bg-page)" }}>
        <div className="gp-container" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
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
              onClick={() => openProject(project.id)}
              style={{ cursor: "pointer", overflow: "hidden" }}
            >
              {/* Main photo */}
              <div style={{ height: 210, position: "relative" }}>
                {/* ✅ plain <img> */}
                <img
                  src={project.images[0]}
                  alt={project.title}
                  style={coverImg}
                />
                {/* Category badge */}
                <span style={{
                  position: "absolute", top: 12, left: 12,
                  backgroundColor: CATEGORY_COLOR[project.category],
                  color: "#fff", fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.08em", textTransform: "uppercase",
                  padding: "3px 10px", borderRadius: 100,
                }}>
                  {CATEGORY_LABEL[project.category]}
                </span>
                {/* Photo count badge */}
                {project.images.length > 1 && (
                  <span style={{
                    position: "absolute", bottom: 12, right: 12,
                    backgroundColor: "rgba(0,0,0,0.5)",
                    color: "#fff", fontSize: 11, fontWeight: 600,
                    padding: "3px 10px", borderRadius: 100,
                    backdropFilter: "blur(4px)",
                  }}>
                    {project.images.length} photos →
                  </span>
                )}
              </div>

              {/* Card body */}
              <div style={{ padding: "20px 20px 22px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--gp-text-primary)", margin: "0 0 4px" }}>
                  {project.title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--gp-text-subtle)", margin: "0 0 16px", display: "flex", alignItems: "center", gap: 4 }}>
                  <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx={12} cy={10} r={3} />
                  </svg>
                  {project.location}
                </p>
                {project.kw > 0 && (
                  <div style={{ display: "flex", gap: 20, paddingTop: 14, borderTop: "1px solid var(--gp-border)" }}>
                    {[
                      { value: `${project.kw} kW`, label: "System Size" },
                      { value: project.panels, label: "Panels" },
                      { value: project.year, label: "Year" },
                    ].map((s) => (
                      <div key={s.label}>
                        <p style={{ fontSize: 15, fontWeight: 800, color: "var(--gp-green)", margin: 0, lineHeight: 1 }}>{s.value}</p>
                        <p style={{ fontSize: 11, color: "var(--gp-text-subtle)", marginTop: 4 }}>{s.label}</p>
                      </div>
                    ))}
                  </div>
                )}
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
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.7)",
            zIndex: 200,
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: 24,
            backdropFilter: "blur(6px)",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="gp-card"
            style={{ maxWidth: 680, width: "100%", overflow: "hidden", border: "none", boxShadow: "0 24px 64px rgba(0,0,0,0.4)" }}
          >
            {/* Photo viewer */}
            <div style={{ height: 300, position: "relative", backgroundColor: "#000" }}>
              {/* ✅ plain <img> */}
              <img
                src={active.images[lightboxImg]}
                alt={`${active.title} — photo ${lightboxImg + 1}`}
                style={coverImg}
              />

              {active.images.length > 1 && (
                <>
                  <button
                    onClick={() => setLightboxImg((i) => (i - 1 + active.images.length) % active.images.length)}
                    style={{
                      position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
                      width: 36, height: 36, borderRadius: "50%",
                      background: "rgba(0,0,0,0.5)", border: "none",
                      color: "#fff", fontSize: 18, cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      backdropFilter: "blur(4px)",
                    }}
                  >‹</button>
                  <button
                    onClick={() => setLightboxImg((i) => (i + 1) % active.images.length)}
                    style={{
                      position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)",
                      width: 36, height: 36, borderRadius: "50%",
                      background: "rgba(0,0,0,0.5)", border: "none",
                      color: "#fff", fontSize: 18, cursor: "pointer",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      backdropFilter: "blur(4px)",
                    }}
                  >›</button>

                  <div style={{
                    position: "absolute", bottom: 14, left: "50%", transform: "translateX(-50%)",
                    display: "flex", gap: 6,
                  }}>
                    {active.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setLightboxImg(i)}
                        style={{
                          width: i === lightboxImg ? 20 : 8,
                          height: 8, borderRadius: 4,
                          background: i === lightboxImg ? "#fff" : "rgba(255,255,255,0.45)",
                          border: "none", cursor: "pointer",
                          transition: "all 0.2s",
                          padding: 0,
                        }}
                      />
                    ))}
                  </div>
                </>
              )}

              <button
                onClick={() => setActiveId(null)}
                style={{
                  position: "absolute", top: 12, right: 12,
                  width: 32, height: 32, borderRadius: "50%",
                  background: "rgba(0,0,0,0.5)", border: "none",
                  color: "#fff", fontSize: 20, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  backdropFilter: "blur(4px)", lineHeight: 1,
                }}
              >×</button>

              <span style={{
                position: "absolute", top: 12, left: 12,
                backgroundColor: CATEGORY_COLOR[active.category],
                color: "#fff", fontSize: 10, fontWeight: 700,
                letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "3px 10px", borderRadius: 100,
              }}>
                {CATEGORY_LABEL[active.category]}
              </span>
            </div>

            {/* Thumbnail strip */}
            {active.images.length > 1 && (
              <div style={{
                display: "flex", gap: 6, padding: "10px 14px",
                backgroundColor: "var(--gp-bg-section)",
                borderBottom: "1px solid var(--gp-border)",
                overflowX: "auto",
              }}>
                {active.images.map((src, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxImg(i)}
                    style={{
                      width: 64, height: 48, flexShrink: 0,
                      borderRadius: 6, overflow: "hidden",
                      border: i === lightboxImg ? "2px solid var(--gp-green)" : "2px solid transparent",
                      padding: 0, cursor: "pointer", position: "relative",
                    }}
                  >
                    {/* ✅ plain <img> */}
                    <img
                      src={src}
                      alt={`Thumbnail ${i + 1}`}
                      style={coverImg}
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Details */}
            <div style={{ padding: "22px 24px 24px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8, marginBottom: 10 }}>
                <div>
                  <h2 style={{ fontSize: "1.1rem", fontWeight: 800, color: "var(--gp-text-primary)", margin: 0 }}>
                    {active.title}
                  </h2>
                  <p style={{ fontSize: 13, color: "var(--gp-text-subtle)", marginTop: 3 }}>
                    📍 {active.location} · {active.year}
                  </p>
                </div>
              </div>

              <p style={{ fontSize: 13.5, color: "var(--gp-text-muted)", lineHeight: 1.65, margin: "0 0 18px" }}>
                {active.description}
              </p>

              {active.kw > 0 && (
                <div style={{
                  display: "flex", gap: 24,
                  padding: "14px 0",
                  borderTop: "1px solid var(--gp-border)",
                  borderBottom: "1px solid var(--gp-border)",
                  marginBottom: 18, flexWrap: "wrap",
                }}>
                  {[
                    { label: "System Size", value: `${active.kw} kW` },
                    { label: "Panels Installed", value: active.panels },
                    { label: "Year Completed", value: active.year },
                  ].map((s) => (
                    <div key={s.label}>
                      <p style={{ fontSize: 17, fontWeight: 800, color: "var(--gp-green)", margin: 0, lineHeight: 1 }}>{s.value}</p>
                      <p style={{ fontSize: 11, color: "var(--gp-text-subtle)", marginTop: 4 }}>{s.label}</p>
                    </div>
                  ))}
                </div>
              )}

              <Link
                href="/company_contact_details"
                className="gp-btn-primary"
                style={{ width: "100%", justifyContent: "center", display: "flex" }}
              >
                Get a Similar System →
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}