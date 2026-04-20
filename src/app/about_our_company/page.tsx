import Link from "next/link";

export default function About() {
  const team = [
    {
      name: "Chikumbutso Bisani",
      role: "CEO",
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

      {/* ── Hero ── */}
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

      {/* ── Mission & Values ── */}
      <section style={{ padding: "clamp(48px, 8vw, 80px) 0", backgroundColor: "var(--gp-bg-page)" }}>
        <div className="gp-container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: "clamp(24px, 5vw, 48px)",
            alignItems: "start",
          }}>
            {/* Mission text */}
            <div>
              <span className="gp-eyebrow">Our mission</span>
              <h2 style={{
                fontSize: "clamp(1.3rem, 3vw, 1.9rem)",
                fontWeight: 800, color: "var(--gp-text-primary)",
                lineHeight: 1.2, margin: "8px 0 0", letterSpacing: "-0.01em",
              }}>
                Empowering Malawi through sustainable energy
              </h2>
              <p style={{
                fontSize: "clamp(14px, 2vw, 15px)",
                color: "var(--gp-text-muted)", lineHeight: 1.75, marginTop: 14,
              }}>
                We exist to make solar affordable, reliable, and simple. Whether you're a family looking to cut electricity bills or a business aiming for energy independence, we design the right system and stand behind it for years.
              </p>
            </div>

            {/* Value cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {[
                { label: "Quality first", desc: "We never cut corners on components or workmanship." },
                { label: "Local expertise", desc: "We know Malawi's grid, climate, and regulations deeply." },
                { label: "Long-term partnership", desc: "Our relationship doesn't end at installation." },
              ].map(({ label, desc }) => (
                <div key={label} className="gp-card" style={{
                  padding: "18px 20px",
                  display: "flex", gap: 14, alignItems: "flex-start",
                }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: "50%",
                    backgroundColor: "var(--gp-green)",
                    marginTop: 5, flexShrink: 0,
                  }} />
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

      {/* ── Stats ── */}
      <section style={{
        padding: "clamp(40px, 6vw, 64px) 0",
        backgroundColor: "var(--gp-bg-section)",
        borderTop: "1px solid var(--gp-border)",
        borderBottom: "1px solid var(--gp-border)",
      }}>
        <div className="gp-container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
            gap: 16,
          }}>
            {[
              ["50+", "Systems installed"],
              ["5+", "Years operating"],
              ["3", "Districts served"],
              ["100%", "Client satisfaction"],
            ].map(([n, l]) => (
              <div key={l} style={{ textAlign: "center", padding: "clamp(16px, 3vw, 24px) 12px" }}>
                <p style={{
                  fontSize: "clamp(28px, 5vw, 36px)",
                  fontWeight: 800, color: "var(--gp-green)",
                  margin: "0 0 6px", lineHeight: 1,
                }}>{n}</p>
                <p style={{ fontSize: "clamp(12px, 1.5vw, 13px)", color: "var(--gp-text-muted)", margin: 0 }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section style={{ padding: "clamp(48px, 8vw, 80px) 0" }}>
        <div className="gp-container">
          <div style={{ marginBottom: 36 }}>
            <span className="gp-eyebrow">Our team</span>
            <h2 style={{
              fontSize: "clamp(1.3rem, 3vw, 1.9rem)",
              fontWeight: 800, color: "var(--gp-text-primary)",
              margin: "8px 0 0", letterSpacing: "-0.01em",
            }}>
              The people behind Green Power
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 200px), 1fr))",
            gap: 16,
          }}>
            {team.map(({ name, role, initials, edu, note }) => (
              <div key={name} className="gp-card" style={{
                padding: "clamp(20px, 4vw, 28px)",
                textAlign: "center",
              }}>
                {/* Avatar */}
                <div style={{
                  width: "clamp(52px, 8vw, 64px)",
                  height: "clamp(52px, 8vw, 64px)",
                  borderRadius: "50%",
                  backgroundColor: "var(--gp-green-light)",
                  border: "2px solid var(--gp-green-border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 14px",
                  fontSize: "clamp(15px, 3vw, 18px)",
                  fontWeight: 700, color: "var(--gp-green)",
                }}>{initials}</div>

                <p style={{ fontSize: "clamp(14px, 2vw, 15px)", fontWeight: 700, color: "var(--gp-text-primary)", margin: "0 0 4px" }}>{name}</p>
                <p style={{ fontSize: 13, color: "var(--gp-green)", fontWeight: 600, margin: "0 0 10px" }}>{role}</p>
                <p style={{ fontSize: "clamp(11px, 1.5vw, 12px)", color: "var(--gp-text-muted)", lineHeight: 1.6, margin: "0 0 6px" }}>{edu}</p>
                <p style={{ fontSize: "clamp(11px, 1.5vw, 12px)", color: "var(--gp-text-subtle)", lineHeight: 1.5, margin: 0, fontStyle: "italic" }}>{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "clamp(48px, 8vw, 72px) 0", backgroundColor: "var(--gp-bg-dark)" }}>
        <div className="gp-container" style={{ textAlign: "center", padding: "0 1.5rem" }}>
          <h2 style={{
            fontSize: "clamp(1.4rem, 3vw, 2rem)",
            fontWeight: 800, color: "#fff",
            margin: "0 0 12px", letterSpacing: "-0.01em",
          }}>
            Come visit us in Lilongwe
          </h2>
          <p style={{
            fontSize: "clamp(13px, 2vw, 15px)",
            color: "rgba(255,255,255,0.62)",
            margin: "0 0 28px", lineHeight: 1.7,
          }}>
            QuickTrip Shopping Complex, Area 25 Sungwi — open Mon–Sat 8am to 5pm
          </p>
          <Link href="/company_contact_details" className="gp-btn-accent">Get in touch</Link>
        </div>
      </section>

      {/* ── Responsive overrides ── */}
      <style>{`
        /* Mobile: stack team cards to 2 columns minimum */
        @media (max-width: 480px) {
          .gp-container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        /* Tablet: team cards 2 per row */
        @media (min-width: 480px) and (max-width: 767px) {
          /* auto-fit handles this already via minmax(200px,1fr) */
        }

        /* Desktop: team cards 4 per row */
        @media (min-width: 1024px) {
          /* auto-fit handles this already */
        }
      `}</style>

    </div>
  );
}