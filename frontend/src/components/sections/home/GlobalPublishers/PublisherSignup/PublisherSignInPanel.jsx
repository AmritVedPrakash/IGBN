import { useState } from "react";
import { ArrowRight, LockKeyhole, ShieldCheck } from "lucide-react";

export default function PublisherSignInPanel() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <aside className="publisher-signup-side-panel">
      <div className="publisher-signin-panel">
        <span className="publisher-signin-panel__icon">
          <LockKeyhole size={19} />
        </span>
        <h2>Welcome back</h2>
        <p>Already have an account? Sign in to continue.</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="publisher-signin-email">Email address</label>
          <input
            autoComplete="email"
            id="publisher-signin-email"
            name="email"
            placeholder="you@example.com"
            required
            type="email"
          />
          <label htmlFor="publisher-signin-password">Password</label>
          <input
            autoComplete="current-password"
            id="publisher-signin-password"
            name="password"
            placeholder="Your password"
            required
            type="password"
          />
          <button type="submit">
            Sign in <ArrowRight size={16} />
          </button>
          <span className="publisher-signin-panel__status" aria-live="polite">
            {submitted ? "Sign-in will be connected in the next step." : ""}
          </span>
        </form>
      </div>

      <div className="publisher-signup-security">
        <ShieldCheck size={20} />
        <div>
          <strong>Your work stays yours</strong>
          <p>Your account and creative work are treated with care.</p>
        </div>
      </div>
    </aside>
  );
}
