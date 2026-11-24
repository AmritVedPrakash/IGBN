import { useState, useMemo } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  Circle,
  Clock,
  Coins,
  Cpu,
  Database,
  EyeOff,
  FileSpreadsheet,
  FileText,
  FolderArchive,
  HardDrive,
  Headphones,
  Key,
  Layers,
  LayoutGrid,
  Lightbulb,
  Link2,
  Lock,
  Mail,
  MessageCircle,
  MessageSquare,
  Network,
  Plus,
  Radio,
  Receipt,
  Save,
  Server,
  Settings,
  Share2,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  Workflow,
  X,
} from "lucide-react";
import aiAgentImage from "../../../../assets/igbndivision/aiagent.png";

// Brand Logo SVGs & Icons for Systems
function GmailLogo() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      />
    </svg>
  );
}

function OutlookLogo() {
  return (
    <div className="w-5 h-5 rounded bg-[#0078D4] text-white font-bold flex items-center justify-center text-[12px] flex-shrink-0">
      O
    </div>
  );
}

function WhatsAppLogo() {
  return (
    <div className="w-5 h-5 rounded-full bg-[#25D366] text-white flex items-center justify-center flex-shrink-0">
      <MessageCircle size={13} className="text-white fill-white" />
    </div>
  );
}

function TeamsLogo() {
  return (
    <div className="w-5 h-5 rounded bg-[#464EB8] text-white font-bold flex items-center justify-center text-[11px] flex-shrink-0">
      T
    </div>
  );
}

function SlackLogo() {
  return (
    <div className="w-5 h-5 rounded bg-[#4A154B] text-[#E01E5A] font-bold flex items-center justify-center text-[13px] flex-shrink-0">
      #
    </div>
  );
}

function SalesforceLogo() {
  return (
    <div className="w-5 h-5 rounded bg-[#00A1E0] text-white font-bold flex items-center justify-center text-[11px] flex-shrink-0">
      ☁
    </div>
  );
}

function HubSpotLogo() {
  return (
    <div className="w-5 h-5 rounded-full bg-[#FF7A59] text-white font-bold flex items-center justify-center text-[12px] flex-shrink-0">
      ●
    </div>
  );
}

function ZohoLogo() {
  return (
    <div className="w-5 h-5 flex items-center justify-center gap-0.5 flex-shrink-0">
      <span className="w-2 h-2 rounded-xs bg-[#EA4335]"></span>
      <span className="w-2 h-2 rounded-xs bg-[#34A853]"></span>
      <span className="w-2 h-2 rounded-xs bg-[#4285F4]"></span>
    </div>
  );
}

function SAPLogo() {
  return (
    <div className="px-1 py-0.5 rounded bg-[#008FD3] text-white font-black text-[10px] leading-none flex items-center justify-center flex-shrink-0">
      SAP
    </div>
  );
}

function TallyLogo() {
  return (
    <div className="px-1 py-0.5 rounded bg-[#138808] text-white font-bold text-[10px] leading-none flex items-center justify-center flex-shrink-0">
      Tally
    </div>
  );
}

function QuickBooksLogo() {
  return (
    <div className="w-5 h-5 rounded-full bg-[#2CA01C] text-white font-bold text-[10px] flex items-center justify-center flex-shrink-0">
      qb
    </div>
  );
}

function XeroLogo() {
  return (
    <div className="w-5 h-5 rounded-full bg-[#13B5EA] text-white font-bold text-[9px] flex items-center justify-center flex-shrink-0">
      xero
    </div>
  );
}

function OracleLogo() {
  return (
    <div className="px-1 py-0.5 rounded bg-[#C74634] text-white font-bold text-[10px] leading-none flex items-center justify-center flex-shrink-0">
      ORACLE
    </div>
  );
}

function MicrosoftLogo() {
  return (
    <div className="grid grid-cols-2 gap-0.5 w-4 h-4 flex-shrink-0">
      <span className="bg-[#F25022]"></span>
      <span className="bg-[#7FBA00]"></span>
      <span className="bg-[#00A4EF]"></span>
      <span className="bg-[#FFB900]"></span>
    </div>
  );
}

function GoogleDriveLogo() {
  return (
    <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
      <svg className="w-4 h-4" viewBox="0 0 24 24">
        <path fill="#FFC107" d="M8.2 4.2l5.8 10h-12l-2-3.5 8.2-6.5z" />
        <path fill="#4CAF50" d="M14 4.2h10l-6 10h-10l6-10z" />
        <path fill="#2196F3" d="M2 14.2l6 10h12l-6-10h-12z" />
      </svg>
    </div>
  );
}

function OneDriveLogo() {
  return (
    <div className="w-5 h-5 rounded bg-[#0078D4] text-white flex items-center justify-center text-[11px] flex-shrink-0">
      ☁
    </div>
  );
}

function SharePointLogo() {
  return (
    <div className="w-5 h-5 rounded bg-[#008272] text-white font-bold flex items-center justify-center text-[11px] flex-shrink-0">
      S
    </div>
  );
}

function DropboxLogo() {
  return (
    <div className="w-5 h-5 rounded bg-[#0061FF] text-white flex items-center justify-center text-[12px] flex-shrink-0">
      ❖
    </div>
  );
}

function NotionLogo() {
  return (
    <div className="w-5 h-5 rounded bg-white text-black font-serif font-black flex items-center justify-center text-[12px] flex-shrink-0">
      N
    </div>
  );
}

function AsanaLogo() {
  return (
    <div className="w-5 h-5 flex items-center justify-center gap-0.5 flex-shrink-0">
      <span className="w-1.5 h-1.5 rounded-full bg-[#F06A6A]"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-[#F06A6A]"></span>
      <span className="w-1.5 h-1.5 rounded-full bg-[#F06A6A]"></span>
    </div>
  );
}

function TrelloLogo() {
  return (
    <div className="w-5 h-5 rounded bg-[#0079BF] text-white font-bold flex items-center justify-center text-[12px] flex-shrink-0">
      ❚❚
    </div>
  );
}

function CalendarLogo() {
  return (
    <div className="w-5 h-5 rounded bg-[#4285F4] text-white font-bold flex items-center justify-center text-[10px] flex-shrink-0">
      31
    </div>
  );
}

function OtherLogo() {
  return (
    <div className="w-5 h-5 rounded bg-slate-700 text-gray-300 font-bold flex items-center justify-center text-[14px] flex-shrink-0">
      •••
    </div>
  );
}

// System Categories Configuration
const systemSections = [
  {
    id: "communication",
    number: "1.",
    title: "Communication",
    subtitle: "Select the tools your team uses for internal and external communication.",
    icon: MessageSquare,
    tools: [
      { id: "gmail", name: "Gmail", logo: GmailLogo },
      { id: "outlook", name: "Outlook", logo: OutlookLogo },
      { id: "whatsapp", name: "WhatsApp", logo: WhatsAppLogo },
      { id: "teams", name: "Teams", logo: TeamsLogo },
      { id: "slack", name: "Slack", logo: SlackLogo },
      { id: "other_comm", name: "Other", logo: OtherLogo },
    ],
  },
  {
    id: "crm",
    number: "2.",
    title: "CRM",
    subtitle: "Select your customer relationship management system.",
    icon: Users,
    tools: [
      { id: "salesforce", name: "Salesforce", logo: SalesforceLogo },
      { id: "hubspot", name: "HubSpot", logo: HubSpotLogo },
      { id: "zoho_crm", name: "Zoho", logo: ZohoLogo },
      { id: "sap_crm", name: "SAP", logo: SAPLogo },
      { id: "custom_crm", name: "Custom CRM", logo: Server },
      { id: "other_crm", name: "Other", logo: OtherLogo },
    ],
  },
  {
    id: "finance",
    number: "3.",
    title: "Finance & Accounting",
    subtitle: "Select your accounting and finance system.",
    icon: Receipt,
    tools: [
      { id: "tally", name: "Tally", logo: TallyLogo },
      { id: "quickbooks", name: "QuickBooks", logo: QuickBooksLogo },
      { id: "xero", name: "Xero", logo: XeroLogo },
      { id: "zoho_books", name: "Zoho Books", logo: ZohoLogo },
      { id: "sap_finance", name: "SAP", logo: SAPLogo },
      { id: "other_finance", name: "Other", logo: OtherLogo },
    ],
  },
  {
    id: "erp",
    number: "4.",
    title: "ERP",
    subtitle: "Select your enterprise resource planning system.",
    icon: Settings,
    tools: [
      { id: "sap_erp", name: "SAP", logo: SAPLogo },
      { id: "oracle_erp", name: "Oracle", logo: OracleLogo },
      { id: "dynamics_erp", name: "Microsoft Dynamics", logo: MicrosoftLogo },
      { id: "zoho_erp", name: "Zoho", logo: ZohoLogo },
      { id: "custom_erp", name: "Custom ERP", logo: Server },
      { id: "other_erp", name: "Other", logo: OtherLogo },
    ],
  },
  {
    id: "storage",
    number: "5.",
    title: "Storage",
    subtitle: "Select your file storage and document management system.",
    icon: HardDrive,
    tools: [
      { id: "google_drive", name: "Google Drive", logo: GoogleDriveLogo },
      { id: "onedrive", name: "OneDrive", logo: OneDriveLogo },
      { id: "sharepoint", name: "SharePoint", logo: SharePointLogo },
      { id: "dropbox", name: "Dropbox", logo: DropboxLogo },
      { id: "other_storage", name: "Other", logo: OtherLogo },
    ],
  },
  {
    id: "productivity",
    number: "6.",
    title: "Productivity",
    subtitle: "Select the productivity and project management tools you use.",
    icon: Workflow,
    tools: [
      { id: "google_workspace", name: "Google Workspace", logo: GmailLogo },
      { id: "microsoft_365", name: "Microsoft 365", logo: MicrosoftLogo },
      { id: "notion", name: "Notion", logo: NotionLogo },
      { id: "asana", name: "Asana", logo: AsanaLogo },
      { id: "trello", name: "Trello", logo: TrelloLogo },
      { id: "other_productivity", name: "Other", logo: OtherLogo },
    ],
  },
  {
    id: "calendar",
    number: "7.",
    title: "Calendar",
    subtitle: "Select your calendar and scheduling system.",
    icon: Calendar,
    tools: [
      { id: "google_calendar", name: "Google Calendar", logo: CalendarLogo },
      { id: "outlook_calendar", name: "Outlook Calendar", logo: OutlookLogo },
      { id: "other_calendar", name: "Other", logo: OtherLogo },
    ],
  },
];

export default function COOSystemsWorkspace({
  currentStep = 10,
  systemsData = {},
  draftMessage,
  onBack,
  onChange,
  onSaveProgress,
  onNext,
}) {
  const connectedSystems = systemsData.connectedSystems || [
    "gmail",
    "whatsapp",
    "hubspot",
    "tally",
    "sap_erp",
    "google_drive",
    "google_workspace",
    "microsoft_365",
    "google_calendar",
  ];
  const otherSystems = systemsData.otherSystems || "";

  // Toggle connection state for a tool
  const toggleSystemConnection = (toolId) => {
    const isCurrentlyConnected = connectedSystems.includes(toolId);
    const updated = isCurrentlyConnected
      ? connectedSystems.filter((id) => id !== toolId)
      : [...connectedSystems, toolId];
    onChange("connectedSystems", updated);
  };

  // Compute metrics for the Glance card
  const totalAvailableTools = useMemo(() => {
    return systemSections.reduce((acc, sec) => acc + sec.tools.length, 0);
  }, []);

  const connectedCount = connectedSystems.length;
  const notConnectedCount = Math.max(0, totalAvailableTools - connectedCount);

  return (
    <>
      {/* Registration Progress Header */}
      <header className="coo-progress-header">
        <div className="coo-step-label">STEP {currentStep} OF 12</div>
        <div
          aria-label="Registration progress"
          aria-valuemax={12}
          aria-valuemin={1}
          aria-valuenow={currentStep}
          className="coo-progress-track"
          role="progressbar"
        >
          {Array.from({ length: 12 }, (_, index) => (
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
        <span className="coo-progress-count">{currentStep} / 12</span>
      </header>

      {/* Main Container */}
      <div className="flex flex-col gap-4 pt-2 text-[#f7f8fa] w-full box-border">
        {/* Title Header */}
        <header className="pb-1">
          <h1 className="font-serif text-[32px] md:text-[40px] font-bold text-white tracking-tight leading-tight m-0">
            <span className="text-[#d69a2b] mr-2">9.</span> Where Does Your Company Work?
          </h1>
          <p className="text-[16px] text-[#cbd5e1] mt-1.5 leading-relaxed m-0">
            Tell your COO which systems your team uses so your AI workforce can work with the tools you already have.
          </p>
        </header>

        {/* 2-Column Main Workspace Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.8fr)_minmax(320px,0.95fr)] gap-4 items-start">
          {/* LEFT COLUMN: 8 Systems & Digital Workspace Sections */}
          <div className="flex flex-col gap-4 min-w-0">
            {/* ROW 1: 1. Communication & 2. CRM */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderSection(systemSections[0])}
              {renderSection(systemSections[1])}
            </div>

            {/* ROW 2: 3. Finance & Accounting & 4. ERP */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderSection(systemSections[2])}
              {renderSection(systemSections[3])}
            </div>

            {/* ROW 3: 5. Storage & 6. Productivity */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderSection(systemSections[4])}
              {renderSection(systemSections[5])}
            </div>

            {/* ROW 4: 7. Calendar & 8. Other Systems */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Section 7: Calendar */}
              {renderSection(systemSections[6])}

              {/* Section 8: Other Systems Card */}
              <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                      <Network size={18} />
                    </div>
                    <div>
                      <h2 className="text-[18px] font-bold text-white leading-tight m-0">
                        8. Other Systems
                      </h2>
                    </div>
                  </div>
                  <p className="text-[16px] text-[#94a3b8] mb-3 leading-snug m-0">
                    Add any other important systems, industry-specific software, internal applications, APIs, etc.
                  </p>
                </div>

                <div className="flex flex-col gap-1 mt-auto">
                  <textarea
                    rows={3}
                    maxLength={300}
                    value={otherSystems}
                    onChange={(e) => onChange("otherSystems", e.target.value)}
                    placeholder="e.g. Custom portal, Manufacturing software, Industry-specific tools"
                    className="w-full bg-[#05121e]/90 border border-slate-700/80 rounded-lg p-3 text-white text-[16px] leading-relaxed outline-none resize-none focus:border-[#d69a2b] placeholder:text-[#64748b]"
                  />
                  <div className="text-right text-[16px] text-[#94a3b8] mt-1">
                    {otherSystems.length}/300
                  </div>
                </div>
              </section>
            </div>

            {draftMessage && (
              <p aria-live="polite" className="coo-customer-save-status">
                {draftMessage}
              </p>
            )}
          </div>

          {/* RIGHT ASIDE: Speech bubble + Glance + Don't share passwords + Quick Tips */}
          <aside className="flex flex-col gap-4 min-w-0">
            {/* Top Assistant Speech Bubble + Avatar */}
            <div className="flex items-center justify-between gap-3 p-1">
              <div className="flex-1 bg-[#f8fafc] text-[#0f172a] rounded-xl rounded-br-xs p-3.5 shadow-lg">
                <p className="text-[16px] leading-snug m-0 text-[#0f172a]">
                  Your AI employees can work with the tools your company already uses. You decide which systems each employee can access.
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

            {/* Your System Connections at a Glance */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4.5 shadow-lg">
              <div className="flex items-center gap-2 mb-3.5">
                <div className="w-7 h-7 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168]">
                  <Sparkles size={16} />
                </div>
                <h3 className="text-[18px] font-bold text-white m-0">
                  Your System Connections at a Glance
                </h3>
              </div>

              {/* 4 Metric Boxes Grid */}
              <div className="grid grid-cols-4 gap-2">
                {/* 1. Connected */}
                <div className="bg-[#05121e]/90 border border-[#39b86b]/40 rounded-lg p-2.5 flex flex-col items-center text-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center mb-1">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  <div className="text-[20px] font-bold text-white leading-tight">
                    {connectedCount}
                  </div>
                  <div className="text-[16px] text-[#39b86b] font-medium leading-tight mt-0.5">
                    Connected
                  </div>
                </div>

                {/* 2. Not Connected */}
                <div className="bg-[#05121e]/90 border border-slate-700/60 rounded-lg p-2.5 flex flex-col items-center text-center justify-center">
                  <div className="w-6 h-6 rounded-full border-2 border-slate-400 text-slate-400 grid place-items-center mb-1">
                    <Circle size={10} className="fill-transparent" />
                  </div>
                  <div className="text-[20px] font-bold text-white leading-tight">
                    {notConnectedCount}
                  </div>
                  <div className="text-[16px] text-[#94a3b8] font-medium leading-tight mt-0.5">
                    Not Connected
                  </div>
                </div>

                {/* 3. Restricted */}
                <div className="bg-[#05121e]/90 border border-[#d69a2b]/30 rounded-lg p-2.5 flex flex-col items-center text-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[rgba(214,154,43,0.15)] text-[#f0c168] grid place-items-center mb-1">
                    <Lock size={13} />
                  </div>
                  <div className="text-[20px] font-bold text-white leading-tight">
                    0
                  </div>
                  <div className="text-[16px] text-[#f0c168] font-medium leading-tight mt-0.5">
                    Restricted
                  </div>
                </div>

                {/* 4. Total Systems */}
                <div className="bg-[#05121e]/90 border border-slate-700/60 rounded-lg p-2.5 flex flex-col items-center text-center justify-center">
                  <div className="w-6 h-6 rounded-full bg-[rgba(214,154,43,0.15)] text-[#f0c168] grid place-items-center mb-1">
                    <Database size={13} />
                  </div>
                  <div className="text-[20px] font-bold text-white leading-tight">
                    20
                  </div>
                  <div className="text-[16px] text-[#cbd5e1] font-medium leading-tight mt-0.5">
                    Total Systems
                  </div>
                </div>
              </div>
            </section>

            {/* Connect — Don't Share Passwords Card */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4.5 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168]">
                  <ShieldCheck size={16} />
                </div>
                <h3 className="text-[18px] font-bold text-white m-0">
                  Connect — Don't Share Passwords
                </h3>
              </div>
              <p className="text-[16px] text-[#cbd5e1] leading-relaxed mb-3.5 m-0">
                Your AI workforce should connect to approved systems through secure authorization methods. IGBN does not require your system passwords.
              </p>

              {/* 4 Security Features */}
              <ul className="flex flex-col gap-2.5 p-0 m-0 list-none">
                <li className="flex items-center gap-3 text-[16px] text-[#e2e8f0]">
                  <div className="w-7 h-7 rounded-md bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/40 grid place-items-center text-[#f0c168] flex-shrink-0">
                    <Lock size={15} />
                  </div>
                  <span>Secure OAuth / API connections</span>
                </li>
                <li className="flex items-center gap-3 text-[16px] text-[#e2e8f0]">
                  <div className="w-7 h-7 rounded-md bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/40 grid place-items-center text-[#f0c168] flex-shrink-0">
                    <Key size={15} />
                  </div>
                  <span>No passwords required</span>
                </li>
                <li className="flex items-center gap-3 text-[16px] text-[#e2e8f0]">
                  <div className="w-7 h-7 rounded-md bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/40 grid place-items-center text-[#f0c168] flex-shrink-0">
                    <Shield size={15} />
                  </div>
                  <span>You control access permissions</span>
                </li>
                <li className="flex items-center gap-3 text-[16px] text-[#e2e8f0]">
                  <div className="w-7 h-7 rounded-md bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/40 grid place-items-center text-[#f0c168] flex-shrink-0">
                    <Users size={15} />
                  </div>
                  <span>Access is limited to authorized AI employees only</span>
                </li>
              </ul>
            </section>

            {/* Quick Tips Card */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4.5 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={20} className="text-[#f5b738]" />
                <h3 className="text-[18px] font-bold text-white m-0">Quick Tips</h3>
              </div>
              <ul className="flex flex-col gap-2.5 p-0 m-0 list-none">
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Select the systems your team actively uses.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>You can connect systems later.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Use secure authorization (no passwords required).</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>You can choose what each AI employee can access.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Add other systems if they are important to your business.</span>
                </li>
              </ul>
            </section>
          </aside>
        </div>

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
            Next: Management Style &amp; Goals <ArrowRight size={18} />
          </button>
        </footer>
      </div>
    </>
  );

  // Helper render for section cards
  function renderSection(section) {
    const SectionIcon = section.icon;
    return (
      <section
        key={section.id}
        className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4 shadow-lg flex flex-col justify-between"
      >
        <div>
          {/* Section Header */}
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
              <SectionIcon size={18} />
            </div>
            <div>
              <h2 className="text-[18px] font-bold text-white leading-tight m-0">
                {section.number} {section.title}
              </h2>
            </div>
          </div>
          <p className="text-[16px] text-[#94a3b8] mb-3 leading-snug m-0">
            {section.subtitle}
          </p>
        </div>

        {/* Grid of Tools (3 cols) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mt-auto">
          {section.tools.map((tool) => {
            const isConnected = connectedSystems.includes(tool.id);
            const LogoComponent = tool.logo;
            return (
              <button
                key={tool.id}
                type="button"
                onClick={() => toggleSystemConnection(tool.id)}
                className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between min-h-[74px] shadow-sm ${
                  isConnected
                    ? "bg-[#071d2b]/95 border-[#d69a2b] shadow-[0_0_10px_rgba(214,154,43,0.15)]"
                    : "bg-[#05121e]/90 border-slate-700/60 hover:border-slate-500"
                }`}
              >
                {/* Top: Logo + Name + Checkbox */}
                <div className="flex items-center justify-between gap-1 w-full">
                  <div className="flex items-center gap-2 min-w-0">
                    <LogoComponent />
                    <span className="text-[16px] font-bold text-white truncate">
                      {tool.name}
                    </span>
                  </div>

                  {/* Checkbox */}
                  <div
                    className={`w-4.5 h-4.5 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                      isConnected
                        ? "border-[#d69a2b] bg-[#d69a2b] text-[#020d18]"
                        : "border-slate-600 bg-transparent"
                    }`}
                  >
                    {isConnected && <Check size={12} strokeWidth={3} />}
                  </div>
                </div>

                {/* Bottom: Connected / Not Connected Status Badge */}
                <div className="flex items-center gap-1.5 mt-2">
                  {isConnected ? (
                    <>
                      <div className="w-3.5 h-3.5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0">
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="text-[16px] font-medium text-[#39b86b] leading-none">
                        Connected
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="w-3.5 h-3.5 rounded-full border border-slate-500 flex-shrink-0" />
                      <span className="text-[16px] font-normal text-[#94a3b8] leading-none">
                        Not Connected
                      </span>
                    </>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </section>
    );
  }
}
