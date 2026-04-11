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
            gap: 48,
            alignItems: "stretch",
          }}>

            {/* Form */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {sent ? (
                <div className="gp-card" style={{ padding: 40, textAlign: "center", height: "100%", boxSizing: "border-box" }}>
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
                <div className="gp-card" style={{
                  padding: 32,
                  height: "100%",
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "column",
                }}>
                  <h2 style={{ fontSize: 18, fontWeight: 700, color: "var(--gp-text-primary)", margin: "0 0 24px" }}>
                    Send us a message
                  </h2>

                  <div style={{ display: "flex", flexDirection: "column", gap: 16, flexGrow: 1 }}>

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
                        <option value="">Select a service...</option>
                        <option>Solar panel installation</option>
                        <option>System maintenance</option>
                        <option>Repairs and diagnostics</option>
                        <option>Battery storage</option>
                        <option>Commercial / industrial</option>
                        <option>General enquiry</option>
                      </select>
                    </div>

                    <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                      <label style={{ fontSize: 12, fontWeight: 600, color: "var(--gp-text-muted)", display: "block", marginBottom: 6 }}>
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handle}
                        placeholder="Tell us about your project or question..."
                        style={{ ...inputStyle, resize: "none", flexGrow: 1, minHeight: 100 }}
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
                      {loading ? "Sending..." : "Send message"}
                    </button>

                  </div>
                </div>
              )}
            </div>

            {/* Map — right column, stretches to match form height */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div className="gp-card" style={{
                overflow: "hidden",
                borderRadius: 14,
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
              }}>
                <div style={{
                  padding: "16px 20px",
                  borderBottom: "1px solid var(--gp-border)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}>
                  <svg width={16} height={16} viewBox="0 0 24 24" fill="none"
                    stroke="var(--gp-green)" strokeWidth={2.2}
                    strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                    <path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  </svg>
                  <p style={{ fontSize: 14, fontWeight: 700, color: "var(--gp-text-primary)", margin: 0 }}>
                    QuickTrip Shopping Complex, Area 25 Sungwi, Lilongwe
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/search/QuickTrip+Shopping+Complex+Area+25+Sungwi+Lilongwe+Malawi/@-13.9032,33.7595,15z"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    position: "relative",
                    textDecoration: "none",
                  }}
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7725.4!2d33.7545!3d-13.9032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1921d500431ff5a5%3A0xba44ac1f1f86553!2sArea+25%2C+Lilongwe%2C+Malawi!5e0!3m2!1sen!2smw!4v1"
                    width="100%"
                    height="100%"
                    style={{
                      border: 0,
                      display: "block",
                      flexGrow: 1,
                      minHeight: 320,
                      pointerEvents: "none",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Green Power Systems — Area 25 Sungwi, Lilongwe"
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
                    padding: "10px 22px",
                    borderRadius: 100,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.22)",
                    whiteSpace: "nowrap",
                  }}>
                    <svg width={14} height={14} viewBox="0 0 24 24" fill="none"
                      stroke="white" strokeWidth={2.5}
                      strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                      <path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    </svg>
                    Tap to open in Google Maps
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}