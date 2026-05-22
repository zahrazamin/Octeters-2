import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";
import { services } from "@/lib/data";
import {
  Cpu,
  Code2,
  BrainCircuit,
  Cloud,
  ShoppingCart,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Services — Octeters",
  description:
    "Product engineering, custom software, generative AI, cloud & DevOps, e-commerce, and QA — everything you need to build, launch, and scale.",
};

const iconMap: Record<string, React.ReactNode> = {
  "product-engineering": <Cpu size={32} strokeWidth={1.5} />,
  "custom-software": <Code2 size={32} strokeWidth={1.5} />,
  "generative-ai": <BrainCircuit size={32} strokeWidth={1.5} />,
  "cloud-devops": <Cloud size={32} strokeWidth={1.5} />,
  ecommerce: <ShoppingCart size={32} strokeWidth={1.5} />,
  "qa-support": <ShieldCheck size={32} strokeWidth={1.5} />,
};

const font = "var(--font-rethink-sans), 'Rethink Sans', sans-serif";

export default function ServicesPage() {
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
            Services
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
            Six pillars. One platform team.
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
            Everything you need to build, launch, and scale — without stitching
            together five vendors.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section style={{ backgroundColor: "#161616", paddingBottom: "120px" }}>
        <div style={{ maxWidth: "1495px", margin: "0 auto", padding: "0 52px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "80px",
                  padding: "64px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                  textDecoration: "none",
                  transition: "background 0.15s ease",
                }}
              >
                <div style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
                  <div style={{ color: "rgba(255,255,255,0.5)", flexShrink: 0, marginTop: "4px" }}>
                    {iconMap[service.slug]}
                  </div>
                  <div>
                    <h2
                      style={{
                        fontSize: "41.18px",
                        lineHeight: "46px",
                        fontWeight: 500,
                        color: "#FFFFFF",
                        fontFamily: font,
                        margin: 0,
                        marginBottom: "8px",
                      }}
                    >
                      {service.title}
                    </h2>
                    <span
                      style={{
                        fontSize: "18px",
                        fontWeight: 500,
                        color: "#78736E",
                        fontFamily: font,
                      }}
                    >
                      {service.subtitle}
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
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
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.5)",
                      fontFamily: font,
                      marginTop: "24px",
                    }}
                  >
                    See full capabilities
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
