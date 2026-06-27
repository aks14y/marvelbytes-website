/**
 * Split feature section — scroll-stacking cards
 */

"use client";

import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionChapter } from "@/components/ui/section-chapter";
import {
  StackingCards,
  type StackingCardItem,
} from "@/components/ui/stacking-card";
import { SPLIT_FEATURE_IMAGES } from "@/data/hero-images";
import { BRAND } from "@/lib/brand";

const stackItems: StackingCardItem[] = [
  {
    title: "Ship faster",
    description:
      "Reduce time-to-market with proven delivery playbooks, agile sprints, and teams that stay aligned from kickoff to launch.",
    image: SPLIT_FEATURE_IMAGES.shipFaster,
    color: "#14141a",
    gradient: `linear-gradient(152deg, #0c0c10 0%, #1a2236 42%, ${BRAND.primaryDark} 100%)`,
    href: "/solutions",
    linkLabel: "Explore solutions",
  },
  {
    title: "Scale securely",
    description:
      "Enterprise-grade architecture designed for reliability, compliance, and growth — without slowing your roadmap.",
    image: SPLIT_FEATURE_IMAGES.scaleSecurely,
    color: "#14141a",
    gradient: `linear-gradient(152deg, #10141c 0%, #1c2840 46%, ${BRAND.primary} 100%)`,
    href: "/about",
    linkLabel: "About Marvelbytes",
  },
  {
    title: "Integrate cleanly",
    description:
      "Connect your existing stack and modernize legacy systems with integrations that are built to last.",
    image: SPLIT_FEATURE_IMAGES.integrateCleanly,
    color: "#1c1c24",
    gradient: `linear-gradient(152deg, #12151c 0%, #232a38 48%, ${BRAND.primaryLight} 100%)`,
    href: "/contact",
    linkLabel: "Contact us",
  },
];

export default function SplitFeatureSection() {
  return (
    <StackingCards
      className="py-10 md:py-16"
      intro={
        <div className="container px-4 pb-6 md:pb-10">
          <SectionChapter
            title="Tired of software that stalls?"
            subtitle="Join teams that ship with clarity. Build platforms delivered in weeks — not quarters."
            align="center"
            accentHalf="second"
          />
          <div className="mt-6 flex justify-center md:mt-8">
            <Button
              asChild
              className="h-12 rounded-full bg-primary px-7 text-base font-semibold text-primary-foreground hover:bg-primary/90"
            >
              <Link href="/contact" className="inline-flex items-center gap-2">
                Contact us
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      }
      items={stackItems}
    />
  );
}
