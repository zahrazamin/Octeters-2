"use client";

import { useState } from "react";

const tabs = [
  { bold: "Deliver MVPs", rest: "fast" },
  { bold: "Build AI", rest: "platforms" },
  { bold: "Scale with", rest: "DevOps" },
  { bold: "Ship", rest: "e-commerce" },
  { bold: "Modernize", rest: "legacy systems" },
  { bold: "QA +", rest: "managed support" },
];

export default function TabBar() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div style={{ backgroundColor: "#161616", width: "100%" }}>
      <div
        style={{
          maxWidth: "1495px",
          height: "155px",
          paddingTop: "45px",
          paddingLeft: "30px",
          paddingRight: "29px",
          margin: "0 auto",
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            aria-pressed={i === activeTab}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              textAlign: "left",
              fontFamily: "var(--font-inter), Inter, sans-serif",
            }}
          >
            {/* Divider bar */}
            <div
              style={{
                width: "207px",
                height: "2.56px",
                backgroundColor: i === activeTab ? "#FFFFFF" : "#6B6662",
                marginBottom: "16px",
                transition: "background-color 0.2s ease",
              }}
            />
            {/* Bold word */}
            <span
              style={{
                fontSize: "23.16px",
                fontWeight: 500,
                color: i === activeTab ? "#FFFFFF" : "#78736E",
                display: "block",
                lineHeight: "30.88px",
                transition: "color 0.2s ease",
              }}
            >
              {tab.bold}
            </span>
            {/* Description */}
            <span
              style={{
                fontSize: "23.16px",
                fontWeight: 500,
                color: i === activeTab ? "#FFFFFF" : "#78736E",
                display: "block",
                marginTop: "4px",
                lineHeight: "30.88px",
                transition: "color 0.2s ease",
              }}
            >
              {tab.rest}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
