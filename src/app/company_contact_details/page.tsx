"use client";
import { useState, useEffect, useCallback } from "react";
 
function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  useEffect(() => {
    const t = setTimeout(onClose, 4000);
    return () => clearTimeout(t);
  }, [onClose]);
 
  return (
    <div style={{
      position: "fixed",
      top: 16,
      right: 16,
      left: 16,
      zIndex: 200,
      backgroundColor: "#fff",
      border: "1px solid var(--gp-green-border)",
      borderLeft: "4px solid var(--gp-green)",
      borderRadius: 10,
      padding: "14px 16px",
      display: "flex",
      alignItems: "center",
      gap: 12,
      boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
      maxWidth: 400,
      marginLeft: "auto",
      marginRight: "auto",
    }}>
      <div style={{
        width: 32, height: 32, borderRadius: "50%",
        backgroundColor: "var(--gp-green-light)",
        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
      }}>
        <svg width={16} height={16} viewBox="0 0 24 24" fill="none"
          stroke="var(--gp-green)" strokeWidth={2.5}
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <div style={{ flexGrow: 1 }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "var(--gp-text-primary)", margin: "0 0 2px" }}>
          Message sent!
        </p>
        <p style={{ fontSize: 12, color: "var(--gp-text-muted)", margin: 0 }}>
          {message}
        </p>
      </div>
      <button
        onClick={onClose}
        style={{
          background: "none", border: "none", cursor: "pointer",
          color: "var(--gp-text-subtle)", padding: 4, flexShrink: 0,
          display: "flex", alignItems: "center",
        }}
      >
        <svg width={14} height={14} viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth={2.5}
          strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
 
const EMPTY_FORM = { name: "", email: "", phone: "", service: "", message: "" };
 
/** Validate phone field:
 *  - Empty is allowed (optional field)
 *  - Each number (comma-separated) must start with a + country code
 *  - Returns an error string or "" if valid
 */
function validatePhone(value: string): string {
  if (!value.trim()) return ""; // optional
  const numbers = value.split(",").map(n => n.trim()).filter(Boolean);
  const invalid = numbers.filter(n => !/^\+\d/.test(n));
  if (invalid.length > 0) {
    return "Each number must start with a country code (e.g. +265994459714). Separate multiple numbers with a comma.";
  }
  return "";
}
 
export default function Contact() {
  const [toast, setToast]         = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [form, setForm]           = useState(EMPTY_FORM);
 
  const handle = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
 
    // Live-validate phone as user types
    if (name === "phone") {
      setPhoneError(validatePhone(value));
    }
  };
 
  const closeToast = useCallback(() => setToast(false), []);
 
  const handleSubmit = async () => {
    // Final validation before submit
    const phoneErr = validatePhone(form.phone);
    setPhoneError(phoneErr);
 
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    if (phoneErr) {
      setError("Please fix the phone number before submitting.");
      return;
    }
 
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setForm(EMPTY_FORM);
        setPhoneError("");
        setToast(true);
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
    width: "100%",
    padding: "11px 14px",
    fontSize: 14,
    color: "var(--gp-text-primary)",
    backgroundColor: "var(--gp-bg-card)",
    border: "1.5px solid var(--gp-border)",
    borderRadius: 8,
    outline: "none",
    transition: "border-color 0.15s",
    fontFamily: "inherit",
    boxSizing: "border-box",
  };
 
  const inputErrorStyle: React.CSSProperties = {
    ...inputStyle,
    border: "1.5px solid #c0392b",
  };