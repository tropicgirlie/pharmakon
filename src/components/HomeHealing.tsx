import Link from "next/link";
import MaterialIcon from "./MaterialIcon";
import { getPlantById, type Plant } from "@/lib/plant-data";

/** Famous plants with real photographs downloaded into /public/plants/. */
const FAMOUS: Array<{ id: string; use: string; keeper: string }> = [
  { id: "ashwagandha",     use: "Adaptogen · Stress",      keeper: "Ayurveda · India" },
  { id: "ginseng",         use: "Qi tonic · Longevity",    keeper: "Changbai Mountains" },
  { id: "turmeric",        use: "Anti-inflammatory",       keeper: "Hindu tradition · India" },
  { id: "acai",            use: "Antioxidant · Energy",    keeper: "Ribeirinhos · Pará" },
  { id: "matcha",          use: "Calm focus · Zen",        keeper: "Tea masters · Uji" },
  { id: "maca",            use: "Hormone · Altitude",      keeper: "Quechua · Andes" },
  { id: "reishi",          use: "Shen tonic · Immunity",   keeper: "Taoist herbalists" },
  { id: "moringa",         use: "Malnutrition · Nutrient", keeper: "Rural Kenya · Turkana" },
  { id: "tulsi",           use: "Adaptogen · Sacred",      keeper: "Hindu households" },
  { id: "argan",           use: "Skin · Heart health",     keeper: "Berber women · Essaouira" },
  { id: "peyote",          use: "Ceremonial · Vision",     keeper: "Wixárika · Wirikuta" },
  { id: "tea-tree",        use: "Antiseptic · Wound",      keeper: "Bundjalung · NSW" },
  { id: "neem",            use: "Antimicrobial · Dental",  keeper: "Village pharmacy · India" },
  { id: "guarana",         use: "Stimulant · Ritual",      keeper: "Sateré-Mawé · Amazonas" },
  { id: "goji",            use: "Eye · Yin tonic",         keeper: "Ningxia · 2,000 years" },
  { id: "rose-morocco",    use: "Mood · Skin",             keeper: "Dades Valley · Morocco" },
  { id: "pau-darco",       use: "Immune · Antifungal",     keeper: "Guaraní · Mato Grosso" },
  { id: "coca",            use: "Altitude · Sacred",       keeper: "Quechua · Andes" },
  { id: "gotu-kola",       use: "Memory · Longevity",      keeper: "Balian healers · Bali" },
  { id: "eucalyptus",      use: "Decongestant · Fever",    keeper: "Aboriginal nations · AU" },
  { id: "aloe-kenya",      use: "Burn · Wound healing",    keeper: "Maasai herders" },
  { id: "soursop",         use: "Sedative · Antispasmodic",keeper: "Maroon bush doctors · JM" },
  { id: "nigella",         use: "Immune · Respiratory",    keeper: "Prophetic tradition" },
  { id: "rooibos",         use: "Antioxidant · Digestion", keeper: "Khoisan · Cederberg" },
  { id: "brahmi",          use: "Nootropic · Memory",      keeper: "Yogis · Kerala" },
  { id: "kakadu-plum",     use: "Vitamin C · Bush tucker", keeper: "Yolŋu · Arnhem Land" },
  { id: "cat-claw",        use: "Immune · Anti-inflammatory", keeper: "Asháninka · Central Amazon" },
  { id: "chanca-piedra",   use: "Kidney stones · Liver",   keeper: "Amazonian healers · Loreto" },
  { id: "sangre-de-grado", use: "Wound · Dragon's blood",  keeper: "Shipibo-Conibo · Ucayali" },
  { id: "damiana",         use: "Mood · Aphrodisiac",      keeper: "Mayan descendants · Yucatán" },
];

export default function HomeHealing() {
  const items = FAMOUS.map((f) => ({ ...f, plant: getPlantById(f.id) })).filter(
    (x): x is typeof x & { plant: Plant } => !!x.plant,
  );

  return (
    <section id="famous" className="relative py-24 lg:py-32 bg-[color:var(--bone)]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 mb-14">
        <span className="chip chip-outline">
          <MaterialIcon name="healing" style={{ fontSize: 14 }} />
          The Pharmacy
        </span>
        <h2
          className="mt-6 font-display tracking-brand text-[color:var(--ink)] leading-[0.92] max-w-5xl"
          style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}
        >
          The <span className="italic text-[color:var(--urucum)]">famous</span> ones.
        </h2>
        <div className="mt-6 flex items-end justify-between flex-wrap gap-4">
          <p className="max-w-2xl text-lg text-[color:var(--ink-soft)] leading-relaxed">
            Turmeric. Ginseng. Ayahuasca's cousins. The plants the world leans on. Every one is
            a formula someone kept, long before any laboratory wrote it down. Tap a face to meet
            its keeper.
          </p>
          <Link href="/explore" className="m3-outline">
            <MaterialIcon name="library_books" style={{ fontSize: 20 }} />
            Every plant
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {items.map((it, i) => (
          <PlantPhotoCard key={it.id} plant={it.plant} use={it.use} keeper={it.keeper} featured={i === 0} />
        ))}
      </div>
    </section>
  );
}

function PlantPhotoCard({
  plant,
  use,
  keeper,
  featured,
}: {
  plant: Plant;
  use: string;
  keeper: string;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/plant/${plant.id}`}
      className={`tile-lg relative overflow-hidden group transition-transform duration-500 hover:-translate-y-1 ${
        featured ? "sm:col-span-2 lg:col-span-1 min-h-[480px]" : "min-h-[400px]"
      } flex flex-col justify-end`}
      style={{ background: plant.color }}
    >
      {/* Layer 1: real photo */}
      <div
        className="absolute inset-0 transition-transform duration-[1200ms] group-hover:scale-[1.04]"
        style={{
          backgroundImage: `url('/plants/${plant.id}.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />

      {/* Layer 2: darkening gradient for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,20,15,0.05) 0%, rgba(10,20,15,0.35) 45%, rgba(10,20,15,0.92) 100%)",
        }}
        aria-hidden
      />

      {/* Layer 3: emoji marker in corner */}
      <span
        className="absolute top-6 right-6 text-5xl drop-shadow-lg z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
        aria-hidden
      >
        {plant.emoji}
      </span>

      {/* Layer 4: content */}
      <div className="relative z-10 p-7 lg:p-8">
        <div className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--bone)]/85">
          {plant.family}
        </div>
        <h3
          className="mt-2 font-display tracking-brand leading-[0.95] text-[color:var(--bone)]"
          style={{ fontSize: featured ? "clamp(2.4rem, 4vw, 3.4rem)" : "clamp(1.9rem, 2.7vw, 2.4rem)" }}
        >
          {plant.name}
        </h3>
        <p className="mt-1 italic text-sm text-[color:var(--bone)]/85">
          {plant.scientificName}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span
            className="chip"
            style={{
              background: "var(--bone)",
              color: "var(--ink)",
              borderColor: "transparent",
            }}
          >
            <MaterialIcon name="favorite" filled style={{ fontSize: 12 }} />
            {use}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-[color:var(--bone)]/90">
          <span className="flex items-center gap-1.5 truncate">
            <MaterialIcon name="diversity_3" style={{ fontSize: 14 }} />
            <span className="truncate">{keeper}</span>
          </span>
          <MaterialIcon
            name="arrow_outward"
            style={{ fontSize: 22 }}
            className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0"
          />
        </div>
      </div>
    </Link>
  );
}
