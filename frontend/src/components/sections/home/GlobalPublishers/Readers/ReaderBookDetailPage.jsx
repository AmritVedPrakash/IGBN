import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronRight,
  Clock3,
  Download,
  FileText,
  Headphones,
  LockKeyhole,
  ShieldCheck,
  Star,
  Tablet,
  Users,
} from "lucide-react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import ReaderPortalHeader from "./ReaderPortalHeader";
import { useReaderCart } from "./useReaderCart";
import { getReaderBookDetails, readerBooks } from "./readerBooks";
import "./readerBookDetail.css";

const money = (amount) => `$${amount.toFixed(2)}`;

function Stars({ rating, size = 15 }) {
  return (
    <span className="reader-detail-stars" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star key={index} size={size} fill={index < Math.round(rating) ? "currentColor" : "none"} />
      ))}
    </span>
  );
}

export default function ReaderBookDetailPage() {
  const { bookId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { addItem, storageError } = useReaderCart();
  const sampleRef = useRef(null);
  const book = readerBooks.find((item) => item.id === bookId);
  const details = useMemo(() => book ? getReaderBookDetails(book) : null, [book]);
  const [selectedEdition, setSelectedEdition] = useState(0);
  const [selectedArtwork, setSelectedArtwork] = useState("cover");
  const [synopsisExpanded, setSynopsisExpanded] = useState(false);
  const [sampleExpanded, setSampleExpanded] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    if (location.state?.openSample) {
      setSampleExpanded(true);
      window.setTimeout(() => sampleRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 80);
    }
  }, [location.pathname, location.state?.openSample]);

  useEffect(() => {
    if (storageError) setNotice(storageError);
  }, [storageError]);

  if (!book || !details) {
    return (
      <div className="reader-home-page reader-book-detail-page">
        <main className="reader-detail-not-found">
          <BookOpen size={35} />
          <h1>We couldn't find that book</h1>
          <p>It may have moved or is no longer available in this demo catalog.</p>
          <Link to="/publishers/readers/home"><ArrowLeft size={16} /> Back to books</Link>
        </main>
      </div>
    );
  }

  const recommendations = readerBooks
    .filter((item) => item.id !== book.id && item.genre === book.genre)
    .concat(readerBooks.filter((item) => item.id !== book.id && item.genre !== book.genre))
    .slice(0, 4);
  const printEdition = details.editions.find((edition) => edition.format === "Paperback");
  const account = location.state?.account;
  const savedIds = location.state?.savedIds || [];
  const search = location.state?.search || "";
  const showLibrary = Boolean(location.state?.showLibrary);
  const homeState = { account, savedIds, search, showLibrary };

  const showNotice = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 3800);
  };

  const showSample = () => {
    setSampleExpanded(true);
    window.setTimeout(() => sampleRef.current?.scrollIntoView({ behavior: "smooth", block: "center" }), 0);
  };

  const handlePurchase = (format, price, language = book.language) => {
    addItem(book, { format, language, price });
    navigate("/publishers/readers/checkout", { state: homeState });
  };

  return (
    <div className="reader-home-page reader-book-detail-page">
      <ReaderPortalHeader account={account} savedIds={savedIds} search={search} onNotice={showNotice} />

      <main className="reader-detail-main">
        <nav className="reader-detail-breadcrumbs" aria-label="Breadcrumb">
          <Link to="/publishers/readers/home" state={homeState}>Home</Link><ChevronRight size={14} />
          <Link to="/publishers/readers/home#books" state={homeState}>Books</Link><ChevronRight size={14} />
          <Link to="/publishers/readers/home#reader-filters" state={homeState}>{book.genre}</Link><ChevronRight size={14} />
          <span aria-current="page">{book.title}</span>
        </nav>

        <div className="reader-detail-grid">
          <section className="reader-detail-panel reader-detail-gallery" aria-label="Book preview">
            <div className={`reader-detail-artwork ${selectedArtwork !== "cover" ? "is-page-preview" : ""}`}>
              {selectedArtwork === "cover" ? (
                <>
                  <img src={book.image} alt={`Cover of ${book.title}`} />
                  <span className="reader-detail-cover-tag">{book.collection === "trending" ? "Reader favorite" : "Featured read"}</span>
                  <span className="reader-detail-cover-title">{book.title}<small>{details.subtitle}</small></span>
                </>
              ) : (
                <div className="reader-detail-page-preview">
                  <span>{selectedArtwork === "inside" ? "CHAPTER 1" : "ABOUT THIS BOOK"}</span>
                  <strong>{selectedArtwork === "inside" ? "A New Beginning" : book.title}</strong>
                  <p>{selectedArtwork === "inside" ? details.sample : book.description}</p>
                  <small>{book.author}</small>
                </div>
              )}
            </div>
            <div className="reader-detail-thumbnails" aria-label="Book images">
              <button className={selectedArtwork === "cover" ? "is-selected" : ""} type="button" onClick={() => setSelectedArtwork("cover")} aria-label="Show book cover">
                <img src={book.image} alt="" /><span>Cover</span>
              </button>
              <button className={selectedArtwork === "inside" ? "is-selected" : ""} type="button" onClick={() => setSelectedArtwork("inside")} aria-label="Preview inside pages">
                <span className="reader-detail-thumb-page"><BookOpen size={18} /></span><span>Inside</span>
              </button>
              <button type="button" onClick={showSample} aria-label="Open sample reading">
                <span className="reader-detail-thumb-page"><FileText size={18} /></span><span>Sample</span>
              </button>
            </div>

            <section className="reader-detail-author-card" id="about-author">
              <h2 className="reader-detail-section-title">About the Author</h2>
              <div className="reader-detail-author">
                <span className="reader-detail-avatar" aria-hidden="true">{book.author.split(/\s+/).map((part) => part[0]).join("").replace(".", "").slice(0, 2)}</span>
                <div><strong>{book.author}</strong><span className="reader-detail-verified"><Check size={13} /> Verified Author</span></div>
              </div>
              <p>{details.authorBio}</p>
              <button type="button" className="reader-detail-text-link" onClick={() => showNotice("More author stories and books will be available soon.")}>View Author Profile <ArrowRight size={14} /></button>
            </section>
          </section>

          <div className="reader-detail-information">
            <section className="reader-detail-panel reader-detail-overview">
              <span className="reader-detail-genre">{book.genre}</span>
              <h1>{book.title}</h1>
              <p className="reader-detail-subtitle">{details.subtitle}</p>
              <p className="reader-detail-byline">By <a href="#about-author">{book.author}</a> <span className="reader-detail-verified"><Check size={13} /> Verified Author</span></p>
              <div className="reader-detail-social-proof">
                <span><Star size={16} fill="currentColor" /> {book.rating.toFixed(1)} <a href="#reader-ratings">({details.reviewCount} reviews)</a></span>
                <i />
                <span><BookOpen size={16} /> {details.pages} pages</span>
                <i />
                <span><Users size={16} /> {details.readers} readers</span>
              </div>
              <p className="reader-detail-one-line">{book.description}</p>
              <div className="reader-detail-tags"><span>Self-Discovery</span><span>Emotional Growth</span><span>Contemporary Fiction</span><span>Life Lessons</span></div>

              <section className="reader-detail-synopsis">
                <h2 className="reader-detail-section-title">Synopsis</h2>
                <p className={synopsisExpanded ? "is-expanded" : ""}>{details.synopsis}</p>
                <button type="button" className="reader-detail-text-link" onClick={() => setSynopsisExpanded((expanded) => !expanded)}>{synopsisExpanded ? "Read Less" : "Read More"} <ChevronRight size={14} /></button>
              </section>
            </section>

            <section className="reader-detail-panel reader-detail-editions" id="available-editions">
              <div className="reader-detail-section-heading"><h2 className="reader-detail-section-title">Available Editions &amp; Languages</h2><span>Demo catalog</span></div>
              <div className="reader-detail-edition-list">
                {details.editions.map((edition, index) => (
                  <div className={`reader-detail-edition ${selectedEdition === index ? "is-selected" : ""}`} key={`${edition.language}-${edition.format}`}>
                    <button className="reader-detail-edition-select" type="button" onClick={() => setSelectedEdition(index)} aria-pressed={selectedEdition === index}>
                      {selectedEdition === index ? <Check size={16} /> : <BookOpen size={16} />}
                      <span>{edition.language}</span>
                      <small>{edition.format === "eBook" ? "eBook" : "Paperback"}</small>
                    </button>
                    <strong>{money(edition.price)}</strong>
                    <button className="reader-detail-buy-edition" type="button" onClick={() => handlePurchase(edition.format, edition.price, edition.language)}>Buy</button>
                  </div>
                ))}
              </div>
              <p className="reader-detail-edition-note">More formats and translations may be added as the catalog grows.</p>
            </section>
          </div>

          <div className="reader-detail-commerce">
            <aside className="reader-detail-panel reader-detail-purchase" aria-label="Purchase options">
              <div className="reader-detail-format-tabs">
                <button className="is-selected" type="button"><Tablet size={16} /> eBook</button>
                <button type="button" onClick={() => handlePurchase("Paperback", printEdition.price, printEdition.language)}><BookOpen size={16} /> Print Book</button>
                <button type="button" onClick={() => showNotice("Audiobook details will be available soon.")}><Headphones size={16} /> Audiobook</button>
              </div>
              <div className="reader-detail-price">
                <strong>{money(book.price)}</strong><del>{money(book.price + 2)}</del><span>28% OFF</span>
              </div>
              <ul className="reader-detail-benefits">
                <li><Check size={14} /> Instant access</li>
                <li><Check size={14} /> Read on web, mobile or tablet</li>
                <li><Check size={14} /> Yours to keep forever</li>
                <li><Check size={14} /> Available in multiple languages</li>
              </ul>
              <button type="button" className="reader-detail-primary-action" onClick={() => handlePurchase("eBook", book.price)}><BookOpen size={16} /> Buy eBook · {money(book.price)}</button>
              <div className="reader-detail-secondary-actions">
                <button type="button" onClick={() => handlePurchase("30-day eBook Rental", 1.99)}><Clock3 size={17} /><span>Rent eBook<small>$1.99 · Read for 30 days</small></span></button>
                <button type="button" onClick={showSample}><BookOpen size={17} /><span>Read Free<small>Limited chapters</small></span></button>
              </div>
              <div className="reader-detail-trust">
                <span><LockKeyhole size={17} /> Secure Payment</span><span><Clock3 size={17} /> Instant Access</span><span><Tablet size={17} /> Multiple Devices</span><span><ShieldCheck size={17} /> DRM Protected</span>
              </div>
            </aside>

            <section className="reader-detail-panel reader-detail-sample" id="sample-reading" ref={sampleRef}>
              <div className="reader-detail-section-heading"><div><h2 className="reader-detail-section-title">Sample Reading</h2><p>Read a few chapters for free</p></div><span>Chapter 1</span></div>
              <article className={`reader-detail-sample-page ${sampleExpanded ? "is-expanded" : ""}`}>
                <h3>A New Beginning</h3>
                <p>{details.sample}</p>
                {sampleExpanded && <p>{book.description} The road ahead was uncertain, but for the first time in a long while, that did not feel like something to fear. It felt like room to grow, to listen, and to choose what came next.</p>}
              </article>
              <div className="reader-detail-sample-actions">
                <button type="button" className="reader-detail-primary-action" onClick={() => setSampleExpanded((expanded) => !expanded)}><BookOpen size={16} /> {sampleExpanded ? "Show Less" : "Read Sample"}</button>
                <button type="button" className="reader-detail-download" onClick={() => showNotice("A downloadable sample will be available when the book files are connected.")}><Download size={16} /> Download Sample (PDF)</button>
              </div>
            </section>
          </div>

          <section className="reader-detail-panel reader-detail-ratings" id="reader-ratings">
            <div className="reader-detail-rating-summary">
              <h2 className="reader-detail-section-title">Ratings &amp; Reviews</h2>
              <strong>{book.rating.toFixed(1)} <small>out of 5</small></strong>
              <Stars rating={book.rating} size={17} />
              <p>{details.reviewCount} reader reviews</p>
              <button type="button" onClick={() => showNotice("Sign in to write a review. Reader accounts will be connected soon.")}>Write a Review</button>
            </div>
            <div className="reader-detail-rating-bars" aria-label="Rating distribution">
              {[["5", 72], ["4", 20], ["3", 5], ["2", 2], ["1", 1]].map(([label, percent]) => (
                <div key={label}><span>{label} <Star size={12} fill="currentColor" /></span><i><b style={{ width: `${percent}%` }} /></i><small>{percent}%</small></div>
              ))}
            </div>
            <div className="reader-detail-review-list">
              {details.reviews.map((review) => (
                <article key={review.name}>
                  <span className="reader-detail-review-avatar">{review.name.split(" ").map((part) => part[0]).join("")}</span>
                  <div><header><strong>{review.name}</strong><time>{review.date}</time></header><Stars rating={review.rating} size={12} /><p>{review.text}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section className="reader-detail-panel reader-detail-related">
            <div className="reader-detail-section-heading"><div><h2 className="reader-detail-section-title">You May Also Like</h2><p>More stories picked for you</p></div><Link to="/publishers/readers/home" state={homeState}>Browse all <ArrowRight size={15} /></Link></div>
            <div className="reader-detail-related-books">
              {recommendations.map((item) => (
                <Link to={`/publishers/readers/books/${item.id}`} state={homeState} key={item.id} className="reader-detail-related-book">
                  <img src={item.image} alt="" loading="lazy" />
                  <strong>{item.title}</strong><span>{item.author}</span>
                  <span className="reader-detail-related-meta"><span><Star size={12} fill="currentColor" /> {item.rating.toFixed(1)}</span><b>{money(item.price)}</b></span>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </main>

      {notice && <div className="reader-home-toast" role="status">{notice}<button type="button" onClick={() => setNotice("")} aria-label="Dismiss message">×</button></div>}
    </div>
  );
}
