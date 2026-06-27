"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { HERO_IMAGES } from "@/data/hero-images";

const cards = [
  {
    id: 1,
    label: "Enterprise",
    image: HERO_IMAGES.enterprise,
    className: "left-[0%] top-[8%] -rotate-6",
    parallax: 35,
    delay: 0.3,
  },
  {
    id: 2,
    label: "Innovation",
    image: HERO_IMAGES.innovation,
    className: "left-[28%] top-0 z-10 rotate-3",
    parallax: 55,
    delay: 0.45,
  },
  {
    id: 3,
    label: "Growth",
    image: HERO_IMAGES.growth,
    className: "left-[52%] top-[18%] -rotate-2",
    parallax: 45,
    delay: 0.6,
  },
];

export function StoryCards({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  return (
    <div
      ref={ref}
      className={cn(
        "relative mx-auto h-[340px] w-full max-w-sm sm:h-[400px] sm:max-w-md md:h-[440px] md:max-w-lg",
        className
      )}
    >
      {cards.map((card) => (
        <StoryCardItem key={card.id} card={card} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  );
}

function StoryCardItem({
  card,
  scrollYProgress,
}: {
  card: (typeof cards)[number];
  scrollYProgress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const y = useTransform(scrollYProgress, [0, 1], [0, card.parallax]);

  return (
    <motion.div
      style={{ y }}
      className={cn("absolute w-[42%] min-w-[120px] max-w-[190px]", card.className)}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay: card.delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="overflow-hidden rounded-[1.5rem] border border-white/15 bg-[#0a0a0a] shadow-2xl shadow-black/60">
        <div className="flex items-center gap-2 border-b border-white/10 px-2.5 py-2">
          <div className="h-5 w-5 shrink-0 rounded-full bg-primary" />
          <span className="truncate text-[9px] font-bold uppercase tracking-wider text-white/75 sm:text-[10px]">
            {card.label}
          </span>
        </div>
        <div className="aspect-[3/4] overflow-hidden">
          <img src={card.image} alt="" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </div>
    </motion.div>
  );
}
