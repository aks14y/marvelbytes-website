import type { CardStackItem } from "@/components/ui/card-stack";

export type SolutionItem = CardStackItem & {
  gradient: string;
};

export const solutions: SolutionItem[] = [
  {
    id: "android-app-development",
    title: "Android App Development",
    tag: "Mobile",
    description:
      "Native Android applications built for performance, scalability, and seamless user experiences.",
    gradient: "from-emerald-600 via-teal-700 to-cyan-900",
  },
  {
    id: "branding-graphic-design",
    title: "Branding & Graphic Design",
    tag: "Design",
    description:
      "Distinctive brand identities and visual systems that communicate your story with clarity.",
    gradient: "from-fuchsia-600 via-purple-700 to-indigo-900",
  },
  {
    id: "business-it-consulting",
    title: "Business & IT Consulting",
    tag: "Consulting",
    description:
      "Strategic guidance aligning technology investments with measurable business outcomes.",
    gradient: "from-blue-600 via-indigo-700 to-violet-900",
  },
  {
    id: "custom-software-development",
    title: "Custom Software Development",
    tag: "Development",
    description:
      "Tailored software solutions engineered to fit your workflows, teams, and growth goals.",
    gradient: "from-sky-600 via-blue-700 to-indigo-900",
  },
  {
    id: "devops-consulting",
    title: "DevOps Consulting",
    tag: "Infrastructure",
    description:
      "CI/CD pipelines, cloud automation, and reliable delivery practices for modern teams.",
    gradient: "from-orange-600 via-amber-700 to-yellow-900",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    tag: "Marketing",
    description:
      "Full-funnel digital campaigns that attract, engage, and convert your target audience.",
    gradient: "from-rose-600 via-pink-700 to-red-900",
  },
  {
    id: "ecommerce-design-web",
    title: "Ecommerce Design & Web Solutions",
    tag: "Commerce",
    description:
      "High-converting storefronts and commerce platforms optimized for sales and retention.",
    gradient: "from-violet-600 via-purple-700 to-fuchsia-900",
  },
  {
    id: "enterprise-development",
    title: "Enterprise Development",
    tag: "Enterprise",
    description:
      "Robust enterprise systems designed for security, integration, and long-term scale.",
    gradient: "from-slate-600 via-zinc-700 to-neutral-900",
  },
  {
    id: "ios-app-development",
    title: "iOS App Development",
    tag: "Mobile",
    description:
      "Polished iOS apps crafted with Apple-grade UX, performance, and reliability.",
    gradient: "from-gray-500 via-slate-700 to-zinc-900",
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    tag: "Consulting",
    description:
      "Expert IT advisory to modernize infrastructure, reduce risk, and accelerate delivery.",
    gradient: "from-cyan-600 via-blue-700 to-blue-900",
  },
  {
    id: "it-contract-staffing",
    title: "IT Contract Staffing",
    tag: "Staffing",
    description:
      "Skilled technology professionals to extend your team and meet critical deadlines.",
    gradient: "from-teal-600 via-emerald-700 to-green-900",
  },
  {
    id: "marketing-automation",
    title: "Marketing Automation",
    tag: "Marketing",
    description:
      "Automated journeys and workflows that nurture leads and personalize engagement.",
    gradient: "from-pink-600 via-rose-700 to-red-900",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    tag: "Mobile",
    description:
      "Cross-platform and native mobile apps that deliver value on every device.",
    gradient: "from-indigo-600 via-violet-700 to-purple-900",
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    tag: "Marketing",
    description:
      "Data-driven paid campaigns focused on ROI, attribution, and scalable growth.",
    gradient: "from-amber-600 via-orange-700 to-red-900",
  },
  {
    id: "seo",
    title: "SEO",
    tag: "Marketing",
    description:
      "Search strategies that improve visibility, authority, and organic traffic over time.",
    gradient: "from-lime-600 via-green-700 to-emerald-900",
  },
  {
    id: "social-media-optimization",
    title: "Social Media Optimization",
    tag: "Marketing",
    description:
      "Social presence optimization to grow reach, engagement, and brand loyalty.",
    gradient: "from-blue-500 via-indigo-600 to-purple-900",
  },
  {
    id: "testing-qa",
    title: "Testing & QA",
    tag: "Quality",
    description:
      "Comprehensive testing services ensuring reliability, performance, and release confidence.",
    gradient: "from-green-600 via-teal-700 to-cyan-900",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    tag: "Design",
    description:
      "Human-centered interfaces that balance aesthetics, usability, and business goals.",
    gradient: "from-purple-600 via-violet-700 to-indigo-900",
  },
  {
    id: "web-analytics-data-insights",
    title: "Web Analytics & Data Insights",
    tag: "Analytics",
    description:
      "Actionable analytics dashboards and insights to guide smarter decisions.",
    gradient: "from-cyan-500 via-sky-700 to-blue-900",
  },
  {
    id: "web-development",
    title: "Web Development",
    tag: "Development",
    description:
      "Modern, responsive websites and web apps built for speed, SEO, and maintainability.",
    gradient: "from-indigo-500 via-blue-700 to-slate-900",
  },
];
