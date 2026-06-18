/**
 * Footer Component - Marvelbytes Business Solutions
 * 
 * Design System: 21st Dev Refined
 * - Asymmetric column layout
 * - Brand information and links
 * - Contact details
 * - Social links
 */

import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663760897792/GjwaD8BUpahCMzSYSk6nPk/marvelbytes-logo-hS6kT2roKdzRe62nTG7hwm.webp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Solutions: [
      { label: "Custom Development", href: "#" },
      { label: "Cloud Infrastructure", href: "#" },
      { label: "Security & Compliance", href: "#" },
    ],
    Company: [
      { label: "About Us", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
    Resources: [
      { label: "Documentation", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "Support", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={LOGO_URL}
                alt="Marvelbytes"
                className="h-8 w-8"
              />
              <span className="font-bold text-foreground">Marvelbytes</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Enterprise solutions crafted for clarity and innovation.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4 text-sm">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:hello@marvelbytes.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  hello@marvelbytes.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  San Francisco, CA
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Marvelbytes Business Solutions. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-muted flex items-center justify-center text-foreground hover:text-primary transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
