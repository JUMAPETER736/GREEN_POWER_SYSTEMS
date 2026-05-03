"use client";
import Link from "next/link";

export default function Services() {

  const services = [
    {
      id: "installation",
      num: "01",
      title: "Solar panel installation",
      desc: "We handle everything from site assessment and system sizing to mounting, wiring, and commissioning. Residential and commercial.",
      features: ["Free site survey", "Custom system design", "Certified installation", "Grid-tie or off-grid", "Warranty included"],
      featured: true,
    },
    {
      id: "maintenance",
      num: "02",
      title: "Preventive maintenance",
      desc: "Keep your system performing at its best with scheduled cleaning, inspection, and performance reporting.",
      features: ["Bi-annual service visits", "Panel cleaning", "Inverter checks", "Performance report", "Priority response"],
      featured: false,
    },
    {
      id: "repairs",
      num: "03",
      title: "Repairs & diagnostics",
      desc: "Fast fault-finding and repair for any solar system — whether we installed it or not.",
      features: ["Same-day diagnosis", "Inverter repair", "Panel replacement", "Wiring faults", "Battery checks"],
      featured: false,
    },
    {
      id: "consultation",
      num: "04",
      title: "Energy consultation",
      desc: "Not sure where to start? Our experts assess your energy needs and recommend the right solution.",
      features: ["Load assessment", "ROI calculation", "Financing advice", "Brand comparison", "No obligation"],
      featured: false,
    },
    {
      id: "battery",
      num: "05",
      title: "Battery storage systems",
      desc: "Store excess solar energy and power your home or business through the night or during outages.",
      features: ["Lithium-ion batteries", "LOADSHEDDING protection", "Smart monitoring", "Scalable capacity", "Remote alerts"],
      featured: false,
    },
    {
      id: "commercial",
      num: "06",
      title: "Commercial & industrial",
      desc: "Large-scale solar solutions for businesses, farms, schools, and institutions across Malawi.",
      features: ["High-capacity systems", "Dedicated project manager", "3-phase installations", "Net metering support", "Annual audits"],
      featured: false,
    },
  ];

  return (
    <div style={{ backgroundColor: "var(--gp-bg-page)", overflowX: "hidden", width: "100%" }}>

      {/* ── Page Hero ── */}
      <div className="gp-page-hero">
        <div className="gp-container">
          <span className="gp-eyebrow">What we do</span>
          <h1 className="gp-section-title" style={{ width: "100%", wordBreak: "break-word" }}>
            Complete solar solutions for every need
          </h1>
          <p className="gp-section-sub" style={{ marginTop: 8, wordBreak: "break-word" }}>
            From a single rooftop installation to a full commercial solar farm, we bring the expertise and hardware to get the job done right.
          </p>
        </div>
      </div>

      {/* ── Services Grid ── */}
      <section style={{ padding: "clamp(20px, 3vw, 36px) 0" }}>
        <div className="gp-container">
          <div className="gp-services-grid">
            {services.map(({ id, num, title, desc, features, featured }) => (
              <div
                key={id}
                id={id}
                className={featured ? "gp-card-featured" : "gp-card"}
                style={{ padding: "clamp(16px, 3vw, 24px)", minWidth: 0 }}
              >
                {/* Service number */}
                <p style={{ fontSize: 11, color: "var(--gp-text-subtle)", fontWeight: 700, letterSpacing: "0.06em", margin: "0 0 10px" }}>
                  {num}
                </p>

                {/* Title */}
                <h2 style={{ fontSize: 17, fontWeight: 700, color: "var(--gp-text-primary)", margin: "0 0 8px", wordBreak: "break-word" }}>
                  {title}
                </h2>

                {/* Description */}
                <p style={{ fontSize: 13.5, color: "var(--gp-text-muted)", lineHeight: 1.65, margin: "0 0 14px", wordBreak: "break-word" }}>
                  {desc}
                </p>

                {/* Feature checklist */}
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
                  {features.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--gp-text-muted)", minWidth: 0 }}>
                      <span style={{
                        width: 16, height: 16, borderRadius: "50%",
                        backgroundColor: "var(--gp-green-light)",
                        border: "1px solid var(--gp-green-border)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        flexShrink: 0,
                      }}>
                        <svg width={9} height={9} viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="var(--gp-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span style={{ wordBreak: "break-word", minWidth: 0 }}>{f}</span>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section style={{ padding: "clamp(28px, 4vw, 44px) 0", backgroundColor: "var(--gp-bg-dark)" }}>
        <div className="gp-container gp-services-cta">
          <div style={{ minWidth: 0 }}>
            <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 2rem)", fontWeight: 800, color: "#fff", margin: "0 0 6px", wordBreak: "break-word" }}>
              Need a custom solution?
            </h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.62)", margin: 0, wordBreak: "break-word" }}>
              Tell us about your project and we'll design the perfect system.
            </p>
          </div>
          <Link href="/company_contact_details" className="gp-btn-accent gp-services-cta-btn">
            Request a Quote
          </Link>
        </div>
      </section>

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

        /* Tighten hero bottom padding */
        .gp-page-hero {
          padding-bottom: clamp(16px, 2.5vw, 24px) !important;
        }

        /* Services grid — mobile first */
        .gp-services-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          width: 100%;
        }
        @media (min-width: 560px) {
          .gp-services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 960px) {
          .gp-services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* CTA row */
        .gp-services-cta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 20px;
        }
        .gp-services-cta-btn {
          flex-shrink: 0;
          width: 100%;
          justify-content: center;
          display: flex;
        }
        @media (min-width: 640px) {
          .gp-services-cta {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
          }
          .gp-services-cta-btn {
            width: auto;
          }
        }

        @media (max-width: 480px) {
          .gp-container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>

    </div>
  );
}