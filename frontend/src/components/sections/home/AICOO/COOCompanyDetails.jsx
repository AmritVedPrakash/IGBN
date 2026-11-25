import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  CircleHelp,
  CloudUpload,
  FileText,
  Lightbulb,
  Save,
} from "lucide-react";
import aiAgentImage from "../../../../assets/igbndivision/aiagent.png";
import foodIndustryImage from "../../../../assets/factory-tours/industry-food-beverages.jpg";
import agricultureIndustryImage from "../../../../assets/homebg/agro-map.png";
import chemicalIndustryImage from "../../../../assets/factory-tours/industry-chemicals-plastics.jpg";
import textileIndustryImage from "../../../../assets/factory-tours/industry-textiles-garments.jpg";
import machineryIndustryImage from "../../../../assets/factory-tours/industry-engineering.jpg";
import electronicsIndustryImage from "../../../../assets/factory-tours/industry-electronics.jpg";

const companyTypes = [
  "Manufacturer",
  "Exporter",
  "Importer",
  "Trader",
  "Distributor",
  "Wholesaler",
  "Retailer",
  "B2B Services",
  "B2C Services",
  "Technology Company",
  "Consulting",
  "OEM",
  "Contract Manufacturer",
  "Marketplace",
  "Other",
];

const industries = [
  { label: "Food & Beverage", image: foodIndustryImage },
  { label: "Agriculture", image: agricultureIndustryImage },
  { label: "Chemicals", image: chemicalIndustryImage },
  { label: "Textiles", image: textileIndustryImage },
  { label: "Machinery", image: machineryIndustryImage },
  { label: "Electronics", image: electronicsIndustryImage },
];

const countries = [
  "India",
  "United States",
  "United Kingdom",
  "United Arab Emirates",
  "Singapore",
  "Other",
];

const companyTypesId = "coo-company-types";

function FormField({ id, label, required, children }) {
  return (
    <div className="coo-form-field">
      <label htmlFor={id}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function COOCompanyDetails({
  companyDetails,
  currentStep,
  onChange,
  onCompanyTypeToggle,
  onBack,
  onSave,
  onNext,
  draftMessage,
}) {
  const handleUpload = (event) => {
    const file = event.target.files?.[0];
    if (file) onChange("companyProfile", file.name);
  };

  return (
    <>
      <header className="coo-progress-header">
        <div className="coo-step-label">STEP {currentStep} OF 19</div>
        <div
          className="coo-progress-track"
          role="progressbar"
          aria-label="Registration progress"
          aria-valuemin={1}
          aria-valuemax={12}
          aria-valuenow={currentStep}
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

      <div className="coo-company-layout">
        <section className="coo-company-form-column" aria-labelledby="coo-company-title">
          <div className="coo-company-title">
            <div className="coo-step-heading-number">1.</div>
            <div>
              <h1 id="coo-company-title">Tell Me About <span>Your Company</span></h1>
              <p>Give your AI COO the foundation it needs to understand who you are, what you do and how your business operates.</p>
            </div>
          </div>

          <section className="coo-form-section">
            <div className="coo-form-section-heading">
              <span className="coo-form-section-icon"><Building2 size={20} /></span>
              <div>
                <h2>1. Basic Company Information</h2>
                <p>Let’s start with the essential details about your company.</p>
              </div>
              <span className="coo-required-note">Required fields <span>*</span></span>
            </div>

            <div className="coo-field-grid">
              <FormField id="coo-legal-name" label="Legal Company Name" required>
                <input
                  autoComplete="organization"
                  id="coo-legal-name"
                  onChange={(event) => onChange("legalName", event.target.value)}
                  placeholder="Enter legal registered name"
                  required
                  value={companyDetails.legalName}
                />
              </FormField>
              <FormField id="coo-country" label="Country of Registration" required>
                <select
                  autoComplete="country-name"
                  id="coo-country"
                  onChange={(event) => onChange("country", event.target.value)}
                  required
                  value={companyDetails.country}
                >
                  <option value="">Select country</option>
                  {countries.map((country) => <option key={country} value={country}>{country}</option>)}
                </select>
              </FormField>
              <FormField id="coo-brand-name" label="Brand / Trading Name">
                <input
                  autoComplete="organization"
                  id="coo-brand-name"
                  onChange={(event) => onChange("brandName", event.target.value)}
                  placeholder="Enter brand or trading name (if different)"
                  value={companyDetails.brandName}
                />
              </FormField>
              <FormField id="coo-state" label="State / Province" required>
                <input
                  autoComplete="address-level1"
                  id="coo-state"
                  onChange={(event) => onChange("state", event.target.value)}
                  placeholder="Enter state / province"
                  required
                  value={companyDetails.state}
                />
              </FormField>
              <FormField id="coo-city" label="City" required>
                <input
                  autoComplete="address-level2"
                  id="coo-city"
                  onChange={(event) => onChange("city", event.target.value)}
                  placeholder="Enter city"
                  required
                  value={companyDetails.city}
                />
              </FormField>
              <FormField id="coo-year" label="Year Established" required>
                <div className="coo-input-with-icon">
                  <input
                    id="coo-year"
                    max={new Date().getFullYear()}
                    min="1800"
                    onChange={(event) => onChange("yearEstablished", event.target.value)}
                    placeholder="Select year"
                    required
                    type="number"
                    value={companyDetails.yearEstablished}
                  />
                  <CalendarDays aria-hidden="true" size={17} />
                </div>
              </FormField>
              <FormField id="coo-website" label="Company Website">
                <input
                  autoComplete="url"
                  id="coo-website"
                  onChange={(event) => onChange("website", event.target.value)}
                  placeholder="https://www.yourcompany.com"
                  type="url"
                  value={companyDetails.website}
                />
              </FormField>
            </div>
          </section>

          <section className="coo-form-section">
            <div className="coo-form-section-heading">
              <span className="coo-form-section-icon"><BriefcaseBusiness size={20} /></span>
              <div>
                <h2>2. What Does Your Company Do?</h2>
                <p>Select all that apply to your business. You can choose multiple options.</p>
              </div>
            </div>
            <div aria-label="Company types" className="coo-company-type-grid" id={companyTypesId} role="group">
              {companyTypes.map((type) => {
                const selected = companyDetails.companyType.includes(type);
                return (
                  <button
                    aria-pressed={selected}
                    className={`coo-company-type ${selected ? "is-selected" : ""}`}
                    key={type}
                    onClick={() => onCompanyTypeToggle(type)}
                    type="button"
                  >
                    <span className="coo-checkbox">{selected && <Check size={14} />}</span>
                    <span>{type}</span>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="coo-form-section">
            <div className="coo-form-section-heading">
              <span className="coo-form-section-icon"><Building2 size={20} /></span>
              <div>
                <h2>3. Industry</h2>
                <p>Select your primary industry and any secondary industries.</p>
              </div>
            </div>
            <div className="coo-industry-selects">
              <FormField id="coo-primary-industry" label="Primary Industry" required>
                <select
                  id="coo-primary-industry"
                  onChange={(event) => onChange("primaryIndustry", event.target.value)}
                  required
                  value={companyDetails.primaryIndustry}
                >
                  <option value="">Select industry</option>
                  {industries.map(({ label }) => <option key={label} value={label}>{label}</option>)}
                  <option value="Other">Other</option>
                </select>
              </FormField>
              <FormField id="coo-secondary-industry" label="Secondary Industry (Optional)">
                <select
                  id="coo-secondary-industry"
                  onChange={(event) => onChange("secondaryIndustry", event.target.value)}
                  value={companyDetails.secondaryIndustry}
                >
                  <option value="">Select industry</option>
                  {industries.map(({ label }) => <option key={label} value={label}>{label}</option>)}
                  <option value="Other">Other</option>
                </select>
              </FormField>
            </div>
            <div className="coo-industry-cards">
              {industries.map(({ label, image }) => (
                <button
                  aria-pressed={companyDetails.primaryIndustry === label}
                  className={`coo-industry-card ${companyDetails.primaryIndustry === label ? "is-selected" : ""}`}
                  key={label}
                  onClick={() => onChange("primaryIndustry", label)}
                  type="button"
                >
                  <img alt="" loading="lazy" src={image} />
                  <span>{label}</span>
                </button>
              ))}
              <button
                className="coo-industry-card coo-more-industries"
                onClick={() => document.getElementById("coo-primary-industry")?.focus()}
                type="button"
              >
                <CircleHelp size={20} />
                <span>More<br />Industries</span>
              </button>
            </div>
          </section>
        </section>

        <aside className="coo-company-aside" aria-label="Company setup help">
          <section className="coo-assistant-card">
            <div className="coo-assistant-message">
              Share your company basics so I can tailor your AI team. No confidential records needed.
              <span>— AI COO</span>
            </div>
            <img alt="Your AI COO assistant" className="coo-assistant-image" src={aiAgentImage} />
          </section>

          <section className="coo-upload-card">
            <div className="coo-aside-section-heading">
              <span className="coo-form-section-icon"><FileText size={19} /></span>
              <div>
                <h2>Optional Upload</h2>
                <p>Company Profile / Presentation (Optional)</p>
              </div>
            </div>
            <p>You can upload your company profile, brochure or presentation. I’ll read and extract the relevant information for you.</p>
            <label className="coo-upload-dropzone" htmlFor="coo-company-profile">
              <CloudUpload size={27} />
              <span>{companyDetails.companyProfile || "Click to upload or drag and drop files"}</span>
              <small>PDF, DOC, DOCX, PPT, JPG, PNG (Max 25 MB)</small>
            </label>
            <input
              accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png"
              className="coo-visually-hidden"
              id="coo-company-profile"
              onChange={handleUpload}
              type="file"
            />
          </section>

          <section className="coo-tips-card">
            <div className="coo-aside-section-heading">
              <span className="coo-tips-icon"><Lightbulb size={21} /></span>
              <h2>Quick Tips</h2>
            </div>
            <ul>
              <li><Check size={16} /> Use your official company name.</li>
              <li><Check size={16} /> Select all business types that apply.</li>
              <li><Check size={16} /> Choose the most relevant industry.</li>
              <li><Check size={16} /> Keep your company description simple and clear.</li>
              <li><Check size={16} /> You can update this information anytime.</li>
            </ul>
          </section>
        </aside>

        <footer className="coo-company-actions">
          <button className="coo-back-button" onClick={onBack} type="button">
            <ArrowLeft size={17} /> Back
          </button>
          <button
            className="coo-save-button"
            onClick={onSave}
            type="button"
          >
            <Save size={17} /> Save & Continue Later
          </button>
          <span aria-live="polite" className="coo-save-status">{draftMessage}</span>
          <button className="coo-next-button" onClick={onNext} type="button">
            Next: Products &amp; Services <ArrowRight size={17} />
          </button>
        </footer>
      </div>
    </>
  );
}

