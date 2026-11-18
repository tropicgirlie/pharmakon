import GardenNav from "@/components/GardenNav";
import HomeHero from "@/components/HomeHero";
import HomeHealing from "@/components/HomeHealing";
import HomeSpotlight from "@/components/HomeSpotlight";
import HomeKeepers from "@/components/HomeKeepers";
import HomeManifesto from "@/components/HomeManifesto";
import HomeFooter from "@/components/HomeFooter";
import { getStats } from "@/lib/plant-data";

export default function Home() {
  const stats = getStats();

  return (
    <div className="flex flex-col flex-1 bg-[color:var(--ink)]">
      <GardenNav variant="overlay" />
      <main className="flex-1">
        <HomeHero totalPlants={stats.totalPlants} totalCountries={stats.totalCountries} />
        <HomeHealing />
        <HomeSpotlight />
        <HomeKeepers />
        <HomeManifesto />
      </main>
      <HomeFooter />
    </div>
  );
}
