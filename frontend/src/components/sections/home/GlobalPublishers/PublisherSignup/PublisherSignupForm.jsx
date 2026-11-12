import { useState } from "react";
import { ArrowRight, BookOpen, Eye, EyeOff, PenLine, UserRound } from "lucide-react";

const accountTypes = [
  { id: "reader", label: "Reader", icon: BookOpen },
  { id: "author", label: "Author", icon: PenLine },
];

export default function PublisherSignupForm({ onCreateAccount }) {
  const [accountType, setAccountType] = useState("author");
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    onCreateAccount({
      name: formData.get("name"),
      email: formData.get("email"),
      accountType,
    });
  };

  return (
    <section className="publisher-signup-form-panel" aria-labelledby="signup-form-title">
      <div className="publisher-signup-form-panel__title">
        <span className="publisher-signup-step">01 <span>/ 03</span></span>
        <span className="publisher-signup-step-label">YOUR ACCOUNT</span>
      </div>
      <h2 id="signup-form-title">Create your account</h2>
      <p className="publisher-signup-form-panel__subtitle">
        Join a global community of readers and storytellers.
      </p>

      <div className="publisher-signup-account-types" aria-label="Choose account type">
        {accountTypes.map(({ id, label, icon: Icon }) => (
          <button
            type="button"
            key={id}
            className={accountType === id ? "is-selected" : ""}
            aria-pressed={accountType === id}
            onClick={() => setAccountType(id)}
          >
            <Icon size={17} />
            {label}
          </button>
        ))}
      </div>

      <form className="publisher-signup-form" onSubmit={handleSubmit}>
        <label htmlFor="publisher-name">Full name</label>
        <div className="publisher-signup-input-wrap">
          <UserRound size={17} />
          <input
            autoComplete="name"
            id="publisher-name"
            name="name"
            placeholder="e.g. Ananya Sharma"
            required
          />
        </div>

        <label htmlFor="publisher-email">Email address</label>
        <div className="publisher-signup-input-wrap">
          <span aria-hidden="true">@</span>
          <input
            autoComplete="email"
            id="publisher-email"
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
        </div>

        <label htmlFor="publisher-password">Create password</label>
        <div className="publisher-signup-input-wrap">
          <input
            autoComplete="new-password"
            id="publisher-password"
            minLength={8}
            name="password"
            placeholder="At least 8 characters"
            required
            type={showPassword ? "text" : "password"}
          />
          <button
            type="button"
            className="publisher-signup-password-toggle"
            aria-label={showPassword ? "Hide password" : "Show password"}
            onClick={() => setShowPassword((visible) => !visible)}
          >
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>

        <label className="publisher-signup-consent">
          <input required type="checkbox" />
          <span>
            I agree to the <a href="/terms-and-conditions">Terms</a> and{" "}
            <a href="/privacy-policy">Privacy Policy</a>.
          </span>
        </label>

        <button className="publisher-signup-submit" type="submit">
          Create {accountType === "author" ? "author" : "reader"} account
          <ArrowRight size={17} />
        </button>
        <p className="publisher-signup-form-note" aria-live="polite">
          Free to join. Your details stay private and secure.
        </p>
      </form>
    </section>
  );
}
