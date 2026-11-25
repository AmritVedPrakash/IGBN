import { useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart2,
  BarChart3,
  BookOpen,
  Brain,
  Building2,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  Circle,
  Clock,
  Compass,
  FileCheck,
  FileText,
  GripVertical,
  Headphones,
  Inbox,
  Laptop,
  Layers,
  LayoutGrid,
  Lightbulb,
  Lock,
  Mail,
  MessageCircle,
  MessageSquare,
  Network,
  Package,
  Plus,
  Radio,
  Receipt,
  Save,
  Send,
  Server,
  Settings,
  Share2,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trash2,
  TrendingUp,
  Trophy,
  UserCheck,
  Users,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import aiAgentImage from "../../../../assets/igbndivision/aiagent.png";

// Communication styles
const commPreferences = [
  {
    id: "concise",
    title: "Concise",
    detail: "Short and to the point",
    icon: MessageSquare,
  },
  {
    id: "detailed",
    title: "Detailed",
    detail: "In-depth information",
    icon: FileText,
  },
  {
    id: "executive",
    title: "Executive Summary First",
    detail: "Key points first with details on request",
    icon: TrendingUp,
  },
  {
    id: "data_heavy",
    title: "Data-Heavy",
    detail: "With data, charts and analysis",
    icon: BarChart2,
  },
  {
    id: "action_oriented",
    title: "Action-Oriented",
    detail: "Clear next steps and recommendations",
    icon: Settings,
  },
];

// Reporting update frequencies
const reportingFrequencies = ["Daily", "Weekly", "Monthly", "As Required"];

// Reporting formats
const reportingFormats = [
  { id: "dashboard", label: "Dashboard", icon: LayoutGrid },
  { id: "email", label: "Email", icon: Mail },
  { id: "chat", label: "Chat", icon: MessageSquare },
  { id: "executive_summary", label: "Executive Summary", icon: FileText },
  { id: "other", label: "Other", icon: Circle },
];

// Autonomous Actions (Can do without asking)
const defaultAutonomousActions = [
  "Research",
  "Analyze",
  "Create reports",
  "Draft emails",
  "Schedule meetings",
  "Organize information",
  "Prepare documents",
];

// Actions Requiring Approval
const approvalActionOptions = [
  "Send external emails",
  "Contact customers",
  "Make outbound calls",
  "Create quotations",
  "Make purchases",
  "Approve payments",
  "Modify financial records",
  "Hire candidates",
  "Reject candidates",
  "Sign contracts",
  "Make strategic decisions",
  "Commit company resources",
  "Change pricing",
  "Other",
];

// 12 Months Goals Checklist
const availableGoalOptions = [
  "Increase Revenue",
  "Enter New Countries",
  "Increase Exports",
  "Find Distributors",
  "Generate More Leads",
  "Improve Customer Service",
  "Reduce Operating Costs",
  "Improve Collections",
  "Automate Repetitive Work",
  "Improve Productivity",
  "Improve Operational Control",
  "Launch New Products",
  "Improve Profitability",
  "Expand Production",
  "Reduce Founder Workload",
  "Raise Investment",
  "Other",
];

export default function COOManagementGoals({
  currentStep = 11,
  managementData = {},
  draftMessage,
  onBack,
  onChange,
  onSaveProgress,
  onNext,
}) {
  const commPref = managementData.commPreference || "executive";
  const reportingFreq = managementData.reportingFrequency || "Weekly";
  const reportingFmt = managementData.reportingFormat || "dashboard";

  const autonomousActions =
    managementData.autonomousActions || defaultAutonomousActions;
  const requireApprovalActions = managementData.requireApprovalActions || [
    "Create quotations",
    "Make purchases",
    "Approve payments",
    "Make strategic decisions",
    "Change pricing",
  ];

  const businessPrinciples = managementData.businessPrinciples || [
    "Never disclose confidential pricing or commercial terms.",
    "Never make financial commitments without approval.",
    "Never contact existing customers without checking CRM history.",
    "Never share one customer's information with another customer.",
  ];

  const selectedGoals = managementData.selectedGoals || [
    "Increase Revenue",
    "Enter New Countries",
    "Increase Exports",
    "Improve Productivity",
    "Improve Operational Control",
    "Launch New Products",
    "Reduce Founder Workload",
  ];

  const topPriorities = managementData.topPriorities || [
    "Increase Revenue",
    "Enter New Countries",
    "Reduce Founder Workload",
  ];

  const primaryOutcome =
    managementData.primaryOutcome ||
    "Increase revenue by 30%, enter three new international markets and reduce founder involvement in daily operations.";

  // State for Add Business Rule modal/inline
  const [newRuleText, setNewRuleText] = useState("");
  const [isAddingRule, setIsAddingRule] = useState(false);

  // Toggle autonomous action
  const toggleAutonomous = (item) => {
    const updated = autonomousActions.includes(item)
      ? autonomousActions.filter((i) => i !== item)
      : [...autonomousActions, item];
    onChange("autonomousActions", updated);
  };

  // Toggle approval action
  const toggleApprovalAction = (item) => {
    const updated = requireApprovalActions.includes(item)
      ? requireApprovalActions.filter((i) => i !== item)
      : [...requireApprovalActions, item];
    onChange("requireApprovalActions", updated);
  };

  // Toggle goal
  const toggleGoal = (goal) => {
    const updated = selectedGoals.includes(goal)
      ? selectedGoals.filter((g) => g !== goal)
      : [...selectedGoals, goal];
    onChange("selectedGoals", updated);
  };

  // Business principles management
  const handleAddRule = () => {
    if (!newRuleText.trim()) return;
    onChange("businessPrinciples", [...businessPrinciples, newRuleText.trim()]);
    setNewRuleText("");
    setIsAddingRule(false);
  };

  const handleRemoveRule = (index) => {
    const updated = businessPrinciples.filter((_, idx) => idx !== index);
    onChange("businessPrinciples", updated);
  };

  // Reorder priorities (simple move up/down)
  const movePriority = (index, direction) => {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= topPriorities.length) return;
    const next = [...topPriorities];
    const temp = next[index];
    next[index] = next[targetIndex];
    next[targetIndex] = temp;
    onChange("topPriorities", next);
  };

  return (
    <>
      {/* Registration Progress Header */}
      <header className="coo-progress-header">
        <div className="coo-step-label">STEP {currentStep} OF 19</div>
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
            <span className="text-[#d69a2b] mr-2">10.</span> How Should Your COO Work?
          </h1>
          <p className="text-[16px] text-[#cbd5e1] mt-1.5 leading-relaxed m-0">
            Tell your AI COO how you prefer to work, what decisions require your approval and what your company wants to achieve.
          </p>
        </header>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.8fr)_minmax(320px,0.95fr)] gap-4 items-start">
          {/* LEFT COLUMN: Preferences & Decisions */}
          <div className="flex flex-col gap-4 min-w-0">
            {/* ROW 1: 1. Communication Preference & 2. Reporting Preference */}
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-4">
              {/* CARD 1: Communication Preference */}
              <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <h2 className="text-[18px] font-bold text-white leading-tight m-0">
                        1. Communication Preference
                      </h2>
                    </div>
                  </div>
                  <p className="text-[16px] text-[#94a3b8] mb-3 leading-snug m-0">
                    How would you like your COO to communicate?
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-auto">
                  {commPreferences.map((opt) => {
                    const isSelected = commPref === opt.id;
                    const IconComponent = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => onChange("commPreference", opt.id)}
                        className={`p-2.5 rounded-xl border text-center cursor-pointer transition-all flex flex-col items-center justify-between min-h-[110px] relative ${
                          isSelected
                            ? "bg-[#071d2b] border-[#d69a2b] shadow-[0_0_12px_rgba(214,154,43,0.25)]"
                            : "bg-[#05121e]/90 border-slate-700/60 hover:border-slate-500"
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-1.5 right-1.5 w-4 h-4 rounded bg-[#d69a2b] text-[#020d18] grid place-items-center">
                            <Check size={11} strokeWidth={3} />
                          </div>
                        )}
                        <IconComponent
                          size={20}
                          className={isSelected ? "text-[#f0c168] mt-1" : "text-gray-400 mt-1"}
                        />
                        <div className="text-[16px] font-bold text-white leading-tight my-1">
                          {opt.title}
                        </div>
                        <div className="text-[16px] text-[#94a3b8] leading-tight">
                          {opt.detail}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>

              {/* CARD 2: Reporting Preference */}
              <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                      <BarChart3 size={18} />
                    </div>
                    <div>
                      <h2 className="text-[18px] font-bold text-white leading-tight m-0">
                        2. Reporting Preference
                      </h2>
                    </div>
                  </div>
                  <p className="text-[16px] text-[#94a3b8] mb-3 leading-snug m-0">
                    How often would you like updates?
                  </p>

                  {/* Frequency Radios */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                    {reportingFrequencies.map((freq) => {
                      const isSelected = reportingFreq === freq;
                      return (
                        <button
                          key={freq}
                          type="button"
                          onClick={() => onChange("reportingFrequency", freq)}
                          className={`py-2 px-2.5 rounded-lg border text-center cursor-pointer transition-all flex items-center justify-center gap-1.5 text-[16px] ${
                            isSelected
                              ? "bg-[#071d2b] border-[#d69a2b] text-[#f0c168] font-bold"
                              : "bg-[#05121e]/90 border-slate-700/60 text-gray-300 hover:border-slate-500"
                          }`}
                        >
                          <span
                            className={`w-3.5 h-3.5 rounded-full border grid place-items-center ${
                              isSelected ? "border-[#d69a2b] bg-[#d69a2b]" : "border-slate-500"
                            }`}
                          >
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#020d18]" />}
                          </span>
                          <span>{freq}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Preferred Format */}
                <div>
                  <div className="text-[16px] font-semibold text-[#f1f5f9] mb-2">
                    Preferred Format
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {reportingFormats.map((fmt) => {
                      const isSelected = reportingFmt === fmt.id;
                      const FmtIcon = fmt.icon;
                      return (
                        <button
                          key={fmt.id}
                          type="button"
                          onClick={() => onChange("reportingFormat", fmt.id)}
                          className={`py-1.5 px-3 rounded-lg border cursor-pointer transition-all flex items-center gap-2 text-[16px] ${
                            isSelected
                              ? "bg-[#071d2b] border-[#d69a2b] text-[#f0c168] font-semibold"
                              : "bg-[#05121e]/90 border-slate-700/60 text-gray-300 hover:border-slate-500"
                          }`}
                        >
                          <FmtIcon size={16} />
                          <span>{fmt.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>

            {/* ROW 2: 3. Approval Rules & 4. Business Principles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* CARD 3: Approval Rules */}
              <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-8 h-8 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h2 className="text-[18px] font-bold text-white leading-tight m-0">
                        3. Approval Rules
                      </h2>
                    </div>
                  </div>

                  {/* 2 Split Columns: Autonomous vs Approval Required */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Left Sub-Column: What can your COO do without asking? */}
                    <div className="bg-[#05121e]/85 border border-[#39b86b]/35 rounded-xl p-3">
                      <div className="flex items-center gap-2 text-[#39b86b] font-bold text-[16px] mb-2.5 pb-1 border-b border-[#39b86b]/20">
                        <CheckCircle2 size={16} />
                        <span>What can your COO do without asking?</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        {defaultAutonomousActions.map((action) => {
                          const isChecked = autonomousActions.includes(action);
                          return (
                            <label
                              key={action}
                              className="flex items-center gap-2.5 cursor-pointer text-[16px] text-gray-200 hover:text-white"
                            >
                              <div
                                onClick={() => toggleAutonomous(action)}
                                className={`w-4.5 h-4.5 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                                  isChecked
                                    ? "bg-[#39b86b] border-[#39b86b] text-[#020d18]"
                                    : "border-slate-600 bg-transparent"
                                }`}
                              >
                                {isChecked && <Check size={12} strokeWidth={3} />}
                              </div>
                              <span>{action}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>

                    {/* Right Sub-Column: What requires your approval? */}
                    <div className="bg-[#05121e]/85 border border-red-500/35 rounded-xl p-3">
                      <div className="flex items-center gap-2 text-rose-400 font-bold text-[16px] mb-2.5 pb-1 border-b border-red-500/20">
                        <AlertTriangle size={16} />
                        <span>What requires your approval?</span>
                      </div>
                      <div className="grid grid-cols-1 gap-2 max-h-[260px] overflow-y-auto pr-1">
                        {approvalActionOptions.map((action) => {
                          const isChecked = requireApprovalActions.includes(action);
                          return (
                            <label
                              key={action}
                              className="flex items-center gap-2.5 cursor-pointer text-[16px] text-gray-200 hover:text-white"
                            >
                              <div
                                onClick={() => toggleApprovalAction(action)}
                                className={`w-4.5 h-4.5 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                                  isChecked
                                    ? "bg-rose-600 border-rose-500 text-white"
                                    : "border-slate-600 bg-transparent"
                                }`}
                              >
                                {isChecked && <Check size={12} strokeWidth={3} />}
                              </div>
                              <span>{action}</span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* CARD 4: Business Principles */}
              <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                      <FileCheck size={18} />
                    </div>
                    <div>
                      <h2 className="text-[18px] font-bold text-white leading-tight m-0">
                        4. Business Principles
                      </h2>
                    </div>
                  </div>
                  <p className="text-[16px] text-[#94a3b8] mb-3 leading-snug m-0">
                    What rules must your AI workforce never violate?
                  </p>

                  {/* List of Principles */}
                  <div className="flex flex-col gap-2 mb-3">
                    {businessPrinciples.map((rule, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between gap-3 bg-[#05121e]/90 border border-slate-700/60 rounded-xl p-3 group hover:border-[#d69a2b]/50 transition-colors"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="w-6 h-6 rounded-md bg-[#081b2e] border border-blue-900/60 text-[#d69a2b] font-bold text-[16px] grid place-items-center flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-[16px] text-gray-200 leading-snug">
                            {rule}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveRule(idx)}
                          className="text-gray-400 hover:text-red-400 p-1 cursor-pointer flex-shrink-0 transition-colors"
                          title="Delete rule"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Inline Add Rule Input */}
                  {isAddingRule ? (
                    <div className="flex flex-col gap-2 p-3 bg-[#05121e] border border-[#d69a2b] rounded-xl">
                      <input
                        type="text"
                        value={newRuleText}
                        onChange={(e) => setNewRuleText(e.target.value)}
                        placeholder="e.g. Never share internal production files publicly."
                        className="w-full bg-[#031120] border border-gray-700 rounded-lg p-2.5 text-white text-[16px] outline-none focus:border-[#d69a2b]"
                      />
                      <div className="flex justify-end gap-2">
                        <button
                          type="button"
                          onClick={() => setIsAddingRule(false)}
                          className="px-3 py-1.5 rounded-lg border border-gray-600 text-gray-300 text-[16px] cursor-pointer"
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={handleAddRule}
                          className="px-4 py-1.5 rounded-lg bg-[#d69a2b] text-[#020d18] font-bold text-[16px] cursor-pointer"
                        >
                          Save Rule
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsAddingRule(true)}
                      className="w-full py-2.5 px-3 rounded-lg bg-[rgba(214,154,43,0.15)] hover:bg-[rgba(214,154,43,0.25)] border border-[#d69a2b] text-[#f0c168] text-[16px] font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all mt-auto"
                    >
                      <Plus size={16} /> Add Business Rule
                    </button>
                  )}
                </div>
              </section>
            </div>

            {/* ROW 3: 5. Company Goals (Next 12 Months) & Top 3 Priorities */}
            <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-4">
              {/* CARD 5: Company Goals (Next 12 Months) */}
              <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                      <Target size={18} />
                    </div>
                    <div>
                      <h2 className="text-[18px] font-bold text-white leading-tight m-0">
                        5. Company Goals (Next 12 Months)
                      </h2>
                    </div>
                  </div>
                  <p className="text-[16px] text-[#94a3b8] mb-3 leading-snug m-0">
                    What do you want your company to achieve? (Select all that apply)
                  </p>

                  {/* 2-Column Checklist of Goals */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {availableGoalOptions.map((goal) => {
                      const isChecked = selectedGoals.includes(goal);
                      return (
                        <label
                          key={goal}
                          className="flex items-center gap-2.5 cursor-pointer text-[16px] text-gray-200 hover:text-white"
                        >
                          <div
                            onClick={() => toggleGoal(goal)}
                            className={`w-4.5 h-4.5 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                              isChecked
                                ? "bg-[#d69a2b] border-[#d69a2b] text-[#020d18]"
                                : "border-slate-600 bg-transparent"
                            }`}
                          >
                            {isChecked && <Check size={12} strokeWidth={3} />}
                          </div>
                          <span>{goal}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </section>

              {/* CARD 6: Top 3 Priorities & Single Most Important Outcome */}
              <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4 shadow-lg flex flex-col justify-between">
                <div>
                  {/* Top 3 Priorities */}
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                      <Trophy size={18} />
                    </div>
                    <div>
                      <h3 className="text-[18px] font-bold text-white leading-tight m-0">
                        Top 3 Priorities
                      </h3>
                    </div>
                  </div>
                  <p className="text-[16px] text-[#94a3b8] mb-3 leading-snug m-0">
                    Rank your top three priorities (Drag and drop or use arrows)
                  </p>

                  <div className="flex flex-col gap-2 mb-4">
                    {topPriorities.map((p, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between bg-[#05121e]/90 border border-[rgba(214,154,43,0.35)] rounded-xl p-2.5"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="w-6 h-6 rounded bg-[#d69a2b] text-[#020d18] font-bold text-[16px] grid place-items-center flex-shrink-0">
                            {idx + 1}
                          </span>
                          <span className="text-[16px] font-medium text-white truncate">
                            {p}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-gray-400">
                          <button
                            type="button"
                            onClick={() => movePriority(idx, -1)}
                            disabled={idx === 0}
                            className="p-1 hover:text-white disabled:opacity-30 cursor-pointer"
                            title="Move up"
                          >
                            ▲
                          </button>
                          <button
                            type="button"
                            onClick={() => movePriority(idx, 1)}
                            disabled={idx === topPriorities.length - 1}
                            className="p-1 hover:text-white disabled:opacity-30 cursor-pointer"
                            title="Move down"
                          >
                            ▼
                          </button>
                          <GripVertical size={16} className="text-[#94a3b8]" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Single Most Important Outcome */}
                  <div className="pt-2 border-t border-slate-700/60">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Star size={18} className="text-[#f5b738]" />
                      <div className="text-[16px] font-bold text-white">
                        Single Most Important Outcome
                      </div>
                    </div>
                    <p className="text-[16px] text-[#94a3b8] mb-2 leading-snug m-0">
                      What is the single most important business outcome you want in the next 12 months?
                    </p>
                    <textarea
                      rows={3}
                      maxLength={300}
                      value={primaryOutcome}
                      onChange={(e) => onChange("primaryOutcome", e.target.value)}
                      placeholder="e.g. Increase revenue by 30%, enter three new international markets..."
                      className="w-full bg-[#05121e]/90 border border-slate-700/80 rounded-lg p-2.5 text-white text-[16px] leading-relaxed outline-none resize-none focus:border-[#d69a2b] placeholder:text-[#64748b]"
                    />
                    <div className="text-right text-[16px] text-[#94a3b8] mt-1">
                      {primaryOutcome.length}/300
                    </div>
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

          {/* RIGHT ASIDE: Speech bubble + Brain Summary + Review CTA */}
          <aside className="flex flex-col gap-4 min-w-0">
            {/* Top Assistant Speech Bubble + Avatar */}
            <div className="flex items-center justify-between gap-3 p-1">
              <div className="flex-1 bg-[#f8fafc] text-[#0f172a] rounded-xl rounded-br-xs p-3.5 shadow-lg">
                <p className="text-[16px] leading-snug m-0 text-[#0f172a]">
                  I don't just need to know what your company does. I need to understand how you want me to work, what I can decide and what always comes back to you.
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

            {/* Your Company Brain Is Almost Ready Card */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4.5 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168]">
                  <Brain size={18} />
                </div>
                <h3 className="text-[18px] font-bold text-white m-0">
                  Your Company Brain Is Almost Ready
                </h3>
              </div>
              <p className="text-[16px] text-[#cbd5e1] leading-relaxed mb-3.5 m-0">
                Here's what I have understood from the information you've provided so far.
              </p>

              {/* 10 Sections Progress Summary Grid */}
              <div className="grid grid-cols-2 gap-2">
                {/* 1. Company */}
                <div className="bg-[#05121e]/90 border border-slate-700/60 rounded-lg p-2.5 flex items-start gap-2">
                  <Building2 size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[16px] font-bold text-white leading-tight">Company</div>
                    <div className="text-[16px] text-[#39b86b] font-medium flex items-center gap-1 mt-0.5">
                      <Check size={12} strokeWidth={3} /> Understood
                    </div>
                  </div>
                </div>

                {/* 2. Products */}
                <div className="bg-[#05121e]/90 border border-slate-700/60 rounded-lg p-2.5 flex items-start gap-2">
                  <Package size={18} className="text-purple-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[16px] font-bold text-white leading-tight">Products</div>
                    <div className="text-[16px] text-[#39b86b] font-medium flex items-center gap-1 mt-0.5">
                      <Check size={12} strokeWidth={3} /> 8 products added
                    </div>
                  </div>
                </div>

                {/* 3. Customers */}
                <div className="bg-[#05121e]/90 border border-slate-700/60 rounded-lg p-2.5 flex items-start gap-2">
                  <Users size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[16px] font-bold text-white leading-tight">Customers</div>
                    <div className="text-[16px] text-[#39b86b] font-medium flex items-center gap-1 mt-0.5">
                      <Check size={12} strokeWidth={3} /> Customer types defined
                    </div>
                  </div>
                </div>

                {/* 4. Markets */}
                <div className="bg-[#05121e]/90 border border-slate-700/60 rounded-lg p-2.5 flex items-start gap-2">
                  <Compass size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[16px] font-bold text-white leading-tight">Markets</div>
                    <div className="text-[16px] text-[#39b86b] font-medium flex items-center gap-1 mt-0.5">
                      <Check size={12} strokeWidth={3} /> 6 countries identified
                    </div>
                  </div>
                </div>

                {/* 5. Operations */}
                <div className="bg-[#05121e]/90 border border-slate-700/60 rounded-lg p-2.5 flex items-start gap-2">
                  <Settings size={18} className="text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[16px] font-bold text-white leading-tight">Operations</div>
                    <div className="text-[16px] text-[#39b86b] font-medium flex items-center gap-1 mt-0.5">
                      <Check size={12} strokeWidth={3} /> Operating model understood
                    </div>
                  </div>
                </div>

                {/* 6. Organization */}
                <div className="bg-[#05121e]/90 border border-slate-700/60 rounded-lg p-2.5 flex items-start gap-2">
                  <Network size={18} className="text-indigo-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[16px] font-bold text-white leading-tight">Organization</div>
                    <div className="text-[16px] text-[#39b86b] font-medium flex items-center gap-1 mt-0.5">
                      <Check size={12} strokeWidth={3} /> 7 departments identified
                    </div>
                  </div>
                </div>

                {/* 7. Company Knowledge */}
                <div className="bg-[#05121e]/90 border border-slate-700/60 rounded-lg p-2.5 flex items-start gap-2">
                  <FileText size={18} className="text-rose-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[16px] font-bold text-white leading-tight">Company Knowledge</div>
                    <div className="text-[16px] text-[#39b86b] font-medium flex items-center gap-1 mt-0.5">
                      <Check size={12} strokeWidth={3} /> 12 documents processed
                    </div>
                  </div>
                </div>

                {/* 8. Systems */}
                <div className="bg-[#05121e]/90 border border-slate-700/60 rounded-lg p-2.5 flex items-start gap-2">
                  <Laptop size={18} className="text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[16px] font-bold text-white leading-tight">Systems</div>
                    <div className="text-[16px] text-[#39b86b] font-medium flex items-center gap-1 mt-0.5">
                      <Check size={12} strokeWidth={3} /> 3 systems connected
                    </div>
                  </div>
                </div>

                {/* 9. Financial Information */}
                <div className="bg-[#05121e]/90 border border-slate-700/60 rounded-lg p-2.5 flex items-start gap-2">
                  <BarChart2 size={18} className="text-amber-300 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[16px] font-bold text-white leading-tight">Financial Information</div>
                    <div className="text-[16px] text-[#f0c168] font-medium flex items-center gap-1 mt-0.5">
                      <Lock size={12} /> Restricted / Limited
                    </div>
                  </div>
                </div>

                {/* 10. Goals */}
                <div className="bg-[#05121e]/90 border border-slate-700/60 rounded-lg p-2.5 flex items-start gap-2">
                  <Target size={18} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[16px] font-bold text-white leading-tight">Goals</div>
                    <div className="text-[16px] text-[#39b86b] font-medium flex items-center gap-1 mt-0.5">
                      <Check size={12} strokeWidth={3} /> 3 priorities defined
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Next: Review My Company Brain Callout Card */}
            <section className="bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] text-[#0f172a] rounded-xl p-5 shadow-xl border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-full bg-[#020d18] text-[#d69a2b] grid place-items-center flex-shrink-0">
                  <FileCheck size={20} />
                </div>
                <h3 className="text-[20px] font-bold text-[#0f172a] m-0">
                  Next: Review My Company Brain
                </h3>
              </div>
              <p className="text-[16px] text-[#334155] leading-relaxed mb-4 m-0">
                I will review the information you provided, understand your company structure and then ask a few questions to clarify any missing information.
              </p>
              <button
                type="button"
                onClick={onNext}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#d69a2b] to-[#f0c168] hover:from-[#c28924] hover:to-[#e0b054] text-[#020d18] font-bold text-[16px] flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all"
              >
                <span>Review My Company Brain</span>
                <ArrowRight size={18} />
              </button>
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
            Review My Company Brain <ArrowRight size={18} />
          </button>
        </footer>
      </div>
    </>
  );
}

