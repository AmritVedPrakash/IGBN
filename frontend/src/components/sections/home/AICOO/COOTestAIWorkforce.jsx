import { useState } from "react";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  Clock,
  Compass,
  FileText,
  Lightbulb,
  Mail,
  MoreHorizontal,
  Pencil,
  Play,
  RotateCcw,
  Search,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  StopCircle,
  Target,
  Users,
  X,
  Zap,
} from "lucide-react";
import aiAgentImage from "../../../../assets/igbndivision/aiagent.png";
import clientNehaImage from "../../../../assets/marketing-pr/client-neha-sharma.jpg";
import clientRajivImage from "../../../../assets/marketing-pr/client-rajiv-mehta.jpg";
import clientMichaelImage from "../../../../assets/marketing-pr/client-michael-tan.jpg";

export default function COOTestAIWorkforce({
  currentStep = 18,
  totalSteps = 19,
  draftMessage,
  onBack,
  onSaveProgress,
  onNext,
}) {
  // Test scenario state
  const [scenario, setScenario] = useState("Find 10 potential distributors for our product in Germany.");
  const [isScenarioModalOpen, setIsScenarioModalOpen] = useState(false);
  const [customScenarioInput, setCustomScenarioInput] = useState(scenario);

  const scenarioPresets = [
    "Find 10 potential distributors for our product in Germany.",
    "Identify top 15 B2B buyers in Southeast Asia for organic snacks.",
    "Research European importers and draft introductory partner email.",
    "Map competitors and price points in UAE for our core product line.",
  ];

  return (
    <>
      {/* Registration Progress Header */}
      <header className="coo-progress-header">
        <div className="coo-step-label text-[16px]">STEP {currentStep} OF {totalSteps}</div>
        <div
          className="coo-progress-track"
          role="progressbar"
          aria-label="Registration progress"
          aria-valuemin={1}
          aria-valuemax={totalSteps}
          aria-valuenow={currentStep}
        >
          {Array.from({ length: totalSteps }, (_, index) => (
            <span
              className={`coo-progress-dot ${index < currentStep - 1 ? "is-complete" : ""} ${index === currentStep - 1 ? "is-current" : ""}`}
              key={index}
            />
          ))}
        </div>
        <span className="coo-progress-count text-[16px]">{currentStep} / {totalSteps}</span>
      </header>

      {/* Draft Notification Toast */}
      {draftMessage && (
        <div
          role="status"
          aria-live="polite"
          className="mb-4 p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-[16px] flex items-center justify-between shadow-lg"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
            <span>{draftMessage}</span>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-6 text-[#dce5ef]">
        {/* Top Header Section */}
        <section className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-[32px] md:text-[38px] font-serif font-bold text-[#f3ebdc] tracking-tight">
              <span className="text-[#e2b76a]">17.</span> Test Your AI Workforce
            </h1>
            <p className="text-[#a4b3c7] text-[16px] max-w-[700px] leading-relaxed">
              Let&apos;s run a real-world test to see how your AI employees work together.
              <br />
              Your AI team will complete a sample task using your company brain, tools and permissions.
            </p>
          </div>

          {/* AI COO Chat Bubble & Avatar */}
          <div className="flex items-center gap-3 shrink-0 self-end lg:self-start">
            <div className="relative bg-white text-[#0f172a] rounded-2xl px-5 py-3.5 shadow-2xl border border-blue-200/50 max-w-[340px]">
              <p className="text-[16px] leading-snug font-medium text-[#0f172a]">
                Your AI team is now working on the test scenario. You can monitor progress in real time. I&apos;ll keep you updated on the results.
              </p>
              <span className="block text-right font-bold text-[16px] text-[#0f172a] mt-1.5">
                — AI COO
              </span>
              <div
                className="hidden sm:block absolute -right-2 top-6 w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[10px] border-l-white"
                aria-hidden="true"
              />
            </div>

            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[#d69a2b]/70 shadow-[0_0_20px_rgba(214,154,43,0.35)] shrink-0 bg-[#0a1526]">
              <img
                src={aiAgentImage}
                alt="AI COO portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Test Scenario Strip */}
        <section className="rounded-2xl p-4 bg-[#0a1526]/90 border border-[#1e2e48] shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-amber-500/20 border border-amber-400/40 text-[#e2b76a] flex items-center justify-center shrink-0">
              <Target size={24} />
            </div>
            <div>
              <div className="text-[16px] font-bold text-[#e2b76a]">Test Scenario</div>
              <div className="text-[16px] text-white font-medium">{scenario}</div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsScenarioModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-[#0e1d34] hover:bg-[#162744] border border-[#2b3d5c] text-white font-medium text-[16px] flex items-center gap-2 cursor-pointer transition-colors shrink-0 self-start sm:self-auto"
          >
            <Pencil size={15} /> Change Scenario
          </button>
        </section>

        {/* Main Grid: Left Column (Live Test Progress + Activity Feed + Banners) & Right Column (Summary + Expected Output) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          {/* Left Column (8 cols) */}
          <div className="xl:col-span-8 flex flex-col gap-6">
            {/* 1. Live Test Progress */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <h2 className="text-[20px] font-bold text-[#e2b76a] mb-4">Live Test Progress</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Employee 1: AI Research Executive */}
                <div className="rounded-xl p-4 bg-gradient-to-b from-[#1b122e]/90 to-[#0e1728]/95 border border-[#a855f7]/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#a855f7]/50 shrink-0">
                          <img src={clientNehaImage} alt="" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="w-9 h-9 rounded-lg bg-purple-600/25 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0">
                        <Search size={18} />
                      </div>
                    </div>

                    <h3 className="text-[16px] font-bold text-white leading-tight">AI Research Executive</h3>
                    <p className="text-[16px] text-purple-300/80 mb-3">Research &amp; Intelligence</p>

                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-500/50 text-purple-300 text-[16px] font-medium">
                        <span className="w-5 h-5 rounded-full bg-purple-600/40 text-purple-200 text-[16px] font-bold flex items-center justify-center">
                          1
                        </span>
                        <Clock size={14} className="animate-spin text-purple-400" /> In Progress
                      </span>
                    </div>

                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-[16px] text-emerald-300">
                        <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                        <span>Searching companies...</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-emerald-300">
                        <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                        <span>Analyzing and filtering...</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <span className="w-3.5 h-3.5 rounded-full border border-purple-400/50 flex-shrink-0"></span>
                        <span>Preparing profiles...</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-[#8fa3bf]">
                        <span className="w-3.5 h-3.5 rounded-full border border-slate-600 flex-shrink-0"></span>
                        <span>Expected: 10–15 minutes</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Employee 2: AI Business Development Executive */}
                <div className="rounded-xl p-4 bg-gradient-to-b from-[#0e1d38]/90 to-[#0e1728]/95 border border-[#3b82f6]/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#3b82f6]/50 shrink-0">
                          <img src={clientRajivImage} alt="" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="w-9 h-9 rounded-lg bg-blue-600/25 border border-blue-500/40 text-blue-300 flex items-center justify-center shrink-0">
                        <BarChart3 size={18} />
                      </div>
                    </div>

                    <h3 className="text-[16px] font-bold text-white leading-tight">AI Business Development Executive</h3>
                    <p className="text-[16px] text-blue-300/80 mb-3">Business Development</p>

                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/50 text-blue-300 text-[16px] font-medium">
                        <span className="w-5 h-5 rounded-full bg-blue-600/40 text-blue-200 text-[16px] font-bold flex items-center justify-center">
                          2
                        </span>
                        <Clock size={14} /> Waiting
                      </span>
                    </div>

                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <span className="w-3.5 h-3.5 rounded-full border border-blue-400/50 flex-shrink-0"></span>
                        <span>Waiting for research output</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <span className="w-3.5 h-3.5 rounded-full border border-slate-600 flex-shrink-0"></span>
                        <span>Will review and qualify opportunities</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <span className="w-3.5 h-3.5 rounded-full border border-slate-600 flex-shrink-0"></span>
                        <span>Will prepare opportunity briefs</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-[#8fa3bf]">
                        <span className="w-3.5 h-3.5 rounded-full border border-slate-600 flex-shrink-0"></span>
                        <span>Expected: 5–10 minutes</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Employee 3: AI Email Outreach Executive */}
                <div className="rounded-xl p-4 bg-gradient-to-b from-[#0a231b]/90 to-[#0e1728]/95 border border-[#10b981]/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded-xl overflow-hidden border border-[#10b981]/50 shrink-0">
                          <img src={clientMichaelImage} alt="" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="w-9 h-9 rounded-lg bg-emerald-600/25 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shrink-0">
                        <Mail size={18} />
                      </div>
                    </div>

                    <h3 className="text-[16px] font-bold text-white leading-tight">AI Email Outreach Executive</h3>
                    <p className="text-[16px] text-emerald-300/80 mb-3">Sales &amp; Outreach</p>

                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-[16px] font-medium">
                        <span className="w-5 h-5 rounded-full bg-emerald-600/40 text-emerald-200 text-[16px] font-bold flex items-center justify-center">
                          3
                        </span>
                        <Clock size={14} /> Waiting
                      </span>
                    </div>

                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <span className="w-3.5 h-3.5 rounded-full border border-emerald-400/50 flex-shrink-0"></span>
                        <span>Waiting for qualified list</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <span className="w-3.5 h-3.5 rounded-full border border-slate-600 flex-shrink-0"></span>
                        <span>Will prepare email drafts</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <span className="w-3.5 h-3.5 rounded-full border border-slate-600 flex-shrink-0"></span>
                        <span>Will set follow-up sequence</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-[#8fa3bf]">
                        <span className="w-3.5 h-3.5 rounded-full border border-slate-600 flex-shrink-0"></span>
                        <span>Expected: 5–10 minutes</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Employee 4: AI COO */}
                <div className="rounded-xl p-4 bg-gradient-to-b from-[#241c0b]/90 to-[#0e1728]/95 border border-[#d69a2b]/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded-xl bg-[#d69a2b]/20 border border-[#d69a2b]/50 flex items-center justify-center text-[#d69a2b] shrink-0">
                          <Users size={22} />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-[16px] font-bold text-white leading-tight">AI COO</h3>
                    <p className="text-[16px] text-amber-300/80 mb-3">Monitoring &amp; Coordination</p>

                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 text-[16px] font-medium">
                        <span className="w-5 h-5 rounded-full bg-emerald-600/40 text-emerald-200 text-[16px] font-bold flex items-center justify-center">
                          4
                        </span>
                        <Zap size={14} className="fill-emerald-400 text-emerald-400" /> Active
                      </span>
                    </div>

                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-[16px] text-amber-200">
                        <Check size={14} className="text-[#e2b76a] shrink-0 stroke-[3]" />
                        <span>Coordinating AI team</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-amber-200">
                        <Check size={14} className="text-[#e2b76a] shrink-0 stroke-[3]" />
                        <span>Monitoring progress</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-amber-200">
                        <Check size={14} className="text-[#e2b76a] shrink-0 stroke-[3]" />
                        <span>Applying your rules</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-amber-200">
                        <Check size={14} className="text-[#e2b76a] shrink-0 stroke-[3]" />
                        <span>Preparing final report</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Live Activity Feed */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 text-[#e2b76a] flex items-center justify-center shrink-0">
                  <Sparkles size={18} />
                </div>
                <h2 className="text-[20px] font-bold text-[#e2b76a]">Live Activity Feed</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[620px]">
                  <thead>
                    <tr className="border-b border-[#1e2e48] text-[#8fa3bf]">
                      <th className="py-2.5 px-3 text-[16px] font-semibold w-[120px]">Time</th>
                      <th className="py-2.5 px-3 text-[16px] font-semibold w-[240px]">AI Employee</th>
                      <th className="py-2.5 px-3 text-[16px] font-semibold">Activity</th>
                      <th className="py-2.5 px-3 text-[16px] font-semibold w-[140px] text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#162338]">
                    {/* Row 1 */}
                    <tr className="hover:bg-[#0c1626]/50 transition-colors">
                      <td className="py-2.5 px-3 text-[16px] text-[#8fa3bf]">10:30 AM</td>
                      <td className="py-2.5 px-3">
                        <div className="flex items-center gap-2 text-[16px] text-white font-medium">
                          <Users size={16} className="text-[#e2b76a]" />
                          <span>AI COO</span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 text-[16px] text-[#cbd5e1]">Test scenario initiated.</td>
                      <td className="py-2.5 px-3 text-right">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] font-medium">
                          <Check size={12} className="stroke-[3]" /> Completed
                        </span>
                      </td>
                    </tr>

                    {/* Row 2 */}
                    <tr className="hover:bg-[#0c1626]/50 transition-colors">
                      <td className="py-2.5 px-3 text-[16px] text-[#8fa3bf]">10:31 AM</td>
                      <td className="py-2.5 px-3">
                        <div className="flex items-center gap-2 text-[16px] text-purple-300 font-medium">
                          <Search size={16} className="text-purple-400" />
                          <span>Research Executive</span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 text-[16px] text-[#cbd5e1]">Searching for companies in Germany...</td>
                      <td className="py-2.5 px-3 text-right">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-300 text-[16px] font-medium">
                          <Clock size={12} className="animate-spin" /> In Progress
                        </span>
                      </td>
                    </tr>

                    {/* Row 3 */}
                    <tr className="hover:bg-[#0c1626]/50 transition-colors">
                      <td className="py-2.5 px-3 text-[16px] text-[#8fa3bf]">10:32 AM</td>
                      <td className="py-2.5 px-3">
                        <div className="flex items-center gap-2 text-[16px] text-purple-300 font-medium">
                          <Search size={16} className="text-purple-400" />
                          <span>Research Executive</span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 text-[16px] text-[#cbd5e1]">Found 42 potential companies.</td>
                      <td className="py-2.5 px-3 text-right">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] font-medium">
                          <Check size={12} className="stroke-[3]" /> Completed
                        </span>
                      </td>
                    </tr>

                    {/* Row 4 */}
                    <tr className="hover:bg-[#0c1626]/50 transition-colors">
                      <td className="py-2.5 px-3 text-[16px] text-[#8fa3bf]">10:33 AM</td>
                      <td className="py-2.5 px-3">
                        <div className="flex items-center gap-2 text-[16px] text-purple-300 font-medium">
                          <Search size={16} className="text-purple-400" />
                          <span>Research Executive</span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 text-[16px] text-[#cbd5e1]">Analyzing and filtering based on your criteria...</td>
                      <td className="py-2.5 px-3 text-right">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-300 text-[16px] font-medium">
                          <Clock size={12} className="animate-spin" /> In Progress
                        </span>
                      </td>
                    </tr>

                    {/* Row 5 */}
                    <tr className="hover:bg-[#0c1626]/50 transition-colors">
                      <td className="py-2.5 px-3 text-[16px] text-[#8fa3bf]">10:34 AM</td>
                      <td className="py-2.5 px-3">
                        <div className="flex items-center gap-2 text-[16px] text-purple-300 font-medium">
                          <Search size={16} className="text-purple-400" />
                          <span>Research Executive</span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 text-[16px] text-[#cbd5e1]">Preparing detailed company profiles...</td>
                      <td className="py-2.5 px-3 text-right">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-950/70 border border-blue-500/40 text-blue-300 text-[16px] font-medium">
                          <Clock size={12} className="animate-spin" /> In Progress
                        </span>
                      </td>
                    </tr>

                    {/* Row 6 */}
                    <tr className="hover:bg-[#0c1626]/50 transition-colors">
                      <td className="py-2.5 px-3 text-[16px] text-[#8fa3bf]">10:34 AM</td>
                      <td className="py-2.5 px-3">
                        <div className="flex items-center gap-2 text-[16px] text-blue-300 font-medium">
                          <BarChart3 size={16} className="text-blue-400" />
                          <span>Business Development Executive</span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 text-[16px] text-[#cbd5e1]">Waiting for research output...</td>
                      <td className="py-2.5 px-3 text-right">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-600 text-slate-300 text-[16px] font-medium">
                          <Clock size={12} /> Waiting
                        </span>
                      </td>
                    </tr>

                    {/* Row 7 */}
                    <tr className="hover:bg-[#0c1626]/50 transition-colors">
                      <td className="py-2.5 px-3 text-[16px] text-[#8fa3bf]">10:34 AM</td>
                      <td className="py-2.5 px-3">
                        <div className="flex items-center gap-2 text-[16px] text-emerald-300 font-medium">
                          <Mail size={16} className="text-emerald-400" />
                          <span>Email Outreach Executive</span>
                        </div>
                      </td>
                      <td className="py-2.5 px-3 text-[16px] text-[#cbd5e1]">Waiting for qualified list...</td>
                      <td className="py-2.5 px-3 text-right">
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-slate-800 border border-slate-600 text-slate-300 text-[16px] font-medium">
                          <Clock size={12} /> Waiting
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3. Bottom Two Safety & Control Banners */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Banner 1: Safe testing environment */}
              <div className="rounded-2xl p-4 bg-[#0a1526]/90 border border-amber-500/30 shadow-md flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                  <Lightbulb size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[16px] font-bold text-white">
                    This is a safe testing environment
                  </h4>
                  <p className="text-[16px] text-[#cbd5e1] leading-relaxed">
                    No external emails will be sent. AI employees will work within your permissions and rules.
                  </p>
                </div>
              </div>

              {/* Banner 2: You can stop test anytime */}
              <div className="rounded-2xl p-4 bg-[#0a1526]/90 border border-blue-500/30 shadow-md flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 text-blue-300 flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[16px] font-bold text-white">
                    You can stop the test anytime
                  </h4>
                  <p className="text-[16px] text-[#cbd5e1] leading-relaxed">
                    Review the results and make changes before full activation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (4 cols) */}
          <div className="xl:col-span-4 flex flex-col gap-6">
            {/* Card 1: Test Summary */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#1e2e48]">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/40 text-blue-300 flex items-center justify-center shrink-0">
                  <FileText size={18} />
                </div>
                <h3 className="text-[18px] font-bold text-white">Test Summary</h3>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-center justify-between gap-2 py-1 border-b border-[#162338]">
                  <span className="text-[16px] text-[#8fa3bf]">Status</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-500/50 text-blue-300 text-[16px] font-medium">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping"></span>
                    Running
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 py-1 border-b border-[#162338]">
                  <span className="text-[16px] text-[#8fa3bf]">Started at</span>
                  <span className="text-[16px] text-white font-medium">24 Sep 2026, 10:30 AM</span>
                </div>

                <div className="flex items-center justify-between gap-2 py-1 border-b border-[#162338]">
                  <span className="text-[16px] text-[#8fa3bf]">Estimated time</span>
                  <span className="text-[16px] text-white font-medium">10 – 15 minutes</span>
                </div>

                <div className="flex flex-col gap-1 py-1 border-b border-[#162338]">
                  <span className="text-[16px] text-[#8fa3bf]">Scenario</span>
                  <span className="text-[16px] text-white font-medium leading-snug">
                    {scenario}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 py-1">
                  <span className="text-[16px] text-[#8fa3bf]">AI Employees</span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-[16px] font-medium">
                    <Zap size={14} className="fill-emerald-400 text-emerald-400" /> Active
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Expected Output */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#1e2e48]">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/40 text-blue-300 flex items-center justify-center shrink-0">
                  <BarChart3 size={18} />
                </div>
                <h3 className="text-[18px] font-bold text-white">Expected Output</h3>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-relaxed">
                  <Check size={18} className="text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>List of 10 qualified distributors</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-relaxed">
                  <Check size={18} className="text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Detailed company profiles</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-relaxed">
                  <Check size={18} className="text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Opportunity assessment</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-relaxed">
                  <Check size={18} className="text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Recommended outreach approach</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-relaxed">
                  <Check size={18} className="text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Draft email templates (with approvals)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Change Scenario Modal */}
        {isScenarioModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-[#0b1626] border border-[#d69a2b]/50 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1e2e48]">
                <h3 className="text-[20px] font-bold text-white flex items-center gap-2">
                  <Target size={20} className="text-[#e2b76a]" />
                  Choose Test Scenario
                </h3>
                <button
                  type="button"
                  onClick={() => setIsScenarioModalOpen(false)}
                  className="text-slate-400 hover:text-white cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="text-[16px] text-[#cbd5e1] mb-4">
                Select a test scenario or enter your custom objective to test your AI team in a simulated live run.
              </p>

              <div className="space-y-2.5 mb-5">
                {scenarioPresets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setCustomScenarioInput(preset)}
                    className={`w-full text-left p-3 rounded-xl border text-[16px] transition-all cursor-pointer ${
                      customScenarioInput === preset
                        ? "bg-amber-950/40 border-[#d69a2b] text-white"
                        : "bg-[#07101c] border-[#1e2e48] text-[#cbd5e1] hover:border-slate-500"
                    }`}
                  >
                    {preset}
                  </button>
                ))}
              </div>

              <div className="mb-5">
                <label className="block text-[16px] font-medium text-white mb-1.5">
                  Custom Scenario Description:
                </label>
                <textarea
                  rows={2}
                  value={customScenarioInput}
                  onChange={(e) => setCustomScenarioInput(e.target.value)}
                  className="w-full rounded-xl bg-[#07101c] border border-[#1e2e48] p-3 text-[16px] text-white focus:outline-hidden focus:border-[#d69a2b]"
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsScenarioModalOpen(false)}
                  className="px-5 py-2 rounded-xl bg-slate-800 text-white font-medium text-[16px] cursor-pointer hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (customScenarioInput.trim()) {
                      setScenario(customScenarioInput.trim());
                    }
                    setIsScenarioModalOpen(false);
                  }}
                  className="px-5 py-2 rounded-xl bg-[#d69a2b] text-[#020d18] font-bold text-[16px] cursor-pointer hover:bg-[#e0aa48]"
                >
                  Apply Scenario
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <footer className="flex items-center justify-between gap-3 pt-3 flex-wrap">
          <button
            className="coo-back-button min-w-[120px] text-[16px]"
            onClick={onBack}
            type="button"
          >
            <ArrowLeft size={18} /> Back
          </button>
          <button
            className="coo-next-button min-w-[260px] text-[16px] ml-auto"
            onClick={onNext}
            type="button"
          >
            View Test Results <ArrowRight size={18} />
          </button>
        </footer>
      </div>
    </>
  );
}
