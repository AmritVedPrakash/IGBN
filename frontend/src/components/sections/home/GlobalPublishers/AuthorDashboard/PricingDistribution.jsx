import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, BadgeCheck, BookOpen, Check, CheckCircle2, CircleDollarSign, Globe2, Gift, Languages, MapPin, Megaphone, ShieldCheck, ShoppingBag, Tags, X } from "lucide-react";

const regions = ["North America", "Latin America", "Europe", "Africa", "Middle East", "Asia Pacific", "South Asia"];

export default function PricingDistribution({ hidden = false, bookInfo, languageInfo, onBack, onSaveDraft }) {
  const [accessType, setAccessType] = useState("paid");
  const [distributionMode, setDistributionMode] = useState("worldwide");
  const [selectedRegions, setSelectedRegions] = useState(regions);
  const [purchaseEnabled, setPurchaseEnabled] = useState(true);
  const [rentalEnabled, setRentalEnabled] = useState(true);
  const [subscriptionEnabled, setSubscriptionEnabled] = useState(false);
  const [rentalDuration, setRentalDuration] = useState("30 Days");
  const [rentalPrice, setRentalPrice] = useState("2.99");
  const [editionPrices, setEditionPrices] = useState({});
  const [activeEdition, setActiveEdition] = useState("original");
  const [confirmations, setConfirmations] = useState([false, false, false]);
  const [saved, setSaved] = useState(false);

  const editions = [
    { id: "original", name: `${bookInfo?.language || "English"} (Original)`, range: "$2.99 – $9.99" },
    ...(languageInfo?.selectedLanguages || []).map((language) => ({ id: language.id, name: `${language.name} (Translation)`, range: "$2.99 – $7.99" })),
  ];
  const currentPrice = Number(editionPrices[activeEdition] ?? "5.99") || 0;
  const platformFee = accessType === "paid" ? currentPrice * 0.3 : 0;
  const taxAmount = accessType === "paid" ? Math.max(0, currentPrice - platformFee) * 0.05 : 0;
  const royalty = Math.max(0, currentPrice - platformFee - taxAmount);
  const priceText = (amount) => `$${amount.toFixed(2)}`;
  const allConfirmed = confirmations.every(Boolean) && (distributionMode === "worldwide" || selectedRegions.length > 0) && (accessType === "free" || purchaseEnabled || rentalEnabled);

  const languageRows = useMemo(() => editions, [bookInfo?.language, languageInfo?.selectedLanguages]);

  const toggleRegion = (region) => setSelectedRegions((current) => current.includes(region)
    ? current.filter((item) => item !== region)
    : [...current, region]);

  const toggleConfirmation = (index) => setConfirmations((current) => current.map((value, position) => position === index ? !value : value));

  const savePricing = () => {
    if (!allConfirmed) return;
    onSaveDraft();
    setSaved(true);
  };

  return (
    <div className={`author-pricing-page ${hidden ? "is-hidden" : ""}`}>
      <div className="author-upload-stepper">
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Upload Manuscript</strong><small>File uploaded</small></div></div>
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Book Information &amp; Cover</strong><small>Details completed</small></div></div>
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Language Options</strong><small>Languages selected</small></div></div>
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Rights &amp; Agreement</strong><small>Accepted</small></div></div>
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Review &amp; Submit</strong><small>Final review complete</small></div></div>
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Final Proof &amp; Publishing</strong><small>Approved</small></div></div>
        <div className="author-upload-step is-current"><span>7</span><div><strong>Pricing &amp; Distribution</strong><small>Set price and regions</small></div></div>
        <button className="author-upload-draft" onClick={() => { onSaveDraft(); setSaved(true); }}>{saved ? "Draft saved" : "Save as draft"}</button>
      </div>

      <header className="author-pricing-heading"><h1><i />Pricing &amp; <em>Distribution Settings</em></h1><p>Choose how your book will be available, set pricing, select regions and review royalties before publishing.</p></header>

      <div className="author-pricing-upper-grid">
        <section className="author-pricing-card author-pricing-book-details"><h2><i />Book Details</h2><div className="author-pricing-book-content"><div className="author-pricing-cover">{bookInfo?.cover && <img src={bookInfo.cover} alt={`${bookInfo.title || "Book"} cover`} />}<div><strong>{bookInfo?.title || "Your Book Title"}</strong><small>{bookInfo?.subtitle}</small><span>{bookInfo?.author || "Author"}</span></div></div><div><h3>{bookInfo?.title || "Your Book Title"}</h3><p>{bookInfo?.subtitle || "—"}</p><dl><div><dt>Edition Type</dt><dd>{bookInfo?.contentType || "Full Length Book"}</dd></div><div><dt>Original Language</dt><dd>{languageInfo?.sourceLanguage || bookInfo?.language || "English"}</dd></div><div><dt>Translated Editions</dt><dd>{(languageInfo?.selectedLanguages || []).map((language) => language.name).join(", ") || "None selected"}</dd></div><div><dt>Total Chapters</dt><dd>12</dd></div><div><dt>Formats</dt><dd>eBook, Paperback</dd></div></dl><button onClick={onBack}><BookOpen size={14} />View Book Preview <ArrowRight size={13} /></button></div></div></section>

        <section className="author-pricing-card author-pricing-access"><h2><i />Access Type</h2><div className="author-pricing-access-options">
          <label className={accessType === "paid" ? "is-selected" : ""}><input type="radio" name="book-access" checked={accessType === "paid"} onChange={() => setAccessType("paid")} /><span className="author-pricing-access-icon"><Tags size={20} /></span><span><strong>Paid Access</strong><small>Set a price and earn royalties when readers purchase or rent.</small></span></label>
          <label className={accessType === "free" ? "is-selected" : ""}><input type="radio" name="book-access" checked={accessType === "free"} onChange={() => setAccessType("free")} /><span className="author-pricing-access-icon"><Gift size={20} /></span><span><strong>Free Access</strong><small>Make your book available for free.</small></span></label>
          <label className={accessType === "hybrid" ? "is-selected" : ""}><input type="radio" name="book-access" checked={accessType === "hybrid"} onChange={() => setAccessType("hybrid")} /><span className="author-pricing-access-icon"><BookOpen size={20} /></span><span><strong>Hybrid (Selected Chapters Free)</strong><small>Offer a few chapters for free, then full book as paid.</small></span></label>
        </div></section>

        <section className="author-pricing-card author-pricing-table-card"><h2><i />Pricing <small>(Set price for each edition and format)</small></h2><div className="author-pricing-format-head"><span>Edition / Language</span><span>eBook</span><span>Print <small>(Coming soon)</small></span><span>Audio Book <small>(Coming soon)</small></span><span>Suggested Price Range</span></div><div className="author-pricing-rows">{languageRows.map((edition) => <div className="author-pricing-row" key={edition.id}><span><i>{edition.id === "original" ? "🌐" : (languageInfo?.selectedLanguages || []).find((item) => item.id === edition.id)?.flag}</i>{edition.name}</span><label><span className="sr-only">Price for {edition.name}</span><b>$</b><input inputMode="decimal" value={editionPrices[edition.id] ?? "5.99"} disabled={accessType === "free"} onChange={(event) => setEditionPrices((current) => ({ ...current, [edition.id]: event.target.value.replace(/[^0-9.]/g, "") }))} /></label><span className="author-pricing-coming">—</span><span className="author-pricing-coming">—</span><small>{edition.range}</small></div>)}</div></section>
      </div>

      <div className="author-pricing-lower-grid">
        <section className="author-pricing-card author-pricing-territories"><h2><span>3</span>Distribution Territories</h2><p>Select the countries and regions where your book will be available.</p><label className={`author-pricing-region-mode ${distributionMode === "worldwide" ? "is-selected" : ""}`}><input type="radio" name="distribution-mode" checked={distributionMode === "worldwide"} onChange={() => setDistributionMode("worldwide")} /><Globe2 size={20} /><span><strong>Worldwide (All Countries)</strong><small>Maximum global reach</small></span></label><label className={`author-pricing-region-mode ${distributionMode === "selected" ? "is-selected" : ""}`}><input type="radio" name="distribution-mode" checked={distributionMode === "selected"} onChange={() => setDistributionMode("selected")} /><MapPin size={20} /><span><strong>Selected Regions</strong><small>Choose specific regions or countries</small></span></label><div className={`author-pricing-region-list ${distributionMode === "worldwide" ? "is-muted" : ""}`}>{regions.map((region) => <label key={region}><input type="checkbox" checked={selectedRegions.includes(region)} disabled={distributionMode === "worldwide"} onChange={() => toggleRegion(region)} />{region}</label>)}</div></section>

        <section className="author-pricing-card author-pricing-options"><h2><span>4</span>Purchase &amp; Rental Options</h2><p>Choose how readers can access your book.</p><label className="author-pricing-option-check"><input type="checkbox" checked={purchaseEnabled} onChange={(event) => setPurchaseEnabled(event.target.checked)} /><span><Check size={12} /></span><b>Purchase (Own the Book)</b><small>One-time payment. Reader can access anytime.</small></label><label className="author-pricing-option-check"><input type="checkbox" checked={rentalEnabled} onChange={(event) => setRentalEnabled(event.target.checked)} /><span><Check size={12} /></span><b>Rental (Limited Period Access)</b><small>Set rental price and duration.</small></label><div className={`author-pricing-rental-fields ${rentalEnabled ? "" : "is-disabled"}`}><label>Rental Duration<select value={rentalDuration} disabled={!rentalEnabled} onChange={(event) => setRentalDuration(event.target.value)}><option>7 Days</option><option>14 Days</option><option>30 Days</option><option>60 Days</option></select></label><label>Rental Price (USD)<span><b>$</b><input value={rentalPrice} disabled={!rentalEnabled} onChange={(event) => setRentalPrice(event.target.value.replace(/[^0-9.]/g, ""))} /></span></label></div><label className="author-pricing-option-check is-optional"><input type="checkbox" checked={subscriptionEnabled} onChange={(event) => setSubscriptionEnabled(event.target.checked)} /><span><Check size={12} /></span><b>Subscription Access (if applicable)</b><small>Include in platform subscription library (by approval).</small></label></section>

        <section className="author-pricing-card author-pricing-royalty"><h2><span>5</span>Platform Fees &amp; Royalty Calculation <small>(Example: eBook · English Edition)</small></h2><label className="author-pricing-edition-select">Edition for estimate<select value={activeEdition} onChange={(event) => setActiveEdition(event.target.value)}>{languageRows.map((edition) => <option value={edition.id} key={edition.id}>{edition.name}</option>)}</select></label><div className="author-pricing-calculation"><div><span>List Price (Your Price)</span><b>{accessType === "free" ? "$0.00" : priceText(currentPrice)}</b></div><div><span>Platform Fee (30%)</span><b>− {priceText(platformFee)}</b></div><div><span>Applicable Taxes (est. 5%)</span><b>− {priceText(taxAmount)}</b></div><div className="author-pricing-estimated"><strong>Your Estimated Royalty</strong><b>{priceText(royalty)}</b></div></div><div className="author-pricing-example"><strong>▥&nbsp; Earnings Example</strong><p>If 1,000 copies are sold at {priceText(currentPrice)} (eBook · {languageRows.find((edition) => edition.id === activeEdition)?.name || "English"}):</p><span>Estimated Royalty: {priceText(royalty)} × 1,000 = <b>{priceText(royalty * 1000)}</b></span></div><small className="author-pricing-note">Note: Actual fees and taxes may vary by country and are shown at checkout to readers.</small></section>
      </div>

      <section className="author-pricing-confirm"><div className="author-pricing-confirm-list"><h2><span>6</span>Review &amp; Confirm</h2>{["I confirm that the pricing, territories and distribution options are correct.", "I understand the platform fees, taxes and royalty terms.", "I agree to the IGBN Publishers Pricing Policy and Distribution Terms."].map((item, index) => <label key={item}><input type="checkbox" checked={confirmations[index]} onChange={() => toggleConfirmation(index)} /><span><Check size={12} /></span>{item}</label>)}</div><div className="author-pricing-publish-note"><Megaphone size={24} /><p><strong>Once you confirm and publish, your book will go live on the IGBN platform</strong><br />as per the selected settings. You can update pricing and territories later (subject to review).</p></div><div className="author-pricing-confirm-actions"><button className="author-upload-back" onClick={onBack}><ArrowLeft size={17} />Back</button><button className="author-upload-continue" disabled={!allConfirmed} onClick={savePricing}>{saved ? "Pricing Saved" : "Save & Continue to Publish"}<ArrowRight size={18} /></button></div></section>
    </div>
  );
}
