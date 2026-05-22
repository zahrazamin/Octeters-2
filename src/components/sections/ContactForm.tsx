"use client";

import { useState } from "react";
import { Clock, Shield, Eye } from "lucide-react";

const font = "var(--font-rethink-sans), 'Rethink Sans', sans-serif";

const projectTypes = [
  "MVP / New Product",
  "Legacy Modernization",
  "AI Enablement",
  "E-commerce / Subscription",
  "Marketplace / Portal",
];

const engagementModels = [
  "Fixed Scope",
  "Dedicated Team",
  "Consulting",
];

const timelines = [
  "ASAP",
  "1–3 months",
  "3–6 months",
  "Just exploring",
];

const reassurances = [
  { icon: <Clock size={18} strokeWidth={1.5} />, text: "Reply within 24 hours" },
  { icon: <Shield size={18} strokeWidth={1.5} />, text: "NDA-friendly" },
  { icon: <Eye size={18} strokeWidth={1.5} />, text: "Weekly demos and clear milestones" },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "16px 20px",
  fontSize: "16px",
  fontFamily: font,
  fontWeight: 400,
  color: "#FFFFFF",
  backgroundColor: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "8px",
  outline: "none",
  transition: "border-color 0.15s ease",
};

const labelStyle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 500,
  color: "rgba(255,255,255,0.6)",
  fontFamily: font,
  display: "block",
  marginBottom: "8px",
};

export default function ContactForm() {
  const [projectType, setProjectType] = useState("");
  const [engagement, setEngagement] = useState("");
  const [timeline, setTimeline] = useState("");

  return (
    <section
      style={{
        backgroundColor: "#161616",
        paddingTop: "120px",
        paddingBottom: "160px",
      }}
    >
      <div style={{ maxWidth: "1495px", margin: "0 auto", padding: "0 52px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "120px",
            alignItems: "flex-start",
          }}
        >
          {/* Left: copy */}
          <div>
            <p
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.4)",
                fontFamily: font,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "16px",
              }}
            >
              Get in touch
            </p>
            <h1
              style={{
                fontSize: "63.05px",
                lineHeight: "69px",
                fontWeight: 500,
                color: "#FFFFFF",
                fontFamily: font,
                letterSpacing: "-2px",
                margin: 0,
                marginBottom: "24px",
              }}
            >
              Let&apos;s talk about your project
            </h1>
            <p
              style={{
                fontSize: "23.16px",
                lineHeight: "30px",
                fontWeight: 500,
                color: "#78736E",
                fontFamily: font,
                margin: 0,
                marginBottom: "64px",
              }}
            >
              Book a free 30-minute discovery call. No obligation, no pitch
              deck — just a conversation about your product.
            </p>

            {/* Reassurance badges */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {reassurances.map((r) => (
                <div
                  key={r.text}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <div style={{ color: "rgba(255,255,255,0.35)" }}>
                    {r.icon}
                  </div>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      color: "#a39E99",
                      fontFamily: font,
                    }}
                  >
                    {r.text}
                  </span>
                </div>
              ))}
            </div>

            {/* How it works */}
            <div style={{ marginTop: "64px" }}>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: font,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "24px",
                }}
              >
                How it works
              </h3>
              <div style={{ display: "flex", gap: "32px" }}>
                {[
                  { step: "1", label: "Book", desc: "Pick a time" },
                  { step: "2", label: "Scope", desc: "Define outcomes" },
                  { step: "3", label: "Build", desc: "Start shipping" },
                ].map((s) => (
                  <div key={s.step} style={{ flex: 1 }}>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.2)",
                        fontFamily: font,
                        display: "block",
                        marginBottom: "8px",
                      }}
                    >
                      {s.step}
                    </span>
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "#FFFFFF",
                        fontFamily: font,
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      {s.label}
                    </span>
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#78736E",
                        fontFamily: font,
                      }}
                    >
                      {s.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div
            style={{
              padding: "48px",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "12px",
              backgroundColor: "rgba(255,255,255,0.02)",
            }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
              style={{ display: "flex", flexDirection: "column", gap: "24px" }}
            >
              {/* Name */}
              <div>
                <label style={labelStyle}>Full name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                />
              </div>

              {/* Email */}
              <div>
                <label style={labelStyle}>Work email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  required
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                />
              </div>

              {/* Company */}
              <div>
                <label style={labelStyle}>Company</label>
                <input
                  type="text"
                  placeholder="Company name"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                />
              </div>

              {/* Project type */}
              <div>
                <label style={labelStyle}>Project type</label>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setProjectType(type)}
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: font,
                        padding: "10px 16px",
                        borderRadius: "9999px",
                        border:
                          projectType === type
                            ? "1px solid #FFFFFF"
                            : "1px solid rgba(255,255,255,0.15)",
                        backgroundColor:
                          projectType === type
                            ? "rgba(255,255,255,0.1)"
                            : "transparent",
                        color:
                          projectType === type
                            ? "#FFFFFF"
                            : "#78736E",
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Engagement model */}
              <div>
                <label style={labelStyle}>Engagement model</label>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {engagementModels.map((model) => (
                    <button
                      key={model}
                      type="button"
                      onClick={() => setEngagement(model)}
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: font,
                        padding: "10px 16px",
                        borderRadius: "9999px",
                        border:
                          engagement === model
                            ? "1px solid #FFFFFF"
                            : "1px solid rgba(255,255,255,0.15)",
                        backgroundColor:
                          engagement === model
                            ? "rgba(255,255,255,0.1)"
                            : "transparent",
                        color:
                          engagement === model
                            ? "#FFFFFF"
                            : "#78736E",
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {model}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label style={labelStyle}>Timeline</label>
                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  {timelines.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTimeline(t)}
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        fontFamily: font,
                        padding: "10px 16px",
                        borderRadius: "9999px",
                        border:
                          timeline === t
                            ? "1px solid #FFFFFF"
                            : "1px solid rgba(255,255,255,0.15)",
                        backgroundColor:
                          timeline === t
                            ? "rgba(255,255,255,0.1)"
                            : "transparent",
                        color:
                          timeline === t
                            ? "#FFFFFF"
                            : "#78736E",
                        cursor: "pointer",
                        transition: "all 0.15s ease",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label style={labelStyle}>Tell us about your project</label>
                <textarea
                  rows={4}
                  placeholder="Describe your project, goals, and any specific requirements..."
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    minHeight: "120px",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  }}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  padding: "18px",
                  fontSize: "18px",
                  fontWeight: 500,
                  fontFamily: font,
                  color: "#000000",
                  backgroundColor: "#E6E3E0",
                  border: "none",
                  borderRadius: "9999px",
                  cursor: "pointer",
                  transition: "background 0.15s ease, transform 0.15s ease",
                  marginTop: "8px",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "#D4D0CD";
                  el.style.transform = "translateY(-1px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "#E6E3E0";
                  el.style.transform = "translateY(0)";
                }}
              >
                Book a Call
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
