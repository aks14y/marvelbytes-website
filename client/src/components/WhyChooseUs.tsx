/**
 * Why Choose Us — scroll portrait wall with feature cards
 */

"use client";

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Rocket, ShieldCheck, Users, type LucideIcon } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import {
  ScrollPortraitWall,
  type Speaker,
} from "@/components/ui/scroll-portrait-wall";
import { SplitSectionTitle } from "@/components/ui/section-chapter";
import { WHY_CHOOSE_US_IMAGES } from "@/data/hero-images";

const features: {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Modern technology",
    description:
      "We leverage modern frameworks, cloud platforms, and industry best practices to build future-ready applications.",
    image: WHY_CHOOSE_US_IMAGES.modernTech,
    icon: Cpu,
  },
  {
    title: "Client-centric approach",
    description:
      "Every solution is tailored to your business goals through transparent communication and close collaboration.",
    image: WHY_CHOOSE_US_IMAGES.clientCentric,
    icon: Users,
  },
  {
    title: "Quality & reliability",
    description:
      "Our focus on clean architecture, testing, and maintainability ensures software that performs reliably over time.",
    image: WHY_CHOOSE_US_IMAGES.quality,
    icon: ShieldCheck,
  },
  {
    title: "Agile delivery",
    description:
      "We follow an iterative development process that delivers value quickly while adapting to changing business needs.",
    image: WHY_CHOOSE_US_IMAGES.agile,
    icon: Rocket,
  },
];

const wallItems: Speaker[] = features.map((feature) => ({
  name: feature.title,
  role: "",
  featureCard: {
    image: feature.image,
    description: feature.description,
    icon: feature.icon,
  },
}));

export function WhyChooseUs() {
  return (
    <>
      <ScrollPortraitWall
        title={
          <SplitSectionTitle
            title="Why choose us"
            accentHalf="first"
            className="text-5xl font-semibold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl"
          />
        }
        date="We build scalable, reliable, and user-focused software solutions that help businesses innovate, grow, and succeed in the digital world."
        dateClassName="mx-auto mt-4 max-w-2xl px-4 normal-case text-sm leading-relaxed tracking-normal text-white/55 mix-blend-normal sm:text-base md:mt-6"
        speakers={wallItems}
        columns={4}
        showCaptions={false}
        className="border-y border-border bg-surface"
      />

      <section className="bg-surface pb-20 pt-4 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="container px-4 text-center"
        >
          <h3 className="text-xl font-semibold text-white md:text-2xl">
            Ready to build your next digital solution?
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Let&apos;s discuss how we can turn your ideas into scalable software.
          </p>
          <Button
            asChild
            className="mt-7 h-12 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <Link href="/contact" className="inline-flex items-center gap-2">
              Contact us
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </motion.div>
      </section>
    </>
  );
}
