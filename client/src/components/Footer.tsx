/**
 * Footer Component - Marvelbytes Business Solutions
 */

import { Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import { BRAND } from "@/lib/brand";
import { CONTACT, SOCIAL_LINKS } from "@/data/contact";

const socialIcons = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
} as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Solutions: [
      { label: "Custom Development", href: "/solutions" },
      { label: "Cloud Infrastructure", href: "/solutions" },
      { label: "Mobile Apps", href: "/solutions" },
    ],
    Company: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Home", href: "/" },
    ],
    Resources: [
      { label: "FAQ", href: "/#questions" },
      { label: "Services", href: "/solutions" },
      { label: "Contact", href: "/contact" },
    ],
  };

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src={BRAND.logoSrc}
                alt="MarvelBytes Business Solutions"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Enterprise solutions crafted for clarity and innovation.
            </p>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4 text-sm">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") && !link.href.includes("#") ? (
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">
              {CONTACT.location.label}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  {CONTACT.location.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </li>
              {CONTACT.phones.map((phone) => (
                <li key={phone.href} className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <a
                    href={phone.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Marvelbytes Business Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map(({ label, href }) => {
              const Icon = socialIcons[label as keyof typeof socialIcons];
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Marvelbytes on ${label}`}
                  className="w-10 h-10 rounded-lg bg-secondary hover:bg-muted flex items-center justify-center text-foreground hover:text-primary transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
