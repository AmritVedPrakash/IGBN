import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Eye,
  Globe2,
  Languages,
  MoreHorizontal,
  Plus,
  Search,
  Share2,
  Star,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import "./myBooksWorkspace.css";

const languageCatalog = [
  { name: "English", flag: "🇺🇸" },
  { name: "Hindi", flag: "🇮🇳" },
  { name: "Spanish", flag: "🇪🇸" },
  { name: "French", flag: "🇫🇷" },
  { name: "German", flag: "🇩🇪" },
  { name: "Arabic", flag: "🇸🇦" },
  { name: "Japanese", flag: "🇯🇵" },
  { name: "Portuguese", flag: "🇵🇹" },
];

const readerCountries = [
  { name: "India", flag: "🇮🇳", share: 28 },
  { name: "United States", flag: "🇺🇸", share: 18 },
  { name: "Germany", flag: "🇩🇪", share: 12 },
  { name: "United Kingdom", flag: "🇬🇧", share: 9 },
  { name: "Canada", flag: "🇨🇦", share: 7 },
  { name: "Australia", flag: "🇦🇺", share: 6 },
  { name: "Other readers", flag: "🌐", share: 20 },
];

const recentReviews = [
  {
    name: "Priya Mehta",
    date: "12 Oct 2026",
    rating: 5,
    text: "A truly inspiring read! The book gives a fresh perspective on life and self-discovery.",
  },
  {
    name: "James Carter",
    date: "8 Oct 2026",
    rating: 5,
    text: "Beautifully written and very relatable. Highly recommended!",
  },
];

function getLanguages(book) {
  const translationCount = Number(book.languages?.match(/\+\s*(\d+)/)?.[1] || 0);
  return languageCatalog.slice(0, Math.min(translationCount + 1, languageCatalog.length));
}

function getEditions(book) {
  return getLanguages(book).map((language, index) => ({
    edition: index === 0 ? "Original Edition" : "Translation",
    language: language.name,
    flag: language.flag,
    format: index === 0 || language.name === "Spanish" ? "eBook, Paperback" : "eBook",
    status: book.status === "Published" ? "Live" : book.status,
  }));
}

function BookCard({ book, onOpen }) {
  return (
    <article className="author-my-books-card">
      <button
        className="author-my-books-card-cover"
        onClick={() => onOpen(book)}
        aria-label={`View ${book.title} details`}
      >
        <img src={book.image} alt="" loading="lazy" />
        <span className={`author-my-books-status ${book.status.toLowerCase().replaceAll(" ", "-")}`}>
          {book.status}
        </span>
        <strong>{book.title}</strong>
        <small>by {book.author || "Aditi Sharma"}</small>
      </button>
      <div className="author-my-books-card-copy">
        <h2>{book.title}</h2>
        <p>{book.genre} <span aria-hidden="true">|</span> {book.languages}</p>
        <div className="author-my-books-card-metrics">
          <span><Eye size={16} />{book.readers}</span>
          <span><Star size={16} />{book.rating}</span>
        </div>
        <button className="author-my-books-card-action" onClick={() => onOpen(book)}>
          {book.status === "Under Review" ? "View status" : "View details"}
        </button>
      </div>
    </article>
  );
}

function BookManagement({ book, authorName, onBack, onUploadBook, onManageTranslations }) {
  const initialEditions = useMemo(() => getEditions(book), [book]);
  const [editions, setEditions] = useState(initialEditions);
  const [visibility, setVisibility] = useState(book.status === "Published" ? "Public" : "Private");
  const [notice, setNotice] = useState("");
  const isPublished = book.status === "Published";

  const addEdition = () => {
    const nextLanguage = languageCatalog.find(
      (language) => !editions.some((edition) => edition.language === language.name),
    );
    if (!nextLanguage) {
      setNotice("All available sample languages are already listed.");
      return;
    }

    setEditions((current) => [
      ...current,
      {
        edition: "Translation",
        language: nextLanguage.name,
        flag: nextLanguage.flag,
        format: "eBook",
        status: "Draft",
      },
    ]);
    setNotice(`${nextLanguage.name} edition added as a draft.`);
  };

  return (
    <div className="author-my-books-detail">
      <header className="author-my-books-detail-header">
        <button className="author-my-books-back" onClick={onBack}>
          <ArrowLeft size={17} /> Back to My Books
        </button>
        <div className="author-my-books-detail-titlebar">
          <div>
            <h1>{isPublished ? "Published Book Management" : "Book Management"}</h1>
            <p>View your book, track performance, manage editions and make updates.</p>
          </div>
          <div className="author-my-books-top-actions">
            <button className="is-primary" onClick={() => setNotice("Public book page preview is not available in this demo yet.")}>
              View Public Page <ArrowRight size={15} />
            </button>
            <button onClick={() => setNotice(`Share link: ${window.location.origin}/publishers/book/${encodeURIComponent(book.title.toLowerCase().replace(/\s+/g, "-"))}`)}>
              <Share2 size={15} /> Share Book
            </button>
            <button aria-label="More book actions" onClick={() => setNotice("More book actions will be available here.")}>
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>
      </header>

      <section className="author-my-books-book-overview">
        <article className="author-my-books-book-info">
          <img className="author-my-books-large-cover" src={book.image} alt={`Cover of ${book.title}`} />
          <div className="author-my-books-book-meta">
            <div className="author-my-books-book-heading">
              <div><h2>{book.title}</h2><p>{book.subtitle || "A Journey Within"}</p></div>
              <span className={`author-my-books-status ${book.status.toLowerCase().replaceAll(" ", "-")}`}>
                {book.status}
              </span>
            </div>
            <dl>
              <div><dt>Author</dt><dd>{book.author || authorName}</dd></div>
              <div><dt>Publication Date</dt><dd>{isPublished ? "15 Oct 2026" : "Not published yet"}</dd></div>
              <div><dt>Edition Type</dt><dd>Full Length Book</dd></div>
              <div><dt>Genre</dt><dd>{book.genre}{book.subGenre ? `, ${book.subGenre}` : ""}</dd></div>
              <div><dt>Formats</dt><dd>eBook, Paperback</dd></div>
              <div><dt>Original Language</dt><dd>English</dd></div>
              <div><dt>Translations (Live)</dt><dd>{isPublished ? editions.slice(1).filter((edition) => edition.status === "Live").map((edition) => edition.language).join(", ") || "None yet" : "Available after publishing"}</dd></div>
            </dl>
            <div className="author-my-books-book-actions">
              <button className="is-primary" onClick={() => setNotice("Public book page preview is not available in this demo yet.")}>
                View Public Page <ArrowRight size={15} />
              </button>
              <button onClick={() => setNotice("QR code download will be available when publishing tools are connected.")}>
                <Globe2 size={15} /> Download QR Code
              </button>
            </div>
          </div>
        </article>

        <section className="author-my-books-visibility">
          <h2>Book Visibility</h2>
          <div className={`author-my-books-visibility-state ${visibility.toLowerCase()}`}>
            <span><Globe2 size={21} /></span>
            <div><strong>{visibility}</strong><p>{visibility === "Public" ? "Your book is live and visible to readers worldwide." : "Your book is not currently visible to readers."}</p></div>
          </div>
          <label>
            <span>Change Visibility</span>
            <select aria-label="Change book visibility" value={visibility} onChange={(event) => { setVisibility(event.target.value); setNotice(`Book visibility changed to ${event.target.value}.`); }}>
              <option>Public</option>
              <option>Private</option>
            </select>
          </label>
        </section>

        <section className="author-my-books-editions">
          <div className="author-my-books-section-heading">
            <h2>Live Editions &amp; Languages</h2>
            <button className="is-primary" onClick={addEdition}><Plus size={15} /> Add New Edition</button>
          </div>
          <div className="author-my-books-table-wrap">
            <table>
              <thead><tr><th>Edition</th><th>Language</th><th>Format</th><th>Status</th><th>View</th><th aria-label="Actions" /></tr></thead>
              <tbody>
                {editions.map((edition, index) => (
                  <tr key={`${edition.language}-${index}`}>
                    <td>{edition.edition}</td>
                    <td><span className="author-my-books-language">{edition.flag} {edition.language}</span></td>
                    <td>{edition.format}</td>
                    <td><span className={`author-my-books-live-status ${edition.status.toLowerCase().replaceAll(" ", "-")}`}><i />{edition.status}</span></td>
                    <td><button className="author-my-books-view-edition" onClick={() => setNotice(`${edition.language} edition selected.`)}>View</button></td>
                    <td><button className="author-my-books-row-menu" aria-label={`More actions for ${edition.language}`} onClick={() => setNotice(`More actions for the ${edition.language} edition.`)}><MoreHorizontal size={16} /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>

      <div className="author-my-books-insights">
        <section className="author-my-books-panel author-my-books-performance">
          <div className="author-my-books-section-heading">
            <h2>Performance Overview</h2>
            <select aria-label="Performance date range" defaultValue="30"><option value="30">Last 30 Days</option><option value="90">Last 90 Days</option><option value="365">Last Year</option></select>
          </div>
          <div className="author-my-books-stat-row">
            <article><Users size={18} /><small>Total Readers</small><strong>{isPublished ? book.readers : "0"}</strong><span>↑ 18%</span></article>
            <article><BookOpen size={18} /><small>Book Sales</small><strong>{isPublished ? "1,260" : "0"}</strong><span>↑ 25%</span></article>
            <article><Eye size={18} /><small>Page Reads</small><strong>{isPublished ? "8,740" : "0"}</strong><span>↑ 32%</span></article>
            <article><Star size={18} /><small>Average Rating</small><strong>{book.rating === "—" ? "—" : `${book.rating} / 5`}</strong><span>{isPublished ? "(320 reviews)" : "No reviews yet"}</span></article>
          </div>
          {isPublished ? (
            <div className="author-my-books-chart">
              <div className="author-my-books-chart-legend"><span>Reads</span><span>Sales</span></div>
              <svg viewBox="0 0 640 150" role="img" aria-label="Readers and book sales over the last 30 days">
                {[25, 55, 85, 115].map((y) => <line key={y} x1="30" x2="630" y1={y} y2={y} />)}
                <polyline className="reads" points="30,108 90,100 150,105 210,87 270,92 330,72 390,78 450,55 510,60 570,38 630,48" />
                <polyline className="sales" points="30,125 90,112 150,118 210,105 270,109 330,88 390,94 450,76 510,83 570,66 630,74" />
                <text x="30" y="145">15 Sep</text><text x="195" y="145">25 Sep</text><text x="360" y="145">30 Sep</text><text x="525" y="145">10 Oct</text>
              </svg>
            </div>
          ) : <p className="author-my-books-empty-chart">Performance data will appear after your book is published.</p>}
        </section>

        <section className="author-my-books-panel author-my-books-countries">
          <div className="author-my-books-section-heading"><h2>Top Reader Countries</h2><button className="author-my-books-text-button" onClick={() => setNotice("Country insights are shown for the selected reporting period.")}>View All <ArrowRight size={13} /></button></div>
          {readerCountries.map((country) => (
            <div className="author-my-books-country" key={country.name}>
              <span>{country.flag} {country.name}</span><div><i style={{ width: `${country.share}%` }} /></div><small>{country.share}%</small>
            </div>
          ))}
        </section>

        <section className="author-my-books-panel author-my-books-reviews">
          <div className="author-my-books-section-heading"><h2>Reader Reviews</h2><button className="author-my-books-text-button" onClick={() => setNotice("All reader reviews are shown in this panel.")}>View All <ArrowRight size={13} /></button></div>
          <div className="author-my-books-review-summary"><strong>{book.rating === "—" ? "—" : `${book.rating}/5`}</strong><span>{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={13} fill="currentColor" />)}</span><small>{isPublished ? "320 reviews" : "No reviews yet"}</small></div>
          {isPublished ? recentReviews.map((review) => (
            <article className="author-my-books-review" key={review.name}>
              <div><strong>{review.name}</strong><small>{review.date}</small></div>
              <span aria-label={`${review.rating} out of 5 stars`}>{Array.from({ length: review.rating }, (_, index) => <Star key={index} size={12} fill="currentColor" />)}</span>
              <p>{review.text}</p>
            </article>
          )) : <p className="author-my-books-no-reviews">Reviews will appear after readers can access your book.</p>}
        </section>
      </div>

      <section className="author-my-books-panel author-my-books-management-actions">
        <div className="author-my-books-section-heading"><h2>Management Actions</h2></div>
        <div className="author-my-books-action-grid">
          <button onClick={() => setNotice("Book details editing will be available here.")}><BookOpen size={19} /><span><strong>Edit Book Details</strong><small>Update title, description, cover, tags etc.</small></span><ArrowRight size={14} /></button>
          <button onClick={onUploadBook}><Plus size={19} /><span><strong>Upload New Edition</strong><small>Add a revised edition or new format.</small></span><ArrowRight size={14} /></button>
          <button onClick={() => onManageTranslations(book)}><Languages size={19} /><span><strong>Manage Translations</strong><small>View, edit or add translations.</small></span><ArrowRight size={14} /></button>
          <button onClick={() => setNotice("Sales and reader insights are shown in Performance Overview.")}><TrendingUp size={19} /><span><strong>View Sales Report</strong><small>Detailed sales and reader insights.</small></span><ArrowRight size={14} /></button>
          <button className="is-danger" onClick={() => setNotice("Withdrawal requests are managed by the publishing team.")}><Wallet size={19} /><span><strong>Request Withdrawal</strong><small>Remove book from public platform.</small></span><ArrowRight size={14} /></button>
        </div>
      </section>
      {notice && <p className="author-my-books-notice" role="status">{notice}<button onClick={() => setNotice("")} aria-label="Dismiss message">×</button></p>}
    </div>
  );
}

export default function MyBooksWorkspace({
  authorName = "Aditi Sharma",
  books,
  initialBook = null,
  onSelectBook,
  onBack,
  onUploadBook,
  onManageTranslations,
}) {
  const [selectedBook, setSelectedBook] = useState(initialBook);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All books");
  const filteredBooks = books.filter((book) => (
    book.title.toLowerCase().includes(search.toLowerCase())
    && (statusFilter === "All books" || book.status === statusFilter)
  ));

  const openBook = (book) => {
    setSelectedBook(book);
    onSelectBook(book);
  };

  if (selectedBook) {
    return (
      <BookManagement
        key={selectedBook.title}
        book={{ ...selectedBook, author: authorName }}
        authorName={authorName}
        onBack={onBack}
        onUploadBook={onUploadBook}
        onManageTranslations={onManageTranslations}
      />
    );
  }

  return (
    <section className="author-my-books-workspace">
      <header className="author-my-books-library-header">
        <div><h1>My Books</h1><p>Manage your books, editions and publishing status.</p></div>
        <button className="is-primary" onClick={onUploadBook}><Plus size={17} /> Upload New Book</button>
      </header>
      <div className="author-my-books-library-tools">
        <label><Search size={17} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search your books" /></label>
        <select aria-label="Filter books by status" value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
          <option>All books</option><option>Published</option><option>Under Review</option><option>Draft</option>
        </select>
        <span>{filteredBooks.length} {filteredBooks.length === 1 ? "book" : "books"}</span>
      </div>
      {filteredBooks.length ? (
        <div className="author-my-books-grid">
          {filteredBooks.map((book) => <BookCard key={book.title} book={{ ...book, author: authorName }} onOpen={openBook} />)}
        </div>
      ) : (
        <div className="author-my-books-empty"><BookOpen size={28} /><h2>No books found</h2><p>Try a different title or status filter.</p></div>
      )}
    </section>
  );
}
