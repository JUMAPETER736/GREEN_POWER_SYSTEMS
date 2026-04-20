import Link from "next/link";

export default function About() {
  const team = [
    {
      name: "Chikumbutso Bisani",
      role: "Founder & CEO",
      initials: "CB",
      edu: "MSc Construction Technology (UNZA) · BSc Renewable Energy (Mzuzu University)",
      note: "10+ years in energy, irrigation & construction",
    },
    {
      name: "Chisomo Chinkhande",
      role: "Project Manager",
      initials: "CC",
      edu: "BSc Renewable Energy Technologies (Mzuzu University)",
      note: "Team & client coordination · Business development",
    },
    {
      name: "Andrew Henry",
      role: "Marketing Officer",
      initials: "AH",
      edu: "Professional Certificate in Marketing (Lilongwe Technical College)",
      note: "1+ year in renewable energy · Brand & marketing strategy",
    },
    {
      name: "Felix Chinkhande",
      role: "Finance & Administration Officer",
      initials: "FC",
      edu: "Management Certificate (Lilongwe Technical College)",
      note: "Finance, admin & organisational operations",
    },
  ];

  return (
    <div style={{ backgroundColor: "var(--gp-bg-page)" }}>
      <div className="gp-page-hero">
        <div className="gp-container">
          <span className="gp-eyebrow">Our story</span>
          <h1 className="gp-section-title" style={{ maxWidth: 600 }}>
            Bringing reliable solar energy to every corner of Malawi
          </h1>
          <p className="gp-section-sub" style={{ marginTop: 14 }}>
            Founded in Lilongwe, Green Power Systems was built on a single belief: clean energy should be accessible to everyone. Since day one we've installed, maintained, and supported solar systems for homes, schools, and businesses.
          </p>
        </div>
      </div>

      {/* Mission & Values */}
      <section style={{ padding: "72px 0", backgroundColor: "var(--gp-bg-page)" }}>
        <div className="gp-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, alignItems: "start" }}>
            <div>
              <span className="gp-eyebrow">Our mission</span>
              <h2 className="gp-section-title" style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)" }}>Empowering Malawi through sustainable energy</h2>
              <p style={{ fontSize: 15, color: "var(--gp-text-muted)", lineHeight: 1.75, marginTop: 14 }}>
                We exist to make solar affordable, reliable, and simple. Whether you're a family looking to cut electricity bills or a business aiming for energy independence, we design the right system and stand behind it for years.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { label: "Quality first", desc: "We never cut corners on components or workmanship." },
                { label: "Local expertise", desc: "We know Malawi's grid, climate, and regulations deeply." },
                { label: "Long-term partnership", desc: "Our relationship doesn't end at installation." },
              ].map(({ label, desc }) => (
                <div key={label} className="gp-card" style={{ padding: "20px 22px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: "var(--gp-green)", marginTop: 5, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "var(--gp-text-primary)", margin: "0 0 4px" }}>{label}</p>
                    <p style={{ fontSize: 13, color: "var(--gp-text-muted)", lineHeight: 1.6, margin: 0 }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: "64px 0", backgroundColor: "var(--gp-bg-section)", borderTop: "1px solid var(--gp-border)", borderBottom: "1px solid var(--gp-border)" }}>
        <div className="gp-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 24 }}>
            {[["50+","Systems installed"],["5+","Years operating"],["3","Districts served"],["100%","Client satisfaction"]].map(([n,l]) => (
              <div key={l} style={{ textAlign: "center", padding: "24px 16px" }}>
                <p style={{ fontSize: 36, fontWeight: 800, color: "var(--gp-green)", margin: "0 0 6px", lineHeight: 1 }}>{n}</p>
                <p style={{ fontSize: 13, color: "var(--gp-text-muted)", margin: 0 }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "72px 0" }}>
        <div className="gp-container">
          <div style={{ marginBottom: 40 }}>
            <span className="gp-eyebrow">Our team</span>
            <h2 className="gp-section-title" style={{ fontSize: "clamp(1.4rem,3vw,1.9rem)" }}>The people behind Green Power</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {team.map(({ name, role, initials, edu, note }) => (
              <div key={name} className="gp-card" style={{ padding: 28, textAlign: "center" }}>
                <div style={{
                  width: 64, height: 64, borderRadius: "50%",
                  backgroundColor: "var(--gp-green-light)",
                  border: "2px solid var(--gp-green-border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px",
                  fontSize: 18, fontWeight: 700, color: "var(--gp-green)",
                }}>{initials}</div>
                <p style={{ fontSize: 15, fontWeight: 700, color: "var(--gp-text-primary)", margin: "0 0 4px" }}>{name}</p>
                <p style={{ fontSize: 13, color: "var(--gp-green)", fontWeight: 600, margin: "0 0 10px" }}>{role}</p>
                <p style={{ fontSize: 12, color: "var(--gp-text-muted)", lineHeight: 1.6, margin: "0 0 6px" }}>{edu}</p>
                <p style={{ fontSize: 12, color: "var(--gp-text-subtle)", lineHeight: 1.5, margin: 0, fontStyle: "italic" }}>{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "64px 0", backgroundColor: "var(--gp-bg-dark)" }}>
        <div className="gp-container" style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 800, color: "#fff", margin: "0 0 12px" }}>Come visit us in Lilongwe</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.62)", margin: "0 0 28px" }}>QuickTrip Shopping Complex, Area 25 Sungwi — open Mon–Sat 8am to 5pm</p>
          <Link href="/contact" className="gp-btn-accent">Get in touch</Link>
        </div>
      </section>
    </div>
  );
}