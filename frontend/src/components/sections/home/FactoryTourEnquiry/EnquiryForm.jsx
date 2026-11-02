import { useState } from "react";
import { ChevronDown, FileCheck2 } from "lucide-react";
import { enquirySections } from "./enquiryData";

export default function EnquiryForm({ initialValues = {}, onReview }) {
  const [form, setForm] = useState(initialValues);
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));

  return (
    <form className="enquiry-form" onSubmit={(event) => { event.preventDefault(); onReview(form); }}>
      {enquirySections.map((section) => (
        <section key={section.number} className="enquiry-form-section">
          <div className="enquiry-form-section-heading">
            <span>{section.number}</span>
            <h2>{section.title}</h2>
            {section.optional && <em>(Optional)</em>}
          </div>
          <div className="enquiry-fields">
            {section.fields.map(([name, label, type, options]) => (
              <Field key={name} name={name} label={label} type={type} options={options} value={form[name] || ""} onChange={update} />
            ))}
          </div>
        </section>
      ))}

      <section className="enquiry-consent">
        <div className="enquiry-form-section-heading"><span>✓</span><h2>Consent & Terms</h2></div>
        <label><input type="checkbox" required /> I have read and agree to the <a href="/privacy-policy">Privacy Policy</a> and <a href="/terms-and-conditions">Terms & Conditions</a>.</label>
        <label><input type="checkbox" required /> I understand that a non-refundable processing fee of US$ 2 is required to start supplier searching, and the balance of US$ 48 per confirmed supplier meeting will be payable later.</label>
      </section>

      <div className="enquiry-form-actions">
        <button type="button" className="enquiry-secondary"><FileCheck2 size={18} /> Save & Continue<small>(Save enquiry and review later)</small></button>
        <button type="submit" className="enquiry-primary">Review Enquiry <span>→</span><small>(Proceed to review your information)</small></button>
      </div>
    </form>
  );
}

function Field({ name, label, type, options, value, onChange }) {
  const fieldClass = "enquiry-field " + (type === "textarea" ? "enquiry-field-wide" : "");
  const optional = label.includes("(Optional)");

  return (
    <label className={fieldClass}>
      <span>{label}{!optional && <b> *</b>}</span>
      {type === "select" ? (
        <div className="enquiry-select-wrap">
          <select name={name} value={value} onChange={onChange} required={!optional}>
            <option value="" disabled>{options[0]}</option>
            {options.slice(1).map((option) => <option key={option}>{option}</option>)}
          </select>
          <ChevronDown size={16} />
        </div>
      ) : type === "textarea" ? (
        <textarea name={name} placeholder={options} value={value} onChange={onChange} />
      ) : (
        <input name={name} type={type} placeholder={type === "date" ? undefined : options} value={value} onChange={onChange} required={!optional} />
      )}
    </label>
  );
}
