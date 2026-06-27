"use client";

import { MeshGradient } from "@paper-design/shaders-react";

import { cn } from "@/lib/utils";

/** Marvelbytes brand blues — aligned with primary #4369AD */
const MARVELBYTES_SHADER_COLORS = [
  "hsl(216, 44%, 10%)",
  "hsl(216, 44%, 28%)",
  "hsl(216, 44%, 47%)",
  "hsl(216, 50%, 58%)",
] as const;

export interface BackgroundShaderProps {
  className?: string;
  /** Animation speed; set to 0 for a still frame */
  speed?: number;
  distortion?: number;
  swirl?: number;
  /** Tailwind classes for the readability overlay on top of the shader */
  overlayClassName?: string;
}

export function BackgroundShader({
  className,
  speed = 0.55,
  distortion = 0.75,
  swirl = 0.08,
  overlayClassName = "bg-gradient-to-b from-background/50 via-background/25 to-background",
}: BackgroundShaderProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden
    >
      <MeshGradient
        style={{ height: "100%", width: "100%" }}
        distortion={distortion}
        swirl={swirl}
        offsetX={0}
        offsetY={0}
        scale={1}
        rotation={0}
        speed={speed}
        colors={[...MARVELBYTES_SHADER_COLORS]}
      />
      <div className={cn("absolute inset-0", overlayClassName)} />
    </div>
  );
}

export default BackgroundShader;
