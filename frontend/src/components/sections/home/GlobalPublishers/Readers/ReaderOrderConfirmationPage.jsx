import { ArrowRight, BookOpen, Check, Mail, ShieldCheck } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import ReaderPortalHeader from "./ReaderPortalHeader";
import "./readerCommerce.css";

const money = (amount) => `$${amount.toFixed(2)}`;
const paymentLabels = {
  card: "Credit / Debit Card",
  upi: "UPI",
  netbanking: "Net Banking",
  paypal: "PayPal",
};

function ConfirmationSteps() {
  return (
    <ol className="reader-checkout-steps reader-confirmation-steps" aria-label="Checkout progress">
      <li className="is-complete"><span><Check size={16} /></span><strong>Cart</strong></li>
      <li className="is-complete"><span><Check size={16} /></span><strong>Checkout</strong></li>
      <li className="is-complete"><span><Check size={16} /></span><strong>Payment</strong></li>
      <li className="is-active"><span><Check size={16} /></span><strong>Confirmation</strong></li>
    </ol>
  );
}

export default function ReaderOrderConfirmationPage() {
  const location = useLocation();
  const order = location.state?.order;
  const account = location.state?.account;

  return (
    <div className="reader-home-page reader-commerce-page">
      <ReaderPortalHeader account={account} />
      <main className="reader-commerce-main reader-confirmation-main">
        <ConfirmationSteps />
        {order ? (
          <div className="reader-confirmation-layout">
            <section className="reader-commerce-panel reader-confirmation-card">
              <span className="reader-confirmation-check"><Check size={32} /></span>
              <span className="reader-commerce-eyebrow">ORDER RECEIVED</span>
              <h1>Thank you, {order.billing.fullName.split(/\s+/)[0]}!</h1>
              <p>Your demo order has been created. <strong>No real payment has been processed.</strong></p>
              <div className="reader-confirmation-order-id"><span>Order reference</span><strong>{order.id}</strong></div>
              <div className="reader-confirmation-email"><Mail size={18} /><span>Order details would be sent to <strong>{order.billing.email}</strong> once email services are connected.</span></div>
              <div className="reader-confirmation-demo"><ShieldCheck size={19} /><span>This checkout is a frontend demo. Payment gateways, receipts and library delivery will be connected later.</span></div>
              {location.state?.librarySaved === false && <p className="reader-confirmation-library-warning" role="status">Your order is confirmed for this demo, but this device could not save it to My Library.</p>}
              <Link className="reader-confirmation-library-link" to="/publishers/readers/library" state={{ account }}>Open My Library <ArrowRight size={16} /></Link>
              <Link className="reader-commerce-primary" to="/publishers/readers/home" state={{ account }}>Continue Discovering Books <ArrowRight size={17} /></Link>
            </section>

            <aside className="reader-commerce-panel reader-confirmation-summary">
              <h2>Order Summary</h2>
              {order.items.map((item) => (
                <div className="reader-checkout-summary-item" key={`${item.bookId}-${item.format}-${item.language}`}>
                  <img src={item.image} alt="" /><span><strong>{item.title}</strong><small>{item.author}</small><small>{item.format} · {item.language}</small></span><b>{money(item.price)}</b>
                </div>
              ))}
              <div className="reader-checkout-totals">
                <div><span>Subtotal</span><b>{money(order.totals.subtotal)}</b></div>
                {order.totals.discount > 0 && <div className="is-discount"><span>Discount</span><b>−{money(order.totals.discount)}</b></div>}
                <div><span>Tax</span><b>{money(order.totals.tax)}</b></div>
                <div className="is-total"><span>Total</span><b>{money(order.totals.total)}</b></div>
              </div>
              <div className="reader-confirmation-payment"><span>Payment method</span><strong>{paymentLabels[order.paymentMethod] || "Demo payment"}</strong></div>
              <div className="reader-confirmation-payment"><span>Billing country</span><strong>{order.billing.country}</strong></div>
            </aside>

            <section className="reader-confirmation-books reader-commerce-panel">
              <h2><BookOpen size={19} /> Your digital books</h2>
              <p>{location.state?.librarySaved === false ? "Your demo purchase could not be saved to this device." : "These demo purchases have been saved to My Library on this device."} Real library delivery will be connected later.</p>
              <div className="reader-confirmation-purchased-list">{order.items.map((item) => <span key={item.bookId}><Check size={14} /> {item.title}</span>)}</div>
              <div className="reader-confirmation-read-links">{order.items.map((item) => <Link key={item.bookId} to={`/publishers/readers/read/${item.bookId}`} state={{ account }}><BookOpen size={14} /> Read {item.title} <ArrowRight size={14} /></Link>)}</div>
            </section>
          </div>
        ) : (
          <section className="reader-commerce-panel reader-confirmation-card reader-confirmation-missing">
            <span className="reader-confirmation-check"><BookOpen size={27} /></span>
            <h1>No recent order found</h1>
            <p>Order details are available after completing checkout in this browser session.</p>
            <Link className="reader-commerce-primary" to="/publishers/readers/cart">Go to Cart <ArrowRight size={17} /></Link>
          </section>
        )}
      </main>
    </div>
  );
}
