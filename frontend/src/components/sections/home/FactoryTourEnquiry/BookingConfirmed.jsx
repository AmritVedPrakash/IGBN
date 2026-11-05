import { CalendarDays, Check, CheckCircle2, Clock3, Download, Handshake, MapPin, Mail, Plane, Settings, Ticket, Users } from "lucide-react";

const bookingDetails = [
  ["Booking Reference", "BKG-2026-00078", Ticket],
  ["Enquiry ID", "IGFT-2026-00124", Ticket],
  ["Supplier Company", "ABC Leather Goods Pvt. Ltd.", Users],
  ["Product Category", "Leather Bags & Accessories", Ticket],
  ["Meeting Date", "28 Nov 2024 (Thursday)", CalendarDays],
  ["Meeting Time", "11:00 AM – 1:00 PM (2 hours)", Clock3],
  ["Meeting Type", "Factory Visit & Business Discussion", Handshake],
  ["Factory Location", "Plot No. 125, Leather Industrial Area\nNoida, Uttar Pradesh – 201305, India", MapPin],
];

export default function BookingConfirmed() {
  return (
    <div className="booking-confirmed-page">
      <div className="booking-confirmed-grid">
        <section className="booking-details-card"><div className="booking-heading"><h2>Booking Details</h2><span><CheckCircle2 size={15} /> Payment Confirmed</span></div>{bookingDetails.map(([label, value, Icon]) => <div className="booking-detail-row" key={label}><Icon size={19} /><span>{label}</span><strong>{value}</strong></div>)}<div className="booking-location-preview"><div className="booking-preview-image" /><button type="button"><MapPin size={20} />View Location<br />on Map <span>→</span></button></div></section>
        <section className="booking-summary-card"><div className="booking-heading"><h2>Payment Summary</h2><button type="button">View Receipt</button></div><div className="booking-success"><CheckCircle2 size={32} /><div><strong>Your payment has been received successfully.</strong><p>A confirmation email and receipt have been sent to your registered email address.</p></div></div><SummaryRow label="Processing Fee (Paid Earlier)" value="US$ 2.00" /><SummaryRow label="Balance Payment (Paid Now)" value="US$ 48.00" /><SummaryRow label="Total Base Fee (Per Meeting)" value="US$ 50.00" /><SummaryRow label="Applicable Tax (if any)" value="US$ 0.00" /><div className="booking-total"><b>Total Amount Paid</b><strong>US$ 50.00</strong></div><div className="booking-method"><Ticket size={28} /><p><span>Payment Method</span>Visa Credit Card (**** 3456)<span>Transaction ID</span>TXN202611280001<span>Payment Date</span>16 Nov 2024, 11:35 AM (IST)<span>Payment Status</span><b>Successful</b></p></div></section>
        <section className="booking-status-card"><div className="booking-heading"><h2>Current Booking Status</h2></div><StatusItem active icon={Settings} title="Payment Confirmed — Arrangements in Progress" text="Your payment has been confirmed. We are now coordinating with the supplier and preparing your visit." date="16 Nov 2024, 11:35 AM" /><StatusItem icon={CalendarDays} title="Itinerary Preparation" text="We will arrange travel, local coordination and share your detailed itinerary." /><StatusItem icon={Ticket} title="Itinerary Confirmed" text="You will receive the final itinerary with all details." /><StatusItem icon={Check} title="Visit Completed" text="Your factory visit will be marked as completed after your travel." /></section>
      </div>
      <section className="booking-next-card"><h2>What Happens Next?</h2><div className="booking-next-flow"><NextItem icon={Settings} title="Arrange Itinerary" text="Our team will coordinate travel, local transport and meeting details with the supplier." /><NextItem icon={Mail} title="Receive Itinerary" text="You will receive the detailed itinerary by email and in your dashboard." /><NextItem icon={Ticket} title="Prepare for Your Visit" text="Review the itinerary and get ready for your factory visit in India." /><NextItem icon={Plane} title="Visit, Meet & Source" text="Meet the supplier, discuss your requirements and explore business opportunities." /></div><div className="booking-bottom-actions"><button type="button"><CalendarDays size={19} />View Booking & Itinerary <span>→</span></button><button type="button"><Download size={19} />Download Receipt</button><button type="button"><Users size={19} />Contact IGBN Support</button><button type="button"><span>←</span>Back to Dashboard</button></div></section>
    </div>
  );
}

function SummaryRow({ label, value }) { return <p className="booking-summary-row"><span>{label}</span><strong>{value}</strong></p>; }
function StatusItem({ icon: Icon, title, text, date, active }) { return <div className={`booking-status-item ${active ? "active" : ""}`}><span><Icon size={18} /></span><div><strong>{title}</strong>{date && <b>{date}</b>}<p>{text}</p></div></div>; }
function NextItem({ icon: Icon, title, text }) { return <div className="booking-next-item"><Icon size={30} /><div><strong>{title}</strong><p>{text}</p></div></div>; }
