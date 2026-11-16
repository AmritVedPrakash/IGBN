import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Bookmark,
  BookOpen,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
  SlidersHorizontal,
  Star,
  UsersRound,
  X,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import ReaderPortalHeader from "./ReaderPortalHeader";
import { useReaderCart } from "./useReaderCart";
import { readerBooks } from "./readerBooks";

const genres = [
  "Fiction",
  "Non-Fiction",
  "Business & Finance",
  "Spirituality & Self-Help",
  "Health & Wellness",
  "History & Culture",
  "Children's Books",
  "Travel",
  "Poetry",
  "Biography & Memoir",
  "Science & Technology",
];

const languages = ["English", "Hindi", "Spanish", "French", "Arabic"];
const priceRanges = ["Under $2", "$2 - $5", "$5 - $10", "$10 - $20", "Above $20"];
const availabilityOptions = ["All Books", "Paid Books", "On Sale"];

const books = readerBooks;

const collections = [
  { id: "recommended", title: "Recommended for You", subtitle: "Based on your interests and reading preferences", viewAll: "View all" },
  { id: "trending", title: "Trending Books", subtitle: "Most popular among readers right now", viewAll: "View all" },
  { id: "new", title: "New Releases", subtitle: "Be the first to read the latest titles", viewAll: "View all" },
  { id: "sponsored", title: "Sponsored Books", subtitle: "Featured titles from our partners", viewAll: "View all" },
];

function FilterGroup({ title, options, isOpen, onToggleOpen, selected, onToggle }) {
  const selectedCount = selected.length;

  return (
    <section className={`reader-filter-group ${isOpen ? "is-open" : ""}`}>
      <button className="reader-filter-group-heading" type="button" aria-expanded={isOpen} onClick={onToggleOpen}>
        {title}{selectedCount > 0 && <span className="reader-filter-count">{selectedCount}</span>}<ChevronDown size={15} className={isOpen ? "is-expanded" : ""} />
      </button>
      {isOpen && <div className="reader-filter-options">
        {options.map((option) => (
          <label key={option.value}>
            <input
              checked={option.checked ?? selected.includes(option.value)}
              onChange={() => onToggle(option.value)}
              type="checkbox"
            />
            <span>{option.label}</span>
            {option.count !== undefined && <small>{option.count.toLocaleString()}</small>}
          </label>
        ))}
      </div>}
    </section>
  );
}

function BookCard({ book, isSaved, isInCart, onSave, onAddToCart, onRead, showSponsored = false }) {
  return (
    <article className="reader-book-card">
      <button className="reader-book-cover" type="button" onClick={() => onRead(book)} aria-label={`View details for ${book.title}`}>
        <img src={book.image} alt="" loading="lazy" />
        <span className="reader-book-genre">{book.genre}</span>
        <strong>{book.title}</strong>
        {showSponsored && book.sponsored && <em>Sponsored</em>}
      </button>
      <div className="reader-book-card-title-row">
        <div><h3><button className="reader-book-title-link" type="button" onClick={() => onRead(book)}>{book.title}</button></h3><p>{book.author}</p></div>
        <button className={`reader-book-save ${isSaved ? "is-saved" : ""}`} type="button" onClick={() => onSave(book)} aria-label={isSaved ? `Remove ${book.title} from library` : `Save ${book.title} to library`} aria-pressed={isSaved}><Bookmark size={16} fill={isSaved ? "currentColor" : "none"} /></button>
      </div>
      <div className="reader-book-card-meta">
        <span className="reader-book-rating"><Star size={14} fill="currentColor" /> {book.rating.toFixed(1)}</span>
        <span className="reader-book-language">{book.language}</span>
        <strong>${book.price.toFixed(2)}</strong>
      </div>
      <div className="reader-book-card-actions">
        <button className="reader-book-add" type="button" onClick={() => onAddToCart(book)}>{isInCart ? <><Check size={14} /> In cart</> : <><ShoppingCart size={14} /> Add to cart</>}</button>
        <button className="reader-book-preview" type="button" onClick={() => onRead(book, true)} aria-label={`Read a sample of ${book.title}`}><BookOpen size={15} /></button>
      </div>
    </article>
  );
}

function BookShelf({ collection, items, expanded, isSaved, isInCart, onToggleAll, onSave, onAddToCart, onRead }) {
  const shelfRef = useRef(null);
  const previewCount = collection.id === "recommended" || collection.id === "trending" ? 5 : 4;
  const displayItems = expanded ? items : items.slice(0, previewCount);

  if (!items.length) return null;

  return (
    <section className={`reader-book-shelf ${expanded ? "is-expanded" : ""}`} id={collection.id === "new" ? "new-releases" : collection.id}>
      <div className="reader-shelf-heading">
        <div className="reader-shelf-title-wrap"><span className="reader-shelf-mark" /><div><h2>{collection.title}</h2><p>{collection.subtitle}</p></div></div>
        <div className="reader-shelf-controls">
          <button type="button" className="reader-view-all" onClick={onToggleAll}>{expanded ? "Show less" : collection.viewAll} <ArrowRight size={16} /></button>
          {!expanded && <div className="reader-shelf-arrows"><button type="button" aria-label={`Scroll ${collection.title} left`} onClick={() => shelfRef.current?.scrollBy({ left: -440, behavior: "smooth" })}><ChevronLeft size={17} /></button><button type="button" aria-label={`Scroll ${collection.title} right`} onClick={() => shelfRef.current?.scrollBy({ left: 440, behavior: "smooth" })}><ChevronRight size={17} /></button></div>}
        </div>
      </div>
      <div className={`reader-shelf-books ${expanded ? "is-expanded" : ""}`} ref={shelfRef}>
        {displayItems.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            isSaved={isSaved(book)}
            isInCart={isInCart(book)}
            onSave={onSave}
            onAddToCart={onAddToCart}
            onRead={onRead}
            showSponsored={collection.id === "sponsored"}
          />
        ))}
      </div>
    </section>
  );
}

function ReaderFilters({ filters, onToggle, onClear, resultLabel, canClear }) {
  const [openGroup, setOpenGroup] = useState(null);
  const genreOptions = genres.map((genre) => ({
    value: genre,
    label: genre,
    count: books.filter((book) => book.genre === genre).length,
  })).filter((genre) => genre.count);
  const languageOptions = languages.map((language) => ({
    value: language,
    label: language,
    count: books.filter((book) => book.language === language).length,
  })).filter((language) => language.count);
  const priceOptions = priceRanges.map((range) => ({ value: range, label: range }));
  const availability = availabilityOptions.map((option) => ({
    value: option,
    label: option,
    checked: option === "All Books" ? filters.availability.length === 0 || filters.availability.includes("All Books") : filters.availability.includes(option),
  }));
  const toggleOpen = (group) => setOpenGroup((current) => current === group ? null : group);

  return (
    <aside className="reader-home-filters" id="reader-filters">
      <div className="reader-filter-top"><h2><SlidersHorizontal size={17} /> Filters</h2><button type="button" onClick={onClear}>Clear all</button></div>
      <div className="reader-filter-groups">
        <FilterGroup title="Genre" options={genreOptions} isOpen={openGroup === "genre"} onToggleOpen={() => toggleOpen("genre")} selected={filters.genres} onToggle={(value) => onToggle("genres", value)} />
        <FilterGroup title="Language" options={languageOptions} isOpen={openGroup === "language"} onToggleOpen={() => toggleOpen("language")} selected={filters.languages} onToggle={(value) => onToggle("languages", value)} />
        <FilterGroup title="Price Range" options={priceOptions} isOpen={openGroup === "price"} onToggleOpen={() => toggleOpen("price")} selected={filters.prices} onToggle={(value) => onToggle("prices", value)} />
        <FilterGroup title="Availability" options={availability} isOpen={openGroup === "availability"} onToggleOpen={() => toggleOpen("availability")} selected={filters.availability} onToggle={(value) => onToggle("availability", value)} />
      </div>
      {resultLabel && <div className="reader-filter-results">{resultLabel}{canClear && <button type="button" onClick={onClear}>Clear filters <X size={15} /></button>}</div>}
    </aside>
  );
}

export default function ReaderHomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const account = location.state?.account || { name: "Reader", email: "reader@example.com", genres: [] };
  const { items: cartItems, addItem, storageError } = useReaderCart();
  const cartIds = cartItems.map((item) => item.bookId);
  const [search, setSearch] = useState(location.state?.search || "");
  const [filters, setFilters] = useState({ genres: [], languages: [], prices: [], availability: [] });
  const [savedIds, setSavedIds] = useState([]);
  const [showLibrary, setShowLibrary] = useState(Boolean(location.state?.showLibrary));
  const [expandedShelves, setExpandedShelves] = useState([]);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (storageError) setNotice(storageError);
  }, [storageError]);

  const filteredBooks = useMemo(() => books.filter((book) => {
    const matchesSearch = `${book.title} ${book.author} ${book.genre} ${book.language}`.toLowerCase().includes(search.toLowerCase());
    const matchesGenre = !filters.genres.length || filters.genres.includes(book.genre);
    const matchesLanguage = !filters.languages.length || filters.languages.includes(book.language);
    const matchesPrice = !filters.prices.length || filters.prices.some((range) => {
      if (range === "Under $2") return book.price < 2;
      if (range === "$2 - $5") return book.price >= 2 && book.price < 5;
      if (range === "$5 - $10") return book.price >= 5 && book.price < 10;
      if (range === "$10 - $20") return book.price >= 10 && book.price < 20;
      return book.price >= 20;
    });
    const matchesAvailability = !filters.availability.length
      || filters.availability.includes("All Books")
      || (filters.availability.includes("Paid Books") && book.price > 0)
      || (filters.availability.includes("On Sale") && book.onSale);
    const matchesLibrary = !showLibrary || savedIds.includes(book.id);
    return matchesSearch && matchesGenre && matchesLanguage && matchesPrice && matchesAvailability && matchesLibrary;
  }), [filters, savedIds, search, showLibrary]);

  const preferredGenres = account.genres || [];
  const getCollectionBooks = (collection) => {
    if (collection.id === "recommended" && preferredGenres.length) {
      const personalized = filteredBooks.filter((book) => book.collection === "recommended" && preferredGenres.includes(book.genre));
      if (personalized.length) return personalized;
    }
    return filteredBooks.filter((book) => book.collection === collection.id);
  };
  const activeFiltersCount = filters.genres.length + filters.languages.length + filters.prices.length + filters.availability.length;
  const savedBooks = books.filter((book) => savedIds.includes(book.id));
  const openBook = (book, openSample = false) => navigate(`/publishers/readers/books/${book.id}`, {
    state: { account, savedIds, search, showLibrary, openSample },
  });

  const toggleFilter = (group, value) => {
    setFilters((current) => {
      const values = current[group];
      if (group === "availability" && value === "All Books") {
        return { ...current, availability: [] };
      }
      const withoutAll = group === "availability" ? values.filter((item) => item !== "All Books") : values;
      const next = withoutAll.includes(value) ? withoutAll.filter((item) => item !== value) : [...withoutAll, value];
      return { ...current, [group]: next };
    });
  };

  const clearFilters = () => {
    setFilters({ genres: [], languages: [], prices: [], availability: [] });
    setSearch("");
  };

  const toggleSaved = (book) => {
    setSavedIds((current) => current.includes(book.id) ? current.filter((id) => id !== book.id) : [...current, book.id]);
    setNotice(savedIds.includes(book.id) ? `“${book.title}” removed from your library.` : `“${book.title}” saved to your library.`);
  };

  const addToCart = (book) => {
    const added = addItem(book);
    setNotice(added ? `“${book.title}” added to your cart.` : `“${book.title}” is already in your cart.`);
  };

  const toggleShelf = (id) => setExpandedShelves((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);

  return (
    <div className="reader-home-page">
      <ReaderPortalHeader
        account={account}
        savedIds={savedIds}
        search={search}
        onSearchChange={setSearch}
        onNotice={setNotice}
        onSignOut={() => navigate("/publishers/readers")}
      />

      <div className="reader-home-layout">
        <main className="reader-home-main">
          <section className="reader-home-hero" id="books">
            <div className="reader-home-hero-copy">
              <span className="reader-home-eyebrow"><BookOpen size={15} /> A WORLD OF STORIES</span>
              <h1>Discover books <span>from India to the world</span></h1>
              <p>Explore a diverse collection of books across genres, languages and cultures. Find stories that inform, inspire and entertain.</p>
              <a href="#recommended" className="reader-hero-cta">Explore your next read <ArrowDown size={16} /></a>
            </div>
            <blockquote><span>“</span><p>Good books open new worlds, new ideas and a better you.</p><i /></blockquote>
          </section>
          {!showLibrary && <ReaderFilters
            filters={filters}
            onToggle={toggleFilter}
            onClear={clearFilters}
            resultLabel={activeFiltersCount || search ? `${filteredBooks.length} books match your filters` : "A hand-picked collection for every reader"}
            canClear={activeFiltersCount > 0 || Boolean(search)}
          />}

          {showLibrary ? <section className="reader-library-shelf" id="my-library">
            <div className="reader-shelf-heading"><div className="reader-shelf-title-wrap"><span className="reader-shelf-mark" /><div><h2>My Library</h2><p>Books you have saved to read later</p></div></div><button className="reader-view-all" type="button" onClick={() => setShowLibrary(false)}>Back to discover <ArrowRight size={16} /></button></div>
            {savedBooks.length ? <div className="reader-library-grid">{savedBooks.map((book) => <BookCard key={book.id} book={book} isSaved isInCart={cartIds.includes(book.id)} onSave={toggleSaved} onAddToCart={addToCart} onRead={openBook} />)}</div> : <p className="reader-library-empty">Your library is empty. Save books you want to read later.</p>}
          </section> : <>
            <BookShelf collection={collections[0]} items={getCollectionBooks(collections[0])} expanded={expandedShelves.includes("recommended")} isSaved={(book) => savedIds.includes(book.id)} isInCart={(book) => cartIds.includes(book.id)} onToggleAll={() => toggleShelf("recommended")} onSave={toggleSaved} onAddToCart={addToCart} onRead={openBook} />
            <BookShelf collection={collections[1]} items={getCollectionBooks(collections[1])} expanded={expandedShelves.includes("trending")} isSaved={(book) => savedIds.includes(book.id)} isInCart={(book) => cartIds.includes(book.id)} onToggleAll={() => toggleShelf("trending")} onSave={toggleSaved} onAddToCart={addToCart} onRead={openBook} />
            <div className="reader-home-bottom-shelves">
              <BookShelf collection={collections[2]} items={getCollectionBooks(collections[2])} expanded={expandedShelves.includes("new")} isSaved={(book) => savedIds.includes(book.id)} isInCart={(book) => cartIds.includes(book.id)} onToggleAll={() => toggleShelf("new")} onSave={toggleSaved} onAddToCart={addToCart} onRead={openBook} />
              <BookShelf collection={collections[3]} items={getCollectionBooks(collections[3])} expanded={expandedShelves.includes("sponsored")} isSaved={(book) => savedIds.includes(book.id)} isInCart={(book) => cartIds.includes(book.id)} onToggleAll={() => toggleShelf("sponsored")} onSave={toggleSaved} onAddToCart={addToCart} onRead={openBook} />
            </div>
            <section className="reader-author-strip" id="authors"><div><UsersRound size={19} /><div><strong>Meet the authors behind your next favorite book</strong><span>New voices, fresh ideas and stories from around the world.</span></div></div><button type="button" onClick={() => setNotice("Author profiles are coming soon.")}>Discover authors <ArrowRight size={15} /></button></section>
          </>}
        </main>
      </div>

      {notice && <div className="reader-home-toast" role="status">{notice}<button type="button" onClick={() => setNotice("")} aria-label="Dismiss message"><X size={16} /></button></div>}
    </div>
  );
}
