import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Boxes,
  Building,
  Building2,
  Check,
  ChevronDown,
  CheckCircle2,
  Clock,
  Coins,
  Factory,
  FileCheck,
  FileSearch,
  FileSpreadsheet,
  FileText,
  Folder,
  FolderArchive,
  FolderLock,
  Headphones,
  Layers,
  Lightbulb,
  Lock,
  Megaphone,
  Network,
  Package,
  Plus,
  Receipt,
  Save,
  Send,
  Settings,
  ShieldAlert,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Truck,
  Upload,
  UploadCloud,
  Users,
  Wrench,
  X,
} from "lucide-react";
import aiAgentImage from "../../../../assets/igbndivision/aiagent.png";

const defaultKnowledgeCategories = [
  {
    id: "company",
    title: "Company",
    icon: Building2,
    iconColor: "text-blue-400",
    bgColor: "bg-blue-500/15 border-blue-500/30",
    items: ["Company Profile", "Company Presentation", "Business Overview"],
  },
  {
    id: "products",
    title: "Products",
    icon: Package,
    iconColor: "text-purple-400",
    bgColor: "bg-purple-500/15 border-purple-500/30",
    items: ["Product Catalogue", "Product Specifications", "Product Brochures"],
  },
  {
    id: "operations",
    title: "Operations",
    icon: Settings,
    iconColor: "text-amber-400",
    bgColor: "bg-amber-500/15 border-amber-500/30",
    items: ["SOPs", "Process Guidelines", "Quality Procedures"],
  },
  {
    id: "sales",
    title: "Sales",
    icon: TrendingUp,
    iconColor: "text-emerald-400",
    bgColor: "bg-emerald-500/15 border-emerald-500/30",
    items: [
      "Sales Process",
      "Approved Sales Information",
      "Proposal Templates",
      "Quotation Guidelines",
    ],
  },
  {
    id: "customer_service",
    title: "Customer Service",
    icon: Headphones,
    iconColor: "text-orange-400",
    bgColor: "bg-orange-500/15 border-orange-500/30",
    items: ["FAQs", "Service Guidelines", "Complaint Handling Process"],
  },
  {
    id: "hr",
    title: "HR",
    icon: Users,
    iconColor: "text-pink-400",
    bgColor: "bg-pink-500/15 border-pink-500/30",
    items: ["General HR Policies", "Employee Handbook", "Recruitment Process"],
  },
  {
    id: "other",
    title: "Other Documents",
    icon: Folder,
    iconColor: "text-slate-400",
    bgColor: "bg-slate-500/15 border-slate-500/30",
    items: ["Policies", "Templates", "Any other relevant documents"],
  },
];

const defaultProcessSteps = [
  { id: 1, title: "Lead Received", icon: Users },
  { id: 2, title: "Sales Qualification", icon: FileSearch },
  { id: 3, title: "Technical Review", icon: Wrench },
  { id: 4, title: "Quotation", icon: Receipt },
  { id: 5, title: "Management Approval", icon: CheckCircle2 },
  { id: 6, title: "Customer Confirmation", icon: ShoppingBag },
  { id: 7, title: "Production", icon: Factory },
  { id: 8, title: "Dispatch", icon: Truck },
];

const autoOrganizedCategories = [
  { id: "company", title: "Company Knowledge", color: "from-blue-600/30 to-blue-900/40 border-blue-500/40 text-blue-300", icon: Building },
  { id: "product", title: "Product Knowledge", color: "from-purple-600/30 to-purple-900/40 border-purple-500/40 text-purple-300", icon: Package },
  { id: "customer", title: "Customer Knowledge", color: "from-emerald-600/30 to-emerald-900/40 border-emerald-500/40 text-emerald-300", icon: Users },
  { id: "supplier", title: "Supplier Knowledge", color: "from-rose-600/30 to-rose-900/40 border-rose-500/40 text-rose-300", icon: Boxes },
  { id: "sales", title: "Sales Knowledge", color: "from-indigo-600/30 to-indigo-900/40 border-indigo-500/40 text-indigo-300", icon: TrendingUp },
  { id: "operational", title: "Operational Knowledge", color: "from-amber-600/30 to-amber-900/40 border-amber-500/40 text-amber-300", icon: Settings },
  { id: "policies", title: "Policies & Procedures", color: "from-violet-600/30 to-violet-900/40 border-violet-500/40 text-violet-300", icon: FileCheck },
  { id: "management", title: "Management Knowledge", color: "from-cyan-600/30 to-cyan-900/40 border-cyan-500/40 text-cyan-300", icon: ShieldCheck },
];

export default function COOCompanyKnowledge({
  currentStep = 9,
  knowledgeData = {},
  draftMessage,
  onBack,
  onChange,
  onSaveProgress,
  onNext,
}) {
  const uploadedFilesByCategory = knowledgeData.uploadedFilesByCategory || {};
  const processSteps = knowledgeData.processSteps || defaultProcessSteps;

  // Modal for adding / editing business process
  const [isProcessModalOpen, setIsProcessModalOpen] = useState(false);
  const [newProcessTitle, setNewProcessTitle] = useState("");

  const handleFileUpload = (categoryId, files) => {
    const fileList = Array.from(files || []);
    if (fileList.length === 0) return;
    const fileNames = fileList.map((f) => f.name);
    const existing = uploadedFilesByCategory[categoryId] || [];
    const updated = {
      ...uploadedFilesByCategory,
      [categoryId]: [...existing, ...fileNames],
    };
    onChange("uploadedFilesByCategory", updated);
  };

  const removeFile = (categoryId, fileName) => {
    const existing = uploadedFilesByCategory[categoryId] || [];
    const updated = {
      ...uploadedFilesByCategory,
      [categoryId]: existing.filter((name) => name !== fileName),
    };
    onChange("uploadedFilesByCategory", updated);
  };

  const handleAddProcessStep = () => {
    if (!newProcessTitle.trim()) return;
    const nextSteps = [
      ...processSteps,
      {
        id: Date.now(),
        title: newProcessTitle.trim(),
        icon: FileText,
      },
    ];
    onChange("processSteps", nextSteps);
    setNewProcessTitle("");
    setIsProcessModalOpen(false);
  };

  const handleRemoveProcessStep = (id) => {
    const nextSteps = processSteps.filter((s) => s.id !== id);
    onChange("processSteps", nextSteps);
  };

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
            <span className="text-[#d69a2b] mr-2">8.</span> How Does Your Company Get Work Done?
          </h1>
          <p className="text-[16px] text-[#cbd5e1] mt-1.5 leading-relaxed m-0">
            Give your COO the practical knowledge it needs to understand your processes, policies and ways of working.
          </p>
        </header>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.8fr)_minmax(320px,0.95fr)] gap-4 items-start">
          {/* LEFT COLUMN: Main Form Cards */}
          <div className="flex flex-col gap-4 min-w-0">
            {/* CARD 1: 1. Company Knowledge (Optional) */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg">
              <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                    <FileText size={22} />
                  </div>
                  <div>
                    <h2 className="text-[21px] font-bold text-white leading-tight m-0">
                      1. Company Knowledge <span className="text-[16px] font-normal text-[#94a3b8]">(Optional)</span>
                    </h2>
                    <p className="text-[16px] text-[#94a3b8] mt-0.5 m-0">
                      Upload relevant documents. I'll read and extract the key information for you.
                    </p>
                  </div>
                </div>

                <div className="text-[16px] text-[#cbd5e1] bg-[#071b2d]/80 border border-[#d69a2b]/30 rounded-lg px-3 py-1.5">
                  Supported formats: PDF, DOC, DOCX, XLS, PPT, JPG, PNG (Max 25 MB each)
                </div>
              </div>

              {/* 4 Columns x 2 Rows Grid for Knowledge Document Uploads */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {defaultKnowledgeCategories.map((cat) => {
                  const Icon = cat.icon;
                  const catFiles = uploadedFilesByCategory[cat.id] || [];
                  return (
                    <div
                      key={cat.id}
                      className="bg-[#05121e]/90 border border-slate-700/60 rounded-xl p-3.5 flex flex-col justify-between hover:border-[#d69a2b]/60 transition-all shadow-sm"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-7 h-7 rounded-md ${cat.bgColor} grid place-items-center flex-shrink-0`}>
                            <Icon size={16} className={cat.iconColor} />
                          </div>
                          <h3 className="text-[16px] font-bold text-white m-0 leading-tight">
                            {cat.title}
                          </h3>
                        </div>

                        <ul className="text-[16px] text-[#94a3b8] flex flex-col gap-1.5 p-0 m-0 list-none mb-3">
                          {cat.items.map((item) => (
                            <li key={item} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#d69a2b] flex-shrink-0"></span>
                              <span className="truncate">{item}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Uploaded files badges */}
                        {catFiles.length > 0 && (
                          <div className="flex flex-col gap-1.5 mb-2">
                            {catFiles.map((fname) => (
                              <div
                                key={fname}
                                className="flex items-center justify-between bg-[#0e273e] border border-blue-800/40 rounded px-2.5 py-1 text-[16px] text-white"
                              >
                                <span className="truncate max-w-[120px]">{fname}</span>
                                <button
                                  type="button"
                                  onClick={() => removeFile(cat.id, fname)}
                                  className="text-gray-400 hover:text-red-400"
                                >
                                  <X size={14} />
                                </button>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Upload button zone */}
                      <label className="border border-dashed border-[rgba(114,80,33,0.6)] hover:border-[#d69a2b] rounded-lg p-2.5 flex flex-col items-center justify-center gap-1 cursor-pointer bg-[#031120]/70 text-center transition-all mt-auto">
                        <Upload size={16} className="text-[#d69a2b]" />
                        <span className="text-[16px] text-gray-300 font-medium leading-tight">
                          Click to upload or drag and drop files
                        </span>
                        <input
                          type="file"
                          multiple
                          onChange={(e) => handleFileUpload(cat.id, e.target.files)}
                          className="hidden"
                          accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.png"
                        />
                      </label>
                    </div>
                  );
                })}

                {/* 8th Tile: Already have documents? Upload All Documents */}
                <div className="bg-[#05121e]/90 border border-slate-700/60 rounded-xl p-3.5 flex flex-col justify-between hover:border-[#d69a2b]/60 transition-all shadow-sm">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-md bg-amber-500/15 border border-amber-500/30 grid place-items-center flex-shrink-0">
                        <FolderArchive size={16} className="text-amber-400" />
                      </div>
                      <h3 className="text-[16px] font-bold text-white m-0 leading-tight">
                        Already have documents?
                      </h3>
                    </div>
                    <p className="text-[16px] text-[#94a3b8] leading-snug m-0 mb-3">
                      You can upload multiple files in each category. I'll organize them for you.
                    </p>
                  </div>

                  <label className="w-full py-2.5 px-3 rounded-lg bg-[rgba(214,154,43,0.15)] hover:bg-[rgba(214,154,43,0.25)] border border-[#d69a2b] text-[#f0c168] text-[16px] font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all mt-auto">
                    <UploadCloud size={18} />
                    <span>Upload All Documents</span>
                    <input
                      type="file"
                      multiple
                      onChange={(e) => handleFileUpload("other", e.target.files)}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.png"
                    />
                  </label>
                </div>
              </div>
            </section>

            {/* CARD 2: 2. Company Processes (Optional) */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg">
              <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                    <WorkflowIcon size={22} />
                  </div>
                  <div>
                    <h2 className="text-[21px] font-bold text-white leading-tight m-0">
                      2. Company Processes <span className="text-[16px] font-normal text-[#94a3b8]">(Optional)</span>
                    </h2>
                    <p className="text-[16px] text-[#94a3b8] mt-0.5 m-0">
                      Describe any important business process your COO should understand. You can add multiple processes.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsProcessModalOpen(true)}
                  className="px-4 py-2 rounded-lg bg-[rgba(214,154,43,0.15)] hover:bg-[rgba(214,154,43,0.25)] border border-[#d69a2b] text-[#f0c168] text-[16px] font-semibold flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Plus size={16} /> Add Business Process
                </button>
              </div>

              {/* Horizontal Process Flow Diagram */}
              <div className="overflow-x-auto pb-2">
                <div className="flex items-center gap-2 min-w-[760px] py-1">
                  {processSteps.map((step, idx) => {
                    const StepIcon = step.icon || FileText;
                    return (
                      <div key={step.id} className="flex items-center gap-2 flex-shrink-0">
                        <div className="bg-[#05121e]/95 border border-[rgba(214,154,43,0.35)] rounded-xl px-3.5 py-2.5 flex flex-col items-center justify-center min-w-[125px] h-[88px] text-center shadow-sm relative group">
                          {processSteps.length > 3 && (
                            <button
                              type="button"
                              onClick={() => handleRemoveProcessStep(step.id)}
                              className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-red-600/80 text-white grid place-items-center opacity-0 group-hover:opacity-100 transition-opacity"
                              title="Remove step"
                            >
                              <X size={10} />
                            </button>
                          )}
                          <StepIcon size={20} className="text-[#f0c168] mb-1" />
                          <span className="text-[16px] font-medium text-gray-200 leading-tight">
                            {step.title}
                          </span>
                        </div>
                        {idx < processSteps.length - 1 && (
                          <span className="text-[#d69a2b] text-[18px] font-bold">→</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* CARD 3: 3. Knowledge Categories (Auto-Organized) */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                  <FolderLock size={22} />
                </div>
                <div>
                  <h2 className="text-[21px] font-bold text-white leading-tight m-0">
                    3. Knowledge Categories <span className="text-[16px] font-normal text-[#94a3b8]">(Auto-Organized)</span>
                  </h2>
                  <p className="text-[16px] text-[#94a3b8] mt-0.5 m-0">
                    Your uploaded documents will be automatically organized into the following knowledge categories.
                  </p>
                </div>
              </div>

              {/* 8 Categories Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
                {autoOrganizedCategories.map((c) => {
                  const CatIcon = c.icon;
                  return (
                    <div
                      key={c.id}
                      className={`bg-gradient-to-b ${c.color} border rounded-lg p-2.5 flex flex-col items-center text-center justify-center min-h-[92px] transition-transform hover:-translate-y-0.5 shadow-sm`}
                    >
                      <CatIcon size={22} className="mb-1.5" />
                      <span className="text-[16px] font-semibold leading-tight text-white">
                        {c.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </section>

            {draftMessage && (
              <p aria-live="polite" className="coo-customer-save-status">
                {draftMessage}
              </p>
            )}
          </div>

          {/* RIGHT ASIDE */}
          <aside className="flex flex-col gap-4 min-w-0">
            {/* Top Assistant Speech Bubble + Avatar */}
            <div className="flex items-center justify-between gap-3 p-1">
              <div className="flex-1 bg-[#f8fafc] text-[#0f172a] rounded-xl rounded-br-xs p-3.5 shadow-lg">
                <p className="text-[16px] leading-snug m-0 text-[#0f172a]">
                  I'm learning how work is done in your company—not collecting every document your company owns. This information helps me understand your processes, policies and way of working.
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

            {/* Why This Matters Card */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4.5 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={20} className="text-[#f5b738]" />
                <h3 className="text-[18px] font-bold text-white m-0">Why This Matters</h3>
              </div>
              <ul className="flex flex-col gap-2.5 p-0 m-0 list-none">
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Helps me understand how work is done in your company.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Allows me to follow your existing processes.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Helps me create more accurate outputs.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Makes it easier to coordinate your AI workforce across functions.</span>
                </li>
              </ul>
            </section>

            {/* You Don't Need to Upload Everything Card */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4.5 shadow-lg flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0 mt-0.5">
                <Lock size={18} />
              </div>
              <div className="flex-1">
                <h3 className="text-[18px] font-bold text-white m-0">You Don't Need to Upload Everything</h3>
                <p className="text-[16px] text-[#cbd5e1] leading-relaxed mt-1.5 m-0">
                  Restricted documents can remain in your Secure Company Data Vault and can be connected to an AI employee only when required.
                </p>
              </div>
              {/* Vault Graphic Icon */}
              <div className="w-12 h-12 flex-shrink-0 grid place-items-center bg-[#071b2d] border border-slate-700 rounded-lg shadow-inner">
                <Lock className="text-[#d69a2b]" size={24} />
              </div>
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
                  <span>Upload only relevant and non-sensitive documents.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Use clear and updated process documents.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>You can add more documents later.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>I'll automatically organize the information to build your Company Brain.</span>
                </li>
              </ul>
            </section>
          </aside>
        </div>

        {/* Modal for Add Business Process */}
        {isProcessModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
            <div className="bg-[#071b2d] border border-[#d69a2b] rounded-xl p-5 max-w-md w-full shadow-2xl">
              <div className="flex items-center justify-between mb-4 border-b border-gray-700/60 pb-2.5">
                <h3 className="text-[20px] font-bold text-white m-0">Add Business Process Step</h3>
                <button
                  type="button"
                  onClick={() => setIsProcessModalOpen(false)}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1.5">
                    Step Title / Name
                  </label>
                  <input
                    type="text"
                    value={newProcessTitle}
                    onChange={(e) => setNewProcessTitle(e.target.value)}
                    placeholder="e.g. Quality Inspection, Invoice Generation"
                    className="w-full min-h-[46px] px-3.5 bg-[#031120] border border-gray-700 rounded-lg text-white text-[16px] outline-none focus:border-[#d69a2b]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2.5 mt-5">
                <button
                  type="button"
                  onClick={() => setIsProcessModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-gray-600 text-gray-300 text-[16px] cursor-pointer hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleAddProcessStep}
                  className="px-5 py-2 rounded-lg bg-[#d69a2b] text-[#031120] font-semibold text-[16px] cursor-pointer hover:bg-[#e0aa48]"
                >
                  Add Step
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
            className="coo-next-button min-w-[300px] text-[16px]"
            onClick={onNext}
            type="button"
          >
            Next: Systems &amp; Digital Workspace <ArrowRight size={18} />
          </button>
        </footer>
      </div>
    </>
  );
}

// Mini Workflow Icon component
function WorkflowIcon({ size = 22, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="6" height="6" rx="1" />
      <rect x="15" y="3" width="6" height="6" rx="1" />
      <rect x="9" y="15" width="6" height="6" rx="1" />
      <path d="M6 9v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V9" />
      <path d="M12 13v2" />
    </svg>
  );
}
