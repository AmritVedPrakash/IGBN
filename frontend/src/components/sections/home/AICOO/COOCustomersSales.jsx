import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  CircleHelp,
  Clock3,
  Factory,
  FileText,
  Lightbulb,
  LockKeyhole,
  Pencil,
  Plus,
  Save,
  Search,
  ShoppingBag,
  Store,
  Users,
  X,
} from "lucide-react";
import aiAgentImage from "../../../../assets/igbndivision/aiagent.png";
import foodIndustryImage from "../../../../assets/factory-tours/industry-food-beverages.jpg";
import retailIndustryImage from "../../../../assets/homebg/fmcg-map.png";
import hospitalityIndustryImage from "../../../../assets/factory-tours/industry-furniture.jpg";
import healthcareIndustryImage from "../../../../assets/healthcare.png";
import manufacturingIndustryImage from "../../../../assets/factory-tours/industry-engineering.jpg";
import agricultureIndustryImage from "../../../../assets/homebg/agro-map.png";

const customerTypes = [
  "Consumers",
  "Distributors",
  "Importers",
  "Wholesalers",
  "Retailers",
  "Manufacturers",
  "Government",
  "Institutions",
  "Corporate Clients",
  "Agents",
  "Online Marketplaces",
  "Other",
];

const industries = [
  { name: "Food & Beverage", image: foodIndustryImage },
  { name: "Retail", image: retailIndustryImage },
  { name: "Hospitality", image: hospitalityIndustryImage },
  { name: "Health & Wellness", image: healthcareIndustryImage },
  { name: "Manufacturing", image: manufacturingIndustryImage },
  { name: "Agriculture", image: agricultureIndustryImage },
  { name: "FMCG" },
  { name: "Healthcare" },
  { name: "Technology" },
  { name: "Education" },
  { name: "Other" },
];

const salesChannels = [
  "Direct Sales",
  "Sales Team",
  "Distributor Network",
  "Website",
  "Dealers",
  "Agents",
  "Online Marketplaces",
  "Retail Stores",
  "International Distributors",
  "Other",
];

const salesCycles = [
  "Less than 1 month",
  "1 – 3 months",
  "3 – 6 months",
  "6 – 12 months",
  "More than 12 months",
  "Varies by customer",
];

const crmOptions = ["Salesforce", "HubSpot", "Zoho", "SAP", "Other"];
const currencies = ["INR", "USD", "EUR", "GBP", "AED"];

function ToggleOptions({ items, selected, onToggle, className = "", label }) {
  return (
    <div aria-label={label} className={`coo-customer-toggle-grid ${className}`} role="group">
      {items.map((item) => {
        const isSelected = selected.includes(item);
        return (
          <button
            aria-pressed={isSelected}
            className={`coo-customer-toggle ${isSelected ? "is-selected" : ""}`}
            key={item}
            onClick={() => onToggle(item)}
            type="button"
          >
            <span className="coo-customer-checkbox">{isSelected && <Check size={13} />}</span>
            <span>{item}</span>
          </button>
        );
      })}
    </div>
  );
}

function SectionHeading({ icon: Icon, title, detail, optional = false }) {
  return (
    <div className="coo-customer-section-heading">
      <span className="coo-product-icon"><Icon size={18} /></span>
      <div>
        <h2>{title}{optional && <span> (Optional)</span>}</h2>
        {detail && <p>{detail}</p>}
      </div>
    </div>
  );
}

function CustomerChips({ items, label, onRemove }) {
  return (
    <div aria-label={label} className="coo-customer-chips" role="list">
      {items.map((item) => (
        <span className="coo-customer-chip" key={item} role="listitem">
          {item}
          <button aria-label={`Remove ${item}`} onClick={() => onRemove(item)} type="button">
            <X aria-hidden="true" size={12} />
          </button>
        </span>
      ))}
    </div>
  );
}

export default function COOCustomersSales({
  currentStep,
  customerSales,
  draftMessage,
  onBack,
  onChange,
  onSaveProgress,
  onNext,
}) {
  const [industrySearch, setIndustrySearch] = useState("");
  const [showAllIndustries, setShowAllIndustries] = useState(false);
  const [customerCategoryInput, setCustomerCategoryInput] = useState("");
  const [keyAccountInput, setKeyAccountInput] = useState("");
  const [stageInput, setStageInput] = useState("");
  const [editingStageIndex, setEditingStageIndex] = useState(null);

  const toggleArrayValue = (field, value) => {
    const values = customerSales[field];
    onChange(field, values.includes(value)
      ? values.filter((item) => item !== value)
      : [...values, value]);
  };

  const addListItem = (field, value, clearInput) => {
    const nextItem = value.trim();
    if (!nextItem || customerSales[field].some((item) => item.toLowerCase() === nextItem.toLowerCase())) return;
    onChange(field, [...customerSales[field], nextItem]);
    clearInput("");
  };

  const toggleIndustry = (industry) => toggleArrayValue("industries", industry);

  const filteredIndustries = industries.filter((industry) => (
    industry.name.toLowerCase().includes(industrySearch.trim().toLowerCase())
  ));
  const shownIndustries = industrySearch || showAllIndustries
    ? filteredIndustries
    : filteredIndustries.slice(0, 6);

  const saveStage = () => {
    const label = stageInput.trim();
    if (!label) return;
    const stages = [...customerSales.salesStages];
    if (editingStageIndex === -1) {
      if (stages.some((stage) => stage.toLowerCase() === label.toLowerCase())) return;
      stages.push(label);
    } else {
      stages[editingStageIndex] = label;
    }
    onChange("salesStages", stages);
    setStageInput("");
    setEditingStageIndex(null);
  };

  const startEditingStage = (index) => {
    const stageIndex = index ?? -1;
    setEditingStageIndex(stageIndex);
    setStageInput(stageIndex === -1 ? "" : customerSales.salesStages[stageIndex]);
  };

  return (
    <>
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
              className={`coo-progress-dot ${index < currentStep - 1 ? "is-complete" : ""} ${index === currentStep - 1 ? "is-current" : ""}`}
              key={index}
            />
          ))}
        </div>
        <span className="coo-progress-count">{currentStep} / 12</span>
      </header>

      <div className="coo-customers-layout">
        <header className="coo-customers-title">
          <span className="coo-products-step-number">3.</span>
          <div>
            <h1>Who Buys <span>From You?</span></h1>
            <p>Help your COO understand your customers, sales channels and typical customer journey.</p>
          </div>
        </header>

        <section className="coo-customers-main" aria-label="Customer and sales details">
          <section className="coo-product-panel coo-customer-types-panel">
            <SectionHeading
              detail="Select all customer types that apply to your business."
              icon={Users}
              title="Customer Types"
            />
            <ToggleOptions
              className="coo-customer-types-grid"
              items={customerTypes}
              label="Customer types"
              onToggle={(value) => toggleArrayValue("customerTypes", value)}
              selected={customerSales.customerTypes}
            />
          </section>

          <section className="coo-product-panel coo-customer-industries-panel">
            <SectionHeading
              detail="Select the industries you primarily serve."
              icon={Building2}
              title="Customer Industries"
            />
            <label className="coo-industry-search">
              <Search aria-hidden="true" size={15} />
              <span className="coo-visually-hidden">Search customer industries</span>
              <input
                onChange={(event) => setIndustrySearch(event.target.value)}
                placeholder="Search and select industries..."
                value={industrySearch}
              />
              <ChevronDown aria-hidden="true" size={15} />
            </label>
            <CustomerChips
              items={customerSales.industries}
              label="Selected customer industries"
              onRemove={(industry) => onChange("industries", customerSales.industries.filter((item) => item !== industry))}
            />
            <div aria-label="Select customer industries" className="coo-customer-industry-grid" role="group">
              {shownIndustries.map((industry) => {
                const isSelected = customerSales.industries.includes(industry.name);
                return (
                  <button
                    aria-pressed={isSelected}
                    className={`coo-customer-industry-card ${isSelected ? "is-selected" : ""}`}
                    key={industry.name}
                    onClick={() => toggleIndustry(industry.name)}
                    type="button"
                  >
                    {industry.image
                      ? <img alt="" loading="lazy" src={industry.image} />
                      : <span className="coo-customer-industry-placeholder"><BriefcaseBusiness size={19} /></span>}
                    <span>{industry.name}</span>
                    {isSelected && <Check aria-hidden="true" className="coo-customer-industry-check" size={14} />}
                  </button>
                );
              })}
              {!industrySearch && (
                <button
                  aria-expanded={showAllIndustries}
                  className="coo-customer-more-industries"
                  onClick={() => setShowAllIndustries((shown) => !shown)}
                  type="button"
                >
                  <Plus size={18} />
                  {showAllIndustries ? "Fewer Industries" : "More Industries"}
                </button>
              )}
            </div>
          </section>

          <section className="coo-product-panel coo-customer-profile-panel">
            <SectionHeading
              detail="Describe your ideal customer. This helps me understand who to target and what kind of opportunities to focus on."
              icon={FileText}
              title="Customer Profile"
            />
            <textarea
              aria-label="Customer profile"
              maxLength={500}
              onChange={(event) => onChange("customerProfile", event.target.value)}
              placeholder="Example: International food distributors purchasing private-label healthy snacks in volumes above 500 cartons. They are looking for clean-label, nutritionally rich products with long shelf life."
              rows={4}
              value={customerSales.customerProfile}
            />
            <span className="coo-customer-character-count">{customerSales.customerProfile.length}/500</span>
          </section>

          <section className="coo-product-panel coo-customer-concentration-panel">
            <SectionHeading
              detail="You can add your major customer categories or key accounts."
              icon={Users}
              optional
              title="Customer Concentration"
            />
            <label className="coo-customer-check-row">
              <input
                checked={customerSales.includeCustomerCategories}
                onChange={(event) => onChange("includeCustomerCategories", event.target.checked)}
                type="checkbox"
              />
              Add major customer categories
            </label>
            {customerSales.includeCustomerCategories && (
              <div className="coo-customer-add-list">
                <CustomerChips
                  items={customerSales.customerCategories}
                  label="Customer categories"
                  onRemove={(item) => onChange("customerCategories", customerSales.customerCategories.filter((value) => value !== item))}
                />
                <div className="coo-customer-add-row">
                  <input
                    aria-label="New customer category"
                    onChange={(event) => setCustomerCategoryInput(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        addListItem("customerCategories", customerCategoryInput, setCustomerCategoryInput);
                      }
                    }}
                    placeholder="Add a customer category"
                    value={customerCategoryInput}
                  />
                  <button
                    onClick={() => addListItem("customerCategories", customerCategoryInput, setCustomerCategoryInput)}
                    type="button"
                  >
                    <Plus size={15} /> Add Customer Category
                  </button>
                </div>
              </div>
            )}
            <label className="coo-customer-check-row">
              <input
                checked={customerSales.includeKeyAccounts}
                onChange={(event) => onChange("includeKeyAccounts", event.target.checked)}
                type="checkbox"
              />
              Add selected key accounts
            </label>
            {customerSales.includeKeyAccounts && (
              <div className="coo-customer-add-list">
                <CustomerChips
                  items={customerSales.keyAccounts}
                  label="Selected key accounts"
                  onRemove={(item) => onChange("keyAccounts", customerSales.keyAccounts.filter((value) => value !== item))}
                />
                <div className="coo-customer-add-row">
                  <input
                    aria-label="Selected key account"
                    onChange={(event) => setKeyAccountInput(event.target.value)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                        addListItem("keyAccounts", keyAccountInput, setKeyAccountInput);
                      }
                    }}
                    placeholder="Add a selected account or segment"
                    value={keyAccountInput}
                  />
                  <button onClick={() => addListItem("keyAccounts", keyAccountInput, setKeyAccountInput)} type="button">
                    <Plus size={15} /> Add
                  </button>
                </div>
              </div>
            )}
          </section>

          <section className="coo-product-panel coo-sales-channels-panel">
            <SectionHeading
              detail="Select all sales channels you currently use."
              icon={ShoppingBag}
              title="Sales Channels"
            />
            <ToggleOptions
              className="coo-sales-channels-grid"
              items={salesChannels}
              label="Sales channels"
              onToggle={(value) => toggleArrayValue("salesChannels", value)}
              selected={customerSales.salesChannels}
            />
          </section>

          <section className="coo-product-panel coo-sales-cycle-panel">
            <SectionHeading
              detail="What is your typical sales cycle from initial enquiry to order confirmation?"
              icon={Clock3}
              title="Sales Cycle"
            />
            <label className="coo-customer-visually-labeled">
              <span>Typical sales cycle</span>
              <select
                onChange={(event) => onChange("salesCycle", event.target.value)}
                value={customerSales.salesCycle}
              >
                <option value="">Select sales cycle</option>
                {salesCycles.map((cycle) => <option key={cycle} value={cycle}>{cycle}</option>)}
              </select>
            </label>
            <div className="coo-customer-metric-heading">
              <strong>Key Metrics <span>(Optional)</span></strong>
            </div>
            <div className="coo-customer-order-value">
              <label htmlFor="coo-typical-order-value">Typical Order Value</label>
              <input
                id="coo-typical-order-value"
                onChange={(event) => onChange("typicalOrderValue", event.target.value)}
                placeholder="50,000 – 5,00,000"
                value={customerSales.typicalOrderValue}
              />
              <select
                aria-label="Currency"
                onChange={(event) => onChange("currency", event.target.value)}
                value={customerSales.currency}
              >
                {currencies.map((currency) => <option key={currency} value={currency}>{currency}</option>)}
              </select>
            </div>
          </section>

          <section className="coo-product-panel coo-sales-process-panel">
            <SectionHeading
              detail="List the typical stages a customer goes through from enquiry to order."
              icon={Factory}
              title="Sales Process"
            />
            <div className="coo-sales-stage-list">
              {customerSales.salesStages.map((stage, index) => (
                <div className="coo-sales-stage" key={`${stage}-${index}`}>
                  <button
                    aria-label={`Edit ${stage} stage`}
                    className="coo-sales-stage-edit"
                    onClick={() => startEditingStage(index)}
                    type="button"
                  >
                    <span>{index + 1}</span>
                    <strong>{stage}</strong>
                    <Pencil aria-hidden="true" size={12} />
                  </button>
                  <button
                    aria-label={`Remove ${stage} stage`}
                    className="coo-sales-stage-remove"
                    onClick={() => onChange("salesStages", customerSales.salesStages.filter((_, stageIndex) => stageIndex !== index))}
                    type="button"
                  >
                    <X aria-hidden="true" size={12} />
                  </button>
                </div>
              ))}
            </div>
            {editingStageIndex !== null && (
              <div className="coo-customer-add-row coo-stage-editor">
                <input
                  aria-label={editingStageIndex === -1 ? "New sales stage" : "Edit sales stage"}
                  onChange={(event) => setStageInput(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      saveStage();
                    }
                  }}
                  placeholder="Enter a sales stage"
                  value={stageInput}
                />
                <button onClick={saveStage} type="button">Save Stage</button>
                <button
                  aria-label="Cancel editing stage"
                  className="coo-customer-icon-button"
                  onClick={() => {
                    setEditingStageIndex(null);
                    setStageInput("");
                  }}
                  type="button"
                >
                  <X size={15} />
                </button>
              </div>
            )}
            <button className="coo-customer-add-stage" onClick={() => startEditingStage(null)} type="button">
              <Plus size={15} /> Add / Edit Stage
            </button>
          </section>

          <section className="coo-product-panel coo-crm-panel">
            <SectionHeading
              detail="Connect or name the CRM tools you currently use."
              icon={Store}
              optional
              title="CRM"
            />
            <ToggleOptions
              className="coo-crm-options"
              items={crmOptions}
              label="CRM systems"
              onToggle={(value) => toggleArrayValue("crmSystems", value)}
              selected={customerSales.crmSystems}
            />
            {customerSales.crmSystems.includes("Other") && (
              <input
                aria-label="Other CRM system"
                className="coo-customer-other-crm"
                onChange={(event) => onChange("otherCrmName", event.target.value)}
                placeholder="Enter CRM name"
                value={customerSales.otherCrmName}
              />
            )}
          </section>

          <p aria-live="polite" className="coo-customer-save-status">{draftMessage}</p>
        </section>

        <aside className="coo-customers-aside" aria-label="Customer and sales guidance">
          <section className="coo-customers-assistant coo-product-panel">
            <div className="coo-customers-assistant-message">
              I need to understand who you sell to and how you sell. I don’t need your entire customer database to understand your business.
              <span>— AI COO</span>
            </div>
            <img alt="Your AI COO assistant" src={aiAgentImage} />
          </section>

          <section className="coo-product-panel coo-customers-guidance-card">
            <SectionHeading icon={Lightbulb} title="Why This Matters" />
            <ul>
              <li><Check size={14} /> Helps me identify the right markets, buyers and partners.</li>
              <li><Check size={14} /> Allows me to create relevant Sales, Marketing and Business Development strategies.</li>
              <li><Check size={14} /> Enables better customer research and lead generation.</li>
              <li><Check size={14} /> Helps me coordinate Customer Service effectively.</li>
            </ul>
          </section>

          <section className="coo-customers-important">
            <span className="coo-product-icon"><LockKeyhole size={18} /></span>
            <div>
              <h2>Important Information</h2>
              <p>You do not need to upload your complete customer database.</p>
              <p>Your COO only needs to understand your customer structure at this stage. Detailed customer records can remain in your Secure Company Data Vault or connected CRM.</p>
            </div>
          </section>

          <section className="coo-product-panel coo-customers-guidance-card">
            <SectionHeading icon={CircleHelp} title="Quick Tips" />
            <ul>
              <li><Check size={14} /> Select all customer types that apply.</li>
              <li><Check size={14} /> Keep your customer profile clear and simple.</li>
              <li><Check size={14} /> Add only high-level information at this stage.</li>
              <li><Check size={14} /> You can update this information anytime.</li>
            </ul>
          </section>
        </aside>

        <footer className="coo-customers-actions">
          <button className="coo-back-button" onClick={onBack} type="button">
            <ArrowLeft size={17} /> Back
          </button>
          <button className="coo-save-button" onClick={onSaveProgress} type="button">
            <Save size={17} /> Save &amp; Continue Later
          </button>
          <button className="coo-next-button" onClick={onNext} type="button">
            Next: Markets &amp; International Business <ArrowRight size={17} />
          </button>
        </footer>
      </div>
    </>
  );
}

