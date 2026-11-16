import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  MapPin,
  UserRound,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import "./readerAccount.css";

const readingGenres = [
  { title: "Fiction", icon: "📕", color: "coral" },
  { title: "Non-Fiction", icon: "💡", color: "gold" },
  { title: "Business & Finance", icon: "📊", color: "blue" },
  { title: "Spirituality & Self-Help", icon: "🪷", color: "purple" },
  { title: "Health & Wellness", icon: "💚", color: "green" },
  { title: "History & Culture", icon: "🏛️", color: "orange" },
  { title: "Children's Books", icon: "🙂", color: "yellow" },
  { title: "Travel", icon: "✈️", color: "sky" },
  { title: "Poetry", icon: "🪶", color: "violet" },
  { title: "Biography & Memoir", icon: "👤", color: "rose" },
  { title: "Science & Technology", icon: "⚛️", color: "cyan" },
  { title: "Lifestyle", icon: "☕", color: "amber" },
];

function SocialSignup({ onChoose }) {
  return (
    <div className="reader-social-options">
      <button type="button" onClick={() => onChoose("Google")}><b className="reader-google-mark">G</b>Continue with Google</button>
      <button type="button" onClick={() => onChoose("Apple")}><b className="reader-apple-mark">●</b>Continue with Apple</button>
      <button type="button" onClick={() => onChoose("Facebook")}><b className="reader-facebook-mark">f</b>Continue with Facebook</button>
    </div>
  );
}

function ReaderAccountForm({ mode, onModeChange, onComplete, onNotice }) {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const detailsRef = useRef(null);
  const isSignup = mode === "signup";

  const toggleGenre = (genre) => {
    setSelectedGenres((current) => current.includes(genre)
      ? current.filter((item) => item !== genre)
      : [...current, genre]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onComplete({
      name: String(formData.get("reader-name") || "").trim(),
      email: String(formData.get("reader-email") || "").trim(),
      country: formData.get("reader-country"),
      age: formData.get("reader-age"),
      genres: selectedGenres,
    });
  };

  return (
    <main className="reader-account-main">
      <div className="reader-account-heading-row">
        <div>
          <h2>{isSignup ? <>Create your <span>Reader Account</span></> : "Welcome back, Reader"}</h2>
          <p>{isSignup ? "Join IGBN Publishers and start your reading journey today." : "Sign in to continue reading your books."}</p>
        </div>
        <button className="reader-signin-toggle" onClick={() => onModeChange(isSignup ? "signin" : "signup")}>
          {isSignup ? "Already have an account?" : "New to IGBN?"} <strong>{isSignup ? "Sign In" : "Create account"}</strong>
        </button>
      </div>

      <form className={`reader-account-form ${isSignup ? "is-signup" : "is-signin"}`} onSubmit={handleSubmit}>
        <section className="reader-form-section">
          <div className="reader-form-section-title"><span>1</span><div><h3>{isSignup ? "Sign Up" : "Sign In"}</h3><small>{isSignup ? "Create your account using your email or social media." : "Choose a sign-in method to get back to your library."}</small></div></div>
          <SocialSignup onChoose={onNotice} />
          <div className="reader-form-or"><span>or</span></div>
          {isSignup && <button className="reader-email-continue" type="button" onClick={() => {
            detailsRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
            detailsRef.current?.querySelector("input")?.focus({ preventScroll: true });
          }}><Mail size={17} /> Continue with Email <ArrowRight size={16} /></button>}
          {!isSignup && <p className="reader-signin-email-note"><Mail size={15} /> Sign in securely with your email and password.</p>}
        </section>

        <section className="reader-form-section" ref={detailsRef}>
          <div className="reader-form-section-title"><span>2</span><div><h3>{isSignup ? "Your Details" : "Account Details"}</h3><small>{isSignup ? "Tell us a little about yourself." : "Enter the email and password for your account."}</small></div></div>
          <div className="reader-form-fields">
            {isSignup && <label className="reader-field"><span>Full Name</span><div><UserRound size={15} /><input autoComplete="name" name="reader-name" placeholder="Enter your full name" required /></div></label>}
            <label className="reader-field"><span>Email Address</span><div><Mail size={15} /><input autoComplete="email" name="reader-email" placeholder="Enter your email address" required type="email" /></div></label>
            <label className="reader-field"><span>Password</span><div><LockKeyhole size={15} /><input autoComplete={isSignup ? "new-password" : "current-password"} minLength={8} name="reader-password" placeholder={isSignup ? "Create a password" : "Enter your password"} required type={showPassword ? "text" : "password"} /><button type="button" aria-label={showPassword ? "Hide password" : "Show password"} onClick={() => setShowPassword((value) => !value)}>{showPassword ? <EyeOff size={15} /> : <Eye size={15} />}</button></div></label>
            {isSignup && <label className="reader-field"><span>Country / Region</span><div><MapPin size={15} /><select autoComplete="country-name" defaultValue="India" name="reader-country"><option>India</option><option>United States</option><option>United Kingdom</option><option>Canada</option><option>Australia</option><option>Other</option></select><ChevronDown size={14} /></div></label>}
          </div>
        </section>

        {isSignup && <>
          <section className="reader-form-section reader-content-preferences">
            <div className="reader-form-section-title"><span>3</span><div><h3>Content We Offer</h3><small>Choose genres you enjoy. You can update your preferences later.</small></div></div>
            <div className="reader-category-grid" aria-label="Choose reading genres">{readingGenres.map((genre) => (
              <button type="button" key={genre.title} className={`reader-category ${genre.color} ${selectedGenres.includes(genre.title) ? "is-selected" : ""}`} aria-pressed={selectedGenres.includes(genre.title)} onClick={() => toggleGenre(genre.title)}>
                <i>{genre.icon}</i><span>{genre.title}</span>{selectedGenres.includes(genre.title) && <Check size={12} />}
              </button>
            ))}</div>
          </section>
          <section className="reader-form-section reader-age-section">
            <div className="reader-form-section-title"><span>4</span><div><h3>Your Age</h3><small>This helps us recommend age-appropriate content.</small></div></div>
            <label className="reader-age-select"><UserRound size={15} /><select name="reader-age" defaultValue=""><option value="" disabled>Select your age range</option><option>Under 13</option><option>13–17</option><option>18–24</option><option>25–34</option><option>35–44</option><option>45–54</option><option>55+</option><option>Prefer not to say</option></select><ChevronDown size={14} /></label>
          </section>
          <section className="reader-form-section reader-consent-section">
            <div className="reader-form-section-title"><span>5</span><div><h3>Privacy &amp; Consent</h3><small>Your privacy matters. You are always in control.</small></div></div>
            <label><input required type="checkbox" /><span>I agree to the <Link to="/terms-and-conditions" target="_blank" rel="noreferrer">Terms of Service</Link> and <Link to="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</Link>.</span></label>
            <label><input type="checkbox" /><span>I would like to receive book recommendations, new releases and special offers from IGBN Publishers.</span></label>
          </section>
        </>}

        {!isSignup && <div className="reader-forgot-password"><button type="button" onClick={() => onNotice("Password reset will be available when reader accounts are connected.")}>Forgot password?</button></div>}
        <button className="reader-create-account-button" type="submit">{isSignup ? "Create Account" : "Sign In"} <ArrowRight size={17} /></button>
        <p className="reader-account-form-footnote"><ShieldCheckIcon /> Your details are kept private and secure.</p>
      </form>
    </main>
  );
}

function ShieldCheckIcon() {
  return <CheckCircle2 size={14} aria-hidden="true" />;
}

export default function ReaderAccountPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState("signup");
  const [notice, setNotice] = useState("");

  const completeAccount = (details) => {
    const name = details.name || details.email.split("@")[0] || "Reader";
    navigate("/publishers/readers/home", { state: { account: { ...details, name } } });
  };

  const handleSocial = (provider) => {
    setNotice(`${provider} sign-in will be connected when the reader account API is added.`);
  };

  return (
    <div className="reader-account-page">
      <div className="reader-account-layout">
        <div className="reader-account-side">
          <Link className="reader-back-publishers" to="/publishers"><ArrowLeft size={15} /> Global Publishers</Link>
          <ReaderAccountForm mode={mode} onModeChange={setMode} onComplete={completeAccount} onNotice={handleSocial} />
        </div>
      </div>

      {notice && <div className="reader-account-notice" role="status">{notice}<button onClick={() => setNotice("")} aria-label="Dismiss message"><X size={15} /></button></div>}
    </div>
  );
}
