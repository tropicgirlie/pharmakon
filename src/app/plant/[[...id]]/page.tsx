import { notFound } from "next/navigation";
import Link from "next/link";
import { plants, getPlantById, getKnowledgeGraphData, getCountryByCode } from "@/lib/plant-data";
import GardenNav from "@/components/GardenNav";
import HomeFooter from "@/components/HomeFooter";
import KnowledgeGraph from "@/components/KnowledgeGraph";
import MaterialIcon from "@/components/MaterialIcon";

interface Props {
  params: Promise<{ id: string[] }>;
}

export async function generateStaticParams() {
  return Object.values(plants).map(p => ({ id: [p.id] }));
}

export default async function PlantPage({ params }: Props) {
  const resolved = await params;
  const id = resolved.id?.[0];
  if (!id) notFound();

  const plant = getPlantById(id);
  if (!plant) notFound();

  const graphData = getKnowledgeGraphData(id);
  const countryCode = plant.nativeTo[0]?.toLowerCase().slice(0, 2);
  const country = countryCode ? getCountryByCode(countryCode) : undefined;

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[color:var(--bone)]">
      <GardenNav />

      <main className="flex-1">
        {/* Hero band — big colored block */}
        <section className="pt-28">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <Link
              href={country ? `/country/${country.code}` : "/countries"}
              className="m3-ghost inline-flex mb-6"
            >
              <MaterialIcon name="arrow_back" style={{ fontSize: 18 }} />
              {country ? country.name : "All keepers"}
            </Link>

            <div
              className="tile-xl p-10 md:p-14 relative overflow-hidden"
              style={{ background: "var(--forest)", color: "var(--bone)" }}
            >
              <div
                className="absolute -top-16 -right-16 w-80 h-80"
                style={{ background: "var(--ochre)", clipPath: "url(#clipCookie)" }}
                aria-hidden
              />
              <div
                className="absolute bottom-0 -right-10 text-[14rem] md:text-[18rem] leading-none pointer-events-none select-none opacity-90 z-10"
                aria-hidden
              >
                {plant.emoji}
              </div>

              <div className="relative z-10 max-w-3xl">
                <span
                  className="chip"
                  style={{ background: "var(--bone)", color: "var(--ink)", borderColor: "transparent" }}
                >
                  <MaterialIcon name="eco" style={{ fontSize: 14 }} />
                  {plant.family}
                </span>
                <h1
                  className="mt-6 font-display tracking-brand leading-[0.92]"
                  style={{ color: "var(--bone)", fontSize: "clamp(2.8rem, 9vw, 7rem)" }}
                >
                  {plant.name}
                </h1>
                <p className="mt-2 text-xl italic text-[color:var(--bone)]/80">{plant.scientificName}</p>
                <p className="mt-6 text-lg leading-relaxed text-[color:var(--bone)]/90 max-w-2xl">
                  {plant.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {plant.tags.map(tag => (
                    <span
                      key={tag}
                      className="chip"
                      style={{
                        background: "rgba(246,239,224,0.15)",
                        color: "var(--bone)",
                        borderColor: "transparent",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 lg:grid-cols-4 gap-3">
              <FactCard icon="public" label="Native to" value={plant.nativeTo.join(", ")} tone="ochre" />
              <FactCard icon="forest" label="Habitats" value={plant.habitats.join(", ")} tone="sage" />
              <FactCard icon="eco" label="Parts used" value={plant.partsUsed.join(", ")} tone="acai" />
              <FactCard
                icon="auto_stories"
                label="Lineages"
                value={`${plant.indigenousKnowledge.length} documented`}
                tone="urucum"
              />
            </div>
          </div>
        </section>

        {/* Content sections */}
        <section className="py-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10 space-y-16">
            <Section icon="favorite" title="Medicinal Uses">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {plant.medicinalUses.map((use, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-5 tile"
                    style={{ background: "var(--urucum-container)" }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[color:var(--urucum)] flex items-center justify-center flex-shrink-0">
                      <MaterialIcon
                        name="favorite"
                        filled
                        style={{ fontSize: 18, color: "var(--bone)" }}
                      />
                    </div>
                    <span className="text-[color:var(--ink)] font-medium">{use}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section icon="science" title="Traditional Uses">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {plant.traditionalUses.map((use, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-5 tile"
                    style={{ background: "var(--ochre-container)" }}
                  >
                    <div className="w-10 h-10 rounded-xl bg-[color:var(--ochre)] flex items-center justify-center flex-shrink-0">
                      <MaterialIcon name="science" style={{ fontSize: 18, color: "var(--ink)" }} />
                    </div>
                    <span className="text-[color:var(--ink)] font-medium">{use}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section icon="diversity_3" title="Indigenous Knowledge">
              <div className="space-y-4">
                {plant.indigenousKnowledge.map((knowledge, i) => (
                  <article
                    key={i}
                    className="tile p-7 md:p-9 relative overflow-hidden"
                    style={{ background: "var(--sage-container)" }}
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <span className="chip chip-forest">{knowledge.practice}</span>
                      <span className="chip">
                        <MaterialIcon name="diversity_3" style={{ fontSize: 12 }} />
                        {knowledge.community}
                      </span>
                      <span className="chip">
                        <MaterialIcon name="location_on" style={{ fontSize: 12 }} />
                        {knowledge.region}
                      </span>
                    </div>
                    <p className="text-[color:var(--ink)] leading-relaxed text-lg">
                      {knowledge.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {knowledge.uses.map((use, j) => (
                        <span key={j} className="chip chip-outline">{use}</span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </Section>

            {graphData && (
              <Section icon="hub" title="Knowledge Connections">
                <p className="text-[color:var(--ink-soft)] mb-6 max-w-2xl">
                  A web of keepers, practices, and purposes bound to this plant. Hover to follow a thread.
                </p>
                <div className="tile-lg p-4 bg-[color:var(--canvas)]">
                  <KnowledgeGraph data={graphData} />
                </div>
              </Section>
            )}
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}

function Section({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-11 h-11 rounded-2xl bg-[color:var(--urucum)] flex items-center justify-center">
          <MaterialIcon name={icon} style={{ fontSize: 22, color: "var(--bone)" }} />
        </div>
        <h2 className="font-display text-3xl md:text-4xl text-[color:var(--ink)] tracking-brand">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function FactCard({
  icon,
  label,
  value,
  tone,
}: {
  icon: string;
  label: string;
  value: string;
  tone: "ochre" | "sage" | "acai" | "urucum";
}) {
  const bg =
    tone === "ochre"
      ? "var(--ochre-container)"
      : tone === "sage"
        ? "var(--sage-container)"
        : tone === "acai"
          ? "var(--acai-container)"
          : "var(--urucum-container)";
  return (
    <div className="p-5 tile" style={{ background: bg }}>
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] mb-2 text-[color:var(--ink-soft)]">
        <MaterialIcon name={icon} style={{ fontSize: 14 }} />
        {label}
      </div>
      <div className="text-sm text-[color:var(--ink)] font-medium leading-snug">{value}</div>
    </div>
  );
}
