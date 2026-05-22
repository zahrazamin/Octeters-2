import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";
import { caseStudies } from "@/lib/data";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Case Studies — Octeters",
  description:
    "Real results from real projects. See how Octeters builds AI-enabled platforms that scale.",
};

const font = "var(--font-rethink-sans), 'Rethink Sans', sans-serif";

export default function CaseStudiesPage() {
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
            Case Studies
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
            }}
          >
            Proof, not promises.
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
            Real results from real projects. See how we build platforms that
            actually scale.
          </p>
        </div>
      </section>

      {/* Case study cards */}
      <section style={{ backgroundColor: "#161616", paddingBottom: "120px" }}>
        <div style={{ maxWidth: "1495px", margin: "0 auto", padding: "0 52px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "80px",
                  padding: "64px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  textDecoration: "none",
                  alignItems: "flex-start",
                }}
              >
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
                    {cs.name}
                  </h2>
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "28px",
                      fontWeight: 400,
                      color: "#a39E99",
                      fontFamily: font,
                      margin: 0,
                      marginBottom: "16px",
                    }}
                  >
                    {cs.whatItIs}
                  </p>
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
                </div>
                <div>
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "28px",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      fontFamily: font,
                      margin: 0,
                      marginBottom: "24px",
                    }}
                  >
                    {cs.outcome}
                  </p>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "16px",
                    }}
                  >
                    {cs.results.map((r) => (
                      <div key={r.metric}>
                        <span
                          style={{
                            fontSize: "25.74px",
                            fontWeight: 500,
                            color: "#FFFFFF",
                            fontFamily: font,
                            display: "block",
                            marginBottom: "4px",
                          }}
                        >
                          {r.metric}
                        </span>
                        <span
                          style={{
                            fontSize: "14px",
                            fontWeight: 400,
                            color: "#78736E",
                            fontFamily: font,
                          }}
                        >
                          {r.description}
                        </span>
                      </div>
                    ))}
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
