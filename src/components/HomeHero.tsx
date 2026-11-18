"use client";

import Link from "next/link";
import MaterialIcon from "./MaterialIcon";

export default function HomeHero({ totalPlants, totalCountries }: { totalPlants: number; totalCountries: number }) {
  return (
    <section className="relative isolate overflow-hidden bg-[color:var(--bone)]">
      {/* Top padding below fixed nav */}
      <div className="h-24" />

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10 pt-10 pb-20">
        <div className="flex flex-wrap items-center gap-3 mb-10">
          <span className="chip chip-outline">
            <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--urucum)] pulse-dot" />
            A living archive, not an inventory
          </span>
          <span className="chip chip-forest">
            <MaterialIcon name="forest" style={{ fontSize: 14 }} />
            Amazon &amp; beyond
          </span>
          <span className="chip chip-ochre">
            <MaterialIcon name="diversity_3" style={{ fontSize: 14 }} />
            Credit the keepers
          </span>
        </div>

        {/* Main grid: headline left, image + accents right */}
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-12 items-start">
          {/* Headline block */}
          <div>
            <h1
              className="font-display tracking-brand text-[color:var(--ink)] leading-[0.88]"
              style={{ fontSize: "clamp(3.5rem, 10vw, 10rem)" }}
            >
              The forest<br />
              <span className="italic text-[color:var(--urucum)]">is not</span>
              <br />
              a commodity.
            </h1>

            <p className="mt-10 text-lg md:text-xl text-[color:var(--ink-soft)] max-w-xl leading-relaxed">
              An archive of medicinal plants and the indigenous knowledge
              that has carried them for thousands of years. From ayahuasca to the
              perfume oils woven into <span className="italic">Chanel N°5</span> —
              the value belongs to the peoples who first knew them.
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

            {/* Stat row — chunky expressive */}
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-2">
              <HeroStat value={String(totalPlants).padStart(2, "0")} label="plants" tone="ochre" />
              <HeroStat value={String(totalCountries).padStart(2, "0")} label="lands" tone="sage" />
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

function HeroStat({ value, label, tone }: { value: string; label: string; tone: "ochre" | "sage" | "acai" | "urucum" }) {
  const map = {
    ochre: { bg: "var(--ochre)", text: "var(--ink)" },
    sage: { bg: "var(--sage)", text: "var(--ink)" },
    acai: { bg: "var(--acai)", text: "var(--bone)" },
    urucum: { bg: "var(--urucum)", text: "var(--bone)" },
  }[tone];
  return (
    <div className="tile p-5" style={{ background: map.bg, color: map.text }}>
      <div className="font-display text-5xl tracking-brand leading-none" style={{ color: map.text }}>{value}</div>
      <div className="mt-2 text-xs uppercase tracking-[0.2em]" style={{ color: map.text, opacity: 0.8 }}>{label}</div>
    </div>
  );
}

function HeroImageSlot() {
  return (
    <div
      className="hero-image-slot tile-xl w-full aspect-[4/5] relative overflow-hidden"
      style={
        {
          background:
            "var(--hero-image, linear-gradient(140deg, #4a6b4a 0%, #1f3a2a 55%, #0f2419 100%))",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      }
    >
      {/* Default canopy illustration if no photo is present */}
      <svg
        className="absolute inset-0 w-full h-full opacity-80"
        viewBox="0 0 400 500"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <defs>
          <radialGradient id="heroMist" cx="50%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#f6efe0" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#f6efe0" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="500" fill="url(#heroMist)" />
        {/* scattered tree ellipses evoking an aerial canopy */}
        {Array.from({ length: 80 }).map((_, i) => {
          const seed = i * 97;
          const x = (seed * 13) % 400;
          const y = (seed * 29) % 500;
          const r1 = 14 + ((seed * 7) % 20);
          const r2 = 10 + ((seed * 3) % 14);
          const op = 0.35 + ((seed * 11) % 10) / 20;
          return <ellipse key={i} cx={x} cy={y} rx={r1} ry={r2} fill="#2a4a36" opacity={op} />;
        })}
      </svg>

      {/* Hint label — tells the user where to drop their photo */}
      <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[color:var(--ink)]/70 to-transparent">
        <div className="text-[color:var(--bone)] text-xs uppercase tracking-[0.24em] opacity-80">
          Aerial · Amazonia
        </div>
        <div className="text-[color:var(--bone)]/80 text-[10px] mt-1">
          drop /public/hero-aerial.jpg to replace
        </div>
      </div>
    </div>
  );
}
