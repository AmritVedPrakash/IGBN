import { BookOpen, Check, Globe2, Languages, Sparkles } from "lucide-react";
import publisherImage from "../../../../../assets/global-publishers/why-publish.jpg";

const benefits = [
  "Publish your work for free",
  "Reach readers across 27 countries",
  "Share your story in multiple languages",
];

export default function PublisherSignupIntro() {
  return (
    <section className="publisher-signup-intro" aria-labelledby="signup-intro-title">
      <img
        className="publisher-signup-intro__image"
        src={publisherImage}
        alt="A world of stories and readers"
      />
      <div className="publisher-signup-intro__overlay" />
      <div className="publisher-signup-intro__content">
        <span className="publisher-signup-intro__eyebrow">
          <Sparkles size={14} /> For readers and authors
        </span>
        <div className="publisher-signup-intro__book-icon">
          <BookOpen size={24} />
        </div>
        <h2 id="signup-intro-title">
          Your words can
          <br />
          <span>travel the world.</span>
        </h2>
        <p>
          Find your next favourite read or bring your own story to a global
          community.
        </p>
        <ul>
          {benefits.map((benefit) => (
            <li key={benefit}>
              <span>
                <Check size={13} />
              </span>
              {benefit}
            </li>
          ))}
        </ul>
      </div>
      <div className="publisher-signup-intro__stats">
        <span>
          <Globe2 size={15} /> 27 countries
        </span>
        <span>
          <Languages size={15} /> Many languages
        </span>
      </div>
    </section>
  );
}
