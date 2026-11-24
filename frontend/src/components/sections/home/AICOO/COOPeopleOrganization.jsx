import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  Building2,
  Check,
  ChevronDown,
  Coins,
  Edit2,
  Factory,
  FolderTree,
  Headphones,
  Key,
  Layers,
  Lightbulb,
  Lock,
  Megaphone,
  Network,
  Package,
  Pencil,
  Plus,
  Save,
  Scale,
  Share2,
  ShieldCheck,
  ShoppingBag,
  Trash2,
  TrendingUp,
  UploadCloud,
  User,
  Users,
  Wrench,
  X,
} from "lucide-react";
import aiAgentImage from "../../../../assets/igbndivision/aiagent.png";
import founderImage from "../../../../assets/founder-main.png";

const allDepartmentOptions = [
  "Sales",
  "Business Development",
  "Finance",
  "HR",
  "Operations",
  "Procurement",
  "Production",
  "Logistics",
  "Customer Support",
  "IT",
  "Legal",
  "Quality",
  "R&D",
  "Marketing",
  "Other",
];

const keyDependencyOptions = [
  "Sales",
  "Customer Relationships",
  "Finance",
  "Approvals",
  "Procurement",
  "Operations",
  "Hiring",
  "Strategy",
  "International Business",
  "Other",
];

const positionOptions = [
  "Founder & CEO",
  "Co-Founder",
  "Managing Director",
  "CEO",
  "Chairman",
  "Director",
  "Partner",
  "Other",
];

const defaultTeamMembers = [
  {
    id: 1,
    name: "Amit Sharma",
    position: "CTO",
    department: "Technology",
    keyResponsibility: "Product development, IT infra",
  },
  {
    id: 2,
    name: "Neha Gupta",
    position: "CFO",
    department: "Finance",
    keyResponsibility: "Accounts, Compliance, Reporting",
  },
  {
    id: 3,
    name: "Vikram Mehta",
    position: "COO",
    department: "Operations",
    keyResponsibility: "Production, Supply Chain",
  },
  {
    id: 4,
    name: "Priya Singh",
    position: "Head - Sales",
    department: "Sales",
    keyResponsibility: "Domestic & International Sales",
  },
];

export default function COOPeopleOrganization({
  currentStep = 8,
  peopleData = {},
  draftMessage,
  onBack,
  onChange,
  onSaveProgress,
  onNext,
}) {
  const founderName = peopleData.founderName || "Roopali Chauhan";
  const founderPosition = peopleData.founderPosition || "Founder & CEO";
  const founderResponsibilities =
    peopleData.founderResponsibilities ||
    "Overall strategy, international business, key client relationships";

  const teamMembers = peopleData.teamMembers || defaultTeamMembers;
  const departments = peopleData.departments || [
    "Sales",
    "Business Development",
    "Finance",
    "Operations",
    "Procurement",
    "Production",
    "Quality",
    "Marketing",
  ];
  const keyDependencies = peopleData.keyDependencies || [
    "Sales",
    "Customer Relationships",
    "Approvals",
    "Strategy",
    "International Business",
  ];

  // Uploaded org file
  const [orgFileName, setOrgFileName] = useState(peopleData.orgFileName || "");

  // Modal for adding / editing team members
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [memberForm, setMemberForm] = useState({
    name: "",
    position: "",
    department: "Technology",
    keyResponsibility: "",
  });

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setOrgFileName(file.name);
      onChange("orgFileName", file.name);
    }
  };

  const toggleDepartment = (dept) => {
    const next = departments.includes(dept)
      ? departments.filter((d) => d !== dept)
      : [...departments, dept];
    onChange("departments", next);
  };

  const toggleKeyDependency = (dep) => {
    const next = keyDependencies.includes(dep)
      ? keyDependencies.filter((d) => d !== dep)
      : [...keyDependencies, dep];
    onChange("keyDependencies", next);
  };

  // Open modal for add
  const handleOpenAdd = () => {
    setEditingMember(null);
    setMemberForm({
      name: "",
      position: "",
      department: "Technology",
      keyResponsibility: "",
    });
    setIsModalOpen(true);
  };

  // Open modal for edit
  const handleOpenEdit = (member) => {
    setEditingMember(member);
    setMemberForm({
      name: member.name,
      position: member.position,
      department: member.department,
      keyResponsibility: member.keyResponsibility,
    });
    setIsModalOpen(true);
  };

  // Save member
  const handleSaveMember = () => {
    if (!memberForm.name.trim()) return;
    let nextList;
    if (editingMember) {
      nextList = teamMembers.map((m) =>
        m.id === editingMember.id ? { ...m, ...memberForm } : m
      );
    } else {
      nextList = [
        ...teamMembers,
        {
          id: Date.now(),
          ...memberForm,
        },
      ];
    }
    onChange("teamMembers", nextList);
    setIsModalOpen(false);
  };

  // Delete member
  const handleDeleteMember = (id) => {
    const nextList = teamMembers.filter((m) => m.id !== id);
    onChange("teamMembers", nextList);
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
            <span className="text-[#d69a2b] mr-2">7.</span> Who Runs Your Company?
          </h1>
          <p className="text-[16px] text-[#cbd5e1] mt-1.5 leading-relaxed m-0">
            Help your COO understand your organization, responsibilities and where AI can support your team.
          </p>
        </header>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.8fr)_minmax(320px,0.95fr)] gap-4 items-start">
          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-4 min-w-0">
            {/* CARD 1: 1. Organization Structure (Optional) */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                  <Network size={22} />
                </div>
                <div>
                  <h2 className="text-[21px] font-bold text-white leading-tight m-0">
                    1. Organization Structure <span className="text-[16px] font-normal text-[#94a3b8]">(Optional)</span>
                  </h2>
                  <p className="text-[16px] text-[#94a3b8] mt-0.5 m-0">
                    Upload your organization chart. I'll read it and extract departments, reporting structure and key roles for you.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.4fr] gap-4 items-stretch">
                {/* Left: Drag & Drop Upload Zone */}
                <label className="border-2 border-dashed border-[rgba(114,80,33,0.7)] hover:border-[#d69a2b] rounded-xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer bg-[#05121e]/70 transition-all text-center min-h-[170px]">
                  <UploadCloud size={30} className="text-[#d69a2b]" />
                  <div className="text-[16px] font-semibold text-white">
                    {orgFileName ? `Uploaded: ${orgFileName}` : "Click to upload or drag and drop file"}
                  </div>
                  <div className="text-[16px] text-[#94a3b8]">
                    PDF, PNG, JPG (Max 10 MB)
                  </div>
                  <input
                    type="file"
                    onChange={handleFileUpload}
                    className="hidden"
                    accept=".pdf,.png,.jpg,.jpeg"
                  />
                </label>

                {/* Right: Visual Org Chart Tree Preview */}
                <div className="bg-[#05121e]/90 border border-blue-900/40 rounded-xl p-3.5 flex flex-col items-center justify-center relative overflow-hidden min-h-[170px]">
                  {/* Top Node: CEO */}
                  <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-[#0e273e] border border-[#d69a2b]/60 shadow-md">
                    <img
                      src={founderImage}
                      alt="Roopali Chauhan"
                      className="w-7 h-7 rounded-full object-cover border border-[#d69a2b]"
                    />
                    <div className="text-left">
                      <div className="text-[16px] text-[#d69a2b] font-semibold uppercase tracking-wider leading-none">CEO</div>
                      <div className="text-[16px] font-bold text-white leading-tight">Roopali Chauhan</div>
                    </div>
                  </div>

                  {/* Vertical connecting line */}
                  <div className="w-[1.5px] h-3 bg-[#d69a2b]/50 my-1"></div>

                  {/* Horizontal distribution branch */}
                  <div className="w-[85%] h-[1.5px] bg-[#d69a2b]/40 relative">
                    {/* Tick markers */}
                    <div className="absolute left-[10%] -top-1 w-2 h-2 rounded-full bg-[#d69a2b]"></div>
                    <div className="absolute left-[37%] -top-1 w-2 h-2 rounded-full bg-[#d69a2b]"></div>
                    <div className="absolute left-[64%] -top-1 w-2 h-2 rounded-full bg-[#d69a2b]"></div>
                    <div className="absolute left-[90%] -top-1 w-2 h-2 rounded-full bg-[#d69a2b]"></div>
                  </div>

                  {/* Primary Departments Row */}
                  <div className="grid grid-cols-4 gap-2 w-full mt-2.5 text-center">
                    <div className="bg-[#081827] border border-blue-800/60 rounded px-1.5 py-1 text-[16px] text-gray-200 flex flex-col items-center">
                      <ShoppingBag size={14} className="text-[#f0c168] mb-0.5" />
                      <span>Sales</span>
                    </div>
                    <div className="bg-[#081827] border border-blue-800/60 rounded px-1.5 py-1 text-[16px] text-gray-200 flex flex-col items-center">
                      <Factory size={14} className="text-[#f0c168] mb-0.5" />
                      <span>Operations</span>
                    </div>
                    <div className="bg-[#081827] border border-blue-800/60 rounded px-1.5 py-1 text-[16px] text-gray-200 flex flex-col items-center">
                      <Coins size={14} className="text-[#f0c168] mb-0.5" />
                      <span>Finance</span>
                    </div>
                    <div className="bg-[#081827] border border-blue-800/60 rounded px-1.5 py-1 text-[16px] text-gray-200 flex flex-col items-center">
                      <Megaphone size={14} className="text-[#f0c168] mb-0.5" />
                      <span>Marketing</span>
                    </div>
                  </div>

                  {/* Secondary Sub-departments Row */}
                  <div className="grid grid-cols-4 gap-2 w-full mt-2 text-center">
                    <div className="bg-[#05121e] border border-slate-700/60 rounded px-1.5 py-0.5 text-[16px] text-gray-300">
                      Procurement
                    </div>
                    <div className="bg-[#05121e] border border-slate-700/60 rounded px-1.5 py-0.5 text-[16px] text-gray-300">
                      Production
                    </div>
                    <div className="bg-[#05121e] border border-slate-700/60 rounded px-1.5 py-0.5 text-[16px] text-gray-300">
                      HR
                    </div>
                    <div className="bg-[#05121e] border border-slate-700/60 rounded px-1.5 py-0.5 text-[16px] text-gray-300">
                      IT
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CARD 2: 2. Founder / Leadership */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                  <User size={22} />
                </div>
                <div>
                  <h2 className="text-[21px] font-bold text-white leading-tight m-0">
                    2. Founder / Leadership
                  </h2>
                  <p className="text-[16px] text-[#94a3b8] mt-0.5 m-0">
                    Share details about the founder or key leadership.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.1fr_1.6fr] gap-3.5 items-start">
                {/* Name */}
                <div>
                  <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1.5">
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={founderName}
                    onChange={(e) => onChange("founderName", e.target.value)}
                    placeholder="Enter full name"
                    className="w-full min-h-[46px] px-3.5 py-2 bg-[#05121e]/85 border border-[rgba(114,80,33,0.72)] rounded-lg text-white text-[16px] outline-none focus:border-[#d69a2b]"
                  />
                </div>

                {/* Position */}
                <div>
                  <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1.5">
                    Position <span className="text-red-400">*</span>
                  </label>
                  <div className="relative flex items-center">
                    <select
                      value={founderPosition}
                      onChange={(e) => onChange("founderPosition", e.target.value)}
                      className="w-full min-h-[46px] px-3.5 pr-8 py-2 bg-[#05121e]/85 border border-[rgba(114,80,33,0.72)] rounded-lg text-white text-[16px] outline-none appearance-none cursor-pointer focus:border-[#d69a2b]"
                    >
                      {positionOptions.map((pos) => (
                        <option key={pos} value={pos} className="bg-[#071b2d]">
                          {pos}
                        </option>
                      ))}
                    </select>
                    <ChevronDown size={17} className="absolute right-3 text-[#d69a2b] pointer-events-none" />
                  </div>
                </div>

                {/* Primary Responsibilities */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-[16px] font-semibold text-[#f1f5f9]">
                      Primary Responsibilities <span className="text-red-400">*</span>
                    </label>
                    <span className="text-[16px] text-[#94a3b8]">{founderResponsibilities.length}/300</span>
                  </div>
                  <textarea
                    rows={2}
                    maxLength={300}
                    value={founderResponsibilities}
                    onChange={(e) => onChange("founderResponsibilities", e.target.value)}
                    placeholder="e.g. Overall strategy, international business, key client relationships"
                    className="w-full min-h-[46px] px-3.5 py-2 bg-[#05121e]/85 border border-[rgba(114,80,33,0.72)] rounded-lg text-white text-[16px] leading-snug outline-none resize-none focus:border-[#d69a2b]"
                  />
                </div>
              </div>
            </section>

            {/* CARD 3: 3. Key Management Team (Optional) */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg">
              <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                    <Users size={22} />
                  </div>
                  <div>
                    <h2 className="text-[21px] font-bold text-white leading-tight m-0">
                      3. Key Management Team <span className="text-[16px] font-normal text-[#94a3b8]">(Optional)</span>
                    </h2>
                    <p className="text-[16px] text-[#94a3b8] mt-0.5 m-0">
                      Add details about your key management team members.
                    </p>
                  </div>
                </div>

                {/* Add Team Member button */}
                <button
                  type="button"
                  onClick={handleOpenAdd}
                  className="px-4 py-2 rounded-lg bg-[rgba(214,154,43,0.15)] hover:bg-[rgba(214,154,43,0.25)] border border-[#d69a2b] text-[#f0c168] text-[16px] font-semibold flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Plus size={16} /> Add Team Member
                </button>
              </div>

              {/* Table of Team Members */}
              <div className="overflow-x-auto rounded-lg border border-[rgba(114,80,33,0.5)] bg-[#04101b]/80">
                <table className="w-full text-left border-collapse text-[16px]">
                  <thead>
                    <tr className="border-b border-[rgba(114,80,33,0.5)] bg-[#081b2e]/90 text-[#d69a2b] font-semibold text-[16px]">
                      <th className="py-2.5 px-3 w-[45px] text-center">#</th>
                      <th className="py-2.5 px-3">Name</th>
                      <th className="py-2.5 px-3">Position</th>
                      <th className="py-2.5 px-3">Department</th>
                      <th className="py-2.5 px-3">Key Responsibility</th>
                      <th className="py-2.5 px-3 w-[90px] text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamMembers.map((member, idx) => (
                      <tr
                        key={member.id}
                        className="border-b border-gray-800/60 hover:bg-[#0c243a]/50 text-gray-200 transition-colors"
                      >
                        <td className="py-2.5 px-3 text-center text-[#94a3b8]">{idx + 1}</td>
                        <td className="py-2.5 px-3 font-medium text-white">{member.name}</td>
                        <td className="py-2.5 px-3 text-gray-300">{member.position}</td>
                        <td className="py-2.5 px-3 text-gray-300">{member.department}</td>
                        <td className="py-2.5 px-3 text-gray-400">{member.keyResponsibility}</td>
                        <td className="py-2.5 px-3 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <button
                              type="button"
                              onClick={() => handleOpenEdit(member)}
                              className="text-gray-400 hover:text-[#d69a2b] cursor-pointer"
                              title="Edit member"
                            >
                              <Pencil size={15} />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleDeleteMember(member.id)}
                              className="text-gray-400 hover:text-red-400 cursor-pointer"
                              title="Delete member"
                            >
                              <Trash2 size={15} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                    {teamMembers.length === 0 && (
                      <tr>
                        <td colSpan={6} className="py-6 text-center text-gray-400">
                          No team members added yet. Click "+ Add Team Member" to add one.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </section>

            {/* CARD 4: 4. Departments */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                  <Building2 size={22} />
                </div>
                <div>
                  <h2 className="text-[21px] font-bold text-white leading-tight m-0">
                    4. Departments
                  </h2>
                  <p className="text-[16px] text-[#94a3b8] mt-0.5 m-0">
                    Select all departments that currently exist in your organization.
                  </p>
                </div>
              </div>

              {/* 5-Column Checkbox Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                {allDepartmentOptions.map((dept) => {
                  const isChecked = departments.includes(dept);
                  return (
                    <label
                      key={dept}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition-all ${
                        isChecked
                          ? "border-[#d69a2b] bg-[rgba(214,154,43,0.18)] text-white shadow-[0_0_8px_rgba(214,154,43,0.12)]"
                          : "border-[rgba(114,80,33,0.7)] bg-[#061523]/85 text-[#e2e8f0] hover:border-[#d69a2b]/70"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleDepartment(dept)}
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
                      <span className="text-[16px] font-medium leading-tight truncate">{dept}</span>
                    </label>
                  );
                })}
              </div>
            </section>

            {/* CARD 5: 5. Key-Person Dependency */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                  <Key size={22} />
                </div>
                <div>
                  <h2 className="text-[21px] font-bold text-white leading-tight m-0">
                    5. Key-Person Dependency
                  </h2>
                  <p className="text-[16px] text-[#94a3b8] mt-0.5 m-0">
                    Which responsibilities currently depend heavily on you or a small number of people? (Select all that apply)
                  </p>
                </div>
              </div>

              {/* 5-Column Checkbox Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                {keyDependencyOptions.map((item) => {
                  const isChecked = keyDependencies.includes(item);
                  return (
                    <label
                      key={item}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition-all ${
                        isChecked
                          ? "border-[#d69a2b] bg-[rgba(214,154,43,0.18)] text-white shadow-[0_0_8px_rgba(214,154,43,0.12)]"
                          : "border-[rgba(114,80,33,0.7)] bg-[#061523]/85 text-[#e2e8f0] hover:border-[#d69a2b]/70"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleKeyDependency(item)}
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
                      <span className="text-[16px] font-medium leading-tight truncate">{item}</span>
                    </label>
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
                  Understanding who does what helps me identify where your AI workforce can support your team without replacing the decisions that should remain with your people.
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

            {/* Organization Insights Card */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4.5 shadow-lg">
              <div className="flex items-center gap-2 mb-3.5">
                <Lightbulb size={20} className="text-[#f5b738]" />
                <h3 className="text-[18px] font-bold text-white m-0">Organization Insights</h3>
              </div>

              {/* 2x2 Grid of Metrics */}
              <div className="grid grid-cols-2 gap-2.5">
                {/* 1. Departments */}
                <div className="bg-[#05121e]/85 border border-[rgba(214,154,43,0.25)] rounded-lg p-2.5 flex items-start gap-2.5">
                  <Network size={22} className="text-[#f5b738] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[20px] font-bold text-white leading-tight">
                      {departments.length}
                    </div>
                    <div className="text-[16px] text-[#94a3b8] mt-0.5">Departments</div>
                  </div>
                </div>

                {/* 2. Key Team Members */}
                <div className="bg-[#05121e]/85 border border-[rgba(214,154,43,0.25)] rounded-lg p-2.5 flex items-start gap-2.5">
                  <Users size={22} className="text-[#f5b738] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[20px] font-bold text-white leading-tight">
                      {teamMembers.length}
                    </div>
                    <div className="text-[16px] text-[#94a3b8] mt-0.5">Key Team Members</div>
                  </div>
                </div>

                {/* 3. Reporting Structure */}
                <div className="bg-[#05121e]/85 border border-[rgba(214,154,43,0.25)] rounded-lg p-2.5 flex items-start gap-2.5">
                  <FolderTree size={22} className="text-[#f5b738] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[18px] font-bold text-white leading-tight">Clear</div>
                    <div className="text-[16px] text-[#94a3b8] mt-0.5">Reporting Structure</div>
                  </div>
                </div>

                {/* 4. AI Support */}
                <div className="bg-[#05121e]/85 border border-[rgba(214,154,43,0.25)] rounded-lg p-2.5 flex items-start gap-2.5">
                  <Brain size={22} className="text-[#f5b738] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-[18px] font-bold text-white leading-tight">AI Support</div>
                    <div className="text-[16px] text-[#94a3b8] mt-0.5">Opportunities</div>
                  </div>
                </div>
              </div>
            </section>

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
                  <span>Helps me understand your team structure and decision-making process.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Identifies where AI can best support your people and reduce workload.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Ensures smooth collaboration between your team and AI workforce.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Helps me respect the roles and approvals that should remain with your people.</span>
                </li>
              </ul>
            </section>

            {/* Quick Tips Card */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4.5 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <Building2 size={20} className="text-[#f5b738]" />
                <h3 className="text-[18px] font-bold text-white m-0">Quick Tips</h3>
              </div>
              <ul className="flex flex-col gap-2.5 p-0 m-0 list-none">
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Upload your organization chart (if available).</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Include only key management team members.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Select all departments that apply.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Be honest about key-person dependency.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>You can update this information anytime.</span>
                </li>
              </ul>
            </section>
          </aside>
        </div>

        {/* Modal for Add / Edit Team Member */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
            <div className="bg-[#071b2d] border border-[#d69a2b] rounded-xl p-5 max-w-lg w-full shadow-2xl">
              <div className="flex items-center justify-between mb-4 border-b border-gray-700/60 pb-2.5">
                <h3 className="text-[20px] font-bold text-white m-0">
                  {editingMember ? "Edit Team Member" : "Add Team Member"}
                </h3>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-3">
                <div>
                  <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1">Name</label>
                  <input
                    type="text"
                    value={memberForm.name}
                    onChange={(e) => setMemberForm({ ...memberForm, name: e.target.value })}
                    placeholder="e.g. Amit Sharma"
                    className="w-full min-h-[44px] px-3 bg-[#031120] border border-gray-700 rounded-lg text-white text-[16px] outline-none focus:border-[#d69a2b]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1">Position</label>
                    <input
                      type="text"
                      value={memberForm.position}
                      onChange={(e) => setMemberForm({ ...memberForm, position: e.target.value })}
                      placeholder="e.g. CTO"
                      className="w-full min-h-[44px] px-3 bg-[#031120] border border-gray-700 rounded-lg text-white text-[16px] outline-none focus:border-[#d69a2b]"
                    />
                  </div>

                  <div>
                    <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1">Department</label>
                    <input
                      type="text"
                      value={memberForm.department}
                      onChange={(e) => setMemberForm({ ...memberForm, department: e.target.value })}
                      placeholder="e.g. Technology"
                      className="w-full min-h-[44px] px-3 bg-[#031120] border border-gray-700 rounded-lg text-white text-[16px] outline-none focus:border-[#d69a2b]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1">Key Responsibility</label>
                  <input
                    type="text"
                    value={memberForm.keyResponsibility}
                    onChange={(e) => setMemberForm({ ...memberForm, keyResponsibility: e.target.value })}
                    placeholder="e.g. Product development, IT infra"
                    className="w-full min-h-[44px] px-3 bg-[#031120] border border-gray-700 rounded-lg text-white text-[16px] outline-none focus:border-[#d69a2b]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-2.5 mt-5">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-gray-600 text-gray-300 text-[16px] cursor-pointer hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveMember}
                  className="px-5 py-2 rounded-lg bg-[#d69a2b] text-[#031120] font-semibold text-[16px] cursor-pointer hover:bg-[#e0aa48]"
                >
                  {editingMember ? "Update" : "Add Member"}
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
            Next: Company Knowledge &amp; Processes <ArrowRight size={18} />
          </button>
        </footer>
      </div>
    </>
  );
}
