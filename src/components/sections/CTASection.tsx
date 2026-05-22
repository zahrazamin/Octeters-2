"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

const font = "var(--font-rethink-sans), 'Rethink Sans', sans-serif";

export default function CTASection() {
  return (
    <section
      id="homepage-cta"
      style={{
        backgroundColor: "#161616",
        width: "100%",
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
            maxWidth: "800px",
          }}
        >
          Ready to build something that lasts?
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
          Book a free 30-minute call. No obligation,
          no pitch deck — just a conversation about your product.
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
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

        {/* Reassurance */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
            marginTop: "48px",
          }}
        >
          {["Reply within 24 hours", "NDA-friendly", "Weekly demos"].map(
            (item) => (
              <span
                key={item}
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.35)",
                  fontFamily: font,
                }}
              >
                {item}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
