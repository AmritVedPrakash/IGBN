import { useState } from "react";
import { Check, CreditCard, LockKeyhole, MoreHorizontal, ShieldCheck, WalletCards } from "lucide-react";

export default function EnquiryPayment({ onPaid }) {
  const [method, setMethod] = useState("card");
  const [paid, setPaid] = useState(false);

  if (paid) {
    return (
      <section className="enquiry-payment enquiry-payment-complete">
        <Check size={42} />
        <h2>Payment Details Submitted</h2>
        <p>Your US$ 2 processing fee is ready to be securely processed. We will start supplier searching after payment confirmation.</p>
      </section>
    );
  }

  return (
    <section className="enquiry-payment">
      <div className="payment-hero">
        <div>
          <p>IGBN Factory Tours</p>
          <h2>Secure Payment</h2>
          <span>Pay securely and let us start finding the best verified manufacturers for you.</span>
        </div>
      </div>

      <div className="payment-heading">
        <div><LockKeyhole size={22} /><div><h2>Pay Processing Fee</h2><p>Pay a small processing fee of US$ 2 to start supplier search. The balance of US$ 48 per confirmed supplier meeting will be payable later.</p></div></div>
        <b><ShieldCheck size={15} /> Secure & Encrypted</b>
      </div>

      <div className="payment-amount-cards">
        <div><WalletCards size={25} /><span>Processing Fee<small>(To Start Supplier Search)</small><strong>US$ 2</strong><em>Due Now</em></span></div>
        <div><CreditCard size={25} /><span>Balance Payment<small>(Per Confirmed Meeting)</small><strong>US$ 48</strong><em>Payable Later</em></span></div>
      </div>

      <h3>Select Payment Method</h3>
      <div className="payment-methods">
        <button type="button" className={method === "card" ? "is-selected" : ""} onClick={() => setMethod("card")}><CreditCard size={18} /> Credit / Debit Card</button>
        <button type="button" className={method === "paypal" ? "is-selected" : ""} onClick={() => setMethod("paypal")}><b>Pay</b>Pal</button>
        <button type="button" className={method === "other" ? "is-selected" : ""} onClick={() => setMethod("other")}><MoreHorizontal size={18} /> Other Methods</button>
      </div>

      {method === "card" ? <CardForm /> : <div className="payment-alternate"><p>{method === "paypal" ? "You will continue to PayPal's secure checkout." : "More secure payment methods will be available at checkout."}</p></div>}

      <div className="payment-billing">
        <h3>Billing Summary (USD)</h3>
        <p><span>Processing Fee</span><strong>US$ 2.00</strong></p>
        <p><span>Applicable Tax (if any) <small>i</small></span><strong>US$ 0.00</strong></p>
        <div><b>Total Amount to Pay</b><strong>US$ 2.00</strong></div>
      </div>
      <p className="payment-note">The amount will be charged in USD. Your card issuer may apply currency conversion charges.</p>
      <button type="button" className="payment-submit" onClick={onPaid}><LockKeyhole size={18} /> Pay US$ 2 & Start Supplier Search <span>→</span></button>
      <div className="payment-security"><span><ShieldCheck /> Secure<br />Payment</span><span><LockKeyhole /> SSL<br />Encrypted</span><span><Check /> No Hidden<br />Charges</span><span><ShieldCheck /> PCI DSS<br />Compliant</span></div>
    </section>
  );
}

function CardForm() {
  return <div className="payment-card-form">
    <label>Card Number<input placeholder="1234 5678 9012 3456" /></label>
    <label>Cardholder Name<input placeholder="Enter name on card" /></label>
    <div><label>Expiry Date<input placeholder="MM / YY" /></label><label>CVV<input placeholder="123" /></label></div>
  </div>;
}
