/**
 * Aurora Background Component
 * Modern animated aurora effect background with dark mode
 * Covers only a segment of the hero section with vibrant colors and smaller frames
 */

"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative w-full bg-zinc-900 text-white overflow-hidden",
        className
      )}
      {...props}
    >
      {/* Aurora Background Layer - Only covers upper segment */}
      <div className="absolute top-0 left-0 right-0 h-[60%] overflow-hidden" style={{
        maskImage: 'linear-gradient(to right, black 0%, black 50%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to right, black 0%, black 50%, transparent 100%)',
      }}>
        {/* Main Aurora Effect with More Colors */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background: `
              radial-gradient(ellipse at 15% 40%, rgba(139, 92, 246, 0.25) 0%, transparent 45%),
              radial-gradient(ellipse at 85% 25%, rgba(59, 130, 246, 0.25) 0%, transparent 45%),
              radial-gradient(ellipse at 50% 70%, rgba(236, 72, 153, 0.2) 0%, transparent 50%),
              radial-gradient(ellipse at 30% 80%, rgba(34, 197, 94, 0.15) 0%, transparent 45%)
            `,
            animation: "aurora-shift 20s ease-in-out infinite",
          }}
        />

        {/* Animated Aurora Stripes - Smaller Frames with More Colors */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                100deg,
                rgba(139, 92, 246, 0.3) 0%,
                rgba(139, 92, 246, 0.3) 6%,
                transparent 8%,
                transparent 10%,
                rgba(59, 130, 246, 0.3) 12%,
                rgba(59, 130, 246, 0.3) 18%,
                transparent 20%,
                transparent 22%,
                rgba(236, 72, 153, 0.25) 24%,
                rgba(236, 72, 153, 0.25) 30%,
                transparent 32%,
                transparent 34%,
                rgba(34, 197, 94, 0.2) 36%,
                rgba(34, 197, 94, 0.2) 42%,
                transparent 44%,
                transparent 46%,
                rgba(168, 85, 247, 0.25) 48%,
                rgba(168, 85, 247, 0.25) 54%,
                transparent 56%
              )
            `,
            backgroundSize: "200% 100%",
            animation: "aurora-animate 10s linear infinite",
          }}
        />

        {/* Blur Effect */}
        <div
          className="absolute inset-0 opacity-25 blur-3xl"
          style={{
            background: `
              radial-gradient(ellipse at 20% 35%, rgba(139, 92, 246, 0.18) 0%, transparent 55%),
              radial-gradient(ellipse at 80% 30%, rgba(59, 130, 246, 0.18) 0%, transparent 55%),
              radial-gradient(ellipse at 50% 60%, rgba(236, 72, 153, 0.15) 0%, transparent 50%)
            `,
            animation: "aurora-pulse 8s ease-in-out infinite",
          }}
        />

        {/* Radial Gradient Mask - Segment only */}
        {showRadialGradient && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse at 50% 30%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)`,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">{children}</div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes aurora-animate {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }

        @keyframes aurora-shift {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(2px, -2px);
          }
          50% {
            transform: translate(-1px, 1px);
          }
          75% {
            transform: translate(1px, -1px);
          }
        }

        @keyframes aurora-pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
      `}</style>
    </div>
  );
};
