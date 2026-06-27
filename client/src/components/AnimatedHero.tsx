/**
 * Animated Hero — headline, copy, and CTAs
 */

"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { useLocation } from "wouter";
import { LiquidButton } from "@/components/ui/button";
import { BackgroundShader } from "@/components/ui/background-shader";
import Header from "@/components/Header";
import { cn } from "@/lib/utils";
import { HeroFlipHeading } from "@/components/ui/flip-words";
import {
  heroItemVariants,
  heroStaggerVariants,
} from "@/components/ui/cta-section-with-gallery";

const EASE_OUT = [0.22, 1, 0.36, 1] as [number, number, number, number];

const buttonGroupVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const buttonWrapVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

function HeroButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={buttonWrapVariants}
      whileHover={{
        scale: 1.04,
        y: -3,
        transition: { duration: 0.3, ease: EASE_OUT },
      }}
      whileTap={{ scale: 0.97, y: 0 }}
      className={cn("cursor-pointer", className)}
    >
      {children}
    </motion.div>
  );
}

export default function AnimatedHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [, setLocation] = useLocation();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const copyOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.72], [0, -52]);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0.45]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-x-clip bg-background"
    >
      <Header variant="hero" />

      <motion.div
        style={prefersReducedMotion ? undefined : { opacity: bgOpacity }}
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        {prefersReducedMotion ? (
          <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-background to-background" />
        ) : (
          <BackgroundShader speed={0.55} />
        )}
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-screen w-[92%] max-w-3xl items-center justify-center px-0 pb-12 pt-16 sm:w-[88%] md:pb-16 md:pt-20 lg:w-[80%]">
        <motion.div
          style={
            prefersReducedMotion
              ? undefined
              : { opacity: copyOpacity, y: copyY }
          }
          variants={heroStaggerVariants}
          initial="hidden"
          animate="visible"
          className="flex w-full flex-col items-center justify-center text-center"
        >
          <motion.p
            variants={heroItemVariants}
            className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-primary md:mb-6"
          >
            Marvelbytes · Your digital story, engineered
          </motion.p>

          <motion.div variants={heroItemVariants}>
            <HeroFlipHeading />
          </motion.div>

          <motion.p
            variants={heroItemVariants}
            className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/50 md:text-lg"
          >
            Enterprise solutions that empower organizations to scale, innovate,
            and succeed in the digital age.
          </motion.p>

          <motion.div
            variants={buttonGroupVariants}
            className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <HeroButton className="w-full sm:w-auto">
              <LiquidButton
                type="button"
                size="xl"
                surface="dark"
                variant="outline"
                onClick={() => setLocation("/contact")}
                className="group w-full gap-2 text-base text-white transition-[box-shadow,border-color] duration-500 hover:border-primary/50 hover:text-white hover:shadow-[0_8px_30px_rgba(67,105,173,0.35)] sm:w-auto"
              >
                Let&apos;s talk
                <motion.span
                  className="inline-flex"
                  whileHover={{ rotate: [0, -12, 12, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <PhoneCall className="size-5 transition-transform duration-300 group-hover:scale-110" />
                </motion.span>
              </LiquidButton>
            </HeroButton>

            <HeroButton className="w-full sm:w-auto">
              <LiquidButton
                type="button"
                size="xl"
                surface="dark"
                variant="outline"
                onClick={() => setLocation("/solutions")}
                className="group w-full gap-2 text-base text-white/90 transition-[box-shadow,border-color,color] duration-500 hover:border-white/30 hover:text-white hover:shadow-[0_8px_30px_rgba(255,255,255,0.08)] sm:w-auto"
              >
                Explore solutions
                <motion.span
                  className="inline-flex"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.25, ease: EASE_OUT }}
                >
                  <MoveRight className="size-5 transition-transform duration-300 group-hover:scale-110" />
                </motion.span>
              </LiquidButton>
            </HeroButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
