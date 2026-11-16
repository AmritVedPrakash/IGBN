import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Check, LockKeyhole, ShieldCheck, ShoppingBag, Trash2 } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReaderPortalHeader from "./ReaderPortalHeader";
import { getReaderCartItemKey } from "./readerCartStore";
import { useReaderCart } from "./useReaderCart";
import { readerBooks } from "./readerBooks";
import { calculateReaderTotals, readerDiscountRates } from "./readerCommerceUtils";
import "./readerCommerce.css";

const money = (amount) => `$${amount.toFixed(2)}`;

export default function ReaderCartPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const account = location.state?.account;
  const savedIds = location.state?.savedIds || [];
  const search = location.state?.search || "";
  const { items, removeItem, storageError } = useReaderCart();
  const [discountInput, setDiscountInput] = useState(location.state?.promoCode || "");
  const [discountCode, setDiscountCode] = useState(location.state?.promoCode || "");
  const [discountMessage, setDiscountMessage] = useState("");
  const [notice, setNotice] = useState(storageError);

  useEffect(() => {
    if (storageError) setNotice(storageError);
  }, [storageError]);

  const cartRows = useMemo(() => items.map((item) => ({
    item,
    book: readerBooks.find((candidate) => candidate.id === item.bookId),
  })).filter((row) => row.book), [items]);
  const { subtotal, discount, tax, total } = calculateReaderTotals(cartRows.map(({ item }) => item), discountCode);
  const homeState = { account, savedIds, search };

  const applyDiscount = () => {
    const code = discountInput.trim().toUpperCase();
    if (!code) {
      setDiscountCode("");
      setDiscountMessage("Enter a discount code to apply.");
      return;
    }
    if (!readerDiscountRates[code]) {
      setDiscountCode("");
      setDiscountMessage("That demo code isn't valid. Try READ10 or WELCOME15.");
      return;
    }
    setDiscountCode(code);
    setDiscountInput(code);
    setDiscountMessage(`${code} applied — ${readerDiscountRates[code] * 100}% off your books.`);
  };

  const proceedToCheckout = () => {
    navigate("/publishers/readers/checkout", {
      state: { ...homeState, promoCode: discountCode },
    });
  };

  return (
    <div className="reader-home-page reader-commerce-page">
      <ReaderPortalHeader
        account={account}
        savedIds={savedIds}
        search={search}
        onNotice={setNotice}
      />
      <main className="reader-commerce-main">
        <nav className="reader-commerce-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/publishers/readers/home" state={homeState}>Home</Link><span>›</span><strong>Cart</strong>
        </nav>
        <section className="reader-commerce-heading">
          <div><span className="reader-commerce-eyebrow"><ShoppingBag size={16} /> YOUR READING JOURNEY</span><h1>Your Cart</h1><p>Review your books before continuing to secure checkout.</p></div>
          <Link to="/publishers/readers/home" state={homeState}><ArrowLeft size={16} /> Continue browsing</Link>
        </section>

        {cartRows.length ? (
          <div className="reader-cart-layout">
            <section className="reader-commerce-panel reader-cart-list">
              <header><div><h2>Your Order</h2><span>{cartRows.length} {cartRows.length === 1 ? "book" : "books"}</span></div><Link to="/publishers/readers/home" state={homeState}>Add more books</Link></header>
              {cartRows.map(({ item, book }) => (
                <article className="reader-cart-item" key={getReaderCartItemKey(item)}>
                  <Link to={`/publishers/readers/books/${book.id}`} state={homeState} className="reader-cart-cover"><img src={book.image} alt={`Cover of ${book.title}`} /></Link>
                  <div className="reader-cart-item-info">
                    <Link to={`/publishers/readers/books/${book.id}`} state={homeState} className="reader-cart-item-title">{book.title}</Link>
                    <span>By {book.author}</span>
                    <div className="reader-cart-item-specs"><span>{item.format}</span><i /> <span>{item.language}</span><i /> <span>Instant access</span></div>
                    <span className="reader-cart-license"><Check size={14} /> Personal reading licence</span>
                  </div>
                  <div className="reader-cart-item-end">
                    <strong>{money(item.price)}</strong>
                    <button type="button" onClick={() => removeItem(getReaderCartItemKey(item))} aria-label={`Remove ${book.title} from cart`}><Trash2 size={16} /> Remove</button>
                  </div>
                </article>
              ))}

              <section className="reader-cart-discount">
                <label htmlFor="reader-cart-discount">Discount code</label>
                <div><input id="reader-cart-discount" value={discountInput} onChange={(event) => setDiscountInput(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter") { event.preventDefault(); applyDiscount(); } }} placeholder="Enter code" /><button type="button" onClick={applyDiscount}>Apply</button></div>
                {discountMessage && <p className={discountCode ? "is-success" : "is-error"} role="status">{discountMessage}</p>}
                <small>Demo codes: READ10 or WELCOME15</small>
              </section>

              <div className="reader-cart-subtotal"><span>Subtotal ({cartRows.length} {cartRows.length === 1 ? "item" : "items"})</span><strong>{money(subtotal)}</strong></div>
              {discount > 0 && <div className="reader-cart-subtotal is-discount"><span>Discount ({discountCode})</span><strong>−{money(discount)}</strong></div>}
              <div className="reader-cart-subtotal"><span>Estimated tax</span><strong>{money(tax)}</strong></div>
              <div className="reader-cart-total"><span>Total</span><strong>{money(total)}</strong></div>
              <button className="reader-commerce-primary" type="button" onClick={proceedToCheckout}><LockKeyhole size={17} /> Continue to Checkout · {money(total)} <ArrowRight size={17} /></button>
              <p className="reader-commerce-fineprint">Secure checkout · No charge until you place your order</p>
            </section>

            <aside className="reader-cart-aside">
              <section className="reader-commerce-panel reader-cart-summary">
                <h2>Order Summary</h2>
                {cartRows.map(({ item, book }) => (
                  <div className="reader-cart-summary-item" key={getReaderCartItemKey(item)}>
                    <img src={book.image} alt="" />
                    <span><strong>{book.title}</strong><small>{item.format} · {item.language}</small></span>
                    <b>{money(item.price)}</b>
                  </div>
                ))}
                <div className="reader-cart-subtotal"><span>Subtotal</span><strong>{money(subtotal)}</strong></div>
                {discount > 0 && <div className="reader-cart-subtotal is-discount"><span>Discount</span><strong>−{money(discount)}</strong></div>}
                <div className="reader-cart-subtotal"><span>Tax (estimated)</span><strong>{money(tax)}</strong></div>
                <div className="reader-cart-total"><span>Total payable</span><strong>{money(total)}</strong></div>
              </section>
              <section className="reader-commerce-panel reader-cart-trust">
                <h2><ShieldCheck size={20} /> Safe &amp; Secure Checkout</h2>
                <div><LockKeyhole size={18} /><span><strong>Encrypted checkout</strong><small>Your payment details are protected.</small></span></div>
                <div><BookOpen size={18} /><span><strong>Instant digital access</strong><small>Your eBooks are ready after purchase.</small></span></div>
                <p>Demo checkout only — no real payment is processed.</p>
              </section>
            </aside>
          </div>
        ) : (
          <section className="reader-commerce-panel reader-cart-empty">
            <span><ShoppingBag size={29} /></span><h2>Your cart is waiting for a story</h2>
            <p>Browse the collection and add a book to continue to checkout.</p>
            <Link to="/publishers/readers/home" state={homeState}><BookOpen size={17} /> Discover books</Link>
          </section>
        )}
      </main>
      {notice && <div className="reader-home-toast" role="status">{notice}<button type="button" onClick={() => setNotice("")} aria-label="Dismiss message">×</button></div>}
    </div>
  );
}
