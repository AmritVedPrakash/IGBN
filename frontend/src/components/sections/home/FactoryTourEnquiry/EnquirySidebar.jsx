import { CheckCircle2, Headphones, MapPin, ShieldCheck, Users, WalletCards } from "lucide-react";
import { enquiryNextSteps, enquiryWhySubmit } from "./enquiryData";
import supportImage from "../../../../assets/igbndivision/factorytours.png";

const whyIcons = [MapPin, Users, ShieldCheck, CheckCircle2];

export default function EnquirySidebar() {
  return (
    <aside className="enquiry-sidebar">
      <InfoCard title="Why Submit An Enquiry?">
        {enquiryWhySubmit.map((item, index) => {
          const Icon = whyIcons[index];

          return (
            <div key={item} className="enquiry-side-row">
              <span><Icon size={22} /></span>
              <p>{item}</p>
            </div>
          );
        })}
      </InfoCard>

      <InfoCard title="Processing Fee & Next Steps">
        {enquiryNextSteps.map((item, index) => (
          <div key={item} className="enquiry-next-step">
            <b>{index + 1}</b>
            <p>{item}</p>
          </div>
        ))}
      </InfoCard>

      <InfoCard title="Pricing Overview" badge="Transparent & Simple">
        <div className="enquiry-price-row">
          <WalletCards />
          <div><strong>US$ 2</strong><span>Processing Fee</span></div>
          <p>Paid first<br />Starts supplier search</p>
        </div>
        <div className="enquiry-price-row">
          <Users />
          <div><strong>US$ 48</strong><span>Balance Payment</span></div>
          <p>Pay after you accept<br />the meeting offer</p>
        </div>
        <div className="enquiry-price-row">
          <WalletCards />
          <div><strong>US$ 50</strong><span>Total Base Fee</span></div>
          <p>US$ 2 processing fee<br />+ US$ 48 balance</p>
        </div>
      </InfoCard>

      <InfoCard title="Need Assistance?">
        <div className="enquiry-support">
          <Headphones size={30} />
          <p>Our team is here to help you with your enquiry or questions.</p>
          <a href="mailto:factorytours@igbnworldwide.com">factorytours@igbnworldwide.com</a>
          <a href="tel:+919876543210">+91 98765 43210</a>
          <span>Mon – Fri, 9:00 AM – 6:00 PM (IST)</span>
        </div>
        <img src={supportImage} alt="Factory tour assistance" />
      </InfoCard>
    </aside>
  );
}

function InfoCard({ title, badge, children }) {
  return (
    <section className="enquiry-info-card">
      <div className="enquiry-info-heading">
        <h2>{title}</h2>
        {badge && <b>{badge}</b>}
      </div>
      {children}
    </section>
  );
}
