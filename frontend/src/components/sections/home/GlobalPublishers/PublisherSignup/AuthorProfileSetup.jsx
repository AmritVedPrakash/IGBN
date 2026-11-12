import { useState } from "react";
import { ArrowLeft, ArrowRight, Camera, Check, Globe2, Image, LockKeyhole, MapPin, Verified } from "lucide-react";

const steps = ["Create Account", "Author Profile", "Upload Manuscript", "Book Details", "Language Options", "Review & Submit"];
const genreOptions = ["Fiction", "Non-Fiction", "Poetry", "Self-Help", "Children's Books", "Biography & Memoir", "Business & Finance", "Spirituality", "Travel", "Other"];

export default function AuthorProfileSetup({ name, onBack, onContinue }) {
  const [displayName, setDisplayName] = useState(name || "");
  const [bio, setBio] = useState("");
  const [country, setCountry] = useState("India");
  const [language, setLanguage] = useState("English");
  const [genres, setGenres] = useState(["Fiction"]);
  const [photo, setPhoto] = useState("");

  const toggleGenre = (genre) => setGenres((selected) => selected.includes(genre)
    ? selected.filter((item) => item !== genre)
    : selected.length < 5 ? [...selected, genre] : selected);

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];
    if (file && file.size <= 5 * 1024 * 1024) setPhoto(URL.createObjectURL(file));
  };

  return (
    <main className="publisher-flow-page author-profile-page">
      <div className="author-setup-shell">
        <button className="publisher-signup-back publisher-flow-back-button" type="button" onClick={onBack}><ArrowLeft size={18} /> Back to email verification</button>
        <div className="author-setup-layout">
          <aside className="author-setup-steps">
            <div className="author-setup-brand"><Globe2 size={18} /> IGBN GLOBAL PUBLISHERS</div>
            <h1>Build your author profile</h1>
            <p>Tell readers about yourself and your work.</p>
            <ol>{steps.slice(0, 2).map((step, index) => <li className={index === 1 ? "is-active" : "is-complete"} key={step}><span>{index === 0 ? <Check size={16} /> : index + 1}</span><div><strong>{step}</strong><small>{index === 1 ? "Tell us about yourself" : "Account verified"}</small></div></li>)}</ol>
          </aside>

          <section className="author-setup-form" aria-labelledby="author-setup-title">
            <div className="author-setup-step-label"><span>02 / 06</span><span>AUTHOR PROFILE</span></div>
            <h2 id="author-setup-title">Author profile setup</h2>
            <p>Create your public author identity. You can update these details later.</p>

            <div className="author-basics-grid">
              <div className="author-basic-fields author-setup-form-grid">
                <label>Pen name / Display name <em>*</em><input value={displayName} onChange={(event) => setDisplayName(event.target.value)} placeholder="Your author name" /></label>
                <label>Real name <span>(Optional)</span><input placeholder="Enter your real name" /></label>
              </div>
              <div className="author-photo-field">
                <label htmlFor="author-profile-photo">Profile photo <em>*</em></label>
                <div className="author-photo-control">
                  <div className="author-photo-avatar">{photo ? <img src={photo} alt="Your profile" /> : <Image size={30} />}</div>
                  <label className="author-photo-upload" htmlFor="author-profile-photo"><Camera size={17} /> {photo ? "Change photo" : "Upload photo"}</label>
                  <input id="author-profile-photo" type="file" accept="image/png,image/jpeg,image/webp" onChange={handlePhotoChange} />
                  <small>JPG, PNG or WebP · Max 5 MB</small>
                </div>
              </div>
            </div>

            <label>Short author bio <em>*</em><textarea value={bio} onChange={(event) => setBio(event.target.value.slice(0, 500))} placeholder="Tell readers about your writing, interests, and the stories you share." rows={4} /><small className="author-bio-count">{bio.length}/500</small></label>

            <div className="author-setup-section-title"><span>2</span>Location &amp; language</div>
            <div className="author-setup-form-grid"><label>Country <em>*</em><select value={country} onChange={(event) => setCountry(event.target.value)}><option>India</option><option>United States</option><option>United Kingdom</option></select></label><label>Preferred language <em>*</em><select value={language} onChange={(event) => setLanguage(event.target.value)}><option>English</option><option>Hindi</option><option>Marathi</option></select></label></div>

            <div className="author-setup-section-title"><span>3</span>Genres &amp; interests</div>
            <p className="author-genre-hint">Select up to 5 genres</p>
            <div className="author-genre-list">{genreOptions.map((genre) => <button type="button" aria-pressed={genres.includes(genre)} className={genres.includes(genre) ? "is-selected" : ""} onClick={() => toggleGenre(genre)} key={genre}>{genres.includes(genre) && <Check size={13} />}{genre}</button>)}</div>

            <div className="author-setup-section-title"><span>4</span>Website &amp; social links <small>(Optional)</small></div>
            <div className="author-setup-form-grid author-social-grid"><label>Website<input placeholder="https://yourwebsite.com" /></label><label>Instagram<input placeholder="https://instagram.com/username" /></label><label>Facebook<input placeholder="https://facebook.com/username" /></label><label>LinkedIn<input placeholder="https://linkedin.com/in/username" /></label></div>

            <div className="author-setup-footer"><span><LockKeyhole size={16} /> Your information is secure and used only to create your author profile.</span><button className="publisher-flow-primary" type="button" onClick={() => onContinue({ name: displayName, photo, bio, country, language, genres })}>Save &amp; continue <ArrowRight size={18} /></button></div>
          </section>

          <aside className="author-profile-preview">
            <div className="author-preview-heading"><span>AUTHOR PROFILE PREVIEW</span><small><Image size={14} /> How readers will see you</small></div>
            <div className="author-preview-cover"><Globe2 size={34} /></div>
            <div className="author-preview-card">
              <div className="author-preview-avatar">{photo ? <img src={photo} alt="Profile preview" /> : <Image size={30} />}</div>
              <div className="author-preview-follow"><button type="button">Follow</button></div>
              <h3>{displayName || "Your Author Name"} <Verified size={16} /></h3>
              <p className="author-preview-role">Author{genres.length ? ` · ${genres.slice(0, 3).join(", ")}` : " · Add your genres"}</p>
              <p className="author-preview-location"><MapPin size={15} /> {country} · {language}</p>
              <p className="author-preview-copy">{bio || "Your author bio will appear here. Share a little about your writing and the stories you love to tell."}</p>
              <div className="author-preview-stats"><span><strong>0</strong>Books</span><span><strong>0</strong>Followers</span><span><strong>★ 4.8</strong>Rating</span></div>
              <div className="author-preview-tip"><Camera size={17} /> Your profile photo and details update in this preview.</div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
