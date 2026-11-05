import { CheckCircle2, Clock3, Headphones, Mail, Phone, Search, Settings, ShieldCheck } from "lucide-react";

const nextSteps = [
  ["Payment Verified", "We confirm your payment and update your enquiry.", ShieldCheck],
  ["Supplier Search Starts", "Our team starts identifying and contacting verified suppliers.", Search],
  ["Confirmation Email", "You will receive a payment receipt and email confirmation.", Mail],
  ["View Progress", "Track updates in your enquiry dashboard.", Settings],
];

export default function PaymentNextSteps() {
  return (
    <section className="payment-next-steps">
      <div className="payment-next-card">
        <div className="payment-next-heading">
          <h2>What Happens Next?</h2>
          <p>After we receive your payment, the following steps will be initiated for your enquiry.</p>
        </div>
        <div className="payment-next-flow">
          {nextSteps.map(([title, description, Icon], index) => (
            <div className="payment-next-item" key={title}>
              <div className="payment-next-icon"><span>{index + 1}</span><Icon size={34} /></div>
              <div><h3>{title}</h3><p>{description}</p></div>
              {index < nextSteps.length - 1 && <b className="payment-next-arrow">→</b>}
            </div>
          ))}
        </div>
      </div>

      <div className="payment-help-card">
        <div className="payment-help-title"><Headphones size={42} /><div><h2>Need Assistance?</h2><p>Our team is here to help you with your payment or any questions.</p></div></div>
        <a href="mailto:factorytours@igbnworldwide.com"><Mail size={20} /> factorytours@igbnworldwide.com</a>
        <a href="tel:+911145679900"><Phone size={20} /> +91 11 4567 9900</a>
        <span><Clock3 size={20} /> Mon – Fri, 9:00 AM – 6:00 PM (IST)</span>
      </div>
    </section>
  );
}
