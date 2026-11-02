import { enquirySteps } from "./enquiryData";

export default function EnquiryStepper({ activeStep = 0 }) {
  return (
    <div className="enquiry-stepper">
      {enquirySteps.map(([number, title, subtitle], index) => (
        <div key={number} className={`enquiry-step ${index === activeStep ? "is-active" : ""} ${index < activeStep ? "is-complete" : ""}`}>
          <span className="enquiry-step-number">{index < activeStep ? "✓" : number}</span>
          <div><strong>{title}</strong><small>{index === activeStep && index === 0 ? subtitle : subtitle}</small></div>
          {index < enquirySteps.length - 1 && <span className="enquiry-step-line">→</span>}
        </div>
      ))}
    </div>
  );
}
