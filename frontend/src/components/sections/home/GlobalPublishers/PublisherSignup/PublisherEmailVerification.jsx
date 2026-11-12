import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Mail, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function PublisherEmailVerification({ email, onVerified, onChangeEmail }) {
  const [code, setCode] = useState(Array(7).fill(""));
  const [message, setMessage] = useState("");
  const inputs = useRef([]);

  const updateDigit = (index, value) => {
    const digit = value.replace(/\D/g, "").slice(-1);
    setCode((current) => current.map((item, position) => position === index ? digit : item));
    setMessage("");
    if (digit && index < 6) inputs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !code[index] && index > 0) inputs.current[index - 1]?.focus();
    if (event.key === "ArrowLeft" && index > 0) inputs.current[index - 1]?.focus();
    if (event.key === "ArrowRight" && index < 6) inputs.current[index + 1]?.focus();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (code.some((digit) => !digit)) {
      setMessage("Enter all 7 digits to continue.");
      return;
    }
    onVerified();
  };

  return (
    <main className="publisher-flow-page">
      <div className="publisher-flow-shell publisher-verify-shell">
        <Link to="/publishers/create-account" className="publisher-signup-back"><ArrowLeft size={18} /> Back to account details</Link>
        <header className="publisher-flow-heading">
          <span className="publisher-flow-kicker">IGBN GLOBAL PUBLISHERS · STEP 2 OF 3</span>
          <h1>Confirm your <span>email</span></h1>
          <p>You are one step closer to joining IGBN Publishers.</p>
        </header>
        <section className="publisher-verify-card" aria-labelledby="verify-title">
          <div className="publisher-verify-icon"><Mail size={30} /></div>
          <h2 id="verify-title">Check your email for the verification code</h2>
          <p className="publisher-verify-description">If an account exists, we have sent a 7-digit code to</p>
          <p className="publisher-verify-email">{email}</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="verification-code-0">Enter your 7-digit code</label>
            <div className="publisher-code-inputs">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(element) => { inputs.current[index] = element; }}
                  id={`verification-code-${index}`}
                  aria-label={`Verification digit ${index + 1}`}
                  autoComplete={index === 0 ? "one-time-code" : "off"}
                  inputMode="numeric"
                  maxLength={1}
                  value={digit}
                  onChange={(event) => updateDigit(index, event.target.value)}
                  onKeyDown={(event) => handleKeyDown(index, event)}
                  onPaste={(event) => {
                    const pasted = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, 7).split("");
                    if (pasted.length) {
                      event.preventDefault();
                      setCode(Array.from({ length: 7 }, (_, position) => pasted[position] || ""));
                      inputs.current[Math.min(pasted.length, 6)]?.focus();
                    }
                  }}
                  required
                />
              ))}
            </div>
            <button className="publisher-flow-primary" type="submit">Verify code <ArrowRight size={20} /></button>
            <p className="publisher-flow-message" aria-live="polite">{message || ""}</p>
          </form>
          <div className="publisher-verify-links">
            <button type="button" onClick={() => setMessage("A new verification code has been requested.")}>Resend code</button>
            <span aria-hidden="true">|</span>
            <button type="button" onClick={onChangeEmail}>Use a different email</button>
          </div>
        </section>
        <p className="publisher-flow-secure"><ShieldCheck size={17} /> Your account details are protected and secure.</p>
      </div>
    </main>
  );
}
