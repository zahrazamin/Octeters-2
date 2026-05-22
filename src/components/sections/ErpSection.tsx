"use client";

import { Box, Zap, Settings } from "lucide-react";
import Button from "@/components/ui/Button";

const rows = [
  {
    id: "adaptive",
    icon: <Box size={32} strokeWidth={1.5} color="#000000" />,
    title: <>Built for scale,<br />not just launch</>,
    main: "Most agencies disappear after go-live. Octeters stays.",
    sub: "We architect every product for the next stage, not just the current one. Cloud, DevOps, and QA are built into every engagement — not sold as extras. Your platform grows without rebuilding from scratch.",
  },
  {
    id: "fast",
    icon: <Zap size={32} strokeWidth={1.5} color="#000000" />,
    title: <>MVP to enterprise,<br />faster than in-house</>,
    main: "Ship in weeks. Iterate in days.",
    sub: "Hiring and managing an engineering team takes months before a single line ships. Octeters gives you a senior delivery team on day one — product engineers, DevOps, QA, and AI specialists working in parallel. Most MVPs ship in 12 weeks.",
  },
  {
    id: "value",
    icon: <Settings size={32} strokeWidth={1.5} color="#000000" />,
    title: <>AI built in,<br />not bolted on</>,
    main: "Every platform we build is AI-ready by default.",
    sub: "We don't retrofit AI after launch. RAG pipelines, LLM integrations, intelligent search, and agent workflows are designed into the architecture from day one — safe, measurable, and production-grade.",
  },
];

export default function ErpSection() {
  return (
    <section id="homepage-erp" className="erp-section">
      <div className="erp-container">
        <div className="erp">

          {/* Section headline */}
          <div className="erp__heading">
            <h2 className="erp__title">
              Most software agencies ship code.<br />
              We ship platforms that scale.
            </h2>
          </div>

          {/* Three feature rows */}
          <div className="erp__features-wrapper">
            <div className="erp__features-line-top" aria-hidden="true" />
            {rows.map((row) => (
              <div key={row.id} className="erp__row">
                <div className="erp__lead">
                  <div className="erp__icon">{row.icon}</div>
                  <div className="erp__lead-title">{row.title}</div>
                </div>
                <div className="erp__desc">
                  <div className="erp__desc-main">{row.main}</div>
                  <div className="erp__desc-sub">{row.sub}</div>
                </div>
              </div>
            ))}
            <div className="erp__features-line-bottom" aria-hidden="true" />
          </div>

          {/* CTA block — sibling of features-wrapper */}
          <div className="erp__cta">
            <div className="erp__cta-text">
              <div className="erp__cta-title">Ready to build something that lasts?</div>
              <div className="erp__cta-sub">From first call to first deploy. No guesswork, no surprises.</div>
            </div>
            <Button variant="dark">Book a Call</Button>
          </div>
          <div className="erp__features-line-bottom" aria-hidden="true" />

        </div>
      </div>
    </section>
  );
}
