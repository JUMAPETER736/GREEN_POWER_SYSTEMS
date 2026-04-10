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
    <div style={{ backgroundColor: "var(--gp-bg-page)" }}>
      <div className="gp-page-hero">
        <div className="gp-container">
          <span className="gp-eyebrow">What we do</span>
          <h1 className="gp-section-title" style={{ maxWidth: 560 }}>Complete solar solutions for every need</h1>
          <p className="gp-section-sub" style={{ marginTop: 14 }}>
            From a single rooftop installation to a full commercial solar farm, we bring the expertise and hardware to get the job done right.
          </p>
        </div>
      </div>

      <section style={{ padding: "72px 0" }}>
        <div className="gp-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {services.map(({ id, num, title, desc, features, featured }) => (
              <div key={id} id={id} className={featured ? "gp-card-featured" : "gp-card"} style={{ padding: 32 }}>
                <p style={{ fontSize: 11, color: "var(--gp-text-subtle)", fontWeight: 700, letterSpacing: "0.06em", margin: "0 0 14px" }}>{num}</p>
                <h2 style={{ fontSize: 17, fontWeight: 700, color: "var(--gp-text-primary)", margin: "0 0 10px" }}>{title}</h2>
                <p style={{ fontSize: 13.5, color: "var(--gp-text-muted)", lineHeight: 1.7, margin: "0 0 20px" }}>{desc}</p>
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {features.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "var(--gp-text-muted)" }}>
                      <span style={{ width: 16, height: 16, borderRadius: "50%", backgroundColor: "var(--gp-green-light)", border: "1px solid var(--gp-green-border)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <svg width={9} height={9} viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="var(--gp-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 0", backgroundColor: "var(--gp-bg-dark)" }}>
        <div className="gp-container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 28 }}>
          <div>
            <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>Need a custom solution?</h2>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.62)", margin: 0 }}>Tell us about your project and we'll design the perfect system.</p>
          </div>
          <Link href="/contact" className="gp-btn-accent">Request a Quote</Link>
        </div>
      </section>
    </div>
  );
}