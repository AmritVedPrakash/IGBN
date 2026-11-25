import { useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Check,
  CheckCircle2,
  Eye,
  FileEdit,
  FileText,
  Lock,
  Mail,
  Search,
  Send,
  Settings,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Slash,
  UserCheck,
  X,
  XCircle,
} from "lucide-react";
import aiAgentImage from "../../../../assets/igbndivision/aiagent.png";
import clientNehaImage from "../../../../assets/marketing-pr/client-neha-sharma.jpg";
import clientRajivImage from "../../../../assets/marketing-pr/client-rajiv-mehta.jpg";
import clientMichaelImage from "../../../../assets/marketing-pr/client-michael-tan.jpg";

export default function COOSetPermissionsApprovals({
  currentStep = 16,
  totalSteps = 17,
  draftMessage,
  onBack,
  onSaveProgress,
  onNext,
}) {
  const [activeModalEmployee, setActiveModalEmployee] = useState(null);

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
              <span className="text-[#e2b76a]">15.</span> Set Permissions &amp; Approvals
            </h1>
            <p className="text-[#a4b3c7] text-[16px] max-w-[700px] leading-relaxed">
              Decide what each AI employee can do, what requires your approval and what they cannot access.
            </p>
          </div>

          {/* AI COO Chat Bubble & Avatar */}
          <div className="flex items-center gap-3 shrink-0 self-end lg:self-start">
            <div className="relative bg-white text-[#0f172a] rounded-2xl px-5 py-3.5 shadow-2xl border border-blue-200/50 max-w-[340px]">
              <p className="text-[16px] leading-snug font-medium text-[#0f172a]">
                You remain in control. Set what each AI employee can do, what requires your approval and what they cannot access.
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

        {/* Top Section: Permission Overview Table (8 cols) + You Remain in Control (4 cols) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          {/* Permission Overview Table (8 cols) */}
          <div className="xl:col-span-8 rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg overflow-x-auto">
            <h2 className="text-[20px] font-bold text-[#e2b76a] mb-4">Permission Overview</h2>

            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-[#1e2e48] text-[#8fa3bf]">
                  <th className="py-3 px-3 text-[16px] font-semibold">AI Employee</th>
                  <th className="py-3 px-2 text-[16px] font-semibold text-center">
                    <div className="flex flex-col items-center gap-1">
                      <Eye size={18} className="text-[#a4b3c7]" />
                      <span>View Data</span>
                    </div>
                  </th>
                  <th className="py-3 px-2 text-[16px] font-semibold text-center">
                    <div className="flex flex-col items-center gap-1">
                      <FileText size={18} className="text-[#a4b3c7]" />
                      <span>Create Content</span>
                    </div>
                  </th>
                  <th className="py-3 px-2 text-[16px] font-semibold text-center">
                    <div className="flex flex-col items-center gap-1">
                      <Send size={18} className="text-[#a4b3c7]" />
                      <span>Send Communication</span>
                    </div>
                  </th>
                  <th className="py-3 px-2 text-[16px] font-semibold text-center">
                    <div className="flex flex-col items-center gap-1">
                      <FileEdit size={18} className="text-[#a4b3c7]" />
                      <span>Modify Records</span>
                    </div>
                  </th>
                  <th className="py-3 px-2 text-[16px] font-semibold text-center">
                    <div className="flex flex-col items-center gap-1">
                      <Settings size={18} className="text-[#a4b3c7]" />
                      <span>Make Decisions</span>
                    </div>
                  </th>
                  <th className="py-3 px-2 text-[16px] font-semibold text-center">
                    <div className="flex flex-col items-center gap-1">
                      <UserCheck size={18} className="text-[#e2b76a]" />
                      <span className="text-[#e2b76a]">Requires Approval</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#162338]">
                {/* Row 1: AI Research Executive */}
                <tr className="hover:bg-[#0e1d34]/40 transition-colors">
                  <td className="py-3.5 px-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={clientNehaImage}
                        alt=""
                        className="w-9 h-9 rounded-full object-cover shrink-0 border border-purple-500/40"
                      />
                      <div>
                        <div className="text-[16px] font-bold text-white leading-tight">
                          AI Research Executive
                        </div>
                        <div className="text-[16px] text-purple-300/80">Research &amp; Intelligence</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check size={16} className="stroke-[3]" />
                    </div>
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check size={16} className="stroke-[3]" />
                    </div>
                  </td>
                  <td className="py-3.5 px-2 text-center text-[#64748b] text-[16px] font-bold">—</td>
                  <td className="py-3.5 px-2 text-center text-[#64748b] text-[16px] font-bold">—</td>
                  <td className="py-3.5 px-2 text-center text-[#64748b] text-[16px] font-bold">—</td>
                  <td className="py-3.5 px-2 text-center">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500/20 text-[#e2b76a]">
                      <AlertTriangle size={15} />
                    </div>
                  </td>
                </tr>

                {/* Row 2: AI Business Development Executive */}
                <tr className="hover:bg-[#0e1d34]/40 transition-colors">
                  <td className="py-3.5 px-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={clientRajivImage}
                        alt=""
                        className="w-9 h-9 rounded-full object-cover shrink-0 border border-blue-500/40"
                      />
                      <div>
                        <div className="text-[16px] font-bold text-white leading-tight">
                          AI Business Development Executive
                        </div>
                        <div className="text-[16px] text-blue-300/80">Business Development</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check size={16} className="stroke-[3]" />
                    </div>
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check size={16} className="stroke-[3]" />
                    </div>
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check size={16} className="stroke-[3]" />
                    </div>
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check size={16} className="stroke-[3]" />
                    </div>
                  </td>
                  <td className="py-3.5 px-2 text-center text-[#64748b] text-[16px] font-bold">—</td>
                  <td className="py-3.5 px-2 text-center">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500/20 text-[#e2b76a]">
                      <AlertTriangle size={15} />
                    </div>
                  </td>
                </tr>

                {/* Row 3: AI Email Outreach Executive */}
                <tr className="hover:bg-[#0e1d34]/40 transition-colors">
                  <td className="py-3.5 px-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={clientMichaelImage}
                        alt=""
                        className="w-9 h-9 rounded-full object-cover shrink-0 border border-emerald-500/40"
                      />
                      <div>
                        <div className="text-[16px] font-bold text-white leading-tight">
                          AI Email Outreach Executive
                        </div>
                        <div className="text-[16px] text-emerald-300/80">Sales &amp; Outreach</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check size={16} className="stroke-[3]" />
                    </div>
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check size={16} className="stroke-[3]" />
                    </div>
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check size={16} className="stroke-[3]" />
                    </div>
                  </td>
                  <td className="py-3.5 px-2 text-center">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400">
                      <Check size={16} className="stroke-[3]" />
                    </div>
                  </td>
                  <td className="py-3.5 px-2 text-center text-[#64748b] text-[16px] font-bold">—</td>
                  <td className="py-3.5 px-2 text-center">
                    <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-500/20 text-[#e2b76a]">
                      <AlertTriangle size={15} />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Right Card: You Remain in Control (4 cols) */}
          <div className="xl:col-span-4 rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-[#1e2e48]">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                  <Shield size={20} />
                </div>
                <h3 className="text-[18px] font-bold text-white">You Remain in Control</h3>
              </div>

              <ul className="space-y-3.5">
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-relaxed">
                  <Check size={18} className="text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Change permissions anytime.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-relaxed">
                  <Check size={18} className="text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Approvals are based on your company rules.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-relaxed">
                  <Check size={18} className="text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Sensitive information stays protected.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-relaxed">
                  <Check size={18} className="text-emerald-400 shrink-0 stroke-[3] mt-0.5" />
                  <span>Each AI employee only accesses what they need to do their job.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 Detailed Employee Permission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: AI Research Executive */}
          <div className="rounded-2xl p-5 bg-gradient-to-b from-[#1b122e]/90 to-[#0c1426]/95 border border-[#a855f7]/40 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#a855f7]/50 shadow-md shrink-0 bg-[#160d29]">
                    <img
                      src={clientNehaImage}
                      alt="AI Research Executive"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-white leading-tight">
                      AI Research Executive
                    </h3>
                    <p className="text-[16px] text-purple-300/80">Research &amp; Intelligence</p>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] font-medium mt-1">
                      <Check size={13} className="stroke-[3]" /> Connected
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-purple-600/25 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0">
                  <Search size={20} />
                </div>
              </div>

              {/* Can Access */}
              <div className="mb-4">
                <h4 className="text-[16px] font-bold text-white mb-2">Can Access</h4>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span>Public research and market information</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span>Company Brain</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span>Product information</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span>Approved internal documents</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span>Industry databases (when connected)</span>
                  </li>
                </ul>
              </div>

              {/* Cannot Access */}
              <div className="mb-5">
                <h4 className="text-[16px] font-bold text-red-400 mb-2">Cannot Access</h4>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                      <Slash size={11} className="stroke-[3]" />
                    </div>
                    <span>Financial records</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                      <Slash size={11} className="stroke-[3]" />
                    </div>
                    <span>HR records</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                      <Slash size={11} className="stroke-[3]" />
                    </div>
                    <span>Payroll information</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                      <Slash size={11} className="stroke-[3]" />
                    </div>
                    <span>Confidential contracts</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                      <Slash size={11} className="stroke-[3]" />
                    </div>
                    <span>Sensitive pricing</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveModalEmployee("research")}
              className="w-full py-2.5 px-4 rounded-xl bg-[#0c1426] border border-[#a855f7]/40 hover:border-purple-400 text-white font-medium text-[16px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Settings size={16} /> Edit Permissions
            </button>
          </div>

          {/* Card 2: AI Business Development Executive */}
          <div className="rounded-2xl p-5 bg-gradient-to-b from-[#0e1d38]/90 to-[#0c1426]/95 border border-[#3b82f6]/40 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#3b82f6]/50 shadow-md shrink-0 bg-[#0a1526]">
                    <img
                      src={clientRajivImage}
                      alt="AI Business Development Executive"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-white leading-tight">
                      AI Business Development Executive
                    </h3>
                    <p className="text-[16px] text-blue-300/80">Business Development</p>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] font-medium mt-1">
                      <Check size={13} className="stroke-[3]" /> Connected
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-600/25 border border-blue-500/40 text-blue-300 flex items-center justify-center shrink-0">
                  <BarChart3 size={20} />
                </div>
              </div>

              {/* Can */}
              <div className="mb-4">
                <h4 className="text-[16px] font-bold text-white mb-2">Can</h4>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span>View CRM prospects</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span>Create and update opportunity records</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span>Prepare meeting briefs</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span>Draft proposals and presentations</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span>Schedule meetings (when connected)</span>
                  </li>
                </ul>
              </div>

              {/* Requires Your Approval */}
              <div className="mb-5">
                <h4 className="text-[16px] font-bold text-[#e2b76a] mb-2">Requires Your Approval</h4>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-amber-500/20 text-[#e2b76a] flex items-center justify-center shrink-0">
                      <AlertTriangle size={11} />
                    </div>
                    <span>Send quotations</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-amber-500/20 text-[#e2b76a] flex items-center justify-center shrink-0">
                      <AlertTriangle size={11} />
                    </div>
                    <span>Change commercial terms</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-amber-500/20 text-[#e2b76a] flex items-center justify-center shrink-0">
                      <AlertTriangle size={11} />
                    </div>
                    <span>Contact strategic accounts</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-amber-500/20 text-[#e2b76a] flex items-center justify-center shrink-0">
                      <AlertTriangle size={11} />
                    </div>
                    <span>Create purchase requests</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-amber-500/20 text-[#e2b76a] flex items-center justify-center shrink-0">
                      <AlertTriangle size={11} />
                    </div>
                    <span>Sign contracts</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveModalEmployee("business_dev")}
              className="w-full py-2.5 px-4 rounded-xl bg-[#0c1426] border border-[#3b82f6]/40 hover:border-blue-400 text-white font-medium text-[16px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Settings size={16} /> Edit Permissions
            </button>
          </div>

          {/* Card 3: AI Email Outreach Executive */}
          <div className="rounded-2xl p-5 bg-gradient-to-b from-[#0a231b]/90 to-[#0c1426]/95 border border-[#10b981]/40 shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl overflow-hidden border border-[#10b981]/50 shadow-md shrink-0 bg-[#081a14]">
                    <img
                      src={clientMichaelImage}
                      alt="AI Email Outreach Executive"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-white leading-tight">
                      AI Email Outreach Executive
                    </h3>
                    <p className="text-[16px] text-emerald-300/80">Sales &amp; Outreach</p>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] font-medium mt-1">
                      <Check size={13} className="stroke-[3]" /> Connected
                    </span>
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-600/25 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shrink-0">
                  <Mail size={20} />
                </div>
              </div>

              {/* Can */}
              <div className="mb-4">
                <h4 className="text-[16px] font-bold text-white mb-2">Can</h4>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span>Draft emails and sequences</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span>Use approved email templates</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span>Update CRM records</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span>Classify and track responses</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check size={12} className="stroke-[3]" />
                    </div>
                    <span>Manage follow-ups</span>
                  </li>
                </ul>
              </div>

              {/* Requires Your Approval */}
              <div className="mb-5">
                <h4 className="text-[16px] font-bold text-[#e2b76a] mb-2">Requires Your Approval</h4>
                <ul className="space-y-1.5">
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-amber-500/20 text-[#e2b76a] flex items-center justify-center shrink-0">
                      <AlertTriangle size={11} />
                    </div>
                    <span>Send first-contact emails</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-amber-500/20 text-[#e2b76a] flex items-center justify-center shrink-0">
                      <AlertTriangle size={11} />
                    </div>
                    <span>Send bulk email campaigns</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-amber-500/20 text-[#e2b76a] flex items-center justify-center shrink-0">
                      <AlertTriangle size={11} />
                    </div>
                    <span>Change approved messaging</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-amber-500/20 text-[#e2b76a] flex items-center justify-center shrink-0">
                      <AlertTriangle size={11} />
                    </div>
                    <span>Contact existing customers</span>
                  </li>
                  <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                    <div className="w-4 h-4 rounded-full bg-amber-500/20 text-[#e2b76a] flex items-center justify-center shrink-0">
                      <AlertTriangle size={11} />
                    </div>
                    <span>Share customer information</span>
                  </li>
                </ul>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveModalEmployee("email_outreach")}
              className="w-full py-2.5 px-4 rounded-xl bg-[#0c1426] border border-[#10b981]/40 hover:border-emerald-400 text-white font-medium text-[16px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Settings size={16} /> Edit Permissions
            </button>
          </div>
        </div>

        {/* Bottom 2 Info Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Banner 1: Sensitive Data Protection */}
          <div className="rounded-2xl p-4 bg-[#0a1526]/90 border border-[#d69a2b]/30 shadow-md flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#d69a2b]/20 border border-[#d69a2b]/40 text-[#d69a2b] flex items-center justify-center shrink-0">
              <Lock size={20} />
            </div>
            <div className="space-y-1">
              <h4 className="text-[16px] font-bold text-[#e2b76a]">
                Sensitive Data Protection
              </h4>
              <p className="text-[16px] text-[#cbd5e1] leading-relaxed">
                Your data is secure. AI employees access your systems through secure authorization methods. IGBN does not require your passwords.
              </p>
            </div>
          </div>

          {/* Banner 2: Need Custom Rules? */}
          <div className="rounded-2xl p-4 bg-[#0a1526]/90 border border-[#1e2e48] shadow-md flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 text-blue-300 flex items-center justify-center shrink-0">
              <FileText size={20} />
            </div>
            <div className="space-y-1">
              <h4 className="text-[16px] font-bold text-[#e2b76a]">
                Need Custom Rules?
              </h4>
              <p className="text-[16px] text-[#cbd5e1] leading-relaxed">
                You can add additional permission rules based on your business requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Edit Permissions Modal */}
        {activeModalEmployee && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="bg-[#0b1626] border border-[#d69a2b]/50 rounded-2xl max-w-lg w-full p-6 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#1e2e48]">
                <h3 className="text-[20px] font-bold text-white flex items-center gap-2">
                  <Settings size={20} className="text-[#e2b76a]" />
                  Edit Permissions &amp; Approvals
                </h3>
                <button
                  type="button"
                  onClick={() => setActiveModalEmployee(null)}
                  className="text-slate-400 hover:text-white cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <p className="text-[16px] text-[#cbd5e1] mb-4">
                Configure custom operational limits, sensitive data restrictions, and mandatory approval triggers for this AI employee.
              </p>

              <div className="space-y-3 mb-6">
                <label className="flex items-center gap-3 p-3 rounded-xl bg-[#07101c] border border-[#1e2e48] cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#d69a2b]" />
                  <span className="text-[16px] text-white">Require founder approval for financial actions</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl bg-[#07101c] border border-[#1e2e48] cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#d69a2b]" />
                  <span className="text-[16px] text-white">Block access to confidential employee records</span>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl bg-[#07101c] border border-[#1e2e48] cursor-pointer">
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#d69a2b]" />
                  <span className="text-[16px] text-white">Log all automated actions in COO audit trail</span>
                </label>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalEmployee(null)}
                  className="px-5 py-2 rounded-xl bg-slate-800 text-white font-medium text-[16px] cursor-pointer hover:bg-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => setActiveModalEmployee(null)}
                  className="px-5 py-2 rounded-xl bg-[#d69a2b] text-[#020d18] font-bold text-[16px] cursor-pointer hover:bg-[#e0aa48]"
                >
                  Save Permissions
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
            className="coo-next-button min-w-[340px] text-[16px] ml-auto"
            onClick={onNext}
            type="button"
          >
            Next: Define How Your AI Team Works <ArrowRight size={18} />
          </button>
        </footer>
      </div>
    </>
  );
}
