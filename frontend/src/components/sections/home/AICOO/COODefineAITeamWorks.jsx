import { useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  ChevronDown,
  FileCheck,
  FileText,
  Globe,
  Layers,
  Lock,
  Mail,
  Package,
  Plus,
  Search,
  Settings,
  Share2,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  X,
} from "lucide-react";
import aiAgentImage from "../../../../assets/igbndivision/aiagent.png";
import clientNehaImage from "../../../../assets/marketing-pr/client-neha-sharma.jpg";
import clientRajivImage from "../../../../assets/marketing-pr/client-rajiv-mehta.jpg";
import clientMichaelImage from "../../../../assets/marketing-pr/client-michael-tan.jpg";

export default function COODefineAITeamWorks({
  currentStep = 17,
  totalSteps = 18,
  draftMessage,
  onBack,
  onSaveProgress,
  onNext,
}) {
  // State for selected template
  const [selectedTemplate, setSelectedTemplate] = useState("new_business");

  // State for step execution mode (Auto-execute or Approval Required)
  const [stepModes, setStepModes] = useState({
    research: "auto",
    qualify: "auto",
    outreach: "approval",
    monitor: "auto",
  });

  // State for Approval Mode radio
  const [approvalMode, setApprovalMode] = useState("external_comm");

  // State for Edit Step Modal
  const [editingStep, setEditingStep] = useState(null);

  const toggleStepMode = (stepKey) => {
    setStepModes((prev) => ({
      ...prev,
      [stepKey]: prev[stepKey] === "auto" ? "approval" : "auto",
    }));
  };

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
              <span className="text-[#e2b76a]">16.</span> Define How Your AI Team Works
            </h1>
            <p className="text-[#a4b3c7] text-[16px] max-w-[700px] leading-relaxed">
              Set up workflows for your AI employees. Decide what happens at each step, how they work together and when you want to be involved.
            </p>
          </div>

          {/* AI COO Chat Bubble & Avatar */}
          <div className="flex items-center gap-3 shrink-0 self-end lg:self-start">
            <div className="relative bg-white text-[#0f172a] rounded-2xl px-5 py-3.5 shadow-2xl border border-blue-200/50 max-w-[340px]">
              <p className="text-[16px] leading-snug font-medium text-[#0f172a]">
                I will set up the workflows so your AI employees work together efficiently. You can use our recommended workflow or customize it as per your business.
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

        {/* Main Grid: Left Column (Recommended Workflow + Workflow Details + Approval Mode) & Right Column (Templates + Rules) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          {/* Left Column (8 cols) */}
          <div className="xl:col-span-8 flex flex-col gap-6">
            {/* 1. Recommended Workflow Card */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                    <Settings size={22} />
                  </div>
                  <div>
                    <h2 className="text-[20px] font-bold text-[#e2b76a]">Recommended Workflow</h2>
                    <p className="text-[16px] text-[#8fa3bf]">
                      Based on your selected AI employees, here is the recommended workflow.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="px-4 py-2 rounded-xl bg-[#d69a2b] hover:bg-[#e0aa48] text-[#020d18] font-bold text-[16px] flex items-center gap-2 cursor-pointer transition-colors shrink-0 self-start sm:self-auto"
                >
                  Use This Workflow <ArrowRight size={16} />
                </button>
              </div>

              {/* 4 Connected Stages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
                {/* Stage 1: Research & Identify */}
                <div className="rounded-xl p-4 bg-gradient-to-b from-[#1b122e]/90 to-[#0e1728]/95 border border-[#a855f7]/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-purple-600/30 border border-purple-500/50 text-purple-300 text-[16px] font-bold flex items-center justify-center shrink-0">
                          1
                        </span>
                        <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#a855f7]/40 shrink-0">
                          <img src={clientNehaImage} alt="" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-purple-600/25 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0">
                        <Search size={16} />
                      </div>
                    </div>

                    <h3 className="text-[16px] font-bold text-white leading-tight">Research &amp; Identify</h3>
                    <p className="text-[16px] text-purple-300/80 mb-3">AI Research Executive</p>

                    <ul className="space-y-1.5">
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                        <span>Find potential companies</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                        <span>Research and analyze</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                        <span>Prepare prospect profiles</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Stage 2: Qualify & Manage */}
                <div className="rounded-xl p-4 bg-gradient-to-b from-[#0e1d38]/90 to-[#0e1728]/95 border border-[#3b82f6]/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-blue-600/30 border border-blue-500/50 text-blue-300 text-[16px] font-bold flex items-center justify-center shrink-0">
                          2
                        </span>
                        <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#3b82f6]/40 shrink-0">
                          <img src={clientRajivImage} alt="" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-blue-600/25 border border-blue-500/40 text-blue-300 flex items-center justify-center shrink-0">
                        <BarChart3 size={16} />
                      </div>
                    </div>

                    <h3 className="text-[16px] font-bold text-white leading-tight">Qualify &amp; Manage</h3>
                    <p className="text-[16px] text-blue-300/80 mb-3">AI Business Development Executive</p>

                    <ul className="space-y-1.5">
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                        <span>Review research output</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                        <span>Qualify opportunities</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                        <span>Manage pipeline</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                        <span>Prepare meeting briefs</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Stage 3: Outreach & Engage */}
                <div className="rounded-xl p-4 bg-gradient-to-b from-[#0a231b]/90 to-[#0e1728]/95 border border-[#10b981]/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-emerald-600/30 border border-emerald-500/50 text-emerald-300 text-[16px] font-bold flex items-center justify-center shrink-0">
                          3
                        </span>
                        <div className="w-10 h-10 rounded-lg overflow-hidden border border-[#10b981]/40 shrink-0">
                          <img src={clientMichaelImage} alt="" className="w-full h-full object-cover" />
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-emerald-600/25 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shrink-0">
                        <Mail size={16} />
                      </div>
                    </div>

                    <h3 className="text-[16px] font-bold text-white leading-tight">Outreach &amp; Engage</h3>
                    <p className="text-[16px] text-emerald-300/80 mb-3">AI Email Outreach Executive</p>

                    <ul className="space-y-1.5">
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                        <span>Prepare email sequences</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                        <span>Send approved emails</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                        <span>Track responses</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                        <span>Manage follow-ups</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Stage 4: Monitor & Report */}
                <div className="rounded-xl p-4 bg-gradient-to-b from-[#241c0b]/90 to-[#0e1728]/95 border border-[#d69a2b]/40 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-full bg-amber-600/30 border border-amber-500/50 text-amber-300 text-[16px] font-bold flex items-center justify-center shrink-0">
                          4
                        </span>
                        <div className="w-10 h-10 rounded-lg bg-[#d69a2b]/20 border border-[#d69a2b]/50 flex items-center justify-center text-[#d69a2b] shrink-0">
                          <Users size={20} />
                        </div>
                      </div>
                    </div>

                    <h3 className="text-[16px] font-bold text-white leading-tight">Monitor &amp; Report</h3>
                    <p className="text-[16px] text-amber-300/80 mb-3">AI COO</p>

                    <ul className="space-y-1.5">
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <div className="w-4 h-4 rounded-full bg-amber-500/20 text-[#e2b76a] flex items-center justify-center shrink-0">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                        <span>Track progress and results</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <div className="w-4 h-4 rounded-full bg-amber-500/20 text-[#e2b76a] flex items-center justify-center shrink-0">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                        <span>Ensure coordination</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <div className="w-4 h-4 rounded-full bg-amber-500/20 text-[#e2b76a] flex items-center justify-center shrink-0">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                        <span>Bring important decisions to you</span>
                      </li>
                      <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                        <div className="w-4 h-4 rounded-full bg-amber-500/20 text-[#e2b76a] flex items-center justify-center shrink-0">
                          <Check size={12} className="stroke-[3]" />
                        </div>
                        <span>Generate reports</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Workflow Details Card */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                  <FileText size={20} />
                </div>
                <div>
                  <h2 className="text-[20px] font-bold text-[#e2b76a]">Workflow Details</h2>
                  <p className="text-[16px] text-[#8fa3bf]">
                    Customize each step of the workflow as per your business needs.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {/* Row 1: Research & Identify */}
                <div className="p-3.5 rounded-xl bg-[#06101e]/80 border border-[#162338] flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-purple-600/30 border border-purple-500/50 text-purple-300 text-[16px] font-bold flex items-center justify-center shrink-0">
                      1
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-purple-600/20 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0">
                      <Search size={18} />
                    </div>
                    <div>
                      <div className="text-[16px] font-bold text-white">Research &amp; Identify</div>
                      <div className="text-[16px] text-purple-300/80">AI Research Executive</div>
                    </div>
                  </div>

                  <p className="text-[16px] text-[#cbd5e1] flex-1 md:px-4">
                    Finds and researches potential companies based on your criteria.
                  </p>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => toggleStepMode("research")}
                      className={`px-3 py-1.5 rounded-xl border text-[16px] font-medium flex items-center gap-1.5 cursor-pointer transition-colors ${
                        stepModes.research === "auto"
                          ? "bg-emerald-950/60 border-emerald-500/50 text-emerald-300"
                          : "bg-amber-950/60 border-amber-500/50 text-[#e2b76a]"
                      }`}
                    >
                      {stepModes.research === "auto" ? (
                        <>
                          <Check size={14} className="stroke-[3]" /> Auto-execute
                        </>
                      ) : (
                        <>
                          <AlertTriangle size={14} /> Approval Required
                        </>
                      )}
                      <ChevronDown size={14} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setEditingStep("Research & Identify")}
                      className="px-3 py-1.5 rounded-xl bg-[#0e1d34] border border-[#2b3d5c] hover:border-slate-400 text-white text-[16px] font-medium flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <Settings size={15} /> Edit Step
                    </button>
                  </div>
                </div>

                {/* Row 2: Qualify & Manage */}
                <div className="p-3.5 rounded-xl bg-[#06101e]/80 border border-[#162338] flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-blue-600/30 border border-blue-500/50 text-blue-300 text-[16px] font-bold flex items-center justify-center shrink-0">
                      2
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-300 flex items-center justify-center shrink-0">
                      <BarChart3 size={18} />
                    </div>
                    <div>
                      <div className="text-[16px] font-bold text-white">Qualify &amp; Manage</div>
                      <div className="text-[16px] text-blue-300/80">AI Business Development Executive</div>
                    </div>
                  </div>

                  <p className="text-[16px] text-[#cbd5e1] flex-1 md:px-4">
                    Reviews opportunities and manages the pipeline.
                  </p>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => toggleStepMode("qualify")}
                      className={`px-3 py-1.5 rounded-xl border text-[16px] font-medium flex items-center gap-1.5 cursor-pointer transition-colors ${
                        stepModes.qualify === "auto"
                          ? "bg-emerald-950/60 border-emerald-500/50 text-emerald-300"
                          : "bg-amber-950/60 border-amber-500/50 text-[#e2b76a]"
                      }`}
                    >
                      {stepModes.qualify === "auto" ? (
                        <>
                          <Check size={14} className="stroke-[3]" /> Auto-execute
                        </>
                      ) : (
                        <>
                          <AlertTriangle size={14} /> Approval Required
                        </>
                      )}
                      <ChevronDown size={14} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setEditingStep("Qualify & Manage")}
                      className="px-3 py-1.5 rounded-xl bg-[#0e1d34] border border-[#2b3d5c] hover:border-slate-400 text-white text-[16px] font-medium flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <Settings size={15} /> Edit Step
                    </button>
                  </div>
                </div>

                {/* Row 3: Outreach & Engage */}
                <div className="p-3.5 rounded-xl bg-[#06101e]/80 border border-[#162338] flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-emerald-600/30 border border-emerald-500/50 text-emerald-300 text-[16px] font-bold flex items-center justify-center shrink-0">
                      3
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className="text-[16px] font-bold text-white">Outreach &amp; Engage</div>
                      <div className="text-[16px] text-emerald-300/80">AI Email Outreach Executive</div>
                    </div>
                  </div>

                  <p className="text-[16px] text-[#cbd5e1] flex-1 md:px-4">
                    Prepares and sends approved email communication.
                  </p>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => toggleStepMode("outreach")}
                      className={`px-3 py-1.5 rounded-xl border text-[16px] font-medium flex items-center gap-1.5 cursor-pointer transition-colors ${
                        stepModes.outreach === "auto"
                          ? "bg-emerald-950/60 border-emerald-500/50 text-emerald-300"
                          : "bg-amber-950/60 border-amber-500/50 text-[#e2b76a]"
                      }`}
                    >
                      {stepModes.outreach === "auto" ? (
                        <>
                          <Check size={14} className="stroke-[3]" /> Auto-execute
                        </>
                      ) : (
                        <>
                          <AlertTriangle size={14} /> Approval Required
                        </>
                      )}
                      <ChevronDown size={14} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setEditingStep("Outreach & Engage")}
                      className="px-3 py-1.5 rounded-xl bg-[#0e1d34] border border-[#2b3d5c] hover:border-slate-400 text-white text-[16px] font-medium flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <Settings size={15} /> Edit Step
                    </button>
                  </div>
                </div>

                {/* Row 4: Monitor & Report */}
                <div className="p-3.5 rounded-xl bg-[#06101e]/80 border border-[#162338] flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-amber-600/30 border border-amber-500/50 text-amber-300 text-[16px] font-bold flex items-center justify-center shrink-0">
                      4
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-amber-600/20 border border-amber-500/40 text-amber-300 flex items-center justify-center shrink-0">
                      <Users size={18} />
                    </div>
                    <div>
                      <div className="text-[16px] font-bold text-white">Monitor &amp; Report</div>
                      <div className="text-[16px] text-amber-300/80">AI COO</div>
                    </div>
                  </div>

                  <p className="text-[16px] text-[#cbd5e1] flex-1 md:px-4">
                    Monitors the entire process and delivers results and reports.
                  </p>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <button
                      type="button"
                      onClick={() => toggleStepMode("monitor")}
                      className={`px-3 py-1.5 rounded-xl border text-[16px] font-medium flex items-center gap-1.5 cursor-pointer transition-colors ${
                        stepModes.monitor === "auto"
                          ? "bg-emerald-950/60 border-emerald-500/50 text-emerald-300"
                          : "bg-amber-950/60 border-amber-500/50 text-[#e2b76a]"
                      }`}
                    >
                      {stepModes.monitor === "auto" ? (
                        <>
                          <Check size={14} className="stroke-[3]" /> Auto-execute
                        </>
                      ) : (
                        <>
                          <AlertTriangle size={14} /> Approval Required
                        </>
                      )}
                      <ChevronDown size={14} />
                    </button>

                    <button
                      type="button"
                      onClick={() => setEditingStep("Monitor & Report")}
                      className="px-3 py-1.5 rounded-xl bg-[#0e1d34] border border-[#2b3d5c] hover:border-slate-400 text-white text-[16px] font-medium flex items-center gap-1.5 cursor-pointer transition-colors"
                    >
                      <Settings size={15} /> Edit Step
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Approval Mode Card */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                  <Lock size={20} />
                </div>
                <div>
                  <h2 className="text-[20px] font-bold text-[#e2b76a]">Approval Mode</h2>
                  <p className="text-[16px] text-[#8fa3bf]">
                    Choose how much involvement you want in this workflow.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {/* Option 1: Approve everything */}
                <div
                  onClick={() => setApprovalMode("everything")}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    approvalMode === "everything"
                      ? "bg-amber-950/30 border-[#d69a2b]"
                      : "bg-[#06101e]/80 border-[#162338] hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        approvalMode === "everything"
                          ? "border-[#d69a2b]"
                          : "border-slate-500"
                      }`}
                    >
                      {approvalMode === "everything" && (
                        <span className="w-2 h-2 rounded-full bg-[#d69a2b]"></span>
                      )}
                    </span>
                    <span className="text-[16px] font-bold text-white">Approve everything</span>
                  </div>
                  <p className="text-[16px] text-[#a4b3c7] pl-6 leading-snug">
                    I will approve all key actions.
                  </p>
                </div>

                {/* Option 2: Approve external communication (Default) */}
                <div
                  onClick={() => setApprovalMode("external_comm")}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    approvalMode === "external_comm"
                      ? "bg-amber-950/30 border-[#d69a2b]"
                      : "bg-[#06101e]/80 border-[#162338] hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        approvalMode === "external_comm"
                          ? "border-[#d69a2b]"
                          : "border-slate-500"
                      }`}
                    >
                      {approvalMode === "external_comm" && (
                        <span className="w-2 h-2 rounded-full bg-[#d69a2b]"></span>
                      )}
                    </span>
                    <span className="text-[16px] font-bold text-white">Approve external communication</span>
                  </div>
                  <p className="text-[16px] text-[#a4b3c7] pl-6 leading-snug">
                    I will approve emails and customer communication.
                  </p>
                </div>

                {/* Option 3: Approve only important actions */}
                <div
                  onClick={() => setApprovalMode("important")}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    approvalMode === "important"
                      ? "bg-amber-950/30 border-[#d69a2b]"
                      : "bg-[#06101e]/80 border-[#162338] hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        approvalMode === "important"
                          ? "border-[#d69a2b]"
                          : "border-slate-500"
                      }`}
                    >
                      {approvalMode === "important" && (
                        <span className="w-2 h-2 rounded-full bg-[#d69a2b]"></span>
                      )}
                    </span>
                    <span className="text-[16px] font-bold text-white">Approve only important actions</span>
                  </div>
                  <p className="text-[16px] text-[#a4b3c7] pl-6 leading-snug">
                    I will approve only major decisions.
                  </p>
                </div>

                {/* Option 4: Autonomous within my rules */}
                <div
                  onClick={() => setApprovalMode("autonomous")}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-all ${
                    approvalMode === "autonomous"
                      ? "bg-amber-950/30 border-[#d69a2b]"
                      : "bg-[#06101e]/80 border-[#162338] hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                        approvalMode === "autonomous"
                          ? "border-[#d69a2b]"
                          : "border-slate-500"
                      }`}
                    >
                      {approvalMode === "autonomous" && (
                        <span className="w-2 h-2 rounded-full bg-[#d69a2b]"></span>
                      )}
                    </span>
                    <span className="text-[16px] font-bold text-white">Autonomous within my rules</span>
                  </div>
                  <p className="text-[16px] text-[#a4b3c7] pl-6 leading-snug">
                    AI employees can work independently within defined rules.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (4 cols) */}
          <div className="xl:col-span-4 flex flex-col gap-6">
            {/* Card 1: Workflow Templates */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#1e2e48]">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/40 text-blue-300 flex items-center justify-center shrink-0">
                  <FileText size={18} />
                </div>
                <h3 className="text-[18px] font-bold text-white">Workflow Templates</h3>
              </div>

              <div className="space-y-3">
                {/* Template 1: Find New Business Opportunities */}
                <div
                  onClick={() => setSelectedTemplate("new_business")}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    selectedTemplate === "new_business"
                      ? "bg-amber-950/30 border-[#d69a2b]"
                      : "bg-[#06101e]/60 border-[#162338] hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        selectedTemplate === "new_business"
                          ? "border-[#d69a2b]"
                          : "border-slate-500"
                      }`}
                    >
                      {selectedTemplate === "new_business" && (
                        <span className="w-2 h-2 rounded-full bg-[#d69a2b]"></span>
                      )}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                      <Users size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[16px] font-bold text-white truncate">
                        Find New Business Opportunities
                      </div>
                      <div className="text-[16px] text-[#8fa3bf] truncate">
                        Research → Qualify → Outreach → Follow-up
                      </div>
                    </div>
                  </div>
                </div>

                {/* Template 2: Enter New Market */}
                <div
                  onClick={() => setSelectedTemplate("new_market")}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    selectedTemplate === "new_market"
                      ? "bg-amber-950/30 border-[#d69a2b]"
                      : "bg-[#06101e]/60 border-[#162338] hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        selectedTemplate === "new_market"
                          ? "border-[#d69a2b]"
                          : "border-slate-500"
                      }`}
                    >
                      {selectedTemplate === "new_market" && (
                        <span className="w-2 h-2 rounded-full bg-[#d69a2b]"></span>
                      )}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/40 text-blue-300 flex items-center justify-center shrink-0">
                      <BarChart3 size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[16px] font-bold text-white truncate">
                        Enter New Market
                      </div>
                      <div className="text-[16px] text-[#8fa3bf] truncate">
                        Market Research → Identify Partners → Outreach
                      </div>
                    </div>
                  </div>
                </div>

                {/* Template 3: Find Distributors */}
                <div
                  onClick={() => setSelectedTemplate("distributors")}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    selectedTemplate === "distributors"
                      ? "bg-amber-950/30 border-[#d69a2b]"
                      : "bg-[#06101e]/60 border-[#162338] hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        selectedTemplate === "distributors"
                          ? "border-[#d69a2b]"
                          : "border-slate-500"
                      }`}
                    >
                      {selectedTemplate === "distributors" && (
                        <span className="w-2 h-2 rounded-full bg-[#d69a2b]"></span>
                      )}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 flex items-center justify-center shrink-0">
                      <FileCheck size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[16px] font-bold text-white truncate">
                        Find Distributors
                      </div>
                      <div className="text-[16px] text-[#8fa3bf] truncate">
                        Research → Evaluate → Contact → Follow-up
                      </div>
                    </div>
                  </div>
                </div>

                {/* Template 4: Launch New Product */}
                <div
                  onClick={() => setSelectedTemplate("launch_product")}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    selectedTemplate === "launch_product"
                      ? "bg-amber-950/30 border-[#d69a2b]"
                      : "bg-[#06101e]/60 border-[#162338] hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        selectedTemplate === "launch_product"
                          ? "border-[#d69a2b]"
                          : "border-slate-500"
                      }`}
                    >
                      {selectedTemplate === "launch_product" && (
                        <span className="w-2 h-2 rounded-full bg-[#d69a2b]"></span>
                      )}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                      <Package size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[16px] font-bold text-white truncate">
                        Launch New Product
                      </div>
                      <div className="text-[16px] text-[#8fa3bf] truncate">
                        Research → Market Analysis → Outreach
                      </div>
                    </div>
                  </div>
                </div>

                {/* Template 5: Custom Workflow */}
                <div
                  onClick={() => setSelectedTemplate("custom")}
                  className={`p-3 rounded-xl border cursor-pointer transition-all ${
                    selectedTemplate === "custom"
                      ? "bg-amber-950/30 border-[#d69a2b]"
                      : "bg-[#06101e]/60 border-[#162338] hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                        selectedTemplate === "custom"
                          ? "border-[#d69a2b]"
                          : "border-slate-500"
                      }`}
                    >
                      {selectedTemplate === "custom" && (
                        <span className="w-2 h-2 rounded-full bg-[#d69a2b]"></span>
                      )}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-700 border border-slate-600 text-slate-300 flex items-center justify-center shrink-0">
                      <Workflow size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[16px] font-bold text-white truncate">
                        Custom Workflow
                      </div>
                      <div className="text-[16px] text-[#8fa3bf] truncate">
                        Create your own workflow
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Workflow Rules */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#1e2e48]">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/40 text-blue-300 flex items-center justify-center shrink-0">
                  <FileText size={18} />
                </div>
                <h3 className="text-[18px] font-bold text-white">Workflow Rules</h3>
              </div>

              <ul className="space-y-3">
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-relaxed">
                  <Check size={18} className="text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Follow the permissions set in Module 15</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-relaxed">
                  <Check size={18} className="text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Escalate important decisions to me</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-relaxed">
                  <Check size={18} className="text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Do not contact restricted accounts</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-relaxed">
                  <Check size={18} className="text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Use approved templates and messaging</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-relaxed">
                  <Check size={18} className="text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Update connected systems after each step</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-relaxed">
                  <Check size={18} className="text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Maintain data confidentiality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Edit Step Modal */}
        {editingStep && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-[#0b1626] border border-[#d69a2b]/50 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1e2e48]">
                <h3 className="text-[20px] font-bold text-white flex items-center gap-2">
                  <Settings size={20} className="text-[#e2b76a]" />
                  Customize Step: {editingStep}
                </h3>
                <button
                  type="button"
                  onClick={() => setEditingStep(null)}
                  className="text-slate-400 hover:text-white cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="text-[16px] text-[#cbd5e1] mb-4">
                Define execution boundaries, approval triggers, and reporting frequency for this workflow stage.
              </p>

              <div className="space-y-3 mb-6">
                <label className="flex items-center gap-3 p-3 rounded-xl bg-[#07101c] border border-[#1e2e48] cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#d69a2b]" />
                  <span className="text-[16px] text-white">Notify me before triggering next workflow stage</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl bg-[#07101c] border border-[#1e2e48] cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#d69a2b]" />
                  <span className="text-[16px] text-white">Save stage outputs to Company Brain documents</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl bg-[#07101c] border border-[#1e2e48] cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#d69a2b]" />
                  <span className="text-[16px] text-white">Pause workflow if quality check score is below 90%</span>
                </label>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setEditingStep(null)}
                  className="px-5 py-2 rounded-xl bg-slate-800 text-white font-medium text-[16px] cursor-pointer hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => setEditingStep(null)}
                  className="px-5 py-2 rounded-xl bg-[#d69a2b] text-[#020d18] font-bold text-[16px] cursor-pointer hover:bg-[#e0aa48]"
                >
                  Save Step
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
            className="coo-next-button min-w-[320px] text-[16px] ml-auto"
            onClick={onNext}
            type="button"
          >
            Next: Test Your AI Workforce <ArrowRight size={18} />
          </button>
        </footer>
      </div>
    </>
  );
}
