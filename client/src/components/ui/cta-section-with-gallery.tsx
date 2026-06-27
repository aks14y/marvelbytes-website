"use client";

import * as React from "react";
import {
  motion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";

import { cn } from "@/lib/utils";

const EASE_OUT = [0.22, 1, 0.36, 1] as [number, number, number, number];

const SPRING_TRANSITION_CONFIG = {
  type: "spring" as const,
  stiffness: 120,
  damping: 18,
  mass: 0.8,
};

export const heroStaggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.12,
    },
  },
};

export const heroItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 32,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: EASE_OUT,
    },
  },
};

interface GalleryGridCellProps extends HTMLMotionProps<"div"> {
  index: number;
}

const areaClasses = [
  "col-start-2 col-end-3 row-start-1 row-end-3",
  "col-start-1 col-end-2 row-start-2 row-end-4",
  "col-start-1 col-end-2 row-start-4 row-end-6",
  "col-start-2 col-end-3 row-start-3 row-end-5",
];

const galleryCellVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.88,
    y: 40,
    rotate: -2,
  },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    rotate: 0,
    transition: {
      duration: 0.8,
      delay: 0.35 + index * 0.14,
      ease: EASE_OUT,
    },
  }),
};

export const ContainerStagger = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ transition, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        staggerChildren: transition?.staggerChildren ?? 0.2,
        delayChildren: transition?.delayChildren ?? 0.2,
        duration: 0.3,
        ...transition,
      }}
      {...props}
    />
  );
});
ContainerStagger.displayName = "ContainerStagger";

export const ContainerAnimated = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ transition, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      variants={heroItemVariants}
      transition={{
        ...SPRING_TRANSITION_CONFIG,
        duration: 0.3,
        ...transition,
      }}
      {...props}
    />
  );
});
ContainerAnimated.displayName = "ContainerAnimated";

export const GalleryGrid = React.forwardRef<
  HTMLDivElement,
  HTMLMotionProps<"div">
>(({ className, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      className={cn(
        "grid grid-cols-2 grid-rows-[50px_150px_50px_150px_50px] gap-4",
        className,
      )}
      {...props}
    />
  );
});
GalleryGrid.displayName = "GalleryGrid";

export const GalleryGridCell = React.forwardRef<
  HTMLDivElement,
  GalleryGridCellProps
>(({ className, transition, index, children, ...props }, ref) => {
  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={galleryCellVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.03,
        y: -4,
        transition: { duration: 0.35, ease: EASE_OUT },
      }}
      className={cn(
        "group relative cursor-pointer overflow-hidden rounded-xl border border-white/10 shadow-xl shadow-black/40",
        "transition-[border-color,box-shadow] duration-500 ease-out",
        "hover:border-primary/45 hover:shadow-[0_20px_50px_rgba(67,105,173,0.25)]",
        areaClasses[index],
        className,
      )}
      {...props}
    >
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-t from-[#030303]/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />
      <motion.div
        className="size-full"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
});
GalleryGridCell.displayName = "GalleryGridCell";
