import {
  ArrowRight,
  BookOpen,
  Headphones,
  Languages,
  Layers3,
  PenTool,
  Play,
  Sparkles,
  Globe2,
} from "lucide-react";
import { Link } from "react-router-dom";
import publisherFallback from "../../../../assets/igbndivision/publisher.png";
import { publisherImages } from "./publishersData";

const readerBenefits = [
  { icon: BookOpen, label: "Read Books" },
  { icon: Headphones, label: "Listen to Audiobooks" },
  { icon: Languages, label: "In Your Own Language" },
];

const featuredCovers = [
  { image: publisherImages.fiction, title: "Stories" },
  { image: publisherImages.selfHelp, title: "Ideas" },
  { image: publisherImages.children, title: "Discover" },
  { image: publisherImages.poetry, title: "Poetry" },
];

export default function PublishersHero() {
  return (
    <section className="publishers-hero">
      <div className="publishers-hero-glow" aria-hidden="true" />
      <div className="publishers-hero-content">
        <div className="publishers-hero-kicker">
          <span />
          <Globe2 size={22} />
          <span>Indian voices for a global audience</span>
          <span />
        </div>

        <div className="publishers-hero-panels">
          <article className="publishers-hero-panel publishers-hero-authors">
            <img
              className="publishers-hero-image"
              src={publisherImages.hero}
              alt=""
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = publisherFallback;
              }}
            />
            <div className="publishers-hero-shade" />
            <div className="publishers-hero-author-copy">
              <span className="publishers-hero-audience">
                <PenTool size={20} /> For authors &amp; publishers
              </span>
              <h1 className="publishers-hero-title">
                Your Words Deserve
                <span>The World.</span>
              </h1>
              <span className="publishers-hero-underline" aria-hidden="true" />
              <p>
                A global publishing platform for Indian and international
                authors, bringing stories, knowledge and ideas to readers
                across 27 countries in multiple languages.
              </p>
              <div className="publishers-hero-actions">
                <Link
                  to="/publishers/create-account"
                  className="publishers-hero-button is-gold"
                >
                  Publish your book for free <ArrowRight size={19} />
                </Link>
                <a className="publishers-hero-button is-outline" href="#steps">
                  See how it works <BookOpen size={18} />
                </a>
              </div>
            </div>
            <div className="publishers-hero-caption">
              <BookOpen size={22} />
              <span>Books, people, ideas and cultures</span>
            </div>
          </article>

          <article className="publishers-hero-panel publishers-hero-readers">
            <img
              className="publishers-hero-image"
              src={publisherImages.whyPublish}
              alt=""
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = publisherFallback;
              }}
            />
            <div className="publishers-hero-shade" />
            <div className="publishers-hero-reader-copy">
              <span className="publishers-hero-audience">
                <BookOpen size={21} /> For readers
              </span>
              <h2 className="publishers-hero-title">
                Read, Listen &amp; Enjoy Books from
                <span>International Authors</span>
                <em>in Your Own Language.</em>
              </h2>
              <span className="publishers-hero-underline" aria-hidden="true" />
              <div className="publishers-hero-reader-benefits">
                {readerBenefits.map(({ icon: Icon, label }) => (
                  <div key={label}>
                    <Icon size={25} />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
              <div className="publishers-hero-actions">
                <Link className="publishers-hero-button is-gold" to="/publishers/readers">
                  Discover books &amp; authors <ArrowRight size={19} />
                </Link>
                <a className="publishers-hero-button is-outline" href="#genres">
                  Browse collections <Layers3 size={18} />
                </a>
              </div>
            </div>
            <div className="publishers-hero-tablet" aria-hidden="true">
              <div className="publishers-hero-tablet-screen">
                <span><Sparkles size={13} /> Discover your next story</span>
                <div>
                  {featuredCovers.map((cover) => (
                    <img key={cover.title} src={cover.image} alt="" />
                  ))}
                </div>
                <i><Play size={11} fill="currentColor" /></i>
              </div>
              <div className="publishers-hero-tablet-button" />
            </div>
            <div className="publishers-hero-headphones" aria-hidden="true">
              <Headphones size={54} />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
