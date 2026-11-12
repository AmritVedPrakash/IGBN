import { useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, Check, CheckCircle2, FileText, Globe2, Image as ImageIcon, Languages, ShieldCheck, Sparkles, Trash2, UploadCloud } from "lucide-react";

const genreOptions = ["Fiction", "Non-Fiction", "Poetry", "Self-Help", "Children's Books", "Biography", "Business", "Research", "Other"];

export default function BookInformationCover({ authorName, onBack, onContinue, onSaveDraft, hidden = false }) {
  const [title, setTitle] = useState("Echoes of a New Dawn");
  const [subtitle, setSubtitle] = useState("A Journey Within");
  const [author, setAuthor] = useState(authorName);
  const [contributor, setContributor] = useState("");
  const [synopsis, setSynopsis] = useState("Echoes of a New Dawn is a heartfelt journey of self-discovery, resilience and hope. Through real experiences and deep reflections, the author shares life lessons that inspire readers to find inner strength and embrace a more meaningful life.");
  const [genre, setGenre] = useState("Self-Help");
  const [subGenre, setSubGenre] = useState("Personal Growth");
  const [tags, setTags] = useState(["Self-Discovery", "Mindfulness", "Life Lessons", "Motivation", "Personal Growth"]);
  const [tagInput, setTagInput] = useState("");
  const [ageSuitability, setAgeSuitability] = useState("General Audience");
  const [language, setLanguage] = useState("English");
  const [copyrightYear, setCopyrightYear] = useState(String(new Date().getFullYear()));
  const [contentType, setContentType] = useState("Full Length Book");
  const [cover, setCover] = useState("https://images.unsplash.com/photo-1540921002383-b2a7ff6a716d?auto=format&fit=crop&w=700&q=85");
  const [coverName, setCoverName] = useState("");
  const [coverMeetsMinimum, setCoverMeetsMinimum] = useState(false);
  const [notice, setNotice] = useState("");
  const [continueNotice, setContinueNotice] = useState(false);
  const [draftSaved, setDraftSaved] = useState(false);

  const updateTagInput = (event) => {
    const value = event.target.value;
    if (value.endsWith(",") || value.endsWith("Enter")) return;
    setTagInput(value);
  };

  const addTag = (event) => {
    if (event.key !== "Enter" && event.key !== ",") return;
    event.preventDefault();
    const nextTag = tagInput.trim().replace(/,$/, "");
    if (nextTag && tags.length < 5 && !tags.some((tag) => tag.toLowerCase() === nextTag.toLowerCase())) {
      setTags((current) => [...current, nextTag]);
      setTagInput("");
    }
  };

  const toggleTag = (tag) => setTags((current) => current.includes(tag)
    ? current.filter((item) => item !== tag)
    : current.length < 5 ? [...current, tag] : current);

  const chooseCover = (event) => {
    const input = event.currentTarget;
    const imageFile = input.files?.[0];
    input.value = "";
    if (!imageFile) return;
    if (!["image/jpeg", "image/png"].includes(imageFile.type)) {
      setNotice("Choose a JPG or PNG image for your book cover.");
      return;
    }
    if (imageFile.size > 10 * 1024 * 1024) {
      setNotice("Cover image must be 10 MB or smaller.");
      return;
    }
    const imageUrl = URL.createObjectURL(imageFile);
    setCover(imageUrl);
    setCoverName(imageFile.name);
    setCoverMeetsMinimum(false);
    setNotice("Image selected. Checking dimensions…");
    const imagePreview = new window.Image();
    imagePreview.onload = () => {
      if (imagePreview.naturalWidth < 1000 || imagePreview.naturalHeight < 1600) {
        setNotice(`Preview ready (${imagePreview.naturalWidth} × ${imagePreview.naturalHeight}px). Use at least 1000 × 1600 px to continue.`);
      } else {
        setCoverMeetsMinimum(true);
        setNotice(`Cover ready · ${imagePreview.naturalWidth} × ${imagePreview.naturalHeight}px`);
      }
    };
    imagePreview.onerror = () => {
      setNotice("File selected, but this image could not be previewed. Choose a JPG or PNG image.");
    };
    imagePreview.src = imageUrl;
  };

  const bookDetails = { title, subtitle, author, contributor, synopsis, genre, subGenre, tags, ageSuitability, language, copyrightYear, contentType, cover, coverName };

  return (
    <div className={`author-book-details ${hidden ? "is-hidden" : ""}`}>
      <div className="author-upload-stepper">
        <div className="author-upload-step is-complete"><span><Check size={17} /></span><div><strong>Upload Manuscript</strong><small>Book file added</small></div></div>
        <div className="author-upload-step is-current"><span>2</span><div><strong>Book Information &amp; Cover</strong><small>Title, cover, genre etc.</small></div></div>
        <div className="author-upload-step"><span>3</span><div><strong>Language Options</strong><small>Select languages</small></div></div>
        <div className="author-upload-step"><span>4</span><div><strong>Rights &amp; Agreement</strong><small>Confirm and accept</small></div></div>
        <div className="author-upload-step"><span>5</span><div><strong>Review &amp; Submit</strong><small>Final check</small></div></div>
        <div className="author-upload-step"><span>6</span><div><strong>Final Proof &amp; Publishing</strong><small>Final approval</small></div></div>
        <div className="author-upload-step"><span>7</span><div><strong>Pricing &amp; Distribution</strong><small>Set price and regions</small></div></div>
        <button className="author-upload-draft" onClick={() => { onSaveDraft(); setDraftSaved(true); }}><FileText size={17} />{draftSaved ? "Draft saved" : "Save as draft"}</button>
      </div>

      <div className="author-book-title"><h1><i />Book Information &amp; <em>Cover</em></h1><p>Tell us about your book. This information will be visible to readers on your book page.</p></div>

      <div className="author-book-layout">
        <section className="author-book-editor">
          <div className="author-book-top-fields">
            <section className="author-book-card author-book-basic-card"><h2><i />Basic Details</h2>
              <div className="author-book-fields two-cols">
                <label>Title <b>*</b><input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Enter your book title" maxLength={120} /></label>
                <label>Subtitle <small>(Optional)</small><input value={subtitle} onChange={(event) => setSubtitle(event.target.value)} placeholder="Add a subtitle" maxLength={120} /></label>
                <label>Author Name <b>*</b><input value={author} onChange={(event) => setAuthor(event.target.value)} placeholder="Author name" /></label>
                <label>Contributor <small>(Optional)</small><input value={contributor} onChange={(event) => setContributor(event.target.value)} placeholder="Illustrator, editor, co-author etc." /></label>
              </div>
              <label className="author-book-synopsis">Book Description / Synopsis <b>*</b><textarea value={synopsis} onChange={(event) => setSynopsis(event.target.value.slice(0, 1000))} rows={5} placeholder="Write a compelling description of your book." /><small className="author-book-counter">{synopsis.length}/1000</small></label>
            </section>

            <section className="author-book-card author-book-cover-card"><h2><i />Book Cover <b>*</b></h2>
              <label className="author-book-cover-upload" htmlFor="author-book-cover-file"><UploadCloud size={34} /><strong>Upload Book Cover</strong><small>JPG, PNG · Min 1000 × 1600 px</small><span>Choose file</span></label>
              <input id="author-book-cover-file" type="file" accept="image/png,image/jpeg,.png,.jpg,.jpeg" onChange={chooseCover} />
              {coverName && <div className="author-book-cover-file"><ImageIcon size={16} /><span>{coverName}</span><button aria-label="Remove cover" onClick={() => { setCover(""); setCoverName(""); setCoverMeetsMinimum(false); setNotice(""); }}><Trash2 size={15} /></button></div>}
              {notice && <small className="author-book-notice" role="status">{notice}</small>}
            </section>

            <section className="author-book-card author-book-live-preview"><h2><i />Live Preview <small>(How it will appear to readers)</small></h2><div className="author-book-cover-preview">{cover ? <img src={cover} alt="Book cover preview" /> : <div className="author-book-cover-placeholder"><BookOpen size={40} /><span>Upload a cover to preview</span></div>}<div className="author-book-cover-copy"><strong>{title || "Your Book Title"}</strong>{subtitle && <small>{subtitle}</small>}<span>{author || "Author name"}</span></div></div></section>
          </div>

          <div className="author-book-bottom-fields">
            <section className="author-book-card author-book-genres"><h2><i />Genre &amp; Tags</h2><div className="author-book-fields two-cols"><label>Primary Genre <b>*</b><select value={genre} onChange={(event) => setGenre(event.target.value)}>{genreOptions.map((option) => <option key={option}>{option}</option>)}</select></label><label>Sub Genre <small>(Optional)</small><select value={subGenre} onChange={(event) => setSubGenre(event.target.value)}><option>Personal Growth</option><option>Fantasy</option><option>Contemporary</option><option>Romance</option><option>Education</option><option>Memoir</option></select></label></div><label className="author-book-tag-label">Tags <small>(Select up to 5)</small></label><div className="author-book-tag-options">{["Self-Discovery", "Mindfulness", "Life Lessons", "Motivation", "Personal Growth"].map((tag) => <button type="button" className={tags.includes(tag) ? "is-selected" : ""} aria-pressed={tags.includes(tag)} key={tag} onClick={() => toggleTag(tag)}>{tags.includes(tag) && <Check size={12} />}{tag}</button>)}</div><div className="author-book-tags">{tags.map((tag) => <button type="button" key={tag} onClick={() => toggleTag(tag)}>{tag}<XIcon /></button>)}<input value={tagInput} onChange={updateTagInput} onKeyDown={addTag} placeholder={tags.length < 5 ? "Add a tag and press Enter" : "Maximum 5 tags selected"} disabled={tags.length >= 5} /></div></section>

            <section className="author-book-card author-book-additional"><h2><i />Additional Information</h2><div className="author-book-fields two-cols"><label>Age Suitability <b>*</b><select value={ageSuitability} onChange={(event) => setAgeSuitability(event.target.value)}><option>General Audience</option><option>Children</option><option>Young Adult</option><option>18+</option></select></label><label>Language <b>*</b><select value={language} onChange={(event) => setLanguage(event.target.value)}><option>English</option><option>Hindi</option><option>Marathi</option><option>Bengali</option><option>Tamil</option></select></label><label>Copyright Year <b>*</b><input type="number" min="1900" max={new Date().getFullYear() + 1} value={copyrightYear} onChange={(event) => setCopyrightYear(event.target.value)} /></label><label>Content Type <b>*</b><select value={contentType} onChange={(event) => setContentType(event.target.value)}><option>Full Length Book</option><option>Short Story</option><option>Poetry Collection</option><option>Article / Essay</option><option>Serialized Chapters</option></select></label></div></section>

            <section className="author-book-card author-book-details-preview"><h2><i />Book Details Preview</h2><ul><li><FileText size={15} /><span><b>Title:</b> {title || "—"}</span></li><li><FileText size={15} /><span><b>Subtitle:</b> {subtitle || "—"}</span></li><li><BookOpen size={15} /><span><b>Author:</b> {author || "—"}</span></li><li><Sparkles size={15} /><span><b>Genre:</b> {genre}{subGenre && ` > ${subGenre}`}</span></li><li><Languages size={15} /><span><b>Language:</b> {language}</span></li><li><Globe2 size={15} /><span><b>Age Suitability:</b> {ageSuitability}</span></li><li><ShieldCheck size={15} /><span><b>Copyright Year:</b> {copyrightYear || "—"}</span></li><li><FileText size={15} /><span><b>Type:</b> {contentType}</span></li></ul></section>
          </div>

          <footer className="author-upload-footer author-book-footer"><div className="author-upload-autosave"><span><CheckCircle2 size={20} /></span><div><strong>Secure author workspace</strong><small>Your book details stay private until you submit for publication.</small></div></div><div className="author-upload-footer-actions"><button className="author-upload-back" onClick={onBack}><ArrowLeft size={17} />Back</button><button className="author-upload-continue" disabled={!title.trim() || !author.trim() || !synopsis.trim() || !coverName || !coverMeetsMinimum} onClick={() => { onSaveDraft(); onContinue(bookDetails); setDraftSaved(true); setContinueNotice(true); }}>Save &amp; Continue to Language Options <ArrowRight size={18} /></button></div>{continueNotice && <p className="author-upload-next-note" role="status">Book details saved for this session. Language Options is the next step.</p>}</footer>
        </section>

        <aside className="author-book-tips">
          <section className="author-book-card"><h2><i />Important Tips</h2><ul>{["Use a clear and attractive book cover.", "Write a compelling and concise description.", "Choose relevant genres and tags.", "Ensure all mandatory fields are filled.", "Avoid using copyrighted images.", "Check spelling and grammar before submission."].map((tip) => <li key={tip}><CheckCircle2 size={16} />{tip}</li>)}</ul></section>
          <section className="author-book-card author-book-secure"><ShieldCheck size={26} /><p>Your data is secure and will only be used for publishing your book.</p></section>
        </aside>
      </div>
    </div>
  );
}

function XIcon() {
  return <span aria-hidden="true">×</span>;
}
