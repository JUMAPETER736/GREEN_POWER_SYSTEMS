import Link from "next/link";

export default function Products() {
  const categories = [
    {
      title: "Solar panels",
      items: [
        { name: "Monocrystalline 400W", desc: "High-efficiency panels ideal for limited roof space.", badge: "Best seller" },
        { name: "Polycrystalline 330W", desc: "Cost-effective option for larger installations.", badge: "" },
        { name: "Bifacial 450W", desc: "Captures light from both sides for maximum output.", badge: "Premium" },
      ],
    },
    {
      title: "Inverters",
      items: [
        { name: "Hybrid 5kW inverter", desc: "Grid-tie with battery backup — ideal for homes.", badge: "Popular" },
        { name: "Off-grid 3kW inverter", desc: "Perfect for rural properties away from the grid.", badge: "" },
        { name: "3-phase 10kW inverter", desc: "Commercial-grade, three-phase power management.", badge: "Commercial" },
      ],
    },
    {
      title: "Battery storage",
      items: [
        { name: "Lithium 5kWh battery", desc: "Compact lithium storage for overnight power.", badge: "" },
        { name: "Lithium 10kWh battery", desc: "Extended storage for larger homes or businesses.", badge: "Best value" },
        { name: "Lead-acid 200Ah", desc: "Reliable and affordable deep-cycle battery bank.", badge: "" },
      ],
    },
    {
      title: "Accessories & mounting",
      items: [
        { name: "Roof mounting kits", desc: "Aluminium rail systems for tiled or metal roofs.", badge: "" },
        { name: "Solar charge controllers", desc: "MPPT controllers for off-grid systems.", badge: "" },
        { name: "Monitoring systems", desc: "Real-time performance dashboards via app or web.", badge: "New" },
      ],
    },
  ];

  return (
    <div style={{ backgroundColor: "var(--gp-bg-page)" }}>
      <div className="gp-page-hero">
        <div className="gp-container">
          <span className="gp-eyebrow">Our products</span>
          <h1 className="gp-section-title" style={{ maxWidth: 560 }}>Quality solar equipment, competitively priced</h1>
          <p className="gp-section-sub" style={{ marginTop: 14 }}>
            We stock and supply leading solar brands. All products come with manufacturer warranties and our full installation support.
          </p>
        </div>
      </div>

      <section style={{ padding: "72px 0" }}>
        <div className="gp-container" style={{ display: "flex", flexDirection: "column", gap: 56 }}>
          {categories.map(({ title, items }) => (
            <div key={title}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--gp-text-primary)", marginBottom: 20, paddingBottom: 14, borderBottom: "1px solid var(--gp-border)" }}>{title}</h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16 }}>
                {items.map(({ name, desc, badge }) => (
                  <div key={name} className="gp-card" style={{ padding: 24, display: "flex", flexDirection: "column", gap: 10 }}>
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8 }}>
                      <h3 style={{ fontSize: 14, fontWeight: 700, color: "var(--gp-text-primary)", margin: 0 }}>{name}</h3>
                      {badge && (
                        <span style={{
                          fontSize: 10, fontWeight: 700, padding: "3px 8px",
                          backgroundColor: "var(--gp-green-light)",
                          color: "var(--gp-green)",
                          borderRadius: 100, whiteSpace: "nowrap",
                          border: "1px solid var(--gp-green-border)",
                        }}>{badge}</span>
                      )}
                    </div>
                    <p style={{ fontSize: 13, color: "var(--gp-text-muted)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
                    <Link href="/contact" style={{ fontSize: 12, fontWeight: 700, color: "var(--gp-green)", textDecoration: "none", marginTop: 4 }}>
                      Enquire →
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "64px 0", backgroundColor: "var(--gp-bg-dark)" }}>
        <div className="gp-container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 800, color: "#fff", margin: "0 0 12px" }}>Looking for a specific product?</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.62)", margin: "0 0 28px" }}>We can source and supply products not listed here. Contact us with your specs.</p>
          <Link href="/contact" className="gp-btn-accent">Contact our team</Link>
        </div>
      </section>
    </div>
  );
}