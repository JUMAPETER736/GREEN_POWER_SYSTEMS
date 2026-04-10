export default function Testimonials() {
  const reviews = [
    { name: "Chimwemwe Banda", location: "Lilongwe", initials: "CB", stars: 5, quote: "Green Power installed a 3kW system on our home. The team was professional and the panels have been running flawlessly for over a year. Our electricity bills dropped by 80%." },
    { name: "Dr. Grace Nyirenda", location: "Area 43, Lilongwe", initials: "GN", stars: 5, quote: "Excellent service from start to finish. They explained everything clearly, gave us a fair price, and the installation was completed in one day. Highly recommended." },
    { name: "James Mwale", location: "Blantyre", initials: "JM", stars: 5, quote: "We use their commercial system at our warehouse. 12 months in and zero issues. Their maintenance team is responsive and professional." },
    { name: "Faith Tembo", location: "Kasungu", initials: "FT", stars: 4, quote: "Very happy with the system. Installation took two days and the team cleaned up everything. The app monitoring is a great bonus — I can see output live." },
    { name: "Emmanuel Chirwa", location: "Mzuzu", initials: "EC", stars: 5, quote: "We had a faulty inverter from another supplier. Green Power diagnosed and fixed it the same day. Their technical knowledge is unmatched." },
    { name: "Mercy Phiri", location: "Zomba", initials: "MP", stars: 5, quote: "The consultation was free and genuinely helpful — no pressure at all. We ended up choosing a system that fits our budget perfectly." },
  ];

  return (
    <div style={{ backgroundColor: "var(--gp-bg-page)" }}>
      <div className="gp-page-hero">
        <div className="gp-container">
          <span className="gp-eyebrow">What clients say</span>
          <h1 className="gp-section-title" style={{ maxWidth: 560 }}>Trusted by homes and businesses across Malawi</h1>
          <p className="gp-section-sub" style={{ marginTop: 14 }}>
            Real experiences from our clients — their words, not ours.
          </p>
        </div>
      </div>

      <section style={{ padding: "72px 0" }}>
        <div className="gp-container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {reviews.map(({ name, location, initials, stars, quote }) => (
              <div key={name} className="gp-card" style={{ padding: 28, display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", gap: 4 }}>
                  {Array.from({ length: stars }).map((_, i) => (
                    <svg key={i} width={16} height={16} viewBox="0 0 24 24" fill="#f5a623"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  ))}
                </div>
                <p style={{ fontSize: 14, color: "var(--gp-text-muted)", lineHeight: 1.75, margin: 0, flexGrow: 1 }}>"{quote}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    backgroundColor: "var(--gp-green-light)",
                    border: "1.5px solid var(--gp-green-border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 700, color: "var(--gp-green)", flexShrink: 0,
                  }}>{initials}</div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "var(--gp-text-primary)", margin: 0 }}>{name}</p>
                    <p style={{ fontSize: 12, color: "var(--gp-text-subtle)", margin: 0 }}>{location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "64px 0", backgroundColor: "var(--gp-bg-section)", borderTop: "1px solid var(--gp-border)" }}>
        <div className="gp-container" style={{ textAlign: "center" }}>
          <h2 className="gp-section-title" style={{ marginBottom: 12 }}>Join hundreds of satisfied clients</h2>
          <p className="gp-section-sub" style={{ margin: "0 auto 28px" }}>
            Ready to experience the Green Power difference?
          </p>
          <Link href="/contact" className="gp-btn-primary">Get your free quote</Link>
        </div>
      </section>
    </div>
  );
}

import Link from "next/link";