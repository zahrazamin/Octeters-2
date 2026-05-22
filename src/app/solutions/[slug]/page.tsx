import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";
import { solutions, caseStudies } from "@/lib/data";
import Button from "@/components/ui/Button";

const font = "var(--font-rethink-sans), 'Rethink Sans', sans-serif";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) return { title: "Not Found" };
  return {
    title: `${solution.title} — Octeters`,
    description: solution.problem,
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutions.find((s) => s.slug === slug);
  if (!solution) notFound();

  const relatedCS = caseStudies.find((cs) => cs.slug === solution.relatedCaseStudy);

  return (
    <PageLayout>
      {/* Problem + Outcomes hero */}
      <section
        style={{
          backgroundColor: "#161616",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        <div style={{ maxWidth: "1495px", margin: "0 auto", padding: "0 52px" }}>
          <Link
            href="/solutions"
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.4)",
              fontFamily: font,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              textDecoration: "none",
              display: "block",
              marginBottom: "16px",
            }}
          >
            ← Solutions
          </Link>
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
            {solution.title}
          </h1>
          <p
            style={{
              fontSize: "23.16px",
              lineHeight: "30px",
              fontWeight: 500,
              color: "#78736E",
              fontFamily: font,
              margin: 0,
              maxWidth: "700px",
              marginBottom: "40px",
            }}
          >
            {solution.problem}
          </p>
          <Link href="/contact">
            <Button variant="light">Book a Call</Button>
          </Link>
        </div>
      </section>

      {/* Outcomes */}
      <section style={{ backgroundColor: "#161616", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1495px", margin: "0 auto", padding: "0 52px" }}>
          <div
            style={{
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: "64px",
            }}
          >
            <h2
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.4)",
                fontFamily: font,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "32px",
              }}
            >
              Outcomes
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "32px",
              }}
            >
              {solution.outcomes.map((outcome) => (
                <div
                  key={outcome}
                  style={{
                    padding: "32px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "8px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "18px",
                      lineHeight: "28px",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      fontFamily: font,
                      margin: 0,
                    }}
                  >
                    {outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section
        style={{
          backgroundColor: "#E6E3E0",
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >
        <div style={{ maxWidth: "1495px", margin: "0 auto", padding: "0 52px" }}>
          <h2
            style={{
              fontSize: "41.18px",
              lineHeight: "46px",
              fontWeight: 500,
              color: "#1e1e1e",
              fontFamily: font,
              letterSpacing: "-1px",
              margin: 0,
              marginBottom: "64px",
            }}
          >
            What we deliver
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0 1px",
              borderTop: "1px solid rgba(133, 128, 123, 0.32)",
            }}
          >
            {solution.deliverables.map((item, i) => (
              <div
                key={item}
                style={{
                  padding: "32px 24px 32px 0",
                  paddingLeft: i % 3 !== 0 ? "24px" : "0",
                  borderBottom: "1px solid rgba(133, 128, 123, 0.32)",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "rgba(30,30,30,0.3)",
                    fontFamily: font,
                    display: "block",
                    marginBottom: "12px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontSize: "18px",
                    lineHeight: "28px",
                    fontWeight: 500,
                    color: "#1e1e1e",
                    fontFamily: font,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work (4 steps) */}
      <section
        style={{
          backgroundColor: "#161616",
          paddingTop: "120px",
          paddingBottom: "120px",
        }}
      >
        <div style={{ maxWidth: "1495px", margin: "0 auto", padding: "0 52px" }}>
          <h2
            style={{
              fontSize: "41.18px",
              lineHeight: "46px",
              fontWeight: 500,
              color: "#FFFFFF",
              fontFamily: font,
              letterSpacing: "-1px",
              margin: 0,
              marginBottom: "64px",
            }}
          >
            How we work
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {solution.steps.map((step, i) => (
              <div
                key={step.title}
                style={{
                  padding: "48px 32px 48px 0",
                  paddingLeft: i > 0 ? "32px" : "0",
                  borderRight:
                    i < solution.steps.length - 1
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "none",
                }}
              >
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.25)",
                    fontFamily: font,
                    display: "block",
                    marginBottom: "20px",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3
                  style={{
                    fontSize: "25.74px",
                    lineHeight: "33px",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    fontFamily: font,
                    margin: 0,
                    marginBottom: "16px",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    color: "#78736E",
                    fontFamily: font,
                    margin: 0,
                  }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related case study card */}
      {relatedCS && (
        <section
          style={{
            backgroundColor: "#161616",
            paddingBottom: "120px",
          }}
        >
          <div style={{ maxWidth: "1495px", margin: "0 auto", padding: "0 52px" }}>
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.08)",
                paddingTop: "64px",
              }}
            >
              <h2
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.4)",
                  fontFamily: font,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "32px",
                }}
              >
                Related Case Study
              </h2>
              <Link
                href={`/case-studies/${relatedCS.slug}`}
                style={{
                  display: "block",
                  padding: "48px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "8px",
                  textDecoration: "none",
                  transition: "border-color 0.2s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "16px",
                  }}
                >
                  <h3
                    style={{
                      fontSize: "25.74px",
                      lineHeight: "33px",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      fontFamily: font,
                      margin: 0,
                    }}
                  >
                    {relatedCS.name}
                  </h3>
                  <div style={{ display: "flex", gap: "8px" }}>
                    {relatedCS.tags.map((tag) => (
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
                <p
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    fontWeight: 400,
                    color: "#a39E99",
                    fontFamily: font,
                    margin: 0,
                    marginBottom: "8px",
                  }}
                >
                  {relatedCS.whatItIs}
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
                  {relatedCS.outcome}
                </p>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        style={{
          backgroundColor: "#161616",
          paddingTop: "80px",
          paddingBottom: "160px",
        }}
      >
        <div
          style={{
            maxWidth: "1495px",
            margin: "0 auto",
            padding: "0 52px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "63.05px",
              lineHeight: "69px",
              fontWeight: 500,
              color: "#FFFFFF",
              fontFamily: font,
              letterSpacing: "-2px",
              margin: "0 auto",
              marginBottom: "24px",
              maxWidth: "800px",
            }}
          >
            Ready to build?
          </h2>
          <p
            style={{
              fontSize: "23.16px",
              lineHeight: "30px",
              fontWeight: 500,
              color: "#78736E",
              fontFamily: font,
              margin: "0 auto",
              marginBottom: "48px",
              maxWidth: "520px",
            }}
          >
            Book a free 30-minute call. No obligation.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
            }}
          >
            <Link href="/contact">
              <Button variant="light">Book a Call</Button>
            </Link>
            <Link href="/case-studies">
              <Button variant="dark">View Case Studies</Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
