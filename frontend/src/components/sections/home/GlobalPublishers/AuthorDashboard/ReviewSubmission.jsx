import { useState } from "react";
import { ArrowLeft, ArrowRight, BadgeCheck, BookOpen, Check, CheckCircle2, ChevronRight, CircleHelp, ClipboardCheck, Eye, FileCheck2, FileText, Globe2, Languages, ShieldCheck, Star, UploadCloud, X } from "lucide-react";

export default function ReviewSubmission({ hidden = false, file, bookInfo, languageInfo, rightsInfo, onBack, onSaveDraft, onSubmitted }) {
  const [previewConfirmed, setPreviewConfirmed] = useState(false);
  const [finalConfirmed, setFinalConfirmed] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const [modal, setModal] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const book = bookInfo || {};
  const selectedLanguages = languageInfo?.selectedLanguages || [];
  const originalLanguage = languageInfo?.sourceLanguage || book.language || "English";
  const formatSize = (bytes = 0) => bytes >= 1024 * 1024 ? `${(bytes / (1024 * 1024)).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;
  const checklist = [
    [UploadCloud, "Manuscript Uploaded", file?.name || "No manuscript selected", Boolean(file), "View", () => setModal("manuscript")],
    [BookOpen, "Book Information Completed", "Title, genre, synopsis, etc.", Boolean(book.title && book.author), "Edit", () => onBack(2)],
    [Eye, "Cover Image Uploaded", book.coverName || "Book cover ready", Boolean(book.coverName), "Change", () => onBack(2)],
    [Languages, "Language Options Selected", `${originalLanguage} → ${selectedLanguages.map((language) => language.name).join(", ")}`, selectedLanguages.length > 0, "Edit", () => onBack(3)],
    [ShieldCheck, "Rights & Agreement Accepted", `Version ${rightsInfo?.agreementVersion || "1.0"} · 12 Nov 2026`, Boolean(rightsInfo?.accepted && rightsInfo?.acceptedClauses?.length), "View", () => onBack(4)],
  ];
  const readyToSubmit = Boolean(file && book.title && book.author && book.coverName && selectedLanguages.length && rightsInfo?.accepted && previewConfirmed && finalConfirmed);

  const submitBook = () => {
    if (readyToSubmit) {
      setSubmitted(true);
      onSubmitted?.();
    }
  };

  return (
    <div className={`author-review-page ${hidden ? "is-hidden" : ""}`}>
      <div className="author-upload-stepper">
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Upload Manuscript</strong><small>File uploaded</small></div></div>
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Book Information &amp; Cover</strong><small>Details completed</small></div></div>
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Language Options</strong><small>Languages selected</small></div></div>
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Rights &amp; Agreement</strong><small>Accepted</small></div></div>
        <div className="author-upload-step is-current"><span>5</span><div><strong>Review &amp; Submit</strong><small>Final check</small></div></div>
        <div className="author-upload-step"><span>6</span><div><strong>Final Proof &amp; Publishing</strong><small>Final approval</small></div></div>
        <div className="author-upload-step"><span>7</span><div><strong>Pricing &amp; Distribution</strong><small>Set price and regions</small></div></div>
        <button className="author-upload-draft" onClick={onSaveDraft}><FileText size={17} />Save as draft</button>
      </div>

      <header className="author-review-heading"><h1><i />Submission Preview &amp; <em>Checklist</em></h1><p>Please review all information below before submitting your book for publication.</p></header>

      <div className="author-review-layout">
        <section className="author-review-summary">
          <article className="author-review-card author-review-book-card"><h2><i />Book Preview</h2><div className="author-review-cover-wrap"><div className="author-review-cover">{book.cover && <img src={book.cover} alt={`${book.title || "Book"} cover`} />}<div><strong>{book.title || "Your Book Title"}</strong>{book.subtitle && <small>{book.subtitle}</small>}<span>{book.author || "Author name"}</span></div></div><button onClick={() => onBack(2)}><FileText size={14} />Change Cover</button></div></article>

          <article className="author-review-card author-review-details"><div className="author-review-card-heading"><h2><i />Book Details</h2><button onClick={() => onBack(2)}>Edit <ArrowRight size={14} /></button></div><dl><div><dt>Title</dt><dd>{book.title || "—"}</dd></div><div><dt>Subtitle</dt><dd>{book.subtitle || "—"}</dd></div><div><dt>Author</dt><dd>{book.author || "—"}</dd></div><div><dt>Genre</dt><dd>{book.genre || "—"}{book.subGenre && ` · ${book.subGenre}`}</dd></div><div><dt>Tags</dt><dd>{book.tags?.join(", ") || "—"}</dd></div><div><dt>Age Suitability</dt><dd>{book.ageSuitability || "—"}</dd></div><div><dt>Language (Original)</dt><dd>{originalLanguage}</dd></div><div><dt>Target Languages</dt><dd className="author-review-targets">{selectedLanguages.map((language) => <span key={language.id}>{language.flag} {language.name}</span>)}{selectedLanguages.length > 3 && <span>+{selectedLanguages.length - 3} more</span>}</dd></div><div><dt>Content Type</dt><dd>{book.contentType || "—"}</dd></div><div><dt>Copyright Year</dt><dd>{book.copyrightYear || "—"}</dd></div><div className="author-review-synopsis"><dt>Synopsis</dt><dd>{readMore ? book.synopsis : `${(book.synopsis || "—").slice(0, 145)}${(book.synopsis || "").length > 145 ? "…" : ""}`} {(book.synopsis || "").length > 145 && <button onClick={() => setReadMore((value) => !value)}>{readMore ? "Read less" : "Read more"}</button>}</dd></div></dl></article>
        </section>

        <aside className="author-review-side">
          <section className="author-review-card author-review-checklist"><div className="author-review-card-heading"><h2><i />Submission Checklist</h2><span>{checklist.filter(([, , , complete]) => complete).length}/{checklist.length + 2}</span></div><ul>{checklist.map(([Icon, title, description, complete, action, callback]) => <li key={title}><span className={`author-review-check-icon ${complete ? "is-complete" : ""}`}>{complete ? <Check size={16} /> : <Icon size={16} />}</span><div><strong>{title}</strong><small>{description}</small></div><button onClick={callback}>{action}</button></li>)}<li className="author-review-check-row"><label><input type="checkbox" checked={previewConfirmed} onChange={(event) => setPreviewConfirmed(event.target.checked)} /><span><Check size={14} /></span><div><strong>Preview Content</strong><small>Review how your book will appear to readers.</small></div></label><button onClick={() => setModal("preview")}>Preview</button></li><li className="author-review-check-row"><label><input type="checkbox" checked={finalConfirmed} onChange={(event) => setFinalConfirmed(event.target.checked)} /><span><Check size={14} /></span><div><strong>Final Confirmation</strong><small>Click submit to send your book for review.</small></div></label></li></ul></section>
        </aside>
      </div>

      <div className="author-review-bottom-grid">
        <section className="author-review-status"><h2><i />Manuscript Status</h2><p><CheckCircle2 size={18} />File Uploaded Successfully</p><div className="author-review-manuscript-file"><span>{file?.name?.split(".").pop()?.toUpperCase() || "FILE"}</span><div><strong>{file?.name || "Manuscript not selected"}</strong><small>{file ? `${formatSize(file.size)}  |  ${file.name.split(".").pop().toUpperCase()}` : "Upload a manuscript to continue."}</small></div></div><button onClick={() => setModal("manuscript")}>View File</button></section>
        <section className="author-review-languages"><div className="author-review-card-heading"><h2><i />Selected Languages</h2><button onClick={() => onBack(3)}>Edit</button></div><ul><li>{originalLanguage} (Original)<b>Included</b></li>{selectedLanguages.map((language) => <li key={language.id}><span>{language.flag} {language.name} (Translation)</span><b>{language.cost ? `₹ ${language.cost.toLocaleString("en-IN")}` : "Included"}</b></li>)}</ul></section>
        <section className="author-review-rights"><h2><i />Rights Confirmation</h2>{["Ownership confirmed", "Third-party permissions confirmed", "Translation rights granted", "Distribution rights confirmed", "Royalty terms accepted"].map((item) => <p key={item}><CheckCircle2 size={15} />{item}</p>)}</section>
        <section className={`author-review-submit ${submitted ? "is-submitted" : ""}`}><div className="author-review-submit-title"><span>{submitted ? <CheckCircle2 size={25} /> : <Check size={24} />}</span><div><strong>{submitted ? "Submitted for Review" : readyToSubmit ? "Ready to Submit" : "Almost Ready"}</strong><small>{submitted ? "Your book has been added to the review queue." : readyToSubmit ? "All required information is complete. You can now submit your book for review." : "Complete the checklist items above to submit your book."}</small></div></div><button disabled={!readyToSubmit || submitted} onClick={submitBook}><FileCheck2 size={17} />{submitted ? "Submitted" : "Submit for Review"}<ArrowRight size={17} /></button><small>{submitted ? "We’ll send an update when the review is complete." : "Our team will review your book and get back to you within 5–7 business days."}</small></section>
      </div>

      <footer className="author-review-footer"><button className="author-upload-back" onClick={() => onBack(4)}><ArrowLeft size={17} />Back</button>{submitted && <p role="status">Submission received in this session. API submission can be connected later.</p>}</footer>

      {modal && <div className="author-review-modal" role="presentation" onClick={() => setModal("")}><section role="dialog" aria-modal="true" aria-label={modal === "preview" ? "Reader preview" : "Manuscript file information"} onClick={(event) => event.stopPropagation()}><button className="author-review-modal-close" aria-label="Close" onClick={() => setModal("")}><X size={20} /></button>{modal === "preview" ? <><h2>Reader Preview</h2><div className="author-review-modal-book"><img src={book.cover} alt="" /><div><h3>{book.title}</h3><p>{book.subtitle}</p><strong>{book.author}</strong><p>{book.synopsis}</p><small>{book.genre} · {originalLanguage}</small></div></div></> : <><FileText size={42} /><h2>{file?.name || "No manuscript selected"}</h2><p>{file ? `${formatSize(file.size)} · ${file.name.split(".").pop().toUpperCase()}` : "Return to Upload Manuscript to select a file."}</p></>}<button className="author-upload-continue" onClick={() => setModal("")}>Close preview</button></section></div>}
    </div>
  );
}
