import { useState } from "react";
import { ArrowLeft, ArrowRight, BadgeCheck, BookOpen, Check, CheckCircle2, ChevronRight, Copyright, Eye, FileCheck2, FileText, Globe2, Image, Languages, PenLine, ShieldCheck, Tags, UploadCloud, X } from "lucide-react";

const editionArtwork = [
  "https://images.unsplash.com/photo-1540921002383-b2a7ff6a716d?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1503685374561-caac80ea1399?auto=format&fit=crop&w=500&q=85",
  "https://images.unsplash.com/photo-1554788625-51d9860bdb28?auto=format&fit=crop&w=500&q=85",
];

const checklistItems = [
  [UploadCloud, "Manuscript content (original)", "Reviewed & confirmed"],
  [Languages, "All translations reviewed & approved", "3 of 3 languages"],
  [Image, "Cover image and design", "Confirmed"],
  [BookOpen, "Book details and metadata", "Confirmed"],
  [ShieldCheck, "Rights & agreement", "Accepted (v1.0)"],
  [Copyright, "Attribution and edition information", "Confirmed"],
  [Eye, "Preview checked on reader view", "Completed"],
];

export default function FinalProofPublishing({ hidden = false, bookInfo, languageInfo, onBack, onEditStep, onSaveDraft, onContinue }) {
  const [approved, setApproved] = useState(false);
  const [finalConsent, setFinalConsent] = useState(true);
  const [preview, setPreview] = useState(null);
  const [notice, setNotice] = useState("");
  const book = bookInfo || {};
  const editions = languageInfo?.selectedLanguages || [];

  const publishBook = () => {
    if (!finalConsent) return;
    setApproved(true);
    setNotice("Final proof approved. Continue to set your price and distribution regions.");
    onContinue?.();
  };

  return (
    <div className={`author-final-proof ${hidden ? "is-hidden" : ""}`}>
      <div className="author-upload-stepper">
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Upload Manuscript</strong><small>File uploaded</small></div></div>
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Book Information &amp; Cover</strong><small>Details completed</small></div></div>
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Language Options</strong><small>Languages selected</small></div></div>
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Rights &amp; Agreement</strong><small>Accepted</small></div></div>
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Review &amp; Submit</strong><small>Final review complete</small></div></div>
        <div className="author-upload-step is-current"><span>6</span><div><strong>Final Proof &amp; Publishing</strong><small>Approve for publishing</small></div></div>
        <div className="author-upload-step"><span>7</span><div><strong>Pricing &amp; Distribution</strong><small>Set price and regions</small></div></div>
        <button className="author-upload-draft" onClick={onSaveDraft}><FileText size={17} />Save as draft</button>
      </div>

      <header className="author-final-proof-heading"><h1><i />Final Proof &amp; Publishing <em>Approval</em></h1><p>Review the final version of your book and all language editions. Please confirm that the content, cover, attribution and edition details are correct before proceeding to publication.</p></header>

      <div className="author-final-proof-layout">
        <section className="author-final-proof-main">
          <div className="author-final-proof-top-grid">
            <section className="author-final-proof-card author-final-book-preview"><h2><i />Book Preview <small>(Original Edition)</small></h2><div className="author-final-book-content"><div className="author-final-book-cover">{book.cover && <img src={book.cover} alt={`${book.title || "Book"} cover`} />}<div><strong>{book.title || "Your Book Title"}</strong>{book.subtitle && <small>{book.subtitle}</small>}<span>{book.author || "Author name"}</span></div></div><div className="author-final-book-facts"><h3>{book.title || "Your Book Title"}</h3><p>{book.subtitle || "—"}</p><span className="author-final-content-type">{book.contentType || "Full Length Book"}</span><dl><div><dt>Author</dt><dd>{book.author || "—"}</dd></div><div><dt>Genre</dt><dd>{book.genre || "—"}{book.subGenre && `, ${book.subGenre}`}</dd></div><div><dt>Language (Original)</dt><dd>{book.language || "English"}</dd></div><div><dt>Total Chapters</dt><dd>12</dd></div><div><dt>Copyright Year</dt><dd>{book.copyrightYear || "—"}</dd></div><div><dt>Tags</dt><dd>{book.tags?.join(", ") || "—"}</dd></div></dl><button onClick={() => onEditStep(2)}>View Full Details <ArrowRight size={14} /></button></div></div></section>

            <section className="author-final-proof-card author-final-metadata"><div className="author-final-card-heading"><h2><i />Cover &amp; Metadata</h2><button onClick={() => onEditStep(2)}><PenLine size={14} />Edit</button></div><ul>{[[Image, "Cover Image", book.coverName || "Final cover approved"], [FileText, "Title & Subtitle", "Confirmed"], [BadgeCheck, "Author Name", "Confirmed"], [Tags, "Genre & Tags", "Confirmed"], [FileCheck2, "Description / Synopsis", "Confirmed"], [Copyright, "Attribution & Edition Details", "Confirmed"]].map(([Icon, label, detail]) => <li key={label}><span className="author-final-check"><Check size={13} /></span><Icon size={17} /><div><strong>{label}</strong><small>{detail}</small></div></li>)}</ul></section>
          </div>

          <section className="author-final-proof-card author-final-editions"><div className="author-final-card-heading"><h2><i />Translation Editions Preview</h2><small>Review every approved language edition.</small></div><div className="author-final-edition-grid">{editions.map((edition, index) => <article key={edition.id}><div className="author-final-edition-cover"><img src={editionArtwork[index % editionArtwork.length]} alt={`${edition.name} edition artwork`} /><div><strong>{book.title || "Your Book Title"}</strong><small>{edition.name} Edition</small><span>{book.author || "Author"}</span></div></div><div className="author-final-edition-info"><span className="author-final-edition-language">{edition.flag} {edition.name}</span><b><CheckCircle2 size={14} />Approved</b></div><div className="author-final-edition-actions"><button onClick={() => setPreview(edition)}>Preview</button><button onClick={() => setPreview(edition)}>View Details</button></div></article>)}</div></section>
        </section>

        <aside className="author-final-proof-sidebar">
          <section className="author-final-ready"><span><CheckCircle2 size={24} /></span><div><strong>All Required Steps Completed</strong><small>Your book is ready for final approval.</small></div></section>
          <section className="author-final-proof-card author-final-checklist"><h2><i />Final Checklist</h2><ul>{checklistItems.map(([Icon, title, detail]) => <li key={title}><span><Check size={14} /></span><div><strong>{title}</strong><small>{detail}</small></div></li>)}</ul><div className="author-final-ready-note"><ShieldCheck size={23} /><p><strong>Your book is ready for publication!</strong><br />Once you approve, your book will move to pricing and distribution before publishing.</p></div><button className="author-final-approve" disabled={!finalConsent || approved} onClick={publishBook}><PenLine size={17} />{approved ? "Proof Approved" : "Approve & Continue to Pricing"}<ArrowRight size={17} /></button><label className="author-final-consent"><input type="checkbox" checked={finalConsent} onChange={(event) => setFinalConsent(event.target.checked)} /><span><Check size={13} /></span><span>I confirm that I have reviewed the final proof and all information is correct. I authorize IGBN Publishers to publish this book and its approved translations.</span></label>{notice && <p className="author-final-notice" role="status">{notice}</p>}</section>
        </aside>
      </div>

      <footer className="author-final-proof-footer"><button className="author-upload-back" onClick={onBack}><ArrowLeft size={17} />Back</button>{approved && <span role="status">Approval saved for this session. Publishing integration will be connected later.</span>}</footer>

      {preview && <div className="author-final-modal" role="presentation" onClick={() => setPreview(null)}><section role="dialog" aria-modal="true" aria-label={`${preview.name} edition preview`} onClick={(event) => event.stopPropagation()}><button className="author-final-modal-close" aria-label="Close preview" onClick={() => setPreview(null)}><X size={20} /></button><div className="author-final-modal-cover"><img src={editionArtwork[editions.findIndex((item) => item.id === preview.id) % editionArtwork.length]} alt="" /><div><strong>{book.title}</strong><span>{preview.name} edition</span><small>{book.author}</small></div></div><div><h2>{preview.flag} {preview.name} Edition</h2><p>This translation has been approved and is ready for final publishing proof.</p><button className="author-upload-continue" onClick={() => setPreview(null)}>Close Preview</button></div></section></div>}
    </div>
  );
}
