"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface FeatureWallCardData {
  image: string;
  description: string;
  icon: LucideIcon;
}

export interface Speaker {
  name: string;
  role: string;
  /** Image URL. Omit when using `textContent` or `featureCard`. */
  src?: string;
  /** Rich scroll-wall feature card */
  featureCard?: FeatureWallCardData;
  /** Renders a typography panel instead of a portrait image. */
  textContent?: string;
  /** Optional subline under `textContent`. */
  textSubline?: string;
  /** Visual style for text tiles. Default `filled`. */
  textVariant?: "filled" | "brand";
}

export interface ScrollPortraitWallProps {
  title?: React.ReactNode;
  date?: React.ReactNode;
  hint?: React.ReactNode;
  speakers?: Speaker[];
  columns?: number;
  showCaptions?: boolean;
  /** Override default date/subtitle styles under the sticky title */
  dateClassName?: string;
  className?: string;
}

function buildLayout(count: number, cols: number): number[][] {
  const rows: number[][] = [];
  let i = 0;
  let r = 0;
  while (i < count) {
    const row = new Array<number>(cols).fill(-1);
    const a = (r * 2 + (r % 2)) % cols;
    row[a] = i++;
    if (r % 3 === 0 && i < count) {
      let b = (a + 2) % cols;
      if (b === a) b = (a + 1) % cols;
      row[b] = i++;
    }
    rows.push(row);
    r++;
  }
  return rows;
}

function useResponsiveColumns(desired: number): number {
  const [cols, setCols] = React.useState(desired);

  React.useEffect(() => {
    const sm = window.matchMedia("(min-width: 640px)");
    const lg = window.matchMedia("(min-width: 1024px)");
    const update = () => {
      if (lg.matches) setCols(desired);
      else if (sm.matches) setCols(Math.min(desired, 3));
      else setCols(Math.min(desired, 2));
    };
    update();
    sm.addEventListener("change", update);
    lg.addEventListener("change", update);
    return () => {
      sm.removeEventListener("change", update);
      lg.removeEventListener("change", update);
    };
  }, [desired]);

  return cols;
}

function FeatureWallCard({
  title,
  image,
  description,
  icon: Icon,
}: {
  title: string;
  image: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <article
      className={cn(
        "group flex h-full w-full flex-col overflow-hidden rounded-2xl",
        "border border-white/[0.08] bg-surface-elevated",
        "transition-[border-color,box-shadow,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:border-primary/25 hover:shadow-[0_16px_40px_rgba(67,105,173,0.12)]",
      )}
    >
      <div className="relative min-h-0 flex-[1.15] overflow-hidden bg-surface-elevated">
        <div className="absolute inset-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform group-hover:scale-[1.04]">
          <img
            src={image}
            alt=""
            aria-hidden
            className="size-full object-cover"
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 flex size-9 items-center justify-center rounded-lg border border-white/10 bg-background/80 text-primary backdrop-blur-sm transition-colors duration-300 group-hover:border-primary/25 sm:bottom-4 sm:left-4 sm:size-10">
          <Icon className="size-4 sm:size-5" strokeWidth={1.75} aria-hidden />
        </div>
      </div>
      <div className="flex flex-1 flex-col bg-surface-elevated p-3 sm:p-4 md:p-5">
        <h3 className="text-sm font-semibold leading-snug text-white sm:text-base md:text-lg">
          {title}
        </h3>
        <p className="mt-1.5 line-clamp-4 text-[10px] leading-relaxed text-muted-foreground sm:mt-2 sm:text-xs md:text-sm">
          {description}
        </p>
      </div>
    </article>
  );
}

export function ScrollPortraitWall({
  title = "Speakers",
  date,
  hint,
  speakers = [],
  columns = 4,
  showCaptions = true,
  dateClassName,
  className,
}: ScrollPortraitWallProps) {
  const root = React.useRef<HTMLElement | null>(null);
  const hintRef = React.useRef<HTMLDivElement | null>(null);
  const cols = useResponsiveColumns(Math.max(1, columns));
  const layout = React.useMemo(
    () => buildLayout(speakers.length, cols),
    [speakers.length, cols]
  );
  const showHint = hint != null && hint !== false && hint !== "";

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const items = gsap.utils.toArray<HTMLElement>(".spw-item");

      if (reduce) {
        gsap.set(items, { scale: 1 });
        return;
      }

      if (showHint && hintRef.current) {
        gsap.to(hintRef.current, {
          autoAlpha: 0,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=40%",
            scrub: true,
          },
        });
      }

      items.forEach((el) => {
        gsap
          .timeline({
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.85,
            },
          })
          .fromTo(
            el,
            { scale: 0, opacity: 0.4 },
            { scale: 1, opacity: 1, ease: "power2.out" },
          )
          .to(el, { scale: 0, opacity: 0.5, ease: "power2.in" });
      });
    },
    { scope: root, dependencies: [cols, showHint, speakers.length], revertOnUpdate: true }
  );

  return (
    <section
      ref={root}
      aria-label={typeof title === "string" ? title : undefined}
      className={cn("relative w-full overflow-x-clip bg-background text-foreground", className)}
    >
      {showHint ? (
        <div
          ref={hintRef}
          className="pointer-events-none absolute left-1/2 top-[60vh] grid -translate-x-1/2 content-start justify-items-center gap-6 text-center"
        >
          <span className="relative max-w-[12ch] text-xs uppercase leading-tight text-muted-foreground after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-transparent after:to-muted-foreground/40 after:content-['']">
            {hint}
          </span>
        </div>
      ) : null}

      <div className="pointer-events-none sticky top-1/2 z-20 w-full max-w-full -translate-y-1/2 overflow-hidden px-4 text-center text-white mix-blend-exclusion">
        <h2 className="text-5xl font-semibold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
          {title}
        </h2>
        {date ? (
          <p
            className={cn(
              "mt-1 text-xs uppercase tracking-wide text-white/60 sm:text-sm",
              dateClassName,
            )}
          >
            {date}
          </p>
        ) : null}
      </div>

      <div className="relative z-0 mb-[50vh] mt-[50vh] overflow-x-clip">
        {layout.map((row, ri) => (
          <div key={ri} className="flex w-full">
            {row.map((idx, ci) => {
              if (idx === -1) return <div key={ci} className="aspect-square flex-1" />;

              const s = speakers[idx];
              const origin = ci < cols / 2 ? "right bottom" : "left bottom";
              const isText = Boolean(s.textContent);
              const isFeatureCard = Boolean(s.featureCard);

              return (
                <div key={ci} className="aspect-square flex-1 p-1 sm:p-1.5">
                  <div
                    className="spw-item relative h-full w-full"
                    style={{ transformOrigin: origin, transform: "scale(0)" }}
                  >
                    {isFeatureCard && s.featureCard ? (
                      <FeatureWallCard
                        title={s.name}
                        image={s.featureCard.image}
                        description={s.featureCard.description}
                        icon={s.featureCard.icon}
                      />
                    ) : isText ? (
                      <div
                        className={cn(
                          "flex h-full w-full flex-col items-center justify-center p-4 text-center sm:p-6",
                          s.textVariant === "brand"
                            ? "border-l-[3px] border-l-primary border border-white/10 bg-[#030303] shadow-[inset_0_0_60px_rgba(67,105,173,0.08)]"
                            : "border border-white/10 bg-primary/20",
                        )}
                      >
                        {s.textVariant === "brand" && (
                          <span className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
                            {s.name}
                          </span>
                        )}
                        <p
                          className={cn(
                            "font-bold normal-case leading-snug tracking-tight text-white",
                            s.textVariant === "brand"
                              ? "text-base sm:text-lg md:text-xl"
                              : "text-sm sm:text-base md:text-lg",
                          )}
                        >
                          {s.textContent}
                        </p>
                        {s.textSubline ? (
                          <p className="mt-2 text-[10px] uppercase tracking-wide text-white/45 sm:text-xs">
                            {s.textSubline}
                          </p>
                        ) : null}
                      </div>
                    ) : (
                      <img
                        src={s.src}
                        alt={s.name}
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                        className="h-full w-full object-cover saturate-[0.82] brightness-[0.9] contrast-[0.96] transition-transform duration-500 ease-in-out hover:scale-95"
                      />
                    )}
                    {showCaptions && (
                      <div className="absolute -bottom-2 left-0 flex w-full translate-y-full justify-between gap-2 text-[11px] uppercase leading-tight text-muted-foreground sm:text-sm">
                        <span className="truncate">{s.name}</span>
                        <span className="shrink-0">({s.role})</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
}

export default ScrollPortraitWall;
