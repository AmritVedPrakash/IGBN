import { useState } from "react";
import { ArrowLeft, ArrowRight, BadgeCheck, BookOpen, Check, Copyright, FileCheck2, FileText, Globe2, Languages, LockKeyhole, Megaphone, ShieldCheck, X } from "lucide-react";

const clauses = [
  { id: "ownership", icon: Copyright, title: "I confirm that I own the rights to this work or have proper authorization to publish it.", summary: "The content does not infringe any third-party rights.", detail: "You confirm that you are the author or rights holder of this work, or that you have written authorization to publish and distribute it. You are responsible for ensuring that the manuscript does not infringe copyright, trademark, privacy, publicity, or other rights." },
  { id: "third-party", icon: FileText, title: "Permissions for third-party material", summary: "If my book includes images, illustrations, quotes or any third-party content, I have obtained necessary permissions.", detail: "You confirm that all images, illustrations, excerpts, translations, and other third-party materials included in your book are either properly licensed, in the public domain, or used with written permission from the rights holder." },
  { id: "translation", icon: Languages, title: "Translation rights", summary: "I grant IGBN Publishers the right to translate and publish my book in selected languages.", detail: "For languages and services you approve, you authorize IGBN Publishers to arrange translation and make approved translated editions available through the platform, subject to the applicable publishing terms." },
  { id: "distribution", icon: Globe2, title: "Distribution permissions", summary: "I allow IGBN Publishers to distribute, market and make my book available to global readers through its platform.", detail: "You authorize platform distribution, display, marketing, and promotion of the approved book and its metadata in territories and formats described in the applicable publishing terms. You retain ownership of your underlying work." },
  { id: "royalties", icon: BookOpen, title: "Royalty and revenue terms", summary: "I agree to the royalty structure, payment terms and commission model as defined by IGBN Publishers.", detail: "You acknowledge that royalties, commissions, deductions, reporting periods, payout thresholds, and payment methods are governed by the current author terms and any service selections you approve." },
  { id: "policies", icon: ShieldCheck, title: "Platform policies and content guidelines", summary: "I have read and agree to the IGBN Publishers Terms, Content Policy and Community Guidelines.", detail: "You agree to follow the platform's terms, content standards, community guidelines, and applicable laws. Content that violates these rules may be restricted, removed, or declined for publication." },
  { id: "accuracy", icon: FileCheck2, title: "I confirm that all information provided is accurate.", summary: "I understand that false information may result in rejection or removal of my book.", detail: "You confirm that the author, title, rights, language, genre, and other details supplied for this submission are complete and accurate to the best of your knowledge." },
];

const highlights = [
  [Copyright, "You retain the copyright of your work.", "You are the owner of your content."],
  [Globe2, "Global reach through multiple languages.", "Your book can be read by international audiences."],
  [BookOpen, "Transparent royalty structure.", "Clear earnings and timely payments."],
  [Languages, "Professional translation and quality review.", "High-quality, culturally aware translations."],
  [Megaphone, "Marketing support.", "Your book gets visibility across global readers."],
];

export default function RightsAgreement({ hidden = false, onBack, onSaveDraft, onContinue }) {
  const [acceptedClauses, setAcceptedClauses] = useState([]);
  const [finalAcceptance, setFinalAcceptance] = useState(false);
  const [expandedClauses, setExpandedClauses] = useState([]);
  const [agreementOpen, setAgreementOpen] = useState(false);
  const [showAcceptedMessage, setShowAcceptedMessage] = useState(false);

  const allClausesAccepted = acceptedClauses.length === clauses.length;
  const canContinue = allClausesAccepted && finalAcceptance;

  const toggleClause = (id) => {
    setAcceptedClauses((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
    setShowAcceptedMessage(false);
  };

  const toggleDetails = (id) => setExpandedClauses((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);

  return (
    <div className={`author-rights-page ${hidden ? "is-hidden" : ""}`}>
      <div className="author-upload-stepper">
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Upload Manuscript</strong><small>Book file added</small></div></div>
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Book Information &amp; Cover</strong><small>Details completed</small></div></div>
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Language Options</strong><small>Languages selected</small></div></div>
        <div className="author-upload-step is-current"><span>4</span><div><strong>Rights &amp; Agreement</strong><small>Confirm and accept</small></div></div>
        <div className="author-upload-step"><span>5</span><div><strong>Review &amp; Submit</strong><small>Final check</small></div></div>
        <div className="author-upload-step"><span>6</span><div><strong>Final Proof &amp; Publishing</strong><small>Final approval</small></div></div>
        <div className="author-upload-step"><span>7</span><div><strong>Pricing &amp; Distribution</strong><small>Set price and regions</small></div></div>
        <button className="author-upload-draft" onClick={onSaveDraft}><FileText size={17} />Save as draft</button>
      </div>

      <div className="author-rights-heading"><h1><i />Rights and Publishing <em>Agreement</em></h1><p>Please confirm the following to proceed with publishing your book on IGBN Publishers.</p></div>

      <div className="author-rights-layout">
        <section className="author-rights-clauses" aria-label="Publishing agreement confirmations">
          {clauses.map(({ id, icon: Icon, title, summary, detail }) => <article className={`author-rights-clause ${acceptedClauses.includes(id) ? "is-accepted" : ""}`} key={id}>
            <label className="author-rights-clause-check"><input type="checkbox" checked={acceptedClauses.includes(id)} onChange={() => toggleClause(id)} aria-label={`Accept: ${title}`} /><span><Check size={15} /></span></label>
            <Icon className="author-rights-clause-icon" size={24} />
            <div className="author-rights-clause-copy"><strong>{title}</strong><p>{summary}</p>{expandedClauses.includes(id) && <p className="author-rights-clause-detail">{detail}</p>}</div>
            <button className="author-rights-view-details" onClick={() => toggleDetails(id)}>{expandedClauses.includes(id) ? "Hide details" : "View details"}<ArrowRight size={14} /></button>
          </article>)}
          <div className="author-rights-record"><LockKeyhole size={24} /><div><strong>Your agreement version and acceptance will be recorded for our records.</strong><small>You can view or download the accepted agreement anytime from your dashboard.</small></div><span><strong>Agreement Version: 1.0</strong><small>Last Updated: 15 Oct 2026</small></span></div>
        </section>

        <aside className="author-rights-sidebar">
          <section className="author-rights-document"><div className="author-rights-document-photo" /><div className="author-rights-document-copy"><FileText size={30} /><strong>IGBN PUBLISHERS</strong><b>PUBLISHING AGREEMENT</b><p>Please review our complete publishing agreement before accepting.</p><button onClick={() => setAgreementOpen(true)}><FileText size={15} />View Full Agreement</button></div></section>
          <section className="author-rights-highlights"><h2><i />Key Highlights</h2><ul>{highlights.map(([Icon, title, copy]) => <li key={title}><Icon size={25} /><div><strong>{title}</strong><small>{copy}</small></div></li>)}</ul></section>
        </aside>
      </div>

      <footer className="author-rights-footer">
        <button className="author-upload-back" onClick={onBack}><ArrowLeft size={17} />Back</button>
        <label className="author-rights-final-check"><input type="checkbox" checked={finalAcceptance} onChange={(event) => { setFinalAcceptance(event.target.checked); setShowAcceptedMessage(false); }} /><span><Check size={15} /></span><span>I have read, understood and agree to the IGBN Publishers <a href="/terms" target="_blank" rel="noreferrer">Terms &amp; Conditions</a>, <a href="/terms#content-policy" target="_blank" rel="noreferrer">Content Policy</a> and <a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>.</span></label>
        <button className="author-upload-continue" disabled={!canContinue} onClick={() => { setShowAcceptedMessage(true); onContinue?.({ acceptedClauses, accepted: finalAcceptance, agreementVersion: "1.0" }); }}>Accept &amp; Continue to Review <ArrowRight size={18} /></button>
        {showAcceptedMessage && <p className="author-rights-accepted-message" role="status">Agreement accepted for this session. Review &amp; Submit is the next step.</p>}
      </footer>

      {agreementOpen && <div className="author-rights-modal" role="presentation" onClick={() => setAgreementOpen(false)}><section role="dialog" aria-modal="true" aria-labelledby="author-rights-modal-title" onClick={(event) => event.stopPropagation()}><button aria-label="Close agreement preview" onClick={() => setAgreementOpen(false)}><X size={20} /></button><FileText size={34} /><h2 id="author-rights-modal-title">IGBN Publishers Publishing Agreement</h2><p>Agreement preview · Version 1.0 · Updated 15 Oct 2026</p><div>{clauses.map(({ id, title, detail }, index) => <article key={id}><strong>{index + 1}. {title}</strong><p>{detail}</p></article>)}</div><small>This preview summarizes the author confirmations on this screen. Final legal terms can be connected to the approved agreement document.</small></section></div>}
    </div>
  );
}
