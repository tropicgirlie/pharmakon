"use client";

import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";

type State = "open" | "closing" | "closed";

// cubic-bezier(0.32, 0.72, 0, 1) is Vaul's "drawer" curve — settled start,
// long tail. Reads as the canopy lifting away rather than a cross-fade.
const EASE_DRAWER = "cubic-bezier(0.32, 0.72, 0, 1)";

export default function ThresholdGate() {
  // Default to "open" so the gate renders on the server and is in the DOM
  // from the first paint — otherwise the homepage flashes through before
  // the client-only sessionStorage check could decide anything.
  const [state, setState] = useState<State>("open");

  useEffect(() => {
    try {
      if (sessionStorage.getItem("pharmakon_entered") === "1") {
        setState("closed");
      }
    } catch {}
  }, []);

  if (state === "closed") return null;

  function enter() {
    try {
      sessionStorage.setItem("pharmakon_entered", "1");
    } catch {}
    setState("closing");
    // Matches the longest transition below (foliage layer: 700ms + no delay).
    setTimeout(() => setState("closed"), 750);
  }

  const closing = state === "closing";

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-end overflow-hidden"
      style={{
        background: "#050a08",
        pointerEvents: closing ? "none" : "auto",
      }}
      aria-modal="true"
      role="dialog"
    >
      {/* Foliage layer: video + gradients + grain, scaled up and faded out on
          dismiss so the canopy reads as lifting away from the viewer. */}
      <div
        className="absolute inset-0"
        style={{
          transform: closing ? "scale(1.08)" : "scale(1)",
          opacity: closing ? 0 : 1,
          transition: `opacity 600ms ${EASE_DRAWER}, transform 700ms ${EASE_DRAWER}`,
        }}
        aria-hidden
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={asset("/jungle-poster.jpg")}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={asset("/jungle-canopy.webm")} type="video/webm" />
          <source src={asset("/jungle-canopy.mp4")} type="video/mp4" />
        </video>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(5,15,10,0.35) 0%, rgba(5,15,10,0.15) 40%, rgba(5,15,10,0.95) 100%)",
          }}
        />

        <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-50 threshold-grain" />
      </div>

      {/* Text layer: lifts up and fades slightly ahead of the foliage so the
          two layers don't feel glued together. */}
      <div
        className="relative z-10 text-center pb-16 lg:pb-24 px-6 max-w-2xl"
        style={{
          transform: closing ? "translateY(-12px)" : "translateY(0)",
          opacity: closing ? 0 : 1,
          transition: `opacity 500ms ${EASE_DRAWER}, transform 500ms ${EASE_DRAWER}`,
        }}
      >
        <p className="text-[10px] uppercase tracking-[0.4em] text-white/70">Pharmakon</p>
        <h1
          className="mt-5 font-display text-[color:var(--bone)] leading-[0.95]"
          style={{ fontSize: "clamp(2.2rem, 6vw, 4.5rem)" }}
        >
          You are entering
          <br />
          a <span className="italic text-[color:var(--urucum)]">working pharmacy.</span>
        </h1>
        <p className="mt-6 text-sm md:text-base text-white/80 max-w-md mx-auto leading-relaxed">
          The forest is loud. Watch. Listen. Credit the keepers. The knowledge was never ours.
        </p>
        <button
          onClick={enter}
          className="mt-10 m3-filled text-base"
          autoFocus
        >
          Enter the atlas
        </button>
      </div>
    </div>
  );
}
