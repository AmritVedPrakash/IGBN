import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Building2, Boxes, Brain, BriefcaseBusiness, ChartNoAxesColumnIncreasing, CircleHelp, FileText, Globe2, Headset, LockKeyhole, Network, Settings, ShieldCheck, Sparkles, Target, Users, Workflow } from "lucide-react";
import { Link } from "react-router-dom";
import COORegistrationSidebar from "./COORegistrationSidebar";
import COOCompanyDetails from "./COOCompanyDetails";
import COOProductsServices from "./COOProductsServices";
import COOCustomersSales from "./COOCustomersSales";
import COOMarketsInternational from "./COOMarketsInternational";
import COOBusinessModel from "./COOBusinessModel";
import COOOperationsSupplyChain from "./COOOperationsSupplyChain";
import COOPeopleOrganization from "./COOPeopleOrganization";
import COOCompanyKnowledge from "./COOCompanyKnowledge";
import COOSystemsWorkspace from "./COOSystemsWorkspace";
import COOManagementGoals from "./COOManagementGoals";
import COOAIWorkforce from "./COOAIWorkforce";
import COOMeetEmployees from "./COOMeetEmployees";
import COOConnectAITeam from "./COOConnectAITeam";
import COOConnectBusinessTools from "./COOConnectBusinessTools";
import COOSetPermissionsApprovals from "./COOSetPermissionsApprovals";
import COODefineAITeamWorks from "./COODefineAITeamWorks";
import COOTestAIWorkforce from "./COOTestAIWorkforce";
import COOActivateAIWorkforce from "./COOActivateAIWorkforce";
import COOAIWorkforceControlCenter from "./COOAIWorkforceControlCenter";
import "./coo-registration.css";

const createEmptyWorkforce = () => ({
  addedAddons: [],
});

const createEmptyManagement = () => ({
  commPreference: "executive",
  reportingFrequency: "Weekly",
  reportingFormat: "dashboard",
  autonomousActions: [
    "Research",
    "Analyze",
    "Create reports",
    "Draft emails",
    "Schedule meetings",
    "Organize information",
    "Prepare documents",
  ],
  requireApprovalActions: [
    "Create quotations",
    "Make purchases",
    "Approve payments",
    "Make strategic decisions",
    "Change pricing",
  ],
  businessPrinciples: [
    "Never disclose confidential pricing or commercial terms.",
    "Never make financial commitments without approval.",
    "Never contact existing customers without checking CRM history.",
    "Never share one customer's information with another customer.",
  ],
  selectedGoals: [
    "Increase Revenue",
    "Enter New Countries",
    "Increase Exports",
    "Improve Productivity",
    "Improve Operational Control",
    "Launch New Products",
    "Reduce Founder Workload",
  ],
  topPriorities: [
    "Increase Revenue",
    "Enter New Countries",
    "Reduce Founder Workload",
  ],
  primaryOutcome:
    "Increase revenue by 30%, enter three new international markets and reduce founder involvement in daily operations.",
});

const createEmptySystems = () => ({
  connectedSystems: [
    "gmail",
    "whatsapp",
    "hubspot",
    "tally",
    "sap_erp",
    "google_drive",
    "google_workspace",
    "microsoft_365",
    "google_calendar",
  ],
  otherSystems: "",
});

const createEmptyKnowledge = () => ({
  uploadedFilesByCategory: {},
  processSteps: [
    { id: 1, title: "Lead Received" },
    { id: 2, title: "Sales Qualification" },
    { id: 3, title: "Technical Review" },
    { id: 4, title: "Quotation" },
    { id: 5, title: "Management Approval" },
    { id: 6, title: "Customer Confirmation" },
    { id: 7, title: "Production" },
    { id: 8, title: "Dispatch" },
  ],
});

const createEmptyPeople = () => ({
  founderName: "Roopali Chauhan",
  founderPosition: "Founder & CEO",
  founderResponsibilities: "Overall strategy, international business, key client relationships",
  teamMembers: [
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
  ],
  departments: [
    "Sales",
    "Business Development",
    "Finance",
    "Operations",
    "Procurement",
    "Production",
    "Quality",
    "Marketing",
  ],
  keyDependencies: [
    "Sales",
    "Customer Relationships",
    "Approvals",
    "Strategy",
    "International Business",
  ],
  orgFileName: "",
});

const createEmptyOperations = () => ({
  doYouManufacture: true,
  manufacturingLocations: ["Delhi, India", "Jaipur, India"],
  leadTime: "15",
  leadTimeUnit: "Days",
  majorProductCategories: ["Healthy Snacks", "Bakery Products"],
  capacityUtilization: "70",
  productionCapacity: "50,000",
  productionCapacityUnit: "Units/month",
  majorProcurementCategories: ["Raw Materials", "Packaging", "Ingredients"],
  poSystem: "ERP System",
  procurementFrequency: "Monthly",
  procurementPaymentTerms: "Net 30",
  purchaseApprovalProcess: "Management + Finance Team",
  doYouMaintainInventory: true,
  inventoryCategories: ["Finished Goods", "Raw Materials", "Packaging"],
  warehouseLocations: ["Delhi", "Mumbai", "Jaipur"],
  inventorySystem: "Zoho Inventory",
  stockLevel: "1 – 2 months",
  reorderProcess: "Automatic (Based on Stock Level)",
  logisticsModels: ["3PL", "Freight Forwarder"],
  exportDocumentation: ["External Agent"],
  qualityProcess: "Multiple quality checks at raw material, production and final packaging.",
  certifications: ["FSSAI", "ISO 22000", "HACCP"],
});

const createEmptyFinancialModel = () => ({
  revenueModels: ["Product Sales", "Service Fees", "Distribution Margin"],
  companySize: "₹1 – 5 Crore",
  minOrderValue: "50,000",
  maxOrderValue: "5,00,000",
  currency: "INR",
  salesCycle: "1 – 3 months",
  paymentTerms: ["Advance", "Net 30", "LC"],
  commercialRules: `• We never sell below 20% gross margin.\n• Orders above ₹10 lakh require founder approval.\n• New international customers require verification.\n• Quotations must follow approved pricing templates.\n• We provide 5% additional discount for annual contracts.`,
  vaultDocuments: [],
});

const createEmptyMarkets = () => ({
  currentRegions: ["India", "Middle East", "Europe", "Asia-Pacific"],
  currentCountries: ["India", "UAE", "Saudi Arabia", "Germany", "United States"],
  exportStatus: "Yes, currently exporting",
  countriesCurrentlyServed: ["UAE", "Saudi Arabia", "Germany"],
  mainExportProducts: ["Millet Cookies", "Protein Snacks"],
  internationalCustomerTypes: ["Distributors", "Retailers", "Importers"],
  exportChannels: ["Distributors", "Agents"],
  typicalShipmentFrequency: "Monthly",
  typicalIncoterms: "FOB",
  typicalPaymentTerms: "30% Advance, 70% against BL",
  expansionInterest: "Yes",
  targetCountries: ["USA", "Australia", "Japan", "South Africa"],
  targetRegions: ["North America", "Asia-Pacific", "Africa"],
  productsForExpansion: ["Healthy Snacks", "Private Label Products"],
  challenges: ["Finding distributors", "Finding qualified buyers", "Regulations", "Market awareness"],
  otherChallenge: "",
});

const createEmptyProduct = () => ({
  name: "",
  sku: "",
  category: "",
  productType: "",
  description: "",
  sellingUnit: "Per box",
  minimumOrderQuantity: "",
  typicalOrderQuantity: "",
  leadTime: "",
  productionCapacity: "",
  ingredients: "",
  certifications: [],
  hsCode: "",
  packagingDetails: "",
  storageConditions: "",
  privateLabelAvailable: false,
  oemAvailable: false,
  documents: {},
});

const createEmptyCustomerSales = () => ({
  customerTypes: [],
  industries: [],
  customerProfile: "",
  includeCustomerCategories: false,
  customerCategories: [],
  includeKeyAccounts: false,
  keyAccounts: [],
  salesChannels: [],
  salesCycle: "",
  typicalOrderValue: "",
  currency: "INR",
  salesStages: ["Lead", "Qualification", "Meeting", "Proposal", "Negotiation", "Order", "Delivery", "Follow-up"],
  crmSystems: [],
  otherCrmName: "",
});

const companyAreas = [
  { icon: Building2, title: "Company" },
  { icon: Boxes, title: "Products & Services" },
  { icon: Users, title: "Customers" },
  { icon: Globe2, title: "Markets" },
  { icon: ChartNoAxesColumnIncreasing, title: "Business Model" },
  { icon: Settings, title: "Operations" },
  { icon: Network, title: "Organization" },
  { icon: FileText, title: "Processes" },
  { icon: BriefcaseBusiness, title: "Systems" },
  { icon: Target, title: "Goals & Decision Rules" },
];

const howItWorks = [
  { icon: FileText, title: "Tell Us About Your Business", detail: "Give your COO the foundation." },
  { icon: Boxes, title: "Add Your Business Knowledge", detail: "Products, customers, markets, operations and processes." },
  { icon: Brain, title: "Build Your Company Brain", detail: "Your information is organized into a structured profile." },
  { icon: Users, title: "Hire Your AI Employees", detail: "Choose the AI workforce you need." },
  { icon: Workflow, title: "Connect Your Systems", detail: "Connect approved business tools when required." },
  { icon: ShieldCheck, title: "Control Access", detail: "Decide what each AI employee can access." },
];

export default function COORegistration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [companyDetails, setCompanyDetails] = useState({
    legalName: "",
    brandName: "",
    country: "",
    state: "",
    city: "",
    yearEstablished: "",
    companyType: [],
    website: "",
    primaryIndustry: "",
    secondaryIndustry: "",
  });
  const [draftMessage, setDraftMessage] = useState("");
  const [products, setProducts] = useState([]);
  const [productDraft, setProductDraft] = useState(createEmptyProduct);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [customerSales, setCustomerSales] = useState(createEmptyCustomerSales);
  const [currentMarkets, setCurrentMarkets] = useState(["India"]);
  const [targetMarkets, setTargetMarkets] = useState([]);
  const [marketsData, setMarketsData] = useState(createEmptyMarkets);
  const [financialData, setFinancialData] = useState(createEmptyFinancialModel);
  const [operationsData, setOperationsData] = useState(createEmptyOperations);
  const [peopleData, setPeopleData] = useState(createEmptyPeople);
  const [knowledgeData, setKnowledgeData] = useState(createEmptyKnowledge);
  const [systemsData, setSystemsData] = useState(createEmptySystems);
  const [managementData, setManagementData] = useState(createEmptyManagement);
  const [workforceData, setWorkforceData] = useState(createEmptyWorkforce);

  useEffect(() => {
    try {
      const savedDetails = window.localStorage.getItem("igbn-ai-coo-company-details");
      if (!savedDetails) return;

      const savedDraft = JSON.parse(savedDetails);
      if (!savedDraft || typeof savedDraft !== "object" || Array.isArray(savedDraft)) {
        throw new Error("Saved company details have an unexpected format.");
      }

      const hasNestedDetails = Object.prototype.hasOwnProperty.call(savedDraft, "companyDetails");
      const draftDetails = hasNestedDetails ? savedDraft.companyDetails : savedDraft;
      if (typeof draftDetails !== "object" || Array.isArray(draftDetails)) {
        throw new Error("Saved company details have an unexpected format.");
      }

      if (
        Object.prototype.hasOwnProperty.call(savedDraft, "currentStep") &&
        (!Number.isInteger(savedDraft.currentStep) || savedDraft.currentStep < 1 || savedDraft.currentStep > 20)
      ) {
        throw new Error("Saved registration progress has an unexpected value.");
      }

      const { companyProfile: _companyProfile, ...savedCompanyDetails } = draftDetails;
      setCompanyDetails((previous) => ({
        ...previous,
        ...savedCompanyDetails,
        companyType: Array.isArray(savedCompanyDetails.companyType) ? savedCompanyDetails.companyType : [],
      }));
      setProducts(Array.isArray(savedDraft.products) ? savedDraft.products : []);
      if (savedDraft.productDraft && typeof savedDraft.productDraft === "object" && !Array.isArray(savedDraft.productDraft)) {
        const restoredProductDraft = { ...createEmptyProduct(), ...savedDraft.productDraft };
        restoredProductDraft.certifications = Array.isArray(savedDraft.productDraft.certifications)
          ? savedDraft.productDraft.certifications
          : [];
        restoredProductDraft.documents = savedDraft.productDraft.documents &&
          typeof savedDraft.productDraft.documents === "object" &&
          !Array.isArray(savedDraft.productDraft.documents)
          ? savedDraft.productDraft.documents
          : {};
        setProductDraft(restoredProductDraft);
      }
      if (savedDraft.customerSales && typeof savedDraft.customerSales === "object" && !Array.isArray(savedDraft.customerSales)) {
        const defaults = createEmptyCustomerSales();
        const restoredCustomerSales = { ...defaults, ...savedDraft.customerSales };
        ["customerTypes", "industries", "customerCategories", "keyAccounts", "salesChannels", "salesStages", "crmSystems"]
          .forEach((field) => {
            restoredCustomerSales[field] = Array.isArray(restoredCustomerSales[field])
              ? restoredCustomerSales[field].filter((value) => typeof value === "string")
              : defaults[field];
          });
        if (typeof restoredCustomerSales.customerProfile !== "string") restoredCustomerSales.customerProfile = "";
        if (typeof restoredCustomerSales.otherCrmName !== "string") restoredCustomerSales.otherCrmName = "";
        if (typeof restoredCustomerSales.includeCustomerCategories !== "boolean") {
          restoredCustomerSales.includeCustomerCategories = defaults.includeCustomerCategories;
        }
        if (typeof restoredCustomerSales.includeKeyAccounts !== "boolean") {
          restoredCustomerSales.includeKeyAccounts = defaults.includeKeyAccounts;
        }
        if (typeof restoredCustomerSales.salesCycle !== "string") restoredCustomerSales.salesCycle = "";
        if (typeof restoredCustomerSales.typicalOrderValue !== "string") restoredCustomerSales.typicalOrderValue = "";
        if (typeof restoredCustomerSales.currency !== "string") restoredCustomerSales.currency = defaults.currency;
        setCustomerSales(restoredCustomerSales);
      }
      if (Array.isArray(savedDraft.currentMarkets)) setCurrentMarkets(savedDraft.currentMarkets);
      if (Array.isArray(savedDraft.targetMarkets)) setTargetMarkets(savedDraft.targetMarkets);
      if (savedDraft.marketsData && typeof savedDraft.marketsData === "object" && !Array.isArray(savedDraft.marketsData)) {
        setMarketsData((previous) => ({ ...previous, ...savedDraft.marketsData }));
      }
      if (savedDraft.financialData && typeof savedDraft.financialData === "object" && !Array.isArray(savedDraft.financialData)) {
        setFinancialData((previous) => ({ ...previous, ...savedDraft.financialData }));
      }
      if (savedDraft.operationsData && typeof savedDraft.operationsData === "object" && !Array.isArray(savedDraft.operationsData)) {
        setOperationsData((previous) => ({ ...previous, ...savedDraft.operationsData }));
      }
      if (savedDraft.peopleData && typeof savedDraft.peopleData === "object" && !Array.isArray(savedDraft.peopleData)) {
        setPeopleData((previous) => ({ ...previous, ...savedDraft.peopleData }));
      }
      if (savedDraft.knowledgeData && typeof savedDraft.knowledgeData === "object" && !Array.isArray(savedDraft.knowledgeData)) {
        setKnowledgeData((previous) => ({ ...previous, ...savedDraft.knowledgeData }));
      }
      if (savedDraft.systemsData && typeof savedDraft.systemsData === "object" && !Array.isArray(savedDraft.systemsData)) {
        setSystemsData((previous) => ({ ...previous, ...savedDraft.systemsData }));
      }
      if (savedDraft.managementData && typeof savedDraft.managementData === "object" && !Array.isArray(savedDraft.managementData)) {
        setManagementData((previous) => ({ ...previous, ...savedDraft.managementData }));
      }
      if (savedDraft.workforceData && typeof savedDraft.workforceData === "object" && !Array.isArray(savedDraft.workforceData)) {
        setWorkforceData((previous) => ({ ...previous, ...savedDraft.workforceData }));
      }
      if (typeof savedDraft.selectedProductId === "string") setSelectedProductId(savedDraft.selectedProductId);
      if (Object.prototype.hasOwnProperty.call(savedDraft, "currentStep")) {
        setCurrentStep(savedDraft.currentStep);
      }
      setDraftMessage("Your saved company details have been restored.");
    } catch (error) {
      setDraftMessage(`Saved company details could not be loaded: ${error.message}`);
    }
  }, []);

  const updateCompanyDetails = (field, value) => {
    setCompanyDetails((previous) => ({ ...previous, [field]: value }));
  };

  const toggleCompanyType = (type) => {
    setCompanyDetails((previous) => ({
      ...previous,
      companyType: previous.companyType.includes(type)
        ? previous.companyType.filter((selectedType) => selectedType !== type)
        : [...previous.companyType, type],
    }));
  };

  const saveDraft = (step = currentStep, changes = {}) => {
    try {
      const { companyProfile: _companyProfile, ...savedCompanyDetails } = companyDetails;
      window.localStorage.setItem(
        "igbn-ai-coo-company-details",
        JSON.stringify({
          currentStep: step,
          companyDetails: savedCompanyDetails,
          products: changes.products ?? products,
          productDraft: changes.productDraft ?? productDraft,
          customerSales: changes.customerSales ?? customerSales,
          selectedProductId: Object.prototype.hasOwnProperty.call(changes, "selectedProductId")
            ? changes.selectedProductId
            : selectedProductId,
          currentMarkets: changes.currentMarkets ?? currentMarkets,
          targetMarkets: changes.targetMarkets ?? targetMarkets,
          marketsData: changes.marketsData ?? marketsData,
          financialData: changes.financialData ?? financialData,
          operationsData: changes.operationsData ?? operationsData,
          peopleData: changes.peopleData ?? peopleData,
          knowledgeData: changes.knowledgeData ?? knowledgeData,
          systemsData: changes.systemsData ?? systemsData,
          managementData: changes.managementData ?? managementData,
          workforceData: changes.workforceData ?? workforceData,
        }),
      );
      setDraftMessage("Your progress has been saved on this device.");
      return true;
    } catch (error) {
      setDraftMessage(`Your progress could not be saved: ${error.message}`);
      return false;
    }
  };

  const navigateToStep = (targetStep) => {
    saveDraft(targetStep);
    setCurrentStep(targetStep);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 50);
    }
  };

  const updateProduct = (field, value) => {
    setProductDraft((previous) => ({ ...previous, [field]: value }));
  };

  const updateCustomerSales = (field, value) => {
    setCustomerSales((previous) => ({ ...previous, [field]: value }));
  };

  const updateMarketsData = (field, value) => {
    setMarketsData((previous) => ({ ...previous, [field]: value }));
  };

  const updateFinancialData = (field, value) => {
    setFinancialData((previous) => ({ ...previous, [field]: value }));
  };

  const updateOperationsData = (field, value) => {
    setOperationsData((previous) => ({ ...previous, [field]: value }));
  };

  const updatePeopleData = (field, value) => {
    setPeopleData((previous) => ({ ...previous, [field]: value }));
  };

  const updateKnowledgeData = (field, value) => {
    setKnowledgeData((previous) => ({ ...previous, [field]: value }));
  };

  const updateSystemsData = (field, value) => {
    setSystemsData((previous) => ({ ...previous, [field]: value }));
  };

  const updateManagementData = (field, value) => {
    setManagementData((previous) => ({ ...previous, [field]: value }));
  };

  const updateWorkforceData = (field, value) => {
    setWorkforceData((previous) => ({ ...previous, [field]: value }));
  };

  const saveProductAndAddAnother = (nextProduct) => {
    const savedProduct = selectedProductId
      ? { ...nextProduct, id: selectedProductId }
      : { ...nextProduct, id: `product-${Date.now()}` };
    const nextProducts = selectedProductId
      ? products.map((product) => product.id === selectedProductId ? savedProduct : product)
      : [...products, savedProduct];
    const emptyProduct = createEmptyProduct();

    setProducts(nextProducts);
    setProductDraft(emptyProduct);
    setSelectedProductId(null);
    saveDraft(3, { products: nextProducts, productDraft: emptyProduct, selectedProductId: null });
  };

  const selectProduct = (product) => {
    setSelectedProductId(product.id);
    setProductDraft({ ...createEmptyProduct(), ...product });
  };

  const startNewProduct = () => {
    setSelectedProductId(null);
    setProductDraft(createEmptyProduct());
  };

  if (currentStep === 2) {
    return (
      <main className="coo-registration">
        <COORegistrationSidebar currentStep={currentStep} onStepClick={navigateToStep} />
        <div className="coo-registration-workspace">
          <COOCompanyDetails
            companyDetails={companyDetails}
            currentStep={currentStep - 1}
            onChange={updateCompanyDetails}
            onCompanyTypeToggle={toggleCompanyType}
            onBack={() => setCurrentStep(1)}
            onSave={() => saveDraft(2)}
            onNext={() => {
              saveDraft(3);
              setCurrentStep(3);
            }}
            draftMessage={draftMessage}
          />
        </div>
      </main>
    );
  }

  if (currentStep === 3) {
    return (
      <main className="coo-registration">
        <COORegistrationSidebar currentStep={currentStep} onStepClick={navigateToStep} />
        <div className="coo-registration-workspace">
          <COOProductsServices
            currentStep={currentStep - 1}
            currentMarkets={currentMarkets}
            draftMessage={draftMessage}
            onBack={() => setCurrentStep(2)}
            onCurrentMarketsChange={setCurrentMarkets}
            onDraftChange={updateProduct}
            onSaveProduct={saveProductAndAddAnother}
            onSaveProgress={() => saveDraft(3)}
            onSelectProduct={selectProduct}
            onStartNewProduct={startNewProduct}
            onTargetMarketsChange={setTargetMarkets}
            productDraft={productDraft}
            products={products}
            selectedProductId={selectedProductId}
            targetMarkets={targetMarkets}
            companyIndustry={companyDetails.primaryIndustry}
            onNext={() => {
              saveDraft(4);
              setCurrentStep(4);
            }}
          />
        </div>
      </main>
    );
  }

  if (currentStep === 4) {
    return (
      <main className="coo-registration">
        <COORegistrationSidebar currentStep={currentStep} onStepClick={navigateToStep} />
        <div className="coo-registration-workspace">
          <COOCustomersSales
            currentStep={currentStep - 1}
            customerSales={customerSales}
            draftMessage={draftMessage}
            onBack={() => setCurrentStep(3)}
            onChange={updateCustomerSales}
            onSaveProgress={() => saveDraft(4)}
            onNext={() => {
              saveDraft(5);
              setCurrentStep(5);
            }}
          />
        </div>
      </main>
    );
  }

  if (currentStep === 5) {
    return (
      <main className="coo-registration">
        <COORegistrationSidebar currentStep={currentStep} onStepClick={navigateToStep} />
        <div className="coo-registration-workspace">
          <COOMarketsInternational
            currentStep={currentStep - 1}
            marketsData={marketsData}
            draftMessage={draftMessage}
            onBack={() => setCurrentStep(4)}
            onChange={updateMarketsData}
            onSaveProgress={() => saveDraft(5)}
            onNext={() => {
              saveDraft(6);
              setCurrentStep(6);
            }}
          />
        </div>
      </main>
    );
  }

  if (currentStep === 6) {
    return (
      <main className="coo-registration">
        <COORegistrationSidebar currentStep={currentStep} onStepClick={navigateToStep} />
        <div className="coo-registration-workspace">
          <COOBusinessModel
            currentStep={currentStep - 1}
            financialData={financialData}
            draftMessage={draftMessage}
            onBack={() => setCurrentStep(5)}
            onChange={updateFinancialData}
            onSaveProgress={() => saveDraft(6)}
            onNext={() => {
              saveDraft(7);
              setCurrentStep(7);
            }}
          />
        </div>
      </main>
    );
  }

  if (currentStep === 7) {
    return (
      <main className="coo-registration">
        <COORegistrationSidebar currentStep={currentStep} onStepClick={navigateToStep} />
        <div className="coo-registration-workspace">
          <COOOperationsSupplyChain
            currentStep={currentStep - 1}
            operationsData={operationsData}
            draftMessage={draftMessage}
            onBack={() => setCurrentStep(6)}
            onChange={updateOperationsData}
            onSaveProgress={() => saveDraft(7)}
            onNext={() => {
              saveDraft(8);
              setCurrentStep(8);
            }}
          />
        </div>
      </main>
    );
  }

  if (currentStep === 8) {
    return (
      <main className="coo-registration">
        <COORegistrationSidebar currentStep={currentStep} onStepClick={navigateToStep} />
        <div className="coo-registration-workspace">
          <COOPeopleOrganization
            currentStep={currentStep - 1}
            peopleData={peopleData}
            draftMessage={draftMessage}
            onBack={() => setCurrentStep(7)}
            onChange={updatePeopleData}
            onSaveProgress={() => saveDraft(8)}
            onNext={() => {
              saveDraft(9);
              setCurrentStep(9);
            }}
          />
        </div>
      </main>
    );
  }

  if (currentStep === 9) {
    return (
      <main className="coo-registration">
        <COORegistrationSidebar currentStep={currentStep} onStepClick={navigateToStep} />
        <div className="coo-registration-workspace">
          <COOCompanyKnowledge
            currentStep={currentStep - 1}
            knowledgeData={knowledgeData}
            draftMessage={draftMessage}
            onBack={() => setCurrentStep(8)}
            onChange={updateKnowledgeData}
            onSaveProgress={() => saveDraft(9)}
            onNext={() => {
              saveDraft(10);
              setCurrentStep(10);
            }}
          />
        </div>
      </main>
    );
  }

  if (currentStep === 10) {
    return (
      <main className="coo-registration">
        <COORegistrationSidebar currentStep={currentStep} onStepClick={navigateToStep} />
        <div className="coo-registration-workspace">
          <COOSystemsWorkspace
            currentStep={currentStep - 1}
            systemsData={systemsData}
            draftMessage={draftMessage}
            onBack={() => setCurrentStep(9)}
            onChange={updateSystemsData}
            onSaveProgress={() => saveDraft(10)}
            onNext={() => {
              saveDraft(11);
              setCurrentStep(11);
            }}
          />
        </div>
      </main>
    );
  }

  if (currentStep === 11) {
    return (
      <main className="coo-registration">
        <COORegistrationSidebar currentStep={currentStep} onStepClick={navigateToStep} />
        <div className="coo-registration-workspace">
          <COOManagementGoals
            currentStep={currentStep - 1}
            managementData={managementData}
            draftMessage={draftMessage}
            onBack={() => setCurrentStep(10)}
            onChange={updateManagementData}
            onSaveProgress={() => saveDraft(11)}
            onNext={() => {
              saveDraft(12);
              setCurrentStep(12);
            }}
          />
        </div>
      </main>
    );
  }

  if (currentStep === 12) {
    return (
      <main className="coo-registration">
        <COORegistrationSidebar currentStep={currentStep} onStepClick={navigateToStep} />
        <div className="coo-registration-workspace">
          <COOAIWorkforce
            currentStep={currentStep - 1}
            totalSteps={19}
            workforceData={workforceData}
            draftMessage={draftMessage}
            onBack={() => navigateToStep(11)}
            onChange={updateWorkforceData}
            onSaveProgress={() => saveDraft(12)}
            onNext={() => navigateToStep(13)}
          />
        </div>
      </main>
    );
  }

  if (currentStep === 13) {
    return (
      <main className="coo-registration">
        <COORegistrationSidebar currentStep={currentStep} onStepClick={navigateToStep} />
        <div className="coo-registration-workspace">
          <COOMeetEmployees
            currentStep={12}
            totalSteps={19}
            draftMessage={draftMessage}
            onBack={() => navigateToStep(12)}
            onSaveProgress={() => saveDraft(13)}
            onNext={() => navigateToStep(14)}
          />
        </div>
      </main>
    );
  }

  if (currentStep === 14) {
    return (
      <main className="coo-registration">
        <COORegistrationSidebar currentStep={currentStep} onStepClick={navigateToStep} />
        <div className="coo-registration-workspace">
          <COOConnectAITeam
            currentStep={13}
            totalSteps={19}
            draftMessage={draftMessage}
            onBack={() => navigateToStep(13)}
            onSaveProgress={() => saveDraft(14)}
            onNext={() => navigateToStep(15)}
          />
        </div>
      </main>
    );
  }

  if (currentStep === 15) {
    return (
      <main className="coo-registration">
        <COORegistrationSidebar currentStep={currentStep} onStepClick={navigateToStep} />
        <div className="coo-registration-workspace">
          <COOConnectBusinessTools
            currentStep={14}
            totalSteps={19}
            draftMessage={draftMessage}
            onBack={() => navigateToStep(14)}
            onSaveProgress={() => saveDraft(15)}
            onNext={() => navigateToStep(16)}
          />
        </div>
      </main>
    );
  }

  if (currentStep === 16) {
    return (
      <main className="coo-registration">
        <COORegistrationSidebar currentStep={currentStep} onStepClick={navigateToStep} />
        <div className="coo-registration-workspace">
          <COOSetPermissionsApprovals
            currentStep={15}
            totalSteps={19}
            draftMessage={draftMessage}
            onBack={() => navigateToStep(15)}
            onSaveProgress={() => saveDraft(16)}
            onNext={() => navigateToStep(17)}
          />
        </div>
      </main>
    );
  }

  if (currentStep === 17) {
    return (
      <main className="coo-registration">
        <COORegistrationSidebar currentStep={currentStep} onStepClick={navigateToStep} />
        <div className="coo-registration-workspace">
          <COODefineAITeamWorks
            currentStep={16}
            totalSteps={19}
            draftMessage={draftMessage}
            onBack={() => navigateToStep(16)}
            onSaveProgress={() => saveDraft(17)}
            onNext={() => navigateToStep(18)}
          />
        </div>
      </main>
    );
  }

  if (currentStep === 18) {
    return (
      <main className="coo-registration">
        <COORegistrationSidebar currentStep={currentStep} onStepClick={navigateToStep} />
        <div className="coo-registration-workspace">
          <COOTestAIWorkforce
            currentStep={17}
            totalSteps={19}
            draftMessage={draftMessage}
            onBack={() => navigateToStep(17)}
            onSaveProgress={() => saveDraft(18)}
            onNext={() => navigateToStep(19)}
          />
        </div>
      </main>
    );
  }

  if (currentStep === 19) {
    return (
      <main className="coo-registration">
        <COORegistrationSidebar currentStep={currentStep} onStepClick={navigateToStep} />
        <div className="coo-registration-workspace">
          <COOActivateAIWorkforce
            currentStep={18}
            totalSteps={19}
            draftMessage={draftMessage}
            onBack={() => navigateToStep(18)}
            onSaveProgress={() => saveDraft(19)}
            onNext={() => navigateToStep(20)}
          />
        </div>
      </main>
    );
  }

  if (currentStep === 20) {
    return (
      <main className="coo-registration">
        <COORegistrationSidebar currentStep={currentStep} onStepClick={navigateToStep} />
        <div className="coo-registration-workspace">
          <COOAIWorkforceControlCenter
            currentStep={19}
            totalSteps={19}
            draftMessage={draftMessage}
            onBack={() => navigateToStep(19)}
            onSaveProgress={() => saveDraft(20)}
            onNext={() => navigateToStep(21)}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="coo-registration">
      <COORegistrationSidebar currentStep={currentStep} onStepClick={navigateToStep} />

      <div className="coo-registration-workspace">
        <header className="coo-progress-header">
          <div className="coo-step-label">STEP {currentStep - 1} OF 19</div>
          <div
            className="coo-progress-track"
            role="progressbar"
            aria-label="Registration progress"
            aria-valuemin={1}
            aria-valuemax={19}
            aria-valuenow={currentStep}
          >
            {Array.from({ length: 19 }, (_, index) => (
              <span
                className={`coo-progress-dot ${index < currentStep - 1 ? "is-complete" : ""} ${index === currentStep - 1 ? "is-current" : ""}`}
                key={index}
              />
            ))}
          </div>
          <span className="coo-progress-count">{currentStep} / 19</span>
        </header>

        <div className="coo-registration-columns">
          <section className="coo-main-content" aria-labelledby="coo-page-title">
            <div className="coo-eyebrow"><Sparkles size={16} /> YOUR AI COO STARTS HERE</div>
            <h1 id="coo-page-title">Build Your <span>Company Brain</span></h1>
            <h2>Meet your AI Chief Operating Officer</h2>
            <p className="coo-intro">
              Before your AI COO can manage your AI workforce, it needs to understand how your
              company works. Start with the information that helps your team make better decisions.
            </p>

            <div className="coo-area-grid" aria-label="Company information your COO will understand">
              {companyAreas.map(({ icon: Icon, title }) => (
                <div className="coo-area-card" key={title}>
                  <Icon aria-hidden="true" size={26} strokeWidth={1.8} />
                  <span>{title}</span>
                </div>
              ))}
            </div>

            <p className="coo-brain-note">
              This information creates your <strong>Company Brain</strong> — the business context
              your AI COO uses to understand your company, coordinate AI employees, and make their
              work relevant to your business.
            </p>

            <section className="coo-how-panel" aria-labelledby="coo-how-title">
              <div className="coo-panel-heading">
                <span className="coo-panel-icon"><Workflow size={20} /></span>
                <h2 id="coo-how-title">How it works</h2>
              </div>
              <div className="coo-how-grid">
                {howItWorks.map(({ icon: Icon, title, detail }, index) => (
                  <article className="coo-how-card" key={title}>
                    <span className="coo-how-number">{index + 1}</span>
                    <Icon className="coo-how-icon" aria-hidden="true" size={22} />
                    <h3>{title}</h3>
                    <p>{detail}</p>
                  </article>
                ))}
              </div>
            </section>

            <div className="coo-bottom-actions">
              <Link className="coo-back-button" to="/">
                <ArrowLeft size={18} /> Back
              </Link>
              <div className="coo-step-hint">You can save your progress and return anytime.</div>
            </div>
          </section>

          <aside className="coo-context-panel" aria-label="Your data and setup guide">
            <section className="coo-vault-card">
              <div className="coo-vault-icon"><LockKeyhole size={23} /></div>
              <h2>Your information stays in your control</h2>
              <p>
                You do not need to upload everything. Start with what your COO needs to know.
              </p>
              <div className="coo-vault-divider" />
              <p>
                Sensitive information can remain in your <strong>Secure Company Data Vault</strong>.
                Access can be limited to approved AI employees and specific tasks.
              </p>
              <div className="coo-vault-badge"><ShieldCheck size={17} /> SECURE DATA VAULT</div>
            </section>

            <section className="coo-help-card">
              <div className="coo-panel-heading">
                <span className="coo-panel-icon"><CircleHelp size={20} /></span>
                <h2>Need a hand?</h2>
              </div>
              <p>Our team can help you set up your Company Brain, one step at a time.</p>
              <a href="mailto:support@igbn.in" className="coo-help-link">
                <Headset size={18} /> Contact support <ArrowRight size={16} />
              </a>
            </section>

            <button
              className="coo-start-button"
              onClick={() => setCurrentStep(2)}
              type="button"
            >
              Start Building My Company Brain <ArrowRight size={18} />
            </button>
          </aside>
        </div>
      </div>
    </main>
  );
}



