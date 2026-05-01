"use client";

import Link from "next/link";

export default function CustomerFeedback() {

  const reviews = [
    {
      name: "Chimwemwe Banda",
      location: "Lilongwe",
      initials: "CB",
      stars: 5,
      image: "/images/gallery/image1.jpeg",
      quote: "Green Power installed a 3kW system on our home. The team was professional and the panels have been running flawlessly for over a year. Our electricity bills dropped by 80%."
    },
    {
      name: "Dr. Grace Nyirenda",
      location: "Area 43, Lilongwe",
      initials: "GN",
      stars: 5,
      image: "/images/gallery/image3.jpeg",
      quote: "Excellent service from start to finish. They explained everything clearly, gave us a fair price, and the installation was completed in one day. Highly recommended."
    },
    {
      name: "James Mwale",
      location: "Blantyre",
      initials: "JM",
      stars: 5,
      image: "/images/gallery/image7.jpeg",
      quote: "We use their commercial system at our warehouse. 12 months in and zero issues. Their maintenance team is responsive and professional."
    },
    {
      name: "Faith Tembo",
      location: "Kasungu",
      initials: "FT",
      stars: 4,
      image: "/images/gallery/image9.jpeg",
      quote: "Very happy with the system. Installation took two days and the team cleaned up everything. The app monitoring is a great bonus — I can see output live."
    },
    {
      name: "Emmanuel Chirwa",
      location: "Mzuzu",
      initials: "EC",
      stars: 5,
      image: "/images/gallery/image12.jpeg",
      quote: "We had a faulty inverter from another supplier. Green Power diagnosed and fixed it the same day. Their technical knowledge is unmatched."
    },
    {
      name: "Mercy Phiri",
      location: "Zomba",
      initials: "MP",
      stars: 5,
      image: "/images/gallery/image14.jpeg",
      quote: "The consultation was free and genuinely helpful — no pressure at all. We ended up choosing a system that fits our budget perfectly."
    },
  ];

  const avgRating = (reviews.reduce((s, r) => s + r.stars, 0) / reviews.length).toFixed(1);
  const fiveStarCount = reviews.filter(r => r.stars === 5).length;

  const LocationIcon = () => (
    <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="var(--gp-green)" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" fill="var(--gp-green)" stroke="none" />
    </svg>
  );

  return (
    <div style={{ backgroundColor: "var(--gp-bg-page)", width: "100%" }}>

      {/* HERO */}
      <div className="gp-page-hero">
        <div className="gp-container">
          <span className="gp-eyebrow">What clients say</span>
          <h1 className="gp-section-title">
            Trusted across Malawi
          </h1>
          <p className="gp-section-sub">
            Real experiences from our clients — their words, not ours.
          </p>
        </div>
      </div>

      {/* RATING */}
      <section style={{ padding: "28px 0", borderBottom: "1px solid var(--gp-border)" }}>
        <div className="gp-container">
          <div className="gp-rating-bar">
            <h2 style={{ fontSize: 48, color: "var(--gp-green)" }}>{avgRating}</h2>
            <p>Based on {reviews.length} reviews ({fiveStarCount} are 5★)</p>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "60px 0" }}>
        <div className="gp-container">
          <div className="gp-reviews-grid">

            {reviews.map(({ name, location, initials, stars, quote, image }) => (
              <div key={name} className="gp-card">

                {/* IMAGE */}
                <img
                  src={image}
                  alt={name}
                  className="gp-review-img"
                />

                {/* STARS */}
                <div style={{ display: "flex", gap: 3 }}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < stars ? "★" : "☆"}</span>
                  ))}
                </div>

                {/* QUOTE */}
                <p className="gp-quote">“{quote}”</p>

                {/* USER */}
                <div className="gp-user">
                  <div className="gp-avatar">{initials}</div>
                  <div>
                    <strong>{name}</strong>
                    <div className="gp-location">
                      <LocationIcon />
                      <span>{location}</span>
                    </div>
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "60px 0" }}>
        <h2>Join hundreds of satisfied clients</h2>
        <p>Ready to experience the Green Power difference?</p>
        <Link href="/company_contact_details" className="gp-btn-primary">
          Get your free quote
        </Link>
      </section>

      {/* STYLES */}
      <style>{`
        .gp-container {
          padding: 0 1.5rem;
        }

        .gp-reviews-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        @media (min-width: 768px) {
          .gp-reviews-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .gp-card {
          padding: 20px;
          border: 1px solid var(--gp-border);
          border-radius: 10px;
          background: #fff;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .gp-review-img {
          width: 100%;
          height: 160px;
          object-fit: cover;
          border-radius: 8px;
        }

        .gp-quote {
          font-size: 14px;
          color: #555;
        }

        .gp-user {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .gp-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #eaf5ef;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: green;
        }

        .gp-location {
          display: flex;
          gap: 4px;
          font-size: 12px;
          color: #777;
        }
      `}</style>

    </div>
  );
}