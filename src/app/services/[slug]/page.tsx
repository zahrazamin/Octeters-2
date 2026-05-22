import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";
import { services } from "@/lib/data";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

const font = "var(--font-rethink-sans), 'Rethink Sans', sans-serif";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Not Found" };
  return {
    title: `${service.title} — Octeters`,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

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
            href="/services"
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
            ← Services
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
              marginBottom: "16px",
            }}
          >
            {service.title}
          </h1>
          <p
            style={{
              fontSize: "23.16px",
              lineHeight: "30px",
              fontWeight: 500,
              color: "#78736E",
              fontFamily: font,
              margin: 0,
              marginBottom: "40px",
              maxWidth: "700px",
            }}
          >
            {service.subtitle}
          </p>
          <Link href="/contact">
            <Button variant="light">Book a Call</Button>
          </Link>
        </div>
      </section>

      {/* Description */}
      <section style={{ backgroundColor: "#161616", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1495px", margin: "0 auto", padding: "0 52px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: "64px",
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
                  letterSpacing: "-1px",
                  margin: 0,
                  marginBottom: "24px",
                }}
              >
                Overview
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
                {service.description}
              </p>
            </div>
            <div>
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
                Deliverables
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {service.deliverables.map((d) => (
                  <li
                    key={d}
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#FFFFFF",
                      fontFamily: font,
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
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
            Full capabilities
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0 1px",
              borderTop: "1px solid rgba(133, 128, 123, 0.32)",
            }}
          >
            {service.capabilities.map((cap, i) => (
              <div
                key={cap}
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
                  {cap}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
