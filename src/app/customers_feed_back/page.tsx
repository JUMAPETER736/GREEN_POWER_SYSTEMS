import Link from "next/link";

export default function Testimonials() {

  // Review data 
  // Add or remove review objects here to update the testimonials grid
  const reviews = [
    { name: "Chimwemwe Banda", location: "Lilongwe", initials: "CB", stars: 5, quote: "Green Power installed a 3kW system on our home. The team was professional and the panels have been running flawlessly for over a year. Our electricity bills dropped by 80%." },
    { name: "Dr. Grace Nyirenda", location: "Area 43, Lilongwe", initials: "GN", stars: 5, quote: "Excellent service from start to finish. They explained everything clearly, gave us a fair price, and the installation was completed in one day. Highly recommended." },
    { name: "James Mwale", location: "Blantyre", initials: "JM", stars: 5, quote: "We use their commercial system at our warehouse. 12 months in and zero issues. Their maintenance team is responsive and professional." },
    { name: "Faith Tembo", location: "Kasungu", initials: "FT", stars: 4, quote: "Very happy with the system. Installation took two days and the team cleaned up everything. The app monitoring is a great bonus — I can see output live." },
    { name: "Emmanuel Chirwa", location: "Mzuzu", initials: "EC", stars: 5, quote: "We had a faulty inverter from another supplier. Green Power diagnosed and fixed it the same day. Their technical knowledge is unmatched." },
    { name: "Mercy Phiri", location: "Zomba", initials: "MP", stars: 5, quote: "The consultation was free and genuinely helpful — no pressure at all. We ended up choosing a system that fits our budget perfectly." },
  ];

  // ── Derived stats (auto-calculated from reviews array above) ─────────────────
  const avgRating = (reviews.reduce((s, r) => s + r.stars, 0) / reviews.length).toFixed(1);
  const fiveStarCount = reviews.filter(r => r.stars === 5).length;

  return (
    <div style={{ backgroundColor: "var(--gp-bg-page)", overflowX: "hidden", width: "100%" }}>

      {/*  Page Hero 
           Top banner with eyebrow label, heading, and subheading               */}
      <div className="gp-page-hero">
        <div className="gp-container">
          <span className="gp-eyebrow">What clients say</span>
          <h1 className="gp-section-title" style={{ width: "100%", wordBreak: "break-word" }}>
            Trusted by homes, commercial and industrial areas across Malawi
          </h1>
          <p className="gp-section-sub" style={{ marginTop: 14, wordBreak: "break-word" }}>
            Real experiences from our clients — their words, not ours.
          </p>
        </div>
      </div>

      {/*  Rating Summary Bar 
           Shows average score, 5-star count, recommendation rate, response time */}
      <section style={{
        backgroundColor: "var(--gp-bg-card)",
        borderBottom: "1px solid var(--gp-border)",
        padding: "clamp(20px, 4vw, 28px) 0",
      }}>
        <div className="gp-container">
          <div className="gp-rating-bar">

            {/* Average numeric score + 5 filled stars */}
            <div className="gp-rating-score">
              <p style={{
                fontSize: "clamp(36px, 8vw, 52px)",
                fontWeight: 800, color: "var(--gp-green)",
                margin: 0, lineHeight: 1,
              }}>{avgRating}</p>
              <div>
                {/* Always render 5 filled stars regardless of score */}
                <div style={{ display: "flex", gap: 3, marginBottom: 4 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width={18} height={18} viewBox="0 0 24 24" fill="#f5a623">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: "var(--gp-text-muted)", margin: 0 }}>
                  Based on {reviews.length} reviews
                </p>
              </div>
            </div>

            {/* Vertical divider — hidden on mobile via CSS */}
            <div className="gp-rating-divider" />

            {/* Quick stats: 5-star count, recommendation %, response time */}
            <div className="gp-rating-stats">
              {[
                { value: `${fiveStarCount}/${reviews.length}`, label: "5-star reviews" },
                { value: "100%", label: "Would recommend" },
                { value: "2 hrs", label: "Avg. response time" },
              ].map(s => (
                <div key={s.label} style={{ textAlign: "center", minWidth: 0 }}>
                  <p style={{ fontSize: "clamp(18px, 4vw, 24px)", fontWeight: 800, color: "var(--gp-green)", margin: 0, lineHeight: 1, wordBreak: "break-word" }}>{s.value}</p>
                  <p style={{ fontSize: "clamp(11px, 1.5vw, 12px)", color: "var(--gp-text-muted)", margin: "4px 0 0", wordBreak: "break-word" }}>{s.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/*  Reviews Grid 
           1 col on mobile → 2 col on tablet → 3 col on desktop
           Each card shows: star rating, quote, reviewer avatar + name + location */}
      <section style={{ padding: "clamp(40px, 7vw, 72px) 0" }}>
        <div className="gp-container">
          <div className="gp-reviews-grid">
            {reviews.map(({ name, location, initials, stars, quote }) => (
              <div key={name} className="gp-card" style={{
                padding: "clamp(20px, 4vw, 28px)",
                display: "flex", flexDirection: "column", gap: 14,
                minWidth: 0,
              }}>

                {/* Star rating — filled stars based on review.stars value */}
                <div style={{ display: "flex", gap: 3 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width={15} height={15} viewBox="0 0 24 24"
                      fill={i < stars ? "#f5a623" : "#e0e0e0"}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Review quote text — flexGrow pushes reviewer info to bottom */}
                <p style={{
                  fontSize: "clamp(13px, 2vw, 14px)",
                  color: "var(--gp-text-muted)",
                  lineHeight: 1.75, margin: 0, flexGrow: 1,
                  wordBreak: "break-word",
                }}>
                  &ldquo;{quote}&rdquo;
                </p>

                {/* Reviewer info — initials avatar + name + location */}
                <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 12, borderTop: "1px solid var(--gp-border)" }}>
                  {/* Avatar circle using reviewer initials */}
                  <div style={{
                    width: 40, height: 40, borderRadius: "50%",
                    backgroundColor: "var(--gp-green-light)",
                    border: "1.5px solid var(--gp-green-border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 13, fontWeight: 700, color: "var(--gp-green)", flexShrink: 0,
                  }}>{initials}</div>
                  <div style={{ minWidth: 0 }}>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "var(--gp-text-primary)", margin: 0, wordBreak: "break-word" }}>{name}</p>
                    <p style={{ fontSize: 12, color: "var(--gp-text-subtle)", margin: 0, wordBreak: "break-word" }}>📍 {location}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  Bottom CTA 
           Encourages visitors to get a free quote after reading reviews          */}
      <section style={{
        padding: "clamp(48px, 7vw, 72px) 0",
        backgroundColor: "var(--gp-bg-section)",
        borderTop: "1px solid var(--gp-border)",
      }}>
        <div className="gp-container" style={{ textAlign: "center" }}>
          <h2 style={{
            fontSize: "clamp(1.4rem, 3.5vw, 2rem)",
            fontWeight: 800, color: "var(--gp-text-primary)",
            margin: "0 0 12px", letterSpacing: "-0.01em",
            wordBreak: "break-word",
          }}>
            Join hundreds of satisfied clients
          </h2>
          <p style={{
            fontSize: "clamp(14px, 2vw, 15px)",
            color: "var(--gp-text-muted)",
            margin: "0 auto 28px", lineHeight: 1.7, maxWidth: "100%",
            wordBreak: "break-word",
          }}>
            Ready to experience the Green Power difference?
          </p>
          <Link href="/company_contact_details" className="gp-btn-primary">
            Get your free quote
          </Link>
        </div>
      </section>

      {/*  Scoped Responsive Styles 
           Grid breakpoints and rating bar layout adjustments for mobile/tablet   */}
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

        /* Rating bar layout */
        .gp-rating-bar {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 24px;
          width: 100%;
        }
        .gp-rating-score {
          display: flex;
          align-items: center;
          gap: 16px;
          min-width: 0;
        }
        .gp-rating-divider {
          width: 1px;
          height: 48px;
          background: var(--gp-border);
          flex-shrink: 0;
        }
        .gp-rating-stats {
          display: flex;
          gap: clamp(16px, 4vw, 40px);
          flex-wrap: wrap;
          min-width: 0;
        }

        /* Reviews grid — mobile first */
        .gp-reviews-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          width: 100%;
        }

        /* Tablet: 2 columns */
        @media (min-width: 600px) {
          .gp-reviews-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Desktop: 3 columns */
        @media (min-width: 960px) {
          .gp-reviews-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Mobile tweaks */
        @media (max-width: 480px) {
          .gp-container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          /* Hide divider on small screens to save space */
          .gp-rating-divider {
            display: none;
          }
          .gp-rating-bar {
            gap: 16px;
          }
        }
      `}</style>

    </div>
  );
}