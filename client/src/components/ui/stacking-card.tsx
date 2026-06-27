"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";

export interface StackingCardItem {
  title: string;
  description: string;
  image: string;
  /** Solid fallback background */
  color: string;
  /** Optional CSS gradient layered over the base color */
  gradient?: string;
  /** Image on the right by default; set true to flip content/image */
  reversed?: boolean;
  href?: string;
  linkLabel?: string;
}

export interface StackingCardProps {
  i: number;
  item: StackingCardItem;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export function StackingCard({
  i,
  item,
  progress,
  range,
  targetScale,
}: StackingCardProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.35, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  const reversed = item.reversed ?? i % 2 === 1;

  return (
    <div
      ref={container}
      className="sticky top-16 flex h-[82vh] min-h-[32rem] items-center justify-center md:top-20"
    >
      <motion.article
        style={{
          backgroundColor: item.color,
          backgroundImage: item.gradient,
          scale,
          top: `calc(-4vh + ${i * 20}px)`,
        }}
        className="relative -top-[20%] flex h-[min(28rem,72vh)] w-[min(92%,56rem)] origin-top flex-col overflow-hidden rounded-2xl border border-white/10 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.45)] md:rounded-3xl md:p-9 lg:p-10"
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0",
            reversed
              ? "bg-[radial-gradient(ellipse_80%_60%_at_100%_0%,rgba(67,105,173,0.22),transparent_55%)]"
              : "bg-[radial-gradient(ellipse_80%_60%_at_0%_0%,rgba(67,105,173,0.22),transparent_55%)]",
          )}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-black/20"
          aria-hidden
        />

        <h3
          className={cn(
            "relative text-xl font-semibold text-white md:text-2xl",
            reversed ? "text-center md:text-right" : "text-center md:text-left",
          )}
        >
          {item.title}
        </h3>

        <div
          className={cn(
            "relative mt-5 flex h-full flex-col gap-6 md:flex-row md:gap-10",
            reversed && "flex-col-reverse md:flex-row-reverse",
          )}
        >
          <div
            className={cn(
              "relative top-0 flex flex-col justify-center md:top-[8%] md:w-[42%]",
              reversed ? "md:items-end md:text-right" : "md:items-start md:text-left",
            )}
          >
            <p className="text-sm leading-relaxed text-white/75 md:text-base">
              {item.description}
            </p>
            {item.href ? (
              item.href.startsWith("/") ? (
                <Link
                  href={item.href}
                  className={cn(
                    "mt-4 inline-flex w-fit items-center gap-2 text-sm font-medium text-white underline-offset-4 transition-colors hover:text-primary hover:underline",
                    reversed && "md:flex-row-reverse",
                  )}
                >
                  {item.linkLabel ?? "Learn more"}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              ) : (
                <a
                  href={item.href}
                  className={cn(
                    "mt-4 inline-flex w-fit items-center gap-2 text-sm font-medium text-white underline-offset-4 transition-colors hover:text-primary hover:underline",
                    reversed && "md:flex-row-reverse",
                  )}
                >
                  {item.linkLabel ?? "Learn more"}
                  <ArrowRight className="size-4" aria-hidden />
                </a>
              )
            ) : null}
          </div>

          <div className="relative h-48 flex-1 overflow-hidden rounded-xl md:h-auto md:min-h-[14rem]">
            <motion.div className="size-full" style={{ scale: imageScale }}>
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 size-full object-cover"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </motion.div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export interface StackingCardsProps {
  items: StackingCardItem[];
  className?: string;
  intro?: ReactNode;
}

export function StackingCards({ items, className, intro }: StackingCardsProps) {
  const container = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className={cn("relative bg-background", className)}>
      {intro}
      <div className="relative">
        {items.map((item, i) => {
          const targetScale = 1 - (items.length - i) * 0.05;
          const rangeStart = items.length > 1 ? i * 0.25 : 0;

          return (
            <StackingCard
              key={item.title}
              i={i}
              item={item}
              progress={scrollYProgress}
              range={[rangeStart, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </section>
  );
}

export default StackingCards;
