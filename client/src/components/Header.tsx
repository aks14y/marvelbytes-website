/**
 * Header Component - Marvelbytes Business Solutions
 */

"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { BRAND } from "@/lib/brand";
import { scrollToHash } from "@/lib/smooth-scroll";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
];

function NavLink({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick?: () => void;
}) {
  const [location] = useLocation();
  const isActive =
    location === href || (href !== "/" && location.startsWith(`${href}/`));

  if (href.startsWith("#")) {
    return (
      <a
        href={href}
        onClick={(event) => {
          event.preventDefault();
          scrollToHash(href);
          onClick?.();
        }}
        className={cn(
          "cursor-pointer px-2 py-1 text-xs font-semibold uppercase tracking-wider text-white/80",
          "transition-colors hover:text-white",
        )}
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "cursor-pointer px-2 py-1 text-xs font-semibold uppercase tracking-wider transition-colors",
        isActive ? "text-white" : "text-white/80 hover:text-white",
      )}
    >
      {label}
    </Link>
  );
}

export type HeaderVariant = "standalone" | "hero";

export interface HeaderProps {
  /** `hero` — transparent over hero shader, solid on scroll. `standalone` — default site pages. */
  variant?: HeaderVariant;
}

export default function Header({ variant = "standalone" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (variant !== "hero") return;

    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  const showSolidBar =
    variant === "standalone" || (variant === "hero" && scrolled) || mobileMenuOpen;

  return (
    <header
      className={cn(
        "left-0 right-0 z-50 w-full transition-[background-color,backdrop-filter] duration-300",
        variant === "hero" ? "fixed top-0" : "fixed top-0",
        showSolidBar ? "bg-background/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-[90%] items-center justify-between md:h-20">
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" aria-label="Marvelbytes home" className="cursor-pointer">
            <img
              src={BRAND.logoSrc}
              alt="MarvelBytes Business Solutions"
              className="h-9 w-auto md:h-11"
            />
          </Link>
        </motion.div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden items-center gap-6 md:flex"
        >
          {navLinks.map((link) => (
            <NavLink key={link.label} href={link.href} label={link.label} />
          ))}
          <Button
            asChild
            className="ml-3 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </motion.nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="cursor-pointer rounded-lg p-2 transition-colors hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5 text-white" />
          ) : (
            <Menu className="h-5 w-5 text-white" />
          )}
        </button>
      </div>

      <motion.nav
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          height: mobileMenuOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden md:hidden"
      >
        <div className="mx-auto flex w-[90%] flex-col gap-3 border-t border-white/10 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              href={link.href}
              label={link.label}
              onClick={() => setMobileMenuOpen(false)}
            />
          ))}
          <Button
            asChild
            className="mt-2 w-full rounded-full bg-primary text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
          </Button>
        </div>
      </motion.nav>
    </header>
  );
}
