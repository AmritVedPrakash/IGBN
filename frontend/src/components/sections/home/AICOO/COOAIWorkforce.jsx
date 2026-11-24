import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  Briefcase,
  Building,
  Check,
  CheckCircle2,
  ChevronRight,
  Crown,
  Database,
  ExternalLink,
  FileBarChart,
  FileCheck,
  FileSpreadsheet,
  FileText,
  GitBranch,
  Headphones,
  Inbox,
  Layers,
  LayoutGrid,
  Lightbulb,
  Mail,
  Megaphone,
  MessageSquare,
  Network,
  Package,
  Plus,
  Radio,
  Save,
  Search,
  Send,
  Server,
  Settings,
  Share2,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Sliders,
  Sparkles,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import aiAgentImage from "../../../../assets/igbndivision/aiagent.png";
import clientNehaImage from "../../../../assets/marketing-pr/client-neha-sharma.jpg";
import clientRajivImage from "../../../../assets/marketing-pr/client-rajiv-mehta.jpg";
import clientMichaelImage from "../../../../assets/marketing-pr/client-michael-tan.jpg";

// Additional available AI employees in Marketplace
const availableAddons = [
  {
    id: "sales_exec",
    name: "AI Sales Executive",
    department: "Sales & Customer Management",
    icon: ShoppingBag,
    color: "from-purple-600/30 to-purple-900/40 border-purple-500/40 text-purple-300",
  },
  {
    id: "marketing_exec",
    name: "AI Marketing Executive",
    department: "Marketing & Brand Growth",
    icon: Megaphone,
    color: "from-amber-600/30 to-amber-900/40 border-amber-500/40 text-amber-300",
  },
  {
    id: "support_exec",
    name: "AI Customer Support Executive",
    department: "Customer Support & Service",
    icon: Headphones,
    color: "from-blue-600/30 to-blue-900/40 border-blue-500/40 text-blue-300",
  },
  {
    id: "procurement_exec",
    name: "AI Procurement Executive",
    department: "Procurement & Supplier Management",
    icon: Package,
    color: "from-emerald-600/30 to-emerald-900/40 border-emerald-500/40 text-emerald-300",
  },
];

export default function COOAIWorkforce({
  currentStep = 12,
  totalSteps = 13,
  workforceData = {},
  draftMessage,
  onBack,
  onChange,
  onSaveProgress,
  onNext,
}) {
  const addedAddons = workforceData.addedAddons || [];
  const [marketplaceModalOpen, setMarketplaceModalOpen] = useState(false);

  const toggleAddon = (addonId) => {
    const isAdded = addedAddons.includes(addonId);
    const nextAddons = isAdded
      ? addedAddons.filter((id) => id !== addonId)
      : [...addedAddons, addonId];
    onChange("addedAddons", nextAddons);
  };

  const selectedCount = 3 + addedAddons.length;

  return (
    <>
      {/* Registration Progress Header */}
      <header className="coo-progress-header">
        <div className="coo-step-label">
          STEP {currentStep} OF {totalSteps}
        </div>
        <div
          aria-label="Registration progress"
          aria-valuemax={totalSteps}
          aria-valuemin={1}
          aria-valuenow={currentStep}
          className="coo-progress-track"
          role="progressbar"
        >
          {Array.from({ length: totalSteps }, (_, index) => (
            <span
              className={`coo-progress-dot ${
                index < currentStep - 1
                  ? "is-complete"
                  : index === currentStep - 1
                  ? "is-current"
                  : ""
              }`}
              key={index}
            />
          ))}
        </div>
        <span className="coo-progress-count">
          {currentStep} / {totalSteps}
        </span>
      </header>

      {/* Main Container */}
      <div className="flex flex-col gap-4 pt-2 text-[#f7f8fa] w-full box-border">
        {/* Title Header */}
        <header className="pb-1">
          <h1 className="font-serif text-[32px] md:text-[40px] font-bold text-white tracking-tight leading-tight m-0">
            <span className="text-[#d69a2b] mr-2">11.</span> Build Your AI Workforce
          </h1>
          <p className="text-[16px] text-[#cbd5e1] mt-1.5 leading-relaxed m-0">
            Choose the AI employees you want to work inside your company.
          </p>
        </header>

        {/* 2-Column Main Workspace */}
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.8fr)_minmax(320px,0.95fr)] gap-4 items-start">
          {/* LEFT COLUMN: Workforce Display Cards */}
          <div className="flex flex-col gap-5 min-w-0">
            {/* CARD 1: YOUR AI COO */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-[#d69a2b] to-[#f0c168] text-[#020d18] font-bold text-[16px] rounded-t-lg">
                <Users size={16} /> YOUR AI COO
              </div>
              <div className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl rounded-tl-none p-5 shadow-lg">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-4">
                  {/* Big COO Photo */}
                  <div className="w-32 h-36 md:w-36 md:h-40 flex-shrink-0 relative">
                    <img
                      src={aiAgentImage}
                      alt="AI Chief Operating Officer"
                      className="w-full h-full rounded-xl object-cover border-2 border-[#d69a2b] shadow-[0_0_15px_rgba(214,154,43,0.3)]"
                    />
                  </div>

                  {/* Title & Description */}
                  <div className="flex-1 text-center sm:text-left">
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-[rgba(214,154,43,0.2)] text-[#f0c168] grid place-items-center">
                          <Crown size={16} />
                        </div>
                        <h2 className="text-[22px] font-bold text-white m-0 leading-tight">
                          AI Chief Operating Officer
                        </h2>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b4332] text-[#4ade80] border border-[#22c55e]/40 text-[16px] font-medium">
                        <Check size={14} strokeWidth={3} /> Company Brain Ready
                      </span>
                    </div>

                    <div className="text-[16px] text-[#d69a2b] font-medium mb-2">
                      Your central coordinator
                    </div>

                    <p className="text-[16px] text-[#cbd5e1] leading-relaxed m-0">
                      Coordinates your AI workforce, ensures they work together and delivers results according to your business goals.
                    </p>
                  </div>
                </div>

                {/* 5 Feature Tiles */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 border-t border-slate-700/60">
                  <div className="bg-[#05121e]/90 border border-slate-700/60 rounded-lg p-2.5 flex flex-col items-center text-center justify-center min-h-[72px]">
                    <FileText size={18} className="text-[#f0c168] mb-1" />
                    <span className="text-[16px] text-gray-200 leading-tight">
                      Understands your Company Brain
                    </span>
                  </div>
                  <div className="bg-[#05121e]/90 border border-slate-700/60 rounded-lg p-2.5 flex flex-col items-center text-center justify-center min-h-[72px]">
                    <Network size={18} className="text-[#f0c168] mb-1" />
                    <span className="text-[16px] text-gray-200 leading-tight">
                      Assigns tasks to AI employees
                    </span>
                  </div>
                  <div className="bg-[#05121e]/90 border border-slate-700/60 rounded-lg p-2.5 flex flex-col items-center text-center justify-center min-h-[72px]">
                    <Sliders size={18} className="text-[#f0c168] mb-1" />
                    <span className="text-[16px] text-gray-200 leading-tight">
                      Monitors progress and quality
                    </span>
                  </div>
                  <div className="bg-[#05121e]/90 border border-slate-700/60 rounded-lg p-2.5 flex flex-col items-center text-center justify-center min-h-[72px]">
                    <GitBranch size={18} className="text-[#f0c168] mb-1" />
                    <span className="text-[16px] text-gray-200 leading-tight">
                      Brings important decisions to you
                    </span>
                  </div>
                  <div className="bg-[#05121e]/90 border border-slate-700/60 rounded-lg p-2.5 flex flex-col items-center text-center justify-center min-h-[72px]">
                    <FileBarChart size={18} className="text-[#f0c168] mb-1" />
                    <span className="text-[16px] text-gray-200 leading-tight">
                      Delivers results and reports
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* CARD 2: YOUR PURCHASED AI EMPLOYEES */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-gradient-to-r from-[#d69a2b] to-[#f0c168] text-[#020d18] font-bold text-[16px] rounded-t-lg">
                <Users size={16} /> YOUR PURCHASED AI EMPLOYEES
              </div>
              <div className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl rounded-tl-none p-5 shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* EMPLOYEE 1: AI Research Executive */}
                  <div className="bg-[#05121e]/90 border border-purple-800/40 rounded-xl p-4 flex flex-col justify-between shadow-md hover:border-purple-500/60 transition-all">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={clientNehaImage}
                          alt="AI Research Executive"
                          className="w-14 h-14 rounded-full object-cover border-2 border-purple-500 flex-shrink-0 shadow-sm"
                        />
                        <div className="min-w-0">
                          <h3 className="text-[18px] font-bold text-white m-0 leading-tight truncate">
                            AI Research Executive
                          </h3>
                          <div className="text-[16px] text-purple-300">
                            Research &amp; Intelligence
                          </div>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 mt-1 rounded-full bg-[#1b4332] text-[#4ade80] border border-[#22c55e]/40 text-[16px] font-medium">
                            <Check size={12} strokeWidth={3} /> Purchased
                          </span>
                        </div>
                      </div>

                      <p className="text-[16px] text-gray-300 leading-snug mb-3">
                        Research markets, companies, competitors, customers and business opportunities.
                      </p>

                      <ul className="flex flex-col gap-2 p-0 m-0 list-none text-[16px] text-gray-300">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-purple-400 flex-shrink-0" />
                          <span>Market &amp; industry research</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-purple-400 flex-shrink-0" />
                          <span>Find potential customers</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-purple-400 flex-shrink-0" />
                          <span>Competitor analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-purple-400 flex-shrink-0" />
                          <span>Opportunity reports</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* EMPLOYEE 2: AI Business Development Executive */}
                  <div className="bg-[#05121e]/90 border border-blue-800/40 rounded-xl p-4 flex flex-col justify-between shadow-md hover:border-blue-500/60 transition-all">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={clientRajivImage}
                          alt="AI Business Development Executive"
                          className="w-14 h-14 rounded-full object-cover border-2 border-blue-500 flex-shrink-0 shadow-sm"
                        />
                        <div className="min-w-0">
                          <h3 className="text-[18px] font-bold text-white m-0 leading-tight truncate">
                            AI Business Development Executive
                          </h3>
                          <div className="text-[16px] text-blue-300">
                            Business Development
                          </div>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 mt-1 rounded-full bg-[#1b4332] text-[#4ade80] border border-[#22c55e]/40 text-[16px] font-medium">
                            <Check size={12} strokeWidth={3} /> Purchased
                          </span>
                        </div>
                      </div>

                      <p className="text-[16px] text-gray-300 leading-snug mb-3">
                        Manage opportunities, prospect follow-ups, meetings, proposals and pipeline activity.
                      </p>

                      <ul className="flex flex-col gap-2 p-0 m-0 list-none text-[16px] text-gray-300">
                        <li className="flex items-center gap-2">
                          <Target size={16} className="text-blue-400 flex-shrink-0" />
                          <span>Manage qualified opportunities</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Target size={16} className="text-blue-400 flex-shrink-0" />
                          <span>Prepare meeting briefs</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Target size={16} className="text-blue-400 flex-shrink-0" />
                          <span>Track follow-ups</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Target size={16} className="text-blue-400 flex-shrink-0" />
                          <span>Support proposals and negotiations</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* EMPLOYEE 3: AI Email Outreach Executive */}
                  <div className="bg-[#05121e]/90 border border-emerald-800/40 rounded-xl p-4 flex flex-col justify-between shadow-md hover:border-emerald-500/60 transition-all">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <img
                          src={clientMichaelImage}
                          alt="AI Email Outreach Executive"
                          className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500 flex-shrink-0 shadow-sm"
                        />
                        <div className="min-w-0">
                          <h3 className="text-[18px] font-bold text-white m-0 leading-tight truncate">
                            AI Email Outreach Executive
                          </h3>
                          <div className="text-[16px] text-emerald-300">
                            Sales &amp; Outreach
                          </div>
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 mt-1 rounded-full bg-[#1b4332] text-[#4ade80] border border-[#22c55e]/40 text-[16px] font-medium">
                            <Check size={12} strokeWidth={3} /> Purchased
                          </span>
                        </div>
                      </div>

                      <p className="text-[16px] text-gray-300 leading-snug mb-3">
                        Prepare and manage approved outbound email communication and follow-ups.
                      </p>

                      <ul className="flex flex-col gap-2 p-0 m-0 list-none text-[16px] text-gray-300">
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                          <span>Create personalized email sequences</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                          <span>Run outreach campaigns</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                          <span>Track responses</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                          <span>Update CRM and report results</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Banner: Create a stronger workforce over time */}
            <div className="bg-gradient-to-r from-[#0c2235] via-[#081827] to-[#04121e] border border-[rgba(214,154,43,0.4)] rounded-xl p-4 flex items-center justify-between gap-4 shadow-lg">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b] grid place-items-center text-[#f0c168] flex-shrink-0">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-[#f0c168] m-0 leading-tight">
                    Create a stronger workforce over time.
                  </h3>
                  <p className="text-[16px] text-gray-300 mt-1 m-0 leading-relaxed">
                    You can start with your current AI employees and add more later as your business grows. All AI employees will work together under the coordination of your AI COO.
                  </p>
                </div>
              </div>

              {/* Graphic Rising Bars */}
              <div className="hidden sm:flex items-end gap-1.5 h-12 flex-shrink-0 opacity-80">
                <div className="w-2.5 h-4 bg-[#d69a2b]/40 rounded-t"></div>
                <div className="w-2.5 h-6 bg-[#d69a2b]/60 rounded-t"></div>
                <div className="w-2.5 h-8 bg-[#d69a2b]/80 rounded-t"></div>
                <div className="w-2.5 h-10 bg-[#d69a2b] rounded-t"></div>
                <div className="w-2.5 h-12 bg-[#f0c168] rounded-t shadow-[0_0_8px_rgba(240,193,104,0.6)]"></div>
              </div>
            </div>

            {draftMessage && (
              <p aria-live="polite" className="coo-customer-save-status">
                {draftMessage}
              </p>
            )}
          </div>

          {/* RIGHT ASIDE: Speech bubble + Selected Workforce + Add More */}
          <aside className="flex flex-col gap-4 min-w-0">
            {/* Top Assistant Speech Bubble + Avatar */}
            <div className="flex items-center justify-between gap-3 p-1">
              <div className="flex-1 bg-[#f8fafc] text-[#0f172a] rounded-xl rounded-br-xs p-3.5 shadow-lg">
                <p className="text-[16px] leading-snug m-0 text-[#0f172a]">
                  Based on your Company Brain, I've recommended the most relevant AI employees for your business. You can add more anytime.
                </p>
                <div className="mt-1.5 text-right font-bold text-[16px] text-[#854d0e]">
                  — AI COO
                </div>
              </div>
              <div className="w-[78px] h-[78px] flex-shrink-0">
                <img
                  src={aiAgentImage}
                  alt="AI Chief Operating Officer"
                  className="w-full h-full rounded-full object-cover border-2 border-[#d69a2b] shadow-[0_0_12px_rgba(214,154,43,0.35)]"
                />
              </div>
            </div>

            {/* Card 1: Your Selected AI Workforce */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4.5 shadow-lg">
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-8 h-8 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168]">
                  <Users size={18} />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-white m-0 leading-tight">
                    Your Selected AI Workforce
                  </h3>
                  <div className="text-[16px] text-[#94a3b8] mt-0.5">
                    {selectedCount} AI employees selected
                  </div>
                </div>
              </div>

              {/* List of Selected Members */}
              <div className="flex flex-col gap-2.5 mt-3 pt-3 border-t border-slate-700/60">
                {/* 1. COO */}
                <div className="flex items-center justify-between gap-2 text-[16px] text-white">
                  <div className="flex items-center gap-2 min-w-0">
                    <Check size={16} className="text-[#4ade80] flex-shrink-0" strokeWidth={3} />
                    <span className="truncate">AI Chief Operating Officer</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1b4332] text-[#4ade80] border border-[#22c55e]/40 text-[16px] font-medium flex-shrink-0">
                    Ready
                  </span>
                </div>

                {/* 2. Research Exec */}
                <div className="flex items-center justify-between gap-2 text-[16px] text-white">
                  <div className="flex items-center gap-2 min-w-0">
                    <Check size={16} className="text-[#4ade80] flex-shrink-0" strokeWidth={3} />
                    <span className="truncate">AI Research Executive</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1b4332] text-[#4ade80] border border-[#22c55e]/40 text-[16px] font-medium flex-shrink-0">
                    Purchased
                  </span>
                </div>

                {/* 3. Biz Dev Exec */}
                <div className="flex items-center justify-between gap-2 text-[16px] text-white">
                  <div className="flex items-center gap-2 min-w-0">
                    <Check size={16} className="text-[#4ade80] flex-shrink-0" strokeWidth={3} />
                    <span className="truncate">AI Business Development Executive</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1b4332] text-[#4ade80] border border-[#22c55e]/40 text-[16px] font-medium flex-shrink-0">
                    Purchased
                  </span>
                </div>

                {/* 4. Email Outreach Exec */}
                <div className="flex items-center justify-between gap-2 text-[16px] text-white">
                  <div className="flex items-center gap-2 min-w-0">
                    <Check size={16} className="text-[#4ade80] flex-shrink-0" strokeWidth={3} />
                    <span className="truncate">AI Email Outreach Executive</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#1b4332] text-[#4ade80] border border-[#22c55e]/40 text-[16px] font-medium flex-shrink-0">
                    Purchased
                  </span>
                </div>

                {/* Dynamically added Addons */}
                {addedAddons.map((addonId) => {
                  const item = availableAddons.find((a) => a.id === addonId);
                  if (!item) return null;
                  return (
                    <div
                      key={addonId}
                      className="flex items-center justify-between gap-2 text-[16px] text-white"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <Check size={16} className="text-[#4ade80] flex-shrink-0" strokeWidth={3} />
                        <span className="truncate">{item.name}</span>
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#1b4332] text-[#4ade80] border border-[#22c55e]/40 text-[16px] font-medium flex-shrink-0">
                        Added
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Card 2: Add More AI Employees */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4.5 shadow-lg">
              <div className="flex items-center gap-2.5 mb-1">
                <div className="w-8 h-8 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168]">
                  <Plus size={18} />
                </div>
                <div>
                  <h3 className="text-[18px] font-bold text-white m-0 leading-tight">
                    Add More AI Employees
                  </h3>
                </div>
              </div>
              <p className="text-[16px] text-[#cbd5e1] leading-relaxed mb-3.5 m-0">
                You can add more AI employees anytime from the AI Employee Marketplace.
              </p>

              {/* Browse Marketplace Button */}
              <button
                type="button"
                onClick={() => setMarketplaceModalOpen(true)}
                className="w-full py-2.5 px-4 rounded-xl border border-[#d69a2b] bg-[rgba(214,154,43,0.08)] hover:bg-[rgba(214,154,43,0.2)] text-[#f0c168] font-bold text-[16px] flex items-center justify-center gap-2 cursor-pointer transition-all mb-4"
              >
                <span>Browse AI Employee Marketplace</span>
                <ArrowRight size={18} />
              </button>

              <div className="text-[16px] text-gray-300 font-medium mb-3">
                Popular additional AI employees for your business:
              </div>

              {/* 4 Additional Employee Rows */}
              <div className="flex flex-col gap-2.5">
                {availableAddons.map((addon) => {
                  const Icon = addon.icon;
                  const isAdded = addedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      className="flex items-center justify-between gap-2.5 bg-[#05121e]/90 border border-slate-700/60 rounded-xl p-2.5 hover:border-[#d69a2b]/50 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className={`w-9 h-9 rounded-lg bg-gradient-to-br ${addon.color} border grid place-items-center flex-shrink-0`}
                        >
                          <Icon size={18} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-[16px] font-bold text-white leading-tight truncate">
                            {addon.name}
                          </div>
                          <div className="text-[16px] text-[#94a3b8] truncate">
                            {addon.department}
                          </div>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleAddon(addon.id)}
                        className={`w-8 h-8 rounded-lg border grid place-items-center cursor-pointer transition-colors flex-shrink-0 ${
                          isAdded
                            ? "bg-[#39b86b] border-[#39b86b] text-[#020d18]"
                            : "border-slate-600 hover:border-[#d69a2b] text-gray-300 hover:text-white"
                        }`}
                        title={isAdded ? "Remove from selection" : "Add AI employee"}
                      >
                        {isAdded ? <Check size={16} strokeWidth={3} /> : <Plus size={16} />}
                      </button>
                    </div>
                  );
                })}
              </div>
            </section>
          </aside>
        </div>

        {/* Modal for Marketplace Preview */}
        {marketplaceModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
            <div className="bg-[#071b2d] border border-[#d69a2b] rounded-xl p-5 max-w-lg w-full shadow-2xl">
              <div className="flex items-center justify-between mb-3 border-b border-gray-700 pb-2.5">
                <h3 className="text-[20px] font-bold text-white m-0">AI Employee Marketplace</h3>
                <button
                  type="button"
                  onClick={() => setMarketplaceModalOpen(false)}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>
              <p className="text-[16px] text-gray-300 mb-4">
                Explore specialized AI workers ready to plug into your business. You can add them now or anytime after setup.
              </p>
              <div className="flex flex-col gap-2 mb-4">
                {availableAddons.map((addon) => {
                  const isAdded = addedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      className="flex items-center justify-between p-2.5 bg-[#031120] border border-gray-700 rounded-lg text-[16px]"
                    >
                      <span className="text-white font-medium">{addon.name}</span>
                      <button
                        type="button"
                        onClick={() => toggleAddon(addon.id)}
                        className={`px-3 py-1 rounded text-[16px] font-bold cursor-pointer ${
                          isAdded
                            ? "bg-[#39b86b] text-[#020d18]"
                            : "bg-[#d69a2b] text-[#020d18] hover:bg-[#e0aa48]"
                        }`}
                      >
                        {isAdded ? "Added" : "+ Add"}
                      </button>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setMarketplaceModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-[#d69a2b] text-[#020d18] font-bold text-[16px] cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <footer className="flex items-center gap-3 pt-3 flex-wrap">
          <button
            className="coo-back-button min-w-[120px] text-[16px]"
            onClick={onBack}
            type="button"
          >
            <ArrowLeft size={18} /> Back
          </button>
          <button
            className="coo-save-button ml-auto text-[16px]"
            onClick={onSaveProgress}
            type="button"
          >
            <Save size={18} /> Save &amp; Continue Later
          </button>
          <button
            className="coo-next-button min-w-[300px] text-[16px]"
            onClick={onNext}
            type="button"
          >
            Next: Meet Your AI Employees <ArrowRight size={18} />
          </button>
        </footer>
      </div>
    </>
  );
}
