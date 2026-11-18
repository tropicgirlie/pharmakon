"use client";

import { useState } from "react";
import { searchPlants, getAllPlants, getStats } from "@/lib/plant-data";
import GardenNav from "@/components/GardenNav";
import PlantCard from "@/components/PlantCard";
import HomeFooter from "@/components/HomeFooter";
import MaterialIcon from "@/components/MaterialIcon";

export default function ExplorePage() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const stats = getStats();
  const allPlants = getAllPlants();

  const filteredPlants = query.trim()
    ? searchPlants(query)
    : activeFilter
      ? allPlants.filter(p =>
          p.tags.includes(activeFilter) ||
          p.medicinalUses.some(u => u.toLowerCase().includes(activeFilter)) ||
          p.nativeTo.some(r => r.toLowerCase().includes(activeFilter))
        )
      : allPlants;

  const allTags = [...new Set(allPlants.flatMap(p => p.tags))].slice(0, 20);
  const allRegions = [...new Set(allPlants.flatMap(p => p.nativeTo))];

  return (
    <div className="flex flex-col flex-1 min-h-screen bg-[color:var(--bone)]">
      <GardenNav />

      <main className="flex-1">
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            <span className="chip chip-outline">
              <MaterialIcon name="auto_stories" style={{ fontSize: 14 }} />
              The Archive
            </span>
            <h1
              className="mt-6 font-display tracking-brand text-[color:var(--ink)] leading-[0.92] max-w-5xl"
              style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)" }}
            >
              Search the <span className="italic text-[color:var(--urucum)]">whole archive.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[color:var(--ink-soft)] leading-relaxed">
              {stats.totalPlants} plants, cross-referenced by use, origin, and the communities who authored
              the knowledge.
            </p>

            <div className="mt-10 relative max-w-2xl">
              <MaterialIcon
                name="search"
                style={{ fontSize: 22 }}
                className="absolute left-6 top-1/2 -translate-y-1/2 text-[color:var(--ink-soft)]"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Try ‘ayahuasca’, ‘Shipibo’, ‘fever’, ‘Kenya’…"
                className="w-full pl-14 pr-14 py-5 rounded-full bg-[color:var(--canvas)] border-2 border-transparent text-[color:var(--ink)] placeholder:text-[color:var(--ink-muted)] focus:outline-none focus:border-[color:var(--urucum)] transition-colors text-base"
              />
              {query && (
                <button
                  onClick={() => setQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-[color:var(--ink-soft)] hover:bg-[color:var(--ink)]/8"
                  aria-label="Clear"
                >
                  <MaterialIcon name="close" style={{ fontSize: 18 }} />
                </button>
              )}
            </div>
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
            {!query && (
              <div className="mb-10 space-y-5">
                <FilterRow
                  icon="label"
                  label="By property"
                  items={allTags}
                  active={activeFilter}
                  onToggle={(v) => setActiveFilter(activeFilter === v ? null : v)}
                />
                <FilterRow
                  icon="public"
                  label="By origin"
                  items={allRegions}
                  active={activeFilter}
                  onToggle={(v) => setActiveFilter(activeFilter === v.toLowerCase() ? null : v.toLowerCase())}
                  valueMap={(v) => v.toLowerCase()}
                />
              </div>
            )}

            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-[color:var(--ink-soft)]">
                <span className="font-display text-2xl text-[color:var(--ink)] tracking-brand">
                  {filteredPlants.length}
                </span>{" "}
                {filteredPlants.length === 1 ? "entry" : "entries"}
              </p>
              {(query || activeFilter) && (
                <button
                  onClick={() => { setQuery(""); setActiveFilter(null); }}
                  className="m3-ghost"
                >
                  <MaterialIcon name="restart_alt" style={{ fontSize: 16 }} />
                  Reset
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredPlants.map((plant, index) => (
                <PlantCard key={plant.id} plant={plant} index={index} />
              ))}
            </div>

            {filteredPlants.length === 0 && (
              <div className="text-center py-20">
                <div className="w-20 h-20 mx-auto rounded-full bg-[color:var(--canvas)] flex items-center justify-center mb-4">
                  <MaterialIcon name="search_off" style={{ fontSize: 32, color: "var(--ink-soft)" }} />
                </div>
                <p className="text-lg text-[color:var(--ink-soft)]">Nothing in the archive matches that yet.</p>
                <button
                  onClick={() => { setQuery(""); setActiveFilter(null); }}
                  className="mt-4 m3-outline"
                >
                  <MaterialIcon name="restart_alt" style={{ fontSize: 18 }} />
                  See all plants
                </button>
              </div>
            )}
          </div>
        </section>
      </main>

      <HomeFooter />
    </div>
  );
}

function FilterRow({
  icon,
  label,
  items,
  active,
  onToggle,
  valueMap,
}: {
  icon: string;
  label: string;
  items: string[];
  active: string | null;
  onToggle: (v: string) => void;
  valueMap?: (v: string) => string;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3 text-sm text-[color:var(--ink-soft)]">
        <MaterialIcon name={icon} style={{ fontSize: 16, color: "var(--urucum)" }} />
        <span className="uppercase tracking-[0.22em] text-xs">{label}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map(v => {
          const compareValue = valueMap ? valueMap(v) : v;
          const isActive = active === compareValue;
          return (
            <button
              key={v}
              onClick={() => onToggle(v)}
              className={`chip ${isActive ? "chip-filled" : ""}`}
            >
              {v}
            </button>
          );
        })}
      </div>
    </div>
  );
}
