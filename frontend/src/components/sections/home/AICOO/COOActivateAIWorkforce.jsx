import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Calendar,
  Check,
  CheckCircle2,
  FileCheck,
  FileText,
  Globe2,
  Lightbulb,
  Link2,
  Mail,
  MessageSquare,
  Play,
  Rocket,
  Search,
  Settings,
  Shield,
  ShieldCheck,
  Sparkles,
  Users,
  X,
  Zap,
} from "lucide-react";
import aiAgentImage from "../../../../assets/igbndivision/aiagent.png";
import clientNehaImage from "../../../../assets/marketing-pr/client-neha-sharma.jpg";
import clientRajivImage from "../../../../assets/marketing-pr/client-rajiv-mehta.jpg";
import clientMichaelImage from "../../../../assets/marketing-pr/client-michael-tan.jpg";

export default function COOActivateAIWorkforce({
  currentStep = 19,
  totalSteps = 19,
  draftMessage,
  onBack,
  onSaveProgress,
  onNext,
}) {
  const [isActivated, setIsActivated] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

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
              <span className="text-[#e2b76a]">18.</span> Activate Your AI Workforce
            </h1>
            <p className="text-[#a4b3c7] text-[16px] max-w-[700px] leading-relaxed">
              Everything is set. Your AI team is ready to work under your COO.
              <br />
              Review the final configuration and activate your AI company.
            </p>
          </div>

          {/* AI COO Chat Bubble & Avatar */}
          <div className="flex items-center gap-3 shrink-0 self-end lg:self-start">
            <div className="relative bg-white text-[#0f172a] rounded-2xl px-5 py-3.5 shadow-2xl border border-blue-200/50 max-w-[340px]">
              <p className="text-[16px] leading-snug font-medium text-[#0f172a]">
                Your AI workforce is ready to go live. They are connected, configured and tested. Activate now to start getting real results for your business.
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

        {/* Readiness Notification Banner */}
        <section className="rounded-2xl p-4 bg-[#0a1526]/90 border border-emerald-500/40 shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-full bg-emerald-500 text-[#020d18] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.35)]">
              <Check size={26} className="stroke-[3]" />
            </div>
            <div>
              <h2 className="text-[20px] font-bold text-[#e2b76a]">Your AI Workforce Is Ready</h2>
              <p className="text-[16px] text-[#cbd5e1]">
                All required setup steps are complete. You can now activate your AI team.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsReviewModalOpen(true)}
            className="px-4 py-2.5 rounded-xl bg-[#d69a2b] hover:bg-[#e0aa48] text-[#020d18] font-bold text-[16px] flex items-center gap-2 cursor-pointer transition-colors shrink-0 self-start sm:self-auto"
          >
            <Settings size={18} /> Review Settings
          </button>
        </section>

        {/* Main Grid: Left Column (Employee Readiness Cards + What Workforce Can Do Now) & Right Column (COO Status + Connection Status + Benefits) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          {/* Left Column (8 cols) */}
          <div className="xl:col-span-8 flex flex-col gap-6">
            {/* 3 Ready AI Employees Hierarchy Box */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              {/* Top Hierarchy Line */}
              <div className="hidden md:flex flex-col items-center pb-2">
                <div className="w-0.5 h-4 bg-gradient-to-b from-[#3b82f6] to-[#8b5cf6]"></div>
                <div className="w-[82%] relative flex items-center justify-between">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#a855f7] via-[#3b82f6] to-[#10b981]"></div>
                  <div className="w-0.5 h-4 bg-[#a855f7]"></div>
                  <div className="w-0.5 h-4 bg-[#3b82f6]"></div>
                  <div className="w-0.5 h-4 bg-[#10b981]"></div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Employee 1: AI Research Executive */}
                <div className="rounded-xl p-4 bg-gradient-to-b from-[#1b122e]/90 to-[#0e1728]/95 border border-[#a855f7]/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#a855f7]/50 shadow-md shrink-0">
                        <img src={clientNehaImage} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-9 h-9 rounded-lg bg-purple-600/25 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0">
                        <Search size={18} />
                      </div>
                    </div>

                    <h3 className="text-[16px] font-bold text-white leading-tight">AI Research Executive</h3>
                    <p className="text-[16px] text-purple-300/80 mb-3">Research &amp; Intelligence</p>

                    <div className="mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-[16px] font-medium">
                        <Check size={14} className="stroke-[3]" /> Ready to Activate
                      </span>
                    </div>

                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-[16px] text-emerald-300">
                        <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                        <span>Connected to COO</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-emerald-300">
                        <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                        <span>Tools integrated</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-emerald-300">
                        <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                        <span>Permissions set</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-emerald-300">
                        <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                        <span>Workflow configured</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-emerald-300">
                        <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                        <span>Test completed successfully</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Employee 2: AI Business Development Executive */}
                <div className="rounded-xl p-4 bg-gradient-to-b from-[#0e1d38]/90 to-[#0e1728]/95 border border-[#3b82f6]/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#3b82f6]/50 shadow-md shrink-0">
                        <img src={clientRajivImage} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-9 h-9 rounded-lg bg-blue-600/25 border border-blue-500/40 text-blue-300 flex items-center justify-center shrink-0">
                        <BarChart3 size={18} />
                      </div>
                    </div>

                    <h3 className="text-[16px] font-bold text-white leading-tight">AI Business Development Executive</h3>
                    <p className="text-[16px] text-blue-300/80 mb-3">Business Development</p>

                    <div className="mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-[16px] font-medium">
                        <Check size={14} className="stroke-[3]" /> Ready to Activate
                      </span>
                    </div>

                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-[16px] text-emerald-300">
                        <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                        <span>Connected to COO</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-emerald-300">
                        <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                        <span>Tools integrated</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-emerald-300">
                        <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                        <span>Permissions set</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-emerald-300">
                        <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                        <span>Workflow configured</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-emerald-300">
                        <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                        <span>Test completed successfully</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Employee 3: AI Email Outreach Executive */}
                <div className="rounded-xl p-4 bg-gradient-to-b from-[#0a231b]/90 to-[#0e1728]/95 border border-[#10b981]/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#10b981]/50 shadow-md shrink-0">
                        <img src={clientMichaelImage} alt="" className="w-full h-full object-cover" />
                      </div>
                      <div className="w-9 h-9 rounded-lg bg-emerald-600/25 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shrink-0">
                        <Mail size={18} />
                      </div>
                    </div>

                    <h3 className="text-[16px] font-bold text-white leading-tight">AI Email Outreach Executive</h3>
                    <p className="text-[16px] text-emerald-300/80 mb-3">Sales &amp; Outreach</p>

                    <div className="mb-4">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-[16px] font-medium">
                        <Check size={14} className="stroke-[3]" /> Ready to Activate
                      </span>
                    </div>

                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-[16px] text-emerald-300">
                        <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                        <span>Connected to COO</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-emerald-300">
                        <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                        <span>Tools integrated</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-emerald-300">
                        <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                        <span>Permissions set</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-emerald-300">
                        <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                        <span>Workflow configured</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-emerald-300">
                        <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                        <span>Test completed successfully</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* What Your AI Workforce Can Do Now */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 text-[#e2b76a] flex items-center justify-center shrink-0">
                  <Lightbulb size={22} />
                </div>
                <h2 className="text-[20px] font-bold text-[#e2b76a]">What Your AI Workforce Can Do Now</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* 1 */}
                <div className="p-3.5 rounded-xl bg-[#06101e]/80 border border-[#162338] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-600/20 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0">
                    <Search size={18} />
                  </div>
                  <span className="text-[16px] text-[#cbd5e1] leading-snug">
                    Find and research new business opportunities
                  </span>
                </div>

                {/* 2 */}
                <div className="p-3.5 rounded-xl bg-[#06101e]/80 border border-[#162338] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-300 flex items-center justify-center shrink-0">
                    <BarChart3 size={18} />
                  </div>
                  <span className="text-[16px] text-[#cbd5e1] leading-snug">
                    Analyze and qualify opportunities
                  </span>
                </div>

                {/* 3 */}
                <div className="p-3.5 rounded-xl bg-[#06101e]/80 border border-[#162338] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <span className="text-[16px] text-[#cbd5e1] leading-snug">
                    Draft emails and follow-ups (as per your approval rules)
                  </span>
                </div>

                {/* 4 */}
                <div className="p-3.5 rounded-xl bg-[#06101e]/80 border border-[#162338] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shrink-0">
                    <FileText size={18} />
                  </div>
                  <span className="text-[16px] text-[#cbd5e1] leading-snug">
                    Create qualified prospect profiles
                  </span>
                </div>

                {/* 5 */}
                <div className="p-3.5 rounded-xl bg-[#06101e]/80 border border-[#162338] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-300 flex items-center justify-center shrink-0">
                    <Calendar size={18} />
                  </div>
                  <span className="text-[16px] text-[#cbd5e1] leading-snug">
                    Create opportunity records in CRM
                  </span>
                </div>

                {/* 6 */}
                <div className="p-3.5 rounded-xl bg-[#06101e]/80 border border-[#162338] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="text-[16px] text-[#cbd5e1] leading-snug">
                    Track responses and update CRM
                  </span>
                </div>

                {/* 7 */}
                <div className="p-3.5 rounded-xl bg-[#06101e]/80 border border-[#162338] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <span className="text-[16px] text-[#cbd5e1] leading-snug">
                    Prepare and manage outreach campaigns
                  </span>
                </div>

                {/* 8 */}
                <div className="p-3.5 rounded-xl bg-[#06101e]/80 border border-[#162338] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-300 flex items-center justify-center shrink-0">
                    <Users size={18} />
                  </div>
                  <span className="text-[16px] text-[#cbd5e1] leading-snug">
                    Schedule meetings and prepare briefs
                  </span>
                </div>

                {/* 9 */}
                <div className="p-3.5 rounded-xl bg-[#06101e]/80 border border-[#162338] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-300 flex items-center justify-center shrink-0">
                    <FileCheck size={18} />
                  </div>
                  <span className="text-[16px] text-[#cbd5e1] leading-snug">
                    Provide reports and insights to the AI COO
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (4 cols) */}
          <div className="xl:col-span-4 flex flex-col gap-6">
            {/* Card 1: AI COO Status */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#1e2e48]">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                    <Users size={18} />
                  </div>
                  <h3 className="text-[18px] font-bold text-white">AI COO Status</h3>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/50 text-emerald-400 text-[16px] font-medium">
                  <Check size={14} className="stroke-[3]" /> Active
                </span>
              </div>
              <p className="text-[16px] text-[#cbd5e1] leading-relaxed">
                Coordinating your AI workforce, monitoring progress and bringing important decisions to you.
              </p>
            </div>

            {/* Card 2: Connection Status */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#1e2e48]">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/40 text-blue-300 flex items-center justify-center shrink-0">
                  <Link2 size={18} />
                </div>
                <h3 className="text-[18px] font-bold text-white">Connection Status</h3>
              </div>

              <div className="space-y-2.5">
                {/* 1 */}
                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Mail size={18} className="text-[#4285F4] shrink-0" />
                    <span className="text-[16px] text-[#e2e8f0] truncate font-medium">Email (Gmail)</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] shrink-0 font-medium">
                    <Check size={12} className="stroke-[3]" /> Connected
                  </span>
                </div>

                {/* 2 */}
                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-4 h-4 rounded-full bg-[#FF7A59] flex items-center justify-center shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    </div>
                    <span className="text-[16px] text-[#e2e8f0] truncate font-medium">CRM (HubSpot)</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] shrink-0 font-medium">
                    <Check size={12} className="stroke-[3]" /> Connected
                  </span>
                </div>

                {/* 3 */}
                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Globe2 size={18} className="text-[#34A853] shrink-0" />
                    <span className="text-[16px] text-[#e2e8f0] truncate font-medium">Google Drive</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] shrink-0 font-medium">
                    <Check size={12} className="stroke-[3]" /> Connected
                  </span>
                </div>

                {/* 4 */}
                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Calendar size={18} className="text-[#4285F4] shrink-0" />
                    <span className="text-[16px] text-[#e2e8f0] truncate font-medium">Calendar (Google Calendar)</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] shrink-0 font-medium">
                    <Check size={12} className="stroke-[3]" /> Connected
                  </span>
                </div>

                {/* 5 */}
                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <Search size={18} className="text-purple-400 shrink-0" />
                    <span className="text-[16px] text-[#e2e8f0] truncate font-medium">Web &amp; Research Tools</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] shrink-0 font-medium">
                    <Check size={12} className="stroke-[3]" /> Connected
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Activation Benefits */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#1e2e48]">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                  <Rocket size={18} />
                </div>
                <h3 className="text-[18px] font-bold text-[#e2b76a]">Activation Benefits</h3>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-relaxed">
                  <Check size={18} className="text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Your AI team starts working immediately</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-relaxed">
                  <Check size={18} className="text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>They collaborate under your COO</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-relaxed">
                  <Check size={18} className="text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>You get regular updates and reports</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-relaxed">
                  <Check size={18} className="text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>You stay in full control with your rules</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-relaxed">
                  <Check size={18} className="text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>You can add more AI employees anytime</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Banner & Big Activation Button */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          <div className="lg:col-span-8 rounded-2xl p-4 bg-[#0a1526]/90 border border-[#d69a2b]/30 shadow-md flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#d69a2b]/20 border border-[#d69a2b]/40 text-[#d69a2b] flex items-center justify-center shrink-0">
              <Shield size={20} />
            </div>
            <div className="space-y-1">
              <h4 className="text-[16px] font-bold text-[#e2b76a]">You are always in control.</h4>
              <p className="text-[16px] text-[#cbd5e1] leading-relaxed">
                Your AI workforce works within your permissions, rules and business objectives. You can pause, modify or expand your team anytime.
              </p>
            </div>
          </div>

          <div className="lg:col-span-4 flex items-center justify-end">
            <button
              type="button"
              onClick={() => {
                setIsActivated(true);
                onNext();
              }}
              className="w-full py-4 px-6 rounded-2xl bg-[#d69a2b] hover:bg-[#e0aa48] text-[#020d18] font-bold text-[18px] flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(214,154,43,0.4)] cursor-pointer transition-all transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Play size={20} className="fill-[#020d18]" />
              <span>Activate My AI Workforce</span>
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Review Settings Modal */}
        {isReviewModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-[#0b1626] border border-[#d69a2b]/50 rounded-2xl max-w-xl w-full p-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1e2e48]">
                <h3 className="text-[20px] font-bold text-white flex items-center gap-2">
                  <Settings size={20} className="text-[#e2b76a]" />
                  Configuration Review
                </h3>
                <button
                  type="button"
                  onClick={() => setIsReviewModalOpen(false)}
                  className="text-slate-400 hover:text-white cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-3.5 mb-6">
                <div className="p-3 rounded-xl bg-[#06101e] border border-[#162338] flex items-center justify-between">
                  <span className="text-[16px] text-white font-medium">COO Orchestration</span>
                  <span className="text-[16px] text-emerald-400 font-bold">Enabled (Active)</span>
                </div>
                <div className="p-3 rounded-xl bg-[#06101e] border border-[#162338] flex items-center justify-between">
                  <span className="text-[16px] text-white font-medium">Connected Tools</span>
                  <span className="text-[16px] text-emerald-400 font-bold">5 Systems Verified</span>
                </div>
                <div className="p-3 rounded-xl bg-[#06101e] border border-[#162338] flex items-center justify-between">
                  <span className="text-[16px] text-white font-medium">Approval Policy</span>
                  <span className="text-[16px] text-[#e2b76a] font-bold">Approve External Communication</span>
                </div>
                <div className="p-3 rounded-xl bg-[#06101e] border border-[#162338] flex items-center justify-between">
                  <span className="text-[16px] text-white font-medium">Company Brain Access</span>
                  <span className="text-[16px] text-emerald-400 font-bold">Encrypted &amp; Restricted</span>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsReviewModalOpen(false)}
                  className="px-5 py-2 rounded-xl bg-[#d69a2b] text-[#020d18] font-bold text-[16px] cursor-pointer hover:bg-[#e0aa48]"
                >
                  Confirm &amp; Close
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
            className="coo-save-button ml-auto text-[16px]"
            onClick={onSaveProgress}
            type="button"
          >
            Save Progress
          </button>
        </footer>
      </div>
    </>
  );
}
