"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

export interface CursorWanderCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  /** Max mouse-tilt in degrees while hovered */
  tiltRange?: number;
  /** Gentle idle sway when not hovered */
  idleSway?: boolean;
  /** Base rotation for idle sway */
  idleRotation?: { x: number; y: number; z: number };
  /** Idle sway amplitude in degrees */
  idleSwayAmount?: number;
}

export function CursorWanderCard({
  children,
  className,
  innerClassName,
  tiltRange = 42,
  idleSway = false,
  idleRotation = { x: 3, y: 5, z: 1 },
  idleSwayAmount = 3.5,
}: CursorWanderCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const animationRef = React.useRef<number>(0);
  const timeRef = React.useRef(0);

  const rotationRef = React.useRef(idleRotation);
  const currentRef = React.useRef({ ...idleRotation });

  const runIdleSway = React.useCallback(() => {
    const card = cardRef.current;
    if (!card || isHovered || !idleSway) return;

    timeRef.current += 0.007;
    const t = timeRef.current;
    const base = rotationRef.current;
    const targetX = base.x + Math.sin(t * 0.75) * idleSwayAmount;
    const targetY = base.y + Math.cos(t * 0.58) * idleSwayAmount;
    const targetZ = base.z + Math.sin(t * 0.45) * (idleSwayAmount * 0.3);

    const lerp = 0.06;
    const current = currentRef.current;
    current.x += (targetX - current.x) * lerp;
    current.y += (targetY - current.y) * lerp;
    current.z += (targetZ - current.z) * lerp;

    card.style.transition = "none";
    card.style.transform = `rotateX(${current.x}deg) rotateY(${current.y}deg) rotateZ(${current.z}deg)`;
    animationRef.current = requestAnimationFrame(runIdleSway);
  }, [idleSway, idleSwayAmount, isHovered]);

  React.useEffect(() => {
    rotationRef.current = idleRotation;
  }, [idleRotation]);

  React.useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    const resetTransform = () => {
      card.style.transform = "rotateX(0deg) rotateY(0deg) rotateZ(0deg)";
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angleX = ((e.clientY - centerY) / (rect.height / 2)) * tiltRange;
      const angleY = (-(e.clientX - centerX) / (rect.width / 2)) * tiltRange;
      const angleZ = Math.min(Math.abs(angleX) + Math.abs(angleY), 16) / 12;

      card.style.transition = "transform 0.22s cubic-bezier(0.22, 1, 0.36, 1)";
      card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) rotateZ(${angleZ}deg)`;
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
      cancelAnimationFrame(animationRef.current);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      if (idleSway) {
        animationRef.current = requestAnimationFrame(runIdleSway);
      } else {
        card.style.transition = "transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)";
        currentRef.current = { ...rotationRef.current };
        resetTransform();
      }
    };

    if (idleSway) {
      animationRef.current = requestAnimationFrame(runIdleSway);
    } else {
      resetTransform();
    }

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationRef.current);
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [idleSway, runIdleSway, tiltRange]);

  return (
    <div
      className={cn("cursor-wander-card overflow-hidden", className)}
      style={{ perspective: "1400px" }}
    >
      <div
        ref={cardRef}
        className={cn(
          "relative w-full will-change-transform",
          innerClassName,
        )}
        style={{ transformStyle: "preserve-3d" }}
      >
        {children}
      </div>
    </div>
  );
}

export default CursorWanderCard;
