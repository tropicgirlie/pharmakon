"use client";

import { useEffect, useState } from "react";
import { asset } from "@/lib/asset";

type State = "loading" | "open" | "closing" | "closed";

export default function ThresholdGate() {
  const [state, setState] = useState<State>("loading");

  useEffect(() => {
    try {
      if (sessionStorage.getItem("pharmakon_entered") === "1") {
        setState("closed");
        return;
      }
    } catch {}
    setState("open");
  }, []);

  if (state === "loading" || state === "closed") return null;

  function enter() {
    try {
      sessionStorage.setItem("pharmakon_entered", "1");
    } catch {}
    setState("closing");
    setTimeout(() => setState("closed"), 700);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-end overflow-hidden transition-opacity duration-700"
      style={{ opacity: state === "closing" ? 0 : 1, background: "#050a08" }}
      aria-modal="true"
      role="dialog"
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
        aria-hidden
      />

      <div className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-50 threshold-grain" aria-hidden />

      <div className="relative z-10 text-center pb-16 lg:pb-24 px-6 max-w-2xl">
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
