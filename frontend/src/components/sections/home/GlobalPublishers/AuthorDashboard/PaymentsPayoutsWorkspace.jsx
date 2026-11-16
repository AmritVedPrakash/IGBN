import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleAlert,
  CreditCard,
  Download,
  FileCheck2,
  FileText,
  Landmark,
  Pencil,
  ShieldCheck,
  UserRound,
  Wallet,
  X,
} from "lucide-react";
import "./paymentsPayoutsWorkspace.css";

const initialHistory = [
  { date: "12 Oct 2026", book: "Echoes of a New Dawn", period: "Sep 2026", amount: 1420, status: "Completed", transactionId: "TXB84572963", remarks: "Bank transfer successful", reference: "IGBNP20261012-01" },
  { date: "10 Sep 2026", book: "The Inner Light", period: "Aug 2026", amount: 980, status: "Completed", transactionId: "TRY736512890", remarks: "Bank transfer successful", reference: "IGBNP20260910-01" },
  { date: "14 Aug 2026", book: "Echoes of a New Dawn", period: "Jul 2026", amount: 750, status: "Completed", transactionId: "TRX662318904", remarks: "Bank transfer successful", reference: "IGBNP20260814-01" },
  { date: "10 Jul 2026", book: "The Inner Light", period: "Jun 2026", amount: 580, status: "Completed", transactionId: "TRX590721337", remarks: "Bank transfer successful", reference: "IGBNP20260710-01" },
  { date: "12 Jun 2026", book: "Echoes of a New Dawn", period: "May 2026", amount: 420, status: "Failed", transactionId: "TRX448761225", remarks: "Account details mismatch", reference: "IGBNP20260612-01" },
  { date: "15 May 2026", book: "Beyond the Horizon", period: "Apr 2026", amount: 380, status: "Completed", transactionId: "TRX337890104", remarks: "Bank transfer successful", reference: "IGBNP20260515-01" },
];

const initialBankDetails = (authorName) => ({
  accountHolder: authorName,
  bankName: "HSBC Bank",
  accountNumber: "XXXX XXXX 7890",
  swiftCode: "HSBCINBBXXX",
  country: "India",
  accountType: "Savings",
});

const verificationSteps = [
  { icon: UserRound, title: "Identity Verification", detail: "Aadhaar / Passport / Government ID" },
  { icon: FileText, title: "Tax Information", detail: "PAN, Tax Residency, W-8/W-9 (if applicable)" },
  { icon: Landmark, title: "Bank Account", detail: "Account details verified" },
  { icon: Wallet, title: "Payout Method", detail: "Bank Transfer (International/Local)" },
];

const payoutSteps = [
  { number: 1, title: "Payout Method", status: "Completed" },
  { number: 2, title: "Tax Information", status: "Completed" },
  { number: 3, title: "Identity Verification", status: "Completed" },
  { number: 4, title: "Review & Confirm", status: "Completed" },
  { number: 5, title: "Ready for Payouts", status: "Active" },
];

const currencies = [
  { code: "USD", label: "USD (US Dollar)", symbol: "$", rate: 1 },
  { code: "INR", label: "INR (Indian Rupee)", symbol: "₹", rate: 83 },
  { code: "EUR", label: "EUR (Euro)", symbol: "€", rate: .92 },
];

function money(amount, currency) {
  const selectedCurrency = currencies.find((item) => item.code === currency) || currencies[0];
  const convertedAmount = amount * selectedCurrency.rate;
  return `${selectedCurrency.symbol}${convertedAmount.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
}

function currencyAmount(amount, currency) {
  const selectedCurrency = currencies.find((item) => item.code === currency) || currencies[0];
  return `${selectedCurrency.symbol}${amount.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}`;
}

function downloadStatement(rows, currency) {
  const header = ["Date", "Payout Reference", "Book", "Period", `Amount (${currency})`, "Status", "Transaction ID", "Remarks"];
  const content = [
    header,
    ...rows.map((row) => [
      row.date,
      row.reference,
      row.book,
      row.period,
      money(row.amount, currency),
      row.status,
      row.transactionId,
      row.remarks,
    ]),
  ].map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(",")).join("\r\n");
  const file = new Blob([content], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(file);
  const link = document.createElement("a");
  link.href = url;
  link.download = `payout-statement-${currency.toLowerCase()}.csv`;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function BankDetailsModal({ details, onChange, onClose, onSave }) {
  return (
    <div className="author-payout-modal" role="presentation" onClick={onClose}>
      <section role="dialog" aria-modal="true" aria-labelledby="author-payout-bank-title" onClick={(event) => event.stopPropagation()}>
        <button className="author-payout-modal-close" onClick={onClose} aria-label="Close bank details"><X size={18} /></button>
        <Building2 size={28} />
        <h2 id="author-payout-bank-title">Edit Payout &amp; Bank Details</h2>
        <p>Update the account where approved royalties should be sent.</p>
        <div className="author-payout-form-grid">
          <label>Account Holder Name<input value={details.accountHolder} onChange={(event) => onChange("accountHolder", event.target.value)} autoComplete="name" /></label>
          <label>Bank Name<input value={details.bankName} onChange={(event) => onChange("bankName", event.target.value)} autoComplete="organization" /></label>
          <label>Account Number<input value={details.accountNumber} onChange={(event) => onChange("accountNumber", event.target.value)} autoComplete="off" /></label>
          <label>SWIFT / BIC Code<input value={details.swiftCode} onChange={(event) => onChange("swiftCode", event.target.value.toUpperCase())} autoComplete="off" /></label>
          <label>Bank Country<select value={details.country} onChange={(event) => onChange("country", event.target.value)}><option>India</option><option>United States</option><option>United Kingdom</option><option>Germany</option><option>Canada</option></select></label>
          <label>Account Type<select value={details.accountType} onChange={(event) => onChange("accountType", event.target.value)}><option>Savings</option><option>Current</option></select></label>
        </div>
        <div className="author-payout-modal-actions"><button onClick={onClose}>Cancel</button><button className="is-primary" onClick={onSave}>Save Bank Details</button></div>
      </section>
    </div>
  );
}

export default function PaymentsPayoutsWorkspace({ authorName = "Aditi Sharma", books = [] }) {
  const [payoutMethod, setPayoutMethod] = useState("Bank Transfer (International)");
  const [currency, setCurrency] = useState("USD");
  const [threshold, setThreshold] = useState(100);
  const [thresholdDraft, setThresholdDraft] = useState("100");
  const [autoPayout, setAutoPayout] = useState(true);
  const [bankDetails, setBankDetails] = useState(() => initialBankDetails(authorName));
  const [bankDraft, setBankDraft] = useState(bankDetails);
  const [approvedEarnings, setApprovedEarnings] = useState(3511);
  const [pendingEarnings, setPendingEarnings] = useState(661);
  const totalPaid = 2850;
  const [history, setHistory] = useState(initialHistory);
  const [bookFilter, setBookFilter] = useState("All Books");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [dateFilter, setDateFilter] = useState("all");
  const [modal, setModal] = useState("");
  const [selectedPayout, setSelectedPayout] = useState(null);
  const [notice, setNotice] = useState("");

  const filteredHistory = useMemo(() => history.filter((payout) => {
    const matchesBook = bookFilter === "All Books" || payout.book === bookFilter;
    const matchesStatus = statusFilter === "All Status" || payout.status === statusFilter;
    const payoutDate = new Date(payout.date);
    const matchesDate = dateFilter === "all"
      || (dateFilter === "90" && payoutDate >= new Date(2026, 6, 15))
      || (dateFilter === "180" && payoutDate >= new Date(2026, 3, 15));
    return matchesBook && matchesStatus && matchesDate;
  }), [bookFilter, dateFilter, history, statusFilter]);

  const updateBankDraft = (field, value) => {
    setBankDraft((details) => ({ ...details, [field]: value }));
  };

  const saveBankDetails = () => {
    if (!bankDraft.accountHolder.trim() || !bankDraft.bankName.trim() || !bankDraft.accountNumber.trim()) {
      setNotice("Enter the account holder, bank and account number before saving.");
      return;
    }
    setBankDetails(bankDraft);
    setModal("");
    setNotice("Bank details saved in this session. They have not been sent to a payment provider.");
  };

  const saveThreshold = () => {
    const value = Number(thresholdDraft);
    const minimumThreshold = 100 * (currencies.find((item) => item.code === currency)?.rate || 1);
    if (!Number.isFinite(value) || value < minimumThreshold) {
      setThresholdDraft(String(threshold));
      setNotice(`The minimum payout threshold is ${money(100, currency)}.`);
      return;
    }
    setThreshold(value);
    setThresholdDraft(String(value));
  };

  const changeCurrency = (nextCurrency) => {
    const currentRate = currencies.find((item) => item.code === currency)?.rate || 1;
    const nextRate = currencies.find((item) => item.code === nextCurrency)?.rate || 1;
    const convertedThreshold = threshold / currentRate * nextRate;
    setCurrency(nextCurrency);
    setThreshold(convertedThreshold);
    setThresholdDraft(String(Math.round(convertedThreshold * 100) / 100));
  };

  const requestPayout = () => {
    const currencyRate = currencies.find((item) => item.code === currency)?.rate || 1;
    if (approvedEarnings * currencyRate < threshold) {
      setNotice(`Your approved earnings have not reached the ${currencyAmount(threshold, currency)} payout threshold.`);
      return;
    }
    setModal("request");
  };

  const confirmPayoutRequest = () => {
    const newRequest = {
      date: "15 Oct 2026",
      book: "All Books",
      period: "Oct 2026",
      amount: approvedEarnings,
      status: "Pending",
      transactionId: "Awaiting processing",
      remarks: "Payout request submitted",
      reference: `IGBNP${Date.now().toString().slice(-8)}`,
    };
    setHistory((rows) => [newRequest, ...rows]);
    setPendingEarnings((amount) => amount + approvedEarnings);
    setApprovedEarnings(0);
    setModal("");
    setNotice("Payout request added to history in this demo. No real money transfer was initiated.");
  };

  const retryPayout = () => {
    if (!selectedPayout) return;
    setHistory((rows) => rows.map((row) => (
      row.reference === selectedPayout.reference
        ? { ...row, status: "Pending", remarks: "Retry request submitted", transactionId: "Awaiting processing" }
        : row
    )));
    setSelectedPayout(null);
    setModal("");
    setNotice("Transfer retry queued in this demo. No real money transfer was initiated.");
  };

  const openPayout = (payout) => {
    setSelectedPayout(payout);
    setModal(payout.status === "Failed" ? "resolve" : "payout");
  };

  const currencyRate = currencies.find((item) => item.code === currency)?.rate || 1;
  const requestDisabled = approvedEarnings * currencyRate < threshold;
  const approvedAmount = money(approvedEarnings, currency);
  const pendingAmount = money(pendingEarnings, currency);
  const totalPaidAmount = money(totalPaid, currency);

  return (
    <div className="author-payout-page">
      <header className="author-payout-header">
        <div><h1>Payout Setup &amp; Payout History</h1><p>Set up your payout details, complete verification and track all your payments.</p></div>
      </header>

      <ol className="author-payout-stepper" aria-label="Payout setup progress">
        {payoutSteps.map((step, index) => (
          <li className={step.status === "Active" ? "is-current" : "is-complete"} key={step.number}>
            <span className="author-payout-step-number">{step.status === "Active" ? step.number : <Check size={16} />}</span>
            <span className="author-payout-step-copy"><strong>{step.title}</strong><small>{step.status}</small></span>
            {index < payoutSteps.length - 1 && <span className="author-payout-step-connector" aria-hidden="true" />}
          </li>
        ))}
      </ol>

      <div className="author-payout-settings-grid">
        <section className="author-payout-panel author-payout-verification">
          <h2>Verification Status</h2>
          <div className="author-payout-verification-list">
            {verificationSteps.map(({ icon: Icon, title, detail }) => (
              <article key={title}>
                <span className="author-payout-verification-icon"><Icon size={20} /></span>
                <div><strong>{title}</strong><small>{detail}</small></div>
                <span className="author-payout-verified"><CheckCircle2 size={14} />Verified</span>
              </article>
            ))}
          </div>
        </section>

        <section className="author-payout-panel author-payout-settings">
          <h2>Payout Settings</h2>
          <label><span>Payout Method</span><select value={payoutMethod} onChange={(event) => setPayoutMethod(event.target.value)}><option>Bank Transfer (International)</option><option>Bank Transfer (Local)</option><option>PayPal</option></select></label>
          <label><span>Payout Currency</span><select value={currency} onChange={(event) => changeCurrency(event.target.value)}>{currencies.map((item) => <option key={item.code} value={item.code}>{item.label}</option>)}</select></label>
          <label className="author-payout-threshold"><span>Payout Threshold</span><span className="author-payout-threshold-control"><input type="number" min={100 * (currencies.find((item) => item.code === currency)?.rate || 1)} step="10" value={thresholdDraft} onChange={(event) => setThresholdDraft(event.target.value)} onBlur={saveThreshold} onKeyDown={(event) => { if (event.key === "Enter") event.currentTarget.blur(); }} /><small>{currency}</small></span></label>
          <p className="author-payout-helper">Payouts are processed when your approved earnings reach the threshold.</p>
          <div className="author-payout-autopay"><button type="button" className={autoPayout ? "is-on" : ""} role="switch" aria-checked={autoPayout} onClick={() => setAutoPayout((enabled) => !enabled)}><i /></button><div><strong>Auto Payout</strong><small>{autoPayout ? "Automatically process payout once threshold is reached." : "Automatic payout is paused."}</small></div></div>
        </section>

        <section className="author-payout-panel author-payout-bank">
          <div className="author-payout-section-heading"><h2>Payout &amp; Bank Details</h2><button onClick={() => { setBankDraft(bankDetails); setModal("bank"); }}><Pencil size={14} /> Edit</button></div>
          <dl>
            <div><dt>Account Holder Name</dt><dd>{bankDetails.accountHolder}</dd></div>
            <div><dt>Bank Name</dt><dd>{bankDetails.bankName}</dd></div>
            <div><dt>Account Number</dt><dd>{bankDetails.accountNumber.replace(/\d(?=\d{4})/g, "X")}</dd></div>
            <div><dt>SWIFT Code</dt><dd>{bankDetails.swiftCode}</dd></div>
            <div><dt>Bank Country</dt><dd>{bankDetails.country}</dd></div>
            <div><dt>Account Currency</dt><dd>{currency}</dd></div>
          </dl>
          <button className="author-payout-documents" onClick={() => setModal("documents")}><FileText size={16} />View Verified Documents <ChevronRight size={15} /></button>
        </section>
      </div>

      <div className="author-payout-summary-grid">
        <section className="author-payout-panel author-payout-summary">
          <h2>Payout Summary</h2>
          <div className="author-payout-summary-cards">
            <article className="is-approved"><span><CheckCircle2 size={22} /></span><div><strong>{approvedAmount}</strong><small>Approved Earnings</small><button disabled={requestDisabled} onClick={requestPayout}>{requestDisabled ? "Below threshold" : "Request payout"}</button></div></article>
            <article className="is-pending"><span><Wallet size={22} /></span><div><strong>{pendingAmount}</strong><small>Pending Earnings</small><em>Will be included in next cycle</em></div></article>
            <article className="is-paid"><span><Landmark size={22} /></span><div><strong>{totalPaidAmount}</strong><small>Total Paid</small><em>Across all payouts</em></div></article>
            <article className="is-failed"><span><CircleAlert size={22} /></span><div><strong>{money(120, currency)}</strong><small>Failed Transfers</small><button onClick={() => { const failed = history.find((item) => item.status === "Failed"); if (failed) openPayout(failed); }}>View Details</button></div></article>
          </div>
        </section>

        <section className="author-payout-panel author-payout-schedule">
          <h2>Payout Schedule</h2>
          <div><CalendarDays size={23} /><p>Payouts are processed monthly for approved earnings.<br /><strong>Usually within 7–10 business days</strong> after the end of the month.</p></div>
          <button onClick={() => setModal("policy")}>View Full Payout Policy <ArrowRight size={14} /></button>
        </section>
      </div>

      <div className="author-payout-history-grid">
        <section className="author-payout-panel author-payout-history">
          <div className="author-payout-history-heading"><h2>Payout History</h2><div className="author-payout-filters">
            <select aria-label="Filter payouts by book" value={bookFilter} onChange={(event) => setBookFilter(event.target.value)}><option>All Books</option>{books.map((book) => <option key={book.title}>{book.title}</option>)}</select>
            <select aria-label="Filter payouts by status" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}><option>All Status</option><option>Completed</option><option>Pending</option><option>Failed</option></select>
            <label><CalendarDays size={14} /><select aria-label="Filter payouts by date" value={dateFilter} onChange={(event) => setDateFilter(event.target.value)}><option value="all">1 Jan 2026 – 15 Oct 2026</option><option value="180">Last 6 Months</option><option value="90">Last 3 Months</option></select></label>
            <button className="is-primary" onClick={() => downloadStatement(filteredHistory, currency)}><Download size={15} />Download Statement</button>
          </div></div>
          <div className="author-payout-table-scroll"><table>
            <thead><tr><th>Date</th><th>Payout Reference</th><th>Period</th><th>Amount ({currency})</th><th>Status</th><th>Transaction ID</th><th>Remarks</th><th>Actions</th></tr></thead>
            <tbody>{filteredHistory.map((payout) => <tr key={payout.reference}><td>{payout.date}</td><td>{payout.reference}</td><td>{payout.period}</td><td>{money(payout.amount, currency)}</td><td><span className={`author-payout-status ${payout.status.toLowerCase()}`}><i />{payout.status}</span></td><td>{payout.transactionId}</td><td>{payout.remarks}</td><td><button className="author-payout-view-row" onClick={() => openPayout(payout)}>{payout.status === "Failed" ? "View / Resolve" : "View"}</button></td></tr>)}</tbody>
            {!filteredHistory.length && <tfoot><tr><td colSpan="8">No payouts match these filters.</td></tr></tfoot>}
          </table></div>
        </section>

        <aside className="author-payout-panel author-payout-information">
          <h2><span>i</span>Important Information</h2>
          <ul>
            <li>Minimum payout threshold: {money(100, currency)} (or equivalent).</li>
            <li>Payouts are processed monthly.</li>
            <li>Processing time: 7–10 business days after month end.</li>
            <li>Ensure your bank and tax details are up to date to avoid delays.</li>
            <li>Failed transfers will be retried after you update your details.</li>
            <li>You will receive an email notification once a payout is initiated and completed.</li>
          </ul>
        </aside>
      </div>

      {notice && <p className="author-payout-notice" role="status">{notice}<button onClick={() => setNotice("")} aria-label="Dismiss message"><X size={15} /></button></p>}

      {modal === "bank" && <BankDetailsModal details={bankDraft} onChange={updateBankDraft} onClose={() => setModal("")} onSave={saveBankDetails} />}
      {modal === "request" && <div className="author-payout-modal" role="presentation" onClick={() => setModal("")}><section role="dialog" aria-modal="true" aria-labelledby="author-payout-request-title" onClick={(event) => event.stopPropagation()}><button className="author-payout-modal-close" onClick={() => setModal("")} aria-label="Close payout request"><X size={18} /></button><ShieldCheck size={30} /><h2 id="author-payout-request-title">Confirm Payout Request</h2><p>Request a payout of <strong>{approvedAmount}</strong> to the account ending in {bankDetails.accountNumber.slice(-4)}?</p><p className="author-payout-demo-warning">This is a demo request. No real transfer will be made.</p><div className="author-payout-modal-actions"><button onClick={() => setModal("")}>Cancel</button><button className="is-primary" onClick={confirmPayoutRequest}>Confirm Request</button></div></section></div>}
      {modal === "documents" && <div className="author-payout-modal" role="presentation" onClick={() => setModal("")}><section role="dialog" aria-modal="true" aria-labelledby="author-payout-documents-title" onClick={(event) => event.stopPropagation()}><button className="author-payout-modal-close" onClick={() => setModal("")} aria-label="Close verified documents"><X size={18} /></button><FileCheck2 size={30} /><h2 id="author-payout-documents-title">Verified Documents</h2><ul className="author-payout-document-list"><li><FileText size={17} /><span><strong>Identity document</strong><small>Verified · Government ID</small></span><BadgeCheck size={17} /></li><li><FileText size={17} /><span><strong>Tax information</strong><small>Verified · PAN / Tax form</small></span><BadgeCheck size={17} /></li><li><CreditCard size={17} /><span><strong>Bank account proof</strong><small>Verified · Account ending {bankDetails.accountNumber.slice(-4)}</small></span><BadgeCheck size={17} /></li></ul><button className="is-primary" onClick={() => setModal("")}>Done</button></section></div>}
      {modal === "policy" && <div className="author-payout-modal" role="presentation" onClick={() => setModal("")}><section role="dialog" aria-modal="true" aria-labelledby="author-payout-policy-title" onClick={(event) => event.stopPropagation()}><button className="author-payout-modal-close" onClick={() => setModal("")} aria-label="Close payout policy"><X size={18} /></button><ShieldCheck size={30} /><h2 id="author-payout-policy-title">Payout Policy</h2><p>Approved royalties are paid monthly once your minimum threshold is reached. Transfers generally take 7–10 business days after month end. Keep identity, tax and bank details verified to avoid payout delays.</p><button className="is-primary" onClick={() => setModal("")}>Done</button></section></div>}
      {(modal === "payout" || modal === "resolve") && selectedPayout && <div className="author-payout-modal" role="presentation" onClick={() => { setModal(""); setSelectedPayout(null); }}><section role="dialog" aria-modal="true" aria-labelledby="author-payout-detail-title" onClick={(event) => event.stopPropagation()}><button className="author-payout-modal-close" onClick={() => { setModal(""); setSelectedPayout(null); }} aria-label="Close payout details"><X size={18} /></button>{modal === "resolve" ? <CircleAlert size={30} /> : <CheckCircle2 size={30} />}<h2 id="author-payout-detail-title">{modal === "resolve" ? "Resolve Failed Transfer" : "Payout Details"}</h2><dl className="author-payout-transaction-details"><div><dt>Reference</dt><dd>{selectedPayout.reference}</dd></div><div><dt>Book</dt><dd>{selectedPayout.book}</dd></div><div><dt>Amount</dt><dd>{money(selectedPayout.amount, currency)}</dd></div><div><dt>Status</dt><dd>{selectedPayout.status}</dd></div><div><dt>Transaction ID</dt><dd>{selectedPayout.transactionId}</dd></div><div><dt>Remarks</dt><dd>{selectedPayout.remarks}</dd></div></dl>{modal === "resolve" ? <><p className="author-payout-demo-warning">Check your bank details before retrying. This demo will not initiate a real transfer.</p><div className="author-payout-modal-actions"><button onClick={() => { setBankDraft(bankDetails); setModal("bank"); setSelectedPayout(null); }}>Edit Bank Details</button><button className="is-primary" onClick={retryPayout}>Retry Transfer</button></div></> : <button className="is-primary" onClick={() => { setModal(""); setSelectedPayout(null); }}>Done</button>}</section></div>}
    </div>
  );
}
