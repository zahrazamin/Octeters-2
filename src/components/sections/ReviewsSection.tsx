"use client";

import { useState } from "react";
import { LayoutDashboard } from "lucide-react";
import Image from "next/image";

const logos = [
  { id: "buyca",     name: "buy.ca" },
  { id: "mintcrm",   name: "mintcrm.ai" },
  { id: "agent360",  name: "Agent 360" },
  { id: "buyca2",    name: "buy.ca" },
  { id: "mintcrm2",  name: "mintcrm.ai" },
  { id: "agent3602", name: "Agent 360" },
];

const slides = [
  {
    index: 0,
    image: "/testimonial-1-image.jpg",
    quote: "Octeters understood our business model deeply enough to challenge our assumptions. The AI search feature they proposed wasn't in our brief, and it became the product's biggest selling point.",
    caseStudyUrl: "/case-studies/buyca",
    name: "buy.ca",
    role: "James D., CEO",
    avatar: null,
    stats: [
      { title: "3×",       text: "search-to-lead conversion" },
      { title: "AI",       text: "Visual search built from scratch" },
      { title: "PropTech", text: "Full marketplace platform" },
    ],
  },
  {
    index: 1,
    image: null,
    quote: "The weekly demo rhythm kept us aligned throughout. No surprises, no scope creep. Delivered on time and under budget. We went from idea to production in 12 weeks.",
    caseStudyUrl: "/case-studies/mintcrm",
    name: "mintcrm.ai",
    role: "Sarah L., COO",
    avatar: null,
    stats: [
      { title: "60%",   text: "reduction in admin time" },
      { title: "12 wk", text: "idea to production" },
      { title: "1",     text: "platform replacing 6 tools" },
    ],
  },
  {
    index: 2,
    image: null,
    quote: "The DevOps setup they built out of the box saved us months of infrastructure work. The AI agents are running in production with full observability. Already on our second project with them.",
    caseStudyUrl: "/case-studies/agent360",
    name: "Agent 360",
    role: "Ravi K., CTO",
    avatar: null,
    stats: [
      { title: "80%", text: "task automation rate" },
      { title: "RAG", text: "production-grade pipeline" },
      { title: "2nd", text: "project already underway" },
    ],
  },
];

export default function ReviewsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="homepage-reviews" className="reviews-section">
      <div className="reviews-section__container">
        <div className="reviews">

          {/* Heading block */}
          <div className="reviews__heading">
            <div className="reviews__title">
              Trusted by teams<br />
              building ambitious<br />
              products
            </div>
            <p className="reviews__desc">
              Our clients ship faster, scale cleaner, and build with confidence — without growing their teams.
            </p>
          </div>

          {/* Marquee container */}
          <div className="marquee-container">
            <div className="marquee reviews-marquee marquee--light">
              <div className="marquee__logos">
                {logos.concat(logos).map((logo, i) => (
                  <div key={i} className="marquee__item-wrapper">
                    <div className={`marquee__item logo logo--${logo.id}`}>
                      <span className="logo-text">{logo.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Testimonial slider — direct child of section */}
      <div className="reviews__slider" id="reviews-slider">

            {/* Previous button */}
            <button
              className="reviews__nav reviews__nav--prev"
              aria-label="Previous"
              onClick={handlePrev}
            >
              <div className="arrow-wrap">
                <svg viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.293 0.292893C13.6835 -0.0976311 14.3165 -0.0976311 14.7071 0.292893L20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711L14.7071 13.7071C14.3165 14.0976 13.6835 14.0976 13.293 13.7071C12.9024 13.3166 12.9024 12.6834 13.293 12.2929L17.5858 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6H17.5858L13.293 1.70711C12.9024 1.31658 12.9024 0.683418 13.293 0.292893Z"
                    fill="currentColor"
                    transform="scale(-1,1) translate(-24,0)"
                  />
                </svg>
              </div>
            </button>

            {/* Viewport + track */}
            <div className="reviews__viewport">
              <div
                className="reviews__track"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {slides.map((slide) => (
                  <div
                    key={slide.index}
                    className="reviews__slide"
                    data-index={slide.index}
                  >
                    {/* PART 1: Card */}
                    <div className="reviews__card">

                      {/* Left: full height image */}
                      <div className="reviews__frame">
                        {slide.image ? (
                          <Image
                            src={slide.image}
                            alt={slide.name}
                            width={800}
                            height={650}
                            className="reviews__image"
                            style={{ width: "100%", height: "650px", objectFit: "cover" }}
                          />
                        ) : (
                          <div className="reviews__image-placeholder">
                            <LayoutDashboard size={48} color="rgba(0,0,0,0.15)" />
                          </div>
                        )}
                      </div>

                      {/* Right: quote + meta only */}
                      <div className="reviews__content">
                        <div className="reviews__quote-wrap">
                          <p className="reviews__quote">
                            {slide.quote}
                          </p>
                          <a href={slide.caseStudyUrl} className="c-button c-button--outline">
                            <span className="c-button__text">View case study</span>
                          </a>
                        </div>

                        <div className="reviews__meta">
                          <div className="reviews__person">
                            <div className="reviews__name">{slide.name}</div>
                            <div className="reviews__role">{slide.role}</div>
                          </div>
                          <div className="reviews__avatar-placeholder">
                            {slide.name.charAt(0)}
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* PART 2: Stats row — below card, full width */}
                    <div className="reviews__stats">
                      {slide.stats.map((stat, i) => (
                        <div key={i} className="reviews__stat">
                          <div className="reviews__stat-title">{stat.title}</div>
                          <div className="reviews__stat-text">{stat.text}</div>
                        </div>
                      ))}
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Next button */}
            <button
              className="reviews__nav reviews__nav--next"
              aria-label="Next"
              onClick={handleNext}
            >
              <div className="arrow-wrap">
                <svg viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.293 0.292893C13.6835 -0.0976311 14.3165 -0.0976311 14.7071 0.292893L20.7071 6.29289C21.0976 6.68342 21.0976 7.31658 20.7071 7.70711L14.7071 13.7071C14.3165 14.0976 13.6835 14.0976 13.293 13.7071C12.9024 13.3166 12.9024 12.6834 13.293 12.2929L17.5858 8H3C2.44772 8 2 7.55228 2 7C2 6.44772 2.44772 6 3 6H17.5858L13.293 1.70711C12.9024 1.31658 12.9024 0.683418 13.293 0.292893Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </button>


          </div>

    </section>
  );
}
