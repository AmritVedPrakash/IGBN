import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Boxes,
  Check,
  ChevronDown,
  Factory,
  FileCheck,
  Lightbulb,
  Lock,
  Network,
  Package,
  Save,
  ShieldCheck,
  Ship,
  ShoppingBag,
  Truck,
  Warehouse,
  X,
} from "lucide-react";
import aiAgentImage from "../../../../assets/igbndivision/aiagent.png";
import industryFoodImage from "../../../../assets/factory-tours/industry-food-beverages.jpg";
import industryEngineeringImage from "../../../../assets/factory-tours/industry-engineering.jpg";
import factoryEnquiryImage from "../../../../assets/factory-tours/factory-tours-enquiry.jpg";

const popularLocations = [
  "Delhi, India",
  "Jaipur, India",
  "Mumbai, India",
  "Bengaluru, India",
  "Ahmedabad, India",
  "Pune, India",
  "Chennai, India",
  "Kolkata, India",
];

const productCategoriesOptions = [
  "Healthy Snacks",
  "Bakery Products",
  "Organic Spices",
  "Beverages",
  "Ready to Eat",
  "Grains & Cereals",
  "Confectionery",
];

const procurementCategoriesOptions = [
  "Raw Materials",
  "Packaging",
  "Ingredients",
  "Equipment Spares",
  "Chemicals",
  "Labels & Corrugation",
];

const poSystemOptions = [
  "ERP System",
  "Manual PO",
  "Accounting Software",
  "Dedicated Procurement Tool",
  "Spreadsheet / Excel",
];

const procurementFrequencyOptions = [
  "Weekly",
  "Bi-weekly",
  "Monthly",
  "Quarterly",
  "On Demand",
];

const paymentTermsOptions = [
  "Net 30",
  "100% Advance",
  "30% Advance, 70% against BL",
  "Net 15",
  "Net 45",
  "Net 60",
  "LC",
];

const approvalProcessOptions = [
  "Management + Finance Team",
  "Department Head Approval",
  "Founder Approval Only",
  "Automated (< ₹50k), Management (> ₹50k)",
];

const inventoryCategoriesOptions = [
  "Finished Goods",
  "Raw Materials",
  "Packaging",
  "Work in Progress (WIP)",
  "MRO Goods",
];

const inventorySystemOptions = [
  "Zoho Inventory",
  "SAP",
  "Tally",
  "Custom ERP",
  "Excel / Spreadsheet",
  "None",
];

const stockLevelOptions = [
  "Less than 15 days",
  "15 – 30 days",
  "1 – 2 months",
  "2 – 3 months",
  "3+ months",
];

const reorderProcessOptions = [
  "Automatic (Based on Stock Level)",
  "Manual Monthly Review",
  "Scheduled Reorders",
  "On Order Arrival",
];

const logisticsModelOptions = [
  "3PL",
  "Freight Forwarder",
  "Shipping Carrier",
  "Courier Services",
  "Distributor Logistics",
  "Other",
];

const exportDocOptions = [
  "Internal Team",
  "External Agent",
  "Custom Broker (CHA)",
  "Other",
];

const certificationsOptions = [
  "FSSAI",
  "ISO 22000",
  "HACCP",
  "GMP",
  "BRC",
  "FDA",
  "Halal",
  "Kosher",
  "Organic India",
];

function ChipsInput({
  items = [],
  onRemove,
  onAdd,
  placeholder = "Add or select...",
  options = [],
  label,
  required = false,
}) {
  const [inputValue, setInputValue] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const handleAdd = (val) => {
    const toAdd = (val ?? inputValue).trim();
    if (!toAdd) return;
    if (!items.some((item) => item.toLowerCase() === toAdd.toLowerCase())) {
      onAdd(toAdd);
    }
    setInputValue("");
    setShowDropdown(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  const availableOptions = options.filter(
    (opt) =>
      !items.some((item) => item.toLowerCase() === opt.toLowerCase()) &&
      opt.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="relative flex flex-col w-full">
      {label && (
        <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1.5">
          {label} {required && <span className="text-red-400 font-bold">*</span>}
        </label>
      )}
      <div
        className="flex items-center justify-between min-h-[46px] px-3 py-1.5 bg-[#05121e]/85 border border-[rgba(114,80,33,0.72)] rounded-lg cursor-text transition-all focus-within:border-[#d69a2b] focus-within:ring-1 focus-within:ring-[#d69a2b]"
        onClick={() => setShowDropdown(true)}
      >
        <div className="flex flex-wrap items-center gap-1.5 flex-1">
          {items.map((item) => (
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#0e273e]/90 border border-[rgba(80,120,160,0.45)] text-white text-[16px] leading-tight"
              key={item}
            >
              <span>{item}</span>
              <button
                type="button"
                className="grid place-items-center text-gray-400 hover:text-red-400 cursor-pointer p-0 border-0 bg-transparent"
                aria-label={`Remove ${item}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onRemove(item);
                }}
              >
                <X size={13} />
              </button>
            </span>
          ))}
          <input
            type="text"
            className="flex-1 min-w-[100px] border-0 bg-transparent text-white text-[16px] outline-none py-1 placeholder:text-[#7d8f9f]"
            value={inputValue}
            placeholder={items.length === 0 ? placeholder : ""}
            onChange={(e) => {
              setInputValue(e.target.value);
              setShowDropdown(true);
            }}
            onKeyDown={handleKeyDown}
            onFocus={() => setShowDropdown(true)}
          />
        </div>
        <button
          type="button"
          className="p-1 border-0 bg-transparent text-[#d69a2b] cursor-pointer"
          aria-label="Toggle options"
          onClick={(e) => {
            e.stopPropagation();
            setShowDropdown(!showDropdown);
          }}
        >
          <ChevronDown size={17} />
        </button>
      </div>

      {showDropdown && availableOptions.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 max-h-[220px] overflow-y-auto rounded-lg border border-[#d69a2b] bg-[#071b2d] shadow-2xl">
          {availableOptions.slice(0, 8).map((option) => (
            <button
              type="button"
              key={option}
              className="block w-full px-3.5 py-2 border-0 bg-transparent text-left text-[16px] text-[#e2e8f0] hover:bg-[rgba(214,154,43,0.22)] hover:text-white cursor-pointer"
              onClick={() => handleAdd(option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function COOOperationsSupplyChain({
  currentStep = 7,
  operationsData = {},
  draftMessage,
  onBack,
  onChange,
  onSaveProgress,
  onNext,
}) {
  // 1. Manufacturing state
  const doYouManufacture = operationsData.doYouManufacture !== false; // default true
  const manufacturingLocations = operationsData.manufacturingLocations || [
    "Delhi, India",
    "Jaipur, India",
  ];
  const leadTime = operationsData.leadTime || "15";
  const leadTimeUnit = operationsData.leadTimeUnit || "Days";
  const majorProductCategories = operationsData.majorProductCategories || [
    "Healthy Snacks",
    "Bakery Products",
  ];
  const capacityUtilization = operationsData.capacityUtilization || "70";
  const productionCapacity = operationsData.productionCapacity || "50,000";
  const productionCapacityUnit = operationsData.productionCapacityUnit || "Units/month";

  // 2. Procurement state
  const majorProcurementCategories = operationsData.majorProcurementCategories || [
    "Raw Materials",
    "Packaging",
    "Ingredients",
  ];
  const poSystem = operationsData.poSystem || "ERP System";
  const procurementFrequency = operationsData.procurementFrequency || "Monthly";
  const procurementPaymentTerms = operationsData.procurementPaymentTerms || "Net 30";
  const purchaseApprovalProcess =
    operationsData.purchaseApprovalProcess || "Management + Finance Team";

  // 3. Inventory state
  const doYouMaintainInventory = operationsData.doYouMaintainInventory !== false; // default true
  const inventoryCategories = operationsData.inventoryCategories || [
    "Finished Goods",
    "Raw Materials",
    "Packaging",
  ];
  const warehouseLocations = operationsData.warehouseLocations || [
    "Delhi",
    "Mumbai",
    "Jaipur",
  ];
  const inventorySystem = operationsData.inventorySystem || "Zoho Inventory";
  const stockLevel = operationsData.stockLevel || "1 – 2 months";
  const reorderProcess =
    operationsData.reorderProcess || "Automatic (Based on Stock Level)";

  // 4. Logistics & Shipping state
  const logisticsModels = operationsData.logisticsModels || ["3PL", "Freight Forwarder"];
  const exportDocumentation = operationsData.exportDocumentation || ["External Agent"];

  // 5. Quality state
  const qualityProcess =
    operationsData.qualityProcess ||
    "Multiple quality checks at raw material, production and final packaging.";
  const certifications = operationsData.certifications || [
    "FSSAI",
    "ISO 22000",
    "HACCP",
  ];

  // Array item toggles
  const addArrayItem = (field, item) => {
    const current = operationsData[field] || [];
    if (!current.includes(item)) {
      onChange(field, [...current, item]);
    }
  };

  const removeArrayItem = (field, item) => {
    const current = operationsData[field] || [];
    onChange(
      field,
      current.filter((val) => val !== item)
    );
  };

  const toggleCheckboxItem = (field, item) => {
    const current = operationsData[field] || [];
    const next = current.includes(item)
      ? current.filter((x) => x !== item)
      : [...current, item];
    onChange(field, next);
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
            <span className="text-[#d69a2b] mr-2">6.</span> How Does Your Company Actually Work?
          </h1>
          <p className="text-[16px] text-[#cbd5e1] mt-1.5 leading-relaxed m-0">
            Help your COO understand how your products or services are created, purchased, stored and delivered.
          </p>
        </header>

        {/* 2-Column Main Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1.8fr)_minmax(320px,0.95fr)] gap-4 items-start">
          {/* LEFT COLUMN: Operational Form Cards */}
          <div className="flex flex-col gap-4 min-w-0">
            {/* CARD 1: 1. Manufacturing */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg">
              <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                    <Factory size={22} />
                  </div>
                  <div>
                    <h2 className="text-[21px] font-bold text-white leading-tight m-0">
                      1. Manufacturing
                    </h2>
                    <p className="text-[16px] text-[#94a3b8] mt-0.5 m-0">
                      Tell me about your manufacturing operations.
                    </p>
                  </div>
                </div>

                {/* Do you manufacture? toggle */}
                <div className="flex items-center gap-2">
                  <span className="text-[16px] text-[#cbd5e1]">Do you manufacture? *</span>
                  <div className="inline-flex rounded-lg border border-[rgba(114,80,33,0.7)] p-0.5 bg-[#05121e]">
                    <button
                      type="button"
                      onClick={() => onChange("doYouManufacture", true)}
                      className={`px-3 py-1 rounded-md text-[16px] font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                        doYouManufacture
                          ? "bg-[#d69a2b] text-[#041220] font-semibold"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {doYouManufacture && <Check size={14} strokeWidth={3} />}
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => onChange("doYouManufacture", false)}
                      className={`px-3 py-1 rounded-md text-[16px] font-medium transition-all cursor-pointer ${
                        !doYouManufacture
                          ? "bg-[#d69a2b] text-[#041220] font-semibold"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>

              {doYouManufacture && (
                <div className="grid grid-cols-1 md:grid-cols-[200px_minmax(0,1fr)] gap-4 items-stretch">
                  {/* Left Manufacturing Facility Image */}
                  <div className="hidden md:block rounded-lg overflow-hidden border border-blue-900/60 shadow-md h-full min-h-[190px]">
                    <img
                      src={industryFoodImage}
                      alt="Manufacturing unit conveyor line"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  {/* Right Form Fields */}
                  <div className="flex flex-col gap-3 min-w-0">
                    {/* Row 1: Manufacturing Locations & Production Lead Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-[1.4fr_1fr] gap-3">
                      <ChipsInput
                        label="Manufacturing Locations"
                        required
                        items={manufacturingLocations}
                        options={popularLocations}
                        onAdd={(loc) => addArrayItem("manufacturingLocations", loc)}
                        onRemove={(loc) => removeArrayItem("manufacturingLocations", loc)}
                        placeholder="Add city, country..."
                      />

                      <div>
                        <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1.5">
                          Typical Production Lead Time <span className="text-red-400">*</span>
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={leadTime}
                            onChange={(e) => onChange("leadTime", e.target.value)}
                            placeholder="15"
                            className="w-full min-h-[46px] px-3 py-2 bg-[#05121e]/85 border border-[rgba(114,80,33,0.72)] rounded-lg text-white text-[16px] outline-none focus:border-[#d69a2b]"
                          />
                          <div className="relative min-w-[95px] flex items-center">
                            <select
                              value={leadTimeUnit}
                              onChange={(e) => onChange("leadTimeUnit", e.target.value)}
                              className="w-full min-h-[46px] px-2.5 pr-6 py-2 bg-[#05121e]/85 border border-[rgba(114,80,33,0.72)] rounded-lg text-white text-[16px] outline-none appearance-none cursor-pointer focus:border-[#d69a2b]"
                            >
                              <option value="Days" className="bg-[#071b2d]">Days</option>
                              <option value="Weeks" className="bg-[#071b2d]">Weeks</option>
                              <option value="Months" className="bg-[#071b2d]">Months</option>
                            </select>
                            <ChevronDown size={16} className="absolute right-2 text-[#d69a2b] pointer-events-none" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Major Product Categories & Capacity Utilization */}
                    <div className="grid grid-cols-1 sm:grid-cols-[1.4fr_1fr] gap-3">
                      <ChipsInput
                        label="Major Product Categories"
                        required
                        items={majorProductCategories}
                        options={productCategoriesOptions}
                        onAdd={(cat) => addArrayItem("majorProductCategories", cat)}
                        onRemove={(cat) => removeArrayItem("majorProductCategories", cat)}
                        placeholder="e.g. Healthy Snacks..."
                      />

                      <div>
                        <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1.5">
                          Capacity Utilization (Optional)
                        </label>
                        <div className="relative flex items-center">
                          <input
                            type="text"
                            value={capacityUtilization}
                            onChange={(e) => onChange("capacityUtilization", e.target.value)}
                            placeholder="70"
                            className="w-full min-h-[46px] px-3 py-2 pr-8 bg-[#05121e]/85 border border-[rgba(114,80,33,0.72)] rounded-lg text-white text-[16px] outline-none focus:border-[#d69a2b]"
                          />
                          <span className="absolute right-3 text-[#94a3b8] font-bold text-[16px] pointer-events-none">
                            %
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Row 3: Production Capacity */}
                    <div>
                      <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1.5">
                        Production Capacity (e.g. 50,000 units/month) <span className="text-red-400">*</span>
                      </label>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={productionCapacity}
                          onChange={(e) => onChange("productionCapacity", e.target.value)}
                          placeholder="50,000"
                          className="flex-1 min-h-[46px] px-3 py-2 bg-[#05121e]/85 border border-[rgba(114,80,33,0.72)] rounded-lg text-white text-[16px] outline-none focus:border-[#d69a2b]"
                        />
                        <div className="relative min-w-[140px] flex items-center">
                          <select
                            value={productionCapacityUnit}
                            onChange={(e) => onChange("productionCapacityUnit", e.target.value)}
                            className="w-full min-h-[46px] px-3 pr-7 py-2 bg-[#05121e]/85 border border-[rgba(114,80,33,0.72)] rounded-lg text-white text-[16px] outline-none appearance-none cursor-pointer focus:border-[#d69a2b]"
                          >
                            <option value="Units/month" className="bg-[#071b2d]">Units/month</option>
                            <option value="Kg/month" className="bg-[#071b2d]">Kg/month</option>
                            <option value="Tonnes/month" className="bg-[#071b2d]">Tonnes/month</option>
                            <option value="Boxes/month" className="bg-[#071b2d]">Boxes/month</option>
                          </select>
                          <ChevronDown size={16} className="absolute right-2.5 text-[#d69a2b] pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* CARD 2: 2. Procurement */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                  <ShoppingBag size={22} />
                </div>
                <div>
                  <h2 className="text-[21px] font-bold text-white leading-tight m-0">
                    2. Procurement
                  </h2>
                  <p className="text-[16px] text-[#94a3b8] mt-0.5 m-0">
                    Tell me about your procurement process.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_190px] gap-4 items-stretch">
                {/* Left Form Controls */}
                <div className="flex flex-col gap-3 min-w-0">
                  {/* Row 1: Major Procurement Categories & PO System */}
                  <div className="grid grid-cols-1 sm:grid-cols-[1.3fr_1fr] gap-3">
                    <ChipsInput
                      label="Major Procurement Categories"
                      required
                      items={majorProcurementCategories}
                      options={procurementCategoriesOptions}
                      onAdd={(cat) => addArrayItem("majorProcurementCategories", cat)}
                      onRemove={(cat) => removeArrayItem("majorProcurementCategories", cat)}
                      placeholder="e.g. Raw Materials..."
                    />

                    <div>
                      <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1.5">
                        Purchase Order System
                      </label>
                      <div className="relative flex items-center">
                        <select
                          value={poSystem}
                          onChange={(e) => onChange("poSystem", e.target.value)}
                          className="w-full min-h-[46px] px-3 pr-8 py-2 bg-[#05121e]/85 border border-[rgba(114,80,33,0.72)] rounded-lg text-white text-[16px] outline-none appearance-none cursor-pointer focus:border-[#d69a2b]"
                        >
                          {poSystemOptions.map((sys) => (
                            <option key={sys} value={sys} className="bg-[#071b2d]">
                              {sys}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={17} className="absolute right-3 text-[#d69a2b] pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Row 2: Procurement Frequency & Typical Payment Terms */}
                  <div className="grid grid-cols-1 sm:grid-cols-[1.3fr_1fr] gap-3">
                    <div>
                      <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1.5">
                        Procurement Frequency <span className="text-red-400">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <select
                          value={procurementFrequency}
                          onChange={(e) => onChange("procurementFrequency", e.target.value)}
                          className="w-full min-h-[46px] px-3 pr-8 py-2 bg-[#05121e]/85 border border-[rgba(114,80,33,0.72)] rounded-lg text-white text-[16px] outline-none appearance-none cursor-pointer focus:border-[#d69a2b]"
                        >
                          {procurementFrequencyOptions.map((f) => (
                            <option key={f} value={f} className="bg-[#071b2d]">
                              {f}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={17} className="absolute right-3 text-[#d69a2b] pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1.5">
                        Typical Payment Terms <span className="text-red-400">*</span>
                      </label>
                      <div className="relative flex items-center">
                        <select
                          value={procurementPaymentTerms}
                          onChange={(e) => onChange("procurementPaymentTerms", e.target.value)}
                          className="w-full min-h-[46px] px-3 pr-8 py-2 bg-[#05121e]/85 border border-[rgba(114,80,33,0.72)] rounded-lg text-white text-[16px] outline-none appearance-none cursor-pointer focus:border-[#d69a2b]"
                        >
                          {paymentTermsOptions.map((term) => (
                            <option key={term} value={term} className="bg-[#071b2d]">
                              {term}
                            </option>
                          ))}
                        </select>
                        <ChevronDown size={17} className="absolute right-3 text-[#d69a2b] pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Row 3: Purchase Approval Process */}
                  <div>
                    <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1.5">
                      Purchase Approval Process <span className="text-red-400">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <select
                        value={purchaseApprovalProcess}
                        onChange={(e) => onChange("purchaseApprovalProcess", e.target.value)}
                        className="w-full min-h-[46px] px-3 pr-8 py-2 bg-[#05121e]/85 border border-[rgba(114,80,33,0.72)] rounded-lg text-white text-[16px] outline-none appearance-none cursor-pointer focus:border-[#d69a2b]"
                      >
                        {approvalProcessOptions.map((proc) => (
                          <option key={proc} value={proc} className="bg-[#071b2d]">
                            {proc}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={17} className="absolute right-3 text-[#d69a2b] pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Right Procurement Image */}
                <div className="hidden md:block rounded-lg overflow-hidden border border-blue-900/60 shadow-md h-full min-h-[190px]">
                  <img
                    src={factoryEnquiryImage}
                    alt="Procured agricultural sacks and raw material inventory"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </section>

            {/* CARD 3: 3. Inventory */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg">
              <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                    <Boxes size={22} />
                  </div>
                  <div>
                    <h2 className="text-[21px] font-bold text-white leading-tight m-0">
                      3. Inventory
                    </h2>
                    <p className="text-[16px] text-[#94a3b8] mt-0.5 m-0">
                      Tell me about your inventory management.
                    </p>
                  </div>
                </div>

                {/* Do you maintain inventory? toggle */}
                <div className="flex items-center gap-2">
                  <span className="text-[16px] text-[#cbd5e1]">Do you maintain inventory? *</span>
                  <div className="inline-flex rounded-lg border border-[rgba(114,80,33,0.7)] p-0.5 bg-[#05121e]">
                    <button
                      type="button"
                      onClick={() => onChange("doYouMaintainInventory", true)}
                      className={`px-3 py-1 rounded-md text-[16px] font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                        doYouMaintainInventory
                          ? "bg-[#d69a2b] text-[#041220] font-semibold"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {doYouMaintainInventory && <Check size={14} strokeWidth={3} />}
                      Yes
                    </button>
                    <button
                      type="button"
                      onClick={() => onChange("doYouMaintainInventory", false)}
                      className={`px-3 py-1 rounded-md text-[16px] font-medium transition-all cursor-pointer ${
                        !doYouMaintainInventory
                          ? "bg-[#d69a2b] text-[#041220] font-semibold"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>
              </div>

              {doYouMaintainInventory && (
                <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_170px] gap-4 items-stretch">
                  <div className="flex flex-col gap-3 min-w-0">
                    {/* Row 1: Inventory Categories & Warehouse Locations */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <ChipsInput
                        label="Inventory Categories"
                        required
                        items={inventoryCategories}
                        options={inventoryCategoriesOptions}
                        onAdd={(c) => addArrayItem("inventoryCategories", c)}
                        onRemove={(c) => removeArrayItem("inventoryCategories", c)}
                        placeholder="e.g. Finished Goods..."
                      />

                      <ChipsInput
                        label="Warehouse Locations"
                        required
                        items={warehouseLocations}
                        options={["Delhi", "Mumbai", "Jaipur", "Kolkata", "Bengaluru", "Chennai"]}
                        onAdd={(w) => addArrayItem("warehouseLocations", w)}
                        onRemove={(w) => removeArrayItem("warehouseLocations", w)}
                        placeholder="e.g. Delhi, Mumbai..."
                      />
                    </div>

                    {/* Row 2: Management System, Typical Stock Level, Reorder Process */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1.5">
                          Inventory Management System
                        </label>
                        <div className="relative flex items-center">
                          <select
                            value={inventorySystem}
                            onChange={(e) => onChange("inventorySystem", e.target.value)}
                            className="w-full min-h-[46px] px-3 pr-8 py-2 bg-[#05121e]/85 border border-[rgba(114,80,33,0.72)] rounded-lg text-white text-[16px] outline-none appearance-none cursor-pointer focus:border-[#d69a2b]"
                          >
                            {inventorySystemOptions.map((s) => (
                              <option key={s} value={s} className="bg-[#071b2d]">
                                {s}
                              </option>
                            ))}
                          </select>
                          <ChevronDown size={17} className="absolute right-3 text-[#d69a2b] pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1.5">
                          Typical Stock Level (e.g. 1 month)
                        </label>
                        <div className="relative flex items-center">
                          <select
                            value={stockLevel}
                            onChange={(e) => onChange("stockLevel", e.target.value)}
                            className="w-full min-h-[46px] px-3 pr-8 py-2 bg-[#05121e]/85 border border-[rgba(114,80,33,0.72)] rounded-lg text-white text-[16px] outline-none appearance-none cursor-pointer focus:border-[#d69a2b]"
                          >
                            {stockLevelOptions.map((sl) => (
                              <option key={sl} value={sl} className="bg-[#071b2d]">
                                {sl}
                              </option>
                            ))}
                          </select>
                          <ChevronDown size={17} className="absolute right-3 text-[#d69a2b] pointer-events-none" />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1.5">
                          Reorder Process
                        </label>
                        <div className="relative flex items-center">
                          <select
                            value={reorderProcess}
                            onChange={(e) => onChange("reorderProcess", e.target.value)}
                            className="w-full min-h-[46px] px-3 pr-8 py-2 bg-[#05121e]/85 border border-[rgba(114,80,33,0.72)] rounded-lg text-white text-[16px] outline-none appearance-none cursor-pointer focus:border-[#d69a2b]"
                          >
                            {reorderProcessOptions.map((r) => (
                              <option key={r} value={r} className="bg-[#071b2d]">
                                {r}
                              </option>
                            ))}
                          </select>
                          <ChevronDown size={17} className="absolute right-3 text-[#d69a2b] pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Warehouse Racks Image */}
                  <div className="hidden md:block rounded-lg overflow-hidden border border-blue-900/60 shadow-md h-full min-h-[160px]">
                    <img
                      src={industryEngineeringImage}
                      alt="Warehouse high racks and inventory pallets"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              )}
            </section>

            {/* CARD 4: 4. Logistics & Shipping */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                  <Truck size={22} />
                </div>
                <div>
                  <h2 className="text-[21px] font-bold text-white leading-tight m-0">
                    4. Logistics &amp; Shipping
                  </h2>
                  <p className="text-[16px] text-[#94a3b8] mt-0.5 m-0">
                    Tell me about your logistics and shipping process.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Logistics Model */}
                <div>
                  <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-2">
                    Logistics Model <span className="text-red-400">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {logisticsModelOptions.map((m) => {
                      const isChecked = logisticsModels.includes(m);
                      return (
                        <label
                          key={m}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition-all ${
                            isChecked
                              ? "border-[#d69a2b] bg-[rgba(214,154,43,0.18)] text-white shadow-[0_0_8px_rgba(214,154,43,0.12)]"
                              : "border-[rgba(114,80,33,0.7)] bg-[#061523]/85 text-[#e2e8f0] hover:border-[#d69a2b]/70"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleCheckboxItem("logisticsModels", m)}
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
                          <span className="text-[16px] font-medium leading-tight">{m}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Export Documentation */}
                <div>
                  <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-2">
                    Export Documentation (if applicable)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {exportDocOptions.map((d) => {
                      const isChecked = exportDocumentation.includes(d);
                      return (
                        <label
                          key={d}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition-all ${
                            isChecked
                              ? "border-[#d69a2b] bg-[rgba(214,154,43,0.18)] text-white shadow-[0_0_8px_rgba(214,154,43,0.12)]"
                              : "border-[rgba(114,80,33,0.7)] bg-[#061523]/85 text-[#e2e8f0] hover:border-[#d69a2b]/70"
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleCheckboxItem("exportDocumentation", d)}
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
                          <span className="text-[16px] font-medium leading-tight">{d}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>

            {/* CARD 5: 5. Quality */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-5 shadow-lg">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0">
                  <Award size={22} />
                </div>
                <div>
                  <h2 className="text-[21px] font-bold text-white leading-tight m-0">
                    5. Quality
                  </h2>
                  <p className="text-[16px] text-[#94a3b8] mt-0.5 m-0">
                    Tell me about your quality control process.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-4 items-start">
                <div>
                  <label className="block text-[16px] font-semibold text-[#f1f5f9] mb-1.5">
                    Quality Process <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={qualityProcess}
                    onChange={(e) => onChange("qualityProcess", e.target.value)}
                    placeholder="Describe your quality inspection steps..."
                    className="w-full min-h-[46px] px-3.5 py-2 bg-[#05121e]/85 border border-[rgba(114,80,33,0.72)] rounded-lg text-white text-[16px] outline-none focus:border-[#d69a2b]"
                  />
                </div>

                <ChipsInput
                  label="Major Certifications (Optional)"
                  items={certifications}
                  options={certificationsOptions}
                  onAdd={(c) => addArrayItem("certifications", c)}
                  onRemove={(c) => removeArrayItem("certifications", c)}
                  placeholder="e.g. FSSAI, ISO 22000..."
                />
              </div>
            </section>

            {draftMessage && (
              <p aria-live="polite" className="coo-customer-save-status">
                {draftMessage}
              </p>
            )}
          </div>

          {/* RIGHT ASIDE: Speech bubble + Operating Model At a Glance + Important Info + Quick Tips */}
          <aside className="flex flex-col gap-4 min-w-0">
            {/* Top Assistant Speech Bubble + Avatar */}
            <div className="flex items-center justify-between gap-3 p-1">
              <div className="flex-1 bg-[#f8fafc] text-[#0f172a] rounded-xl rounded-br-xs p-3.5 shadow-lg">
                <p className="text-[16px] leading-snug m-0 text-[#0f172a]">
                  I need to understand your operating model so I can coordinate Operations, Procurement, Inventory and Logistics AI employees effectively.
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

            {/* Your Operating Model at a Glance Card */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4.5 shadow-lg">
              <div className="flex items-center justify-between gap-2 mb-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168]">
                    <Network size={18} />
                  </div>
                  <h3 className="text-[18px] font-bold text-white m-0">
                    Your Operating Model at a Glance
                  </h3>
                </div>
                <ArrowRight size={17} className="text-[#d69a2b]" />
              </div>

              {/* 4 Status Tiles */}
              <div className="grid grid-cols-4 gap-2">
                {/* 1. Manufacturing */}
                <div className="bg-[#05121e]/90 border border-[rgba(214,154,43,0.25)] rounded-lg p-2.5 flex flex-col items-center text-center justify-center">
                  <Factory size={22} className="text-[#f5b738] mb-1" />
                  <div className="text-[16px] text-[#94a3b8] leading-tight">Manufacturing</div>
                  <div className="text-[16px] font-bold text-[#39b86b] mt-0.5">
                    {doYouManufacture ? "Yes" : "No"}
                  </div>
                </div>

                {/* 2. Inventory */}
                <div className="bg-[#05121e]/90 border border-[rgba(214,154,43,0.25)] rounded-lg p-2.5 flex flex-col items-center text-center justify-center">
                  <Package size={22} className="text-[#f5b738] mb-1" />
                  <div className="text-[16px] text-[#94a3b8] leading-tight">Inventory</div>
                  <div className="text-[16px] font-bold text-[#39b86b] mt-0.5">
                    {doYouMaintainInventory ? "Maintained" : "None"}
                  </div>
                </div>

                {/* 3. Logistics */}
                <div className="bg-[#05121e]/90 border border-[rgba(214,154,43,0.25)] rounded-lg p-2.5 flex flex-col items-center text-center justify-center">
                  <Truck size={22} className="text-[#f5b738] mb-1" />
                  <div className="text-[16px] text-[#94a3b8] leading-tight">Logistics</div>
                  <div className="text-[16px] font-bold text-[#39b86b] mt-0.5">
                    {logisticsModels[0] || "3PL"}
                  </div>
                </div>

                {/* 4. Export */}
                <div className="bg-[#05121e]/90 border border-[rgba(214,154,43,0.25)] rounded-lg p-2.5 flex flex-col items-center text-center justify-center">
                  <Ship size={22} className="text-[#f5b738] mb-1" />
                  <div className="text-[16px] text-[#94a3b8] leading-tight">Export</div>
                  <div className="text-[16px] font-bold text-[#39b86b] mt-0.5">
                    Yes
                  </div>
                </div>
              </div>
            </section>

            {/* Important Information Card */}
            <section className="bg-gradient-to-br from-[#0c2235]/95 to-[#04121e]/95 border border-[rgba(214,154,43,0.4)] rounded-xl p-4.5 shadow-lg flex items-start gap-3">
              <div className="w-9 h-9 rounded-full bg-[rgba(214,154,43,0.15)] border border-[#d69a2b]/50 grid place-items-center text-[#f0c168] flex-shrink-0 mt-0.5">
                <Lock size={18} />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-white m-0">Important Information</h3>
                <p className="text-[16px] text-[#cbd5e1] leading-relaxed mt-1.5 m-0">
                  You do not need to upload proprietary formulas, confidential engineering designs or sensitive supplier contracts to build your Company Brain.
                </p>
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
                  <span>Provide high-level operational details.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Select all relevant categories.</span>
                </li>
                <li className="flex items-start gap-2.5 text-[16px] text-[#cbd5e1] leading-snug">
                  <span className="w-5 h-5 rounded-full bg-[#39b86b] text-[#020d18] grid place-items-center flex-shrink-0 mt-0.5">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Keep information simple and accurate.</span>
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
            Next: People &amp; Organization <ArrowRight size={18} />
          </button>
        </footer>
      </div>
    </>
  );
}

