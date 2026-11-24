import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  CheckCircle2,
  Clock,
  Code2,
  Database,
  FileText,
  Folder,
  Globe2,
  Layers,
  Lightbulb,
  Link2,
  Lock,
  Mail,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Search,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import aiAgentImage from "../../../../assets/igbndivision/aiagent.png";
import clientNehaImage from "../../../../assets/marketing-pr/client-neha-sharma.jpg";
import clientRajivImage from "../../../../assets/marketing-pr/client-rajiv-mehta.jpg";
import clientMichaelImage from "../../../../assets/marketing-pr/client-michael-tan.jpg";

export default function COOConnectBusinessTools({
  currentStep = 15,
  totalSteps = 16,
  draftMessage,
  onBack,
  onSaveProgress,
  onNext,
}) {
  // Connected tools state (with default active tools matching screenshot)
  const [connectedTools, setConnectedTools] = useState({
    gmail: true,
    hubspot: true,
    googledrive: true,
    googlecalendar: true,
    ms365: true,
  });

  const toggleTool = (id) => {
    setConnectedTools((prev) => ({
      ...prev,
      [id]: !prev[id],
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
              <span className="text-[#e2b76a]">14.</span> Connect Your Business Tools
            </h1>
            <p className="text-[#a4b3c7] text-[16px] max-w-[700px] leading-relaxed">
              Choose and connect the tools your AI employees need to work.
              <br />
              You only need to connect the systems required for your selected AI employees.
            </p>
          </div>

          {/* AI COO Chat Bubble & Avatar */}
          <div className="flex items-center gap-3 shrink-0 self-end lg:self-start">
            <div className="relative bg-white text-[#0f172a] rounded-2xl px-5 py-3.5 shadow-2xl border border-blue-200/50 max-w-[340px]">
              <p className="text-[16px] leading-snug font-medium text-[#0f172a]">
                Connect the tools your AI employees will use. You can always add or remove connections later.
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

        {/* Selected Employees Requirements Top Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Employee 1: AI Research Executive */}
          <div className="rounded-2xl p-4 bg-gradient-to-b from-[#1b122e]/90 to-[#0c1426]/95 border border-[#a855f7]/40 shadow-md flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#a855f7]/50 shadow-md shrink-0 bg-[#160d29]">
              <img
                src={clientNehaImage}
                alt="AI Research Executive"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1.5 min-w-0 flex-1">
              <h3 className="text-[18px] font-bold text-white leading-tight truncate">
                AI Research Executive
              </h3>
              <p className="text-[16px] text-purple-300/80 mb-2">Research &amp; Intelligence</p>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                  <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span>Needs research tools</span>
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                  <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span>Needs document access</span>
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                  <div className="w-4 h-4 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span>Needs product information</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Employee 2: AI Business Development Executive */}
          <div className="rounded-2xl p-4 bg-gradient-to-b from-[#0e1d38]/90 to-[#0c1426]/95 border border-[#3b82f6]/40 shadow-md flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#3b82f6]/50 shadow-md shrink-0 bg-[#0a1526]">
              <img
                src={clientRajivImage}
                alt="AI Business Development Executive"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1.5 min-w-0 flex-1">
              <h3 className="text-[18px] font-bold text-white leading-tight truncate">
                AI Business Development Executive
              </h3>
              <p className="text-[16px] text-blue-300/80 mb-2">Business Development</p>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span>Needs CRM and calendar</span>
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span>Needs product information</span>
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span>Needs opportunity records</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Employee 3: AI Email Outreach Executive */}
          <div className="rounded-2xl p-4 bg-gradient-to-b from-[#0a231b]/90 to-[#0c1426]/95 border border-[#10b981]/40 shadow-md flex items-start gap-4">
            <div className="w-16 h-16 rounded-xl overflow-hidden border border-[#10b981]/50 shadow-md shrink-0 bg-[#081a14]">
              <img
                src={clientMichaelImage}
                alt="AI Email Outreach Executive"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-1.5 min-w-0 flex-1">
              <h3 className="text-[18px] font-bold text-white leading-tight truncate">
                AI Email Outreach Executive
              </h3>
              <p className="text-[16px] text-emerald-300/80 mb-2">Sales &amp; Outreach</p>
              <ul className="space-y-1">
                <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span>Needs email system</span>
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span>Needs CRM access</span>
                </li>
                <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <span>Needs email templates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Section: 6 Categories of Tools + Right Status Panel */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
          {/* Left Column: 6 Tool Category Cards (8 cols) */}
          <div className="xl:col-span-8 flex flex-col gap-5">
            {/* 2-Column Grid of Tool Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* 1. Email & Communication */}
              <div className="rounded-2xl p-4 bg-[#0a1526]/90 border border-[#1e2e48] shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3.5 pb-2 border-b border-[#162338]">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/40 text-blue-300 flex items-center justify-center shrink-0">
                      <Mail size={18} />
                    </div>
                    <h3 className="text-[18px] font-bold text-white">Email &amp; Communication</h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {/* Gmail */}
                    <div
                      onClick={() => toggleTool("gmail")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.gmail
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                      </svg>
                      <span className="text-[16px] font-medium text-white">Gmail</span>
                      {connectedTools.gmail ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>

                    {/* Outlook */}
                    <div
                      onClick={() => toggleTool("outlook")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.outlook
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <div className="w-6 h-6 rounded bg-[#0078D4] text-white font-bold flex items-center justify-center">
                        <span className="text-[16px] leading-none">O</span>
                      </div>
                      <span className="text-[16px] font-medium text-white">Outlook</span>
                      {connectedTools.outlook ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>

                    {/* WhatsApp */}
                    <div
                      onClick={() => toggleTool("whatsapp")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.whatsapp
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <div className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                        <MessageCircle size={15} className="fill-white" />
                      </div>
                      <span className="text-[16px] font-medium text-white">WhatsApp</span>
                      {connectedTools.whatsapp ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>

                    {/* Teams */}
                    <div
                      onClick={() => toggleTool("teams")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.teams
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <div className="w-6 h-6 rounded bg-[#464EB8] text-white font-bold flex items-center justify-center">
                        <span className="text-[16px] leading-none">T</span>
                      </div>
                      <span className="text-[16px] font-medium text-white">Teams</span>
                      {connectedTools.teams ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>

                    {/* Slack */}
                    <div
                      onClick={() => toggleTool("slack")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.slack
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <div className="w-6 h-6 rounded bg-[#4A154B] text-[#E01E5A] font-bold flex items-center justify-center">
                        <span className="text-[16px] leading-none">#</span>
                      </div>
                      <span className="text-[16px] font-medium text-white">Slack</span>
                      {connectedTools.slack ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. CRM */}
              <div className="rounded-2xl p-4 bg-[#0a1526]/90 border border-[#1e2e48] shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3.5 pb-2 border-b border-[#162338]">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/40 text-blue-300 flex items-center justify-center shrink-0">
                      <Users size={18} />
                    </div>
                    <h3 className="text-[18px] font-bold text-white">CRM</h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {/* Salesforce */}
                    <div
                      onClick={() => toggleTool("salesforce")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.salesforce
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <div className="w-6 h-6 rounded bg-[#00A1E0] text-white flex items-center justify-center">
                        <CloudIcon />
                      </div>
                      <span className="text-[16px] font-medium text-white">Salesforce</span>
                      {connectedTools.salesforce ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>

                    {/* HubSpot */}
                    <div
                      onClick={() => toggleTool("hubspot")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.hubspot
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <div className="w-6 h-6 rounded-full bg-[#FF7A59] text-white flex items-center justify-center">
                        <span className="text-[16px] leading-none font-bold">●</span>
                      </div>
                      <span className="text-[16px] font-medium text-white">HubSpot</span>
                      {connectedTools.hubspot ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>

                    {/* Zoho CRM */}
                    <div
                      onClick={() => toggleTool("zohocrm")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.zohocrm
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <div className="w-6 h-6 flex items-center justify-center gap-0.5">
                        <span className="w-2 h-2 rounded-xs bg-[#EA4335]"></span>
                        <span className="w-2 h-2 rounded-xs bg-[#34A853]"></span>
                        <span className="w-2 h-2 rounded-xs bg-[#4285F4]"></span>
                      </div>
                      <span className="text-[16px] font-medium text-white">Zoho CRM</span>
                      {connectedTools.zohocrm ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>

                    {/* SAP */}
                    <div
                      onClick={() => toggleTool("sap")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.sap
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <div className="px-1.5 py-0.5 rounded bg-[#008FD3] text-white font-black flex items-center justify-center">
                        <span className="text-[16px] leading-none">SAP</span>
                      </div>
                      <span className="text-[16px] font-medium text-white">SAP</span>
                      {connectedTools.sap ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>

                    {/* Custom CRM */}
                    <div
                      onClick={() => toggleTool("customcrm")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.customcrm
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <div className="w-6 h-6 rounded bg-slate-700 text-slate-300 flex items-center justify-center">
                        <Server size={14} />
                      </div>
                      <span className="text-[16px] font-medium text-white">Custom CRM</span>
                      {connectedTools.customcrm ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. Storage & Document Management */}
              <div className="rounded-2xl p-4 bg-[#0a1526]/90 border border-[#1e2e48] shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3.5 pb-2 border-b border-[#162338]">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/40 text-blue-300 flex items-center justify-center shrink-0">
                      <Folder size={18} />
                    </div>
                    <h3 className="text-[18px] font-bold text-white">Storage &amp; Document Management</h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {/* Google Drive */}
                    <div
                      onClick={() => toggleTool("googledrive")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.googledrive
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24">
                        <path fill="#FFC107" d="M8.2 4.2l5.8 10h-12l-2-3.5 8.2-6.5z" />
                        <path fill="#4CAF50" d="M14 4.2h10l-6 10h-10l6-10z" />
                        <path fill="#2196F3" d="M2 14.2l6 10h12l-6-10h-12z" />
                      </svg>
                      <span className="text-[16px] font-medium text-white text-center">Google Drive</span>
                      {connectedTools.googledrive ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>

                    {/* OneDrive */}
                    <div
                      onClick={() => toggleTool("onedrive")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.onedrive
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <div className="w-6 h-6 rounded bg-[#0078D4] text-white flex items-center justify-center">
                        <CloudIcon />
                      </div>
                      <span className="text-[16px] font-medium text-white text-center">OneDrive</span>
                      {connectedTools.onedrive ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>

                    {/* SharePoint */}
                    <div
                      onClick={() => toggleTool("sharepoint")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.sharepoint
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <div className="w-6 h-6 rounded bg-[#008272] text-white font-bold flex items-center justify-center">
                        <span className="text-[16px] leading-none">S</span>
                      </div>
                      <span className="text-[16px] font-medium text-white text-center">SharePoint</span>
                      {connectedTools.sharepoint ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>

                    {/* Dropbox */}
                    <div
                      onClick={() => toggleTool("dropbox")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.dropbox
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <div className="w-6 h-6 rounded bg-[#0061FF] text-white flex items-center justify-center">
                        <span className="text-[16px] leading-none">❖</span>
                      </div>
                      <span className="text-[16px] font-medium text-white text-center">Dropbox</span>
                      {connectedTools.dropbox ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Calendar & Scheduling */}
              <div className="rounded-2xl p-4 bg-[#0a1526]/90 border border-[#1e2e48] shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3.5 pb-2 border-b border-[#162338]">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/40 text-blue-300 flex items-center justify-center shrink-0">
                      <Calendar size={18} />
                    </div>
                    <h3 className="text-[18px] font-bold text-white">Calendar &amp; Scheduling</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {/* Google Calendar */}
                    <div
                      onClick={() => toggleTool("googlecalendar")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.googlecalendar
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <div className="w-6 h-6 rounded bg-[#4285F4] text-white font-bold flex items-center justify-center">
                        <span className="text-[16px] leading-none">31</span>
                      </div>
                      <span className="text-[16px] font-medium text-white text-center">Google Calendar</span>
                      {connectedTools.googlecalendar ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>

                    {/* Outlook Calendar */}
                    <div
                      onClick={() => toggleTool("outlookcalendar")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.outlookcalendar
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <div className="w-6 h-6 rounded bg-[#0078D4] text-white font-bold flex items-center justify-center">
                        <Calendar size={14} />
                      </div>
                      <span className="text-[16px] font-medium text-white text-center">Outlook Calendar</span>
                      {connectedTools.outlookcalendar ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Productivity & Collaboration */}
              <div className="rounded-2xl p-4 bg-[#0a1526]/90 border border-[#1e2e48] shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3.5 pb-2 border-b border-[#162338]">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/40 text-blue-300 flex items-center justify-center shrink-0">
                      <Users size={18} />
                    </div>
                    <h3 className="text-[18px] font-bold text-white">Productivity &amp; Collaboration</h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {/* Google Workspace */}
                    <div
                      onClick={() => toggleTool("googleworkspace")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.googleworkspace
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <div className="w-6 h-6 rounded bg-slate-800 border border-slate-600 flex items-center justify-center">
                        <Layers size={14} className="text-blue-400" />
                      </div>
                      <span className="text-[16px] font-medium text-white text-center">Google Workspace</span>
                      {connectedTools.googleworkspace ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>

                    {/* Microsoft 365 */}
                    <div
                      onClick={() => toggleTool("ms365")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.ms365
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <div className="grid grid-cols-2 gap-0.5 w-5 h-5">
                        <span className="bg-[#F25022]"></span>
                        <span className="bg-[#7FBA00]"></span>
                        <span className="bg-[#00A4EF]"></span>
                        <span className="bg-[#FFB900]"></span>
                      </div>
                      <span className="text-[16px] font-medium text-white text-center">Microsoft 365</span>
                      {connectedTools.ms365 ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>

                    {/* Notion */}
                    <div
                      onClick={() => toggleTool("notion")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.notion
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <div className="w-6 h-6 rounded bg-white text-black font-serif font-black flex items-center justify-center">
                        <span className="text-[16px] leading-none">N</span>
                      </div>
                      <span className="text-[16px] font-medium text-white text-center">Notion</span>
                      {connectedTools.notion ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>

                    {/* Asana */}
                    <div
                      onClick={() => toggleTool("asana")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.asana
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <div className="w-6 h-6 flex items-center justify-center gap-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F06A6A]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F06A6A]"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F06A6A]"></span>
                      </div>
                      <span className="text-[16px] font-medium text-white text-center">Asana</span>
                      {connectedTools.asana ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>

                    {/* Trello */}
                    <div
                      onClick={() => toggleTool("trello")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.trello
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <div className="w-6 h-6 rounded bg-[#0079BF] text-white font-bold flex items-center justify-center">
                        <span className="text-[16px] leading-none">❚❚</span>
                      </div>
                      <span className="text-[16px] font-medium text-white text-center">Trello</span>
                      {connectedTools.trello ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* 6. Other Systems */}
              <div className="rounded-2xl p-4 bg-[#0a1526]/90 border border-[#1e2e48] shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3.5 pb-2 border-b border-[#162338]">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 border border-blue-400/40 text-blue-300 flex items-center justify-center shrink-0">
                      <MoreHorizontal size={18} />
                    </div>
                    <h3 className="text-[18px] font-bold text-white">Other Systems</h3>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {/* ERP (SAP/Oracle) */}
                    <div
                      onClick={() => toggleTool("erp")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.erp
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <span className="px-2 py-0.5 rounded bg-blue-900/60 border border-blue-500/40 text-blue-200 text-[16px] font-bold">
                        ERP
                      </span>
                      <span className="text-[16px] font-medium text-white text-center">ERP (SAP/Oracle)</span>
                      {connectedTools.erp ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>

                    {/* Custom Portal */}
                    <div
                      onClick={() => toggleTool("customportal")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.customportal
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <Database size={20} className="text-[#a4b3c7]" />
                      <span className="text-[16px] font-medium text-white text-center">Custom Portal</span>
                      {connectedTools.customportal ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>

                    {/* Internal API */}
                    <div
                      onClick={() => toggleTool("internalapi")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.internalapi
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <Code2 size={20} className="text-[#a4b3c7]" />
                      <span className="text-[16px] font-medium text-white text-center">Internal API</span>
                      {connectedTools.internalapi ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>

                    {/* Other */}
                    <div
                      onClick={() => toggleTool("other")}
                      className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1.5 cursor-pointer transition-all ${
                        connectedTools.other
                          ? "bg-emerald-950/40 border-emerald-500/50"
                          : "bg-[#06101e]/80 border-[#1e2e48] hover:border-slate-500"
                      }`}
                    >
                      <MoreHorizontal size={20} className="text-[#a4b3c7]" />
                      <span className="text-[16px] font-medium text-white text-center">Other</span>
                      {connectedTools.other ? (
                        <span className="inline-flex items-center gap-1 text-[16px] text-emerald-400 font-medium">
                          <Check size={13} className="stroke-[3]" /> Connected
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[16px] text-[#8fa3bf]">
                          <Plus size={13} /> Connect
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom 2 Security & Permission Banners */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Banner 1: Only connect systems */}
              <div className="rounded-2xl p-4 bg-[#0a1526]/90 border border-[#d69a2b]/30 shadow-md flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#d69a2b]/20 border border-[#d69a2b]/40 text-[#d69a2b] flex items-center justify-center shrink-0">
                  <Lock size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[16px] font-bold text-[#e2b76a]">
                    Only connect the systems required by your AI employees.
                  </h4>
                  <p className="text-[16px] text-[#cbd5e1] leading-relaxed">
                    IGBN does not require your passwords. All connections are made through secure authorization methods.
                  </p>
                </div>
              </div>

              {/* Banner 2: Data remains secure */}
              <div className="rounded-2xl p-4 bg-[#0a1526]/90 border border-emerald-500/30 shadow-md flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-[16px] font-bold text-white">
                    Your data remains secure.
                  </h4>
                  <p className="text-[16px] text-[#cbd5e1] leading-relaxed">
                    You can control and manage all connections and permissions anytime.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Tool Connection Status & What Each AI Employee Needs (4 cols) */}
          <div className="xl:col-span-4 flex flex-col gap-4">
            {/* Box 1: Tool Connection Status */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#1e2e48]">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-400/40 text-blue-300 flex items-center justify-center shrink-0">
                  <Link2 size={18} />
                </div>
                <h3 className="text-[18px] font-bold text-white">Tool Connection Status</h3>
              </div>

              <div className="space-y-2.5">
                {/* Gmail */}
                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                    <span className="text-[16px] text-[#e2e8f0] truncate font-medium">Gmail</span>
                  </div>
                  {connectedTools.gmail ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] shrink-0 font-medium">
                      <Check size={12} className="stroke-[3]" /> Connected
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[16px] text-slate-400">
                      <Clock size={12} /> Not Connected
                    </span>
                  )}
                </div>

                {/* HubSpot */}
                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-5 h-5 rounded-full bg-[#FF7A59] text-white flex items-center justify-center shrink-0">
                      <span className="text-[16px] leading-none font-bold">●</span>
                    </div>
                    <span className="text-[16px] text-[#e2e8f0] truncate font-medium">HubSpot</span>
                  </div>
                  {connectedTools.hubspot ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] shrink-0 font-medium">
                      <Check size={12} className="stroke-[3]" /> Connected
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[16px] text-slate-400">
                      <Clock size={12} /> Not Connected
                    </span>
                  )}
                </div>

                {/* Google Drive */}
                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                      <path fill="#FFC107" d="M8.2 4.2l5.8 10h-12l-2-3.5 8.2-6.5z" />
                      <path fill="#4CAF50" d="M14 4.2h10l-6 10h-10l6-10z" />
                      <path fill="#2196F3" d="M2 14.2l6 10h12l-6-10h-12z" />
                    </svg>
                    <span className="text-[16px] text-[#e2e8f0] truncate font-medium">Google Drive</span>
                  </div>
                  {connectedTools.googledrive ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] shrink-0 font-medium">
                      <Check size={12} className="stroke-[3]" /> Connected
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[16px] text-slate-400">
                      <Clock size={12} /> Not Connected
                    </span>
                  )}
                </div>

                {/* Microsoft 365 */}
                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="grid grid-cols-2 gap-0.5 w-4 h-4 shrink-0">
                      <span className="bg-[#F25022]"></span>
                      <span className="bg-[#7FBA00]"></span>
                      <span className="bg-[#00A4EF]"></span>
                      <span className="bg-[#FFB900]"></span>
                    </div>
                    <span className="text-[16px] text-[#e2e8f0] truncate font-medium">Microsoft 365</span>
                  </div>
                  {connectedTools.ms365 ? (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-400 text-[16px] shrink-0 font-medium">
                      <Check size={12} className="stroke-[3]" /> Connected
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[16px] text-slate-400">
                      <Clock size={12} /> Not Connected
                    </span>
                  )}
                </div>

                {/* Others row */}
                <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-[#06101e]/60 border border-[#162338]">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-5 h-5 rounded bg-slate-800 flex items-center justify-center shrink-0">
                      <MoreHorizontal size={14} className="text-slate-400" />
                    </div>
                    <span className="text-[16px] text-[#94a3b8] truncate font-medium">Others</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[16px] text-slate-400 font-medium">
                    <Clock size={13} /> Not Connected
                  </span>
                </div>
              </div>
            </div>

            {/* Box 2: What Each AI Employee Needs */}
            <div className="rounded-2xl p-5 bg-[#0a1526]/90 border border-[#1e2e48] shadow-lg">
              <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-[#1e2e48]">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                  <Lightbulb size={18} />
                </div>
                <h3 className="text-[18px] font-bold text-white">What Each AI Employee Needs</h3>
              </div>

              <div className="space-y-4">
                {/* 1. Research Executive */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-purple-600/25 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0">
                      <Search size={14} />
                    </div>
                    <span className="text-[16px] font-bold text-white">Research Executive</span>
                  </div>
                  <ul className="pl-8 space-y-1">
                    <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                      <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                      <span>Web research access</span>
                    </li>
                    <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                      <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                      <span>Company databases</span>
                    </li>
                    <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                      <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                      <span>Approved internal documents</span>
                    </li>
                    <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                      <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                      <span>Product information</span>
                    </li>
                  </ul>
                </div>

                {/* 2. Business Development Executive */}
                <div className="space-y-1.5 pt-2 border-t border-[#162338]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-blue-600/25 border border-blue-500/40 text-blue-300 flex items-center justify-center shrink-0">
                      <Users size={14} />
                    </div>
                    <span className="text-[16px] font-bold text-white">Business Development Executive</span>
                  </div>
                  <ul className="pl-8 space-y-1">
                    <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                      <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                      <span>CRM access</span>
                    </li>
                    <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                      <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                      <span>Calendar access</span>
                    </li>
                    <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                      <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                      <span>Product information</span>
                    </li>
                    <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                      <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                      <span>Opportunity records</span>
                    </li>
                  </ul>
                </div>

                {/* 3. Email Outreach Executive */}
                <div className="space-y-1.5 pt-2 border-t border-[#162338]">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-emerald-600/25 border border-emerald-500/40 text-emerald-300 flex items-center justify-center shrink-0">
                      <Mail size={14} />
                    </div>
                    <span className="text-[16px] font-bold text-white">Email Outreach Executive</span>
                  </div>
                  <ul className="pl-8 space-y-1">
                    <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                      <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                      <span>Email system</span>
                    </li>
                    <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                      <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                      <span>CRM access</span>
                    </li>
                    <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                      <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                      <span>Approved email templates</span>
                    </li>
                    <li className="flex items-center gap-2 text-[16px] text-[#cbd5e1]">
                      <Check size={14} className="text-emerald-400 shrink-0 stroke-[3]" />
                      <span>Prospect information</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

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
            Next: Set Permissions &amp; Approvals <ArrowRight size={18} />
          </button>
        </footer>
      </div>
    </>
  );
}

function CloudIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
    </svg>
  );
}
