import { countries, getStats } from "@/lib/plant-data";
import GardenNav from "@/components/GardenNav";
import CountryShelf from "@/components/CountryShelf";
import HomeFooter from "@/components/HomeFooter";
import MaterialIcon from "@/components/MaterialIcon";

export default function CountriesPage() {
  const stats = getStats();

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[color:var(--bone)]">
      <GardenNav />

      <main className="flex-1">
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24">
          <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
            <span className="chip chip-outline">
              <MaterialIcon name="public" style={{ fontSize: 14 }} />
              The Keepers
            </span>
            <h1
              className="mt-6 font-display tracking-brand text-[color:var(--ink)] leading-[0.92] max-w-5xl"
              style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}
            >
              Shelves of the <span className="italic text-[color:var(--urucum)]">world&apos;s</span>
              <br />indigenous pharmacies.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-[color:var(--ink-soft)] leading-relaxed">
              Each land holds plants and the people who hold the plants. Open a shelf to read what the
              elders remembered when the colonists forgot, or never knew.
            </p>
            <div className="mt-8 flex flex-wrap gap-2 text-sm">
              <span className="chip chip-ochre"><MaterialIcon name="public" style={{ fontSize: 14 }} /> {stats.totalCountries} lands</span>
              <span className="chip chip-sage"><MaterialIcon name="local_florist" style={{ fontSize: 14 }} /> {stats.totalPlants} plants</span>
              <span className="chip chip-acai"><MaterialIcon name="diversity_3" style={{ fontSize: 14 }} /> {stats.totalCommunities} communities</span>
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {countries.map((country, index) => (
                <CountryShelf key={country.code} country={country} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}
