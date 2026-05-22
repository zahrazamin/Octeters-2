export interface Service {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  capabilities: string[];
  deliverables: string[];
}

export interface Solution {
  slug: string;
  title: string;
  problem: string;
  outcomes: string[];
  deliverables: string[];
  steps: { title: string; description: string }[];
  relatedCaseStudy: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  whatItIs: string;
  outcome: string;
  tags: string[];
  challenge: string;
  approach: string;
  results: { metric: string; description: string }[];
  testimonial: { quote: string; name: string; role: string };
  stack: string[];
}

export const services: Service[] = [
  {
    slug: "product-engineering",
    title: "Product Engineering",
    subtitle: "MVP + Scale",
    description:
      "From first prototype to production-grade platform. We architect for your next stage — not just your current one. Our product engineers work alongside your team to ship fast and iterate faster.",
    capabilities: [
      "MVP design and rapid prototyping",
      "Full-stack product development",
      "Architecture design for scale",
      "API design and integration",
      "Mobile-first responsive interfaces",
      "Performance optimization",
    ],
    deliverables: [
      "Working MVP in 8–12 weeks",
      "Architecture documentation",
      "CI/CD pipeline from day one",
      "Weekly demo cadence",
    ],
  },
  {
    slug: "custom-software",
    title: "Custom Software + Web Platforms",
    subtitle: "SaaS, Portals, APIs, Modernization",
    description:
      "Internal tools, client portals, SaaS platforms, and API layers — built to integrate with your existing systems and built to last through your next 10x of growth.",
    capabilities: [
      "SaaS platform development",
      "Client and admin portals",
      "REST and GraphQL API design",
      "Legacy system modernization",
      "Third-party integrations",
      "Multi-tenant architecture",
    ],
    deliverables: [
      "Production-ready platform",
      "API documentation",
      "Integration test suite",
      "Deployment runbook",
    ],
  },
  {
    slug: "generative-ai",
    title: "Generative AI",
    subtitle: "LLM, RAG, Agents, Guardrails",
    description:
      "Production-grade AI that is safe, measurable, and actually useful. We design RAG pipelines, LLM integrations, and autonomous agents into your product architecture from day one — not bolted on after launch.",
    capabilities: [
      "LLM integration and fine-tuning",
      "RAG pipeline architecture",
      "Autonomous agent workflows",
      "AI guardrails and safety layers",
      "Embedding and vector search",
      "Observability and evaluation",
    ],
    deliverables: [
      "Production AI pipeline",
      "Safety and evaluation framework",
      "Monitoring dashboard",
      "Cost optimization analysis",
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud + DevOps",
    subtitle: "CI/CD, IaC, Kubernetes, Observability",
    description:
      "Infrastructure as code, automated pipelines, container orchestration, and full-stack observability — built into every engagement, not sold as an add-on.",
    capabilities: [
      "CI/CD pipeline automation",
      "Infrastructure as Code (Terraform, Pulumi)",
      "Kubernetes orchestration",
      "Cloud architecture (AWS, GCP, Azure)",
      "Monitoring and alerting",
      "Cost optimization",
    ],
    deliverables: [
      "Fully automated deployment pipeline",
      "Infrastructure as Code repository",
      "Monitoring and alerting setup",
      "Runbook documentation",
    ],
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    subtitle: "Headless, Marketplace, Subscription, Payments",
    description:
      "High-performance commerce platforms with headless architecture, subscription billing, marketplace features, and payment integrations that drive revenue growth.",
    capabilities: [
      "Headless commerce architecture",
      "Marketplace platform development",
      "Subscription and recurring billing",
      "Payment gateway integration",
      "Inventory and order management",
      "Performance optimization",
    ],
    deliverables: [
      "Scalable commerce platform",
      "Payment integration suite",
      "Admin dashboard",
      "Analytics and reporting",
    ],
  },
  {
    slug: "qa-support",
    title: "QA + Managed Support",
    subtitle: "Automation, Performance, Security, AMS",
    description:
      "End-to-end quality assurance with test automation, performance testing, security auditing, and ongoing application managed services after launch.",
    capabilities: [
      "Test automation frameworks",
      "Performance and load testing",
      "Security testing and auditing",
      "Regression testing",
      "Application managed services",
      "24/7 monitoring and incident response",
    ],
    deliverables: [
      "Automated test suite",
      "Performance benchmarks",
      "Security audit report",
      "SLA-backed support plan",
    ],
  },
];

export const solutions: Solution[] = [
  {
    slug: "mvp-launch",
    title: "MVP Launch",
    problem:
      "You have a validated idea but building in-house takes months of hiring before a single line ships.",
    outcomes: [
      "Working product in 8–12 weeks",
      "Architecture designed for scale from day one",
      "CI/CD, DevOps, and QA built in — not bolted on later",
    ],
    deliverables: [
      "Product architecture and design system",
      "Full-stack MVP with core user flows",
      "CI/CD pipeline and staging environment",
      "User analytics integration",
      "Launch-ready deployment",
      "Post-launch support plan",
    ],
    steps: [
      {
        title: "Scope",
        description: "Define outcomes, user flows, and success metrics in a free discovery call.",
      },
      {
        title: "Architect",
        description: "Design the technical foundation — stack, data models, and integration points.",
      },
      {
        title: "Build",
        description: "Weekly demos, continuous deployment, and clear milestone tracking.",
      },
      {
        title: "Launch",
        description: "Production deployment with monitoring, support, and iteration plan.",
      },
    ],
    relatedCaseStudy: "mintcrm",
  },
  {
    slug: "legacy-modernization",
    title: "Legacy Modernization",
    problem:
      "Your existing system is slowing you down. Maintenance costs are rising, features take months, and talent is hard to find.",
    outcomes: [
      "Modern stack without full rewrite risk",
      "Reduced maintenance costs and faster feature delivery",
      "Incremental migration with zero downtime",
    ],
    deliverables: [
      "Legacy system audit and migration roadmap",
      "API layer for gradual decoupling",
      "Modern frontend with existing backend",
      "Database migration strategy",
      "Automated test coverage for critical paths",
      "Knowledge transfer documentation",
    ],
    steps: [
      {
        title: "Audit",
        description: "Map the existing system, identify pain points, and prioritize migration paths.",
      },
      {
        title: "Decouple",
        description: "Build API layers and abstractions to enable incremental modernization.",
      },
      {
        title: "Migrate",
        description: "Move components to modern stack with parallel running and zero downtime.",
      },
      {
        title: "Optimize",
        description: "Performance tuning, monitoring, and ongoing support for the new system.",
      },
    ],
    relatedCaseStudy: "mintcrm",
  },
  {
    slug: "ai-enablement",
    title: "AI Enablement",
    problem:
      "You want AI in your product but need it to be safe, measurable, and production-grade — not a demo that breaks in production.",
    outcomes: [
      "Production-grade AI pipeline with guardrails",
      "Measurable business impact from AI features",
      "Safe LLM integration with evaluation framework",
    ],
    deliverables: [
      "RAG pipeline with vector search",
      "LLM integration with safety guardrails",
      "Agent workflow automation",
      "Evaluation and monitoring framework",
      "Cost optimization analysis",
      "Team training and documentation",
    ],
    steps: [
      {
        title: "Assess",
        description: "Identify high-impact AI use cases and evaluate feasibility against your data.",
      },
      {
        title: "Prototype",
        description: "Build proof-of-concept with real data to validate approach and measure quality.",
      },
      {
        title: "Productionize",
        description: "Harden the pipeline with guardrails, monitoring, and evaluation loops.",
      },
      {
        title: "Scale",
        description: "Optimize costs, expand use cases, and train your team on maintenance.",
      },
    ],
    relatedCaseStudy: "agent360",
  },
  {
    slug: "commerce-growth",
    title: "Commerce Growth",
    problem:
      "Your commerce platform can't keep up. Page speed is killing conversion, integrations are fragile, and subscription logic is duct-taped together.",
    outcomes: [
      "Faster storefront with headless architecture",
      "Robust subscription and recurring billing",
      "Seamless third-party integrations",
    ],
    deliverables: [
      "Headless commerce frontend",
      "Subscription billing integration",
      "Payment gateway setup",
      "Inventory and order management",
      "Analytics and conversion tracking",
      "Performance optimization",
    ],
    steps: [
      {
        title: "Diagnose",
        description: "Audit current platform performance, integration points, and conversion bottlenecks.",
      },
      {
        title: "Architect",
        description: "Design headless architecture with API-first approach for flexibility.",
      },
      {
        title: "Build",
        description: "Implement storefront, billing, and integrations with continuous testing.",
      },
      {
        title: "Optimize",
        description: "A/B testing, performance tuning, and conversion rate optimization.",
      },
    ],
    relatedCaseStudy: "buyca",
  },
  {
    slug: "marketplace-build",
    title: "Marketplace / Portal Build",
    problem:
      "You need a data-rich platform with search, user portals, and complex workflows — but off-the-shelf solutions don't fit your domain.",
    outcomes: [
      "Custom marketplace with advanced search and filtering",
      "Multi-sided platform with role-based portals",
      "Scalable architecture for growing data and users",
    ],
    deliverables: [
      "Multi-sided marketplace platform",
      "Advanced search and filtering (including AI)",
      "User portals with role-based access",
      "Listing and content management",
      "Analytics dashboard",
      "Investor/admin tools",
    ],
    steps: [
      {
        title: "Define",
        description: "Map platform participants, workflows, and data requirements.",
      },
      {
        title: "Design",
        description: "Architecture for multi-tenant data, search indexing, and portal access.",
      },
      {
        title: "Build",
        description: "Core platform with search, listings, portals, and admin tools.",
      },
      {
        title: "Launch",
        description: "Go-to-market support, onboarding flows, and growth optimization.",
      },
    ],
    relatedCaseStudy: "buyca",
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "buyca",
    name: "buy.ca",
    whatItIs: "PropTech platform with AI-powered search, data-rich listings, and investor tools",
    outcome: "3× search-to-lead conversion with visual AI search",
    tags: ["AI", "Marketplace", "PropTech"],
    challenge:
      "buy.ca needed a data-rich real estate platform that could handle complex property searches, visual AI-powered search, and investor portfolio tools — all while maintaining sub-second response times across millions of listings.",
    approach:
      "We built a custom marketplace platform with headless architecture, integrated AI-powered visual search and natural language property queries, and designed investor tools with real-time portfolio analytics. The platform was deployed on Kubernetes with full observability from day one.",
    results: [
      { metric: "3×", description: "Search-to-lead conversion rate improvement" },
      { metric: "AI Search", description: "Visual search and NLP queries built from scratch" },
      { metric: "<200ms", description: "Average search response time across millions of listings" },
    ],
    testimonial: {
      quote:
        "Octeters understood our business model deeply enough to challenge our assumptions. The AI search feature they proposed wasn't in our brief, and it became the product's biggest selling point.",
      name: "James D.",
      role: "CEO, buy.ca",
    },
    stack: ["Next.js", "Python", "PostgreSQL", "Redis", "Kubernetes", "OpenAI", "Pinecone"],
  },
  {
    slug: "mintcrm",
    name: "mintcrm.ai",
    whatItIs: "Vertical SaaS for accounting firms — workflows, deadlines, and client request management",
    outcome: "60% reduction in admin time, shipped in 12 weeks",
    tags: ["SaaS", "Operations", "DevOps"],
    challenge:
      "Accounting firms were drowning in fragmented tools — spreadsheets for deadlines, email for client requests, and manual follow-ups eating 40% of admin time. mintcrm.ai needed a unified platform that mapped to how accounting ops actually work.",
    approach:
      "We designed a vertical SaaS platform from scratch, mapping accounting workflows into structured pipelines with automated reminders, client self-service portals, and real-time deadline tracking. The platform replaced 6 separate tools with one integrated workspace.",
    results: [
      { metric: "60%", description: "Reduction in administrative overhead" },
      { metric: "12 weeks", description: "From first call to production launch" },
      { metric: "1 platform", description: "Replaced 6 separate tools" },
    ],
    testimonial: {
      quote:
        "The weekly demo rhythm kept us aligned throughout. No surprises, no scope creep. Delivered on time and under budget.",
      name: "Sarah L.",
      role: "COO, mintcrm.ai",
    },
    stack: ["React", "Node.js", "PostgreSQL", "Redis", "AWS", "Terraform"],
  },
  {
    slug: "agent360",
    name: "Agent 360",
    whatItIs: "AI-powered autonomous agent platform for task automation with production-grade RAG",
    outcome: "80% task automation rate with full observability",
    tags: ["AI", "Agents", "RAG"],
    challenge:
      "Agent 360 needed to move from proof-of-concept AI demos to a production system where autonomous agents could reliably execute multi-step tasks with full audit trails, safety guardrails, and real-time monitoring.",
    approach:
      "We architected a production-grade agent platform with RAG pipelines, LLM orchestration, and autonomous task execution. Every agent action is logged, evaluated, and monitored. Safety guardrails prevent hallucination-driven actions, and the entire system runs on auto-scaling infrastructure.",
    results: [
      { metric: "80%", description: "Task automation rate in production" },
      { metric: "RAG", description: "Production-grade retrieval pipeline" },
      { metric: "2nd project", description: "Already underway based on first engagement" },
    ],
    testimonial: {
      quote:
        "The DevOps setup they built out of the box saved us months of infrastructure work. The AI agents are running in production with full observability.",
      name: "Ravi K.",
      role: "CTO, Agent 360",
    },
    stack: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI", "Kubernetes", "Grafana"],
  },
];
