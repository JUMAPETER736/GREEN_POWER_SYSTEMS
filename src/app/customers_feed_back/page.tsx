"use client";

import Link from "next/link";

export default function CustomerFeedback() {

  const reviews = [
    {
      name: "Chimwemwe Banda",
      location: "Lilongwe",
      initials: "CB",
      stars: 5,
      image: "/images/solar_switches_wall_mounting/Image1.jpeg",
      quote: "Green Power installed a 3kW system on our home. The team was professional and the panels have been running flawlessly for over a year. Our electricity bills dropped by 80%."
    },
    {
      name: "Dr. Grace Nyirenda",
      location: "Area 43, Lilongwe",
      initials: "GN",
      stars: 5,
      image: "/images/solar_switches_wall_mounting/Image2.jpeg",
      quote: "Excellent service from start to finish. They explained everything clearly and installation was fast."
    },
    {
      name: "James Mwale",
      location: "Blantyre",
      initials: "JM",
      stars: 5,
      image: "/images/solar_switches_wall_mounting/Image3.jpeg",
      quote: "Commercial system works perfectly with zero issues."
    },
    {
      name: "Faith Tembo",
      location: "Kasungu",
      initials: "FT",
      stars: 4,
      image: "/images/solar_switches_wall_mounting/Image4.jpeg",
      quote: "Very happy with the system and installation team."
    },
    {
      name: "Emmanuel Chirwa",
      location: "Mzuzu",
      initials: "EC",
      stars: 5,
      image: "/images/solar_switches_wall_mounting/Image5.jpeg",
      quote: "Faulty inverter fixed the same day. Very professional."
    },
    {
      name: "Mercy Phiri",
      location: "Zomba",
      initials: "MP",
      stars: 5,
      image: "/images/solar_switches_wall_mounting/Image6.jpeg",
      quote: "Great consultation with no pressure at all."
    },
  ];

  const avgRating =
    (reviews.reduce((s, r) => s + r.stars, 0) / reviews.length).toFixed(1);

  const LocationIcon = () => (
    <svg
      width={12}
      height={12}
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--gp-green)"
      strokeWidth={2}
    >
      <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
      <circle cx="12" cy="9" r="2" fill="var(--gp-green)" />
    </svg>
  );

  return (
    <div style={{ background: "var(--gp-bg-page)", minHeight: "100vh" }}>

      {/* HERO */}
      <div className="gp-container hero">
        <h1 style={{ color: "var(--gp-text-primary)" }}>Customer Feedback</h1>
        <p style={{ color: "var(--gp-text-muted)" }}>
          Real experiences from our clients across Malawi
        </p>
      </div>

      {/* RATING */}
      <div className="gp-container">
        <h2 style={{ color: "var(--gp-green)" }}>{avgRating} / 5</h2>
      </div>

      {/* GRID */}
      <div className="gp-container">
        <div className="grid">

          {reviews.map(({ name, location, initials, stars, quote, image }) => (
            <div key={name} className="card">

              {/* IMAGE (FULL, NO CROPPING) */}
              <div className="imgBox">
                <img src={image} alt={name} className="img" />
              </div>

              {/* STARS */}
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < stars ? "star filled" : "star"}>
                    ★
                  </span>
                ))}
              </div>

              {/* QUOTE */}
              <p className="quote">“{quote}”</p>

              {/* USER */}
              <div className="user">
                <div className="avatar">{initials}</div>
                <div>
                  <strong style={{ color: "var(--gp-text-primary)" }}>
                    {name}
                  </strong>
                  <div className="location">
                    <LocationIcon />
                    <span>{location}</span>
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* STYLES */}
      <style>{`
        .gp-container {
          padding: 0 1.5rem;
        }

        .hero {
          padding: 40px 0;
        }

        .grid {
          display: grid;
          gap: 20px;
        }

        @media (min-width: 768px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .card {
          background: #fff;
          border: 1px solid var(--gp-green-border);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* IMAGE FIXED (NO CROP) */
        .imgBox {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f5f5f5;
          border-radius: 10px;
          padding: 8px;
        }

        .img {
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 8px;
        }

        .stars {
          display: flex;
          gap: 3px;
        }

        .star {
          color: #ccc;
        }

        .star.filled {
          color: #f5a623;
        }

        .quote {
          font-size: 14px;
          color: var(--gp-text-muted);
        }

        .user {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .avatar {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: var(--gp-green-light);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: var(--gp-green);
        }

        .location {
          display: flex;
          gap: 4px;
          font-size: 12px;
          color: var(--gp-text-subtle);
        }
      `}</style>

    </div>
  );
}