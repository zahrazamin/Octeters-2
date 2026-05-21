"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Services", hasDropdown: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Case Studies", hasDropdown: false },
  { label: "Company", hasDropdown: false },
  { label: "Resources", hasDropdown: true },
];

export default function Navbar() {
  return (
    <header style={{ backgroundColor: "#161616" }}>
      <div
        style={{
          maxWidth: "1495px",
          height: "118px",
          padding: "0 30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "0 auto",
        }}
      >
        {/* Left: logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: "23.16px",
              fontWeight: 500,
              lineHeight: "30.88px",
              color: "#FFFFFF",
              fontFamily: "var(--font-rethink-sans), 'Rethink Sans', sans-serif",
              whiteSpace: "nowrap",
            }}
          >
            Octeters
          </span>
        </Link>

        {/* Center: nav links */}
        <nav
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "nowrap",
            overflow: "visible",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              style={{
                padding: "15px",
                borderRadius: "5.15px",
                background: "#161616",
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                textDecoration: "none",
                transition: "color 0.15s ease, background 0.15s ease",
                fontFamily: "var(--font-rethink-sans), 'Rethink Sans', sans-serif",
                fontSize: "18px",
                lineHeight: "25.74px",
                fontWeight: 500,
                color: "#f9f9f9",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#FFFFFF";
                el.style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#f9f9f9";
                el.style.background = "#161616";
              }}
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown size={14} color="currentColor" strokeWidth={2} />
              )}
            </a>
          ))}
        </nav>

        {/* Right section: sign in + book a call */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexShrink: 0,
          }}
        >
          <a
            href="#"
            style={{
              fontSize: "18px",
              fontWeight: 500,
              color: "#f9f9f9",
              padding: "15px",
              background: "none",
              border: "none",
              textDecoration: "none",
              fontFamily: "var(--font-rethink-sans), 'Rethink Sans', sans-serif",
              lineHeight: "25.74px",
              transition: "color 0.15s ease",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#f9f9f9";
            }}
          >
            Sign in
          </a>

          <button
            style={{
              width: "162px",
              height: "51px",
              padding: "0 30px",
              borderRadius: "9999px",
              background: "#E6E3E0",
              color: "#000000",
              fontSize: "18.0153px",
              lineHeight: "30.88px",
              fontWeight: 400,
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-rethink-sans), 'Rethink Sans', sans-serif",
              transition: "background 0.15s ease, transform 0.15s ease",
              whiteSpace: "nowrap",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = "#D4D0CD";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.background = "#E6E3E0";
              el.style.transform = "translateY(0)";
            }}
          >
            Book a Call
          </button>
        </div>
      </div>
    </header>
  );
}
