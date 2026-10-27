import { useEffect } from "react";
import { ArrowLeft, BarChart3, Lightbulb, Map, PackageSearch, UsersRound } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import CompanyProfileSidebar from "./CompanyProfileSidebar";
import ExecutiveSummary from "./ExecutiveSummary";
import { BuyerSegments, KeyMarketInsights } from "./MarketInsightsPanel";
import ProductCategoryAnalysis from "./ProductCategoryAnalysis";
import { BuyerPotential } from "./TopMarkets";
import TopMarkets from "./TopMarkets";

const demoCompany = {
  name: "ABC Leather Goods Pvt. Ltd.",
  email: "abcompany@gmail.com",
  country: "India",
  fileName: "",
  businessType: "Exporter",
  website: "www.abcleathergoods.com",
};

const tabs = [
  { label: "Overview", icon: BarChart3, href: "#executive-summary" },
  { label: "Top Markets", icon: Map, href: "#top-markets" },
  { label: "Buyer Opportunities", icon: UsersRound, href: "#buyer-opportunities" },
  { label: "Market Insights", icon: Lightbulb, href: "#market-insights" },
  { label: "Product Positioning", icon: PackageSearch, href: "#product-positioning" },
  { label: "Recommendations", icon: BarChart3, href: "#recommendations" },
];

export default function CompanyAnalysisDashboard() {
  const { state } = useLocation();
  const formData = state?.companyAnalysis || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const company = {
    ...demoCompany,
    name: formData.companyName?.trim() || demoCompany.name,
    email: formData.email?.trim() || demoCompany.email,
    country: formData.country?.trim() || demoCompany.country,
    fileName: formData.fileName || demoCompany.fileName,
    businessType:
      formData.export && formData.import
        ? "Exporter & Importer"
        : formData.import
          ? "Importer"
          : formData.export
            ? "Exporter"
            : "Not specified",
    website: formData.companyName?.trim()
      ? `${formData.companyName.trim().toLowerCase().replace(/[^a-z0-9]+/g, "")}.com`
      : demoCompany.website,
  };

  return (
    <main className="min-h-screen bg-[#020D18] px-3 py-6 text-[#F4F5F6] sm:px-5 lg:px-8 lg:py-8">
      <div className="mx-auto max-w-[1650px]">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[15px] font-semibold uppercase tracking-[0.18em] text-[#D69A2B]">
              IGBN market intelligence
            </p>
            <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
              Company Analysis
            </h1>
          </div>
          <Link
            to="/"
            className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-[#725021]/70 px-3 text-[15px] font-medium text-[#D69A2B] transition-colors hover:border-[#D69A2B] hover:bg-[#D69A2B]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D69A2B]"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to home
          </Link>
        </div>

        <nav
          aria-label="Company analysis sections"
          className="mb-4 flex gap-1 overflow-x-auto rounded-xl border border-[#725021]/60 bg-[#03111F] p-1.5"
        >
          {tabs.map(({ label, icon: Icon, href }, index) => (
            <a
              key={label}
              href={href}
              className={`inline-flex min-h-10 shrink-0 items-center gap-2 rounded-lg px-3 text-[15px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D69A2B] sm:px-4 ${
                index === 0
                  ? "bg-[#D69A2B] text-[#07111B]"
                  : "text-[#C4CDD5] hover:bg-[#102438] hover:text-[#E6B75E]"
              }`}
            >
              <Icon size={15} aria-hidden="true" />
              {label}
            </a>
          ))}
        </nav>

        <div className="grid items-stretch gap-4 xl:grid-cols-[245px_minmax(0,1fr)_290px]">
          <CompanyProfileSidebar company={company} />

          <div className="grid min-w-0 gap-4">
            <ExecutiveSummary companyName={company.name} />
            <TopMarkets />
            <ProductCategoryAnalysis />
          </div>

          <div className="grid min-w-0 gap-4 md:grid-cols-2 xl:grid-cols-1">
            <KeyMarketInsights />
            <BuyerPotential />
            <BuyerSegments />
          </div>
        </div>

        <p className="mt-4 text-center text-[15px] leading-5 text-[#8F9BA7]">
          <span className="inline-flex items-center gap-1.5">
            <Lightbulb size={13} aria-hidden="true" className="text-[#D69A2B]" />
            This is a static preview with illustrative sample market data. Live
            analysis will be connected to the API later.
          </span>
        </p>
      </div>
    </main>
  );
}
