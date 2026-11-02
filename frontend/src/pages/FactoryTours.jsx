import "../components/sections/home/FactoryTours/factoryTours.css";
import FactoryToursHero from "../components/sections/home/FactoryTours/FactoryToursHero";
import FactoryToursBenefits from "../components/sections/home/FactoryTours/FactoryToursBenefits";
import FactoryToursSteps from "../components/sections/home/FactoryTours/FactoryToursSteps";
import FactoryToursPricing from "../components/sections/home/FactoryTours/FactoryToursPricing";
import FactoryToursIndustries from "../components/sections/home/FactoryTours/FactoryToursIndustries";
import FactoryToursTrust from "../components/sections/home/FactoryTours/FactoryToursTrust";
import FactoryToursCTA from "../components/sections/home/FactoryTours/FactoryToursCTA";
export default function FactoryTours() {
  return (
    <main className="factory-tours-page min-h-screen bg-[#020D18]">
      <FactoryToursHero />
      <FactoryToursBenefits />
      <FactoryToursSteps />
      <FactoryToursPricing />
      <FactoryToursIndustries />
      <FactoryToursTrust />
      <FactoryToursCTA />
    </main>
  );
}
