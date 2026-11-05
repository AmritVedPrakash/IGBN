import { CalendarDays, Check, CheckCircle2, ChevronRight, Clock3, Headphones, Mail, MessageSquare, Search, Settings, ShieldCheck, XCircle } from "lucide-react";

const timeline = [
  ["Processing fee received", "15 Nov 2024, 10:30 AM", "Your payment of US$ 2 has been received successfully.", "complete", CheckCircle2],
  ["Supplier search in progress", "16 Nov 2024, 11:20 AM", "Our team is identifying and contacting verified suppliers in your selected location.", "active", Search],
  ["Supplier availability being checked", "", "We will update you once we receive responses from suppliers.", "pending", null],
  ["Meeting offer ready", "", "You will receive a meeting offer with full supplier details.", "pending", null],
  ["No suitable meeting confirmed (if applicable)", "", "We will inform you in case we are unable to arrange a suitable supplier meeting for your requirements.", "pending", null],
];

export default function SupplierSearchStatus({ onViewOffer }) {
  return (
    <div className="supplier-status-layout">
      <section className="supplier-status-main">
        <div className="supplier-status-header">
          <div className="supplier-status-title"><span><Search size={24} /></span><div><h2>Current Status</h2><small>Last Updated: 16 Nov 2024, 11:20 AM IST</small></div></div>
          <div className="supplier-status-success"><Settings size={31} /><div><strong>Supplier Search In Progress</strong><p>Our team is identifying and contacting verified suppliers based on your requirements.</p></div></div>
        </div>
        <h2 className="supplier-section-title">Progress Timeline</h2>
        <div className="supplier-timeline">
          {timeline.map(([title, date, description, state, Icon]) => (
            <div className={`supplier-timeline-item ${state}`} key={title}>
              <span className="supplier-timeline-dot">{Icon ? <Icon size={18} /> : null}</span>
              <div><strong>{title}</strong>{date && <b>{date}</b>}<p>{description}</p></div>
            </div>
          ))}
        </div>
      </section>

      <aside className="supplier-status-side">
        <section className="supplier-update-card"><div className="supplier-side-heading"><CalendarDays size={24} /><h2>Next Update</h2></div><p>Expected by</p><strong>18 Nov 2024</strong><span>We will update you once we receive responses from suppliers.</span></section>
        <section className="supplier-actions-card"><h2>Actions</h2><Action icon={Settings} title="View Meeting Offer" text="(Available when ready)" onClick={onViewOffer} /><Action icon={MessageSquare} title="Send Message to IGBN" text="Ask a question or share additional details" /><Action icon={XCircle} title="Withdraw Enquiry" text="(Subject to our terms)" /></section>
        <section className="supplier-assistance-card"><div className="supplier-assistance-heading"><Headphones size={38} /><h2>Need Assistance?</h2></div><p>Our team is here to help you with your enquiry or any questions.</p><button type="button">Contact Our Team <ChevronRight size={17} /></button><a href="mailto:factorytours@igbnworldwide.com"><Mail size={16} /> factorytours@igbnworldwide.com</a><a href="tel:+911145679900"><MessageSquare size={16} /> +91 11 4567 9900</a><span><Clock3 size={16} /> Mon – Fri, 9:00 AM – 6:00 PM (IST)</span></section>
      </aside>
    </div>
  );
}

function Action({ icon: Icon, title, text, disabled, onClick }) {
  return <button type="button" className={`supplier-action ${disabled ? "is-disabled" : ""}`} onClick={onClick}><Icon size={20} /><span><strong>{title}</strong><small>{text}</small></span><ChevronRight size={18} /></button>;
}
