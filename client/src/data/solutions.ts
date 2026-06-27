import type { CardStackItem } from "@/components/ui/card-stack";

export type SolutionItem = CardStackItem & {
  image: string;
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?w=800&h=600&fit=crop&q=80&auto=format`;

export const solutions: SolutionItem[] = [
  {
    id: "android-app-development",
    title: "Android app development",
    tag: "Mobile",
    description:
      "Native Android applications built for performance, scalability, and seamless user experiences.",
    image: img("photo-1512941937669-90a1b58e7e9c"),
  },
  {
    id: "branding-graphic-design",
    title: "Branding & graphic design",
    tag: "Design",
    description:
      "Distinctive brand identities and visual systems that communicate your story with clarity.",
    image: img("photo-1561070791-2526d30994b5"),
  },
  {
    id: "business-it-consulting",
    title: "Business & IT consulting",
    tag: "Consulting",
    description:
      "Strategic guidance aligning technology investments with measurable business outcomes.",
    image: img("photo-1556761175-5973dc0f32e7"),
  },
  {
    id: "custom-software-development",
    title: "Custom software development",
    tag: "Development",
    description:
      "Tailored software solutions engineered to fit your workflows, teams, and growth goals.",
    image: img("photo-1555066931-4365d14bab8c"),
  },
  {
    id: "devops-consulting",
    title: "DevOps consulting",
    tag: "Infrastructure",
    description:
      "CI/CD pipelines, cloud automation, and reliable delivery practices for modern teams.",
    image: img("photo-1558494949-ef010cbdcc31"),
  },
  {
    id: "digital-marketing",
    title: "Digital marketing",
    tag: "Marketing",
    description:
      "Full-funnel digital campaigns that attract, engage, and convert your target audience.",
    image: img("photo-1611224923853-80b023f02d71"),
  },
  {
    id: "ecommerce-design-web",
    title: "Ecommerce design & web solutions",
    tag: "Commerce",
    description:
      "High-converting storefronts and commerce platforms optimized for sales and retention.",
    image: img("photo-1556742049-0cfed4f6a45d"),
  },
  {
    id: "enterprise-development",
    title: "Enterprise development",
    tag: "Enterprise",
    description:
      "Robust enterprise systems designed for security, integration, and long-term scale.",
    image: img("photo-1486406146926-c627a92ad1ab"),
  },
  {
    id: "ios-app-development",
    title: "iOS app development",
    tag: "Mobile",
    description:
      "Polished iOS apps crafted with Apple-grade UX, performance, and reliability.",
    image: img("photo-1547658719-da2b51169166"),
  },
  {
    id: "it-consulting",
    title: "IT consulting",
    tag: "Consulting",
    description:
      "Expert IT advisory to modernize infrastructure, reduce risk, and accelerate delivery.",
    image: img("photo-1600880292203-757bb62b4baf"),
  },
  {
    id: "it-contract-staffing",
    title: "IT contract staffing",
    tag: "Staffing",
    description:
      "Skilled technology professionals to extend your team and meet critical deadlines.",
    image: img("photo-1522071820081-009f0129c71c"),
  },
  {
    id: "marketing-automation",
    title: "Marketing automation",
    tag: "Marketing",
    description:
      "Automated journeys and workflows that nurture leads and personalize engagement.",
    image: img("photo-1542744173-8e7e53415bb0"),
  },
  {
    id: "mobile-app-development",
    title: "Mobile app development",
    tag: "Mobile",
    description:
      "Cross-platform and native mobile apps that deliver value on every device.",
    image: img("photo-1551650975-87deedd944c3"),
  },
  {
    id: "performance-marketing",
    title: "Performance marketing",
    tag: "Marketing",
    description:
      "Data-driven paid campaigns focused on ROI, attribution, and scalable growth.",
    image: img("photo-1551288049-bebda4e38f71"),
  },
  {
    id: "seo",
    title: "SEO",
    tag: "Marketing",
    description:
      "Search strategies that improve visibility, authority, and organic traffic over time.",
    image: img("photo-1504639725590-34d0984388bd"),
  },
  {
    id: "social-media-optimization",
    title: "Social media optimization",
    tag: "Marketing",
    description:
      "Social presence optimization to grow reach, engagement, and brand loyalty.",
    image: img("photo-1611162616305-c69b3fa7fbe0"),
  },
  {
    id: "testing-qa",
    title: "Testing & QA",
    tag: "Quality",
    description:
      "Comprehensive testing services ensuring reliability, performance, and release confidence.",
    image: img("photo-1581091226825-a6a2a5aee158"),
  },
  {
    id: "ui-ux-design",
    title: "UI/UX design",
    tag: "Design",
    description:
      "Human-centered interfaces that balance aesthetics, usability, and business goals.",
    image: img("photo-1517694712202-14dd9538aa97"),
  },
  {
    id: "web-analytics-data-insights",
    title: "Web analytics & data insights",
    tag: "Analytics",
    description:
      "Actionable analytics dashboards and insights to guide smarter decisions.",
    image: img("photo-1460925895917-afdab827c52f"),
  },
  {
    id: "web-development",
    title: "Web development",
    tag: "Development",
    description:
      "Modern, responsive websites and web apps built for speed, SEO, and maintainability.",
    image: img("photo-1498050108023-c5249f4df085"),
  },
];
