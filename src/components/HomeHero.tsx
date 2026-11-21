"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MaterialIcon from "./MaterialIcon";
import { asset } from "@/lib/asset";

export default function HomeHero({ totalPlants, totalCountries }: { totalPlants: number; totalCountries: number }) {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--bone)]">
      {/* Top padding below fixed nav */}
      <div className="h-24" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 pt-10 pb-20">
        {/* Main grid: headline left, image + accents right */}
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-12 items-start">
          {/* Headline block */}
          <div>
            <h1
              className="font-display tracking-brand text-[color:var(--ink)] leading-[0.88]"
              style={{ fontSize: "clamp(3rem, 7.5vw, 8rem)", textWrap: "balance" }}
            >
              The forest<br />
              <span className="italic text-[color:var(--urucum)]">is not</span>{" "}
              a commodity.
            </h1>

            <p className="mt-10 text-lg md:text-xl text-[color:var(--ink-soft)] max-w-xl leading-relaxed">
              An archive of medicinal plants and the indigenous knowledge
              that has carried them for thousands of years. From ayahuasca to the
              perfume oils woven into <span className="italic">Chanel N°5</span>, the
              value belongs to the peoples who first knew them.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/explore" className="m3-filled">
                <MaterialIcon name="travel_explore" style={{ fontSize: 20 }} />
                Enter the Atlas
              </Link>
              <Link href="/countries" className="m3-outline">
                <MaterialIcon name="diversity_3" style={{ fontSize: 20 }} />
                Meet the Keepers
              </Link>
            </div>

            {/* Stat row — chunky expressive. Numeric values count up when the
                row crosses the viewport; ∞ and 0 stay static. */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-2">
              <HeroStat count={totalPlants} label="plants" tone="ochre" />
              <HeroStat count={totalCountries} label="lands" tone="sage" />
              <HeroStat value="∞" label="lineages" tone="acai" />
              <HeroStat value="0" label="biopiracy" tone="urucum" />
            </div>
          </div>

          {/* Image + decorative stickers column */}
          <div className="relative">
            <HeroImageSlot />

            {/* Floating color stickers */}
            <div
              className="absolute -top-6 -left-6 w-28 h-28 rotate-12 flex items-center justify-center text-center p-4 sticker-shadow"
              style={{ background: "var(--sun)", clipPath: "url(#clipClover)" }}
            >
              <span className="font-display text-base text-[color:var(--ink)] leading-tight">
                100%<br />indigenous
              </span>
            </div>

            <div
              className="absolute -bottom-8 -right-4 w-36 h-36 -rotate-6 flex items-center justify-center text-center p-5 sticker-shadow"
              style={{ background: "var(--urucum)", clipPath: "url(#clipCookie)" }}
            >
              <span className="font-display text-sm text-[color:var(--bone)] leading-tight">
                knowledge for the world
              </span>
            </div>

            <div
              className="absolute top-1/2 -right-6 w-20 h-20 rotate-[25deg] flex items-center justify-center sticker-shadow"
              style={{ background: "var(--acai)", clipPath: "url(#clipDiamond)" }}
            >
              <MaterialIcon name="eco" filled style={{ fontSize: 32, color: "var(--bone)" }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling word marquee strip */}
      <div className="bg-[color:var(--forest)] text-[color:var(--bone)] py-5 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee font-display text-3xl md:text-4xl lg:text-5xl tracking-brand">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="inline-flex items-center gap-10 pr-10">
              <span>Yanomami</span>
              <Dot />
              <span className="italic">Asháninka</span>
              <Dot />
              <span>Shipibo-Conibo</span>
              <Dot />
              <span className="italic">Kayapó</span>
              <Dot />
              <span>Sateré-Mawé</span>
              <Dot />
              <span className="italic">Awajún</span>
              <Dot />
              <span>Munduruku</span>
              <Dot />
              <span className="italic">Ribeirinho</span>
              <Dot />
              <span>Huichol</span>
              <Dot />
              <span className="italic">Maya</span>
              <Dot />
              <span>Maasai</span>
              <Dot />
              <span className="italic">Aboriginal custodians</span>
              <Dot />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dot() {
  return (
    <span className="inline-block w-3 h-3 rounded-full bg-[color:var(--urucum)] translate-y-[-4px]" />
  );
}

function HeroStat({
  value,
  count,
  label,
  tone,
}: {
  value?: string;
  count?: number;
  label: string;
  tone: "ochre" | "sage" | "acai" | "urucum";
}) {
  const map = {
    ochre: { bg: "var(--ochre)", text: "var(--ink)" },
    sage: { bg: "var(--sage)", text: "var(--ink)" },
    acai: { bg: "var(--acai)", text: "var(--bone)" },
    urucum: { bg: "var(--urucum)", text: "var(--bone)" },
  }[tone];
  return (
    <div className="tile p-5" style={{ background: map.bg, color: map.text }}>
      <div className="font-display text-5xl tracking-brand leading-none" style={{ color: map.text }}>
        {count !== undefined ? <CountUp target={count} /> : value}
      </div>
      <div className="mt-2 text-xs uppercase tracking-[0.2em]" style={{ color: map.text, opacity: 0.8 }}>{label}</div>
    </div>
  );
}

/**
 * Counts from 0 to `target` with ease-out over `duration` ms, triggered once
 * when the element enters the viewport. Pads to two digits to match the rest
 * of the stat row ("60", "12"). Respects prefers-reduced-motion.
 */
function CountUp({ target, duration = 900 }: { target: number; duration?: number }) {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCurrent(target);
      return;
    }
    const io = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (!e.isIntersecting || started.current) continue;
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setCurrent(Math.round(eased * target));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{String(current).padStart(2, "0")}</span>;
}

function HeroImageSlot() {
  return (
    <div
      className="hero-image-slot tile-xl w-full aspect-[4/5] relative overflow-hidden"
      style={{ background: "#0f2419" }}
    >
      {/* Live canopy loop. Muted + playsInline so it autoplays on mobile. */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={asset("/jungle-poster.jpg")}
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden
      >
        <source src={asset("/jungle-canopy.webm")} type="video/webm" />
        <source src={asset("/jungle-canopy.mp4")} type="video/mp4" />
      </video>

      {/* Darkening wash bottom-up so the label reads cleanly. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,15,10,0.15) 0%, rgba(5,15,10,0.05) 40%, rgba(5,15,10,0.85) 100%)",
        }}
        aria-hidden
      />

      <div className="absolute inset-x-0 bottom-0 p-5">
        <div className="flex items-center gap-2 text-[color:var(--bone)] text-xs uppercase tracking-[0.24em]">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[color:var(--urucum)] animate-pulse" />
          Aerial · Amazonia
        </div>
      </div>
    </div>
  );
}
