"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "framer-motion";
import { cn } from "@/lib/utils";

const EASE_OUT = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface FlipWordsProps {
  words: readonly string[];
  className?: string;
  /** ms between word changes */
  interval?: number;
}

export function FlipWords({
  words,
  className,
  interval = 2800,
}: FlipWordsProps) {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);

  const longestWord = useMemo(
    () => words.reduce((a, b) => (a.length >= b.length ? a : b), words[0] ?? ""),
    [words],
  );

  useEffect(() => {
    if (prefersReducedMotion || words.length <= 1) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, interval);

    return () => window.clearInterval(id);
  }, [words, interval, prefersReducedMotion]);

  const activeWord = words[index] ?? words[0];

  return (
    <span
      className={cn(
        "relative inline-block align-bottom text-primary",
        className,
      )}
      style={{ perspective: "600px" }}
    >
      <span className="invisible whitespace-nowrap" aria-hidden>
        {longestWord}
      </span>

      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={activeWord}
          className="absolute bottom-0 left-0 inline-block whitespace-nowrap"
          initial={{
            opacity: 0,
            rotateX: 75,
            y: "40%",
            filter: "blur(4px)",
          }}
          animate={{
            opacity: 1,
            rotateX: 0,
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            rotateX: -75,
            y: "-40%",
            filter: "blur(4px)",
          }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          style={{ transformOrigin: "50% 100%" }}
        >
          {activeWord}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

interface HeroFlipHeadingProps {
  className?: string;
  flipWords?: readonly string[];
}

const DEFAULT_FLIP_WORDS = [
  "obsessions.",
  "experiences.",
  "platforms.",
  "solutions.",
] as const;

export function HeroFlipHeading({
  className,
  flipWords = DEFAULT_FLIP_WORDS,
}: HeroFlipHeadingProps) {
  return (
    <h1
      className={cn(
        "text-4xl font-bold normal-case leading-[1.08] tracking-tight sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl",
        className,
      )}
    >
      <span className="text-white">We don&apos;t just build software, we craft </span>
      <FlipWords words={flipWords} />
    </h1>
  );
}
