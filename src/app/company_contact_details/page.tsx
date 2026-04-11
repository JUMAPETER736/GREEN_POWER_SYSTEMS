"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", service: "", message: "",
  });

  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "11px 14px",
    fontSize: 14, color: "var(--gp-text-primary)",
    backgroundColor: "var(--gp-bg-card)",
    border: "1.5px solid var(--gp-border)",
    borderRadius: 8, outline: "none",
    transition: "border-color 0.15s",
    fontFamily: "inherit",
  };

  return (
    <div style={{ backgroundColor: "var(--gp-bg-page)" }}>

      <div className="gp-page-hero">
        <div className="gp-container">
          <span className="gp-eyebrow">Get in touch</span>
          <h1 className="gp-section-title" style={{ maxWidth: 500 }}>
            We'd love to hear from you
          </h1>
          <p className="gp-section-sub" style={{ marginTop: 14 }}>
            Free consultation, no commitment. Our team usually responds within 2 business hours.
          </p>
        </div>
      </div>

      <section style={{ padding: "72px 0" }}>
        <div className="gp-container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 48, alignItems: "start",
          }}>

            {/* Form */}
            <div>
              {sent ? (
                <div className="gp-card" style={{ padding: 40, textAlign: "center" }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: "50%",
                    backgroundColor: "var(--gp-green-light)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 20px",
                  }}>
                    <svg width={26} height={26} viewBox="0 0 24 24" fill="none"
                      stroke="var(--gp-green)" strokeWidth={2.5}
                      strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h2 style={{ fontSize: 20, fontWeight: 700, color: "var(--gp-text-primary)", margin: "0 0 8px" }}>
                    Message sent!
                  </h2>
                  <p style={{ fontSize: 14, color: "var(--gp-text-muted)", margin: 0 }}>
                    We'll get back to you within 2 business hours.
                  </p>
                </div>
              ) : (
                <div className="gp-card" style={{ padding: 32 }}>
                  <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--gp-text-primary)", margin: "0 0 24px" }}>
                    Send us a message
                  </h2>

                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                      <div>
                        <label style={{ fontSize: 12, fontWeight: 600, color: "var(--gp-text-muted)", display: "block", marginBottom: 6 }}>
                          Full name *
                        </label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handle}
                          placeholder="Your name"
                          style={inputStyle}
                        />
                      </div>
                      <div>
                        <label style={{ fontSize: 12, fontWeight: 600, color: "var(--gp-text-muted)", display: "block", marginBottom: 6 }}>
                          Email *
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handle}
                          placeholder="you@example.com"
                          style={inputStyle}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: "var(--gp-text-muted)", display: "block", marginBottom: 6 }}>
                        Phone number
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handle}
                        placeholder="+265 ..."
                        style={inputStyle}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: "var(--gp-text-muted)", display: "block", marginBottom: 6 }}>
                        Service interested in
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handle}
                        style={inputStyle}
                      >
                        <option value="">Select a service…</option>
                        <option>Solar panel installation</option>
                        <option>System maintenance</option>
                        <option>Repairs & diagnostics</option>
                        <option>Battery storage</option>
                        <option>Commercial / industrial</option>
                        <option>General enquiry</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ fontSize: 12, fontWeight: 600, color: "var(--gp-text-muted)", display: "block", marginBottom: 6 }}>
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handle}
                        placeholder="Tell us about your project or question…"
                        rows={5}
                        style={{ ...inputStyle, resize: "vertical" }}
                      />
                    </div>

                    {error && (
                      <p style={{
                        fontSize: 13, color: "#c0392b",
                        backgroundColor: "#fdf0ef",
                        border: "1px solid #f5c6c2",
                        borderRadius: 8, padding: "10px 14px",
                        margin: 0,
                      }}>
                        {error}
                      </p>
                    )}

                    <button
                      onClick={handleSubmit}
                      disabled={loading}
                      className="gp-btn-primary"
                      style={{
                        width: "100%", justifyContent: "center", marginTop: 4,
                        opacity: loading ? 0.7 : 1,
                        cursor: loading ? "not-allowed" : "pointer",
                      }}
                    >
                      {loading ? "Sending…" : "Send message"}
                    </button>

                  </div>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {[
                {
                  label: "Visit our office",
                  icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z",
                  lines: ["QuickTrip Shopping Complex", "NYUMBA YA SOLAR", "Area 25 Sungwi, Lilongwe", "P.O Box 40135, Malawi"],
                },
                {
                  label: "Email us",
                  icon: "M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2z",
                  lines: ["greenpowersystemsltd@gmail.com"],
                },
                {
                  label: "Opening hours",
                  icon: "M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
                  lines: ["Monday – Friday: 8am – 5pm", "Saturday: 9am – 2pm", "Sunday: Closed"],
                },
              ].map(({ label, icon, lines }) => (
                <div
                  key={label}
                  className="gp-card"
                  style={{ padding: "22px 24px", display: "flex", gap: 16, alignItems: "flex-start" }}
                >
                  <div className="gp-icon-badge" style={{ marginTop: 2 }}>
                    <svg width={20} height={20} viewBox="0 0 24 24" fill="none"
                      stroke="var(--gp-green)" strokeWidth={1.8}
                      strokeLinecap="round" strokeLinejoin="round">
                      <path d={icon} />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: "var(--gp-text-primary)", margin: "0 0 8px" }}>
                      {label}
                    </p>
                    {lines.map(l => (
                      <p key={l} style={{ fontSize: 13, color: "var(--gp-text-muted)", margin: "2px 0" }}>
                        {l}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section style={{ padding: "0 0 72px" }}>
        <div className="gp-container">
          <div className="gp-card" style={{ overflow: "hidden", borderRadius: 14 }}>
            <div style={{ padding: "20px 24px", borderBottom: "1px solid var(--gp-border)" }}>
              <p style={{ fontSize: 14, fontWeight: 700, color: "var(--gp-text-primary)", margin: 0 }}>
                📍 Find us — QuickTrip Shopping Complex, Area 25 Sungwi, Lilongwe
              </p>
            </div>
            <a
              href="https://www.google.com/maps/search/QuickTrip+Shopping+Complex+Area+25+Sungwi+Lilongwe+Malawi/@-13.8875769,33.7547329,15z"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "block", position: "relative", textDecoration: "none" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15450!2d33.7547329!3d-13.8875769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zLTEzwrA1MyczMS41IlMgMznCsDQ1JzE3LjAiRQ!5e0!3m2!1sen!2smw!4v1"
                width="100%"
                height="380"
                style={{ border: 0, display: "block", pointerEvents: "none" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Green Power Systems location"
              />
              <div style={{
                position: "absolute",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "var(--gp-green)",
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
                padding: "10px 20px",
                borderRadius: 100,
                display: "flex",
                alignItems: "center",
                gap: 8,
                boxShadow: "0 4px 16px rgba(0,0,0,0.18)",
                whiteSpace: "nowrap",
              }}>
                <svg width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                  <path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                </svg>
                Open in Google Maps
              </div>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}