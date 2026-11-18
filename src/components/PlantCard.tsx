"use client";

import Link from "next/link";
import MaterialIcon from "./MaterialIcon";
import type { Plant } from "@/lib/plant-data";

interface PlantCardProps {
  plant: Plant;
  index: number;
  compact?: boolean;
}

const PALETTE = [
  { bg: "var(--urucum)", text: "var(--bone)", shape: "url(#clipCookie)", shapeBg: "var(--sun)" },
  { bg: "var(--ochre)", text: "var(--ink)", shape: "url(#clipClover)", shapeBg: "var(--urucum)" },
  { bg: "var(--sage)", text: "var(--ink)", shape: "url(#clipDiamond)", shapeBg: "var(--forest)" },
  { bg: "var(--acai)", text: "var(--bone)", shape: "url(#clipPentagon)", shapeBg: "var(--ochre)" },
  { bg: "var(--forest)", text: "var(--bone)", shape: "url(#clipBlob)", shapeBg: "var(--sage)" },
  { bg: "var(--sky)", text: "var(--ink)", shape: "url(#clipCookie)", shapeBg: "var(--acai)" },
];

export default function PlantCard({ plant, index, compact = false }: PlantCardProps) {
  const p = PALETTE[index % PALETTE.length];

  if (compact) {
    return (
      <Link
        href={`/plant/${plant.id}`}
        className="flex items-center gap-3 p-3 tile hover:scale-[1.02] transition-transform"
        style={{ background: p.bg, color: p.text }}
      >
        <span className="text-2xl">{plant.emoji}</span>
        <div className="min-w-0">
          <h4 className="font-display text-base tracking-brand truncate" style={{ color: p.text }}>
            {plant.name}
          </h4>
          <p className="text-[10px] italic truncate" style={{ opacity: 0.8 }}>
            {plant.scientificName}
          </p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/plant/${plant.id}`}
      className="tile p-7 relative overflow-hidden group transition-transform duration-300 hover:-translate-y-1 min-h-[320px] flex flex-col justify-between"
      style={{ background: p.bg, color: p.text }}
    >
      <div
        className="absolute -top-8 -right-8 w-40 h-40 group-hover:rotate-12 transition-transform duration-500"
        style={{ background: p.shapeBg, clipPath: p.shape }}
        aria-hidden
      />
      <div className="absolute top-6 right-6 text-5xl z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
        {plant.emoji}
      </div>

      <div className="relative z-10">
        <div className="text-xs uppercase tracking-[0.22em]" style={{ opacity: 0.8 }}>
          N°{String(index + 1).padStart(2, "0")} · {plant.nativeTo[0]}
        </div>
        <h3
          className="mt-3 font-display tracking-brand leading-[0.98]"
          style={{ color: p.text, fontSize: "clamp(1.8rem, 2.6vw, 2.3rem)" }}
        >
          {plant.name}
        </h3>
        <p className="mt-1 text-xs italic" style={{ opacity: 0.85 }}>
          {plant.scientificName}
        </p>
      </div>

      <div className="relative z-10">
        <p className="text-sm leading-relaxed line-clamp-2" style={{ opacity: 0.9 }}>
          {plant.description}
        </p>
        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs" style={{ opacity: 0.9 }}>
            <span className="flex items-center gap-1">
              <MaterialIcon name="favorite" filled style={{ fontSize: 14 }} />
              {plant.medicinalUses.length}
            </span>
            <span className="flex items-center gap-1">
              <MaterialIcon name="auto_stories" style={{ fontSize: 14 }} />
              {plant.indigenousKnowledge.length}
            </span>
          </div>
          <MaterialIcon
            name="arrow_outward"
            style={{ fontSize: 22 }}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
      </div>
    </Link>
  );
}
