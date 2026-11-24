import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  Lightbulb,
  Link2,
  Mail,
  Search,
  Settings,
  Users,
} from "lucide-react";
import aiAgentImage from "../../../../assets/igbndivision/aiagent.png";
import clientNehaImage from "../../../../assets/marketing-pr/client-neha-sharma.jpg";
import clientRajivImage from "../../../../assets/marketing-pr/client-rajiv-mehta.jpg";
import clientMichaelImage from "../../../../assets/marketing-pr/client-michael-tan.jpg";

export default function COOConnectAITeam({
  currentStep = 14,
  totalSteps = 15,
  draftMessage,
  onBack,
  onSaveProgress,
  onNext,
}) {
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
              <span className="text-[#e2b76a]">13.</span> Connect Your AI Team to Your COO
            </h1>
            <p className="text-[#a4b3c7] text-[16px] max-w-[650px] leading-relaxed">
              Your AI COO coordinates your AI employees. Decide how they should work together.
            </p>
          </div>

          {/* AI COO Chat Bubble & Avatar */}
          <div className="flex items-center gap-3 shrink-0 self-end lg:self-start">
            <div className="relative bg-white text-[#0f172a] rounded-2xl px-5 py-3.5 shadow-2xl border border-blue-200/50 max-w-[340px]">
              <p className="text-[16px] leading-snug font-medium text-[#0f172a]">
                I will coordinate your AI employees, ensure they work together and help you achieve your business goals.
              </p>
              <span className="block text-right font-bold text-[16px] text-[#0f172a] mt-1.5">
                — AI COO
              </span>
              {/* Triangle pointer to right */}
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

        {/* Main Workspace: Left Org Hierarchy (8 cols) + Right Side Panel (4 cols) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          {/* Left Column: COO Tree & Connected Team (8 cols) */}
          <div className="xl:col-span-8 flex flex-col gap-4">
            {/* Top Node: AI COO Card */}
            <div className="flex flex-col items-center">
              <div className="w-full max-w-[620px] bg-[#0c1a30]/90 border border-[#3b82f6]/40 rounded-2xl p-4 md:p-5 shadow-[0_0_30px_rgba(59,130,246,0.15)] flex flex-col sm:flex-row items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#d69a2b]/20 border border-[#d69a2b]/50 flex items-center justify-center text-[#d69a2b] shadow-inner shrink-0">
                  <Users size={28} />
                </div>
                <div className="sm:border-r border-[#1e2e48] sm:pr-5 shrink-0 text-center sm:text-left">
                  <h3 className="text-[20px] font-bold text-white tracking-wide">AI COO</h3>
                  <p className="text-[16px] text-[#8fa3bf]">Chief Operating Officer</p>
                  <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] font-medium mt-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Active
                  </span>
                </div>
                <div className="text-[16px] text-[#a4b3c7] leading-relaxed text-center sm:text-left">
                  Coordinates your AI team, assigns tasks, monitors progress and brings important decisions to you.
                </div>
              </div>

              {/* Hierarchy Tree Lines (Connector SVG) */}
              <div className="w-full hidden md:flex flex-col items-center py-1">
                {/* Stem going down from AI COO */}
                <div className="w-0.5 h-6 bg-gradient-to-b from-[#3b82f6] to-[#8b5cf6]"></div>

                {/* Horizontal branch bar spanning across the 3 cards */}
                <div className="w-[82%] relative flex items-center justify-between">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#a855f7] via-[#3b82f6] to-[#10b981]"></div>

                  {/* Left drop line + arrow */}
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-5 bg-[#a855f7]"></div>
                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-[#a855f7]"></div>
                  </div>

                  {/* Center drop line + arrow */}
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-5 bg-[#3b82f6]"></div>
                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-[#3b82f6]"></div>
                  </div>

                  {/* Right drop line + arrow */}
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-5 bg-[#10b981]"></div>
                    <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-[#10b981]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3 Connected Employee Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              {/* Card 1: AI Research Executive */}
              <div className="rounded-2xl p-4 bg-gradient-to-b from-[#1b122e]/90 to-[#0c1426]/95 border border-[#a855f7]/40 shadow-[0_0_20px_rgba(168,85,247,0.12)] flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#a855f7]/50 shadow-md shrink-0 bg-[#160d29]">
                      <img
                        src={clientNehaImage}
                        alt="AI Research Executive"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-purple-600/25 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0">
                      <Search size={20} />
                    </div>
                  </div>

                  <h3 className="text-[18px] font-bold text-white leading-tight">
                    AI Research Executive
                  </h3>
                  <p className="text-[16px] text-purple-300/80 mb-2">Research &amp; Intelligence</p>

                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] font-medium">
                      <Check size={14} className="stroke-[3]" /> Connected
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-[16px] text-[#cbd5e1] leading-snug">
                      <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span>Finds and researches potential companies, markets and opportunities.</span>
                    </li>
                    <li className="flex items-start gap-2 text-[16px] text-[#cbd5e1] leading-snug">
                      <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span>Prepares detailed prospect profiles and market insights.</span>
                    </li>
                    <li className="flex items-start gap-2 text-[16px] text-[#cbd5e1] leading-snug">
                      <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span>Shares qualified opportunities with AI COO and Business Development Executive.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 2: AI Business Development Executive */}
              <div className="rounded-2xl p-4 bg-gradient-to-b from-[#0e1d38]/90 to-[#0c1426]/95 border border-[#3b82f6]/40 shadow-[0_0_20px_rgba(59,130,246,0.12)] flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#3b82f6]/50 shadow-md shrink-0 bg-[#0a1526]">
                      <img
                        src={clientRajivImage}
                        alt="AI Business Development Executive"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-blue-600/25 border border-blue-500/40 text-blue-300 flex items-center justify-center shrink-0">
                      <BarChart3 size={20} />
                    </div>
                  </div>

                  <h3 className="text-[18px] font-bold text-white leading-tight">
                    AI Business Development Executive
                  </h3>
                  <p className="text-[16px] text-blue-300/80 mb-2">Business Development</p>

                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] font-medium">
                      <Check size={14} className="stroke-[3]" /> Connected
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-[16px] text-[#cbd5e1] leading-snug">
                      <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span>Reviews qualified opportunities from Research Executive.</span>
                    </li>
                    <li className="flex items-start gap-2 text-[16px] text-[#cbd5e1] leading-snug">
                      <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span>Manages opportunities, meetings, proposals and pipeline activity.</span>
                    </li>
                    <li className="flex items-start gap-2 text-[16px] text-[#cbd5e1] leading-snug">
                      <div className="w-4 h-4 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span>Works with Email Outreach Executive to execute approved outreach.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 3: AI Email Outreach Executive */}
              <div className="rounded-2xl p-4 bg-gradient-to-b from-[#0a231b]/90 to-[#0c1426]/95 border border-[#10b981]/40 shadow-[0_0_20px_rgba(16,185,129,0.12)] flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#10b981]/50 shadow-md shrink-0 bg-[#081a14]">
                      <img
                        src={clientMichaelImage}
                        alt="AI Email Outreach Executive"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-600/25 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shrink-0">
                      <Mail size={20} />
                    </div>
                  </div>

                  <h3 className="text-[18px] font-bold text-white leading-tight">
                    AI Email Outreach Executive
                  </h3>
                  <p className="text-[16px] text-emerald-300/80 mb-2">Sales &amp; Outreach</p>

                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] font-medium">
                      <Check size={14} className="stroke-[3]" /> Connected
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    <li className="flex items-start gap-2 text-[16px] text-[#cbd5e1] leading-snug">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span>Prepares and manages approved outbound email communication.</span>
                    </li>
                    <li className="flex items-start gap-2 text-[16px] text-[#cbd5e1] leading-snug">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span>Runs outreach sequences and follow-ups.</span>
                    </li>
                    <li className="flex items-start gap-2 text-[16px] text-[#cbd5e1] leading-snug">
                      <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} className="stroke-[3]" />
                      </div>
                      <span>Tracks responses and updates CRM as per your rules.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Connection Status & How They Work Together (4 cols) */}
          <div className="xl:col-span-4 flex flex-col gap-4">
            {/* Box 1: Connection Status */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#1e2e48]">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/40 text-blue-300 flex items-center justify-center shrink-0">
                  <Link2 size={18} />
                </div>
                <h3 className="text-[18px] font-bold text-white">Connection Status</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={clientNehaImage}
                      alt=""
                      className="w-8 h-8 rounded-full object-cover shrink-0 border border-purple-500/40"
                    />
                    <span className="text-[16px] text-[#e2e8f0] truncate font-medium">
                      AI Research Executive
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] shrink-0 font-medium">
                    <Check size={12} className="stroke-[3]" /> Connected
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={clientRajivImage}
                      alt=""
                      className="w-8 h-8 rounded-full object-cover shrink-0 border border-blue-500/40"
                    />
                    <span className="text-[16px] text-[#e2e8f0] truncate font-medium">
                      AI Business Development Executive
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] shrink-0 font-medium">
                    <Check size={12} className="stroke-[3]" /> Connected
                  </span>
                </div>

                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <img
                      src={clientMichaelImage}
                      alt=""
                      className="w-8 h-8 rounded-full object-cover shrink-0 border border-emerald-500/40"
                    />
                    <span className="text-[16px] text-[#e2e8f0] truncate font-medium">
                      AI Email Outreach Executive
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] shrink-0 font-medium">
                    <Check size={12} className="stroke-[3]" /> Connected
                  </span>
                </div>
              </div>
            </div>

            {/* Box 2: How They Work Together */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#1e2e48]">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                  <Lightbulb size={18} />
                </div>
                <h3 className="text-[18px] font-bold text-white">How They Work Together</h3>
              </div>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full border border-[#8fa3bf]/40 text-[#cbd5e1] text-[16px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <p className="text-[16px] text-[#cbd5e1] leading-snug">
                    Research Executive finds and researches potential companies.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full border border-[#8fa3bf]/40 text-[#cbd5e1] text-[16px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <p className="text-[16px] text-[#cbd5e1] leading-snug">
                    Business Development Executive reviews qualified opportunities and manages the opportunity.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full border border-[#8fa3bf]/40 text-[#cbd5e1] text-[16px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <p className="text-[16px] text-[#cbd5e1] leading-snug">
                    Email Outreach Executive contacts approved prospects according to your rules.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full border border-[#8fa3bf]/40 text-[#cbd5e1] text-[16px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    4
                  </span>
                  <p className="text-[16px] text-[#cbd5e1] leading-snug">
                    AI COO monitors the entire process and reports results to you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: End-to-End Workflow */}
        <section className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
              <Settings size={20} />
            </div>
            <div>
              <h2 className="text-[20px] font-bold text-[#e2b76a]">End-to-End Workflow</h2>
              <p className="text-[16px] text-[#8fa3bf]">
                Here&apos;s how your AI team works together from research to results.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-stretch">
            {/* Step 1: Research & Identify */}
            <div className="relative rounded-xl p-4 bg-gradient-to-b from-[#1b122e]/80 to-[#0e1728]/90 border border-[#a855f7]/30 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-full bg-purple-600/30 border border-purple-500/50 text-purple-300 text-[16px] font-bold flex items-center justify-center">
                  1
                </span>
                <span className="text-[16px] font-bold text-white">Research &amp; Identify</span>
              </div>
              <div className="flex items-center gap-3 my-2">
                <div className="w-11 h-11 rounded-xl bg-purple-600/20 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0">
                  <Search size={22} />
                </div>
                <p className="text-[16px] text-[#cbd5e1] leading-snug">
                  Research Executive finds and researches potential companies.
                </p>
              </div>

              {/* Arrow visible on desktop between cards */}
              <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#1e2e48] text-purple-400 items-center justify-center border border-[#2e4060]">
                <ArrowRight size={14} />
              </div>
            </div>

            {/* Step 2: Qualify & Manage */}
            <div className="relative rounded-xl p-4 bg-gradient-to-b from-[#0e1d38]/80 to-[#0e1728]/90 border border-[#3b82f6]/30 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-full bg-blue-600/30 border border-blue-500/50 text-blue-300 text-[16px] font-bold flex items-center justify-center">
                  2
                </span>
                <span className="text-[16px] font-bold text-white">Qualify &amp; Manage</span>
              </div>
              <div className="flex items-center gap-3 my-2">
                <div className="w-11 h-11 rounded-xl bg-blue-600/20 border border-blue-500/40 text-blue-300 flex items-center justify-center shrink-0">
                  <BarChart3 size={22} />
                </div>
                <p className="text-[16px] text-[#cbd5e1] leading-snug">
                  Business Development Executive reviews and manages the opportunity.
                </p>
              </div>

              {/* Arrow visible on desktop between cards */}
              <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#1e2e48] text-blue-400 items-center justify-center border border-[#2e4060]">
                <ArrowRight size={14} />
              </div>
            </div>

            {/* Step 3: Outreach & Follow-up */}
            <div className="relative rounded-xl p-4 bg-gradient-to-b from-[#0a231b]/80 to-[#0e1728]/90 border border-[#10b981]/30 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-full bg-emerald-600/30 border border-emerald-500/50 text-emerald-300 text-[16px] font-bold flex items-center justify-center">
                  3
                </span>
                <span className="text-[16px] font-bold text-white">Outreach &amp; Follow-up</span>
              </div>
              <div className="flex items-center gap-3 my-2">
                <div className="w-11 h-11 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shrink-0">
                  <Mail size={22} />
                </div>
                <p className="text-[16px] text-[#cbd5e1] leading-snug">
                  Email Outreach Executive contacts approved prospects and manages follow-ups.
                </p>
              </div>

              {/* Arrow visible on desktop between cards */}
              <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-[#1e2e48] text-emerald-400 items-center justify-center border border-[#2e4060]">
                <ArrowRight size={14} />
              </div>
            </div>

            {/* Step 4: Monitor & Report */}
            <div className="rounded-xl p-4 bg-gradient-to-b from-[#241c0b]/80 to-[#0e1728]/90 border border-[#d69a2b]/30 flex flex-col justify-between">
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-full bg-amber-600/30 border border-amber-500/50 text-amber-300 text-[16px] font-bold flex items-center justify-center">
                  4
                </span>
                <span className="text-[16px] font-bold text-white">Monitor &amp; Report</span>
              </div>
              <div className="flex items-center gap-3 my-2">
                <div className="w-11 h-11 rounded-xl bg-amber-600/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                  <Users size={22} />
                </div>
                <p className="text-[16px] text-[#cbd5e1] leading-snug">
                  AI COO monitors progress, ensures coordination and brings important decisions to you.
                </p>
              </div>
            </div>
          </div>
        </section>

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
            Next: Connect Your Business Tools <ArrowRight size={18} />
          </button>
        </footer>
      </div>
    </>
  );
}
