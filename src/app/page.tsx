"use client";

import Link from "next/link";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Expert installation",
    desc: "Certified technicians, guaranteed workmanship, clean finish on every project.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Ongoing maintenance",
    desc: "Round-the-clock support to keep your system producing at peak efficiency.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "Flexible pricing",
    desc: "Competitive rates and financing options designed around your budget.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Eco-friendly",
    desc: "Reduce your carbon footprint and your electricity bill at the same time.",
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

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Hero ── */}
      <section className="bg-white border-b border-gray-200">
        <div className="section-container py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--green-light)] text-[var(--green-primary)] text-xs font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--green-primary)]" />
              Solar energy solutions · Lilongwe, Malawi
            </span>

            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight tracking-tight">
              Power your future with{" "}
              <span className="text-[var(--green-primary)]">clean solar energy</span>
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed max-w-lg">
              Professional installation, sales, and maintenance for homes and businesses. Sustainable energy that pays for itself.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/contact" className="btn-primary">
                Free consultation
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore services
              </Link>
            </div>

            <div className="flex gap-8 pt-4 border-t border-gray-100">
              {[["50+", "Installations"], ["100%", "Satisfaction"], ["24/7", "Support"]].map(([num, label]) => (
                <div key={label}>
                  <p className="text-2xl font-semibold text-[var(--green-primary)]">{num}</p>
                  <p className="text-sm text-gray-400 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — clean SVG illustration */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm bg-gray-50 rounded-2xl border border-gray-100 p-8 aspect-square flex items-center justify-center">
              <svg viewBox="0 0 280 280" className="w-full" xmlns="http://www.w3.org/2000/svg">
                {/* Sun */}
                <circle cx="70" cy="56" r="32" fill="#fbb81c" opacity="0.15" />
                <circle cx="70" cy="56" r="20" fill="#fbb81c" />
                {["0,-30", "21,-21", "30,0", "21,21", "0,30", "-21,21", "-30,0", "-21,-21"].map((d, i) => {
                  const [dx, dy] = d.split(",").map(Number);
                  return (
                    <line key={i}
                      x1={70 + dx * 0.72} y1={56 + dy * 0.72}
                      x2={70 + dx} y2={56 + dy}
                      stroke="#fbb81c" strokeWidth="2.5" strokeLinecap="round" />
                  );
                })}
                {/* Panel left */}
                <rect x="24" y="140" width="96" height="76" rx="5" fill="#0052a3" />
                {[0,1,2].map(row => [0,1,2].map(col => (
                  <rect key={`${row}-${col}`}
                    x={30 + col * 30} y={148 + row * 22}
                    width="22" height="16" rx="3"
                    fill="#4dd9ff" opacity="0.8" />
                )))}
                {/* Panel right */}
                <rect x="136" y="128" width="108" height="88" rx="5" fill="#0066cc" />
                {[0,1,2].map(row => [0,1,2].map(col => (
                  <rect key={`r${row}-c${col}`}
                    x={142 + col * 34} y={136 + row * 26}
                    width="26" height="20" rx="3"
                    fill="#66d4ff" opacity="0.8" />
                )))}
                {/* Leaf */}
                <path d="M196 224 C196 224 206 210 210 198 C206 204 196 214 196 214 Z" fill="#0f5f3f" />
                <path d="M196 224 C196 224 186 210 182 198 C186 204 196 214 196 214 Z" fill="#1a8659" />
                <line x1="196" y1="197" x2="196" y2="228" stroke="#0f5f3f" strokeWidth="2" />
                {/* Energy bolt */}
                <path d="M155 64 L144 82 h10 L142 102 L162 78 h-11 Z" fill="#fbb81c" opacity="0.9" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="py-20 md:py-28">
        <div className="section-container">
          <div className="mb-12">
            <p className="section-eyebrow">Why choose us</p>
            <h2 className="section-title">Built on expertise,<br />driven by results</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="card p-6 space-y-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--green-light)] flex items-center justify-center text-[var(--green-primary)]">
                  {icon}
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 md:py-28 bg-white border-y border-gray-200">
        <div className="section-container">
          <div className="mb-12">
            <p className="section-eyebrow">Our services</p>
            <h2 className="section-title">Everything solar,<br />end to end</h2>
            <p className="section-subtitle mt-3">
              Complete solutions from design and installation through to long-term support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {services.map(({ num, title, desc, featured }) => (
              <div
                key={num}
                className={`card p-7 space-y-3 ${featured ? "border-[var(--green-primary)] border" : ""}`}
              >
                <p className="text-xs font-medium text-gray-400">{num}</p>
                <h3 className="text-base font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                <Link href="/services" className="inline-block text-sm font-medium text-[var(--green-primary)] hover:underline pt-1">
                  Learn more →
                </Link>
              </div>
            ))}
          </div>

          <Link href="/services" className="btn-secondary">
            View all services
          </Link>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-24 bg-[#0a4a30]">
        <div className="section-container flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-semibold text-white">Ready to go solar?</h2>
            <p className="text-[rgba(255,255,255,0.6)] mt-2 max-w-md text-base">
              Get a free consultation from our experts. No commitment, no pressure — just honest advice.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--accent-dark)] font-semibold text-sm rounded-lg hover:opacity-90 transition-opacity"
          >
            Schedule consultation
          </Link>
        </div>
      </section>
    </div>
  );
}