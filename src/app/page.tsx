"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ backgroundColor: "var(--gp-bg-page)" }}>

      {/* ── Hero ── */}
      <section style={{ backgroundColor: "var(--gp-bg-card)", borderBottom: "1px solid var(--gp-border)" }}>
        <div className="gp-container" style={{ padding: "72px 1.5rem 64px" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "3rem",
            alignItems: "center",
          }}>
            {/* Left */}
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "5px 14px", borderRadius: 100,
                backgroundColor: "var(--gp-green-light)",
                border: "1px solid var(--gp-green-border)",
                color: "var(--gp-green)", fontSize: 12, fontWeight: 600,
                width: "fit-content",
              }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "var(--gp-green)", flexShrink: 0 }} />
                Malawi's trusted solar partner
              </span>

              <h1 style={{
                fontSize: "clamp(1.9rem, 5vw, 3.2rem)",
                fontWeight: 800, color: "var(--gp-text-primary)",
                lineHeight: 1.12, margin: 0, letterSpacing: "-0.02em",
              }}>
    
                <span style={{ color: "var(--gp-green)" }}>Power your future with clean solar energy</span>
            
              </h1>

              <p style={{ fontSize: "clamp(15px, 2vw, 17px)", color: "var(--gp-text-muted)", lineHeight: 1.7, margin: 0 }}>
                Professional installation, sales, and maintenance for homes and businesses across Malawi. Sustainable energy that pays for itself.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <Link href="/company_contact_details" className="gp-btn-primary">Get Free Consultation</Link>
                <Link href="/our_services" className="gp-btn-secondary">View Our Services</Link>
              </div>

              <div style={{
                display: "flex", flexWrap: "wrap", gap: "16px 36px", paddingTop: 24,
                borderTop: "1px solid var(--gp-border)", marginTop: 4,
              }}>
                {[["50+","Installations"],["100%","Satisfaction"],["24/7","Support"]].map(([n,l]) => (
                  <div key={l}>
                    <p style={{ fontSize: "clamp(20px,4vw,26px)", fontWeight: 800, color: "var(--gp-green)", margin: 0, lineHeight: 1 }}>{n}</p>
                    <p style={{ fontSize: 12, color: "var(--gp-text-subtle)", marginTop: 5, fontWeight: 500 }}>{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — SVG illustration */}
            <div style={{
              backgroundColor: "var(--gp-green-light)",
              border: "1px solid var(--gp-green-border)",
              borderRadius: 20, padding: "2rem",
              display: "flex", alignItems: "center", justifyContent: "center",
              minHeight: 260,
            }}>
              <svg viewBox="0 0 300 260" style={{ width: "100%", maxWidth: 320 }} xmlns="http://www.w3.org/2000/svg">
                <circle cx="75" cy="60" r="36" fill="#fbb81c" opacity="0.18" />
                <circle cx="75" cy="60" r="22" fill="#fbb81c" />
                {[0,45,90,135,180,225,270,315].map(a => {
                  const r = (Math.PI * a) / 180;
                  return <line key={a} x1={75+Math.sin(r)*29} y1={60-Math.cos(r)*29} x2={75+Math.sin(r)*40} y2={60-Math.cos(r)*40} stroke="#fbb81c" strokeWidth="3" strokeLinecap="round" />;
                })}
                <rect x="18" y="148" width="110" height="82" rx="6" fill="#0052a3" />
                {[0,1,2].map(row => [0,1,2].map(col => (
                  <rect key={`${row}${col}`} x={25+col*34} y={156+row*24} width="26" height="18" rx="3" fill="#4dd9ff" opacity="0.85" />
                )))}
                <rect x="148" y="134" width="130" height="96" rx="6" fill="#0066cc" />
                {[0,1,2].map(row => [0,1,2].map(col => (
                  <rect key={`r${row}${col}`} x={156+col*40} y={142+row*28} width="32" height="22" rx="3" fill="#66d4ff" opacity="0.85" />
                )))}
                <path d="M210 240 C210 240 221 224 225 210 C220 218 210 230 210 230Z" fill="#0c5436" />
                <path d="M210 240 C210 240 199 224 195 210 C200 218 210 230 210 230Z" fill="#177a4e" />
                <line x1="210" y1="209" x2="210" y2="244" stroke="#0c5436" strokeWidth="2.5" />
                <path d="M170 72 L157 93h13L152 116 L176 87h-14Z" fill="#fbb81c" opacity="0.95" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why choose us ── */}
      <section style={{ padding: "72px 0", backgroundColor: "var(--gp-bg-page)" }}>
        <div className="gp-container">
          <div style={{ marginBottom: 40 }}>
            <span className="gp-eyebrow">Why choose us</span>
            <h2 className="gp-section-title">Expertise you can trust</h2>
            <p className="gp-section-sub">From first consultation to years of support, we're with you every step.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            {[
              { title: "Certified technicians", desc: "Every installer is trained, vetted, and covered by our quality guarantee.", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 0 0 1.946-.806 3.42 3.42 0 0 1 4.438 0 3.42 3.42 0 0 0 1.946.806 3.42 3.42 0 0 1 3.138 3.138 3.42 3.42 0 0 0 .806 1.946 3.42 3.42 0 0 1 0 4.438 3.42 3.42 0 0 0-.806 1.946 3.42 3.42 0 0 1-3.138 3.138 3.42 3.42 0 0 0-1.946.806 3.42 3.42 0 0 1-4.438 0 3.42 3.42 0 0 0-1.946-.806 3.42 3.42 0 0 1-3.138-3.138 3.42 3.42 0 0 0-.806-1.946 3.42 3.42 0 0 1 0-4.438 3.42 3.42 0 0 0 .806-1.946 3.42 3.42 0 0 1 3.138-3.138z" },
              { title: "24/7 support", desc: "Our team is always reachable for emergencies, queries, and routine checks.", icon: "M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z" },
              { title: "Transparent pricing", desc: "No hidden fees. Detailed quotes and flexible payment plans for every budget.", icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z" },
              { title: "Locally rooted", desc: "Based in Lilongwe — we understand Malawi's energy landscape inside and out.", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" },
            ].map(({ title, desc, icon }) => (
              <div key={title} className="gp-card" style={{ padding: "24px 20px" }}>
                <div className="gp-icon-badge" style={{ marginBottom: 16 }}>
                  <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="var(--gp-green)" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d={icon} />
                  </svg>
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--gp-text-primary)", margin: "0 0 8px" }}>{title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--gp-text-muted)", lineHeight: 1.65, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services preview ── */}
      <section style={{ padding: "72px 0", backgroundColor: "var(--gp-bg-section)", borderTop: "1px solid var(--gp-border)", borderBottom: "1px solid var(--gp-border)" }}>
        <div className="gp-container">
          <div style={{ marginBottom: 40 }}>
            <span className="gp-eyebrow">Core services</span>
            <h2 className="gp-section-title">Everything solar, end to end</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14, marginBottom: 28 }}>
            {[
              { n:"01", t:"Installation", d:"Full system design and professional installation for homes and businesses.", featured: true },
              { n:"02", t:"Maintenance", d:"Scheduled servicing to maximise output and protect your investment.", featured: false },
              { n:"03", t:"Repairs & upgrades", d:"Fast fault diagnosis and upgrades to keep energy flowing.", featured: false },
            ].map(({ n, t, d, featured }) => (
              <div key={n} className={featured ? "gp-card-featured" : "gp-card"} style={{ padding: "24px 22px" }}>
                <p style={{ fontSize: 11, color: "var(--gp-text-subtle)", fontWeight: 600, margin: "0 0 10px", letterSpacing: "0.05em" }}>{n}</p>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--gp-text-primary)", margin: "0 0 10px" }}>{t}</h3>
                <p style={{ fontSize: 13.5, color: "var(--gp-text-muted)", lineHeight: 1.65, margin: "0 0 16px" }}>{d}</p>
                <Link href="/our_services" style={{ fontSize: 13, fontWeight: 700, color: "var(--gp-green)", textDecoration: "none" }}>Learn more →</Link>
              </div>
            ))}
          </div>
          <Link href="/our_services" className="gp-btn-secondary">View all services</Link>
        </div>
      </section>

      {/* ── Gallery teaser — responsive real photos ── */}
      <section style={{ padding: "72px 0", backgroundColor: "var(--gp-bg-page)", borderBottom: "1px solid var(--gp-border)" }}>
        <div className="gp-container">
          <div style={{
            display: "flex", alignItems: "flex-end",
            justifyContent: "space-between", flexWrap: "wrap",
            gap: 16, marginBottom: 32,
          }}>
            <div>
              <span className="gp-eyebrow">Our work</span>
              <h2 className="gp-section-title" style={{ marginBottom: 0 }}>Real installations, real results</h2>
            </div>
            <Link href="/gallery" className="gp-btn-secondary" style={{ flexShrink: 0 }}>View full gallery →</Link>
          </div>

          <div className="gp-gallery-teaser">
            {[
              {
                src: "/images/gallery/image1.jpeg",
                alt: "Green Power Systems team fitting solar panels on a commercial rooftop",
                tag: "Commercial", tagColor: "#0066cc",
                kw: "22 kW", title: "Large Commercial Rooftop", location: "Lilongwe",
              },
              {
                src: "/images/gallery/image3.jpeg",
                alt: "Completed solar array on a rural residential rooftop",
                tag: "Residential", tagColor: "var(--gp-green)",
                kw: "8 kW", title: "Rural Rooftop Array", location: "Dedza District",
              },
              {
                src: "/images/gallery/image22.jpeg",
                alt: "Massive industrial solar panel array on a warehouse rooftop",
                tag: "Industrial", tagColor: "#b45309",
                kw: "48 kW", title: "Industrial Warehouse Array", location: "Kanengo",
              },
              {
                src: "/images/gallery/image4.jpeg",
                alt: "SRNE inverter and Dyness battery storage system installed indoors",
                tag: "Energy Storage", tagColor: "#6d4c41",
                kw: "5 kW", title: "Inverter & Battery System", location: "Lilongwe",
              },
              {
                src: "/images/gallery/image8.jpeg",
                alt: "Technician crouching on rooftop aligning solar panels at golden hour",
                tag: "Residential", tagColor: "var(--gp-green)",
                kw: "5 kW", title: "Precision Panel Alignment", location: "Lilongwe",
              },
            ].map((p) => (
              <Link
                key={p.title}
                href="/gallery"
                className="gp-gallery-card"
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 36px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.10)";
                }}
              >
                <img src={p.src} alt={p.alt} className="gp-gallery-img" />
                <div className="gp-gallery-overlay" />
                <div className="gp-gallery-badges">
                  <span style={{
                    backgroundColor: p.tagColor, color: "#fff",
                    fontSize: 10, fontWeight: 700, letterSpacing: "0.1em",
                    textTransform: "uppercase", padding: "3px 10px", borderRadius: 100,
                  }}>{p.tag}</span>
                  <span style={{
                    backgroundColor: "rgba(0,0,0,0.45)", color: "#fff",
                    fontSize: 12, fontWeight: 800,
                    padding: "3px 10px", borderRadius: 100, backdropFilter: "blur(4px)",
                  }}>{p.kw}</span>
                </div>
                <div className="gp-gallery-info">
                  <p style={{ fontSize: 14, fontWeight: 700, color: "#fff", margin: "0 0 3px" }}>{p.title}</p>
                  <p style={{ fontSize: 12, color: "rgba(255,255,255,0.72)", margin: 0 }}>📍 {p.location}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Stats strip */}
          <div style={{
            marginTop: 28, padding: "18px 24px", borderRadius: 14,
            background: "var(--gp-green-light)", border: "1px solid var(--gp-green-border)",
            display: "flex", flexWrap: "wrap",
            alignItems: "center", justifyContent: "space-between", gap: 16,
          }}>
            <div style={{ display: "flex", gap: "16px 28px", flexWrap: "wrap" }}>
              {[
                { value: "50+", label: "Projects completed" },
                { value: "800+ kW", label: "Total capacity installed" },
                { value: "6", label: "Regions covered" },
              ].map(s => (
                <div key={s.label}>
                  <p style={{ fontSize: 20, fontWeight: 800, color: "var(--gp-green)", margin: 0 }}>{s.value}</p>
                  <p style={{ fontSize: 12, color: "var(--gp-text-muted)", margin: "2px 0 0" }}>{s.label}</p>
                </div>
              ))}
            </div>
            <Link href="/gallery" style={{
              fontSize: 13, fontWeight: 700, color: "var(--gp-green)",
              textDecoration: "none", display: "flex", alignItems: "center", gap: 6,
            }}>
              Browse all projects
              <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section style={{ padding: "72px 0", backgroundColor: "var(--gp-bg-dark)" }}>
        <div className="gp-container" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 28 }}>
          <div style={{ maxWidth: 500 }}>
            <h2 style={{ fontSize: "clamp(1.5rem,3.5vw,2.2rem)", fontWeight: 800, color: "#fff", margin: "0 0 10px", letterSpacing: "-0.02em" }}>
              Ready to go solar?
            </h2>
            <p style={{ fontSize: "clamp(14px,2vw,16px)", color: "rgba(255,255,255,0.62)", margin: 0, lineHeight: 1.7 }}>
              Talk to our experts — free consultation, no pressure, just honest solar advice for your home or business.
            </p>
          </div>
          <Link href="/company_contact_details" className="gp-btn-accent">Schedule Free Consultation</Link>
        </div>
      </section>

      {/* ── Responsive gallery styles ── */}
      <style>{`
        /* Shared card styles */
        .gp-gallery-teaser {
          display: grid;
          gap: 14px;
          grid-template-columns: 1fr;
        }
        .gp-gallery-card {
          text-decoration: none;
          border-radius: 14px;
          overflow: hidden;
          display: block;
          position: relative;
          min-height: 210px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.10);
          transition: transform 0.22s, box-shadow 0.22s;
        }
        .gp-gallery-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .gp-gallery-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.68) 0%, transparent 55%);
        }
        .gp-gallery-badges {
          position: absolute;
          top: 12px; left: 12px; right: 12px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .gp-gallery-info {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 14px 16px;
        }

        /* Tablet: 2 columns */
        @media (min-width: 600px) {
          .gp-gallery-teaser {
            grid-template-columns: repeat(2, 1fr);
          }
          .gp-gallery-card {
            min-height: 230px;
          }
        }

        /* Desktop: 3-col × 2-row, first card spans full height */
        @media (min-width: 1024px) {
          .gp-gallery-teaser {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: 250px 250px;
          }
          .gp-gallery-card {
            min-height: unset;
          }
          .gp-gallery-card:first-child {
            grid-row: 1 / 3;
          }
        }
      `}</style>

    </div>
  );
}