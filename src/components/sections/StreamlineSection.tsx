"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Box, Package } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function StreamlineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cube01Ref = useRef<HTMLDivElement>(null);
  const cube02Ref = useRef<HTMLDivElement>(null);
  const cube03Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=700",
        pin: true,
        scrub: 1.2,
        anticipatePin: 1,
      },
    });

    // Left cube (02) and right cube (01) both move to center column
    // cube--03 is already at ~42%; target all three to calc(50% - 76px)
    tl.to(
      cube01Ref.current,
      { left: "calc(50% - 76px)", ease: "power2.inOut" },
      0
    ).to(
      cube02Ref.current,
      { left: "calc(50% - 76px)", ease: "power2.inOut" },
      0
    ).to(
      cube03Ref.current,
      { left: "calc(50% - 76px)", ease: "power2.inOut" },
      0
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="homepage-streamline-operations"
      className="streamline-operations-section"
    >
      <div className="streamline-container">

        {/* Section headline */}
        <h2 className="streamline-operations-section__title">
          Build, ship, and scale on one platform
        </h2>

        {/* Cubes area: small top cube, vertical line, 3 staggered cubes */}
        <div className="streamline-operations-section__cubes-wrapper">

          <div className="streamline-operations-section__top-cube">
            <Package size={35} strokeWidth={1} color="rgba(255,255,255,0.6)" />
          </div>
          <div className="streamline-operations-section__center-line" />

          {/* Three cubes — absolutely positioned, animated on scroll */}
          <div className="streamline-operations-section__cubes-field">

            <div ref={cube01Ref} className="streamline-operations-section__cube-item cube--01">
              <Box size={152} strokeWidth={0.5} color="rgba(255,255,255,0.85)" />
              <div className="streamline-operations-section__cube-label">
                <span className="cube-numb">01</span>
                <span className="cube-text">Product engineering</span>
              </div>
            </div>

            <div ref={cube02Ref} className="streamline-operations-section__cube-item cube--02">
              <Box size={152} strokeWidth={0.5} color="rgba(255,255,255,0.85)" />
              <div className="streamline-operations-section__cube-label">
                <span className="cube-numb">02</span>
                <span className="cube-text">AI and data layers</span>
              </div>
            </div>

            <div ref={cube03Ref} className="streamline-operations-section__cube-item cube--03">
              <Box size={152} strokeWidth={0.5} color="rgba(255,255,255,0.85)" />
              <div className="streamline-operations-section__cube-label">
                <span className="cube-numb">03</span>
                <span className="cube-text">Cloud and operations</span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom text — two columns */}
        <div className="streamline-operations-section__text-content-wrapper">

          <h3 className="streamline-operations-section__subtitle">
            Architect, deliver, and support in one engagement
          </h3>

          <div className="streamline-operations-section__text-wrapper">
            <div className="streamline-operations-section__text-container">
              <div className="streamline-operations-section__text-title">
                Built for your next stage, not just your current one
              </div>
              <p className="streamline-operations-section__text-desc">
                Most agencies hand you code and disappear. Octeters
                architects your platform for where you&apos;re going —
                with DevOps, QA, and AI built in from day one.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
