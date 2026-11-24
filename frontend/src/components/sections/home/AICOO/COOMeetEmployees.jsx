import { useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Building2,
  Check,
  CheckCircle2,
  Clock,
  Compass,
  FileCheck,
  FileText,
  Mail,
  Network,
  Save,
  Search,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  User,
  Users,
  Workflow,
  X,
} from "lucide-react";
import aiAgentImage from "../../../../assets/igbndivision/aiagent.png";
import clientNehaImage from "../../../../assets/marketing-pr/client-neha-sharma.jpg";
import clientRajivImage from "../../../../assets/marketing-pr/client-rajiv-mehta.jpg";
import clientMichaelImage from "../../../../assets/marketing-pr/client-michael-tan.jpg";

const employeeProfiles = [
  {
    id: "research_exec",
    name: "AI Research Executive",
    department: "Research & Intelligence",
    reportsTo: "AI COO",
    status: "Setup Required",
    image: clientNehaImage,
    accentColor: "purple",
    icon: Search,
    iconBg: "bg-purple-600/20 text-purple-400 border-purple-500/40",
    checkColor: "text-purple-400",
    borderGlow: "hover:border-purple-500/60",
    primaryResponsibility:
      "Research markets, companies, competitors, customers and business opportunities.",
    bullets: [
      "Market & industry research",
      "Find potential customers",
      "Competitor analysis",
      "Opportunity reports",
    ],
    details: {
      overview:
        "Continuously monitors target industries, analyzes competitors, and identifies potential high-value leads and buyers for your products.",
      tools: ["Web Research", "Company Registry", "Trade Data", "Market Reports"],
      kpis: ["Lead Accuracy: 98%", "Daily Insights Generated: 25+", "Market Trends Tracked"],
    },
  },
  {
    id: "bizdev_exec",
    name: "AI Business Development Executive",
    department: "Business Development",
    reportsTo: "AI COO",
    status: "Setup Required",
    image: clientRajivImage,
    accentColor: "blue",
    icon: BarChart3,
    iconBg: "bg-blue-600/20 text-blue-400 border-blue-500/40",
    checkColor: "text-blue-400",
    borderGlow: "hover:border-blue-500/60",
    primaryResponsibility:
      "Convert qualified opportunities into managed business opportunities.",
    bullets: [
      "Manage qualified opportunities",
      "Prepare meeting briefs",
      "Track follow-ups",
      "Support proposals and negotiations",
    ],
    details: {
      overview:
        "Structures deals, aligns proposals with customer requirements, drafts executive briefs, and ensures seamless progression through sales pipeline stages.",
      tools: ["CRM System", "Proposal Generator", "Deal Calculator", "Meeting Scheduler"],
      kpis: ["Pipeline Velocity", "Meeting Prep Time: < 5 mins", "Proposal Quality Score"],
    },
  },
  {
    id: "outreach_exec",
    name: "AI Email Outreach Executive",
    department: "Sales & Outreach",
    reportsTo: "AI COO",
    status: "Setup Required",
    image: clientMichaelImage,
    accentColor: "emerald",
    icon: Mail,
    iconBg: "bg-emerald-600/20 text-emerald-400 border-emerald-500/40",
    checkColor: "text-emerald-400",
    borderGlow: "hover:border-emerald-500/60",
    primaryResponsibility:
      "Execute approved email outreach and follow-up workflows.",
    bullets: [
      "Create personalized email sequences",
      "Run outreach campaigns",
      "Track responses",
      "Update CRM and report results",
    ],
    details: {
      overview:
        "Crafts highly personalized outreach communications tailored to buyer interests and pain points, strictly following company approval and tone rules.",
      tools: ["Email Engine", "Sequence Automation", "Response Parser", "CRM Sync"],
      kpis: ["Open Rate Target: 40%+", "Response Tracking: Real-time", "Zero Spam Guarantee"],
    },
  },
];

export default function COOMeetEmployees({
  currentStep = 13,
  totalSteps = 15,
  draftMessage,
  onBack,
  onSaveProgress,
  onNext,
}) {
  const [selectedModalEmployee, setSelectedModalEmployee] = useState(null);

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
        {/* Top Header Row with Title & Assistant Speech Bubble */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-1">
          <div className="flex-1">
            <h1 className="font-serif text-[32px] md:text-[40px] font-bold text-white tracking-tight leading-tight m-0">
              <span className="text-[#d69a2b] mr-2">12.</span> Meet Your AI Employees
            </h1>
            <p className="text-[16px] text-[#cbd5e1] mt-1.5 leading-relaxed m-0">
              Your AI COO has assembled your initial workforce.
            </p>
          </div>

          {/* AI COO Speech Bubble with Avatar */}
          <div className="flex items-center gap-3 p-1 max-w-lg flex-shrink-0">
            <div className="flex-1 bg-[#f8fafc] text-[#0f172a] rounded-xl rounded-br-xs p-3.5 shadow-lg">
              <p className="text-[16px] leading-snug m-0 text-[#0f172a]">
                Here are your AI employees. They each have a specific role, and I coordinate their work so they can deliver results together towards your business goals.
              </p>
              <div className="mt-1.5 text-right font-bold text-[16px] text-[#854d0e]">
                — AI COO
              </div>
            </div>
            <div className="w-[74px] h-[74px] flex-shrink-0">
              <img
                src={aiAgentImage}
                alt="AI Chief Operating Officer"
                className="w-full h-full rounded-full object-cover border-2 border-[#d69a2b] shadow-[0_0_12px_rgba(214,154,43,0.35)]"
              />
            </div>
          </div>
        </div>

        {/* Info Banner under header */}
        <div className="bg-[#0c2235]/90 border border-[rgba(214,154,43,0.35)] rounded-xl px-4 py-3 flex items-center gap-3 shadow-md">
          <div className="w-8 h-8 rounded-full bg-[rgba(214,154,43,0.15)] text-[#f0c168] grid place-items-center flex-shrink-0">
            <Users size={18} />
          </div>
          <p className="text-[16px] text-gray-200 m-0 leading-relaxed">
            These are the AI employees you have selected. Each employee has a specific role and works under the leadership of your AI COO.
          </p>
        </div>

        {/* 3 Columns Grid for the 3 AI Employees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {employeeProfiles.map((emp) => {
            const Icon = emp.icon;
            return (
              <section
                key={emp.id}
                className={`bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg flex flex-col justify-between transition-all ${emp.borderGlow}`}
              >
                <div>
                  {/* Top Row: Avatar + Title + Badge + Category Icon */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={emp.image}
                        alt={emp.name}
                        className="w-16 h-16 rounded-xl object-cover border-2 border-[#d69a2b]/70 flex-shrink-0 shadow-md"
                      />
                      <div className="min-w-0">
                        <h2 className="text-[18px] font-bold text-white m-0 leading-tight truncate">
                          {emp.name}
                        </h2>
                        <div className="text-[16px] text-[#94a3b8] mt-0.5 truncate">
                          {emp.department}
                        </div>
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 mt-1.5 rounded-full bg-[#1b4332] text-[#4ade80] border border-[#22c55e]/40 text-[16px] font-medium">
                          <Check size={12} strokeWidth={3} /> Purchased
                        </span>
                      </div>
                    </div>

                    {/* Square Category Icon Badge */}
                    <div
                      className={`w-9 h-9 rounded-xl border grid place-items-center flex-shrink-0 ${emp.iconBg}`}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  {/* Attributes Metadata Rows */}
                  <div className="bg-[#05121e]/85 border border-slate-700/60 rounded-xl p-3 flex flex-col gap-2 mb-4 text-[16px]">
                    {/* Reports to */}
                    <div className="flex items-center justify-between text-gray-300">
                      <div className="flex items-center gap-2 text-[#94a3b8]">
                        <User size={16} />
                        <span>Reports to</span>
                      </div>
                      <span className="font-bold text-white">{emp.reportsTo}</span>
                    </div>

                    {/* Status */}
                    <div className="flex items-center justify-between text-gray-300">
                      <div className="flex items-center gap-2 text-[#94a3b8]">
                        <Clock size={16} />
                        <span>Status</span>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[#f59e0b] font-medium">
                        <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                        {emp.status}
                      </span>
                    </div>

                    {/* Department */}
                    <div className="flex items-center justify-between text-gray-300">
                      <div className="flex items-center gap-2 text-[#94a3b8]">
                        <Building2 size={16} />
                        <span>Department</span>
                      </div>
                      <span className="text-gray-200">{emp.department}</span>
                    </div>
                  </div>

                  {/* Primary Responsibility */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-white font-bold text-[16px] mb-1.5">
                      <Target size={16} className="text-[#f0c168]" />
                      <span>Primary Responsibility</span>
                    </div>
                    <p className="text-[16px] text-gray-300 leading-relaxed m-0">
                      {emp.primaryResponsibility}
                    </p>
                  </div>

                  {/* 4 Bullet Points */}
                  <ul className="flex flex-col gap-2.5 p-0 m-0 list-none text-[16px] text-gray-300 mb-5">
                    {emp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-center gap-2.5">
                        <CheckCircle2 size={18} className={`${emp.checkColor} flex-shrink-0`} />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* View Details Button */}
                <button
                  type="button"
                  onClick={() => setSelectedModalEmployee(emp)}
                  className="w-full py-2.5 px-4 rounded-xl border border-[rgba(214,154,43,0.6)] hover:border-[#d69a2b] bg-[rgba(214,154,43,0.08)] hover:bg-[rgba(214,154,43,0.2)] text-[#f0c168] font-semibold text-[16px] flex items-center justify-center gap-2 cursor-pointer transition-all mt-auto"
                >
                  <span>View Details</span>
                  <ArrowRight size={16} />
                </button>
              </section>
            );
          })}
        </div>

        {/* Bottom Banner: How Your AI Team Works Together */}
        <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg">
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
              <Settings size={18} />
            </div>
            <div>
              <h2 className="text-[18px] font-bold text-white leading-tight m-0">
                How Your AI Team Works Together
              </h2>
            </div>
          </div>
          <p className="text-[16px] text-[#94a3b8] mb-4 leading-snug m-0">
            These AI employees collaborate under your AI COO to deliver end-to-end results.
          </p>

          {/* Sequential Workflow Cards with Arrows */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3">
            {/* Step 1: Research Executive */}
            <div className="bg-[#05121e]/95 border border-purple-800/40 rounded-xl p-3.5 flex items-start gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/40 text-purple-400 grid place-items-center flex-shrink-0">
                <Search size={20} />
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-white m-0 leading-tight mb-1">
                  Research Executive
                </h3>
                <p className="text-[16px] text-gray-300 m-0 leading-snug">
                  Finds and researches potential companies, markets and opportunities.
                </p>
              </div>
            </div>

            {/* Arrow 1 */}
            <div className="hidden md:flex justify-center text-purple-400 text-[22px] font-bold">
              →
            </div>

            {/* Step 2: Business Development */}
            <div className="bg-[#05121e]/95 border border-blue-800/40 rounded-xl p-3.5 flex items-start gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-400 grid place-items-center flex-shrink-0">
                <BarChart3 size={20} />
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-white m-0 leading-tight mb-1">
                  Business Development
                </h3>
                <p className="text-[16px] text-gray-300 m-0 leading-snug">
                  Reviews qualified opportunities and manages the opportunity.
                </p>
              </div>
            </div>

            {/* Arrow 2 */}
            <div className="hidden md:flex justify-center text-cyan-400 text-[22px] font-bold">
              →
            </div>

            {/* Step 3: Email Outreach */}
            <div className="bg-[#05121e]/95 border border-emerald-800/40 rounded-xl p-3.5 flex items-start gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 grid place-items-center flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-white m-0 leading-tight mb-1">
                  Email Outreach
                </h3>
                <p className="text-[16px] text-gray-300 m-0 leading-snug">
                  Contacts approved prospects according to your rules.
                </p>
              </div>
            </div>
          </div>
        </section>

        {draftMessage && (
          <p aria-live="polite" className="coo-customer-save-status">
            {draftMessage}
          </p>
        )}

        {/* Modal for Employee Details */}
        {selectedModalEmployee && (
          <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
            <div className="bg-[#071b2d] border border-[#d69a2b] rounded-2xl p-6 max-w-lg w-full shadow-2xl">
              <div className="flex items-start justify-between gap-3 mb-4 border-b border-gray-700/60 pb-3">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedModalEmployee.image}
                    alt={selectedModalEmployee.name}
                    className="w-14 h-14 rounded-xl object-cover border-2 border-[#d69a2b]"
                  />
                  <div>
                    <h3 className="text-[20px] font-bold text-white m-0 leading-tight">
                      {selectedModalEmployee.name}
                    </h3>
                    <div className="text-[16px] text-[#d69a2b] mt-0.5">
                      {selectedModalEmployee.department}
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedModalEmployee(null)}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-4 text-[16px] text-gray-200">
                <div>
                  <div className="font-bold text-white mb-1">Role Overview</div>
                  <p className="text-gray-300 leading-relaxed m-0">
                    {selectedModalEmployee.details.overview}
                  </p>
                </div>

                <div>
                  <div className="font-bold text-white mb-1.5">Tools &amp; Capabilities</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedModalEmployee.details.tools.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-[#0e273e] border border-blue-800/40 text-gray-200 text-[16px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="font-bold text-white mb-1.5">Performance Targets</div>
                  <ul className="flex flex-col gap-1.5 p-0 m-0 list-none text-gray-300">
                    {selectedModalEmployee.details.kpis.map((kpi, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check size={16} className="text-[#39b86b]" />
                        <span>{kpi}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  onClick={() => setSelectedModalEmployee(null)}
                  className="px-5 py-2 rounded-xl bg-[#d69a2b] text-[#020d18] font-bold text-[16px] cursor-pointer hover:bg-[#e0aa48]"
                >
                  Close
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
            className="coo-next-button min-w-[340px] text-[16px]"
            onClick={onNext}
            type="button"
          >
            Next: Connect Your AI Team to COO <ArrowRight size={18} />
          </button>
        </footer>
      </div>
    </>
  );
}
