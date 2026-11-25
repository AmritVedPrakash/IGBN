import { Check, Headset, Globe2 } from "lucide-react";

const registrationSteps = [
  "Welcome",
  "Company Identity & Business Overview",
  "Products & Services",
  "Customers & Sales",
  "Markets & International Business",
  "Business Model & Financial Overview",
  "Operations & Supply Chain",
  "People & Organization",
  "Company Knowledge & Processes",
  "Systems & Digital Workspace",
  "Management Style, Decision Rules & Goals",
  "Build Your AI Workforce",
  "Meet Your AI Employees",
  "Connect Your AI Team to COO",
  "Connect Your Business Tools",
  "Set Permissions & Approvals",
  "Define How Your AI Team Works",
  "Test Your AI Workforce",
  "Activate Your AI Workforce",
  "AI Workforce Control Center",
];

export default function COORegistrationSidebar({ currentStep = 1, onStepClick }) {
  return (
    <aside className="coo-sidebar" aria-label="Registration steps">
      <a className="coo-brand" href="/" aria-label="IGBN home">
        <Globe2 aria-hidden="true" size={44} strokeWidth={1.5} />
        <span className="coo-brand-name">IGBN</span>
        <span className="coo-brand-tagline">Make in India Sell To The World</span>
      </a>

      <nav className="coo-step-nav">
        <ol>
          {registrationSteps.map((step, index) => {
            const stepNumber = index + 1;
            const displayNumber = index === 0 ? null : index; // Welcome has no number; others: 1,2,...19
            const isCompleted = index < currentStep - 1;
            const isClickable = Boolean(onStepClick) && (isCompleted || stepNumber <= currentStep);

            return (
              <li
                className={`coo-nav-step ${isCompleted ? "is-complete" : ""} ${index === currentStep - 1 ? "is-active" : ""} ${isClickable ? "cursor-pointer hover:opacity-90" : ""}`}
                aria-current={index === currentStep - 1 ? "step" : undefined}
                key={step}
                onClick={() => {
                  if (isClickable && onStepClick) {
                    onStepClick(stepNumber);
                  }
                }}
              >
                <span className="coo-nav-number">
                  {isCompleted ? (
                    <Check aria-label="Completed" size={17} />
                  ) : displayNumber !== null ? (
                    displayNumber
                  ) : (
                    <span style={{ fontSize: "10px", lineHeight: 1 }}>✦</span>
                  )}
                </span>
                <span className="coo-nav-label">{step}</span>
              </li>
            );
          })}
        </ol>
      </nav>

      <section className="coo-sidebar-help">
        <Headset aria-hidden="true" size={28} />
        <div>
          <h2>Need Help?</h2>
          <p>Our team is here to assist you at every step.</p>
        </div>
      </section>
    </aside>
  );
}
