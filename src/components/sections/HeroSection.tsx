"use client";

import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
const tabs = [
  { id: "mvp",       title: "Deliver",    subtitle: "MVPs fast"       },
  { id: "ai",        title: "Build AI",   subtitle: "platforms"       },
  { id: "devops",    title: "Scale with", subtitle: "DevOps"          },
  { id: "ecommerce", title: "Ship",       subtitle: "e-commerce"      },
  { id: "legacy",    title: "Modernize",  subtitle: "legacy systems"  },
  { id: "qa",        title: "QA +",       subtitle: "managed support" },
];

const font = "var(--font-rethink-sans), 'Rethink Sans', sans-serif";

const IsometricGrid = () => (
  <div className="hero-iso-bg">
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", inset: 0 }}
    >
      <defs>
        <pattern
          id="iso-grid"
          x="0"
          y="0"
          width="150"
          height="86.60"
          patternUnits="userSpaceOnUse"
        >
          <line x1="0" y1="43.30" x2="75" y2="0" stroke="rgba(255,255,255,0.22)" strokeWidth="0.5" />
          <line x1="75" y1="86.60" x2="150" y2="43.30" stroke="rgba(255,255,255,0.22)" strokeWidth="0.5" />
          <line x1="0" y1="43.30" x2="75" y2="86.60" stroke="rgba(255,255,255,0.22)" strokeWidth="0.5" />
          <line x1="75" y1="0" x2="150" y2="43.30" stroke="rgba(255,255,255,0.22)" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill="url(#iso-grid)" />
    </svg>
  </div>
);

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [bannerVisible, setBannerVisible] = useState(false);

  useEffect(() => {
    setBannerVisible(sessionStorage.getItem("banner_dismissed") !== "true");
  }, []);

  const sectionClass = [
    "hero-section",
    bannerVisible ? "hero-section--with-promo-banner" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section
      id="homepage-hero"
      className={sectionClass}
      style={{
        backgroundColor: "#161616",
        position: "relative",
        overflow: "visible",
      }}
    >
      {/* Layer 1: Isometric grid background */}
      <IsometricGrid />

      {/* Layer 2: Content */}
      <div
        className="container"
        style={{
          maxWidth: "1495px",
          margin: "0 auto",
          padding: "0 52px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Hero text — left aligned */}
        <div
          className="hero__text"
          style={{
            width: "891px",
            marginTop: "51px",
            paddingBottom: "245px",
          }}
        >
          <h1
            className="hero__title"
            style={{
              fontFamily: "var(--font-rethink-sans), 'Rethink Sans', sans-serif",
              fontSize: "68px",
              lineHeight: "78px",
              fontWeight: 500,
              color: "#FFFFFF",
              letterSpacing: "-2px",
              margin: 0,
              marginBottom: "40px",
            }}
          >
            We Build AI-Enabled<br />
            Software Platforms
          </h1>

          <div className="hero__desc-group">
            <p
              className="hero__desc"
              style={{
                fontFamily: font,
                fontSize: "23.16px",
                lineHeight: "30.88px",
                fontWeight: 500,
                color: "#a39E99",
                maxWidth: "600px",
                margin: 0,
                marginBottom: "32px",
              }}
            >
              From MVP to enterprise. Operations, commerce, and marketplace
              platforms — Cloud, DevOps, and QA built in.
            </p>

            <Button variant="light">Book a Call</Button>
          </div>
        </div>

        {/* Tab bar + product visual */}
        <div className="hero__tabs" style={{ width: "100%" }}>

          {/* Bar wrapper — breaks out of container padding to span full 1495px */}
          <div
            className="hero__bar-wrapper"
            style={{
              marginLeft: "-52px",
              marginRight: "-52px",
              width: "calc(100% + 104px)",
              paddingLeft: "52px",
              paddingRight: "52px",
            }}
          >
            {/* Tab list */}
            <div className="hero__tabbar" role="tablist">
              {tabs.map((tab, i) => (
                <div
                  key={tab.id}
                  className={`c-tab-link c-tab-link--dark${activeTab === i ? " c-tab-link--active" : ""}`}
                  role="tab"
                  aria-selected={activeTab === i}
                  onClick={() => setActiveTab(i)}
                >
                  <div className="c-tab-link__title">
                    <span>{tab.title}</span>
                    <span className="c-tab-link__subtitle">{tab.subtitle}</span>
                  </div>
                  <div className="c-tab-link__divider" />
                </div>
              ))}
            </div>

            {/* Bottom line */}
            <div className="hero__tabbar-line-bottom" aria-hidden="true" />
          </div>

          {/* Tab content panels — also break out for full-width previews */}
          <div
            className="hero__tabcontent"
            style={{
              marginLeft: "-52px",
              marginRight: "-52px",
              width: "calc(100% + 104px)",
              position: "relative",
              marginTop: "64px",
            }}
          >
            {tabs.map((tab, i) => (
              <div
                key={tab.id}
                className="hero__preview"
                role="tabpanel"
                hidden={activeTab !== i}
                style={{
                  width: "100%",
                  paddingBottom: "51px",
                  backgroundColor: "#1C1C1C",
                }}
              >
                <img
                  src="/1.png"
                  alt=""
                  className="preview-placeholder"
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
