"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Services", href: "/services", hasDropdown: false },
  { label: "Solutions", href: "/solutions", hasDropdown: false },
  { label: "Case Studies", href: "/case-studies", hasDropdown: false },
  { label: "Company", href: "/company", hasDropdown: false },
  { label: "Contact", href: "/contact", hasDropdown: false },
];

const BANNER_HEIGHT = 41;
const NAV_HEIGHT_SCROLLED = 88;
const FADE_RANGE = 200;
const SPRING = "cubic-bezier(0.16, 1, 0.3, 1)";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  // 1 = full glass, 0 = fully solid
  const [glassProgress, setGlassProgress] = useState(1);
  const fadeStartRef = useRef(0);
  const fadeEndRef = useRef(0);

  useEffect(() => {
    const measure = () => {
      // Anchor fade to the tab bar — solid before dashboard area is visible
      const tabbar = document.querySelector(".hero__tabs") as HTMLElement | null;
      if (tabbar) {
        const rect = tabbar.getBoundingClientRect();
        const absTop = rect.top + window.scrollY;
        fadeEndRef.current = absTop - NAV_HEIGHT_SCROLLED;
        fadeStartRef.current = fadeEndRef.current - FADE_RANGE;
      }
    };

    const update = () => {
      const sy = window.scrollY;
      setScrolled(sy > BANNER_HEIGHT);
      const progress = 1 - Math.min(1, Math.max(0, (sy - fadeStartRef.current) / FADE_RANGE));
      setGlassProgress(progress);
    };

    measure();
    update();

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const isScrolled = scrolled;
  const blur = isScrolled ? 20 * glassProgress : 0;
  const bgOpacity = isScrolled ? 0.82 + (1 - glassProgress) * 0.18 : 0;
  const shadow = isScrolled
    ? `0 1px 0 rgba(255,255,255,${0.06 * glassProgress}), 0 12px 40px rgba(0,0,0,${0.5 * glassProgress + 0.15})`
    : "none";

  const navBg = `rgba(16, 16, 16, ${bgOpacity})`;
  const navHeight = isScrolled ? "88px" : "118px";
  const navLinkBg = "transparent";

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        isolation: "isolate",
        backgroundColor: navBg,
        backdropFilter: blur > 0.5 ? `blur(${blur}px) saturate(160%)` : "none",
        WebkitBackdropFilter: blur > 0.5 ? `blur(${blur}px) saturate(160%)` : "none",
        boxShadow: shadow,
        transition: `height 0.5s ${SPRING}`,
      }}
    >
      <div
        style={{
          maxWidth: "1495px",
          height: navHeight,
          padding: "0 30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "0 auto",
          transition: `height 0.5s ${SPRING}`,
        }}
      >
        {/* Left: logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontSize: isScrolled ? "21px" : "23.16px",
              fontWeight: 500,
              lineHeight: "30.88px",
              color: "#FFFFFF",
              fontFamily: "var(--font-rethink-sans), 'Rethink Sans', sans-serif",
              whiteSpace: "nowrap",
              transition: `font-size 0.5s ${SPRING}`,
            }}
          >
            Octeters
          </span>
        </Link>

        {/* Center: nav links */}
        <nav
          style={{
            flex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "nowrap",
            overflow: "visible",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              style={{
                padding: "15px",
                borderRadius: "5.15px",
                background: navLinkBg,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                textDecoration: "none",
                transition: "color 0.15s ease, background 0.15s ease",
                fontFamily: "var(--font-rethink-sans), 'Rethink Sans', sans-serif",
                fontSize: "22px",
                lineHeight: "25.74px",
                fontWeight: 400,
                color: "#f9f9f9",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#FFFFFF";
                el.style.background = "rgba(255,255,255,0.05)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.color = "#f9f9f9";
                el.style.background = "transparent";
              }}
            >
              {link.label}
              {link.hasDropdown && (
                <ChevronDown size={14} color="currentColor" strokeWidth={2} />
              )}
            </Link>
          ))}
        </nav>

        {/* Right section: sign in + book a call */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            flexShrink: 0,
          }}
        >
          <Link
            href="/contact"
            style={{
              width: "162px",
              height: isScrolled ? "44px" : "51px",
              padding: "0 30px",
              borderRadius: "9999px",
              background: "#E6E3E0",
              color: "#000000",
              fontSize: "20px",
              lineHeight: "30.88px",
              fontWeight: 400,
              border: "none",
              cursor: "pointer",
              fontFamily: "var(--font-rethink-sans), 'Rethink Sans', sans-serif",
              transition: `background 0.15s ease, transform 0.15s ease, height 0.5s ${SPRING}`,
              whiteSpace: "nowrap",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#D4D0CD";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.background = "#E6E3E0";
              el.style.transform = "translateY(0)";
            }}
          >
            Book a Call
          </Link>
        </div>
      </div>
      <div className="nav-bottom-line" />
    </header>
  );
}
