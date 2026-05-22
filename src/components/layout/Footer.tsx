"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Product Engineering", href: "/services/product-engineering" },
    { label: "Custom Software", href: "/services/custom-software" },
    { label: "Generative AI", href: "/services/generative-ai" },
    { label: "Cloud + DevOps", href: "/services/cloud-devops" },
    { label: "E-commerce", href: "/services/ecommerce" },
    { label: "QA + Managed Support", href: "/services/qa-support" },
  ],
  Solutions: [
    { label: "MVP Launch", href: "/solutions/mvp-launch" },
    { label: "Legacy Modernization", href: "/solutions/legacy-modernization" },
    { label: "AI Enablement", href: "/solutions/ai-enablement" },
    { label: "Commerce Growth", href: "/solutions/commerce-growth" },
    { label: "Marketplace Build", href: "/solutions/marketplace-build" },
  ],
  Company: [
    { label: "About", href: "/company" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Contact", href: "/contact" },
  ],
};

const font = "var(--font-rethink-sans), 'Rethink Sans', sans-serif";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0e0e0e",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        width: "100%",
      }}
    >
      <div
        style={{
          maxWidth: "1495px",
          margin: "0 auto",
          padding: "80px 52px 48px",
        }}
      >
        {/* Top: logo + link columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
            gap: "48px",
            paddingBottom: "64px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Brand column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <span
              style={{
                fontSize: "23.16px",
                fontWeight: 500,
                color: "#FFFFFF",
                fontFamily: font,
              }}
            >
              Octeters
            </span>
            <p
              style={{
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 400,
                color: "#78736E",
                fontFamily: font,
                maxWidth: "280px",
              }}
            >
              AI-enabled software platforms for operations, commerce, and marketplaces.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: font,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {title}
              </span>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    color: "#a39E99",
                    fontFamily: font,
                    textDecoration: "none",
                    transition: "color 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#a39E99";
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "32px",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              color: "#78736E",
              fontFamily: font,
              fontWeight: 400,
            }}
          >
            © {new Date().getFullYear()} Octeters. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: "24px" }}>
            {["LinkedIn", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                style={{
                  fontSize: "14px",
                  color: "#78736E",
                  fontFamily: font,
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = "#78736E";
                }}
              >
                {social}
                <ArrowUpRight size={12} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
