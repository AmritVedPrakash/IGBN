import { useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, ChevronDown, Clock3, Download, FileText, LockKeyhole, MessageSquareText, RefreshCw, Send, ShieldCheck, Sparkles, UserRound, X } from "lucide-react";
import "./translationsWorkspace.css";

const chapters = [
  "A New Beginning", "The Power Within", "Overcoming Fear", "Finding Balance", "Mindful Living", "Building Habits", "Relationships", "Gratitude", "Purpose and Meaning", "Resilience", "Living with Courage", "The Journey Ahead",
];

const languages = [
  { id: "hindi", name: "Hindi", flag: "🇮🇳", status: "In Review", progress: 82 },
  { id: "spanish", name: "Spanish", flag: "🇪🇸", status: "Author Review", progress: 100 },
  { id: "french", name: "French", flag: "🇫🇷", status: "Not Started", progress: 12 },
];

const translatedText = {
  hindi: "हर अंत एक नई शुरुआत भी होता है। जीवन अक्सर एक दरवाज़ा बंद करता है ताकि दूसरा दरवाज़ा खुले, जो हमें नई संभावनाओं, सीखों और अपने भीतर की शक्ति से जुड़ने का अवसर देता है। अतीत को भूलना नहीं, बल्कि उसके साथ आगे बढ़ने का साहस ही एक नई शुरुआत का अर्थ है।",
  spanish: "Cada final también es un comienzo. La vida suele cerrar una puerta para abrir otra, y nos ofrece nuevas oportunidades para aprender y descubrir nuestra fortaleza interior. Empezar de nuevo no significa olvidar el pasado, sino encontrar el valor para seguir adelante.",
  french: "Chaque fin est aussi un nouveau départ. La vie ferme souvent une porte pour en ouvrir une autre, nous offrant de nouvelles occasions d’apprendre et de découvrir notre force intérieure. Recommencer ne signifie pas oublier le passé, mais trouver le courage d’avancer.",
};

export default function TranslationsWorkspace({ authorName = "Aditi Sharma", book, onBack }) {
  const [activeLanguage, setActiveLanguage] = useState("hindi");
  const [activeChapter, setActiveChapter] = useState(0);
  const [approved, setApproved] = useState(false);
  const [allApproved, setAllApproved] = useState(false);
  const [requestChanges, setRequestChanges] = useState(false);
  const [compareVersions, setCompareVersions] = useState(false);
  const [suggestEdit, setSuggestEdit] = useState(false);
  const [translationDraft, setTranslationDraft] = useState("");
  const [feedback, setFeedback] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [notice, setNotice] = useState("");
  const [modal, setModal] = useState("");

  const selectedLanguage = languages.find((language) => language.id === activeLanguage) || languages[0];
  const currentChapter = chapters[activeChapter];
  const originalCopy = activeChapter === 0
    ? "Every ending is also a beginning. Life often closes one door to open another, leading us to new opportunities, lessons and a deeper awareness of our inner strength. A new beginning is not about forgetting the past, but about choosing to move forward with hope, clarity and courage."
    : `${currentChapter} begins with a simple idea: small, thoughtful choices can help us build a more meaningful life. This chapter explores practical lessons and reflections readers can carry into their everyday journey.`;
  const translationCopy = translationDraft || (activeChapter === 0 ? translatedText[activeLanguage] : `${selectedLanguage.name} translation of “${currentChapter}” is ready for your review. The meaning, tone and chapter context have been carefully preserved for readers.`);
  const completedLanguages = allApproved ? languages.length : languages.filter((language) => language.progress >= 80 || (approved && language.id === activeLanguage)).length;
  const overallProgress = allApproved ? 100 : Math.round(languages.reduce((sum, language) => sum + (approved && language.id === activeLanguage ? 100 : language.progress), 0) / languages.length);

  const submitFeedback = () => {
    if (!feedback.trim()) return;
    setFeedbackSent(true);
    setNotice("Your feedback has been saved for the translation team.");
    setFeedback("");
  };

  const approveCurrentSection = () => {
    setApproved(true);
    setRequestChanges(false);
    setNotice(`${selectedLanguage.name} · Chapter ${activeChapter + 1} approved for this session.`);
  };

  const downloadSample = () => setNotice(`${selectedLanguage.name} sample is ready. Download integration will be connected later.`);

  return (
    <div className="author-translations-page">
      <header className="author-translation-book-header">
        <button className="author-translation-back" onClick={onBack}><ArrowLeft size={16} /> Back to dashboard</button>
        <div className="author-translation-book-summary">
          <div className="author-translation-cover">{(book?.cover || book?.image) && <img src={book.cover || book.image} alt={`${book?.title || "Book"} cover`} />}<span>{book?.title || "Echoes of a New Dawn"}</span></div>
          <div className="author-translation-book-info"><h1>{book?.title || "Echoes of a New Dawn"}</h1><p>{book?.subtitle || "A Journey Within"}</p><span>Full Length Book</span><dl><div><dt>Original Language</dt><dd>{book?.language || "English"}</dd></div><div><dt>Genre</dt><dd>{book?.genre || "Self-Help"}{book?.subGenre && `, ${book.subGenre}`}</dd></div><div><dt>Total Chapters</dt><dd>12</dd></div><div><dt>Translation Status</dt><dd>{completedLanguages} of {languages.length} completed</dd></div></dl></div>
          <section className="author-translation-progress"><h2>Translation Progress</h2><div className="author-translation-progress-bar"><span style={{ width: `${overallProgress}%` }} /></div><p>{completedLanguages} / {languages.length} Languages</p><ul>{languages.map((language) => <li key={language.id}><span>{language.flag} {language.name}</span><small className={`status-${language.id}`}>{language.id === activeLanguage && approved ? "Approved" : language.status}</small></li>)}</ul></section>
          <section className="author-translation-quality"><h2><ShieldCheck size={18} />Quality &amp; Review</h2><ul><li>Professional human translation</li><li>Cultural and contextual accuracy</li><li>Side-by-side review</li><li>You approve before publishing</li></ul></section>
        </div>
      </header>

      <div className="author-translation-language-bar"><div className="author-translation-tabs" role="tablist" aria-label="Translation languages">{languages.map((language) => <button key={language.id} role="tab" aria-selected={activeLanguage === language.id} className={activeLanguage === language.id ? "is-active" : ""} onClick={() => { setActiveLanguage(language.id); setTranslationDraft(""); setApproved(false); setNotice(""); }}>{language.flag} {language.name} Translation</button>)}</div><div className="author-translation-tools"><button onClick={downloadSample}><Download size={15} />Download Sample</button><button onClick={() => setModal("book")}><FileText size={15} />View Full Book</button><button className="author-translation-approve-all" onClick={() => { setAllApproved(true); setNotice("All available translation sections marked approved for this session."); }}><CheckCircle2 size={15} />Approve All Sections</button></div></div>

      <div className="author-translation-workspace">
        <aside className="author-translation-chapters"><h2>Chapters <ChevronDown size={15} /></h2><ol>{chapters.map((chapter, index) => <li key={chapter}><button className={activeChapter === index ? "is-active" : ""} onClick={() => { setActiveChapter(index); setApproved(false); setSuggestEdit(false); setTranslationDraft(""); }}><span>{index + 1}. {chapter}</span>{index === 0 || index === 1 ? <CheckCircle2 size={14} className={index === 0 ? "is-done" : "is-progress"} /> : <LockKeyhole size={13} />}</button></li>)}</ol></aside>

        <main className="author-translation-editor"><div className="author-translation-chapter-heading"><div><h2>Chapter {activeChapter + 1}: {currentChapter}</h2><span>Section {activeChapter + 1} of {chapters.length}</span></div><div><button aria-label="Previous chapter" disabled={activeChapter === 0} onClick={() => setActiveChapter((chapter) => Math.max(0, chapter - 1))}><ArrowLeft size={14} /></button><button aria-label="Next chapter" disabled={activeChapter === chapters.length - 1} onClick={() => setActiveChapter((chapter) => Math.min(chapters.length - 1, chapter + 1))}><ArrowRight size={14} /></button></div></div>
          <div className="author-translation-comparison"><article className="author-translation-text-panel"><div><strong>Original (English)</strong><span>Read Only</span></div><p>{originalCopy}</p><small>Word Count: {originalCopy.split(/\s+/).length}</small></article><span className="author-translation-swap" aria-hidden="true">⇄</span><article className="author-translation-text-panel translated"><div><strong>{selectedLanguage.name} Translation {suggestEdit ? "(Suggested Edit)" : "(Draft)"}</strong><span>{approved ? "Approved" : selectedLanguage.status}</span></div>{suggestEdit ? <textarea value={translationDraft || translationCopy} onChange={(event) => setTranslationDraft(event.target.value)} /> : <p>{translationCopy}</p>}<div className="author-translation-panel-footer"><small>Word Count: {translationCopy.split(/\s+/).length}</small>{suggestEdit && <button onClick={() => { setSuggestEdit(false); setNotice("Suggested edit saved for this session."); }}>Save Edit</button>}</div></article></div>
          {compareVersions && <div className="author-translation-version-compare"><strong><RefreshCw size={14} /> Version comparison</strong><p>Current draft is compared with the previous translator submission. Changes are highlighted for your review.</p></div>}
        </main>

        <aside className="author-translation-review-actions"><h2>Review Actions</h2><button className="is-approve" onClick={approveCurrentSection}><CheckCircle2 size={17} /><span><strong>{approved ? "Section Approved" : "Approve Section"}<small>Translation is accurate</small></strong></span></button><button className="is-request" onClick={() => setRequestChanges((value) => !value)}><ArrowLeft size={17} /><span><strong>Request Changes<small>Provide feedback to translator</small></strong></span></button>{requestChanges && <textarea className="author-translation-request-input" placeholder="Describe the change needed..." value={feedback} onChange={(event) => setFeedback(event.target.value)} />}<button onClick={() => { setRequestChanges(true); setFeedbackSent(false); }}><MessageSquareText size={17} /><span><strong>Comment<small>Add specific suggestions</small></strong></span></button><button onClick={() => setCompareVersions((value) => !value)}><RefreshCw size={17} /><span><strong>{compareVersions ? "Hide Comparison" : "Compare Versions"}<small>Review translation changes</small></strong></span></button>{notice && <p className="author-translation-notice" role="status">{notice}</p>}{requestChanges && <button className="author-translation-send-feedback" onClick={submitFeedback}><Send size={15} />{feedbackSent ? "Feedback Sent" : "Send Feedback"}</button>}</aside>
      </div>

      <div className="author-translation-lower-grid"><section className="author-translation-lower-card author-translation-ai"><h2><Sparkles size={17} />AI Translation + Human Review</h2><p>Translated using AI and reviewed by professional human translators under our quality policy.</p><button onClick={() => setModal("quality")}>Learn More <ArrowRight size={13} /></button></section><section className="author-translation-lower-card author-translation-author-feedback"><h2><UserRound size={17} />Author Feedback</h2><textarea placeholder="Add your feedback or suggested changes..." value={feedback} onChange={(event) => setFeedback(event.target.value)} /><div><small>{feedback.length}/1000</small><button onClick={submitFeedback}><Send size={14} />{feedbackSent ? "Submitted" : "Submit Feedback"}</button></div></section><section className="author-translation-lower-card author-translation-history"><h2><Clock3 size={17} />Translation Versions <button onClick={() => setModal("history")}>View History</button></h2><ul><li><span>v1.2</span><span>{selectedLanguage.name} Translation</span><small>12 Oct 2026, 11:30 AM</small><small>{authorName} (You)</small></li><li><span>v1.1</span><span>{selectedLanguage.name} Translation</span><small>12 Oct 2026, 04:20 PM</small><small>Translator</small></li><li><span>v1.0</span><span>Original Draft</span><small>10 Oct 2026, 09:15 AM</small><small>AI Draft</small></li></ul></section></div>

      {modal && <div className="author-translation-modal" role="presentation" onClick={() => setModal("")}><section role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}><button className="author-translation-modal-close" aria-label="Close" onClick={() => setModal("")}><X size={19} /></button>{modal === "book" ? <><BookOpen size={30} /><h2>{book?.title || "Echoes of a New Dawn"}</h2><p>{originalCopy}</p></> : modal === "history" ? <><Clock3 size={30} /><h2>Translation Version History</h2><p>Version 1.2 is the latest author review draft. Earlier drafts remain available for comparison.</p></> : <><ShieldCheck size={30} /><h2>Translation Quality Review</h2><p>Each translation is reviewed for accuracy, readability, cultural context, and consistency with the original manuscript.</p></>}<button className="author-translation-modal-done" onClick={() => setModal("")}>Done</button></section></div>}
    </div>
  );
}
