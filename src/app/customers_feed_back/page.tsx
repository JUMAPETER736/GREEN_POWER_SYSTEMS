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
      quote: "Excellent service from start to finish. They explained everything clearly, gave us a fair price, and the installation was completed in one day. Highly recommended."
    },
    {
      name: "James Mwale",
      location: "Blantyre",
      initials: "JM",
      stars: 5,
      image: "/images/solar_switches_wall_mounting/Image3.jpeg",
      quote: "We use their commercial system at our warehouse. 12 months in and zero issues. Their maintenance team is responsive and professional."
    },
    {
      name: "Faith Tembo",
      location: "Kasungu",
      initials: "FT",
      stars: 4,
      image: "/images/solar_switches_wall_mounting/Image4.jpeg",
      quote: "Very happy with the system. Installation took two days and the team cleaned up everything."
    },
    {
      name: "Emmanuel Chirwa",
      location: "Mzuzu",
      initials: "EC",
      stars: 5,
      image: "/images/solar_switches_wall_mounting/Image5.jpeg",
      quote: "We had a faulty inverter from another supplier. Green Power diagnosed and fixed it the same day."
    },
    {
      name: "Mercy Phiri",
      location: "Zomba",
      initials: "MP",
      stars: 5,
      image: "/images/solar_switches_wall_mounting/Image6.jpeg",
      quote: "The consultation was free and genuinely helpful — no pressure at all."
    },
  ];

  const avgRating = (reviews.reduce((s, r) => s + r.stars, 0) / reviews.length).toFixed(1);

  const LocationIcon = () => (
    <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="var(--gp-green)" strokeWidth={2}>
      <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z"/>
      <circle cx="12" cy="9" r="2" fill="var(--gp-green)" />
    </svg>
  );

  return (
    <div style={{ background: "var(--gp-bg-page)" }}>

      {/* HERO */}
      <div className="gp-container" style={{ padding: "40px 0" }}>
        <h1>Customer Feedback</h1>
        <p>Real experiences from our clients across Malawi</p>
      </div>

      {/* RATING */}
      <div className="gp-container" style={{ marginBottom: 30 }}>
        <h2 style={{ color: "green" }}>{avgRating} / 5</h2>
      </div>

      {/* REVIEWS */}
      <div className="gp-container">
        <div className="grid">

          {reviews.map(({ name, location, initials, stars, quote, image }) => (
            <div key={name} className="card">

              {/* IMAGE */}
              <img src={image} alt={name} className="img" />

              {/* STARS (styled to match theme) */}
              <div className="stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className={i < stars ? "star filled" : "star"}>
                    ★
                  </span>
                ))}
              </div>

              {/* TEXT */}
              <p className="quote">“{quote}”</p>

              {/* USER */}
              <div className="user">
                <div className="avatar">{initials}</div>
                <div>
                  <strong>{name}</strong>
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

      {/* CTA */}
      <div style={{ textAlign: "center", padding: "50px 0" }}>
        <Link href="/company_contact_details" className="btn">
          Get your free quote
        </Link>
      </div>

      {/* STYLES */}
      <style>{`
        .gp-container {
          padding: 0 1.5rem;
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
          background: white;
          border: 1px solid #ddd;
          border-radius: 10px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .img {
          width: 100%;
          height: 150px;
          object-fit: cover;
          border-radius: 8px;
        }

        .stars {
          display: flex;
          gap: 3px;
        }

        .star {
          color: #ccc;
          font-size: 16px;
        }

        .star.filled {
          color: #f5a623;
        }

        .quote {
          font-size: 14px;
          color: #555;
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
          background: #eaf5ef;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: green;
        }

        .location {
          display: flex;
          gap: 4px;
          font-size: 12px;
          color: #777;
        }

        .btn {
          background: green;
          color: white;
          padding: 10px 20px;
          border-radius: 6px;
          text-decoration: none;
        }
      `}</style>

    </div>
  );
}