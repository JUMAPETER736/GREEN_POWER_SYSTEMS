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
      quote: "Green Power installed a 3kW system on our home. The team was professional and the panels have been running flawlessly for over a year."
    },
    {
      name: "Dr. Grace Nyirenda",
      location: "Area 43, Lilongwe",
      initials: "GN",
      stars: 5,
      image: "/images/solar_switches_wall_mounting/Image2.jpeg",
      quote: "Excellent service from start to finish. Everything was explained clearly and installation was fast."
    },
    {
      name: "James Mwale",
      location: "Blantyre",
      initials: "JM",
      stars: 5,
      image: "/images/solar_switches_wall_mounting/Image3.jpeg",
      quote: "Their commercial system works perfectly with zero issues for over a year."
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
    <div style={{ background: "var(--gp-bg-page)" }}>

      {/* HERO (tight like About page) */}
      <div className="gp-container" style={{ padding: "32px 0 18px" }}>
        <span className="gp-eyebrow">Customer feedback</span>
        <h1 style={{
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          fontWeight: 800,
          color: "var(--gp-text-primary)",
          margin: "6px 0 4px"
        }}>
          What our clients say
        </h1>

        <p style={{
          fontSize: 13,
          color: "var(--gp-text-muted)",
          margin: 0
        }}>
          Real experiences from across Malawi
        </p>
      </div>

      {/* REVIEWS GRID (NO BORDERS, NO SPACING BOX LOOK) */}
      <div className="gp-container" style={{ paddingBottom: 40 }}>
        <div className="grid">

          {reviews.map((r) => (
            <div key={r.name} className="card">

              {/* FULL IMAGE (NO CROPPING FEEL) */}
              <div className="imgWrap">
                <Image
                  src={r.image}
                  alt={r.name}
                  fill
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* STARS */}
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="star"
                    style={{
                      color: i < r.stars ? "var(--gp-green)" : "#d1d5db"
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* QUOTE */}
              <p className="quote">“{r.quote}”</p>

              {/* USER */}
              <div className="user">
                <div className="avatar">{r.initials}</div>
                <div>
                  <p className="name">{r.name}</p>
                  <div className="location">
                    <LocationIcon />
                    {r.location}
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* STYLE (tight like your About page) */}
      <style>{`
        .gp-container {
          padding-left: 1rem;
          padding-right: 1rem;
          max-width: 100%;
        }

        .grid {
          display: grid;
          gap: 10px; /* reduced spacing */
        }

        @media (min-width: 768px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .card {
          display: flex;
          flex-direction: column;
          gap: 6px;
          background: transparent;
        }

        /* FULL WIDTH IMAGE (NO CROPPING BOX FEEL) */
        .imgWrap {
          position: relative;
          width: 100%;
          height: 220px;
          overflow: hidden;
        }

        .stars {
          display: flex;
          gap: 2px;
          margin-top: 2px;
        }

        .star {
          font-size: 14px;
        }

        .quote {
          font-size: 13px;
          color: var(--gp-text-muted);
          margin: 0;
          line-height: 1.6;
        }

        .user {
          display: flex;
          gap: 10px;
          align-items: center;
          margin-top: 4px;
        }

        .avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--gp-green-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: var(--gp-green);
          font-size: 12px;
        }

        .name {
          margin: 0;
          font-size: 13px;
          font-weight: 700;
          color: var(--gp-text-primary);
        }

        .location {
          display: flex;
          gap: 4px;
          font-size: 11px;
          color: var(--gp-text-muted);
          align-items: center;
        }
      `}</style>

    </div>
  );
}