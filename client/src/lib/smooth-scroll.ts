import type Lenis from "@studio-freight/lenis";

let lenis: Lenis | null = null;

export const SCROLL_HEADER_OFFSET = -88;

export const scrollEasing = (t: number) =>
  Math.min(1, 1.001 - Math.pow(2, -10 * t));

export function registerLenis(instance: Lenis | null) {
  lenis = instance;
}

export function getLenis() {
  return lenis;
}

export function scrollToHash(hash: string, offset = SCROLL_HEADER_OFFSET) {
  const target = hash.startsWith("#") ? hash : `#${hash}`;

  if (lenis) {
    lenis.scrollTo(target, {
      offset,
      duration: 1.6,
      easing: scrollEasing,
    });
    return;
  }

  const el = document.querySelector<HTMLElement>(target);
  if (!el) return;

  const top = el.getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: "smooth" });
}
