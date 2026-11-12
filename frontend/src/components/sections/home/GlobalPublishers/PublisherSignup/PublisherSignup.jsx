import { useState } from "react";
import { ArrowLeft, BookOpen, Globe2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import PublisherSignupForm from "./PublisherSignupForm";
import PublisherSignInPanel from "./PublisherSignInPanel";
import PublisherSignupIntro from "./PublisherSignupIntro";
import PublisherEmailVerification from "./PublisherEmailVerification";
import AuthorProfileSetup from "./AuthorProfileSetup";
import "./publisherSignup.css";

export default function PublisherSignup() {
  const navigate = useNavigate();
  const [step, setStep] = useState("signup");
  const [account, setAccount] = useState({ name: "", email: "" });

  if (step === "verify") {
    return <PublisherEmailVerification email={account.email} onVerified={() => setStep("profile")} onChangeEmail={() => setStep("signup")} />;
  }

  if (step === "profile") {
    return <AuthorProfileSetup name={account.name} onBack={() => setStep("verify")} onContinue={(profile) => navigate("/publishers/author/dashboard", { state: profile })} />;
  }

  return (
    <main className="publisher-signup-page">
      <div className="publisher-signup-shell">
        <Link to="/publishers" className="publisher-signup-back">
          <ArrowLeft size={16} />
          Back to Global Publishers
        </Link>

        <header className="publisher-signup-heading">
          <span>
            <Globe2 size={16} /> IGBN GLOBAL PUBLISHERS
          </span>
          <h1>Your publishing journey starts here.</h1>
          <p>One account. A world of readers.</p>
        </header>

        <div className="publisher-signup-grid">
          <PublisherSignupIntro />
          <PublisherSignupForm onCreateAccount={(details) => { setAccount(details); setStep("verify"); }} />
          <PublisherSignInPanel />
        </div>

        <footer className="publisher-signup-footer">
          <BookOpen size={15} />
          <span>Stories connect us. Let yours travel further.</span>
        </footer>
      </div>
    </main>
  );
}
