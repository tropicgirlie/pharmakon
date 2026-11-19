"use client";

import Link from "next/link";
import MaterialIcon from "./MaterialIcon";
import CountryLandscape from "./CountryLandscape";
import type { Country } from "@/lib/plant-data";
import { asset } from "@/lib/asset";

const SHAPES = [
  { shape: "url(#clipCookie)", color: "var(--urucum)" },
  { shape: "url(#clipClover)", color: "var(--ochre)" },
  { shape: "url(#clipDiamond)", color: "var(--sun)" },
  { shape: "url(#clipPentagon)", color: "var(--sage)" },
  { shape: "url(#clipBlob)", color: "var(--acai)" },
  { shape: "url(#clipCookie)", color: "var(--sky)" },
];

export default function CountryShelf({ country, index }: { country: Country; index: number }) {
  const s = SHAPES[index % SHAPES.length];
  return (
    <Link
      href={`/country/${country.code}`}
      className="tile relative overflow-hidden group transition-transform duration-300 hover:-translate-y-1 min-h-[360px] flex flex-col justify-between"
    >
      {/* Layer 0 — painted landscape fallback */}
      <CountryLandscape code={country.code} className="absolute inset-0 w-full h-full" />

      {/* Layer 1 — real photo (invisible if /public/countries/<code>.jpg is missing) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${asset(`/countries/${country.code}.jpg`)}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />

      {/* Layer 2 — darkening overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,20,15,0.15) 0%, rgba(10,20,15,0.35) 40%, rgba(10,20,15,0.88) 100%)",
        }}
        aria-hidden
      />

      {/* Decorative shape sticker in corner */}
      <div
        className="absolute -top-6 -right-6 w-28 h-28 group-hover:rotate-12 transition-transform duration-500 z-10"
        style={{ background: s.color, clipPath: s.shape }}
        aria-hidden
      />

      <div className="relative z-10 p-7 flex-1 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.24em] text-[color:var(--bone)]/80">
              Shelf N°{String(index + 1).padStart(2, "0")}
            </div>
            <h3
              className="mt-3 font-display tracking-brand leading-[0.95] text-[color:var(--bone)]"
              style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)" }}
            >
              {country.name}
            </h3>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[color:var(--bone)]/85">
              <span className="flex items-center gap-1">
                <MaterialIcon name="public" style={{ fontSize: 14 }} /> {country.region}
              </span>
              <span className="flex items-center gap-1">
                <MaterialIcon name="thermostat" style={{ fontSize: 14 }} /> {country.climate}
              </span>
            </div>
          </div>
          <span className="text-5xl drop-shadow-lg">{country.emoji}</span>
        </div>

        <div>
          <p className="text-sm leading-relaxed text-[color:var(--bone)]/90 line-clamp-2">
            {country.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div
              className="chip"
              style={{
                background: "var(--bone)",
                color: "var(--ink)",
                borderColor: "transparent",
              }}
            >
              <MaterialIcon name="local_florist" style={{ fontSize: 14 }} />
              {country.plantIds.length} plants
            </div>
            <MaterialIcon
              name="arrow_outward"
              style={{ fontSize: 22, color: "var(--bone)" }}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </div>
      </div>
    </Link>
  );
}
