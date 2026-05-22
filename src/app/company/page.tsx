import type { Metadata } from "next";
import PageLayout from "@/components/layout/PageLayout";
import Link from "next/link";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Company — Octeters",
  description:
    "Octeters builds AI-enabled software platforms for operations, commerce, and marketplaces. Learn about our team and approach.",
};

const font = "var(--font-rethink-sans), 'Rethink Sans', sans-serif";

const values = [
  {
    title: "Ship, then iterate",
    description:
      "We believe working software beats pitch decks. Every engagement starts with a working prototype, not a 50-page requirements document.",
  },
  {
    title: "Architecture for the next stage",
    description:
      "We don't build for today's traffic. Every platform is architected for your next 10x of growth — with infrastructure, AI, and observability built in from day one.",
  },
  {
    title: "Transparent delivery",
    description:
      "Weekly demos, clear milestones, and no surprises. You see working software every sprint and know exactly where your project stands.",
  },
  {
    title: "Long-term partnership",
    description:
      "We don't disappear after launch. Managed support, ongoing optimization, and a team that knows your codebase inside out.",
  },
];

const verticals = [
  {
    title: "B2B Operations Software",
    examples: "Accounting, professional services, CRM, workflows, client ops",
  },
  {
    title: "E-commerce + Subscription Commerce",
    examples: "Headless storefronts, subscription billing, marketplace features",
  },
  {
    title: "Marketplaces + PropTech Platforms",
    examples: "Data-rich platforms, search, portals, investor tools",
  },
];

export default function CompanyPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section
        style={{
          backgroundColor: "#161616",
          paddingTop: "120px",
          paddingBottom: "120px",
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
            Company
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
              maxWidth: "900px",
            }}
          >
            We build platforms that companies run their business on
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
              marginBottom: "48px",
            }}
          >
            Octeters is a software engineering company that builds AI-enabled
            platforms for operations, commerce, and marketplaces. We combine
            product engineering, AI, DevOps, and QA into one delivery team.
          </p>
          <Link href="/contact">
            <Button variant="light">Book a Call</Button>
          </Link>
        </div>
      </section>

      {/* What we believe */}
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
            What we believe
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0 80px",
              borderTop: "1px solid rgba(133,128,123,0.32)",
            }}
          >
            {values.map((v) => (
              <div
                key={v.title}
                style={{
                  padding: "48px 0",
                  borderBottom: "1px solid rgba(133,128,123,0.32)",
                }}
              >
                <h3
                  style={{
                    fontSize: "25.74px",
                    lineHeight: "33px",
                    fontWeight: 500,
                    color: "#1e1e1e",
                    fontFamily: font,
                    margin: 0,
                    marginBottom: "16px",
                  }}
                >
                  {v.title}
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
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verticals */}
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
              marginBottom: "16px",
            }}
          >
            Industries we focus on
          </h2>
          <p
            style={{
              fontSize: "18px",
              lineHeight: "28px",
              fontWeight: 400,
              color: "#78736E",
              fontFamily: font,
              margin: 0,
              marginBottom: "64px",
              maxWidth: "600px",
            }}
          >
            We lead with three profitable verticals that match our proof.
          </p>
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
            {verticals.map((v) => (
              <div
                key={v.title}
                style={{
                  backgroundColor: "#161616",
                  padding: "48px 40px",
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
                    marginBottom: "16px",
                  }}
                >
                  {v.title}
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
                  {v.examples}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </PageLayout>
  );
}
