export const CONTACT = {
  email: "info@marvelbytes.com",
  phones: [
    {
      label: "UAE",
      title: "Call us (UAE)",
      description: "Speak with our team during UAE business hours.",
      display: "+971 56 807 7231",
      href: "tel:+971568077231",
    },
    {
      label: "India",
      title: "Call us (India)",
      description: "Reach our India office for local support.",
      display: "+91 9400 385763",
      href: "tel:+919400385763",
    },
  ],
  location: {
    label: "Our Location",
    title: "Visit our office",
    description: "Our teams are based in the UAE and India.",
    lines: ["Opening soon in Dubai", "Kerala, India"],
  },
  emailSupport: {
    title: "Email support",
    description: "Our team can respond within one business day.",
  },
  hours: "Mon–Fri, 9:00 AM – 6:00 PM IST",
} as const;

export const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/marvelbytes/?originalSubdomain=in",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/marvelbytes_business_solutions/",
  },
] as const;
