"use client";

import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Expert installation",
      desc: "Certified technicians, guaranteed workmanship, clean finish on every project.",
      path: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
    },
    {
      title: "Ongoing maintenance",
      desc: "Round-the-clock support to keep your system producing at peak efficiency.",
      path: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
    },
    {
      title: "Flexible pricing",
      desc: "Competitive rates and financing options designed around your budget.",
      path: "M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",
    },
    {
      title: "Eco-friendly",
      desc: "Reduce your carbon footprint and your electricity bill at the same time.",
      path: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    },
  ];

  const services = [
    {
      num: "01",
      title: "Solar panel installation",
      desc: "End-to-end system design and professional installation for homes and commercial properties.",
      featured: true,
    },
    {
      num: "02",
      title: "System maintenance",
      desc: "Scheduled servicing to maximise output and extend the lifespan of your installation.",
      featured: false,
    },
    {
      num: "03",
      title: "Repairs & upgrades",
      desc: "Fast fault diagnosis and system upgrades to keep your energy flowing without interruption.",
      featured: false,
    },
  ];

  const stats = [
    { num: "50+", label: "Installations" },
    { num: "100%", label: "Satisfaction" },
    { num: "24/7", label: "Support" },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f9fafb" }}>

      {/* ── Hero ── */}
      <section style={{ backgroundColor: "#fff", borderBottom: "1px solid #e5e7eb" }}>
        <div className="gp-container" style={{ padding: "80px 1.5rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 64,
            alignItems: "center",
          }}>

            {/* Left copy */}
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "4px 12px", borderRadius: 100,
                backgroundColor: "#e8f5ee",
                color: "#0f5f3f",
                fontSize: 12, fontWeight: 500,
                width: "fit-content",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#0f5f3f" }} />
                Solar energy solutions · Lilongwe, Malawi
              </span>

              <h1 style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: "#111827",
                lineHeight: 1.15,
                margin: 0,
              }}>
                Power your future with{" "}
                <span style={{ color: "#0f5f3f" }}>clean solar energy</span>
              </h1>

              <p style={{
                fontSize: 17, color: "#6b7280",
                lineHeight: 1.65, margin: 0, maxWidth: 480,
              }}>
                Professional installation, sales, and maintenance for homes and businesses. Sustainable energy that pays for itself.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                <Link href="/contact" className="gp-btn-primary">Free consultation</Link>
                <Link href="/services" className="gp-btn-secondary">Explore services</Link>
              </div>

              <div style={{
                display: "flex", gap: 32,
                paddingTop: 20,
                borderTop: "1px solid #f3f4f6",
              }}>
                {stats.map(({ num, label }) => (
                  <div key={label}>
                    <p style={{ fontSize: 24, fontWeight: 700, color: "#0f5f3f", margin: 0 }}>{num}</p>
                    <p style={{ fontSize: 13, color: "#9ca3af", marginTop: 4 }}>{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right illustration */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: 20,
                padding: 40,
                width: "100%", maxWidth: 380,
                aspectRatio: "1",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg viewBox="0 0 280 280" style={{ width: "100%" }} xmlns="http://www.w3.org/2000/svg">
                  <circle cx="70" cy="56" r="32" fill="#fbb81c" opacity="0.15" />
                  <circle cx="70" cy="56" r="20" fill="#fbb81c" />
                  {[0,45,90,135,180,225,270,315].map((angle) => {
                    const r = Math.PI * angle / 180;
                    return (
                      <line key={angle}
                        x1={70 + Math.sin(r)*27} y1={56 - Math.cos(r)*27}
                        x2={70 + Math.sin(r)*37} y2={56 - Math.cos(r)*37}
                        stroke="#fbb81c" strokeWidth="2.5" strokeLinecap="round" />
                    );
                  })}
                  <rect x="20" y="140" width="100" height="76" rx="5" fill="#0052a3" />
                  <rect x="26" y="148" width="23" height="17" rx="3" fill="#4dd9ff" opacity="0.85" />
                  <rect x="55" y="148" width="23" height="17" rx="3" fill="#4dd9ff" opacity="0.85" />
                  <rect x="84" y="148" width="23" height="17" rx="3" fill="#4dd9ff" opacity="0.85" />
                  <rect x="26" y="170" width="23" height="17" rx="3" fill="#4dd9ff" opacity="0.85" />
                  <rect x="55" y="170" width="23" height="17" rx="3" fill="#4dd9ff" opacity="0.85" />
                  <rect x="84" y="170" width="23" height="17" rx="3" fill="#4dd9ff" opacity="0.85" />
                  <rect x="26" y="192" width="23" height="17" rx="3" fill="#4dd9ff" opacity="0.85" />
                  <rect x="55" y="192" width="23" height="17" rx="3" fill="#4dd9ff" opacity="0.85" />
                  <rect x="84" y="192" width="23" height="17" rx="3" fill="#4dd9ff" opacity="0.85" />
                  <rect x="138" y="126" width="118" height="90" rx="5" fill="#0066cc" />
                  <rect x="145" y="134" width="28" height="21" rx="3" fill="#66d4ff" opacity="0.85" />
                  <rect x="179" y="134" width="28" height="21" rx="3" fill="#66d4ff" opacity="0.85" />
                  <rect x="213" y="134" width="28" height="21" rx="3" fill="#66d4ff" opacity="0.85" />
                  <rect x="145" y="160" width="28" height="21" rx="3" fill="#66d4ff" opacity="0.85" />
                  <rect x="179" y="160" width="28" height="21" rx="3" fill="#66d4ff" opacity="0.85" />
                  <rect x="213" y="160" width="28" height="21" rx="3" fill="#66d4ff" opacity="0.85" />
                  <rect x="145" y="186" width="28" height="21" rx="3" fill="#66d4ff" opacity="0.85" />
                  <rect x="179" y="186" width="28" height="21" rx="3" fill="#66d4ff" opacity="0.85" />
                  <rect x="213" y="186" width="28" height="21" rx="3" fill="#66d4ff" opacity="0.85" />
                  <path d="M196 230 C196 230 205 216 208 204 C204 210 196 222 196 222Z" fill="#0f5f3f" />
                  <path d="M196 230 C196 230 187 216 184 204 C188 210 196 222 196 222Z" fill="#1a8659" />
                  <line x1="196" y1="203" x2="196" y2="234" stroke="#0f5f3f" strokeWidth="2" />
                  <path d="M156 68 L144 86h11L142 108 L164 80h-12Z" fill="#fbb81c" opacity="0.9" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section style={{ padding: "80px 0" }}>
        <div className="gp-container">
          <div style={{ marginBottom: 48 }}>
            <p style={{
              fontSize: 11, fontWeight: 600, color: "#0f5f3f",
              letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 8,
            }}>Why choose us</p>
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, color: "#111827", margin: 0 }}>
              Built on expertise, driven by results
            </h2>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
          }}>
            {features.map(({ title, desc, path }) => (
              <div key={title} className="gp-card" style={{ padding: 24 }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  backgroundColor: "#e8f5ee",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 16, flexShrink: 0,
                }}>
                  <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                    stroke="#0f5f3f" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    <path d={path} />
                  </svg>
                </div>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: "#111827", marginBottom: 8 }}>{title}</h3>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section style={{
        padding: "80px 0",
        backgroundColor: "#fff",
        borderTop: "1px solid #e5e7eb",
        borderBottom: "1px solid #e5e7eb",
      }}>
        <div className="gp-container">
          <div style={{ marginBottom: 48 }}>
            <p style={{
              fontSize: 11, fontWeight: 600, color: "#0f5f3f",
              letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: 8,
            }}>Our services</p>
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, color: "#111827", margin: 0 }}>
              Everything solar, end to end
            </h2>
            <p style={{ fontSize: 16, color: "#6b7280", lineHeight: 1.65, marginTop: 12, maxWidth: 520 }}>
              Complete solutions from design and installation through to long-term support.
            </p>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16, marginBottom: 32,
          }}>
            {services.map(({ num, title, desc, featured }) => (
              <div key={num} style={{
                padding: 28,
                backgroundColor: "#fff",
                border: `${featured ? "2px solid #0f5f3f" : "1px solid #e5e7eb"}`,
                borderRadius: 12,
                transition: "box-shadow 0.2s",
                display: "flex", flexDirection: "column", gap: 10,
              }}>
                <p style={{ fontSize: 11, fontWeight: 500, color: "#9ca3af", margin: 0 }}>{num}</p>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "#111827", margin: 0 }}>{title}</h3>
                <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, margin: 0, flexGrow: 1 }}>{desc}</p>
                <Link href="/services" style={{
                  fontSize: 13, fontWeight: 600,
                  color: "#0f5f3f", textDecoration: "none",
                  marginTop: 4,
                }}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>

          <Link href="/services" className="gp-btn-secondary">View all services</Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "80px 0", backgroundColor: "#0a4a30" }}>
        <div className="gp-container" style={{
          display: "flex", flexWrap: "wrap",
          alignItems: "center", justifyContent: "space-between",
          gap: 32,
        }}>
          <div>
            <h2 style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700, color: "#fff", margin: 0 }}>
              Ready to go solar?
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", marginTop: 8, maxWidth: 440, lineHeight: 1.6 }}>
              Get a free consultation from our experts. No commitment, no pressure — just honest advice.
            </p>
          </div>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center",
            padding: "12px 28px",
            backgroundColor: "#fbb81c",
            color: "#1a1a1a",
            fontWeight: 700, fontSize: 14,
            borderRadius: 8, textDecoration: "none",
            flexShrink: 0,
            transition: "opacity 0.2s",
          }}>
            Schedule consultation
          </Link>
        </div>
      </section>
    </div>
  );
}