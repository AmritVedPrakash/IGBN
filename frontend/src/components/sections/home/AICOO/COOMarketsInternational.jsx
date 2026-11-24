import { useState } from "react";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Globe,
  Lightbulb,
  Save,
  Ship,
  Target,
  TrendingUp,
  X,
} from "lucide-react";
import aiAgentImage from "../../../../assets/igbndivision/aiagent.png";

const allRegions = [
  "India",
  "Middle East",
  "Europe",
  "North America",
  "Asia-Pacific",
  "Africa",
  "Latin America",
];

const exportStatusOptions = [
  "Yes, currently exporting",
  "Exported previously",
  "Planning to export",
  "Not currently exporting",
];

const expansionOptions = ["Yes", "Maybe Later", "No"];

const exportChannelOptions = [
  "Distributors",
  "Agents",
  "Direct",
  "Retail",
  "Marketplace",
  "Other",
];

const shipmentFrequencies = [
  "Monthly",
  "Weekly",
  "Bi-weekly",
  "Quarterly",
  "On Demand",
];

const incotermsOptions = [
  "FOB",
  "CIF",
  "EXW",
  "CFR",
  "DDP",
  "DAP",
  "CIP",
  "FCA",
];

const paymentTermsOptions = [
  "30% Advance, 70% against BL",
  "100% Advance",
  "Letter of Credit (LC)",
  "Net 30",
  "Net 60",
  "Open Account",
  "Other",
];

const commonChallenges = [
  "Finding distributors",
  "Finding qualified buyers",
  "Competition",
  "Regulations",
  "Freight costs",
  "Pricing",
  "Market awareness",
  "Customer acquisition",
  "Other (please specify)",
];

const popularCountries = [
  "India",
  "UAE",
  "Saudi Arabia",
  "Germany",
  "United States",
  "United Kingdom",
  "Australia",
  "Japan",
  "Singapore",
  "South Africa",
  "Canada",
  "France",
  "Italy",
  "Indonesia",
];

const customerTypeOptions = [
  "Distributors",
  "Retailers",
  "Importers",
  "Wholesalers",
  "Direct Consumers",
  "Corporate",
];

// Region pins for the stylized world map
const mapPins = [
  { id: "North America", name: "North America", x: 20, y: 34, isTarget: false },
  { id: "Latin America", name: "Latin America", x: 26, y: 64, isTarget: false },
  { id: "Europe", name: "Europe", x: 50, y: 28, isTarget: false },
  { id: "Middle East", name: "Middle East", x: 58, y: 39, isTarget: false },
  { id: "India", name: "India", x: 67, y: 49, isTarget: true },
  { id: "Asia-Pacific", name: "Asia-Pacific", x: 83, y: 50, isTarget: true },
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
    <div className="coo-step5-chips-field">
      {label && (
        <label className="coo-step5-field-label">
          {label} {required && <span className="coo-step5-required">*</span>}
        </label>
      )}
      <div
        className="coo-step5-chips-box"
        onClick={() => setShowDropdown(true)}
      >
        <div className="coo-step5-chips-list">
          {items.map((item) => (
            <span className="coo-step5-chip" key={item}>
              <span>{item}</span>
              <button
                type="button"
                className="coo-step5-chip-del"
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
            className="coo-step5-chips-input"
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
          className="coo-step5-dropdown-arrow"
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
        <div className="coo-step5-dropdown-list">
          {availableOptions.slice(0, 8).map((option) => (
            <button
              type="button"
              key={option}
              className="coo-step5-dropdown-item"
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

export default function COOMarketsInternational({
  currentStep = 5,
  marketsData = {},
  draftMessage,
  onBack,
  onChange,
  onSaveProgress,
  onNext,
}) {
  const currentRegions = marketsData.currentRegions || [
    "India",
    "Middle East",
    "Europe",
    "Asia-Pacific",
  ];
  const currentCountries = marketsData.currentCountries || [
    "India",
    "UAE",
    "Saudi Arabia",
    "Germany",
    "United States",
  ];
  const exportStatus = marketsData.exportStatus || "Yes, currently exporting";
  const countriesCurrentlyServed = marketsData.countriesCurrentlyServed || [
    "UAE",
    "Saudi Arabia",
    "Germany",
  ];
  const mainExportProducts = marketsData.mainExportProducts || [
    "Millet Cookies",
    "Protein Snacks",
  ];
  const internationalCustomerTypes = marketsData.internationalCustomerTypes || [
    "Distributors",
    "Retailers",
    "Importers",
  ];
  const exportChannels = marketsData.exportChannels || ["Distributors", "Agents"];
  const typicalShipmentFrequency = marketsData.typicalShipmentFrequency || "Monthly";
  const typicalIncoterms = marketsData.typicalIncoterms || "FOB";
  const typicalPaymentTerms =
    marketsData.typicalPaymentTerms || "30% Advance, 70% against BL";
  const expansionInterest = marketsData.expansionInterest || "Yes";
  const targetCountries = marketsData.targetCountries || [
    "USA",
    "Australia",
    "Japan",
    "South Africa",
  ];
  const targetRegions = marketsData.targetRegions || [
    "North America",
    "Asia-Pacific",
    "Africa",
  ];
  const productsForExpansion = marketsData.productsForExpansion || [
    "Healthy Snacks",
    "Private Label Products",
  ];
  const challenges = marketsData.challenges || [
    "Finding distributors",
    "Finding qualified buyers",
    "Regulations",
    "Market awareness",
  ];
  const otherChallenge = marketsData.otherChallenge || "";

  // Toggle helper
  const toggleRegion = (region) => {
    const next = currentRegions.includes(region)
      ? currentRegions.filter((r) => r !== region)
      : [...currentRegions, region];
    onChange("currentRegions", next);
  };

  const toggleExportChannel = (channel) => {
    const next = exportChannels.includes(channel)
      ? exportChannels.filter((c) => c !== channel)
      : [...exportChannels, channel];
    onChange("exportChannels", next);
  };

  const toggleChallenge = (item) => {
    const next = challenges.includes(item)
      ? challenges.filter((c) => c !== item)
      : [...challenges, item];
    onChange("challenges", next);
  };

  const addArrayItem = (field, item) => {
    const current = marketsData[field] || [];
    if (!current.includes(item)) {
      onChange(field, [...current, item]);
    }
  };

  const removeArrayItem = (field, item) => {
    const current = marketsData[field] || [];
    onChange(
      field,
      current.filter((val) => val !== item)
    );
  };

  // Summary counts
  const currentCount = currentCountries.length || 4;
  const targetCount = targetCountries.length || 6;
  const currentSummary = currentCountries.slice(0, 4).join(", ") || "India, UAE, Saudi Arabia, Germany";
  const targetSummary = targetCountries.slice(0, 6).join(", ") || "USA, Australia, Japan, UK, South Africa, Indonesia";

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

      {/* Main Layout Container */}
      <div className="coo-step5-root">
        {/* Title Header */}
        <header className="coo-step5-page-header">
          <div className="coo-step5-title-wrap">
            <h1>
              <span className="coo-step5-num">4.</span> Where Does Your Business Operate?
            </h1>
            <p className="coo-step5-subtitle">
              Tell your COO where you currently operate and where you want to grow.
            </p>
          </div>
        </header>

        {/* 2-Column Content Area */}
        <div className="coo-step5-main-columns">
          {/* LEFT COLUMN: Main Form Cards */}
          <div className="coo-step5-left-cards">
            {/* CARD 1: 1. Current Markets */}
            <section className="coo-step5-card">
              <div className="coo-step5-card-header">
                <div className="coo-step5-icon-circle">
                  <Globe size={22} />
                </div>
                <div>
                  <h2>1. Current Markets</h2>
                  <p>Select the regions and countries where you currently operate.</p>
                </div>
              </div>

              {/* Region Pills Checkbox Grid */}
              <div className="coo-step5-regions-grid" role="group" aria-label="Current Regions">
                {allRegions.map((region) => {
                  const isSelected = currentRegions.includes(region);
                  return (
                    <button
                      key={region}
                      type="button"
                      className={`coo-step5-region-pill ${isSelected ? "is-selected" : ""}`}
                      onClick={() => toggleRegion(region)}
                      aria-pressed={isSelected}
                    >
                      <span className="coo-step5-pill-check">
                        {isSelected && <Check size={13} strokeWidth={3} />}
                      </span>
                      <span>{region}</span>
                    </button>
                  );
                })}
              </div>

              {/* Specific Countries Dropdown/Chips */}
              <div className="coo-step5-countries-row">
                <ChipsInput
                  label="Select Specific Countries (Optional)"
                  items={currentCountries}
                  options={popularCountries}
                  onAdd={(country) => addArrayItem("currentCountries", country)}
                  onRemove={(country) => removeArrayItem("currentCountries", country)}
                  placeholder="Select or type country..."
                />
              </div>
            </section>

            {/* CARD 2: 2. International Business */}
            <section className="coo-step5-card">
              <div className="coo-step5-card-header">
                <div className="coo-step5-icon-circle">
                  <Ship size={22} />
                </div>
                <div>
                  <h2>2. International Business</h2>
                  <p>Tell us about your export activity.</p>
                </div>
              </div>

              {/* Export Activity Radios */}
              <div className="coo-step5-radio-row" role="radiogroup" aria-label="Export activity">
                {exportStatusOptions.map((status) => {
                  const isChecked = exportStatus === status;
                  return (
                    <label
                      key={status}
                      className={`coo-step5-radio-pill ${isChecked ? "is-selected" : ""}`}
                    >
                      <input
                        type="radio"
                        name="exportStatus"
                        value={status}
                        checked={isChecked}
                        onChange={() => onChange("exportStatus", status)}
                        className="coo-step5-hidden"
                      />
                      <span className="coo-step5-radio-circle">
                        {isChecked && <span className="coo-step5-radio-dot" />}
                      </span>
                      <span>{status}</span>
                    </label>
                  );
                })}
              </div>

              {/* Row 1: Countries Currently Served & Main Export Products */}
              <div className="coo-step5-two-col-grid">
                <ChipsInput
                  label="Countries Currently Served"
                  required
                  items={countriesCurrentlyServed}
                  options={popularCountries}
                  onAdd={(c) => addArrayItem("countriesCurrentlyServed", c)}
                  onRemove={(c) => removeArrayItem("countriesCurrentlyServed", c)}
                  placeholder="e.g. UAE, Saudi Arabia, Germany..."
                />
                <ChipsInput
                  label="Main Export Products"
                  required
                  items={mainExportProducts}
                  options={["Millet Cookies", "Protein Snacks", "Organic Spices", "Herbal Tea"]}
                  onAdd={(p) => addArrayItem("mainExportProducts", p)}
                  onRemove={(p) => removeArrayItem("mainExportProducts", p)}
                  placeholder="e.g. Millet Cookies, Protein Snacks..."
                />
              </div>

              {/* Row 2: International Customer Types & Export Channels */}
              <div className="coo-step5-two-col-grid">
                <ChipsInput
                  label="International Customer Types"
                  required
                  items={internationalCustomerTypes}
                  options={customerTypeOptions}
                  onAdd={(t) => addArrayItem("internationalCustomerTypes", t)}
                  onRemove={(t) => removeArrayItem("internationalCustomerTypes", t)}
                  placeholder="e.g. Distributors, Retailers..."
                />
                <div className="coo-step5-channels-field">
                  <label className="coo-step5-field-label">
                    Export Channels <span className="coo-step5-required">*</span>
                  </label>
                  <div className="coo-step5-channels-grid">
                    {exportChannelOptions.map((channel) => {
                      const isChecked = exportChannels.includes(channel);
                      return (
                        <label
                          key={channel}
                          className={`coo-step5-check-pill ${isChecked ? "is-checked" : ""}`}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => toggleExportChannel(channel)}
                            className="coo-step5-hidden"
                          />
                          <span className="coo-step5-square-check">
                            {isChecked && <Check size={12} strokeWidth={3} />}
                          </span>
                          <span>{channel}</span>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Row 3: Shipment, Incoterms, Payment Terms */}
              <div className="coo-step5-three-col-grid">
                <div className="coo-step5-select-field">
                  <label className="coo-step5-field-label">
                    Typical Shipment Frequency <span className="coo-step5-required">*</span>
                  </label>
                  <div className="coo-step5-select-wrap">
                    <select
                      className="coo-step5-select-control"
                      value={typicalShipmentFrequency}
                      onChange={(e) => onChange("typicalShipmentFrequency", e.target.value)}
                    >
                      {shipmentFrequencies.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="coo-step5-select-arrow" size={17} />
                  </div>
                </div>

                <div className="coo-step5-select-field">
                  <label className="coo-step5-field-label">Typical Incoterms (Optional)</label>
                  <div className="coo-step5-select-wrap">
                    <select
                      className="coo-step5-select-control"
                      value={typicalIncoterms}
                      onChange={(e) => onChange("typicalIncoterms", e.target.value)}
                    >
                      {incotermsOptions.map((inc) => (
                        <option key={inc} value={inc}>
                          {inc}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="coo-step5-select-arrow" size={17} />
                  </div>
                </div>

                <div className="coo-step5-select-field">
                  <label className="coo-step5-field-label">Typical Payment Terms (Optional)</label>
                  <div className="coo-step5-select-wrap">
                    <select
                      className="coo-step5-select-control"
                      value={typicalPaymentTerms}
                      onChange={(e) => onChange("typicalPaymentTerms", e.target.value)}
                    >
                      {paymentTermsOptions.map((pay) => (
                        <option key={pay} value={pay}>
                          {pay}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="coo-step5-select-arrow" size={17} />
                  </div>
                </div>
              </div>
            </section>

            {/* BOTTOM ROW: Card 3 & Card 4 SIDE-BY-SIDE */}
            <div className="coo-step5-bottom-split-row">
              {/* CARD 3: 3. Future Expansion */}
              <section className="coo-step5-card coo-step5-half-card">
                <div className="coo-step5-card-header">
                  <div className="coo-step5-icon-circle">
                    <TrendingUp size={22} />
                  </div>
                  <div>
                    <h2>3. Future Expansion</h2>
                    <p>Would you like your COO to consider international expansion?</p>
                  </div>
                </div>

                <div className="coo-step5-radio-row">
                  {expansionOptions.map((opt) => {
                    const isChecked = expansionInterest === opt;
                    return (
                      <label
                        key={opt}
                        className={`coo-step5-radio-pill ${isChecked ? "is-selected" : ""}`}
                      >
                        <input
                          type="radio"
                          name="expansionInterest"
                          value={opt}
                          checked={isChecked}
                          onChange={() => onChange("expansionInterest", opt)}
                          className="coo-step5-hidden"
                        />
                        <span className="coo-step5-radio-circle">
                          {isChecked && <span className="coo-step5-radio-dot" />}
                        </span>
                        <span>{opt}</span>
                      </label>
                    );
                  })}
                </div>

                <div className="coo-step5-stack-fields">
                  <div className="coo-step5-two-col-grid">
                    <ChipsInput
                      label="Target Countries (Optional)"
                      items={targetCountries}
                      options={popularCountries}
                      onAdd={(c) => addArrayItem("targetCountries", c)}
                      onRemove={(c) => removeArrayItem("targetCountries", c)}
                      placeholder="e.g. USA, Australia..."
                    />
                    <ChipsInput
                      label="Target Regions (Optional)"
                      items={targetRegions}
                      options={allRegions}
                      onAdd={(r) => addArrayItem("targetRegions", r)}
                      onRemove={(r) => removeArrayItem("targetRegions", r)}
                      placeholder="e.g. North America..."
                    />
                  </div>
                  <ChipsInput
                    label="Products for Expansion (Optional)"
                    items={productsForExpansion}
                    options={["Healthy Snacks", "Private Label Products", "Custom Packaging"]}
                    onAdd={(p) => addArrayItem("productsForExpansion", p)}
                    onRemove={(p) => removeArrayItem("productsForExpansion", p)}
                    placeholder="e.g. Healthy Snacks, Private Label..."
                  />
                </div>
              </section>

              {/* CARD 4: 4. Market Challenges (Optional) */}
              <section className="coo-step5-card coo-step5-half-card">
                <div className="coo-step5-card-header">
                  <div className="coo-step5-icon-circle">
                    <AlertTriangle size={22} />
                  </div>
                  <div>
                    <h2>4. Market Challenges <span>(Optional)</span></h2>
                    <p>Select the key challenges you face in your current or target markets.</p>
                  </div>
                </div>

                <div className="coo-step5-challenges-grid">
                  {commonChallenges.map((challenge) => {
                    const isChecked = challenges.includes(challenge);
                    return (
                      <label
                        key={challenge}
                        className={`coo-step5-challenge-item ${isChecked ? "is-checked" : ""}`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleChallenge(challenge)}
                          className="coo-step5-hidden"
                        />
                        <span className="coo-step5-square-check">
                          {isChecked && <Check size={12} strokeWidth={3} />}
                        </span>
                        <span>{challenge}</span>
                      </label>
                    );
                  })}
                </div>

                {challenges.includes("Other (please specify)") && (
                  <div className="coo-step5-other-input-wrap">
                    <input
                      type="text"
                      className="coo-step5-text-input"
                      placeholder="Please specify other challenges..."
                      value={otherChallenge}
                      onChange={(e) => onChange("otherChallenge", e.target.value)}
                    />
                  </div>
                )}
              </section>
            </div>

            {draftMessage && (
              <p aria-live="polite" className="coo-customer-save-status">
                {draftMessage}
              </p>
            )}
          </div>

          {/* RIGHT ASIDE: Speech bubble + Map + Quick Tips */}
          <aside className="coo-step5-aside">
            {/* Top Assistant speech bubble with Avatar */}
            <div className="coo-step5-assistant-card">
              <div className="coo-step5-speech-bubble">
                <p>
                  Your market information helps me identify where your AI Research, Buyer Discovery,
                  Sales and Business Development employees should focus.
                </p>
                <div className="coo-step5-speech-author">— AI COO</div>
              </div>
              <div className="coo-step5-avatar-box">
                <img src={aiAgentImage} alt="AI Chief Operating Officer" />
              </div>
            </div>

            {/* "Your Global Presence" Map Card */}
            <section className="coo-step5-presence-card">
              <div className="coo-step5-presence-header">
                <div className="coo-step5-presence-title">
                  <span className="coo-step5-icon-sm">
                    <Globe size={18} />
                  </span>
                  <h3>Your Global Presence</h3>
                </div>
                <div className="coo-step5-legend">
                  <span className="coo-step5-legend-item">
                    <span className="coo-step5-dot dot-current" />
                    <span>Current Markets</span>
                  </span>
                  <span className="coo-step5-legend-item">
                    <span className="coo-step5-dot dot-target" />
                    <span>Target Markets</span>
                  </span>
                </div>
              </div>

              {/* World Map SVG with glowing pin markers */}
              <div className="coo-step5-map-wrap">
                <svg
                  viewBox="0 0 1000 520"
                  className="coo-step5-map-svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <radialGradient id="step5Ocean" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#0d2946" stopOpacity="0.9" />
                      <stop offset="100%" stopColor="#041220" stopOpacity="0.98" />
                    </radialGradient>
                  </defs>

                  {/* Ocean Base */}
                  <rect width="1000" height="520" fill="url(#step5Ocean)" rx="8" />

                  {/* Subtle Map Coordinate Grid */}
                  <g stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" strokeDasharray="3 3">
                    <line x1="200" y1="0" x2="200" y2="520" />
                    <line x1="400" y1="0" x2="400" y2="520" />
                    <line x1="600" y1="0" x2="600" y2="520" />
                    <line x1="800" y1="0" x2="800" y2="520" />
                    <line x1="0" y1="130" x2="1000" y2="130" />
                    <line x1="0" y1="260" x2="1000" y2="260" />
                    <line x1="0" y1="390" x2="1000" y2="390" />
                  </g>

                  {/* Continents Shapes */}
                  {/* North America */}
                  <path
                    d="M100,90 Q150,60 250,70 Q310,110 280,180 Q230,220 200,240 Q160,250 130,210 Q90,170 100,90 Z"
                    fill="#153b61"
                    stroke="#235c91"
                    strokeWidth="1.5"
                  />
                  {/* Latin America */}
                  <path
                    d="M220,270 Q280,280 300,330 Q310,390 260,450 Q230,440 210,370 Q200,310 220,270 Z"
                    fill="#153b61"
                    stroke="#235c91"
                    strokeWidth="1.5"
                  />
                  {/* Europe */}
                  <path
                    d="M440,100 Q500,90 530,130 Q520,180 470,190 Q420,170 430,130 Z"
                    fill="#153b61"
                    stroke="#235c91"
                    strokeWidth="1.5"
                  />
                  {/* Africa */}
                  <path
                    d="M460,200 Q530,200 550,260 Q550,340 510,400 Q460,380 450,300 Q440,240 460,200 Z"
                    fill="#153b61"
                    stroke="#235c91"
                    strokeWidth="1.5"
                  />
                  {/* Asia & North Asia */}
                  <path
                    d="M540,80 Q740,60 850,120 Q870,190 810,250 Q740,230 670,250 Q610,170 540,150 Z"
                    fill="#153b61"
                    stroke="#235c91"
                    strokeWidth="1.5"
                  />
                  {/* India Subcontinent */}
                  <path
                    d="M630,220 Q670,220 690,270 Q660,320 640,290 Q620,250 630,220 Z"
                    fill="#194877"
                    stroke="#2e76bc"
                    strokeWidth="1.5"
                  />
                  {/* Australia */}
                  <path
                    d="M770,320 Q850,310 870,370 Q840,430 780,410 Q750,370 770,320 Z"
                    fill="#153b61"
                    stroke="#235c91"
                    strokeWidth="1.5"
                  />

                  {/* Region Map Pins */}
                  {mapPins.map((pin) => {
                    const isTargetPin = pin.isTarget;
                    const pinColor = isTargetPin ? "#3b82f6" : "#f5b738";
                    const px = (pin.x * 1000) / 100;
                    const py = (pin.y * 520) / 100;

                    return (
                      <g key={pin.id} transform={`translate(${px}, ${py})`}>
                        {/* Pulse Ring */}
                        <circle
                          r="10"
                          fill="none"
                          stroke={pinColor}
                          strokeWidth="1.5"
                          opacity="0.6"
                        >
                          <animate
                            attributeName="r"
                            values="7;16;7"
                            dur="2.8s"
                            repeatCount="indefinite"
                          />
                          <animate
                            attributeName="opacity"
                            values="0.8;0;0.8"
                            dur="2.8s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        {/* Location Pin Shape */}
                        <path
                          d="M0,-16 C-6,-16 -10,-11 -10,-5 C-10,2 0,10 0,10 C0,10 10,2 10,-5 C10,-11 6,-16 0,-16 Z"
                          fill={pinColor}
                          stroke="#041220"
                          strokeWidth="1.2"
                        />
                        <circle cx="0" cy="-5" r="3" fill="#041220" />

                        {/* Pin label badge */}
                        <g transform="translate(12, -6)">
                          <rect
                            x="0"
                            y="-9"
                            width={pin.name.length * 7.5 + 12}
                            height="18"
                            rx="4"
                            fill="rgba(4, 18, 32, 0.9)"
                            stroke={pinColor}
                            strokeWidth="0.8"
                          />
                          <text
                            x="6"
                            y="4"
                            fill="#f8fafc"
                            fontSize="11"
                            fontFamily="sans-serif"
                            fontWeight="600"
                          >
                            {pin.name}
                          </text>
                        </g>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Metrics Under Map */}
              <div className="coo-step5-metrics-grid">
                <div className="coo-step5-stat-card">
                  <span className="coo-step5-stat-icon">
                    <Globe size={22} />
                  </span>
                  <div>
                    <div className="coo-step5-stat-num">{currentCount}</div>
                    <div className="coo-step5-stat-name">Current Markets</div>
                    <div className="coo-step5-stat-desc">{currentSummary}</div>
                  </div>
                </div>

                <div className="coo-step5-stat-card">
                  <span className="coo-step5-stat-icon">
                    <Target size={22} />
                  </span>
                  <div>
                    <div className="coo-step5-stat-num">{targetCount}</div>
                    <div className="coo-step5-stat-name">Target Markets</div>
                    <div className="coo-step5-stat-desc">{targetSummary}</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Quick Tips Card */}
            <section className="coo-step5-tips-card">
              <div className="coo-step5-tips-title">
                <span className="coo-step5-tips-bulb">
                  <Lightbulb size={20} />
                </span>
                <h3>Quick Tips</h3>
              </div>
              <ul className="coo-step5-tips-list">
                <li>
                  <span className="coo-step5-tip-check">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Select all the regions where you operate or plan to operate.</span>
                </li>
                <li>
                  <span className="coo-step5-tip-check">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Add key export products and channels.</span>
                </li>
                <li>
                  <span className="coo-step5-tip-check">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Include target markets for future growth.</span>
                </li>
                <li>
                  <span className="coo-step5-tip-check">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>Share the main challenges you face.</span>
                </li>
                <li>
                  <span className="coo-step5-tip-check">
                    <Check size={13} strokeWidth={3} />
                  </span>
                  <span>You can update this information anytime.</span>
                </li>
              </ul>
            </section>
          </aside>
        </div>

        {/* Footer Actions */}
        <footer className="coo-step5-actions">
          <button className="coo-back-button" onClick={onBack} type="button">
            <ArrowLeft size={18} /> Back
          </button>
          <button className="coo-save-button" onClick={onSaveProgress} type="button">
            <Save size={18} /> Save &amp; Continue Later
          </button>
          <button className="coo-next-button" onClick={onNext} type="button">
            Next: Business Model &amp; Financial Overview <ArrowRight size={18} />
          </button>
        </footer>
      </div>
    </>
  );
}
