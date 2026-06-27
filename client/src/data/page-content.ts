import {
  Cloud,
  Code2,
  Lightbulb,
  Palette,
  Rocket,
  Search,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const aboutPage = {
  hero: {
    title: "Built on craft, driven by partnership",
    subtitle:
      "Marvelbytes is a software development and IT services studio focused on building reliable digital products. We work closely with businesses that need modern engineering, clear communication, and technology that scales beyond the first release.",
  },
  story: {
    title: "Who we are",
    paragraphs: [
      "We started Marvelbytes with a simple belief: great software comes from understanding the business first, then applying disciplined engineering. We're a newly established team, which means every project gets senior attention, direct access to the people building your product, and a process designed for clarity—not bureaucracy.",
      "Whether you need a custom platform, a mobile app, cloud modernization, or ongoing technical partnership, we approach each engagement as a long-term relationship. We don't optimize for flashy demos—we optimize for maintainable code, thoughtful architecture, and outcomes you can measure.",
    ],
  },
  mission: {
    title: "Our mission",
    body: "Help businesses turn complex ideas into software that is secure, scalable, and easy to evolve. We combine modern development practices with a client-first mindset so your technology supports growth—not holds it back.",
  },
  process: [
    {
      title: "Discover",
      icon: Search,
      summary: "Understand the problem before writing code.",
      detail:
        "We run structured discovery sessions to map your goals, users, technical constraints, and success metrics. This phase surfaces risks early, aligns stakeholders, and produces a focused scope so everyone knows what we're building and why.",
    },
    {
      title: "Design",
      icon: Lightbulb,
      summary: "Plan architecture, UX, and delivery before build.",
      detail:
        "We translate requirements into system design, user flows, and a delivery roadmap. You'll see wireframes or prototypes where needed, technical architecture decisions explained in plain language, and a realistic timeline with clear milestones.",
    },
    {
      title: "Build",
      icon: Code2,
      summary: "Ship iteratively with testing built in.",
      detail:
        "Development happens in agile sprints with regular demos, code reviews, and automated testing. You get visibility into progress every step of the way—no black-box delivery. We prioritize clean code, security, and performance from day one.",
    },
    {
      title: "Launch",
      icon: Rocket,
      summary: "Deploy, support, and improve with real feedback.",
      detail:
        "We handle deployment, monitoring setup, and go-live support. After launch, we help you iterate based on user feedback and business data. Many clients stay with us for ongoing enhancements, DevOps, and strategic technology guidance.",
    },
  ] as { title: string; icon: LucideIcon; summary: string; detail: string }[],
  values: [
    {
      title: "Innovation with purpose",
      body: "We adopt modern tools when they solve real problems—not because they're trendy. Every technical choice ties back to your business goals.",
    },
    {
      title: "Client-first delivery",
      body: "Your priorities shape our roadmap. We communicate proactively, document decisions, and adapt as requirements evolve.",
    },
    {
      title: "Quality engineering",
      body: "Testing, security, and maintainability are non-negotiable. We build software your team can own and extend.",
    },
    {
      title: "Transparent collaboration",
      body: "No jargon walls. You'll always know where the project stands, what's next, and what trade-offs we're recommending.",
    },
  ],
  partnership: {
    title: "What partnership looks like",
    body: "Most clients work with us through project-based delivery, dedicated team augmentation, or ongoing retainers for product evolution. We'll recommend the model that fits your timeline, budget, and internal capabilities—then stay accountable to the results.",
  },
};

export const solutionsPage = {
  hero: {
    title: "End-to-end technology solutions",
    subtitle:
      "From product engineering and cloud infrastructure to design and digital growth—we help you plan, build, and scale software across the full lifecycle. Every service below can stand alone or combine into a tailored engagement.",
  },
  pillars: [
    {
      icon: Code2,
      title: "Product engineering",
      body: "Custom web and mobile applications, API development, and legacy modernization—built with frameworks and architectures chosen for your scale and team.",
    },
    {
      icon: Cloud,
      title: "Cloud & infrastructure",
      body: "DevOps pipelines, cloud migration, monitoring, and security hardening so your platforms stay reliable under real-world load.",
    },
    {
      icon: Palette,
      title: "Design & experience",
      body: "UI/UX design, branding, and ecommerce experiences that balance usability with conversion and brand consistency.",
    },
    {
      icon: ShieldCheck,
      title: "Quality & advisory",
      body: "QA, IT consulting, staffing support, and analytics to reduce risk and align technology investments with business outcomes.",
    },
  ] as { icon: LucideIcon; title: string; body: string }[],
  categoryIntros: {
    Development:
      "Tailored software for web, enterprise systems, and business-critical workflows.",
    Mobile: "Native and cross-platform apps designed for performance and long-term maintainability.",
    Enterprise:
      "Large-scale systems with integration, security, and compliance requirements.",
    Design: "Visual identity and interface design that supports clear, effective user experiences.",
    Infrastructure:
      "Automation, deployment, and cloud practices that keep delivery fast and stable.",
    Consulting:
      "Strategic IT guidance to modernize stacks, reduce risk, and prioritize the right investments.",
    Marketing:
      "Digital campaigns, SEO, and automation to grow reach and measurable engagement.",
    Commerce: "Storefronts and commerce platforms optimized for sales and retention.",
    Analytics:
      "Dashboards and data insights that turn usage and performance into decisions.",
    Quality: "Structured testing and QA to ship with confidence.",
    Staffing:
      "Skilled technologists to extend your team and meet critical deadlines.",
  } as Record<string, string>,
};

export const contactPage = {
  hero: {
    title: "Tell us what you're building",
    subtitle:
      "Whether you have a detailed brief or a rough idea, we'd like to hear from you. Share your project context and we'll respond within one business day with suggested next steps—no pressure, no generic pitch deck.",
  },
  expect: {
    title: "What happens next",
    steps: [
      {
        title: "We review your message",
        body: "A member of our team reads your inquiry and identifies the right expertise for an initial conversation.",
      },
      {
        title: "Introductory call",
        body: "We schedule a short call to understand your goals, constraints, timeline, and technical environment.",
      },
      {
        title: "Scope & recommendation",
        body: "You'll receive a clear summary of how we can help—services, approach, and indicative timeline—so you can decide with confidence.",
      },
      {
        title: "Partnership kickoff",
        body: "If we're a good fit, we move into structured discovery and align on milestones before development begins.",
      },
    ],
  },
};
