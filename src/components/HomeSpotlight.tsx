import Link from "next/link";
import MaterialIcon from "./MaterialIcon";
import { getPlantById, type Plant } from "@/lib/plant-data";

const SPOTLIGHT: Array<{
  id: string;
  tagline: string;
  keeper: string;
  bg: string;
  text: string;
  shape: string;
  shapeColor: string;
}> = [
  {
    id: "acai",
    tagline: "The purple fruit the Ribeirinhos have climbed for daily since before colonial memory.",
    keeper: "Ribeirinho communities · Pará",
    bg: "var(--acai)",
    text: "var(--bone)",
    shape: "url(#clipCookie)",
    shapeColor: "var(--ochre)",
  },
  {
    id: "guarana",
    tagline: "The seed the Sateré-Mawé grated against a sacred stone before the world learned caffeine.",
    keeper: "Sateré-Mawé · Amazonas",
    bg: "var(--ochre)",
    text: "var(--ink)",
    shape: "url(#clipDiamond)",
    shapeColor: "var(--urucum)",
  },
  {
    id: "cat-claw",
    tagline: "A vine the Asháninka call ‘uña de gato’. Immunity encoded in the Amazon understory.",
    keeper: "Asháninka · Peruvian Amazon",
    bg: "var(--sage)",
    text: "var(--ink)",
    shape: "url(#clipClover)",
    shapeColor: "var(--forest)",
  },
  {
    id: "pau-darco",
    tagline: "An entire Tupi pharmacopoeia leans on this bark; pink blossoms above a medicine against disease.",
    keeper: "Tupi-Guaraní lineages",
    bg: "var(--urucum)",
    text: "var(--bone)",
    shape: "url(#clipPentagon)",
    shapeColor: "var(--sun)",
  },
  {
    id: "sangre-de-grado",
    tagline: "‘Dragon's blood’ sap. A Shipibo wound dressing older than written medicine.",
    keeper: "Shipibo-Conibo · Ucayali",
    bg: "var(--forest)",
    text: "var(--bone)",
    shape: "url(#clipBlob)",
    shapeColor: "var(--sage)",
  },
];

export default function HomeSpotlight() {
  const items = SPOTLIGHT.map(s => ({ ...s, plant: getPlantById(s.id) })).filter(
    (x): x is typeof x & { plant: Plant } => !!x.plant
  );

  return (
    <section className="relative py-24 lg:py-32 bg-[color:var(--canvas)]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <span className="chip chip-outline">
              <MaterialIcon name="eco" style={{ fontSize: 14 }} />
              Spotlight
            </span>
            <h2
              className="mt-6 font-display tracking-brand text-[color:var(--ink)] leading-[0.92]"
              style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)" }}
            >
              Five plants, <span className="italic text-[color:var(--urucum)]">many languages.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-[color:var(--ink-soft)] leading-relaxed">
              Start with these. Each is a bridge between a forest, a body, and a people who have
              held the formula longer than any laboratory has existed.
            </p>
          </div>
          <Link href="/explore" className="m3-outline">
            <MaterialIcon name="library_books" style={{ fontSize: 20 }} />
            Full archive
          </Link>
        </div>

        {/* Grid: 1st big, next two half-width, bottom two half-width */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-5 auto-rows-[260px]">
          {items.map((it, i) => (
            <SpotlightCard
              key={it.id}
              item={it}
              variant={i === 0 ? "hero" : i === 2 ? "tall" : "default"}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SpotlightCard({
  item,
  variant,
  index,
}: {
  item: {
    plant: Plant;
    tagline: string;
    keeper: string;
    bg: string;
    text: string;
    shape: string;
    shapeColor: string;
  };
  variant: "hero" | "tall" | "default";
  index: number;
}) {
  const { plant } = item;
  const span =
    variant === "hero"
      ? "md:col-span-4 md:row-span-2"
      : variant === "tall"
        ? "md:col-span-2 md:row-span-2"
        : "md:col-span-2";

  return (
    <Link
      href={`/plant/${plant.id}`}
      className={`tile-lg relative overflow-hidden p-8 md:p-10 flex flex-col justify-between group transition-transform duration-500 hover:-translate-y-1 ${span}`}
      style={{ background: item.bg, color: item.text }}
    >
      {/* Decorative shape sticker */}
      <div
        className={`absolute ${variant === "hero" ? "w-72 h-72 -right-10 -bottom-10" : "w-48 h-48 -right-6 -bottom-6"}`}
        style={{ background: item.shapeColor, clipPath: item.shape }}
        aria-hidden
      />

      {/* Emoji marker */}
      <div
        className={`absolute ${variant === "hero" ? "top-10 right-10 text-8xl" : "top-6 right-6 text-6xl"} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 z-10`}
      >
        {plant.emoji}
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3">
          <span
            className="inline-flex items-center justify-center w-10 h-10 rounded-full font-display text-sm"
            style={{ background: item.text, color: item.bg, opacity: 0.95 }}
          >
            N°{String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-xs uppercase tracking-[0.24em]" style={{ opacity: 0.8 }}>
            {plant.family}
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-[26ch]">
        <h3
          className="font-display tracking-brand leading-[0.98]"
          style={{
            color: item.text,
            fontSize: variant === "hero" ? "clamp(2.6rem, 5vw, 4.5rem)" : "clamp(1.9rem, 3.2vw, 2.8rem)",
          }}
        >
          {plant.name}
        </h3>
        <p className="mt-1 italic text-sm" style={{ opacity: 0.85 }}>
          {plant.scientificName}
        </p>

        {variant === "hero" && (
          <p className="mt-5 text-lg leading-relaxed max-w-md" style={{ opacity: 0.92 }}>
            {item.tagline}
          </p>
        )}

        <div className="mt-5 flex items-center gap-2 text-xs" style={{ opacity: 0.85 }}>
          <MaterialIcon name="diversity_3" style={{ fontSize: 14 }} />
          {item.keeper}
        </div>

        <div
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium"
          style={{ color: item.text }}
        >
          Read the entry
          <MaterialIcon
            name="arrow_forward"
            style={{ fontSize: 18 }}
            className="transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}
