export interface Project {
  id: string;
  title: string;
  categories: string[];
  description?: string;
  image: string;
  /** Live site URL — opens when the card is clicked */
  href?: string;
}

export const projectCategories = [
  "All",
  "Graphic Design",
  "Web design",
  "SEO",
  "Marketing",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

/** Real portfolio — priority live sites first, then additional work */
export const projects: Project[] = [
  {
    id: "gmge",
    title: "GMGE",
    categories: ["Web design"],
    description:
      "Corporate website for Green Mountain General Enterprises — security, ICT, and automation.",
    image: "/images/work/gmge.jpg",
    href: "https://gmge.ae/Web/",
  },
  {
    id: "nasamat",
    title: "Nasamat Group",
    categories: ["Web design", "Marketing"],
    description:
      "E-commerce storefront for Ayurvedic and natural wellness products in the UAE.",
    image: "/images/work/nasamat.jpg",
    href: "https://nasamatgroup.com/",
  },
  {
    id: "codeblue",
    title: "Code Blue Medical Services",
    categories: ["Web design"],
    description:
      "Healthcare consultancy and medical skills training site for Code Blue MS.",
    image: "/images/work/codeblue.jpg",
    href: "https://codebluems.ae/",
  },
  {
    id: "ayurve",
    title: "Ayurve Herbal",
    categories: ["Web design", "Marketing"],
    description:
      "Ayurvedic skincare brand store with rituals, bestsellers, and product collections.",
    image: "/images/work/ayurve.jpg",
    href: "https://ayurveherbal.com/",
  },
  {
    id: "creston",
    title: "Creston Vision Contracting",
    categories: ["Web design"],
    description:
      "Corporate website for Creston Vision Contracting LLC.",
    image: "/images/work/creston.jpg",
    href: "https://crestonvisionllc.com/",
  },
  {
    id: "magnizent",
    title: "Magnizent LLC",
    categories: ["Web design", "Marketing"],
    description:
      "General trading e-commerce for industrial products and hardware in the UAE.",
    image: "/images/work/magnizent.jpg",
    href: "https://magnizentllc.com/",
  },
  {
    id: "life1ems",
    title: "Life1EMS",
    categories: ["Web design"],
    description: "Website for a progressive medical training company.",
    image: "/images/work/w3.jpg",
  },
  {
    id: "exonic-contracting",
    title: "Exonic Contracting LLC",
    categories: ["Web design"],
    description: "Corporate website for an interior contracting firm.",
    image: "/images/work/w1.jpg",
  },
  {
    id: "exon-logistics",
    title: "Exon Logistics",
    categories: ["Web design", "Marketing"],
    description: "Website for an international freight forwarding company.",
    image: "/images/work/w2.jpg",
  },
  {
    id: "zeros-homeopathy",
    title: "Zero's Homeopathy",
    categories: ["Web design", "SEO"],
    description: "Healthcare brand website with services and contact flows.",
    image: "/images/work/w5.jpg",
  },
  {
    id: "nippon-karate",
    title: "Nippon Karate Centre",
    categories: ["Web design", "Marketing"],
    description: "Website for a martial arts training centre in the UAE.",
    image: "/images/work/w4.jpg",
  },
  {
    id: "elegant-interior",
    title: "Elegant Interior",
    categories: ["Web design", "Graphic Design"],
    description: "Featured project site for an interior design studio.",
    image: "/images/work/w6.jpg",
  },
  {
    id: "alfah",
    title: "ALFAH Cashews",
    categories: ["Web design", "Marketing"],
    description: "Export and processing company website for FMCG buyers.",
    image: "/images/work/w7.jpg",
  },
  {
    id: "compact-crm",
    title: "Compact CRM",
    categories: ["Web design", "SEO"],
    description: "Product landing experience for a compact CRM platform.",
    image: "/images/work/w8.jpg",
  },
  {
    id: "vtmr-spices",
    title: "VTMR Spices",
    categories: ["Graphic Design"],
    description: "Brand identity and packaging label concepts for premium cardamom.",
    image: "/images/work/vtmr-spices.jpg",
  },
];
