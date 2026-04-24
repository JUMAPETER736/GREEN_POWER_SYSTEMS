"use client";
import Link from "next/link";

export default function Products() {

  // ── Product categories data ───────────────────────────────────────────────────
  // Each category has a title, icon, and array of product items.
  // To add a new category, push a new object into this array.
  // To add a product, push a new object into the relevant category's items array.
  const categories = [
    {
      title: "Solar Panels",
      // Category icon — inline SVG using currentColor so it inherits gp-cat-icon color
      icon: (
        <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <line x1="12" y1="12" x2="12" y2="16" />
          <line x1="10" y1="14" x2="14" y2="14" />
        </svg>
      ),
      items: [
        { name: "Monocrystalline 400W", desc: "High-efficiency panels ideal for limited roof space.", badge: "Best seller" },
        { name: "Polycrystalline 330W", desc: "Cost-effective option for larger installations.", badge: "" },
        { name: "Bifacial 450W", desc: "Captures light from both sides for maximum output.", badge: "Premium" },
      ],
    },
    {
      title: "Inverters",
      icon: (
        <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      ),
      items: [
        { name: "Hybrid 5kW Inverter", desc: "Grid-tie with battery backup — ideal for homes.", badge: "Popular" },
        { name: "Off-grid 3kW Inverter", desc: "Perfect for rural properties away from the grid.", badge: "" },
        { name: "3-phase 10kW Inverter", desc: "Commercial-grade, three-phase power management.", badge: "Commercial" },
      ],
    },
    {
      title: "Battery Storage",
      icon: (
        <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="16" height="10" rx="2" />
          <path d="M22 11v2" />
          <line x1="6" y1="11" x2="6" y2="13" />
          <line x1="10" y1="11" x2="10" y2="13" />
        </svg>
      ),
      items: [
        { name: "Lithium 5kWh Battery", desc: "Compact lithium storage for overnight power.", badge: "" },
        { name: "Lithium 10kWh Battery", desc: "Extended storage for larger homes or businesses.", badge: "Best value" },
        { name: "Lead-acid 200Ah", desc: "Reliable and affordable deep-cycle battery bank.", badge: "" },
      ],
    },
    {
      title: "Accessories & Mounting",
      icon: (
        <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14" />
        </svg>
      ),
      items: [
        { name: "Roof Mounting Kits", desc: "Aluminium rail systems for tiled or metal roofs.", badge: "" },
        { name: "Solar Charge Controllers", desc: "MPPT controllers for off-grid systems.", badge: "" },
        { name: "Monitoring Systems", desc: "Real-time performance dashboards via app or web.", badge: "New" },
      ],
    },
  ];

  // ── Badge colour map ──────────────────────────────────────────────────────────
  // Maps each badge label to its background, text, and border colour.
  // Add a new entry here if you introduce a new badge type in the items above.
  const BADGE_STYLES: Record<string, { bg: string; color: string; border: string }> = {
    "Best seller": { bg: "var(--gp-green-light)", color: "var(--gp-green)",  border: "var(--gp-green-border)" },
    "Premium":     { bg: "#fef3c7",               color: "#92400e",           border: "#fde68a" },
    "Popular":     { bg: "var(--gp-green-light)", color: "var(--gp-green)",  border: "var(--gp-green-border)" },
    "Commercial":  { bg: "#dbeafe",               color: "#1d4ed8",           border: "#bfdbfe" },
    "Best value":  { bg: "#f3e8ff",               color: "#7c3aed",           border: "#e9d5ff" },
    "New":         { bg: "#fce7f3",               color: "#be185d",           border: "#fbcfe8" },
  };

  return (
    <div style={{ backgroundColor: "var(--gp-bg-page)", overflowX: "hidden", width: "100%" }}>

      {/* ── Page Hero ──────────────────────────────────────────────────────────────
           Top banner with eyebrow label, heading, and subheading                 */}
      <div className="gp-page-hero">
        <div className="gp-container">
          <span className="gp-eyebrow">Our products</span>
          <h1 className="gp-section-title" style={{ width: "100%", wordBreak: "break-word" }}>
            Quality solar equipment, competitively priced
          </h1>
          <p className="gp-section-sub" style={{ marginTop: 14, wordBreak: "break-word" }}>
            We stock and supply leading solar brands. All products come with manufacturer warranties and our full installation support.
          </p>
        </div>
      </div>

      {/* ── Quick-jump Nav ─────────────────────────────────────────────────────────
           Sticky tab bar that smooth-scrolls to each category section.
           Anchor IDs are auto-generated from category titles below.              */}
      <nav className="gp-products-jumpnav">
        <div className="gp-container">
          <div className="gp-jumpnav-inner">
            {categories.map(({ title }) => (
              
                key={title}
                href={`#cat-${title.toLowerCase().replace(/\s+&?\s*/g, "-")}`}
                className="gp-jumpnav-link"
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Product Categories ─────────────────────────────────────────────────────
           Stacked column of category blocks, each with a heading and product grid */}
      <section style={{ padding: "56px 0 80px" }}>
        <div className="gp-container gp-categories-col">

          {categories.map(({ title, icon, items }) => {
            // Generate anchor ID from category title e.g. "Solar Panels" → "cat-solar-panels"
            const anchorId = `cat-${title.toLowerCase().replace(/\s+&?\s*/g, "-")}`;
            return (
              <div key={title} id={anchorId} className="gp-category-block">

                {/* Category heading row — icon + title */}
                <div className="gp-cat-heading">
                  <span className="gp-cat-icon">{icon}</span>
                  <h2 className="gp-cat-title">{title}</h2>
                </div>

                {/* Product cards grid — 1 col mobile, 2 tablet, 3 desktop */}
                <div className="gp-products-grid">
                  {items.map(({ name, desc, badge }) => {
                    // Look up badge styles — null if no badge on this product
                    const bs = badge ? BADGE_STYLES[badge] : null;
                    return (
                      <div key={name} className="gp-card gp-product-card">

                        {/* Card top row — product name + optional badge */}
                        <div className="gp-product-card-top">
                          <h3 className="gp-product-name">{name}</h3>
                          {/* Only render badge span if this product has one */}
                          {bs && (
                            <span
                              className="gp-product-badge"
                              style={{
                                backgroundColor: bs.bg,
                                color: bs.color,
                                border: `1px solid ${bs.border}`,
                              }}
                            >
                              {badge}
                            </span>
                          )}
                        </div>

                        {/* Short product description */}
                        <p className="gp-product-desc">{desc}</p>

                        {/* Enquire link — routes to contact page */}
                        <Link href="/company_contact_details" className="gp-product-enquire">
                          Enquire →
                        </Link>

                      </div>
                    );
                  })}
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* ── Bottom CTA ─────────────────────────────────────────────────────────────
           Dark banner for visitors looking for products not listed above          */}
      <section style={{ padding: "64px 0", backgroundColor: "var(--gp-bg-dark)" }}>
        <div className="gp-container gp-cta-inner">
          <div style={{ minWidth: 0 }}>
            <h2 className="gp-cta-heading">Looking for a specific product?</h2>
            <p className="gp-cta-sub">
              We can source and supply products not listed here. Contact us with your specs.
            </p>
          </div>
          {/* CTA button — links to contact page */}
          <Link href="/company_contact_details" className="gp-btn-accent gp-cta-btn">
            Contact our team
          </Link>
        </div>
      </section>

      {/* ── Scoped Responsive Styles ───────────────────────────────────────────────
           Jump nav, category grid, product cards, and CTA layout                 */}
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

        /* ── Jump nav — sticky below the main navbar ── */
        .gp-products-jumpnav {
          background: var(--gp-bg-card);
          border-bottom: 1px solid var(--gp-border);
          padding: 0;
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .gp-jumpnav-inner {
          display: flex;
          gap: 0;
          overflow-x: auto;           /* scrollable on mobile */
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;      /* hide scrollbar Firefox */
        }
        .gp-jumpnav-inner::-webkit-scrollbar { display: none; } /* hide scrollbar Chrome */
        .gp-jumpnav-link {
          flex-shrink: 0;
          padding: 14px 20px;
          font-size: 13px;
          font-weight: 600;
          color: var(--gp-text-muted);
          text-decoration: none;
          border-bottom: 2px solid transparent;
          transition: color 0.18s, border-color 0.18s;
          white-space: nowrap;
        }
        .gp-jumpnav-link:hover {
          color: var(--gp-green);
          border-bottom-color: var(--gp-green);
        }

        /* ── Categories column layout ── */
        .gp-categories-col {
          display: flex;
          flex-direction: column;
          gap: 52px;
        }

        /* ── Category block ── */
        .gp-category-block {
          scroll-margin-top: 56px; /* offset for sticky nav when jumping to anchor */
          min-width: 0;
        }
        .gp-cat-heading {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--gp-border);
          margin-bottom: 20px;
        }
        .gp-cat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: var(--gp-green-light);
          color: var(--gp-green);
          flex-shrink: 0;
        }
        .gp-cat-title {
          font-size: clamp(16px, 2.5vw, 19px);
          font-weight: 700;
          color: var(--gp-text-primary);
          margin: 0;
          word-break: break-word;
          min-width: 0;
        }

        /* ── Products grid — mobile first ── */
        .gp-products-grid {
          display: grid;
          gap: 14px;
          grid-template-columns: 1fr;
          width: 100%;
        }
        /* Tablet: 2 columns */
        @media (min-width: 560px) {
          .gp-products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        /* Desktop: 3 columns */
        @media (min-width: 960px) {
          .gp-products-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* ── Product card ── */
        .gp-product-card {
          padding: 20px 20px 22px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-width: 0;
          transition: box-shadow 0.2s, transform 0.2s;
        }
        .gp-product-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(0,0,0,0.10);
        }
        .gp-product-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 10px;
          min-width: 0;
        }
        .gp-product-name {
          font-size: 14px;
          font-weight: 700;
          color: var(--gp-text-primary);
          margin: 0;
          line-height: 1.35;
          flex: 1;
          min-width: 0;
          word-break: break-word;
        }
        .gp-product-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 100px;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .gp-product-desc {
          font-size: 13px;
          color: var(--gp-text-muted);
          line-height: 1.65;
          margin: 0;
          flex: 1;
          word-break: break-word;
        }
        /* Enquire link — arrow gap animates on hover */
        .gp-product-enquire {
          font-size: 12.5px;
          font-weight: 700;
          color: var(--gp-green);
          text-decoration: none;
          margin-top: 6px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          transition: gap 0.18s;
        }
        .gp-product-enquire:hover {
          gap: 8px;
        }

        /* ── Bottom CTA — stacks on mobile, side-by-side on tablet+ ── */
        .gp-cta-inner {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;
          text-align: left;
        }
        .gp-cta-heading {
          font-size: clamp(1.3rem, 3.5vw, 2rem);
          font-weight: 800;
          color: #fff;
          margin: 0 0 10px;
          letter-spacing: -0.02em;
          word-break: break-word;
        }
        .gp-cta-sub {
          font-size: clamp(13px, 2vw, 15px);
          color: rgba(255,255,255,0.62);
          margin: 0;
          line-height: 1.7;
          word-break: break-word;
        }
        .gp-cta-btn {
          flex-shrink: 0;
          width: 100%;
          justify-content: center;
          display: flex;
        }
        @media (min-width: 640px) {
          .gp-cta-inner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            text-align: left;
          }
          .gp-cta-btn {
            width: auto;
          }
        }

        /* Extra small screens */
        @media (max-width: 480px) {
          .gp-container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>

    </div>
  );
}