import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";
import { caseStudies } from "@/lib/data";
import Button from "@/components/ui/Button";

const font = "var(--font-rethink-sans), 'Rethink Sans', sans-serif";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return { title: "Not Found" };
  return {
    title: `${cs.name} — Case Study — Octeters`,
    description: cs.whatItIs,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

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
          <Link
            href="/case-studies"
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
            ← Case Studies
          </Link>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginBottom: "24px",
            }}
          >
            <h1
              style={{
                fontSize: "68px",
                lineHeight: "78px",
                fontWeight: 500,
                color: "#FFFFFF",
                fontFamily: font,
                letterSpacing: "-2px",
                margin: 0,
              }}
            >
              {cs.name}
            </h1>
            <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
              {cs.tags.map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#78736E",
                    fontFamily: font,
                    padding: "6px 14px",
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
              fontSize: "23.16px",
              lineHeight: "30px",
              fontWeight: 500,
              color: "#78736E",
              fontFamily: font,
              margin: 0,
              maxWidth: "700px",
            }}
          >
            {cs.whatItIs}
          </p>
        </div>
      </section>

      {/* Results stats */}
      <section style={{ backgroundColor: "#161616", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1495px", margin: "0 auto", padding: "0 52px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {cs.results.map((r, i) => (
              <div
                key={r.metric}
                style={{
                  padding: "48px 32px",
                  paddingLeft: i > 0 ? "32px" : "0",
                  borderRight:
                    i < cs.results.length - 1
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "none",
                }}
              >
                <span
                  style={{
                    fontSize: "41.18px",
                    lineHeight: "46px",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    fontFamily: font,
                    display: "block",
                    marginBottom: "8px",
                  }}
                >
                  {r.metric}
                </span>
                <span
                  style={{
                    fontSize: "16px",
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
      </section>

      {/* Challenge + Approach */}
      <section style={{ backgroundColor: "#161616", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1495px", margin: "0 auto", padding: "0 52px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
            }}
          >
            <div>
              <h2
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
                The Challenge
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "28px",
                  fontWeight: 400,
                  color: "#a39E99",
                  fontFamily: font,
                  margin: 0,
                }}
              >
                {cs.challenge}
              </p>
            </div>
            <div>
              <h2
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
                Our Approach
              </h2>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "28px",
                  fontWeight: 400,
                  color: "#a39E99",
                  fontFamily: font,
                  margin: 0,
                }}
              >
                {cs.approach}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech stack */}
      <section
        style={{
          backgroundColor: "#E6E3E0",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div style={{ maxWidth: "1495px", margin: "0 auto", padding: "0 52px" }}>
          <h2
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "rgba(30,30,30,0.4)",
              fontFamily: font,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "32px",
            }}
          >
            Tech Stack
          </h2>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {cs.stack.map((tech) => (
              <span
                key={tech}
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#1e1e1e",
                  fontFamily: font,
                  padding: "10px 20px",
                  border: "1px solid rgba(133,128,123,0.32)",
                  borderRadius: "9999px",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section
        style={{
          backgroundColor: "#E6E3E0",
          paddingBottom: "120px",
        }}
      >
        <div style={{ maxWidth: "1495px", margin: "0 auto", padding: "0 52px" }}>
          <div
            style={{
              borderTop: "1px solid rgba(133,128,123,0.32)",
              paddingTop: "64px",
            }}
          >
            <blockquote
              style={{
                fontSize: "41.18px",
                lineHeight: "50px",
                fontWeight: 500,
                color: "#1e1e1e",
                fontFamily: font,
                margin: 0,
                marginBottom: "32px",
                maxWidth: "900px",
              }}
            >
              &ldquo;{cs.testimonial.quote}&rdquo;
            </blockquote>
            <div>
              <span
                style={{
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "#1e1e1e",
                  fontFamily: font,
                  display: "block",
                  marginBottom: "4px",
                }}
              >
                {cs.testimonial.name}
              </span>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#78736E",
                  fontFamily: font,
                }}
              >
                {cs.testimonial.role}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: "#161616",
          paddingTop: "160px",
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
            }}
          >
            Want results like this?
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
            Book a free discovery call. We&apos;ll scope your project in 30 minutes.
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
            <Link href="/contact">
              <Button variant="dark">Get an Estimate</Button>
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
