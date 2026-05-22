"use client";

import { Box, Zap, Settings } from "lucide-react";
import Button from "@/components/ui/Button";

const rows = [
  {
    id: "adaptive",
    icon: <Box size={32} strokeWidth={1.5} color="#000000" />,
    title: <>Adaptive, flexible,<br />and durable</>,
    main: "Most systems force you to conform. DOSS adapts to you.",
    sub: "Unify master data, operations, and intelligence into one platform. Easily update workflows, automations, and integrations with clicks – not tickets. Make faster decisions with built-in, real-time analytics, no additional BI tools required.",
  },
  {
    id: "fast",
    icon: <Zap size={32} strokeWidth={1.5} color="#000000" />,
    title: <>Fast to setup<br />and scale</>,
    main: "Launch in months. Iterate in minutes.",
    sub: "Other ERPs take years to setup and months to change. DOSS is built with modular, no-code architecture that lets you deploy 3x faster, make changes on the fly, and speed up every step of your value chain by 10x or more.",
  },
  {
    id: "value",
    icon: <Settings size={32} strokeWidth={1.5} color="#000000" />,
    title: <>More value,<br />no ERP tax</>,
    main: "Unlock real strategy and solutions.",
    sub: "Our value engineers work with you to deeply understand your business, custom-build your workspace, and provide 24/7 support. We price downstream of value, so every engagement is engineered to maximize your ROI.",
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
              ERP is broken. To fix it, we created<br />
              something completely new.
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
              <div className="erp__cta-title">Upgrade your operations.</div>
              <div className="erp__cta-sub">Fast to deploy. Easy to change. Built to scale.</div>
            </div>
            <Button variant="dark">Book a Call</Button>
          </div>

        </div>
      </div>
    </section>
  );
}
