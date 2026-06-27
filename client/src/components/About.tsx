/**
 * About Section - Marvelbytes Business Solutions
 */

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import { ParallaxSection } from "@/components/ui/parallax-section";
import { ABOUT_PARALLAX_IMAGE } from "@/data/hero-images";
import { SectionChapter } from "@/components/ui/section-chapter";
import { StaggerItem, StaggerReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

const stats = [
  { value: 10, suffix: "+", label: "Happy Clients" },
  { value: 100000, suffix: "+", label: "Lines Of Code", duration: 2.5 },
  { value: 100, suffix: "+", label: "Projects Completed" },
];

const values = [
  "Innovation at every step",
  "Client-first approach",
  "Quality and excellence",
  "Transparent communication",
];

export function AboutContent({ className }: { className?: string }) {
  return (
    <div className={cn("mx-auto w-full max-w-5xl", className)}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground md:mb-14 md:text-lg"
      >
        <p className="text-lg font-semibold text-white md:text-xl">
          We have done some great stuff.
        </p>
        <p>
          Our services include ERP Software Development, Custom Software
          Development, Mobile App Development, Web Application Development, and
          Digital Marketing.
        </p>
      </motion.div>

      <StaggerReveal className="mb-14 py-10 md:py-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="flex h-full min-h-[140px] items-center justify-center p-6 md:min-h-[160px] md:p-8">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  duration={stat.duration}
                />
              </div>
            </StaggerItem>
          ))}
        </div>
      </StaggerReveal>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="mb-6 text-2xl font-bold text-white md:text-3xl">
          Our core values
        </h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {values.map((value, index) => (
            <motion.div
              key={value}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
              <span className="font-medium text-white/85">{value}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function About() {
  return (
    <ParallaxSection
      id="about"
      className="bg-surface py-20 md:py-32"
      singleImage={ABOUT_PARALLAX_IMAGE}
      monochrome={false}
    >
      <div className="container">
        <SectionChapter
          title="Powerful storytelling starts here"
          subtitle="Seeking a partner that puts your business first? We're the best choice."
          accentHalf="first"
        />
        <AboutContent />
      </div>
    </ParallaxSection>
  );
}
