import Link from "next/link";
import MaterialIcon from "./MaterialIcon";
import { countries } from "@/lib/plant-data";
import CountryLandscape from "./CountryLandscape";
import { asset } from "@/lib/asset";

const SHAPES = [
  { shape: "url(#clipCookie)", color: "var(--urucum)" },
  { shape: "url(#clipClover)", color: "var(--ochre)" },
  { shape: "url(#clipDiamond)", color: "var(--sun)" },
  { shape: "url(#clipPentagon)", color: "var(--sage)" },
  { shape: "url(#clipBlob)", color: "var(--acai)" },
  { shape: "url(#clipCookie)", color: "var(--sky)" },
];

const KEEPER_NOTES: Record<string, string> = {
  br: "Yanomami · Kayapó · Asháninka · Munduruku",
  pe: "Asháninka · Shipibo-Conibo · Awajún",
  in: "Ayurvedic lineages · Adivasi healers",
  cn: "Shennong tradition · mountain herbalists",
  mx: "Huichol · Maya · Nahua",
  ke: "Maasai · Kikuyu healers",
  au: "Aboriginal custodians · 65,000+ years",
  ma: "Amazigh herbal traditions",
  id: "Jamu makers · Balinese balians",
  jp: "Kampō scholars · Satoyama farmers",
  za: "San people · Zulu sangomas",
  jm: "Maroon bush doctors",
};

export default function HomeKeepers() {
  return (
    <section className="relative py-24 lg:py-32 bg-[color:var(--bone)]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mb-16">
        <span className="chip chip-outline">
          <MaterialIcon name="public" style={{ fontSize: 14 }} />
          The Keepers
        </span>
        <h2
          className="mt-6 font-display tracking-brand text-[color:var(--ink)] leading-[0.92]"
          style={{ fontSize: "clamp(2.8rem, 7vw, 6.5rem)" }}
        >
          Twelve lands, <span className="italic text-[color:var(--urucum)]">countless lineages.</span>
        </h2>
        <div className="mt-6 flex items-end justify-between flex-wrap gap-4">
          <p className="max-w-2xl text-lg text-[color:var(--ink-soft)] leading-relaxed">
            The archive is geographical because knowledge is. Open a shelf to read what the peoples
            below authored, and still author today.
          </p>
          <Link href="/countries" className="m3-outline">
            <MaterialIcon name="map" style={{ fontSize: 20 }} />
            Every keeper
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {countries.map((c, i) => {
          const s = SHAPES[i % SHAPES.length];
          const note = KEEPER_NOTES[c.code] || "Local keepers";
          return (
            <Link
              key={c.code}
              href={`/country/${c.code}`}
              className="tile relative overflow-hidden group transition-transform duration-300 hover:-translate-y-1 min-h-[380px] flex flex-col justify-between"
            >
              {/* Layer 0 — painted landscape fallback */}
              <CountryLandscape code={c.code} className="absolute inset-0 w-full h-full" />

              {/* Layer 1 — real photo (invisible when /public/countries/<code>.jpg is missing) */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('${asset(`/countries/${c.code}.jpg`)}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                aria-hidden
              />

              {/* Layer 2 — darkening overlay for legibility */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,20,15,0.12) 0%, rgba(10,20,15,0.3) 40%, rgba(10,20,15,0.88) 100%)",
                }}
                aria-hidden
              />

              {/* Decorative shape sticker */}
              <div
                className="absolute -top-6 -right-6 w-32 h-32 group-hover:rotate-12 transition-transform duration-500 z-10"
                style={{ background: s.color, clipPath: s.shape }}
                aria-hidden
              />

              <div className="relative z-10 p-7 flex-1 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.24em] text-[color:var(--bone)]/80">
                      Shelf N°{String(i + 1).padStart(2, "0")}
                    </div>
                    <h3
                      className="mt-3 font-display tracking-brand leading-[0.95] text-[color:var(--bone)]"
                      style={{ fontSize: "clamp(2rem, 3.4vw, 2.8rem)" }}
                    >
                      {c.name}
                    </h3>
                  </div>
                  <span className="text-4xl drop-shadow">{c.emoji}</span>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm text-[color:var(--bone)]/90">
                    <MaterialIcon name="diversity_3" style={{ fontSize: 16 }} />
                    <span className="truncate">{note}</span>
                  </div>
                  <div className="mt-5 flex items-center justify-between">
                    <div
                      className="chip"
                      style={{
                        background: "var(--bone)",
                        color: "var(--ink)",
                        borderColor: "transparent",
                      }}
                    >
                      <MaterialIcon name="local_florist" style={{ fontSize: 14 }} />
                      {c.plantIds.length} plants
                    </div>
                    <MaterialIcon
                      name="arrow_outward"
                      style={{ fontSize: 24, color: "var(--bone)" }}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
