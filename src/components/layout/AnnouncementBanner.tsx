"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

const items = [
  "Octeters builds AI-enabled software platforms",
  "From MVP to enterprise — we scale with you",
  "Cloud, DevOps, and QA built in from day one",
  "Operations, commerce, and marketplace platforms",
  "Trusted by companies that ship fast and scale further",
];

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("banner_dismissed") === "true") {
      setVisible(false);
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        height: "41px",
        padding: "5px 0",
        backgroundColor: "#0D3CFC",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        position: "relative",
      }}
    >
      <div style={{ overflow: "hidden", flex: 1 }}>
        <div
          style={{
            display: "flex",
            width: "max-content",
            animation: "marquee 36s linear infinite",
          }}
        >
          {[...items, ...items].map((text, i) => (
            <span
              key={i}
              style={{
                fontSize: "18px",
                lineHeight: "20.59px",
                fontWeight: 500,
                color: "#FFFFFF",
                whiteSpace: "nowrap",
                paddingRight: "80px",
                fontFamily: "var(--font-rethink-sans), 'Rethink Sans', sans-serif",
              }}
            >
              {text}
            </span>
          ))}
        </div>
      </div>

      <button
        aria-label="Dismiss announcement"
        onClick={() => {
          sessionStorage.setItem("banner_dismissed", "true");
          setVisible(false);
        }}
        style={{
          position: "absolute",
          right: "16px",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <X size={14} color="rgba(255,255,255,0.6)" strokeWidth={2} />
      </button>
    </div>
  );
}
