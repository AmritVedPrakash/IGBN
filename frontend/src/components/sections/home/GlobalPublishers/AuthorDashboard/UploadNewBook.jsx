import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  ArrowLeft, ArrowRight, Bell, BookOpen, Check, CheckCircle2, ChevronDown,
  CircleHelp, CloudUpload, FileText, Headphones, Languages, LogOut, Menu,
  Settings, X,
} from "lucide-react";
import "./uploadNewBook.css";
import BookInformationCover from "./BookInformationCover";
import LanguageOptions from "./LanguageOptions";
import RightsAgreement from "./RightsAgreement";
import ReviewSubmission from "./ReviewSubmission";
import SubmissionStatusReview from "./SubmissionStatusReview";
import FinalProofPublishing from "./FinalProofPublishing";
import PricingDistribution from "./PricingDistribution";

const menuItems = [["Dashboard", "dashboard"], ["My Books", "books"], ["Upload New Book", "upload"], ["Translations", "translations"], ["Sales & Earnings", "sales"], ["Reader Reviews", "reviews"], ["Marketing Tools", "marketing"], ["Profile Settings", "profile"], ["Payments & Payouts", "payments"], ["Help & Support", "help"]];
const formats = ["PDF", "DOCX", "EPUB"];
const contentTypes = ["Fiction & Non-Fiction", "Research & Academic Work", "Short Stories", "Memoirs & Biographies", "Poetry", "Children’s Books", "Articles / Essays", "Serialized Chapters"];

export default function UploadNewBook({ embedded = false, profile: profileProp, onBack }) {
  const { state: routeProfile } = useLocation();
  const navigate = useNavigate();
  const profile = profileProp || routeProfile;
  const fileInput = useRef(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [dragging, setDragging] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [saved, setSaved] = useState(false);
  const [bookStep, setBookStep] = useState(1);
  const [bookInfo, setBookInfo] = useState(null);
  const [languageInfo, setLanguageInfo] = useState(null);
  const [rightsInfo, setRightsInfo] = useState(null);
  const [reviewCycle, setReviewCycle] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const name = profile?.name || "Aditi Sharma";
  const photo = profile?.photo;
  const initials = name.split(/\s+/).map((part) => part[0]).join("").slice(0, 2).toUpperCase();

  const selectFile = (candidate) => {
    if (!candidate) return;
    const extension = candidate.name.split(".").pop().toLowerCase();
    if (!["pdf", "docx", "epub"].includes(extension)) {
      setError("Please choose a PDF, DOCX, or EPUB manuscript.");
      setFile(null);
      return;
    }
    if (candidate.size > 100 * 1024 * 1024) {
      setError("The file is larger than 100 MB. Choose a smaller manuscript.");
      setFile(null);
      return;
    }
    setError("");
    setFile(candidate);
    setSaved(false);
  };

  const formatSize = (bytes) => bytes >= 1024 * 1024
    ? `${(bytes / (1024 * 1024)).toFixed(1)} MB`
    : `${Math.max(1, Math.round(bytes / 1024))} KB`;

  const goToDashboard = () => {
    if (embedded && onBack) onBack();
    else navigate("/publishers/author/dashboard", { state: profile });
  };

  return (
    <main className={`author-upload-page ${embedded ? "is-embedded" : ""}`}>
      {!embedded && <header className="author-upload-topbar">
        <div className="author-upload-brand"><span><BookOpen size={31} /></span><div><strong>IGBN <em>PUBLISHERS</em></strong><small>WRITE. PUBLISH. TRANSLATE. BE DISCOVERED WORLDWIDE.</small></div></div>
        <div className="author-upload-header-art" aria-hidden="true" />
        <div className="author-upload-user-tools"><button className="author-upload-notifications" aria-label="Notifications"><Bell size={20} /><i>3</i></button><button className="author-upload-user" onClick={() => setMenuOpen((open) => !open)}>{photo ? <img src={photo} alt="" /> : <span>{initials}</span>}<b>{name}<small>Author</small></b><ChevronDown size={16} /></button>{menuOpen && <div className="author-upload-user-menu"><button onClick={goToDashboard}><LogOut size={16} /> Dashboard</button><button onClick={() => setMenuOpen(false)}><Settings size={16} /> Profile settings</button></div>}</div>
      </header>}

      <div className={`author-upload-layout ${embedded ? "is-embedded" : ""}`}>
        {!embedded && <aside className={`author-upload-sidebar ${sidebarOpen ? "is-open" : ""}`}>
          <button className="author-upload-close-menu" aria-label="Close menu" onClick={() => setSidebarOpen(false)}><X size={20} /></button>
          <nav aria-label="Author dashboard navigation">{menuItems.map(([label, icon]) => {
            const Icon = icon === "upload" ? CloudUpload : icon === "translations" ? Languages : icon === "help" ? Headphones : icon === "profile" ? Settings : BookOpen;
            return <button key={label} className={icon === "upload" ? "is-active" : ""} onClick={() => { setSidebarOpen(false); if (icon === "dashboard") goToDashboard(); }}><Icon size={20} /><span>{label}</span></button>;
          })}</nav>
          <div className="author-upload-help"><Headphones size={23} /><strong>Need help?</strong><p>Our team is here for you.</p><button>Contact support <ArrowRight size={15} /></button></div>
        </aside>}

        <section className="author-upload-main">
          <div className={`author-upload-manuscript-view ${bookStep !== 1 ? "is-hidden" : ""}`}>
          <div className="author-upload-stepper">
            <div className="author-upload-step is-current"><span>1</span><div><strong>Upload Manuscript</strong><small>Add your book file</small></div></div>
            <div className="author-upload-step"><span>2</span><div><strong>Book Details</strong><small>Title, cover, genre etc.</small></div></div>
            <div className="author-upload-step"><span>3</span><div><strong>Language Options</strong><small>Select languages</small></div></div>
            <div className="author-upload-step"><span>4</span><div><strong>Rights &amp; Agreement</strong><small>Confirm and accept</small></div></div>
            <div className="author-upload-step"><span>5</span><div><strong>Review &amp; Submit</strong><small>Final check</small></div></div>
            <div className="author-upload-step"><span>6</span><div><strong>Final Proof &amp; Publishing</strong><small>Final approval</small></div></div>
            <div className="author-upload-step"><span>7</span><div><strong>Pricing &amp; Distribution</strong><small>Set price and regions</small></div></div>
            <button className="author-upload-draft" onClick={() => setSaved(true)}><FileText size={17} /> {saved ? "Draft saved" : "Save as draft"}</button>
          </div>

          <div className="author-upload-content-grid">
            <section className="author-upload-editor">
              <div className="author-upload-title"><h1><i />Upload your <em>manuscript</em></h1><p>Upload your book file and let your story begin its global journey.</p></div>
              <div className="author-upload-workspace">
                <div className={`author-upload-dropzone ${dragging ? "is-dragging" : ""}`} onDragOver={(event) => { event.preventDefault(); setDragging(true); }} onDragLeave={() => setDragging(false)} onDrop={(event) => { event.preventDefault(); setDragging(false); selectFile(event.dataTransfer.files?.[0]); }}>
                  <CloudUpload size={58} strokeWidth={1.7} />
                  <strong>Drag &amp; drop your manuscript here</strong><span>or</span>
                  <button className="author-upload-choose" onClick={() => fileInput.current?.click()}><CloudUpload size={19} /> Choose file</button>
                  <input ref={fileInput} type="file" accept=".pdf,.docx,.epub,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/epub+zip" onChange={(event) => selectFile(event.target.files?.[0])} />
                  <p>Supported formats: PDF, DOCX, EPUB</p><small>Maximum file size: 100 MB</small>
                  {error && <span className="author-upload-error" role="alert">{error}</span>}
                </div>
                <div className="author-upload-info">
                  <section className="author-upload-info-card"><h2>Supported formats</h2><div className="author-upload-formats">{formats.map((format) => <div key={format}><span className={`author-upload-format-icon ${format.toLowerCase()}`}><FileText size={23} /></span><strong>.{format.toLowerCase()}</strong><small>max 100 MB</small></div>)}</div></section>
                  <section className="author-upload-info-card author-upload-types"><h2>Supported content types</h2><ul>{contentTypes.map((type, index) => <li key={type}><span>{[<BookOpen key="book" />, <Languages key="research" />, <FileText key="stories" />, <BookOpen key="memoir" />, <Check key="poetry" />, <BookOpen key="children" />, <FileText key="essay" />, <BookOpen key="serial" />][index]}</span>{type}</li>)}</ul></section>
                </div>
              </div>

              <div className="author-upload-file-panels">
                <section className="author-upload-file-card"><h2><i />Selected manuscript</h2>{file ? <div className="author-upload-file-detail"><span className={`author-upload-file-icon ${file.name.split(".").pop().toLowerCase()}`}><FileText size={24} /></span><div className="author-upload-file-copy"><strong>{file.name}</strong><small>{formatSize(file.size)} <span>•</span> Ready to continue</small><div className="author-upload-ready"><CheckCircle2 size={15} /> File selected on this device</div></div><button aria-label="Remove selected file" onClick={() => { setFile(null); if (fileInput.current) fileInput.current.value = ""; }}><X size={18} /></button></div> : <div className="author-upload-empty-file"><FileText size={22} /><span>Your selected manuscript will appear here.</span></div>}</section>
                <section className="author-upload-file-card"><h2><i />File preview</h2>{file ? <div className="author-upload-file-detail"><span className="author-upload-preview-file"><FileText size={24} /></span><div className="author-upload-file-copy"><strong>{file.name}</strong><small>{formatSize(file.size)} <span>•</span> Local preview</small><button className="author-upload-preview-button" onClick={() => setPreviewOpen(true)}>Preview file <ArrowRight size={15} /></button></div></div> : <div className="author-upload-empty-file"><FileText size={22} /><span>Choose a file to see its details.</span></div>}</section>
              </div>

              <footer className="author-upload-footer"><div className="author-upload-autosave"><span><Check size={20} /></span><div><strong>{saved ? "Draft saved" : "Manuscript ready"}</strong><small>{saved ? "Your upload step is saved in this session." : "Your selected file is ready. Account syncing will be connected later."}</small></div></div><div className="author-upload-footer-actions"><button className="author-upload-back" onClick={goToDashboard}><ArrowLeft size={17} /> Back</button><button className="author-upload-continue" disabled={!file} onClick={() => { setSaved(true); setBookStep(2); }}>Continue to Book Details <ArrowRight size={18} /></button></div></footer>
            </section>

            <aside className="author-upload-guidance">
              <section className="author-upload-guidance-card"><h2><i />Tips for a smooth upload</h2><ul>{["Ensure your file is complete and error-free.", "Use clear formatting and readable fonts.", "Include all chapters, images and references.", "Make sure you have the rights to publish.", "You can replace the file before submission.", "Your file is securely stored and confidential."].map((tip) => <li key={tip}><Check size={15} />{tip}</li>)}</ul></section>
              <section className="author-upload-guidance-card"><h2><i />File guidelines</h2><ul className="author-upload-bullets">{["Maximum file size: 100 MB", "Recommended: DOCX or EPUB", "Ensure good formatting and clear structure", "Embedded fonts and images are supported", "Avoid password-protected files", "You can upload a revised file anytime"].map((tip) => <li key={tip}>{tip}</li>)}</ul></section>
            </aside>
          </div>
          </div>
          <BookInformationCover
            authorName={name}
            hidden={bookStep !== 2}
            onBack={() => setBookStep(1)}
            onContinue={(details) => { setBookInfo(details); setBookStep(3); }}
            onSaveDraft={() => setSaved(true)}
          />
          <LanguageOptions
            hidden={bookStep !== 3}
            originalLanguage={bookInfo?.language || "English"}
            onBack={() => setBookStep(2)}
            onSaveDraft={() => setSaved(true)}
            onContinue={(details) => { setLanguageInfo(details); setBookStep(4); }}
          />
          <RightsAgreement
            hidden={bookStep !== 4}
            onBack={() => setBookStep(3)}
            onSaveDraft={() => setSaved(true)}
            onContinue={(details) => { setRightsInfo(details); setBookStep(5); }}
          />
          <ReviewSubmission
            key={reviewCycle}
            hidden={bookStep !== 5}
            file={file}
            bookInfo={bookInfo}
            languageInfo={languageInfo}
            rightsInfo={rightsInfo}
            onBack={(step = 4) => setBookStep(step)}
            onSaveDraft={() => setSaved(true)}
            onSubmitted={() => setBookStep(6)}
          />
          <SubmissionStatusReview
            hidden={bookStep !== 6}
            file={file}
            bookInfo={bookInfo}
            languageInfo={languageInfo}
            onBack={() => setBookStep(5)}
            onRevise={() => { setReviewCycle((cycle) => cycle + 1); setBookStep(2); }}
            onFinalProof={() => setBookStep(7)}
          />
          <FinalProofPublishing
            hidden={bookStep !== 7}
            bookInfo={bookInfo}
            languageInfo={languageInfo}
            onBack={() => setBookStep(6)}
            onEditStep={(step) => setBookStep(step)}
            onSaveDraft={() => setSaved(true)}
            onContinue={() => setBookStep(8)}
          />
          <PricingDistribution
            hidden={bookStep !== 8}
            bookInfo={bookInfo}
            languageInfo={languageInfo}
            onBack={() => setBookStep(7)}
            onSaveDraft={() => setSaved(true)}
          />
        </section>
      </div>
      {!embedded && <button className="author-upload-menu-toggle" aria-label="Open navigation" onClick={() => setSidebarOpen((open) => !open)}><Menu size={20} /></button>}
      {!embedded && <div className="author-upload-floating-help" aria-label="Help"><CircleHelp size={20} /></div>}
      {previewOpen && file && <div className="author-upload-modal" role="presentation" onClick={() => setPreviewOpen(false)}><section role="dialog" aria-modal="true" aria-label="Manuscript preview" onClick={(event) => event.stopPropagation()}><button className="author-upload-modal-close" onClick={() => setPreviewOpen(false)} aria-label="Close preview"><X size={20} /></button><FileText size={54} /><h2>{file.name}</h2><p>{formatSize(file.size)} · Preview will be available after the manuscript is uploaded.</p><button className="author-upload-continue" onClick={() => setPreviewOpen(false)}>Close preview</button></section></div>}
    </main>
  );
}
