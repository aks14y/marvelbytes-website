/**
 * Animated Counter Component - Marvelbytes Business Solutions
 * 
 * Displays animated number counters with blur effect
 * Triggered on scroll into view
 */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  label: string;
  suffix?: string;
  duration?: number;
  compact?: boolean;
}

export default function AnimatedCounter({
  value,
  label,
  suffix = "",
  duration = 2,
  compact,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setDisplayValue(Math.floor(value * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, value, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <motion.div
        className={cn(
          "font-heading font-bold text-primary",
          compact ? "mb-1 text-2xl md:text-3xl" : "mb-2 text-4xl md:text-5xl",
        )}
        animate={{ filter: isInView ? "blur(0px)" : "blur(4px)" }}
        transition={{ duration: 0.3 }}
      >
        {displayValue.toLocaleString()}
        {suffix}
      </motion.div>
      <p
        className={cn(
          "text-white/60",
          compact ? "text-xs" : "text-sm md:text-base",
        )}
      >
        {label}
      </p>
    </motion.div>
  );
}
