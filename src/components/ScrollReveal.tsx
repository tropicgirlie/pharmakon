"use client";

import { useEffect } from "react";

/**
 * Single IntersectionObserver that drives every `.reveal` element on the page.
 * Why one orchestrator: 30+ reveal targets on the home; one shared observer is
 * cheaper than 30 effects. Elements start at opacity 0 (see globals.css) and
 * get `data-reveal-visible="true"` once they cross the viewport edge.
 *
 * Fallback for no-JS / reduced-motion: the layout root sets `data-js="on"` via
 * an inline script, which is the only thing that enables the hide-first CSS.
 * Without JS the cards stay visible. Users who prefer reduced motion get an
 * instant reveal with no transform, handled here.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll<HTMLElement>(".reveal");

    if (reduced) {
      targets.forEach(el => el.setAttribute("data-reveal-visible", "true"));
      return;
    }

    const io = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-reveal-visible", "true");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    targets.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
