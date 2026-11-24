import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Calendar,
  Check,
  ChevronDown,
  Clock,
  Coins,
  CreditCard,
  FileCheck,
  FileText,
  FolderLock,
  Layers,
  Lightbulb,
  Lock,
  MoreHorizontal,
  Package,
  Percent,
  Save,
  Scale,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  UploadCloud,
  Users,
  Wrench,
  X,
} from "lucide-react";
import aiAgentImage from "../../../../assets/igbndivision/aiagent.png";

const revenueModelOptions = [
  { id: "Product Sales", label: "Product Sales", icon: Package },
  { id: "Service Fees", label: "Service Fees", icon: Wrench },
  { id: "Subscription", label: "Subscription", icon: Calendar },
  { id: "Commission", label: "Commission", icon: Percent },
  { id: "Distribution Margin", label: "Distribution Margin", icon: TrendingUp },
  { id: "Manufacturing Contracts", label: "Manufacturing Contracts", icon: Layers },
  { id: "Licensing", label: "Licensing", icon: Award },
  { id: "Consulting", label: "Consulting", icon: Users },
  { id: "Marketplace Fees", label: "Marketplace Fees", icon: ShoppingCart },
  { id: "Other", label: "Other", icon: MoreHorizontal },
];

const companySizeOptions = [
  "Below ₹50 Lakh",
  "₹50 Lakh – ₹1 Crore",
  "₹1 – 5 Crore",
  "₹5 – 10 Crore",
  "₹10 – 50 Crore",
  "₹50 – 100 Crore",
  "₹100 Crore+",
  "Prefer not to disclose",
];

const currencyOptions = ["INR", "USD", "EUR", "GBP", "AED"];

const salesCycleOptions = [
  "Same day",
  "Less than 1 week",
  "1 – 4 weeks",
  "1 – 3 months",
  "3 – 6 months",
  "6 – 12 months",
  "Longer",
];

const paymentTermOptions = [
  "Advance",
  "COD",
  "Net 15",
  "Net 30",
  "Net 45",
  "Net 60",
  "LC",
  "Milestone",
  "Other",
];

const vaultDocumentTypes = [
  { id: "pnl", label: "P&L Statement", icon: FileText },
  { id: "balance_sheet", label: "Balance Sheet", icon: FileCheck },
  { id: "cash_flow", label: "Cash Flow", icon: TrendingUp },
  { id: "trial_balance", label: "Trial Balance", icon: Scale },
  { id: "gst_returns", label: "GST Returns", icon: FileText },
  { id: "management_accounts", label: "Management Accounts", icon: BookOpen },
  { id: "receivables", label: "Receivables", icon: Clock },
  { id: "payables", label: "Payables", icon: CreditCard },
  { id: "projections", label: "Financial Projections", icon: BarChart3 },
];

export default function COOBusinessModel({
  currentStep = 6,
  financialData = {},
  draftMessage,
  onBack,
  onChange,
  onSaveProgress,
  onNext,
}) {
  const revenueModels = financialData.revenueModels || [
    "Product Sales",
    "Service Fees",
    "Distribution Margin",
  ];
  const companySize = financialData.companySize || "₹1 – 5 Crore";
  const minOrderValue = financialData.minOrderValue || "50,000";
  const maxOrderValue = financialData.maxOrderValue || "5,00,000";
  const currency = financialData.currency || "INR";
  const salesCycle = financialData.salesCycle || "1 – 3 months";
  const paymentTerms = financialData.paymentTerms || ["Advance", "Net 30", "LC"];
  const commercialRules =
    financialData.commercialRules ||
    `• We never sell below 20% gross margin.\n• Orders above ₹10 lakh require founder approval.\n• New international customers require verification.\n• Quotations must follow approved pricing templates.\n• We provide 5% additional discount for annual contracts.`;
  const vaultDocuments = financialData.vaultDocuments || [];

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [customInfoInput, setCustomInfoInput] = useState("");

  const toggleRevenueModel = (modelId) => {
    const next = revenueModels.includes(modelId)
      ? revenueModels.filter((m) => m !== modelId)
      : [...revenueModels, modelId];
    onChange("revenueModels", next);
  };

  const togglePaymentTerm = (term) => {
    const next = paymentTerms.includes(term)
      ? paymentTerms.filter((t) => t !== term)
      : [...paymentTerms, term];
    onChange("paymentTerms", next);
  };

  const toggleVaultDocument = (docId) => {
    const next = vaultDocuments.includes(docId)
      ? vaultDocuments.filter((d) => d !== docId)
      : [...vaultDocuments, docId];
    onChange("vaultDocuments", next);
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;
    const fileNames = files.map((f) => f.name);
    setUploadedFiles((prev) => [...prev, ...fileNames]);
  };

  const removeUploadedFile = (fileName) => {
    setUploadedFiles((prev) => prev.filter((f) => f !== fileName));
  };

  // Dynamic values for Quick Insights card
  const currencySymbol = currency === "INR" ? "₹" : currency === "USD" ? "$" : currency === "EUR" ? "€" : "£";
  const formattedOrderValue = `${currencySymbol}${minOrderValue} – ${currencySymbol}${maxOrderValue}`;
  const insightsRevenue = revenueModels.slice(0, 2).join(", ") + (revenueModels.length > 2 ? "..." : "");
  const insightsPayment = paymentTerms.slice(0, 3).join(", ");

  return (
    <>
      {/* Step Header */}
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

      {/* Main Container using Tailwind utilities + theme colors */}
      <div className="flex flex-col gap-4 pt-2 text-[#f7f8fa] w-full box-border">
        {/* Title Header */}
        <header className="pb-1">
          <h1 className="font-serif text-[32px] md:text-[40px] font-bold text-white tracking-tight leading-tight m-0">
            <span className="text-[#d69a2b] mr-2">5.</span> How Does Your Business Work Financially?
          </h1>
          <p className="text-[16px] text-[#cbd5e1] mt-1.5 leading-relaxed m-0">
            Give your COO enough commercial context to understand your business.
          </p>
          <p className="text-[16px] text-[#94a3b8] mt-0.5 leading-relaxed m-0">
            Detailed financial information is optional and can remain restricted.
          </p>
        </header>

        {/* 2-Column Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.8fr)_minmax(320px,0.95fr)] gap-4 items-start">
          {/* LEFT COLUMN: Cards 1 through 6 */}
          <div className="flex flex-col gap-4 min-w-0">
            {/* CARD 1: Revenue Model */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                  <Coins size={22} />
                </div>
                <div>
                  <h2 className="text-[21px] font-bold text-white leading-tight m-0">
                    1. Revenue Model
                  </h2>
                  <p className="text-[16px] text-[#94a3b8] mt-1 m-0">
                    Select all the ways your business generates revenue.
                  </p>
                </div>
              </div>

              {/* Revenue Model Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {revenueModelOptions.map((item) => {
                  const Icon = item.icon;
                  const isChecked = revenueModels.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggleRevenueModel(item.id)}
                      className={`flex items-center gap-2.5 px-3.5 py-2.5 rounded-lg border text-left cursor-pointer transition-all ${
                        isChecked
                          ? "border-[#d69a2b] bg-[rgba(214,154,43,0.18)] shadow-[0_0_10px_rgba(214,154,43,0.15)] text-white"
                          : "border-[rgba(114,80,33,0.7)] bg-[#061523]/85 text-[#e2e8f0] hover:border-[#d69a2b]/70 hover:bg-[#0e263c]"
                      }`}
                    >
                      <span
                        className={`w-4.5 h-4.5 rounded border grid place-items-center flex-shrink-0 ${
                          isChecked
                            ? "border-[#d69a2b] bg-[#d69a2b] text-[#031120]"
                            : "border-[rgba(114,80,33,0.8)] bg-[#04101b]"
                        }`}
                      >
                        {isChecked && <Check size={13} strokeWidth={3} />}
                      </span>
                      <Icon size={18} className={isChecked ? "text-[#f0c168]" : "text-[#94a3b8]"} />
                      <span className="text-[16px] font-medium leading-snug">{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* ROW 2: Company Size (~60%) & Typical Order Value (~40%) */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-4">
              {/* CARD 2: Company Size */}
              <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                    <BarChart3 size={22} />
                  </div>
                  <div>
                    <h2 className="text-[21px] font-bold text-white leading-tight m-0">
                      2. Company Size
                    </h2>
                    <p className="text-[16px] text-[#94a3b8] mt-1 m-0">
                      Approximate annual revenue of your company.
                    </p>
                  </div>
                </div>

                {/* Company Size Radio Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {companySizeOptions.map((opt) => {
                    const isSelected = companySize === opt;
                    return (
                      <label
                        key={opt}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg border cursor-pointer transition-all ${
                          isSelected
                            ? "border-[#d69a2b] bg-[rgba(214,154,43,0.18)] shadow-[0_0_8px_rgba(214,154,43,0.15)] text-white"
                            : "border-[rgba(114,80,33,0.7)] bg-[#061523]/85 text-[#e2e8f0] hover:border-[#d69a2b]/70"
                        }`}
                      >
                        <input
                          type="radio"
                          name="companySize"
                          value={opt}
                          checked={isSelected}
                          onChange={() => onChange("companySize", opt)}
                          className="sr-only"
                        />
                        <span className="w-4.5 h-4.5 rounded-full border-2 border-[#d69a2b] grid place-items-center bg-[#04101b] flex-shrink-0">
                          {isSelected && <span className="w-2 h-2 rounded-full bg-[#d69a2b]" />}
                        </span>
                        <span className="text-[16px] leading-snug">{opt}</span>
                      </label>
                    );
                  })}
                </div>
              </section>

              {/* CARD 3: Typical Order Value */}
              <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                      <ShoppingCart size={22} />
                    </div>
                    <div>
                      <h2 className="text-[21px] font-bold text-white leading-tight m-0">
                        3. Typical Order Value
                      </h2>
                      <p className="text-[16px] text-[#94a3b8] mt-1 m-0">
                        What is the average value of your orders?
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {/* Min Order Value */}
                    <div>
                      <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1.5">
                        Minimum Order Value
                      </label>
                      <input
                        type="text"
                        value={minOrderValue}
                        onChange={(e) => onChange("minOrderValue", e.target.value)}
                        placeholder="50,000"
                        className="w-full min-h-[46px] px-3 py-2 bg-[#05121e]/85 border border-[rgba(114,80,33,0.72)] rounded-lg text-white text-[16px] outline-none focus:border-[#d69a2b] focus:ring-1 focus:ring-[#d69a2b]"
                      />
                    </div>

                    {/* Max Order Value */}
                    <div>
                      <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1.5">
                        Maximum Order Value
                      </label>
                      <input
                        type="text"
                        value={maxOrderValue}
                        onChange={(e) => onChange("maxOrderValue", e.target.value)}
                        placeholder="5,00,000"
                        className="w-full min-h-[46px] px-3 py-2 bg-[#05121e]/85 border border-[rgba(114,80,33,0.72)] rounded-lg text-white text-[16px] outline-none focus:border-[#d69a2b] focus:ring-1 focus:ring-[#d69a2b]"
                      />
                    </div>

                    {/* Currency Dropdown */}
                    <div>
                      <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1.5">
                        Currency
                      </label>
                      <div className="relative flex items-center">
                        <select
                          value={currency}
                          onChange={(e) => onChange("currency", e.target.value)}
                          className="w-full min-h-[46px] px-3 pr-8 py-2 bg-[#05121e]/85 border border-[rgba(114,80,33,0.72)] rounded-lg text-white text-[16px] outline-none appearance-none cursor-pointer focus:border-[#d69a2b]"
                        >
                          {currencyOptions.map((curr) => (
                            <option key={curr} value={curr} className="bg-[#071b2d] text-white">
                              {curr}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={17} className="absolute right-3 text-[#d69a2b] pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* ROW 3: Sales Cycle (~55%) & Payment Terms (~45%) */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-4">
              {/* CARD 4: Sales Cycle */}
              <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                    <Clock size={22} />
                  </div>
                  <div>
                    <h2 className="text-[21px] font-bold text-white leading-tight m-0">
                      4. Sales Cycle
                    </h2>
                    <p className="text-[16px] text-[#94a3b8] mt-1 m-0">
                      What is your typical sales cycle from initial enquiry to order confirmation?
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {salesCycleOptions.map((cycle) => {
                    const isSelected = salesCycle === cycle;
                    return (
                      <label
                        key={cycle}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg border cursor-pointer transition-all ${
                          isSelected
                            ? "border-[#d69a2b] bg-[rgba(214,154,43,0.18)] shadow-[0_0_8px_rgba(214,154,43,0.15)] text-white"
                            : "border-[rgba(114,80,33,0.7)] bg-[#061523]/85 text-[#e2e8f0] hover:border-[#d69a2b]/70"
                        }`}
                      >
                        <input
                          type="radio"
                          name="salesCycle"
                          value={cycle}
                          checked={isSelected}
                          onChange={() => onChange("salesCycle", cycle)}
                          className="sr-only"
                        />
                        <span className="w-4.5 h-4.5 rounded-full border-2 border-[#d69a2b] grid place-items-center bg-[#04101b] flex-shrink-0">
                          {isSelected && <span className="w-2 h-2 rounded-full bg-[#d69a2b]" />}
                        </span>
                        <span className="text-[16px] leading-snug">{cycle}</span>
                      </label>
                    );
                  })}
                </div>
              </section>

              {/* CARD 5: Payment Terms */}
              <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                    <CreditCard size={22} />
                  </div>
                  <div>
                    <h2 className="text-[21px] font-bold text-white leading-tight m-0">
                      5. Payment Terms
                    </h2>
                    <p className="text-[16px] text-[#94a3b8] mt-1 m-0">
                      Select the payment terms you usually work with.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {paymentTermOptions.map((term) => {
                    const isChecked = paymentTerms.includes(term);
                    return (
                      <label
                        key={term}
                        className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition-all ${
                          isChecked
                            ? "border-[#d69a2b] bg-[rgba(214,154,43,0.18)] text-white shadow-[0_0_8px_rgba(214,154,43,0.12)]"
                            : "border-[rgba(114,80,33,0.7)] bg-[#061523]/85 text-[#e2e8f0] hover:border-[#d69a2b]/70"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => togglePaymentTerm(term)}
                          className="sr-only"
                        />
                        <span
                          className={`w-4 h-4 rounded border grid place-items-center flex-shrink-0 ${
                            isChecked
                              ? "border-[#d69a2b] bg-[#d69a2b] text-[#031120]"
                              : "border-[rgba(114,80,33,0.8)] bg-[#04101b]"
                          }`}
                        >
                          {isChecked && <Check size={11} strokeWidth={3} />}
                        </span>
                        <span className="text-[16px] font-medium leading-tight">{term}</span>
                      </label>
                    );
                  })}
                </div>
              </section>
            </div>

            {/* CARD 6: Commercial Rules */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                  <FileText size={22} />
                </div>
                <div>
                  <h2 className="text-[21px] font-bold text-white leading-tight m-0">
                    6. Commercial Rules
                  </h2>
                  <p className="text-[16px] text-[#94a3b8] mt-1 m-0">
                    Are there commercial rules, pricing policies or approval requirements your AI workforce must follow?
                  </p>
                </div>
              </div>

              <div className="relative mt-2">
                <textarea
                  rows={6}
                  value={commercialRules}
                  onChange={(e) => onChange("commercialRules", e.target.value)}
                  maxLength={500}
                  className="w-full bg-[#05121e]/90 border border-[rgba(114,80,33,0.72)] rounded-lg p-3.5 text-white text-[16px] leading-relaxed outline-none resize-none focus:border-[#d69a2b] focus:ring-1 focus:ring-[#d69a2b]"
                />
                <div className="text-right text-[16px] text-[#94a3b8] mt-1">
                  {commercialRules.length}/500
                </div>
              </div>
            </section>

            {draftMessage && (
              <p aria-live="polite" className="coo-customer-save-status">
                {draftMessage}
              </p>
            )}
          </div>

          {/* RIGHT ASIDE: Speech bubble + Quick Insights + Secure Vault + Tips */}
          <aside className="flex flex-col gap-4 min-w-0">
            {/* Top Assistant Card with Speech Bubble */}
            <div className="flex items-center justify-between gap-3 p-1">
              <div className="flex-1 bg-[#f8fafc] text-[#0f172a] rounded-xl rounded-br-xs p-3.5 shadow-lg">
                <p className="text-[16px] leading-snug m-0 text-[#0f172a]">
                  I need to understand how your business makes money. I don't need your complete financial records to understand your company.
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

            {/* Quick Insights Card */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4.5 shadow-lg">
              <div className="flex items-center gap-2 mb-3.5">
                <Lightbulb size={20} className="text-[#f5b738]" />
                <h3 className="text-[18px] font-bold text-white m-0">Quick Insights</h3>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {/* 1. Revenue Model */}
                <div className="bg-[#05121e]/85 border border-[rgba(214,154,43,0.25)] rounded-lg p-2.5 flex items-start gap-2.5">
                  <Coins size={20} className="text-[#f5b738] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[16px] text-[#94a3b8]">Revenue Model</div>
                    <div className="text-[16px] font-semibold text-white leading-tight mt-0.5">
                      {insightsRevenue || "None selected"}
                    </div>
                  </div>
                </div>

                {/* 2. Order Value */}
                <div className="bg-[#05121e]/85 border border-[rgba(214,154,43,0.25)] rounded-lg p-2.5 flex items-start gap-2.5">
                  <ShoppingCart size={20} className="text-[#f5b738] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[16px] text-[#94a3b8]">Order Value</div>
                    <div className="text-[16px] font-semibold text-white leading-tight mt-0.5">
                      {formattedOrderValue}
                    </div>
                  </div>
                </div>

                {/* 3. Sales Cycle */}
                <div className="bg-[#05121e]/85 border border-[rgba(214,154,43,0.25)] rounded-lg p-2.5 flex items-start gap-2.5">
                  <Clock size={20} className="text-[#f5b738] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[16px] text-[#94a3b8]">Sales Cycle</div>
                    <div className="text-[16px] font-semibold text-white leading-tight mt-0.5">
                      {salesCycle}
                    </div>
                  </div>
                </div>

                {/* 4. Payment Terms */}
                <div className="bg-[#05121e]/85 border border-[rgba(214,154,43,0.25)] rounded-lg p-2.5 flex items-start gap-2.5">
                  <CreditCard size={20} className="text-[#f5b738] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[16px] text-[#94a3b8]">Payment Terms</div>
                    <div className="text-[16px] font-semibold text-white leading-tight mt-0.5">
                      {insightsPayment || "None selected"}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Secure Company Data Vault Card */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4.5 shadow-lg relative">
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168]">
                    <Lock size={17} />
                  </div>
                  <h3 className="text-[18px] font-bold text-white m-0">
                    Secure Company Data Vault
                  </h3>
                </div>
                <span className="text-[16px] font-semibold bg-[#1e293b] text-[#94a3b8] px-2.5 py-0.5 rounded-full border border-slate-700">
                  Optional
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 mb-3">
                <p className="text-[16px] text-[#94a3b8] leading-snug m-0">
                  Detailed financial records are not required to create your Company Brain. You can add them here if you want your AI Finance employee to access them later.
                </p>
                <div className="w-14 h-14 flex-shrink-0 grid place-items-center bg-[rgba(214,154,43,0.1)] rounded-lg border border-[#d69a2b]/30">
                  <FolderLock size={32} className="text-[#d69a2b]" />
                </div>
              </div>

              {/* Document Type Toggles */}
              <div className="grid grid-cols-3 gap-2 mb-3.5">
                {vaultDocumentTypes.map((doc) => {
                  const DocIcon = doc.icon;
                  const isSelected = vaultDocuments.includes(doc.id);
                  return (
                    <button
                      key={doc.id}
                      type="button"
                      onClick={() => toggleVaultDocument(doc.id)}
                      className={`flex items-center gap-1.5 px-2 py-1.5 rounded border text-left cursor-pointer transition-all ${
                        isSelected
                          ? "border-[#d69a2b] bg-[rgba(214,154,43,0.2)] text-white"
                          : "border-slate-800 bg-[#05121e]/80 text-[#cbd5e1] hover:border-[#d69a2b]/50"
                      }`}
                    >
                      <DocIcon size={14} className={isSelected ? "text-[#f0c168]" : "text-[#94a3b8]"} />
                      <span className="text-[16px] leading-tight truncate">{doc.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Upload Drag & Drop Area */}
              <label className="border-2 border-dashed border-[rgba(114,80,33,0.6)] hover:border-[#d69a2b] rounded-lg p-4 flex flex-col items-center justify-center gap-1.5 cursor-pointer bg-[#05121e]/60 transition-all block text-center">
                <UploadCloud size={24} className="text-[#d69a2b]" />
                <div className="text-[16px] font-semibold text-white">
                  Click to upload or drag and drop files
                </div>
                <div className="text-[16px] text-[#94a3b8]">
                  PDF, DOC, DOCX, XLS, XLSX (Max 25 MB)
                </div>
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  accept=".pdf,.doc,.docx,.xls,.xlsx"
                />
              </label>

              {/* Uploaded Files List */}
              {uploadedFiles.length > 0 && (
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {uploadedFiles.map((fname) => (
                    <span
                      key={fname}
                      className="inline-flex items-center gap-1.5 bg-[#0e263c] border border-blue-900 px-2.5 py-1 rounded text-[16px] text-white"
                    >
                      <FileText size={14} className="text-[#d69a2b]" />
                      <span className="max-w-[130px] truncate">{fname}</span>
                      <button
                        type="button"
                        onClick={() => removeUploadedFile(fname)}
                        className="text-[#94a3b8] hover:text-red-400"
                      >
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              )}

              {/* Add Restricted Financial Information Button */}
              <button
                type="button"
                onClick={() => setShowAddModal(true)}
                className="w-full mt-3 py-2 px-3 rounded-lg bg-[rgba(214,154,43,0.15)] hover:bg-[rgba(214,154,43,0.25)] border border-[#d69a2b]/70 text-[#f0c168] text-[16px] font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>+</span> Add Restricted Financial Information
              </button>
            </section>

            {/* Bottom 2 Helper Cards: Why This Information Matters & Quick Tips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Why This Information Matters */}
              <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-3.5 shadow-lg">
                <div className="flex items-center gap-2 mb-2.5">
                  <Lightbulb size={18} className="text-[#f5b738]" />
                  <h4 className="text-[18px] font-bold text-white m-0">Why This Matters</h4>
                </div>
                <ul className="flex flex-col gap-2 p-0 m-0 list-none">
                  <li className="flex items-start gap-2 text-[16px] text-[#cbd5e1] leading-snug">
                    <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>Helps me understand how your business generates revenue.</span>
                  </li>
                  <li className="flex items-start gap-2 text-[16px] text-[#cbd5e1] leading-snug">
                    <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>Helps me create better strategies for Sales, Pricing and Growth.</span>
                  </li>
                  <li className="flex items-start gap-2 text-[16px] text-[#cbd5e1] leading-snug">
                    <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>Enables accurate financial analysis when required.</span>
                  </li>
                </ul>
              </section>

              {/* Quick Tips */}
              <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-3.5 shadow-lg">
                <div className="flex items-center gap-2 mb-2.5">
                  <BookOpen size={18} className="text-[#f5b738]" />
                  <h4 className="text-[18px] font-bold text-white m-0">Quick Tips</h4>
                </div>
                <ul className="flex flex-col gap-2 p-0 m-0 list-none">
                  <li className="flex items-start gap-2 text-[16px] text-[#cbd5e1] leading-snug">
                    <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>Select all revenue models that apply.</span>
                  </li>
                  <li className="flex items-start gap-2 text-[16px] text-[#cbd5e1] leading-snug">
                    <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>Provide approximate ranges if exact numbers are sensitive.</span>
                  </li>
                  <li className="flex items-start gap-2 text-[16px] text-[#cbd5e1] leading-snug">
                    <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>Add commercial rules that are important.</span>
                  </li>
                  <li className="flex items-start gap-2 text-[16px] text-[#cbd5e1] leading-snug">
                    <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>You can update this information anytime.</span>
                  </li>
                </ul>
              </section>
            </div>
          </aside>
        </div>

        {/* Modal for adding custom restricted financial info */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
            <div className="bg-[#071b2d] border border-[#d69a2b] rounded-xl p-5 max-w-md w-full shadow-2xl">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-[18px] font-bold text-white m-0">Add Restricted Info</h4>
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>
              <p className="text-[16px] text-gray-300 mb-3">
                Enter any sensitive financial guidelines or secure vault notes:
              </p>
              <textarea
                rows={4}
                value={customInfoInput}
                onChange={(e) => setCustomInfoInput(e.target.value)}
                placeholder="e.g. Audit reports stored in local vault..."
                className="w-full bg-[#031120] border border-gray-700 rounded-lg p-2.5 text-white text-[16px] outline-none focus:border-[#d69a2b]"
              />
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-3.5 py-1.5 rounded-lg border border-gray-600 text-gray-300 text-[16px]"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    setCustomInfoInput("");
                  }}
                  className="px-4 py-1.5 rounded-lg bg-[#d69a2b] text-[#031120] font-semibold text-[16px]"
                >
                  Save Note
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
            className="coo-next-button min-w-[280px] text-[16px]"
            onClick={onNext}
            type="button"
          >
            Next: Operations &amp; Supply Chain <ArrowRight size={18} />
          </button>
        </footer>
      </div>
    </>
  );
}
