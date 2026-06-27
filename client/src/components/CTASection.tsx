/**
 * CTA / Contact Section — copy and action buttons
 */

"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { SectionChapter } from "@/components/ui/section-chapter";

export default function CTASection() {
  const [, setLocation] = useLocation();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-surface-elevated py-20 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/3 h-[50vh] w-[50vh] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute -right-1/4 bottom-1/4 h-[45vh] w-[45vh] rounded-full bg-[#6b21a8]/25 blur-[130px]" />
      </div>

      <div className="container relative z-10">
        <SectionChapter
          title="Ready to collaborate?"
          subtitle="Let's create something epic together."
          align="center"
          accentHalf="first"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-10 flex max-w-xl flex-col items-center text-center md:mt-14"
        >
          <p className="text-sm leading-relaxed text-white/50 md:text-base">
            Let&apos;s discuss how Marvelbytes can help you achieve your
            business goals with cutting-edge technology and strategic solutions.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button
              type="button"
              onClick={() => setLocation("/contact")}
              className="h-11 gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground hover:bg-primary/90 md:h-12 md:px-8 md:text-base"
            >
              Contact us
              <ArrowRight className="size-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setLocation("/solutions")}
              className="h-11 gap-2 rounded-lg border-white/20 bg-transparent px-6 text-sm font-semibold text-white hover:bg-white/5 hover:text-white md:h-12 md:px-8 md:text-base"
            >
              View solutions
              <ArrowRight className="size-4" />
            </Button>
          </div>

          <p className="mt-8 text-xs text-white/45 md:text-sm">
            We&apos;ll get back to you within one business day.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
