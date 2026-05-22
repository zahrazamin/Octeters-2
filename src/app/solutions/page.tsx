import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";
import { solutions } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Solutions — Octeters",
  description:
    "Outcome-driven solutions for MVP launch, legacy modernization, AI enablement, commerce growth, and marketplace builds.",
};

const font = "var(--font-rethink-sans), 'Rethink Sans', sans-serif";

export default function SolutionsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "#161616",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        <div style={{ maxWidth: "1495px", margin: "0 auto", padding: "0 52px" }}>
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
            Solutions
          </p>
          <h1
            style={{
              fontSize: "68px",
              lineHeight: "78px",
              fontWeight: 500,
              color: "#FFFFFF",
              fontFamily: font,
              letterSpacing: "-2px",
              margin: 0,
              marginBottom: "24px",
              maxWidth: "800px",
            }}
          >
            Outcomes, not features.
          </h1>
          <p
            style={{
              fontSize: "23.16px",
              lineHeight: "30px",
              fontWeight: 500,
              color: "#78736E",
              fontFamily: font,
              margin: 0,
              maxWidth: "600px",
            }}
          >
            Each solution is designed for a specific business outcome — from
            first prototype to full-scale platform.
          </p>
        </div>
      </section>

      {/* Solutions grid */}
      <section style={{ backgroundColor: "#161616", paddingBottom: "120px" }}>
        <div style={{ maxWidth: "1495px", margin: "0 auto", padding: "0 52px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {solutions.map((solution, i) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "48px",
                  padding: "64px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  textDecoration: "none",
                  alignItems: "flex-start",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.25)",
                    fontFamily: font,
                    width: "32px",
                    marginTop: "8px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h2
                    style={{
                      fontSize: "41.18px",
                      lineHeight: "46px",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      fontFamily: font,
                      margin: 0,
                      marginBottom: "16px",
                    }}
                  >
                    {solution.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "28px",
                      fontWeight: 400,
                      color: "#78736E",
                      fontFamily: font,
                      margin: 0,
                      maxWidth: "600px",
                      marginBottom: "24px",
                    }}
                  >
                    {solution.problem}
                  </p>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.5)",
                      fontFamily: font,
                    }}
                  >
                    Learn more
                    <ArrowRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
