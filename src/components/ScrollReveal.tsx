"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Single IntersectionObserver that drives every `.reveal` element on the page.
 * Why one orchestrator: 30+ reveal targets on the home; one shared observer is
 * cheaper than 30 effects. Elements start at opacity 0 (see globals.css) and
 * get `data-reveal-visible="true"` once they cross the viewport edge.
 *
 * Re-scans on pathname change: this component lives in the root layout and is
 * not remounted on soft nav, so without a pathname dep the observer would keep
 * watching the previous page's nodes and leave the new page's `.reveal`
 * elements stuck at opacity 0 (which looked like a huge white gap between
 * sections on /countries).
 */
export default function ScrollReveal() {
  const pathname = usePathname();

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
  }, [pathname]);

  return null;
}
