/**
 * Hand-painted SVG landscape used as a fallback behind country cards
 * until a real photo is dropped at /public/countries/<code>.jpg.
 * Four biome palettes evoke the country without relying on stock photos.
 */

type Biome = "canopy" | "mountain" | "dry" | "monsoon";

const BIOMES: Record<Biome, {
  sky: [string, string];
  far: string;
  mid: string;
  near: string;
  accent: string;
  mistOpacity: number;
}> = {
  canopy: {
    sky: ["#2d4a35", "#1f3a2a"],
    far: "#3a5c42",
    mid: "#243b2b",
    near: "#101f17",
    accent: "#d4c9a8",
    mistOpacity: 0.28,
  },
  mountain: {
    sky: ["#8ea6ad", "#4a5c66"],
    far: "#6b7b82",
    mid: "#3a4b55",
    near: "#1a2432",
    accent: "#cfe1e8",
    mistOpacity: 0.4,
  },
  dry: {
    sky: ["#e8a83c", "#b26b3a"],
    far: "#a35a2e",
    mid: "#6b3a1c",
    near: "#2f1a10",
    accent: "#f8e2b0",
    mistOpacity: 0.22,
  },
  monsoon: {
    sky: ["#e8a83c", "#8aa876"],
    far: "#7a9472",
    mid: "#3f5a3a",
    near: "#1f2f20",
    accent: "#f8e2b0",
    mistOpacity: 0.3,
  },
};

export const BIOME_BY_COUNTRY: Record<string, Biome> = {
  br: "canopy",
  pe: "canopy",
  id: "canopy",
  jm: "canopy",
  cn: "mountain",
  jp: "mountain",
  mx: "dry",
  ma: "dry",
  za: "dry",
  ke: "dry",
  au: "dry",
  in: "monsoon",
};

export default function CountryLandscape({
  code,
  className,
}: {
  code: string;
  className?: string;
}) {
  const biome: Biome = BIOME_BY_COUNTRY[code] || "canopy";
  const p = BIOMES[biome];
  const id = `landscape-${code}`;

  // Seeded random so each country gets a consistent silhouette variation
  const seed = code.charCodeAt(0) + (code.charCodeAt(1) || 0);
  const trees = Array.from({ length: 11 }, (_, i) => {
    const s = (seed + i * 17) % 100;
    return {
      x: 50 + i * 72 + (s % 25),
      y: 280 + (s % 20),
      r1: 16 + (s % 14),
      r2: 11 + (s % 10),
    };
  });

  return (
    <svg
      className={className}
      viewBox="0 0 800 500"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id={`sky-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.sky[0]} />
          <stop offset="100%" stopColor={p.sky[1]} />
        </linearGradient>
        <radialGradient id={`sun-${id}`} cx="70%" cy="20%" r="60%">
          <stop offset="0%" stopColor={p.accent} stopOpacity={p.mistOpacity + 0.3} />
          <stop offset="60%" stopColor={p.accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`mist-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.accent} stopOpacity={p.mistOpacity} />
          <stop offset="100%" stopColor={p.accent} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Sky */}
      <rect width="800" height="500" fill={`url(#sky-${id})`} />
      <rect width="800" height="500" fill={`url(#sun-${id})`} />

      {/* Far ridge */}
      <path
        d="M0 220 Q 80 180 160 200 T 320 190 T 480 200 T 640 180 T 800 210 L 800 500 L 0 500 Z"
        fill={p.far}
        opacity="0.7"
      />
      {/* Mist band */}
      <rect y="180" width="800" height="120" fill={`url(#mist-${id})`} />
      {/* Middle ridge */}
      <path
        d="M0 310 Q 100 270 220 290 T 440 285 T 660 300 T 800 295 L 800 500 L 0 500 Z"
        fill={p.mid}
        opacity="0.9"
      />
      {/* Near silhouette with tree bumps */}
      <path
        d="M0 420 Q 100 400 240 410 T 480 415 T 720 405 T 800 410 L 800 500 L 0 500 Z"
        fill={p.near}
      />
      {/* Scattered treetop ellipses on the near layer, biome-tinted */}
      {trees.map((t, i) => (
        <g key={i}>
          <ellipse cx={t.x} cy={t.y} rx={t.r1} ry={t.r2} fill={p.mid} opacity="0.95" />
          <ellipse cx={t.x} cy={t.y - 10} rx={t.r2 * 0.7} ry={t.r2 * 0.5} fill={p.far} opacity="0.7" />
        </g>
      ))}
    </svg>
  );
}
