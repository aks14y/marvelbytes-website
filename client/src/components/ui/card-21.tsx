"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

export interface DestinationCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  location: string;
  flag?: string;
  stats: string;
  /** HSL channels without hsl(), e.g. "216 44% 32%" */
  themeColor: string;
}

const DestinationCard = React.forwardRef<HTMLDivElement, DestinationCardProps>(
  (
    {
      className,
      imageUrl,
      location,
      flag,
      stats,
      themeColor,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        style={
          {
            "--theme-color": themeColor,
          } as React.CSSProperties
        }
        className={cn("group h-full w-full", className)}
        {...props}
      >
        <div
          className={cn(
            "relative block h-full w-full overflow-hidden rounded-2xl",
            "transition-all duration-500 ease-out",
            "group-hover:scale-[1.02]",
            "group-hover:shadow-[0_0_60px_-15px_hsl(var(--theme-color)/0.55)]",
          )}
          style={{
            boxShadow: `0 0 40px -15px hsl(var(--theme-color) / 0.45)`,
          }}
        >
          <div className="absolute inset-0 overflow-hidden bg-[#0a0f18]">
            <img
              src={imageUrl}
              alt=""
              aria-hidden
              className="size-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
              loading="lazy"
              decoding="async"
              draggable={false}
            />
          </div>

          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, hsl(var(--theme-color) / 0.92), hsl(var(--theme-color) / 0.55) 35%, transparent 65%)`,
            }}
          />

          <div className="relative flex h-full flex-col justify-end p-5 text-white md:p-6">
            <h3 className="text-xl font-bold tracking-tight md:text-2xl">
              {location}
              {flag ? <span className="ml-1 text-xl">{flag}</span> : null}
            </h3>
            <p className="mt-1.5 text-sm font-medium leading-snug text-white/80">
              {stats}
            </p>
          </div>
        </div>
      </div>
    );
  },
);
DestinationCard.displayName = "DestinationCard";

export { DestinationCard };
