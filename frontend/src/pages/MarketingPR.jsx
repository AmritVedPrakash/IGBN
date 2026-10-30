import MarketingPRHero from "../components/sections/home/MarketingPR/MarketingPRHero";
import MarketingPRPlans from "../components/sections/home/MarketingPR/MarketingPRPlans";
import MarketingPRServices from "../components/sections/home/MarketingPR/MarketingPRServices";
import MarketingPRIndustries from "../components/sections/home/MarketingPR/MarketingPRIndustries";
import MarketingPRProcess from "../components/sections/home/MarketingPR/MarketingPRProcess";
import MarketingPRResults from "../components/sections/home/MarketingPR/MarketingPRResults";
import "../components/sections/home/MarketingPR/marketingPR.css";

export default function MarketingPR() {
  return (
    <main className="marketing-pr-page min-h-screen bg-[#020D18]">
      <MarketingPRHero />
      <MarketingPRPlans />
      <MarketingPRServices />
      <section className="bg-[#020D18] px-4 py-12 sm:px-6 lg:px-10">
        <div className="mx-auto grid max-w-[1500px] gap-4 lg:grid-cols-2">
          <MarketingPRIndustries />
          <MarketingPRProcess />
        </div>
      </section>
      <MarketingPRResults />
    </main>
  );
}
