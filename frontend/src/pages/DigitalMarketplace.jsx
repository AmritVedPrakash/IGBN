import { useState } from "react";
import DigitalMarketplaceHero from "../components/sections/home/DigitalMarketplace/DigitalMarketplaceHero";
import DigitalMarketplaceCatalog from "../components/sections/home/DigitalMarketplace/DigitalMarketplaceCatalog";
import "./DigitalMarketplace.css";

export default function DigitalMarketplace() {
  const [type, setType] = useState("Web");

  return (
    <main className="digital-marketplace">
      <DigitalMarketplaceHero onExplore={setType} />
      <DigitalMarketplaceCatalog type={type} onTypeChange={setType} />
    </main>
  );
}
