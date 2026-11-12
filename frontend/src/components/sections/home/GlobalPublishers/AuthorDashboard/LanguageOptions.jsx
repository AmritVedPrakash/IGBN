import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, BadgeCheck, Check, CheckCircle2, CircleHelp, Globe2, Languages, MessageCircle, ShieldCheck, Sparkles, Users } from "lucide-react";

const languages = [
  { id: "hindi", name: "Hindi", flag: "🇮🇳", region: "India", cost: 2500 },
  { id: "spanish", name: "Spanish", flag: "🇪🇸", region: "Spain, LATAM", cost: 3500 },
  { id: "french", name: "French", flag: "🇫🇷", region: "France, Canada", cost: 3500 },
  { id: "german", name: "German", flag: "🇩🇪", region: "Germany, EU", cost: 3500 },
  { id: "arabic", name: "Arabic", flag: "🇸🇦", region: "Middle East", cost: 4000 },
  { id: "japanese", name: "Japanese", flag: "🇯🇵", region: "Japan", cost: 4500 },
  { id: "russian", name: "Russian", flag: "🇷🇺", region: "Russia, CIS", cost: 4000 },
];

const workflow = [
  [Languages, "Translation by Expert Team", "Professional and accurate translation.", "blue"],
  [BadgeCheck, "Quality Review", "Checked for context and readability.", "gold"],
  [Users, "Your Approval", "You review and approve each translation.", "green"],
  [Globe2, "Publish in Selected Languages", "Your book goes live for global readers.", "blue"],
];

export default function LanguageOptions({ originalLanguage = "English", hidden = false, onBack, onSaveDraft, onContinue }) {
  const languageTable = useRef(null);
  const [sourceLanguage, setSourceLanguage] = useState(originalLanguage);
  const [translationService, setTranslationService] = useState("igbn");
  const [selected, setSelected] = useState(["hindi", "spanish", "french"]);
  const [continueNotice, setContinueNotice] = useState(false);

  useEffect(() => {
    setSourceLanguage(originalLanguage);
    setSelected((current) => current.filter((id) => id !== originalLanguage.toLowerCase()));
  }, [originalLanguage]);

  const selectedLanguages = useMemo(() => languages.filter((language) => selected.includes(language.id)), [selected]);
  const totalCost = translationService === "igbn" ? selectedLanguages.reduce((total, language) => total + language.cost, 0) : 0;
  const price = (amount) => `₹ ${amount.toLocaleString("en-IN")}`;

  const toggleLanguage = (id) => {
    setSelected((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
    setContinueNotice(false);
  };

  const addPopularMarkets = () => {
    const marketLanguages = ["hindi", "spanish", "french"].filter((id) => id !== sourceLanguage.toLowerCase());
    setSelected((current) => [...new Set([...current, ...marketLanguages])]);
  };

  const changeSourceLanguage = (nextLanguage) => {
    setSourceLanguage(nextLanguage);
    setSelected((current) => current.filter((id) => id !== nextLanguage.toLowerCase()));
  };

  return (
    <div className={`author-language-options ${hidden ? "is-hidden" : ""}`}>
      <div className="author-upload-stepper">
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Upload Manuscript</strong><small>Book file added</small></div></div>
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Book Information &amp; Cover</strong><small>Details completed</small></div></div>
        <div className="author-upload-step is-current"><span>3</span><div><strong>Language Options</strong><small>Select languages</small></div></div>
        <div className="author-upload-step"><span>4</span><div><strong>Rights &amp; Agreement</strong><small>Confirm and accept</small></div></div>
        <div className="author-upload-step"><span>5</span><div><strong>Review &amp; Submit</strong><small>Final check</small></div></div>
        <div className="author-upload-step"><span>6</span><div><strong>Final Proof &amp; Publishing</strong><small>Final approval</small></div></div>
        <div className="author-upload-step"><span>7</span><div><strong>Pricing &amp; Distribution</strong><small>Set price and regions</small></div></div>
        <button className="author-upload-draft" onClick={onSaveDraft}>Save as draft</button>
      </div>

      <header className="author-language-title"><h1><i />Language and <em>Translation Settings</em></h1><p>Reach global readers by making your book available in multiple languages.</p><div><Languages size={22} /><span>Our expert translators ensure high-quality, culturally accurate translations.</span></div></header>

      <div className="author-language-layout">
        <section className="author-language-main">
          <div className="author-language-top-grid">
            <section className="author-language-card author-language-source"><h2><span>1</span>Original Language <small>(Your Manuscript Language)</small></h2><label htmlFor="source-language">Source language</label><select id="source-language" value={sourceLanguage} onChange={(event) => changeSourceLanguage(event.target.value)}>{["English", "Hindi", "Spanish", "French", "German", "Arabic", "Japanese", "Russian", "Marathi", "Bengali", "Tamil"].map((language) => <option key={language}>{language}</option>)}</select><small className="author-language-hint"><CheckCircle2 size={14} /> Your uploaded manuscript is in {sourceLanguage}.</small></section>

            <section className="author-language-card author-language-service"><h2>Translation Options</h2><label className="author-language-radio"><input type="radio" name="translation-service" value="igbn" checked={translationService === "igbn"} onChange={() => setTranslationService("igbn")} /><span><strong>Use IGBN Translation Services (Recommended)</strong><small>Professional translation with quality review.</small></span></label><label className="author-language-radio"><input type="radio" name="translation-service" value="self" checked={translationService === "self"} onChange={() => setTranslationService("self")} /><span><strong>I will provide my own translated files</strong><small>I already have translated versions.</small></span></label></section>
          </div>

          <section className="author-language-card author-language-table-card">
            <div className="author-language-table-heading"><div><h2><span>2</span>Select Target Languages</h2><p>Choose the languages you want your book to be available in. We’ll handle the translation and publishing.</p></div><button onClick={addPopularMarkets}><Sparkles size={15} />Select Popular Markets</button></div>
            <div className="author-language-table-scroll" ref={languageTable}><table><thead><tr><th><span className="sr-only">Select</span></th><th>Language</th><th>Region</th><th>Estimated Cost</th><th>Availability</th><th>Status</th></tr></thead><tbody>{languages.filter((language) => language.name !== sourceLanguage).map((language) => <tr key={language.id}><td><input type="checkbox" aria-label={`Select ${language.name}`} checked={selected.includes(language.id)} onChange={() => toggleLanguage(language.id)} /></td><td><span className="author-language-flag">{language.flag}</span>{language.name}</td><td>{language.region}</td><td>{translationService === "igbn" ? price(language.cost) : "—"}</td><td><span className="author-language-available"><i />Available</span></td><td><span className={`author-language-status ${selected.includes(language.id) ? "is-selected" : ""}`}>{selected.includes(language.id) ? "Not Started" : "Not Selected"}</span></td></tr>)}</tbody></table></div>
          </section>

          <div className="author-language-benefits">{[[Globe2, "Global Reach", "Make your book available to readers in 21+ countries."], [Users, "Professional Translators", "Native language experts for accurate, cultural translations."], [ShieldCheck, "Author Approval", "Review and approve each translated version before publishing."], [MessageCircle, "Need a Custom Language?", "Not listed? Our team can help you reach more readers."]].map(([Icon, title, copy]) => <article key={title}><Icon size={32} strokeWidth={1.9} /><div><strong>{title}</strong><p>{copy}</p></div>{title.startsWith("Need") && <button type="button">Request a language <ArrowRight size={14} /></button>}</article>)}</div>
        </section>

        <aside className="author-language-sidebar">
          <section className="author-language-card author-language-selected"><div className="author-language-card-heading"><h2><i />Selected Languages ({selectedLanguages.length})</h2><button onClick={() => languageTable.current?.scrollIntoView({ behavior: "smooth", block: "center" })}>Edit</button></div><ul>{selectedLanguages.length ? selectedLanguages.map((language) => <li key={language.id}><span className="author-language-flag">{language.flag}</span><strong>{language.name}</strong><span>{translationService === "igbn" ? price(language.cost) : "Own translation"}</span><button aria-label={`Remove ${language.name}`} onClick={() => toggleLanguage(language.id)}>×</button></li>) : <li className="author-language-empty">Choose at least one target language.</li>}</ul><div className="author-language-total"><strong>Estimated Translation Cost</strong><b>{price(totalCost)}</b></div><p className="author-language-disclaimer">Final cost may vary based on word count and content complexity. You will be informed before proceeding.</p></section>
          <section className="author-language-card author-language-workflow"><h2><i />Translation Workflow</h2><ol>{workflow.map(([Icon, title, copy, color], index) => <li key={title}><span className={`author-language-workflow-icon ${color}`}><Icon size={17} /></span><div><strong>{title}</strong><small>{copy}</small></div>{index < workflow.length - 1 && <span className="author-language-workflow-line" />}</li>)}</ol></section>
        </aside>
      </div>

      <footer className="author-language-footer"><button className="author-upload-back" onClick={onBack}><ArrowLeft size={17} />Back</button><div>{continueNotice && <p role="status">Your language choices are saved for this session. Rights &amp; Agreement is the next step.</p>}<button className="author-upload-continue" disabled={!selected.length} onClick={() => { onSaveDraft(); setContinueNotice(true); onContinue?.({ sourceLanguage, selectedLanguages, totalCost, translationService }); }}>Save &amp; Continue to Rights &amp; Agreement <ArrowRight size={18} /></button></div></footer>
      <div className="author-language-support-note"><CircleHelp size={15} /> Translation costs are estimates and will be confirmed before you approve a service.</div>
    </div>
  );
}
