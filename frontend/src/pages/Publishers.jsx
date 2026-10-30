import "../components/sections/home/GlobalPublishers/publishers.css";
import PublishersHero from "../components/sections/home/GlobalPublishers/PublishersHero";
import PublishersStats from "../components/sections/home/GlobalPublishers/PublishersStats";
import PublishersBenefits from "../components/sections/home/GlobalPublishers/PublishersBenefits";
import PublishersWhy from "../components/sections/home/GlobalPublishers/PublishersWhy";
import PublishersSteps from "../components/sections/home/GlobalPublishers/PublishersSteps";
import PublishersDashboard from "../components/sections/home/GlobalPublishers/PublishersDashboard";
import PublishersGenres from "../components/sections/home/GlobalPublishers/PublishersGenres";
import PublishersAuthors from "../components/sections/home/GlobalPublishers/PublishersAuthors";
import PublishersCTA from "../components/sections/home/GlobalPublishers/PublishersCTA";
export default function Publishers() { return <main className="publishers-page min-h-screen bg-[#020D18]"><PublishersHero /><PublishersStats /><PublishersBenefits /><PublishersWhy /><PublishersSteps /><PublishersDashboard /><PublishersGenres /><PublishersAuthors /><PublishersCTA /></main>; }
