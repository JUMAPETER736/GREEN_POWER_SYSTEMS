

import type { Metadata } from "next";
import GalleryGrid from "../components/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery | Green Power Systems",
  description:
    "Browse our portfolio of solar panel installations across Lilongwe and Malawi. Real projects, real results.",
};

export default function GalleryPage() {
  return (
    <main>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--gp-green) 0%, #1a4731 100%)",
          padding: "96px 24px 72px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        <p
          style={{
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.75,
            marginBottom: 16,
          }}
        >
          Our Work
        </p>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: 20,
          }}
        >
          Installations We&rsquo;re Proud Of
        </h1>
        <p
          style={{
            maxWidth: 560,
            margin: "0 auto",
            fontSize: "1.05rem",
            opacity: 0.85,
            lineHeight: 1.65,
          }}
        >
          Every project is a commitment to quality. Browse before-and-after
          photos, system specs, and client outcomes from across Malawi.
        </p>
      </section>

      {/* Gallery */}
      <GalleryGrid />
    </main>
  );
}