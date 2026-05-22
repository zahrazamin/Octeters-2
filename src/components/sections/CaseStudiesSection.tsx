"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    slug: "buyca",
    name: "buy.ca",
    whatItIs: "PropTech platform with AI-powered search and investor tools",
    outcome: "3× search-to-lead conversion with visual AI search",
    tags: ["AI", "Marketplace", "PropTech"],
  },
  {
    slug: "mintcrm",
    name: "mintcrm.ai",
    whatItIs: "Vertical SaaS for accounting ops, workflows, and client requests",
    outcome: "60% reduction in admin time, shipped in 12 weeks",
    tags: ["SaaS", "Operations", "DevOps"],
  },
  {
    slug: "agent360",
    name: "Agent 360",
    whatItIs: "AI-powered autonomous agent platform for task automation",
    outcome: "80% task automation rate with production-grade RAG pipeline",
    tags: ["AI", "Agents", "RAG"],
  },
];

const font = "var(--font-rethink-sans), 'Rethink Sans', sans-serif";

export default function CaseStudiesSection() {
  return (
    <section
      id="homepage-case-studies"
      style={{
        backgroundColor: "#161616",
        width: "100%",
        paddingTop: "160px",
        paddingBottom: "120px",
      }}
    >
      <div
        style={{
          maxWidth: "1495px",
          margin: "0 auto",
          padding: "0 52px",
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "64px",
          }}
        >
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
              Proof
            </p>
            <h2
              style={{
                fontSize: "63.05px",
                lineHeight: "69px",
                fontWeight: 500,
                color: "#FFFFFF",
                fontFamily: font,
                letterSpacing: "-2px",
                margin: 0,
              }}
            >
              What we&apos;ve built
            </h2>
          </div>
          <Link
            href="/case-studies"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "18px",
              fontWeight: 500,
              color: "#a39E99",
              fontFamily: font,
              textDecoration: "none",
              transition: "color 0.15s ease",
              paddingBottom: "8px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#a39E99";
            }}
          >
            View all case studies
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Case study cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.08)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {caseStudies.map((cs) => (
            <Link
              key={cs.slug}
              href={`/case-studies/${cs.slug}`}
              style={{
                backgroundColor: "#161616",
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                textDecoration: "none",
                transition: "background 0.2s ease",
                minHeight: "320px",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "#1a1a1a";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "#161616";
              }}
            >
              <span
                style={{
                  fontSize: "25.74px",
                  lineHeight: "33px",
                  fontWeight: 500,
                  color: "#FFFFFF",
                  fontFamily: font,
                }}
              >
                {cs.name}
              </span>

              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    color: "#a39E99",
                    fontFamily: font,
                    margin: 0,
                  }}
                >
                  {cs.whatItIs}
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    fontFamily: font,
                    margin: 0,
                  }}
                >
                  {cs.outcome}
                </p>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {cs.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "#78736E",
                      fontFamily: font,
                      padding: "4px 12px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "9999px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
