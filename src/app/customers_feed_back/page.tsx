"use client";

import Image from "next/image";

export default function CustomerFeedback() {

  const reviews = [
    {
      name: "Chimwemwe Banda",
      location: "Lilongwe",
      initials: "CB",
      stars: 5,
      image: "/images/solar_switches_wall_mounting/Image1.jpeg",
      quote:
        "Green Power installed a 3kW system on our home. The team was professional and the panels have been running flawlessly for over a year."
    },
    {
      name: "Dr. Grace Nyirenda",
      location: "Area 43, Lilongwe",
      initials: "GN",
      stars: 5,
      image: "/images/solar_switches_wall_mounting/Image2.jpeg",
      quote:
        "Excellent service from start to finish. Everything was explained clearly and installation was fast."
    },
    {
      name: "James Mwale",
      location: "Blantyre",
      initials: "JM",
      stars: 5,
      image: "/images/solar_switches_wall_mounting/Image3.jpeg",
      quote:
        "Their commercial system works perfectly with zero issues for over a year."
    },
    {
      name: "Faith Tembo",
      location: "Kasungu",
      initials: "FT",
      stars: 4,
      image: "/images/solar_switches_wall_mounting/Image4.jpeg",
      quote: "Very happy with the system and installation was smooth."
    },
    {
      name: "Emmanuel Chirwa",
      location: "Mzuzu",
      initials: "EC",
      stars: 5,
      image: "/images/solar_switches_wall_mounting/Image5.jpeg",
      quote: "They fixed our inverter the same day. Very professional."
    },
    {
      name: "Mercy Phiri",
      location: "Zomba",
      initials: "MP",
      stars: 5,
      image: "/images/solar_switches_wall_mounting/Image6.jpeg",
      quote: "Great consultation and perfect system selection."
    },
  ];

  const LocationIcon = () => (
    <svg width={12} height={12} viewBox="0 0 24 24" fill="none"
      stroke="var(--gp-green)" strokeWidth={2}>
      <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
      <circle cx="12" cy="9" r="2" fill="var(--gp-green)" />
    </svg>
  );

  return (
    <div style={{ backgroundColor: "var(--gp-bg-page)", overflowX: "hidden", width: "100%" }}>

      {/* ── Hero ── */}
      <div className="gp-page-hero">
        <div className="gp-container">
          <span className="gp-eyebrow">Customer feedback</span>
          <h1
            className="gp-section-title"
            style={{ width: "100%", wordBreak: "break-word" }}
          >
            What our clients say
          </h1>
          <p className="gp-section-sub" style={{ marginTop: 14, wordBreak: "break-word" }}>
            Real experiences from across Malawi
          </p>
        </div>
      </div>

      {/* ── Reviews grid ── */}
      <section style={{ padding: "clamp(48px, 8vw, 80px) 0", backgroundColor: "var(--gp-bg-page)" }}>
        <div className="gp-container">
          <div className="cf-grid">
            {reviews.map((r) => (
              <div key={r.name} className="cf-card">

                {/* Image */}
                <div className="cf-img-wrap">
                  <Image
                    src={r.image}
                    alt={r.name}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                {/* Stars */}
                <div style={{ display: "flex", gap: 2, marginTop: 4 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span
                      key={i}
                      style={{
                        color: i < r.stars ? "var(--gp-green)" : "#d1d5db",
                        fontSize: 14,
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p style={{
                  fontSize: "clamp(12px, 1.6vw, 13px)",
                  color: "var(--gp-text-muted)",
                  lineHeight: 1.6,
                  margin: 0,
                  wordBreak: "break-word",
                }}>
                  "{r.quote}"
                </p>

                {/* User */}
                <div style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 4 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: "50%",
                    backgroundColor: "var(--gp-green-light)",
                    border: "1.5px solid var(--gp-green-border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 700, color: "var(--gp-green)", fontSize: 12,
                    flexShrink: 0,
                  }}>
                    {r.initials}
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "var(--gp-text-primary)", wordBreak: "break-word" }}>{r.name}</p>
                    <div style={{ display: "flex", gap: 4, fontSize: 11, color: "var(--gp-text-muted)", alignItems: "center" }}>
                      <LocationIcon />
                      {r.location}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Styles ── */}
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
        @media (max-width: 480px) {
          .gp-container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        /* Grid */
        .cf-grid {
          display: grid;
          gap: 16px;
          grid-template-columns: 1fr;
        }
        @media (min-width: 600px) {
          .cf-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (min-width: 768px) {
          .cf-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Card */
        .cf-card {
          display: flex;
          flex-direction: column;
          gap: 6px;
          min-width: 0;
        }

        /* Image */
        .cf-img-wrap {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
          border-radius: 14px;
        }
      `}</style>

    </div>
  );
}