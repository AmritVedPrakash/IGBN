import { CheckCircle2, Edit3, FileText, Plane, UserRound, Users } from "lucide-react";
import { enquirySections } from "./enquiryData";

const sectionIcons = [FileText, Plane, FileText, Users, UserRound, UserRound, Plane, FileText];

export default function EnquiryReview({ data, confirmed, onEdit, onConfirm }) {
  return (
    <section className="enquiry-review">
      <div className="enquiry-review-heading">
        <div>
          <h2>Your Enquiry Summary</h2>
          <p>Please review your enquiry details before making the payment.</p>
        </div>
        <button type="button" className="enquiry-edit-button" onClick={onEdit}><Edit3 size={16} /> Edit Details</button>
      </div>

      <div className="enquiry-review-id"><FileText size={20} /><span>Enquiry ID</span><strong>IGFT-2026-00124</strong></div>

      <div className="enquiry-review-sections">
        {enquirySections.map((section, index) => {
          const entries = section.fields
            .map(([name, label]) => ({ label: label.replace(" (Optional)", ""), value: data[name] }))
            .filter(({ value }) => value);
          if (!entries.length) return null;
          const Icon = sectionIcons[index] || FileText;

          return (
            <div className="enquiry-review-section" key={section.number}>
              <div className="enquiry-review-section-icon"><Icon size={22} /></div>
              <div className="enquiry-review-section-content">
                <h3>{section.title}</h3>
                <div className="enquiry-review-values">
                  {entries.map(({ label, value }) => <p key={label}><span>{label}</span><strong>{value}</strong></p>)}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {confirmed ? (
        <div className="enquiry-confirmed"><CheckCircle2 size={22} /><div><strong>Review confirmed successfully.</strong><span>We will take you to the processing fee step next.</span></div></div>
      ) : (
        <button type="button" className="enquiry-confirm-button" onClick={onConfirm}>Confirm & Continue to Next Step <span>→</span></button>
      )}
    </section>
  );
}
