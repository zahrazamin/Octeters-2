"use client";

import Link from "next/link";
import {
  Cpu,
  Code2,
  BrainCircuit,
  Cloud,
  ShoppingCart,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <Cpu size={28} strokeWidth={1.5} />,
    title: "Product Engineering",
    subtitle: "MVP + Scale",
    description:
      "From first prototype to production-grade platform. We architect for your next stage, not just your current one.",
    href: "/services/product-engineering",
  },
  {
    icon: <Code2 size={28} strokeWidth={1.5} />,
    title: "Custom Software",
    subtitle: "SaaS, Portals, APIs",
    description:
      "Web platforms, internal tools, and API layers — built to integrate, built to last.",
    href: "/services/custom-software",
  },
  {
    icon: <BrainCircuit size={28} strokeWidth={1.5} />,
    title: "Generative AI",
    subtitle: "LLM, RAG, Agents",
    description:
      "Production-grade AI with guardrails. LLM integration, RAG pipelines, and autonomous agents.",
    href: "/services/generative-ai",
  },
  {
    icon: <Cloud size={28} strokeWidth={1.5} />,
    title: "Cloud + DevOps",
    subtitle: "CI/CD, IaC, Kubernetes",
    description:
      "Infrastructure as code, automated pipelines, and observability — built into every engagement.",
    href: "/services/cloud-devops",
  },
  {
    icon: <ShoppingCart size={28} strokeWidth={1.5} />,
    title: "E-commerce",
    subtitle: "Headless, Marketplace, Subscription",
    description:
      "High-performance commerce platforms with payment integrations, subscription logic, and marketplace features.",
    href: "/services/ecommerce",
  },
  {
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    title: "QA + Managed Support",
    subtitle: "Automation, Performance, AMS",
    description:
      "Test automation, performance and security testing, and ongoing managed support after launch.",
    href: "/services/qa-support",
  },
];

const font = "var(--font-rethink-sans), 'Rethink Sans', sans-serif";

export default function ServicesSection() {
  return (
    <section
      id="homepage-services"
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
        <div style={{ marginBottom: "80px", maxWidth: "700px" }}>
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
            What we do
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
              marginBottom: "24px",
            }}
          >
            Six pillars.<br />
            One platform team.
          </h2>
          <p
            style={{
              fontSize: "23.16px",
              lineHeight: "30px",
              fontWeight: 500,
              color: "#78736E",
              fontFamily: font,
              margin: 0,
            }}
          >
            Everything you need to build, launch, and scale — without stitching
            together five vendors.
          </p>
        </div>

        {/* Services grid — 3x2 */}
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
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              style={{
                backgroundColor: "#161616",
                padding: "48px 40px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                textDecoration: "none",
                transition: "background 0.2s ease",
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
              <div style={{ color: "rgba(255,255,255,0.6)" }}>
                {service.icon}
              </div>
              <div>
                <h3
                  style={{
                    fontSize: "25.74px",
                    lineHeight: "33px",
                    fontWeight: 500,
                    color: "#FFFFFF",
                    fontFamily: font,
                    margin: 0,
                    marginBottom: "4px",
                  }}
                >
                  {service.title}
                </h3>
                <span
                  style={{
                    fontSize: "16px",
                    fontWeight: 500,
                    color: "#78736E",
                    fontFamily: font,
                  }}
                >
                  {service.subtitle}
                </span>
              </div>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: 400,
                  color: "#a39E99",
                  fontFamily: font,
                  margin: 0,
                  flex: 1,
                }}
              >
                {service.description}
              </p>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: font,
                  transition: "color 0.15s ease",
                }}
              >
                See full capabilities
                <ArrowRight size={14} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
