import { useMemo, useState } from "react";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Bookmark,
  CalendarDays,
  Check,
  ChevronRight,
  Clock3,
  CreditCard,
  Gift,
  Heart,
  Library,
  Mail,
  MoreHorizontal,
  Play,
  Settings,
  ShieldCheck,
  Star,
  UserRound,
  UsersRound,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReaderPortalHeader from "./ReaderPortalHeader";
import { getReaderBookDetails, readerBooks } from "./readerBooks";
import { readReaderPurchases } from "./readerLibraryStore";
import "./readerLibrary.css";

const demoPurchaseList = [
  { bookId: "mindful-path", purchasedAt: "12 Oct 2026" },
  { bookId: "stories-india", purchasedAt: "5 Oct 2026" },
  { bookId: "global-indian", purchasedAt: "28 Sep 2026" },
  { bookId: "silent-warrior", purchasedAt: "24 Sep 2026" },
  { bookId: "echoes-dawn", purchasedAt: "18 Sep 2026" },
  { bookId: "resilient-you", purchasedAt: "12 Sep 2026" },
  { bookId: "healing-within", purchasedAt: "8 Sep 2026" },
  { bookId: "money-meaning", purchasedAt: "2 Sep 2026" },
  { bookId: "children-tomorrow", purchasedAt: "26 Aug 2026" },
  { bookId: "beyond-horizon", purchasedAt: "19 Aug 2026" },
  { bookId: "new-beginnings", purchasedAt: "11 Aug 2026" },
  { bookId: "threads-time", purchasedAt: "2 Aug 2026" },
].map((purchase) => ({ ...purchase, format: "eBook", language: "English" }));

const rentedBooks = [
  { bookId: "echoes-dawn", expires: "25 Oct 2026", daysLeft: 10 },
  { bookId: "children-tomorrow", expires: "30 Oct 2026", daysLeft: 15 },
  { bookId: "silent-warrior", expires: "5 Nov 2026", daysLeft: 21 },
];

const freeBookIds = ["stories-india", "healing-within", "global-indian", "beyond-horizon", "little-dreamers"];
const savedBookIds = ["money-meaning", "inner-light", "little-dreamers", "beyond-horizon", "threads-time", "new-beginnings", "voices-change", "sustainable-living"];
const continueReading = [
  { bookId: "mindful-path", progress: 64, lastRead: "Last read: 18 Oct 2026" },
  { bookId: "echoes-dawn", progress: 32, lastRead: "Last read: 17 Oct 2026" },
  { bookId: "resilient-you", progress: 18, lastRead: "Last read: 15 Oct 2026" },
  { bookId: "children-tomorrow", progress: 45, lastRead: "Last read: 12 Oct 2026" },
  { bookId: "money-meaning", progress: 27, lastRead: "Last read: 9 Oct 2026" },
  { bookId: "healing-within", progress: 52, lastRead: "Last read: 6 Oct 2026" },
];
const recentlyAdded = [
  { bookId: "stories-india", status: "Purchased", note: "Purchased 2 days ago" },
  { bookId: "healing-within", status: "Rented", note: "Expires in 12 days" },
  { bookId: "global-indian", status: "Free", note: "Added 5 days ago" },
  { bookId: "resilient-you", status: "Purchased", note: "Added 1 week ago" },
  { bookId: "money-meaning", status: "Purchased", note: "Added 2 weeks ago" },
  { bookId: "inner-light", status: "Free", note: "Added 3 weeks ago" },
];
const readingHistory = [
  { bookId: "resilient-you", progress: 45, date: "Last read: 18 Oct 2026" },
  { bookId: "mindful-path", progress: 64, date: "Last read: 17 Oct 2026" },
  { bookId: "stories-india", progress: 22, date: "Last read: 10 Oct 2026" },
];
const followedAuthors = [
  { name: "Ananya Rao", genre: "12 books", image: "photo-1534528741775-53994a69daeb" },
  { name: "Vikram Mehta", genre: "8 books", image: "photo-1500648767791-00dcc994a43e" },
  { name: "Neha Kapoor", genre: "6 books", image: "photo-1531123897727-8f129e1688ce" },
];
const sidebarItems = [
  { label: "My Library", icon: Library, target: "library-overview" },
  { label: "Purchased Books", icon: BookOpen, target: "purchased-books" },
  { label: "Rented Books", icon: Clock3, target: "rented-books" },
  { label: "Free Books", icon: Gift, target: "free-books" },
  { label: "Saved Titles", icon: Heart, target: "saved-titles" },
  { label: "Reading History", icon: Activity, target: "reading-history" },
  { label: "Followed Authors", icon: UsersRound, target: "followed-authors" },
  { label: "My Reviews", icon: Star, target: "my-reviews" },
  { label: "Receipts & Orders", icon: CreditCard, target: "receipts-orders" },
  { label: "My Preferences", icon: Settings, target: "my-preferences" },
  { label: "Account Settings", icon: UserRound, target: "account-settings" },
];

const bookFor = (id) => readerBooks.find((book) => book.id === id);

function getDisplayDate(date) {
  if (!date) return "Recently";
  const parsedDate = new Date(date);
  return Number.isNaN(parsedDate.getTime())
    ? date
    : parsedDate.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function LibraryBookCard({ book, status, note, onOpen }) {
  if (!book) return null;

  return (
    <article className="reader-library-recent-card">
      <button type="button" className="reader-library-cover" onClick={() => onOpen(book)} aria-label={`Open ${book.title}`}>
        <img src={book.image} alt="" loading="lazy" />
        <span className={`reader-library-status is-${status.toLowerCase()}`}>{status}</span>
      </button>
      <div className="reader-library-recent-copy">
        <button type="button" onClick={() => onOpen(book)}>{book.title}</button>
        <span>{book.author}</span>
        <small>{note}</small>
      </div>
    </article>
  );
}

function LibrarySectionTitle({ title, count, icon: Icon, target, onViewAll, viewAllLabel = "View All" }) {
  return (
    <div className="reader-library-section-title" id={target}>
      <h2><span><Icon size={16} /></span>{title}{count !== undefined && <small>({count})</small>}</h2>
      <button type="button" onClick={onViewAll || (() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" }))}>{viewAllLabel} <ArrowRight size={14} /></button>
    </div>
  );
}

function LibraryTable({ items, variant, onRead, onMore }) {
  return (
    <div className="reader-library-table-wrap">
      <table className="reader-library-table">
        <thead>
          <tr>
            <th>Book</th>
            <th>Format</th>
            {variant === "rented" ? <th>Expiry Date</th> : <th>Purchase Date</th>}
            {variant === "rented" && <th>Status</th>}
            <th>Action</th>
            <th aria-label="More actions" />
          </tr>
        </thead>
        <tbody>
          {items.map(({ book, format, language, date, daysLeft }) => book && (
            <tr key={`${book.id}-${variant}`}>
              <td><div className="reader-library-table-book"><img src={book.image} alt="" /><span><strong>{book.title}</strong><small>{book.author}</small></span></div></td>
              <td><span className="reader-library-format">{format}</span></td>
              <td>{date}</td>
              {variant === "rented" && <td><span className="reader-library-active"><i /> Active<br /><small>{daysLeft} days left</small></span></td>}
              <td><button className="reader-library-read-button" type="button" onClick={() => onRead(book, { format, language })}>Read Now</button></td>
              <td><button className="reader-library-more" type="button" aria-label={`More options for ${book.title}`} onClick={() => onMore(book)}><MoreHorizontal size={17} /></button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function ReaderLibraryPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const account = location.state?.account || { name: "Reader", email: "reader@example.com", country: "India", genres: [] };
  const savedIds = location.state?.savedIds || [];
  const search = location.state?.search || "";
  const [bookTab, setBookTab] = useState("purchased");
  const [showAllPurchased, setShowAllPurchased] = useState(false);
  const [showAllContinue, setShowAllContinue] = useState(false);
  const [showAllRecent, setShowAllRecent] = useState(false);
  const [activeSidebarItem, setActiveSidebarItem] = useState("My Library");
  const [following, setFollowing] = useState(["Ananya Rao", "Neha Kapoor"]);
  const [notice, setNotice] = useState("");
  const storedPurchases = useMemo(() => readReaderPurchases(), []);
  const firstName = account.name?.trim().split(/\s+/)[0] || "Reader";

  const purchasedEntries = useMemo(() => {
    const merged = new Map(demoPurchaseList.map((purchase) => [
      `${purchase.bookId}:${purchase.format}:${purchase.language}`,
      purchase,
    ]));
    storedPurchases.forEach((purchase) => {
      merged.set(`${purchase.bookId}:${purchase.format}:${purchase.language}`, purchase);
    });

    return [...merged.values()].map((purchase) => ({
      ...purchase,
      book: bookFor(purchase.bookId),
      date: getDisplayDate(purchase.purchasedAt || purchase.date),
    })).filter((purchase) => purchase.book);
  }, [storedPurchases]);
  const savedEntries = [...new Set([...savedBookIds, ...savedIds])].map(bookFor).filter(Boolean);

  const openReader = (book, startPage = 1, edition = {}) => navigate(`/publishers/readers/read/${book.id}`, {
    state: { account, savedIds, search, startPage, ...edition },
  });

  const jumpTo = (target) => {
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const openSidebarItem = (label, target) => {
    setActiveSidebarItem(label);
    if (label === "Purchased Books") setBookTab("purchased");
    if (label === "Rented Books") setBookTab("rented");
    if (label === "Free Books") setBookTab("free");
    jumpTo(target);
  };

  const toggleFollow = (authorName) => {
    setFollowing((current) => current.includes(authorName)
      ? current.filter((name) => name !== authorName)
      : [...current, authorName]);
    setNotice(following.includes(authorName) ? `You unfollowed ${authorName}.` : `You are now following ${authorName}.`);
  };

  const actualOrders = [...new Set(storedPurchases.map((purchase) => purchase.orderId).filter(Boolean))];
  const recentOrders = actualOrders.length ? actualOrders.slice(0, 3) : ["IGBN-2026-1012", "IGBN-2026-1005", "IGBN-2026-0928"];
  const displayedPurchases = bookTab === "purchased"
    ? purchasedEntries.slice(0, showAllPurchased ? purchasedEntries.length : 4)
    : bookTab === "rented"
      ? rentedBooks.map((rental) => ({
        book: bookFor(rental.bookId),
        format: "eBook",
        date: rental.expires,
        daysLeft: rental.daysLeft,
      }))
      : freeBookIds.map((bookId) => ({
        book: bookFor(bookId),
        format: "eBook",
        date: "Free access",
      }));

  return (
    <div className="reader-home-page reader-library-page">
      <ReaderPortalHeader account={account} savedIds={savedIds} search={search} onNotice={setNotice} onSignOut={() => navigate("/publishers/readers")} />
      <div className="reader-library-layout">
        <aside className="reader-library-sidebar">
          <div className="reader-library-sidebar-profile">
            <span className="reader-library-avatar">{firstName.charAt(0).toUpperCase()}</span>
            <span><strong>{account.name || "Reader"}</strong><small>{account.email || "reader@example.com"}</small></span>
            <button type="button" aria-label="Edit profile" onClick={() => jumpTo("account-settings")}>✎</button>
          </div>
          <nav aria-label="My library">
            {sidebarItems.map(({ label, icon: Icon, target }, index) => (
              <button
                type="button"
                key={label}
                className={`${activeSidebarItem === label ? "is-active" : ""} ${index === 7 || index === 9 ? "has-divider" : ""}`}
                onClick={() => openSidebarItem(label, target)}
              >
                <Icon size={16} /><span>{label}</span>
                {label === "Purchased Books" && <small>{purchasedEntries.length}</small>}
                {label === "Saved Titles" && <small>{savedEntries.length}</small>}
              </button>
            ))}
            <Link to="/publishers/readers" state={{ account }}><span className="reader-library-logout-mark">↪</span><span>Logout</span></Link>
          </nav>
          <div className="reader-library-sidebar-note"><ShieldCheck size={15} /><span>Your library is private to your account.</span></div>
        </aside>

        <main className="reader-library-main" id="library-overview">
          <header className="reader-library-welcome">
            <div className="reader-library-welcome-copy">
              <span className="reader-library-eyebrow">YOUR READING SPACE</span>
              <h1>Welcome back, {firstName}</h1>
              <p>All your books, reading activity and account preferences in one place.</p>
            </div>
            <div className="reader-library-stats">
              <div><span><BookOpen size={19} /></span><strong>{Math.max(12, purchasedEntries.length)}</strong><small>Purchased Books</small></div>
              <div><span><Clock3 size={19} /></span><strong>3</strong><small>Rented Books</small></div>
              <div><span><Gift size={19} /></span><strong>5</strong><small>Free Books</small></div>
              <div><span><Heart size={19} /></span><strong>{Math.max(8, savedEntries.length)}</strong><small>Saved Titles</small></div>
            </div>
          </header>

          <div className="reader-library-feature-grid">
            <section className="reader-library-panel reader-library-continue">
              <LibrarySectionTitle
                title="Continue Reading"
                icon={BookOpen}
                target="continue-reading"
                viewAllLabel={showAllContinue ? "Show Less" : "View All"}
                onViewAll={() => setShowAllContinue((showing) => !showing)}
              />
              <div className="reader-library-continue-grid">
                {continueReading.slice(0, showAllContinue ? continueReading.length : 4).map((entry) => {
                  const book = bookFor(entry.bookId);
                  if (!book) return null;
                  return (
                    <article key={book.id} className="reader-library-continue-card">
                      <button className="reader-library-continue-cover" type="button" onClick={() => openReader(book, Math.max(1, Math.round(getReaderBookDetails(book).pages * entry.progress / 100)))} aria-label={`Continue reading ${book.title}`}>
                        <img src={book.image} alt="" loading="lazy" /><span><Play size={15} fill="currentColor" /></span>
                      </button>
                      <strong>{book.title}</strong>
                      <small>{book.author}</small>
                      <div className="reader-library-progress"><span style={{ width: `${entry.progress}%` }} /></div>
                      <div className="reader-library-progress-label"><span>{entry.progress}% complete</span><button type="button" onClick={() => openReader(book, Math.max(1, Math.round(getReaderBookDetails(book).pages * entry.progress / 100)))}>Continue Reading</button></div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="reader-library-panel reader-library-recent">
              <LibrarySectionTitle
                title="Recently Added"
                icon={CalendarDays}
                target="recently-added"
                viewAllLabel={showAllRecent ? "Show Less" : "View All"}
                onViewAll={() => setShowAllRecent((showing) => !showing)}
              />
              <div className="reader-library-recent-grid">
                {recentlyAdded.slice(0, showAllRecent ? recentlyAdded.length : 4).map((entry) => {
                  const book = bookFor(entry.bookId);
                  return <LibraryBookCard key={entry.bookId} book={book} status={entry.status} note={entry.note} onOpen={openReader} />;
                })}
              </div>
            </section>
          </div>

          <div className="reader-library-book-sections">
            <section className="reader-library-panel reader-library-book-panel" id="purchased-books">
              <div className="reader-library-tabs">
                {[
                  { id: "purchased", label: "Purchased Books", count: Math.max(12, purchasedEntries.length) },
                  { id: "rented", label: "Rented Books", count: 3 },
                  { id: "free", label: "Free Books", count: 5 },
                ].map((tab) => (
                  <button type="button" key={tab.id} className={bookTab === tab.id ? "is-active" : ""} onClick={() => setBookTab(tab.id)}>
                    {tab.label} <span>({tab.count})</span>
                  </button>
                ))}
                <button className="reader-library-view-all" type="button" onClick={() => {
                  if (bookTab === "purchased") setShowAllPurchased((showing) => !showing);
                  else navigate("/publishers/readers/home", { state: { account, savedIds, search } });
                }}>{bookTab === "purchased" ? showAllPurchased ? "Show Less" : "View All" : "Browse Books"} <ArrowRight size={14} /></button>
              </div>
              <LibraryTable
                items={displayedPurchases}
                variant={bookTab}
                onRead={(book, edition) => openReader(book, 1, edition)}
                onMore={(book) => setNotice(`More options for “${book.title}” will be available soon.`)}
              />
            </section>

            <section className="reader-library-panel reader-library-rental-panel" id="rented-books">
              <LibrarySectionTitle title="Rented Books" count={3} icon={Clock3} target="rented-books-title" />
              <div className="reader-library-rental-list">
                {rentedBooks.map((rental) => {
                  const book = bookFor(rental.bookId);
                  if (!book) return null;
                  return (
                    <article key={book.id}>
                      <img src={book.image} alt="" />
                      <span><strong>{book.title}</strong><small>{book.author}</small></span>
                      <i>{rental.daysLeft}d left</i>
                      <button type="button" onClick={() => openReader(book)}>Read</button>
                    </article>
                  );
                })}
              </div>
            </section>
          </div>

          <div className="reader-library-lower-grid">
            <section className="reader-library-panel" id="free-books">
              <LibrarySectionTitle title="Free Books" count={5} icon={Gift} target="free-books-title" />
              <div className="reader-library-mini-list">
                {freeBookIds.slice(0, 3).map((id) => {
                  const book = bookFor(id);
                  if (!book) return null;
                  return <button type="button" key={book.id} onClick={() => openReader(book)}><img src={book.image} alt="" /><span><strong>{book.title}</strong><small>{book.author} · Free</small></span><ChevronRight size={15} /></button>;
                })}
              </div>
            </section>

            <section className="reader-library-panel" id="saved-titles">
              <LibrarySectionTitle title="Saved Titles" count={savedEntries.length} icon={Heart} target="saved-titles-title" />
              <div className="reader-library-saved-grid">
                {savedEntries.slice(0, 4).map((book) => (
                  <button type="button" key={book.id} onClick={() => openReader(book)}>
                    <img src={book.image} alt="" /><span><strong>{book.title}</strong><small>{book.author}</small></span><Bookmark size={14} fill="currentColor" />
                  </button>
                ))}
              </div>
            </section>

            <section className="reader-library-panel" id="reading-history">
              <LibrarySectionTitle title="Reading History" icon={Activity} target="reading-history-title" />
              <div className="reader-library-history-list">
                {readingHistory.map((entry) => {
                  const book = bookFor(entry.bookId);
                  if (!book) return null;
                  return <button type="button" key={book.id} onClick={() => openReader(book, Math.max(1, Math.round(getReaderBookDetails(book).pages * entry.progress / 100)))}><img src={book.image} alt="" /><span><strong>{book.title}</strong><small>{book.author} · {entry.date}</small></span><span className="reader-library-history-progress"><i style={{ width: `${entry.progress}%` }} />{entry.progress}%</span></button>;
                })}
              </div>
            </section>

            <section className="reader-library-panel" id="followed-authors">
              <LibrarySectionTitle title="Followed Authors" count={5} icon={UsersRound} target="followed-authors-title" />
              <div className="reader-library-author-list">
                {followedAuthors.map((author) => {
                  const isFollowing = following.includes(author.name);
                  return (
                    <article key={author.name}>
                      <img src={`https://images.unsplash.com/${author.image}?auto=format&fit=crop&w=90&q=78`} alt="" />
                      <span><strong>{author.name}</strong><small>{author.genre} · 28K followers</small></span>
                      <button type="button" className={isFollowing ? "is-following" : ""} onClick={() => toggleFollow(author.name)}>{isFollowing && <Check size={13} />}{isFollowing ? "Following" : "Follow"}</button>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="reader-library-panel" id="my-reviews">
              <LibrarySectionTitle title="My Reviews" icon={Star} target="my-reviews-title" />
              <div className="reader-library-review-list">
                <article><span><strong>The Mindful Path</strong><small>Ananya Rao · Reviewed 12 Oct 2026</small></span><span className="reader-library-stars">★★★★★</span><p>Beautifully written and deeply inspiring. It stayed with me long after I finished it.</p></article>
                <article><span><strong>Stories from India</strong><small>Raghav Bhatia · Reviewed 4 Oct 2026</small></span><span className="reader-library-stars">★★★★☆</span><p>A lovely collection of stories, full of history and familiar places.</p></article>
              </div>
            </section>

            <section className="reader-library-panel" id="receipts-orders">
              <LibrarySectionTitle title="Receipts & Orders" icon={CreditCard} target="receipts-orders-title" />
              <div className="reader-library-orders-list">
                {recentOrders.map((orderId, index) => (
                  <article key={orderId}><span><CreditCard size={16} /><strong>{orderId}</strong></span><small>{index === 0 ? "Digital book order" : "Reader library order"}</small><button type="button" onClick={() => setNotice("Order receipts will be available when reader accounts are connected.")}>Receipt <ArrowRight size={13} /></button></article>
                ))}
              </div>
            </section>

            <section className="reader-library-panel" id="my-preferences">
              <LibrarySectionTitle title="My Preferences" icon={Settings} target="my-preferences-title" />
              <p className="reader-library-preference-copy">Your recommendations are shaped by the genres you enjoy.</p>
              <div className="reader-library-preference-tags">
                {(account.genres?.length ? account.genres : ["Fiction", "History & Culture", "Spirituality & Self-Help"]).map((genre) => <span key={genre}>{genre}</span>)}
              </div>
              <button className="reader-library-manage-link" type="button" onClick={() => setNotice("Reading preferences can be edited when your reader account is connected.")}>Manage preferences <ArrowRight size={14} /></button>
            </section>

            <section className="reader-library-panel" id="account-settings">
              <LibrarySectionTitle title="Account Settings" icon={UserRound} target="account-settings-title" />
              <div className="reader-library-account-info"><span><UserRound size={15} /> Reader name</span><strong>{account.name || "Reader"}</strong></div>
              <div className="reader-library-account-info"><span><Mail size={15} /> Email address</span><strong>{account.email || "reader@example.com"}</strong></div>
              <div className="reader-library-account-info"><span><Settings size={15} /> Country / Region</span><strong>{account.country || "India"}</strong></div>
              <button className="reader-library-manage-link" type="button" onClick={() => setNotice("Account editing will be available when reader accounts are connected.")}>Edit account details <ArrowRight size={14} /></button>
            </section>
          </div>

          <footer className="reader-library-footer"><ShieldCheck size={15} /><span>This is a sample reader library. Real purchases and reading progress will sync when reader services are connected.</span></footer>
        </main>
      </div>
      {notice && <div className="reader-home-toast" role="status">{notice}<button type="button" onClick={() => setNotice("")} aria-label="Dismiss message">×</button></div>}
    </div>
  );
}
