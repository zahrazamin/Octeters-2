"use client";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We scope your project, define outcomes, and build a delivery roadmap in a free 30-minute call.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "We design the technical foundation — stack, infrastructure, data models, and AI integration points.",
  },
  {
    number: "03",
    title: "Delivery",
    description:
      "Weekly demos, clear milestones, and continuous deployment. You see working software every sprint.",
  },
  {
    number: "04",
    title: "Scale + Support",
    description:
      "Post-launch monitoring, managed support, and optimization. We stay until you outgrow us.",
  },
];

const font = "var(--font-rethink-sans), 'Rethink Sans', sans-serif";

export default function ProcessSection() {
  return (
    <section
      id="homepage-process"
      style={{
        backgroundColor: "#E6E3E0",
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
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <p
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "rgba(30,30,30,0.4)",
              fontFamily: font,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "16px",
            }}
          >
            How we work
          </p>
          <h2
            style={{
              fontSize: "63.05px",
              lineHeight: "69px",
              fontWeight: 500,
              color: "#1e1e1e",
              fontFamily: font,
              letterSpacing: "-2px",
              margin: "0 auto",
              maxWidth: "700px",
            }}
          >
            From first call to first deploy
          </h2>
        </div>

        {/* Steps grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "0",
            borderTop: "1px solid rgba(133, 128, 123, 0.32)",
          }}
        >
          {steps.map((step, i) => (
            <div
              key={step.number}
              style={{
                padding: "48px 32px 48px 0",
                borderRight:
                  i < steps.length - 1
                    ? "1px solid rgba(133, 128, 123, 0.32)"
                    : "none",
                paddingLeft: i > 0 ? "32px" : "0",
              }}
            >
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgba(30,30,30,0.3)",
                  fontFamily: font,
                  display: "block",
                  marginBottom: "20px",
                }}
              >
                {step.number}
              </span>
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
  );
}
