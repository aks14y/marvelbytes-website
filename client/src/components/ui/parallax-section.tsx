"use client";

import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { HERO_PARALLAX_IMAGES } from "@/data/hero-images";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ParallaxLayerImages {
  back: string;
  mid: string;
  front: string;
}

export interface ParallaxSectionProps
  extends React.ComponentPropsWithoutRef<"section"> {
  children: React.ReactNode;
  layerImages?: ParallaxLayerImages;
  /** Single full-bleed image with scroll parallax (e.g. About section) */
  singleImage?: string;
  monochrome?: boolean;
}

const DEFAULT_LAYERS: ParallaxLayerImages = {
  back: HERO_PARALLAX_IMAGES.back,
  mid: HERO_PARALLAX_IMAGES.mid,
  front: HERO_PARALLAX_IMAGES.front,
};

export function ParallaxSection({
  children,
  className,
  layerImages = DEFAULT_LAYERS,
  singleImage,
  monochrome = true,
  ...sectionProps
}: ParallaxSectionProps) {
  const rootRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const layersEl = root.querySelector("[data-parallax-layers]");
    if (!layersEl || reduce) return;

    const layers = singleImage
      ? [{ layer: "1", yPercent: 28 }]
      : [
          { layer: "1", yPercent: 55 },
          { layer: "2", yPercent: 35 },
          { layer: "4", yPercent: 15 },
        ];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.25,
      },
    });

    layers.forEach((layerObj, idx) => {
      const targets = layersEl.querySelectorAll<HTMLElement>(
        `img[data-parallax-layer="${layerObj.layer}"]`,
      );
      if (targets.length === 0) return;

      tl.fromTo(
        targets,
        { yPercent: -8 },
        { yPercent: layerObj.yPercent, ease: "none" },
        idx === 0 ? undefined : "<",
      );
    });

    const refresh = () => ScrollTrigger.refresh();
    layersEl.querySelectorAll("img").forEach((img) => {
      if (img.complete) refresh();
      else img.addEventListener("load", refresh, { once: true });
    });
    requestAnimationFrame(refresh);

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [layerImages, singleImage]);

  return (
    <section
      ref={rootRef}
      {...sectionProps}
      className={cn(
        "parallax-section relative overflow-hidden",
        monochrome && "parallax--monochrome",
        singleImage && "parallax--single",
        className,
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden
      >
        <div data-parallax-layers className="parallax-section__layers">
          {singleImage ? (
            <img
              src={singleImage}
              alt=""
              data-parallax-layer="1"
              className="parallax-section__layer parallax-section__layer--single"
              loading="eager"
              fetchPriority="low"
              decoding="async"
              draggable={false}
            />
          ) : (
            <>
              <img
                src={layerImages.back}
                alt=""
                data-parallax-layer="1"
                className="parallax-section__layer parallax-section__layer--back"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
              <img
                src={layerImages.mid}
                alt=""
                data-parallax-layer="2"
                className="parallax-section__layer parallax-section__layer--mid"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
              <img
                src={layerImages.front}
                alt=""
                data-parallax-layer="4"
                className="parallax-section__layer parallax-section__layer--front"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            </>
          )}
          <div className="parallax-section__overlay" />
        </div>
      </div>

      <div className="relative z-10">{children}</div>
    </section>
  );
}

export default ParallaxSection;
