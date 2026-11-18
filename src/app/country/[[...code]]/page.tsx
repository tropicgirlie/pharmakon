import { notFound } from "next/navigation";
import Link from "next/link";
import { countries, getCountryByCode, getPlantsByCountry } from "@/lib/plant-data";
import GardenNav from "@/components/GardenNav";
import PlantCard from "@/components/PlantCard";
import HomeFooter from "@/components/HomeFooter";
import MaterialIcon from "@/components/MaterialIcon";

interface Props {
  params: Promise<{ code: string[] }>;
}

export async function generateStaticParams() {
  return countries.map(c => ({ code: [c.code] }));
}

export default async function CountryPage({ params }: Props) {
  const resolved = await params;
  const code = resolved.code?.[0];
  if (!code) notFound();

  const country = getCountryByCode(code);
  if (!country) notFound();

  const plants = getPlantsByCountry(code);

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[color:var(--bone)]">
      <GardenNav />

      <main className="flex-1">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <Link href="/countries" className="m3-ghost inline-flex mb-8">
              <MaterialIcon name="arrow_back" style={{ fontSize: 18 }} />
              All keepers
            </Link>

            <div className="flex items-start gap-6 flex-wrap">
              <span className="text-7xl md:text-8xl">{country.emoji}</span>
              <div className="flex-1 min-w-0">
                <span className="chip chip-ochre">
                  <MaterialIcon name="public" style={{ fontSize: 14 }} />
                  {country.region}
                </span>
                <h1
                  className="mt-5 font-display tracking-brand text-[color:var(--ink)] leading-[0.92]"
                  style={{ fontSize: "clamp(2.8rem, 8vw, 6rem)" }}
                >
                  {country.name}
                </h1>
                <p className="mt-5 text-lg text-[color:var(--ink-soft)] max-w-3xl leading-relaxed">
                  {country.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="chip chip-sage">
                    <MaterialIcon name="thermostat" style={{ fontSize: 14 }} /> {country.climate}
                  </span>
                  <span className="chip chip-acai">
                    <MaterialIcon name="local_florist" style={{ fontSize: 14 }} /> {plants.length} plants
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-10 h-10 rounded-2xl bg-[color:var(--urucum)] flex items-center justify-center">
                <MaterialIcon name="eco" filled style={{ fontSize: 20, color: "var(--bone)" }} />
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-[color:var(--ink)] tracking-brand">
                Plants of {country.name}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {plants.map((plant, index) => (
                <PlantCard key={plant.id} plant={plant} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
