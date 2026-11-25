import { useState } from "react";
import {
  Activity,
  AlertCircle,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  ExternalLink,
  Eye,
  FileCheck,
  FileText,
  Globe2,
  Layers,
  Lightbulb,
  Link2,
  Mail,
  Maximize2,
  MessageSquare,
  Play,
  Plus,
  Radio,
  Rocket,
  Search,
  Settings,
  Shield,
  ShieldCheck,
  Sliders,
  Sparkles,
  TrendingUp,
  Trophy,
  UserCheck,
  Users,
  X,
  Zap,
} from "lucide-react";
import aiAgentImage from "../../../../assets/igbndivision/aiagent.png";
import clientNehaImage from "../../../../assets/marketing-pr/client-neha-sharma.jpg";
import clientRajivImage from "../../../../assets/marketing-pr/client-rajiv-mehta.jpg";
import clientMichaelImage from "../../../../assets/marketing-pr/client-michael-tan.jpg";
import founderOfficeImage from "../../../../assets/founder-office.png";

export default function COOAIWorkforceControlCenter({
  currentStep = 20,
  totalSteps = 20,
  draftMessage,
  onBack,
  onSaveProgress,
  onNext,
}) {
  const [taskFilter, setTaskFilter] = useState("today");
  const [activeModal, setActiveModal] = useState(null);

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
            <h1 className="text-[32px] md:text-[38px] font-serif font-bold text-white tracking-wide uppercase">
              AI Workforce Control Center
            </h1>
            <p className="text-[#a4b3c7] text-[16px] max-w-[700px] leading-relaxed">
              Manage, monitor and grow your AI team. Everything you need, in one place.
            </p>
          </div>

          {/* AI COO Chat Bubble & Avatar */}
          <div className="flex items-center gap-3 shrink-0 self-end lg:self-start">
            <div className="relative bg-white text-[#0f172a] rounded-2xl px-5 py-3.5 shadow-2xl border border-blue-200/50 max-w-[340px]">
              <p className="text-[16px] leading-snug font-medium text-[#0f172a]">
                Here is your AI Workforce Control Center. You can monitor performance, approve actions, view reports and give new tasks anytime.
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

        {/* Row 1: 4 Key KPI Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Card 1: AI Employees */}
          <div className="rounded-2xl p-4 bg-[#0a1526]/90 border border-[#1e2e48] shadow-md flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
              <Users size={24} />
            </div>
            <div>
              <div className="text-[28px] font-bold text-white leading-none mb-1">12</div>
              <div className="text-[16px] text-[#a4b3c7]">AI Employees</div>
              <div className="text-[16px] text-[#8fa3bf]">8 Active | 4 Idle</div>
            </div>
          </div>

          {/* Card 2: Tasks Completed */}
          <div className="rounded-2xl p-4 bg-[#0a1526]/90 border border-[#1e2e48] shadow-md flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/40 text-blue-400 flex items-center justify-center shrink-0">
              <CheckCircle2 size={24} />
            </div>
            <div>
              <div className="text-[28px] font-bold text-white leading-none mb-1">48</div>
              <div className="text-[16px] text-[#a4b3c7]">Tasks Completed</div>
              <div className="text-[16px] text-[#8fa3bf]">Today</div>
            </div>
          </div>

          {/* Card 3: Tasks in Progress */}
          <div className="rounded-2xl p-4 bg-[#0a1526]/90 border border-[#1e2e48] shadow-md flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 flex items-center justify-center shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <div className="text-[28px] font-bold text-white leading-none mb-1">7</div>
              <div className="text-[16px] text-[#a4b3c7]">Tasks in Progress</div>
              <div className="text-[16px] text-[#8fa3bf]">Across Teams</div>
            </div>
          </div>

          {/* Card 4: Awaiting Approval */}
          <div className="rounded-2xl p-4 bg-[#0a1526]/90 border border-purple-500/30 shadow-md flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0">
              <Calendar size={24} />
            </div>
            <div>
              <div className="text-[28px] font-bold text-white leading-none mb-1">5</div>
              <div className="text-[16px] text-[#a4b3c7]">Awaiting Approval</div>
              <div className="text-[16px] text-[#e2b76a] font-medium">Needs Your Review</div>
            </div>
          </div>
        </div>

        {/* Row 2: 3D AI Office Floor & AI Team Status Donut */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-stretch">
          {/* Left: 3D AI Office Floor (8 cols) */}
          <div className="xl:col-span-8 rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg flex flex-col justify-between overflow-hidden relative">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                  <Building2 size={22} />
                </div>
                <div>
                  <h2 className="text-[20px] font-bold text-white">AI Office Floor (3D View)</h2>
                  <p className="text-[16px] text-[#8fa3bf]">
                    Your AI employees working together across different functions.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveModal("office3d")}
                className="px-4 py-2 rounded-xl bg-[#d69a2b] hover:bg-[#e0aa48] text-[#020d18] font-bold text-[16px] flex items-center gap-2 cursor-pointer transition-colors shrink-0 self-start sm:self-auto shadow-md"
              >
                <Building2 size={18} /> Enter 3D AI Office <ArrowRight size={16} />
              </button>
            </div>

            {/* Office Visual Floor Container */}
            <div className="relative rounded-2xl overflow-hidden border border-[#233552] min-h-[290px] flex flex-col justify-between p-4 bg-gradient-to-b from-[#0a182d] via-[#071222] to-[#040912]">
              {/* Background realistic office texture / image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-luminosity filter blur-xs"
                style={{ backgroundImage: `url(${founderOfficeImage})` }}
              />
              {/* Dark luxury gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#040912] via-transparent to-[#071222]/80" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

              {/* Center IGBN Emblem */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-10">
                <div className="w-16 h-16 rounded-full border-2 border-[#d69a2b]/60 bg-[#06101e]/90 flex items-center justify-center text-[#d69a2b] shadow-[0_0_25px_rgba(214,154,43,0.3)]">
                  <Globe2 size={32} />
                </div>
                <span className="text-[16px] font-serif font-black tracking-widest text-[#d69a2b] mt-1">
                  IGBN
                </span>
              </div>

              {/* 4 Department Floating Pod Tags */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                {/* Pod 1: Research */}
                <div className="px-3 py-1.5 rounded-xl bg-[#1b122e]/90 border border-[#a855f7]/50 text-white flex items-center gap-2 shadow-lg backdrop-blur-md">
                  <div className="w-6 h-6 rounded-md bg-purple-600/30 text-purple-300 flex items-center justify-center shrink-0">
                    <Search size={14} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[16px] font-bold truncate">Research &amp; Intel</div>
                    <div className="text-[16px] text-purple-300">2 AI Employees</div>
                  </div>
                </div>

                {/* Pod 2: Business Development */}
                <div className="px-3 py-1.5 rounded-xl bg-[#0e1d38]/90 border border-[#3b82f6]/50 text-white flex items-center gap-2 shadow-lg backdrop-blur-md">
                  <div className="w-6 h-6 rounded-md bg-blue-600/30 text-blue-300 flex items-center justify-center shrink-0">
                    <BarChart3 size={14} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[16px] font-bold truncate">Business Dev</div>
                    <div className="text-[16px] text-blue-300">3 AI Employees</div>
                  </div>
                </div>

                {/* Pod 3: Email Outreach */}
                <div className="px-3 py-1.5 rounded-xl bg-[#0a231b]/90 border border-[#10b981]/50 text-white flex items-center gap-2 shadow-lg backdrop-blur-md">
                  <div className="w-6 h-6 rounded-md bg-emerald-600/30 text-emerald-300 flex items-center justify-center shrink-0">
                    <Mail size={14} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[16px] font-bold truncate">Email Outreach</div>
                    <div className="text-[16px] text-emerald-300">3 AI Employees</div>
                  </div>
                </div>

                {/* Pod 4: Monitoring & Reports */}
                <div className="px-3 py-1.5 rounded-xl bg-[#241c0b]/90 border border-[#d69a2b]/50 text-white flex items-center gap-2 shadow-lg backdrop-blur-md">
                  <div className="w-6 h-6 rounded-md bg-amber-600/30 text-amber-300 flex items-center justify-center shrink-0">
                    <Users size={14} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[16px] font-bold truncate">Monitoring &amp; Reports</div>
                    <div className="text-[16px] text-amber-300">2 AI Employees</div>
                  </div>
                </div>
              </div>

              {/* 4 Seated Workstation Avatars */}
              <div className="relative z-10 grid grid-cols-4 gap-4 mt-auto pt-8 pb-2">
                {/* Desk 1: Neha */}
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.4)] bg-[#160d29]">
                    <img src={clientNehaImage} alt="Research" className="w-full h-full object-cover" />
                    <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border border-[#020d18]"></span>
                  </div>
                  <span className="text-[16px] font-bold text-white mt-1.5">Neha</span>
                  <span className="text-[16px] text-purple-300">Research</span>
                </div>

                {/* Desk 2: Rajiv */}
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)] bg-[#0a1526]">
                    <img src={clientRajivImage} alt="BizDev" className="w-full h-full object-cover" />
                    <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border border-[#020d18]"></span>
                  </div>
                  <span className="text-[16px] font-bold text-white mt-1.5">Rajiv</span>
                  <span className="text-[16px] text-blue-300">BizDev</span>
                </div>

                {/* Desk 3: Michael */}
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)] bg-[#081a14]">
                    <img src={clientMichaelImage} alt="Outreach" className="w-full h-full object-cover" />
                    <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border border-[#020d18]"></span>
                  </div>
                  <span className="text-[16px] font-bold text-white mt-1.5">Michael</span>
                  <span className="text-[16px] text-emerald-300">Outreach</span>
                </div>

                {/* Desk 4: AI COO / Executive */}
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#d69a2b] shadow-[0_0_15px_rgba(214,154,43,0.4)] bg-[#1a1408]">
                    <img src={aiAgentImage} alt="AI COO" className="w-full h-full object-cover" />
                    <span className="absolute bottom-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border border-[#020d18]"></span>
                  </div>
                  <span className="text-[16px] font-bold text-white mt-1.5">AI COO</span>
                  <span className="text-[16px] text-[#e2b76a]">Lead</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: AI Team Status Donut (4 cols) */}
          <div className="xl:col-span-4 rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1e2e48]">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 text-[#e2b76a] flex items-center justify-center shrink-0">
                  <FileText size={18} />
                </div>
                <h3 className="text-[18px] font-bold text-white">AI Team Status</h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModal("team")}
                className="text-[16px] font-medium text-[#d69a2b] hover:underline flex items-center gap-1 cursor-pointer"
              >
                Manage AI Team →
              </button>
            </div>

            {/* Donut Chart & Legend */}
            <div className="flex flex-col sm:flex-row items-center justify-around gap-6 py-2">
              {/* SVG Donut */}
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background Circle */}
                  <circle cx="50" cy="50" r="38" stroke="#162338" strokeWidth="12" fill="none" />
                  {/* Active Segment (8/12 = 66.6%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#10b981"
                    strokeWidth="12"
                    strokeDasharray="160 240"
                    strokeDashoffset="0"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* In Progress Segment (3/12 = 25%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#3b82f6"
                    strokeWidth="12"
                    strokeDasharray="60 240"
                    strokeDashoffset="-165"
                    fill="none"
                    strokeLinecap="round"
                  />
                  {/* Idle Segment (1/12 = 8.3%) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="38"
                    stroke="#94a3b8"
                    strokeWidth="12"
                    strokeDasharray="20 240"
                    strokeDashoffset="-228"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
                {/* Donut Center Text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-[28px] font-bold text-white leading-none">12</span>
                  <span className="text-[16px] text-[#8fa3bf]">AI Employees</span>
                </div>
              </div>

              {/* Legend List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-400"></span>
                    <span className="text-[16px] text-white">Active</span>
                  </div>
                  <span className="text-[16px] font-bold text-white">8</span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-blue-400"></span>
                    <span className="text-[16px] text-white">In Progress</span>
                  </div>
                  <span className="text-[16px] font-bold text-white">3</span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded-full bg-slate-400"></span>
                    <span className="text-[16px] text-white">Idle</span>
                  </div>
                  <span className="text-[16px] font-bold text-white">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: Lower 3-Column Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          {/* Column 1: Real-Time Activity Feed & Performance Insights (5 cols) */}
          <div className="xl:col-span-5 flex flex-col gap-6">
            {/* Real-Time Activity Feed */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1e2e48]">
                <div className="flex items-center gap-2">
                  <Radio size={18} className="text-emerald-400" />
                  <h3 className="text-[18px] font-bold text-white">Real-Time Activity Feed</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModal("feed")}
                  className="text-[16px] font-medium text-[#3b82f6] hover:underline cursor-pointer"
                >
                  View All →
                </button>
              </div>

              <div className="space-y-3">
                {/* 1 */}
                <div className="flex items-start gap-3 p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <span className="text-[16px] text-[#8fa3bf] shrink-0 mt-0.5">11:28 AM</span>
                  <img src={clientNehaImage} alt="" className="w-6 h-6 rounded-full object-cover shrink-0 border border-purple-400/50" />
                  <div className="min-w-0 flex-1">
                    <span className="text-[16px] font-bold text-white block">AI Research Executive</span>
                    <span className="text-[16px] text-[#cbd5e1] leading-snug">Found 3 new potential distributors in Germany.</span>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex items-start gap-3 p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <span className="text-[16px] text-[#8fa3bf] shrink-0 mt-0.5">11:15 AM</span>
                  <img src={clientRajivImage} alt="" className="w-6 h-6 rounded-full object-cover shrink-0 border border-blue-400/50" />
                  <div className="min-w-0 flex-1">
                    <span className="text-[16px] font-bold text-white block">AI Business Development Executive</span>
                    <span className="text-[16px] text-[#cbd5e1] leading-snug">Created opportunity record in CRM.</span>
                  </div>
                </div>

                {/* 3 */}
                <div className="flex items-start gap-3 p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <span className="text-[16px] text-[#8fa3bf] shrink-0 mt-0.5">11:02 AM</span>
                  <img src={clientMichaelImage} alt="" className="w-6 h-6 rounded-full object-cover shrink-0 border border-emerald-400/50" />
                  <div className="min-w-0 flex-1">
                    <span className="text-[16px] font-bold text-white block">AI Email Outreach Executive</span>
                    <span className="text-[16px] text-[#cbd5e1] leading-snug">Email draft ready for approval.</span>
                  </div>
                </div>

                {/* 4 */}
                <div className="flex items-start gap-3 p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <span className="text-[16px] text-[#8fa3bf] shrink-0 mt-0.5">10:48 AM</span>
                  <img src={aiAgentImage} alt="" className="w-6 h-6 rounded-full object-cover shrink-0 border border-[#d69a2b]" />
                  <div className="min-w-0 flex-1">
                    <span className="text-[16px] font-bold text-white block">AI COO</span>
                    <span className="text-[16px] text-[#cbd5e1] leading-snug">Generated weekly market insights report.</span>
                  </div>
                </div>

                {/* 5 */}
                <div className="flex items-start gap-3 p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <span className="text-[16px] text-[#8fa3bf] shrink-0 mt-0.5">10:32 AM</span>
                  <img src={clientNehaImage} alt="" className="w-6 h-6 rounded-full object-cover shrink-0 border border-purple-400/50" />
                  <div className="min-w-0 flex-1">
                    <span className="text-[16px] font-bold text-white block">AI Research Executive</span>
                    <span className="text-[16px] text-[#cbd5e1] leading-snug">Updated competitor analysis.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Insights */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1e2e48]">
                <div className="flex items-center gap-2">
                  <BarChart3 size={18} className="text-[#e2b76a]" />
                  <h3 className="text-[18px] font-bold text-white">Performance Insights</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModal("insights")}
                  className="text-[16px] font-medium text-[#3b82f6] hover:underline cursor-pointer"
                >
                  View Details →
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#06101e]/80 border border-[#162338]">
                  <div className="flex items-center gap-2 text-emerald-400 mb-1">
                    <CheckCircle2 size={18} />
                    <span className="text-[24px] font-bold text-white">92%</span>
                  </div>
                  <div className="text-[16px] text-[#cbd5e1]">Task Completion Rate</div>
                  <div className="text-[16px] text-emerald-400 font-medium">↑ 12% vs last week</div>
                </div>

                <div className="p-3 rounded-xl bg-[#06101e]/80 border border-[#162338]">
                  <div className="flex items-center gap-2 text-amber-300 mb-1">
                    <Sparkles size={18} />
                    <span className="text-[24px] font-bold text-white">4.8</span>
                  </div>
                  <div className="text-[16px] text-[#cbd5e1]">Average Quality Score</div>
                  <div className="text-[16px] text-emerald-400 font-medium">↑ 0.6 vs last week</div>
                </div>

                <div className="p-3 rounded-xl bg-[#06101e]/80 border border-[#162338]">
                  <div className="flex items-center gap-2 text-blue-400 mb-1">
                    <Clock size={18} />
                    <span className="text-[24px] font-bold text-white">28 hrs</span>
                  </div>
                  <div className="text-[16px] text-[#cbd5e1]">Time Saved (This Week)</div>
                  <div className="text-[16px] text-emerald-400 font-medium">↑ 35% vs last week</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Task Overview & Top Performing AI Employees (4 cols) */}
          <div className="xl:col-span-4 flex flex-col gap-6">
            {/* Task Overview */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1e2e48]">
                <div className="flex items-center gap-2">
                  <FileCheck size={18} className="text-[#e2b76a]" />
                  <h3 className="text-[18px] font-bold text-white">Task Overview</h3>
                </div>
                <div className="flex items-center rounded-lg bg-[#06101e] border border-[#162338] p-0.5">
                  <button
                    type="button"
                    onClick={() => setTaskFilter("today")}
                    className={`px-2.5 py-1 rounded-md text-[16px] cursor-pointer ${
                      taskFilter === "today" ? "bg-[#d69a2b] text-[#020d18] font-bold" : "text-[#8fa3bf]"
                    }`}
                  >
                    Today
                  </button>
                  <button
                    type="button"
                    onClick={() => setTaskFilter("week")}
                    className={`px-2.5 py-1 rounded-md text-[16px] cursor-pointer ${
                      taskFilter === "week" ? "bg-[#d69a2b] text-[#020d18] font-bold" : "text-[#8fa3bf]"
                    }`}
                  >
                    Week
                  </button>
                  <button
                    type="button"
                    onClick={() => setTaskFilter("month")}
                    className={`px-2.5 py-1 rounded-md text-[16px] cursor-pointer ${
                      taskFilter === "month" ? "bg-[#d69a2b] text-[#020d18] font-bold" : "text-[#8fa3bf]"
                    }`}
                  >
                    Month
                  </button>
                </div>
              </div>

              {/* Task Donut Chart & Legend */}
              <div className="flex items-center justify-around gap-4 py-2">
                <div className="relative w-32 h-32 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="38" stroke="#162338" strokeWidth="12" fill="none" />
                    {/* Completed: 48/60 = 80% */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#10b981"
                      strokeWidth="12"
                      strokeDasharray="190 240"
                      strokeDashoffset="0"
                      fill="none"
                      strokeLinecap="round"
                    />
                    {/* In Progress: 7/60 = 11.6% */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#3b82f6"
                      strokeWidth="12"
                      strokeDasharray="28 240"
                      strokeDashoffset="-192"
                      fill="none"
                      strokeLinecap="round"
                    />
                    {/* Awaiting: 5/60 = 8.3% */}
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      stroke="#f59e0b"
                      strokeWidth="12"
                      strokeDasharray="20 240"
                      strokeDashoffset="-222"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-[26px] font-bold text-white leading-none">60</span>
                    <span className="text-[16px] text-[#8fa3bf]">Total Tasks</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-emerald-400"></span>
                    <span className="text-[16px] font-bold text-white">48</span>
                    <span className="text-[16px] text-[#cbd5e1]">Completed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-blue-400"></span>
                    <span className="text-[16px] font-bold text-white">7</span>
                    <span className="text-[16px] text-[#cbd5e1]">In Progress</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-amber-400"></span>
                    <span className="text-[16px] font-bold text-white">5</span>
                    <span className="text-[16px] text-[#cbd5e1]">Awaiting Approval</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-400"></span>
                    <span className="text-[16px] font-bold text-white">0</span>
                    <span className="text-[16px] text-[#cbd5e1]">Blocked</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Performing AI Employees */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1e2e48]">
                <div className="flex items-center gap-2">
                  <Trophy size={18} className="text-[#e2b76a]" />
                  <h3 className="text-[18px] font-bold text-white">Top Performing AI Employees</h3>
                </div>
                <span className="text-[16px] text-[#8fa3bf]">This Week ▾</span>
              </div>

              <div className="space-y-3.5">
                {/* 1 */}
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#d69a2b] text-[#020d18] text-[16px] font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <img src={clientMichaelImage} alt="" className="w-8 h-8 rounded-full object-cover shrink-0 border border-emerald-400" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between text-[16px] mb-1">
                      <span className="text-white font-medium truncate">AI Email Outreach Executive</span>
                      <span className="text-emerald-400 font-bold">98%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#162338] overflow-hidden">
                      <div className="w-[98%] h-full bg-emerald-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* 2 */}
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-400 text-[#020d18] text-[16px] font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <img src={clientNehaImage} alt="" className="w-8 h-8 rounded-full object-cover shrink-0 border border-purple-400" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between text-[16px] mb-1">
                      <span className="text-white font-medium truncate">AI Research Executive</span>
                      <span className="text-emerald-400 font-bold">94%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#162338] overflow-hidden">
                      <div className="w-[94%] h-full bg-emerald-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* 3 */}
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-700 text-white text-[16px] font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <img src={clientRajivImage} alt="" className="w-8 h-8 rounded-full object-cover shrink-0 border border-blue-400" />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between text-[16px] mb-1">
                      <span className="text-white font-medium truncate">AI Business Development Executive</span>
                      <span className="text-emerald-400 font-bold">91%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-[#162338] overflow-hidden">
                      <div className="w-[91%] h-full bg-emerald-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Quick Actions & Connected Tools (3 cols) */}
          <div className="xl:col-span-3 flex flex-col gap-6">
            {/* Quick Actions */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#1e2e48]">
                <Zap size={18} className="text-[#e2b76a]" />
                <h3 className="text-[18px] font-bold text-white">Quick Actions</h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setActiveModal("new_task")}
                  className="p-3 rounded-xl bg-[#0e1d34] hover:bg-[#162b48] border border-[#2b3d5c] text-white flex flex-col items-center justify-center gap-1.5 text-center cursor-pointer transition-colors"
                >
                  <Plus size={20} className="text-blue-400" />
                  <span className="text-[16px] font-medium leading-tight">Give New Task</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModal("approvals")}
                  className="p-3 rounded-xl bg-[#0e1d34] hover:bg-[#162b48] border border-[#2b3d5c] text-white flex flex-col items-center justify-center gap-1.5 text-center cursor-pointer transition-colors"
                >
                  <CheckCircle2 size={20} className="text-emerald-400" />
                  <span className="text-[16px] font-medium leading-tight">Approve Pending</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModal("reports")}
                  className="p-3 rounded-xl bg-[#0e1d34] hover:bg-[#162b48] border border-[#2b3d5c] text-white flex flex-col items-center justify-center gap-1.5 text-center cursor-pointer transition-colors"
                >
                  <BarChart3 size={20} className="text-blue-400" />
                  <span className="text-[16px] font-medium leading-tight">View Reports</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveModal("permissions")}
                  className="p-3 rounded-xl bg-[#0e1d34] hover:bg-[#162b48] border border-[#2b3d5c] text-white flex flex-col items-center justify-center gap-1.5 text-center cursor-pointer transition-colors"
                >
                  <Sliders size={20} className="text-[#e2b76a]" />
                  <span className="text-[16px] font-medium leading-tight">Adjust Permissions</span>
                </button>
              </div>
            </div>

            {/* Connected Tools */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#1e2e48]">
                <div className="flex items-center gap-2">
                  <Link2 size={18} className="text-blue-400" />
                  <h3 className="text-[18px] font-bold text-white">Connected Tools</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveModal("tools")}
                  className="text-[16px] font-medium text-[#3b82f6] hover:underline cursor-pointer"
                >
                  Manage →
                </button>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <div className="flex items-center gap-2 min-w-0">
                    <Mail size={16} className="text-[#4285F4] shrink-0" />
                    <span className="text-[16px] text-white truncate">Gmail</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/70 text-emerald-400 text-[16px] font-medium">
                    <Check size={12} className="stroke-[3]" /> Connected
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FF7A59] shrink-0"></div>
                    <span className="text-[16px] text-white truncate">HubSpot CRM</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/70 text-emerald-400 text-[16px] font-medium">
                    <Check size={12} className="stroke-[3]" /> Connected
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <div className="flex items-center gap-2 min-w-0">
                    <Globe2 size={16} className="text-[#34A853] shrink-0" />
                    <span className="text-[16px] text-white truncate">Google Drive</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/70 text-emerald-400 text-[16px] font-medium">
                    <Check size={12} className="stroke-[3]" /> Connected
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <div className="flex items-center gap-2 min-w-0">
                    <Calendar size={16} className="text-[#4285F4] shrink-0" />
                    <span className="text-[16px] text-white truncate">Google Calendar</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/70 text-emerald-400 text-[16px] font-medium">
                    <Check size={12} className="stroke-[3]" /> Connected
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <div className="flex items-center gap-2 min-w-0">
                    <Search size={16} className="text-purple-400 shrink-0" />
                    <span className="text-[16px] text-white truncate">Web &amp; Research Tools</span>
                  </div>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-950/70 text-emerald-400 text-[16px] font-medium">
                    <Check size={12} className="stroke-[3]" /> Connected
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Generic Interactive Modal */}
        {activeModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-[#0b1626] border border-[#d69a2b]/50 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1e2e48]">
                <h3 className="text-[20px] font-bold text-white flex items-center gap-2">
                  <Sparkles size={20} className="text-[#e2b76a]" />
                  Control Center Action
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="text-slate-400 hover:text-white cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="text-[16px] text-[#cbd5e1] mb-6">
                Your AI Workforce Control Center is live and operating according to your configured parameters. Live telemetry and automated coordination are functioning normally.
              </p>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#d69a2b] text-[#020d18] font-bold text-[16px] cursor-pointer hover:bg-[#e0aa48]"
                >
                  Close
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
