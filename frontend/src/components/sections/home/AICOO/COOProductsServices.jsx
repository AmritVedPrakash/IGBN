import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Box,
  Check,
  ChevronRight,
  CircleHelp,
  FileText,
  Globe2,
  Lightbulb,
  LockKeyhole,
  Package,
  Plus,
  Save,
  Upload,
} from "lucide-react";
import aiAgentImage from "../../../../assets/igbndivision/aiagent.png";

const markets = [
  "India",
  "UAE",
  "Saudi Arabia",
  "Germany",
  "United Kingdom",
  "USA",
  "Australia",
  "Japan",
  "Singapore",
  "South Africa",
];

const productTypes = ["Finished Product", "Raw Material", "Component", "Service"];
const sellingUnits = ["Per box", "Per piece", "Per kg", "Per unit", "Per service"];
const certifications = ["GMP", "Non-GMO", "FSSAI", "ISO 22000"];
const starterProducts = [
  {
    id: "starter-millet-cookies",
    name: "Millet Cookies",
    sku: "MC001",
    category: "Healthy Snacks",
    productType: "Finished Product",
    description: "Ready-to-eat millet-based cookies made with natural ingredients. High in fibre, no maida, no preservatives. Available in multiple flavours.",
    sellingUnit: "Per box",
    minimumOrderQuantity: "500 boxes",
    typicalOrderQuantity: "1,000 – 5,000 boxes",
    leadTime: "15",
    productionCapacity: "50,000",
    ingredients: "Millet flour, jaggery, almonds",
    certifications: ["FSSAI"],
    hsCode: "1905.31",
    packagingDetails: "200g per box (10 cookies)",
    storageConditions: "Cool & Dry Place",
    privateLabelAvailable: true,
    oemAvailable: true,
    documents: {},
  },
  {
    id: "starter-protein-snack-bites",
    name: "Protein Snack Bites",
    category: "Functional Foods",
    productType: "Finished Product",
    description: "Protein-rich snack bites made for convenient everyday nutrition.",
    sellingUnit: "Per box",
    minimumOrderQuantity: "500 boxes",
  },
  {
    id: "starter-functional-chocolates",
    name: "Functional Chocolates",
    category: "Functional Foods",
    productType: "Finished Product",
    description: "Functional chocolates made with ingredients selected for everyday wellness.",
    sellingUnit: "Per box",
    minimumOrderQuantity: "500 boxes",
  },
  {
    id: "starter-gluten-free-snacks",
    name: "Gluten-Free Snacks",
    category: "Healthy Foods",
    productType: "Finished Product",
    description: "Gluten-free snacks made for customers looking for convenient alternatives.",
    sellingUnit: "Per box",
    minimumOrderQuantity: "500 boxes",
  },
  {
    id: "starter-organic-spices",
    name: "Organic Spices",
    category: "Food Ingredients",
    productType: "Raw Material",
    description: "Organic spices sourced and packed for food businesses and retailers.",
    sellingUnit: "Per kg",
    minimumOrderQuantity: "100 kg",
  },
  {
    id: "starter-packaging-machine",
    name: "Packaging Machine",
    category: "Machinery",
    productType: "Finished Product",
    description: "Packaging equipment for food production and processing operations.",
    sellingUnit: "Per unit",
    minimumOrderQuantity: "1 unit",
  },
  {
    id: "starter-private-label-service",
    name: "Private Label & OEM Service",
    category: "Professional Services",
    productType: "Service",
    description: "Private-label and OEM support for product development, packaging and production.",
    sellingUnit: "Per service",
    minimumOrderQuantity: "1 project",
  },
];
const documentTypes = [
  { id: "catalogue", label: "Product Catalogue", formats: "PDF, DOC, DOCX, XLS, XLSX" },
  { id: "brochure", label: "Product Brochure", formats: "PDF, DOC, DOCX, XLS, XLSX" },
  { id: "specifications", label: "Product Specifications", formats: "PDF, DOC, DOCX, XLS, XLSX" },
];

function Field({ id, label, required, children }) {
  return (
    <div className="coo-product-field">
      <label htmlFor={id}>
        {label} {required && <span aria-hidden="true">*</span>}
      </label>
      {children}
    </div>
  );
}

function MarketPicker({ label, selected, onChange, optional = false }) {
  const addMarket = (market) => {
    if (market && !selected.includes(market)) onChange([...selected, market]);
  };

  return (
    <div className="coo-market-picker">
      <div className="coo-market-label">
        <strong>{label}</strong>
        {optional && <span>Optional</span>}
      </div>
      <div className="coo-market-control">
        <div className="coo-market-chips">
          {selected.map((market) => (
            <button
              aria-label={`Remove ${market} from ${label.toLowerCase()}`}
              className="coo-market-chip"
              key={market}
              onClick={() => onChange(selected.filter((item) => item !== market))}
              type="button"
            >
              {market} <span aria-hidden="true">×</span>
            </button>
          ))}
          {selected.length === 0 && <span className="coo-market-empty">Choose markets</span>}
        </div>
        <select
          aria-label={`Add ${label.toLowerCase()}`}
          onChange={(event) => {
            addMarket(event.target.value);
            event.target.value = "";
          }}
          value=""
        >
          <option value="">+</option>
          {markets.filter((market) => !selected.includes(market)).map((market) => (
            <option key={market} value={market}>{market}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default function COOProductsServices({
  currentStep,
  companyIndustry,
  products,
  productDraft,
  selectedProductId,
  currentMarkets,
  targetMarkets,
  draftMessage,
  onDraftChange,
  onSaveProduct,
  onSelectProduct,
  onStartNewProduct,
  onCurrentMarketsChange,
  onTargetMarketsChange,
  onSaveProgress,
  onBack,
  onNext,
}) {
  const [validationMessage, setValidationMessage] = useState("");
  const [selectedStarterId, setSelectedStarterId] = useState(null);

  const categories = companyIndustry === "Food & Beverage"
    ? ["Healthy Snacks", "Healthy Foods", "Functional Foods", "Food Ingredients", "Beverages", "Machinery", "Professional Services", "Other"]
    : ["Finished Goods", "Raw Materials", "Components", "Equipment", "Machinery", "Professional Services", "Other"];

  const updateDraft = (field, value) => {
    onDraftChange(field, value);
    if (validationMessage) setValidationMessage("");
  };

  const selectStarterProduct = (starter) => {
    onStartNewProduct();
    setSelectedStarterId(starter.id);
    Object.entries(starter).forEach(([field, value]) => {
      if (field !== "id") onDraftChange(field, value);
    });
    setValidationMessage("");
  };

  const saveProduct = () => {
    const requiredFields = [
      ["name", "Product / Service Name"],
      ["category", "Category"],
      ["productType", "Product Type"],
      ["description", "Product Description"],
      ["minimumOrderQuantity", "Minimum Order Quantity"],
    ];
    const missingField = requiredFields.find(([field]) => !productDraft[field]?.trim());

    if (missingField) {
      setValidationMessage(`${missingField[1]} is required before you can save this product.`);
      return;
    }

    onSaveProduct(productDraft);
    setSelectedStarterId(null);
    setValidationMessage("");
  };

  const toggleCertification = (certification) => {
    const selected = productDraft.certifications.includes(certification);
    updateDraft(
      "certifications",
      selected
        ? productDraft.certifications.filter((item) => item !== certification)
        : [...productDraft.certifications, certification],
    );
  };

  const updateDocument = (documentId, event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 25 * 1024 * 1024) {
      setValidationMessage("Each product document must be smaller than 25 MB.");
      return;
    }
    updateDraft("documents", { ...productDraft.documents, [documentId]: file.name });
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

      <div className="coo-products-layout">
        <header className="coo-products-title">
          <span className="coo-products-step-number">2.</span>
          <div>
            <h1>What Do <span>You Sell?</span></h1>
            <p>Tell your COO about the products or services your company provides.</p>
          </div>
        </header>

        <section className="coo-products-list coo-product-panel" aria-labelledby="coo-products-list-title">
          <div className="coo-products-panel-heading">
            <span className="coo-product-icon"><Package size={20} /></span>
            <div>
              <h2 id="coo-products-list-title">Your Products / Services</h2>
              <p>Add all major products or services you offer. You can add more anytime.</p>
            </div>
          </div>
          <button
            className="coo-add-product-button"
            onClick={() => {
              onStartNewProduct();
              setSelectedStarterId(null);
              setValidationMessage("");
            }}
            type="button"
          >
            <Plus size={18} /> Add Product / Service
          </button>

          {products.length > 0 && (
            <div className="coo-saved-products" aria-label="Saved products">
              {products.map((product) => (
                <button
                  aria-current={selectedProductId === product.id ? "true" : undefined}
                  className={`coo-saved-product ${selectedProductId === product.id ? "is-selected" : ""}`}
                  key={product.id}
                  onClick={() => {
                    setSelectedStarterId(null);
                    onSelectProduct(product);
                  }}
                  type="button"
                >
                  <span className="coo-saved-product-icon"><Box size={20} /></span>
                  <span className="coo-saved-product-copy">
                    <strong>{product.name}</strong>
                    <span>{product.category || "Product / Service"}</span>
                    <span>{product.productType || "Details in progress"}</span>
                  </span>
                  <ChevronRight size={17} />
                </button>
              ))}
            </div>
          )}
          <div className="coo-starter-products">
            <div className="coo-starter-products-heading">
              <strong>{products.length > 0 ? "Add another product or service" : "Product & service examples"}</strong>
              <span>Click a card to fill in its details.</span>
            </div>
            <div className="coo-saved-products" aria-label="Example products and optional services">
              {starterProducts.map((starter) => (
                <button
                  aria-pressed={selectedStarterId === starter.id}
                  className={`coo-saved-product coo-starter-product ${selectedStarterId === starter.id ? "is-selected" : ""}`}
                  key={starter.id}
                  onClick={() => selectStarterProduct(starter)}
                  type="button"
                >
                  <span className="coo-saved-product-icon"><Package size={20} /></span>
                  <span className="coo-saved-product-copy">
                    <strong>{starter.name}</strong>
                    <span>{starter.category}</span>
                    <span>{starter.productType}{starter.productType === "Service" ? " · Optional" : ""}</span>
                  </span>
                  <ChevronRight size={17} />
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="coo-product-details" aria-label="Product information">
          <div className="coo-product-panel">
            <div className="coo-products-panel-heading">
              <span className="coo-product-icon"><Box size={20} /></span>
              <div>
                <h2>Product / Service Details</h2>
                <p>Provide key information about this product or service.</p>
              </div>
            </div>
            <div className="coo-product-field-grid">
              <Field id="coo-product-name" label="Product / Service Name" required>
                <input
                  id="coo-product-name"
                  onChange={(event) => updateDraft("name", event.target.value)}
                  placeholder="Milk Cookies"
                  value={productDraft.name}
                />
              </Field>
              <Field id="coo-product-sku" label="SKU / Product Code (Optional)">
                <input
                  id="coo-product-sku"
                  onChange={(event) => updateDraft("sku", event.target.value)}
                  placeholder="MC001"
                  value={productDraft.sku}
                />
              </Field>
              <Field id="coo-product-category" label="Category" required>
                <select
                  id="coo-product-category"
                  onChange={(event) => updateDraft("category", event.target.value)}
                  value={productDraft.category}
                >
                  <option value="">Select category</option>
                  {categories.map((category) => <option key={category} value={category}>{category}</option>)}
                </select>
              </Field>
              <Field id="coo-product-type" label="Product Type" required>
                <select
                  id="coo-product-type"
                  onChange={(event) => updateDraft("productType", event.target.value)}
                  value={productDraft.productType}
                >
                  <option value="">Select type</option>
                  {productTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                </select>
              </Field>
              <div className="coo-product-field coo-product-description">
                <label htmlFor="coo-product-description">
                  Product Description <span aria-hidden="true">*</span>
                </label>
                <textarea
                  id="coo-product-description"
                  maxLength={600}
                  onChange={(event) => updateDraft("description", event.target.value)}
                  placeholder="Describe the product, its ingredients, features or key benefits."
                  rows={3}
                  value={productDraft.description}
                />
                <span className="coo-character-count">{productDraft.description.length}/600</span>
              </div>
            </div>
          </div>

          <section className="coo-product-panel coo-commercial-panel">
            <div className="coo-products-panel-heading">
              <span className="coo-product-icon"><span className="coo-currency-icon">₹</span></span>
              <div>
                <h2>Commercial Information</h2>
                <p>Tell me about the key commercial details.</p>
              </div>
            </div>
            <div className="coo-product-field-grid coo-commercial-grid">
              <Field id="coo-selling-unit" label="Selling Unit" required>
                <select
                  id="coo-selling-unit"
                  onChange={(event) => updateDraft("sellingUnit", event.target.value)}
                  value={productDraft.sellingUnit}
                >
                  {sellingUnits.map((unit) => <option key={unit} value={unit}>{unit}</option>)}
                </select>
              </Field>
              <Field id="coo-minimum-order" label="Minimum Order Quantity" required>
                <input
                  id="coo-minimum-order"
                  min="1"
                  onChange={(event) => updateDraft("minimumOrderQuantity", event.target.value)}
                  placeholder="500 boxes"
                  value={productDraft.minimumOrderQuantity}
                />
              </Field>
              <Field id="coo-typical-order" label="Typical Order Quantity">
                <input
                  id="coo-typical-order"
                  onChange={(event) => updateDraft("typicalOrderQuantity", event.target.value)}
                  placeholder="1,000 – 5,000 boxes"
                  value={productDraft.typicalOrderQuantity}
                />
              </Field>
              <Field id="coo-lead-time" label="Typical Lead Time">
                <div className="coo-product-inline-fields">
                  <input
                    aria-label="Typical lead time in days"
                    id="coo-lead-time"
                    min="1"
                    onChange={(event) => updateDraft("leadTime", event.target.value)}
                    placeholder="15"
                    type="number"
                    value={productDraft.leadTime}
                  />
                  <span>Days</span>
                </div>
              </Field>
              <Field id="coo-production-capacity" label="Production / Service Capacity">
                <div className="coo-product-inline-fields">
                  <input
                    id="coo-production-capacity"
                    onChange={(event) => updateDraft("productionCapacity", event.target.value)}
                    placeholder="50,000"
                    value={productDraft.productionCapacity}
                  />
                  <span>boxes / month</span>
                </div>
              </Field>
            </div>
          </section>

          <section className="coo-product-panel coo-characteristics-panel">
            <div className="coo-products-panel-heading">
              <span className="coo-product-icon"><BadgeCheck size={20} /></span>
              <div>
                <h2>Product Characteristics <span>(Food &amp; Beverage)</span></h2>
                <p>Provide key product details. Fields may change based on your industry.</p>
              </div>
            </div>
            <div className="coo-product-field-grid coo-characteristics-grid">
              <Field id="coo-ingredients" label="Ingredients">
                <input
                  id="coo-ingredients"
                  onChange={(event) => updateDraft("ingredients", event.target.value)}
                  placeholder="Milk, flour, sugar, almonds"
                  value={productDraft.ingredients}
                />
              </Field>
              <div className="coo-product-field">
                <span className="coo-product-label">Certifications</span>
                <div className="coo-certification-list">
                  {certifications.map((certification) => (
                    <label className="coo-certification-option" key={certification}>
                      <input
                        checked={productDraft.certifications.includes(certification)}
                        onChange={() => toggleCertification(certification)}
                        type="checkbox"
                      />
                      {certification}
                    </label>
                  ))}
                </div>
              </div>
              <Field id="coo-shelf-life" label="Shelf Life">
                <input
                  id="coo-shelf-life"
                  onChange={(event) => updateDraft("shelfLife", event.target.value)}
                  placeholder="9 months"
                  value={productDraft.shelfLife || ""}
                />
              </Field>
              <Field id="coo-hs-code" label="HS Code">
                <input
                  id="coo-hs-code"
                  onChange={(event) => updateDraft("hsCode", event.target.value)}
                  placeholder="1905.31"
                  value={productDraft.hsCode}
                />
              </Field>
              <Field id="coo-packaging-details" label="Packaging Details">
                <input
                  id="coo-packaging-details"
                  onChange={(event) => updateDraft("packagingDetails", event.target.value)}
                  placeholder="200g per box (10 cookies)"
                  value={productDraft.packagingDetails}
                />
              </Field>
              <Field id="coo-storage-conditions" label="Storage Conditions">
                <select
                  id="coo-storage-conditions"
                  onChange={(event) => updateDraft("storageConditions", event.target.value)}
                  value={productDraft.storageConditions}
                >
                  <option value="">Select conditions</option>
                  <option value="Cool & Dry Place">Cool &amp; Dry Place</option>
                  <option value="Refrigerated">Refrigerated</option>
                  <option value="Frozen">Frozen</option>
                  <option value="Room Temperature">Room Temperature</option>
                  <option value="Other">Other</option>
                </select>
              </Field>
            </div>
            <div className="coo-product-availability">
              <label>
                <input
                  checked={productDraft.privateLabelAvailable}
                  onChange={(event) => updateDraft("privateLabelAvailable", event.target.checked)}
                  type="checkbox"
                />
                Private Label Available
              </label>
              <label>
                <input
                  checked={productDraft.oemAvailable}
                  onChange={(event) => updateDraft("oemAvailable", event.target.checked)}
                  type="checkbox"
                />
                OEM Available
              </label>
            </div>
          </section>
          <div aria-live="polite" className="coo-product-feedback">
            {validationMessage || draftMessage}
          </div>
        </section>

        <aside className="coo-products-aside" aria-label="Product upload and guidance">
          <section className="coo-products-assistant coo-product-panel">
            <div className="coo-products-assistant-message">
              The better I understand your products and services, the better I can coordinate Research,
              Sales, Business Development, Customer Service and Operations for your company.
              <span>— AI COO</span>
            </div>
            <img alt="Your AI COO assistant" src={aiAgentImage} />
          </section>

          <section className="coo-product-panel coo-document-panel">
            <div className="coo-products-panel-heading">
              <span className="coo-product-icon"><FileText size={19} /></span>
              <div>
                <h2>Document Upload <span>(Optional)</span></h2>
                <p>Select a product catalogue, brochure or technical specification to keep with this product entry.</p>
              </div>
            </div>
            <div className="coo-document-grid">
              {documentTypes.map(({ id, label, formats }) => (
                <label className="coo-document-card" htmlFor={`coo-document-${id}`} key={id}>
                  <span className="coo-document-icon"><FileText size={17} /></span>
                  <strong>{label}</strong>
                  <span>{productDraft.documents[id] || "Click to upload or drag and drop"}</span>
                  <small>{formats}</small>
                  <Upload size={18} />
                  <input
                    accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.png"
                    className="coo-visually-hidden"
                    id={`coo-document-${id}`}
                    onChange={(event) => updateDocument(id, event)}
                    type="file"
                  />
                </label>
              ))}
            </div>
            <p className="coo-document-footnote">Supported formats: PDF, DOC, DOCX, XLS, XLSX, PPT, JPG, PNG (Max 25 MB each)</p>
          </section>

          <section className="coo-product-privacy">
            <span className="coo-product-icon"><LockKeyhole size={19} /></span>
            <div>
              <h2>You do not need to upload sensitive information.</h2>
              <p>You don’t need to upload proprietary formulas, confidential engineering drawings or sensitive intellectual property.</p>
            </div>
          </section>

          <div className="coo-product-guidance">
            <section className="coo-product-panel coo-why-card">
              <div className="coo-products-panel-heading">
                <span className="coo-guidance-icon"><Lightbulb size={19} /></span>
                <h2>Why This Matters</h2>
              </div>
              <ul>
                <li><Check size={15} /> Helps me understand what you sell or offer.</li>
                <li><Check size={15} /> Allows me to support Research, Sales, Marketing and Operations.</li>
                <li><Check size={15} /> Enables better market analysis and buyer discovery.</li>
                <li><Check size={15} /> Helps me create accurate content and reports.</li>
              </ul>
            </section>
            <section className="coo-product-panel coo-product-tips">
              <div className="coo-products-panel-heading">
                <span className="coo-guidance-icon"><CircleHelp size={19} /></span>
                <h2>Quick Tips</h2>
              </div>
              <ul>
                <li><Check size={15} /> Add your major products or services.</li>
                <li><Check size={15} /> Provide relevant commercial and technical details.</li>
                <li><Check size={15} /> Industry-specific fields will appear automatically.</li>
                <li><Check size={15} /> You can add or update products anytime.</li>
              </ul>
            </section>
          </div>
        </aside>

        <section className="coo-markets-panel coo-product-panel" aria-label="Product markets">
          <span className="coo-markets-icon"><Globe2 size={20} /></span>
          <MarketPicker
            label="Current Markets"
            onChange={onCurrentMarketsChange}
            selected={currentMarkets}
          />
          <MarketPicker
            label="Target Markets"
            onChange={onTargetMarketsChange}
            optional
            selected={targetMarkets}
          />
        </section>

        <footer className="coo-products-actions">
          <button className="coo-back-button" onClick={onBack} type="button">
            <ArrowLeft size={17} /> Back
          </button>
          <button className="coo-save-button" onClick={onSaveProgress} type="button">
            <Save size={17} /> Save &amp; Continue Later
          </button>
          <button className="coo-save-product-button" onClick={saveProduct} type="button">
            <Plus size={18} /> {selectedProductId ? "Save Product Changes" : "Save Product & Add Another"}
          </button>
          <button className="coo-next-button" onClick={onNext} type="button">
            Next: Customers &amp; Sales <ArrowRight size={17} />
          </button>
        </footer>
      </div>
    </>
  );
}

