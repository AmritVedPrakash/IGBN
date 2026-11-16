import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  Check,
  CircleHelp,
  CreditCard,
  Globe2,
  Headphones,
  LockKeyhole,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Wallet,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReaderPortalHeader from "./ReaderPortalHeader";
import { useReaderCart } from "./useReaderCart";
import { readerBooks } from "./readerBooks";
import { recordReaderPurchase } from "./readerLibraryStore";
import { calculateReaderTotals, readerDiscountRates } from "./readerCommerceUtils";
import "./readerCommerce.css";

const money = (amount) => `$${amount.toFixed(2)}`;
const paymentMethods = [
  { id: "card", label: "Credit / Debit Card", icon: CreditCard },
  { id: "upi", label: "UPI", icon: Smartphone },
  { id: "netbanking", label: "Net Banking", icon: Building2 },
  { id: "paypal", label: "PayPal", icon: Wallet },
];

function CheckoutSteps() {
  return (
    <ol className="reader-checkout-steps" aria-label="Checkout progress">
      <li className="is-complete"><span><Check size={16} /></span><strong>Cart</strong></li>
      <li className="is-active"><span>2</span><strong>Checkout</strong></li>
      <li><span>3</span><strong>Payment</strong></li>
      <li><span>4</span><strong>Confirmation</strong></li>
    </ol>
  );
}

export default function ReaderCheckoutPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const account = location.state?.account;
  const savedIds = location.state?.savedIds || [];
  const search = location.state?.search || "";
  const { items, clearCart, storageError } = useReaderCart();
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [discountInput, setDiscountInput] = useState(location.state?.promoCode || "");
  const [discountCode, setDiscountCode] = useState(
    readerDiscountRates[location.state?.promoCode] ? location.state.promoCode : "",
  );
  const [discountMessage, setDiscountMessage] = useState("");
  const [notice, setNotice] = useState(storageError);

  useEffect(() => {
    if (storageError) setNotice(storageError);
  }, [storageError]);

  const cartRows = useMemo(() => items.map((item) => ({
    item,
    book: readerBooks.find((candidate) => candidate.id === item.bookId),
  })).filter((row) => row.book), [items]);
  const { subtotal, discount, tax, total } = calculateReaderTotals(items, discountCode);
  const homeState = { account, savedIds, search };

  const applyDiscount = () => {
    const code = discountInput.trim().toUpperCase();
    if (!readerDiscountRates[code]) {
      setDiscountCode("");
      setDiscountMessage(code ? "That demo code isn't valid. Try READ10 or WELCOME15." : "Enter a discount code to apply.");
      return;
    }
    setDiscountCode(code);
    setDiscountInput(code);
    setDiscountMessage(`${code} applied — ${readerDiscountRates[code] * 100}% off your books.`);
  };

  const placeDemoOrder = (event) => {
    event.preventDefault();
    if (!cartRows.length) return;

    const form = event.currentTarget;
    const order = {
      id: `IGBN-${Date.now().toString(36).toUpperCase()}`,
      placedAt: new Date().toISOString(),
      items: cartRows.map(({ item, book }) => ({
        bookId: book.id,
        title: book.title,
        author: book.author,
        image: book.image,
        format: item.format,
        language: item.language,
        price: item.price,
      })),
      billing: {
        fullName: form.elements.namedItem("fullName").value.trim(),
        email: form.elements.namedItem("email").value.trim(),
        country: form.elements.namedItem("country").value,
      },
      paymentMethod,
      promoCode: discountCode,
      totals: { subtotal, discount, tax, total },
    };

    const librarySaved = recordReaderPurchase(order);
    clearCart();
    navigate("/publishers/readers/confirmation", { state: { account, order, librarySaved } });
  };

  return (
    <div className="reader-home-page reader-commerce-page">
      <ReaderPortalHeader account={account} savedIds={savedIds} search={search} onNotice={setNotice} />
      <main className="reader-commerce-main reader-checkout-main">
        <nav className="reader-commerce-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/publishers/readers/home" state={homeState}>Home</Link><span>›</span>
          <Link to="/publishers/readers/cart" state={homeState}>Cart</Link><span>›</span><strong>Checkout</strong>
        </nav>
        <CheckoutSteps />
        <div className="reader-commerce-heading reader-checkout-heading">
          <div><span className="reader-commerce-eyebrow"><LockKeyhole size={15} /> SECURE CHECKOUT</span><h1>Checkout</h1><p>Review your order, add billing details and choose a payment method.</p></div>
          <Link to="/publishers/readers/cart" state={{ ...homeState, promoCode: discountCode }}><ArrowLeft size={16} /> Edit Cart</Link>
        </div>

        {!cartRows.length ? (
          <section className="reader-commerce-panel reader-cart-empty">
            <span><ShoppingBag size={29} /></span><h2>Your cart is empty</h2>
            <p>Add a book before starting checkout.</p>
            <Link to="/publishers/readers/home" state={homeState}>Browse books <ArrowRight size={17} /></Link>
          </section>
        ) : (
          <form className="reader-checkout-grid" onSubmit={placeDemoOrder}>
            <section className="reader-commerce-panel reader-checkout-order">
              <header><div><h2><ShoppingBag size={19} /> Your Order</h2><span>{cartRows.length} {cartRows.length === 1 ? "item" : "items"}</span></div><Link to="/publishers/readers/cart" state={{ ...homeState, promoCode: discountCode }}>Edit Cart</Link></header>
              <div className="reader-checkout-order-items">
                {cartRows.map(({ item, book }) => (
                  <article key={`${item.bookId}-${item.format}-${item.language}`}>
                    <img src={book.image} alt="" />
                    <div><strong>{book.title}</strong><span>{book.author}</span><small>{item.format} <i /> {item.language}</small><em><Check size={13} /> Instant access after payment</em></div>
                    <b>{money(item.price)}</b>
                  </article>
                ))}
              </div>
              <label className="reader-checkout-coupon-label" htmlFor="reader-checkout-coupon">Discount Code</label>
              <div className="reader-checkout-coupon"><input id="reader-checkout-coupon" value={discountInput} onChange={(event) => setDiscountInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") { event.preventDefault(); applyDiscount(); } }} placeholder="Enter code" /><button type="button" onClick={applyDiscount}>Apply</button></div>
              {discountMessage && <p className={`reader-checkout-coupon-message ${discountCode ? "is-success" : "is-error"}`} role="status">{discountMessage}</p>}
              <div className="reader-checkout-totals">
                <div><span>Subtotal ({cartRows.length} {cartRows.length === 1 ? "item" : "items"})</span><b>{money(subtotal)}</b></div>
                {discount > 0 && <div className="is-discount"><span>Discount ({discountCode})</span><b>−{money(discount)}</b></div>}
                <div><span>Tax (where applicable) <CircleHelp size={14} /></span><b>{money(tax)}</b></div>
                <div className="is-total"><span>Total Payable</span><b>{money(total)}</b></div>
                <small>Taxes are estimated for this demo checkout.</small>
              </div>
            </section>

            <div className="reader-checkout-forms">
              <section className="reader-commerce-panel reader-billing-section">
                <header className="reader-checkout-section-title"><span>1</span><div><h2>Billing Details</h2><p>Enter your information for order confirmation.</p></div></header>
                <div className="reader-billing-fields">
                  <label><span>Full Name <em>*</em></span><input autoComplete="name" name="fullName" placeholder="Your full name" defaultValue={account?.name || ""} required /></label>
                  <label><span>Email Address <em>*</em></span><input autoComplete="email" name="email" type="email" placeholder="you@example.com" defaultValue={account?.email || ""} required /></label>
                  <label><span>Country / Region <em>*</em></span><select autoComplete="country-name" name="country" defaultValue="India" required><option>India</option><option>United States</option><option>United Kingdom</option><option>Canada</option><option>Australia</option><option>Other</option></select></label>
                </div>
              </section>

              <section className="reader-commerce-panel reader-payment-section">
                <header className="reader-checkout-section-title"><span>2</span><div><h2>Payment Method</h2><p><ShieldCheck size={14} /> All payments are secure and encrypted</p></div></header>
                <div className="reader-payment-methods" role="radiogroup" aria-label="Payment method">
                  {paymentMethods.map(({ id, label, icon: Icon }) => (
                    <label className={paymentMethod === id ? "is-selected" : ""} key={id}>
                      <input type="radio" name="paymentMethodChoice" value={id} checked={paymentMethod === id} onChange={() => setPaymentMethod(id)} />
                      <span className="reader-payment-radio" />
                      <Icon size={17} />
                      <strong>{label}</strong>
                      {id === "card" && <span className="reader-card-brands"><b>VISA</b><b>MC</b><b>AMEX</b></span>}
                      {id === "upi" && <span className="reader-card-brands"><b>UPI</b><b>GPay</b><b>Paytm</b></span>}
                    </label>
                  ))}
                </div>

                {paymentMethod === "card" && <div className="reader-payment-fields">
                  <label className="reader-payment-field-full"><span>Card Number <em>*</em></span><input autoComplete="off" inputMode="numeric" name="cardNumber" placeholder="1234 5678 9012 3456" pattern="[0-9 ]{12,23}" required /></label>
                  <label><span>Expiry Date <em>*</em></span><input autoComplete="off" name="expiry" placeholder="MM / YY" pattern="(0[1-9]|1[0-2])\s*/\s*[0-9]{2}" required /></label>
                  <label><span>CVV <em>*</em></span><input autoComplete="off" inputMode="numeric" name="cvv" placeholder="123" pattern="[0-9]{3,4}" required /></label>
                </div>}
                {paymentMethod === "upi" && <div className="reader-payment-fields">
                  <label className="reader-payment-field-full"><span>UPI ID <em>*</em></span><input autoComplete="off" name="upiId" placeholder="name@bank" pattern="[A-Za-z0-9._-]+@[A-Za-z0-9.-]+" required /></label>
                </div>}
                {paymentMethod === "netbanking" && <div className="reader-payment-fields">
                  <label className="reader-payment-field-full"><span>Select Bank <em>*</em></span><select name="bank" defaultValue="" required><option value="" disabled>Choose your bank</option><option>State Bank of India</option><option>HDFC Bank</option><option>ICICI Bank</option><option>Axis Bank</option><option>Other bank</option></select></label>
                </div>}
                {paymentMethod === "paypal" && <p className="reader-payment-provider-note"><Wallet size={16} /> PayPal sign-in will be connected when the payment provider is integrated.</p>}

                <p className="reader-payment-demo-note"><LockKeyhole size={15} /> Demo payment only. No real charge will be made; card and payment details are not saved.</p>
                <button className="reader-commerce-primary reader-checkout-pay" type="submit"><LockKeyhole size={17} /> Pay {money(total)}</button>
                <p className="reader-checkout-terms">By placing this demo order you agree to our <Link to="/terms-and-conditions">Terms of Use</Link> and <Link to="/refund-policy">Refund Policy</Link>.</p>
              </section>
            </div>

            <aside className="reader-checkout-aside">
              <section className="reader-commerce-panel reader-checkout-summary">
                <h2>Order Summary</h2>
                {cartRows.map(({ item, book }) => (
                  <div className="reader-checkout-summary-item" key={`${item.bookId}-${item.format}-${item.language}`}>
                    <img src={book.image} alt="" /><span><strong>{book.title}</strong><small>{book.author}</small><small>{item.format} · {item.language}</small></span><b>{money(item.price)}</b>
                  </div>
                ))}
                <div className="reader-checkout-totals">
                  <div><span>Subtotal</span><b>{money(subtotal)}</b></div>
                  {discount > 0 && <div className="is-discount"><span>Discount</span><b>−{money(discount)}</b></div>}
                  <div><span>Tax (where applicable)</span><b>{money(tax)}</b></div>
                  <div className="is-total"><span>Total Payable</span><b>{money(total)}</b></div>
                </div>
              </section>
              <section className="reader-commerce-panel reader-checkout-security">
                <h2><ShieldCheck size={20} /> Secure &amp; Trusted Payment</h2>
                <div><LockKeyhole size={19} /><span><strong>SSL Encrypted</strong><small>Protected transactions</small></span></div>
                <div><CreditCard size={19} /><span><strong>Multiple Options</strong><small>Cards, UPI &amp; more</small></span></div>
                <div><Globe2 size={19} /><span><strong>Global Support</strong><small>Pay from around the world</small></span></div>
                <div><ShieldCheck size={19} /><span><strong>Your Data is Protected</strong><small>No payment data is stored</small></span></div>
              </section>
              <section className="reader-commerce-panel reader-checkout-help">
                <h2><Headphones size={19} /> Need Help?</h2>
                <p>If you face any issues during checkout, please contact our support team.</p>
                <a href="mailto:support@globalpublishers.com">Contact Support <ArrowRight size={15} /></a>
              </section>
            </aside>
          </form>
        )}
      </main>
      {notice && <div className="reader-home-toast" role="status">{notice}<button type="button" onClick={() => setNotice("")} aria-label="Dismiss message">×</button></div>}
    </div>
  );
}
