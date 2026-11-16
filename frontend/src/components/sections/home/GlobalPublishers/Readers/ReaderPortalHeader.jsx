import { useEffect, useState } from "react";
import {
  ChevronDown,
  Globe2,
  Library,
  LogOut,
  Search,
  ShieldCheck,
  ShoppingCart,
  UserRound,
  X,
} from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getReaderCartItemKey } from "./readerCartStore";
import { useReaderCart } from "./useReaderCart";
import { readerBooks } from "./readerBooks";
import "./readerHome.css";

export default function ReaderPortalHeader({
  account,
  savedIds = [],
  search = "",
  onSearchChange,
  onNotice,
  onSignOut,
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const { items, itemCount, removeItem } = useReaderCart();
  const [query, setQuery] = useState(search);
  const [profileOpen, setProfileOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const isHome = location.pathname === "/publishers/readers/home";
  const homeState = {
    account,
    savedIds,
    search,
  };
  const cartRows = items.map((item) => ({
    item,
    book: readerBooks.find((book) => book.id === item.bookId),
  })).filter((row) => row.book);
  const firstName = account?.name?.trim().split(/\s+/)[0] || "Reader";
  const initials = account?.name?.trim().split(/\s+/).slice(0, 2).map((part) => part.charAt(0)).join("").toUpperCase() || "R";

  useEffect(() => {
    setQuery(search);
  }, [search]);

  useEffect(() => {
    if (!profileOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setProfileOpen(false);
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [profileOpen]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (!isHome) {
      navigate("/publishers/readers/home", { state: { ...homeState, search: query.trim() } });
    }
  };

  const handleOpenLibrary = () => {
    setProfileOpen(false);
    navigate("/publishers/readers/library", { state: homeState });
  };

  const handleSignOut = () => {
    setProfileOpen(false);
    if (onSignOut) {
      onSignOut();
      return;
    }
    navigate("/publishers/readers");
  };

  return (
    <header className="reader-home-nav">
      <div className="reader-home-nav-inner">
        <Link className="reader-home-brand" to="/publishers" aria-label="IGBN Global Publishers">
          <span className="reader-home-brand-mark"><Globe2 size={26} /></span>
          <span><strong>IGBN <b>PUBLISHERS</b></strong><small>INDIAN STORIES. GLOBAL READERS.</small></span>
        </Link>
        <nav className="reader-home-links" aria-label="Reader navigation">
          <Link className={isHome ? "is-active" : ""} to={isHome ? "#books" : "/publishers/readers/home#books"} state={isHome ? undefined : homeState}>Books</Link>
          <Link to={isHome ? "#authors" : "/publishers/readers/home#authors"} state={isHome ? undefined : homeState}>Authors</Link>
          <Link to={isHome ? "#reader-filters" : "/publishers/readers/home#reader-filters"} state={isHome ? undefined : homeState}>Genres</Link>
          <Link to={isHome ? "#new-releases" : "/publishers/readers/home#new-releases"} state={isHome ? undefined : homeState}>New Releases</Link>
          <button type="button" onClick={() => onNotice?.("The reader blog is coming soon.")}>Blog</button>
        </nav>
        <form className="reader-home-search" onSubmit={handleSearchSubmit}>
          <Search size={17} />
          <input value={query} onChange={(event) => { setQuery(event.target.value); onSearchChange?.(event.target.value); }} placeholder="Search by title, author, genre or keyword..." aria-label="Search books" />
          <kbd>/</kbd>
        </form>
        <div className="reader-home-actions">
          <div className="reader-home-popover-wrap">
            <button className="reader-cart-button" type="button" aria-label={`Cart with ${itemCount} books`} aria-expanded={cartOpen} onClick={() => { setCartOpen((open) => !open); setProfileOpen(false); }}>
              <ShoppingCart size={21} /><span>{itemCount}</span>
            </button>
            {cartOpen && <div className="reader-home-popover reader-cart-popover">
              <strong>Your Cart <span>{itemCount} items</span></strong>
              {cartRows.length ? cartRows.map(({ item, book }) => (
                <div key={getReaderCartItemKey(item)}>
                  <span>{book.title}<small>{item.format} · {item.language}</small></span>
                  <b>${item.price.toFixed(2)}</b>
                  <button type="button" aria-label={`Remove ${book.title} from cart`} onClick={() => removeItem(getReaderCartItemKey(item))}><X size={14} /></button>
                </div>
              )) : <p>Your cart is empty. Add a book to get started.</p>}
              <div className="reader-cart-popover-actions">
                <Link to="/publishers/readers/cart" state={homeState}>View Cart</Link>
                <Link to="/publishers/readers/checkout" state={homeState}>Checkout</Link>
              </div>
            </div>}
          </div>
          <button className="reader-language-button" type="button" onClick={() => onNotice?.("Language preferences will be available soon.")}><Globe2 size={18} /> EN <ChevronDown size={13} /></button>
          <div className="reader-home-popover-wrap">
            <button className="reader-profile-button" type="button" aria-label={`Reader profile: ${firstName}`} aria-expanded={profileOpen} onClick={() => { setProfileOpen((open) => !open); setCartOpen(false); }}><UserRound size={20} /></button>
          </div>
        </div>
      </div>
      {profileOpen && <>
        <button className="reader-profile-scrim" type="button" aria-label="Close profile panel" onClick={() => setProfileOpen(false)} />
        <aside className="reader-profile-drawer" role="dialog" aria-modal="true" aria-labelledby="reader-profile-title">
          <header className="reader-profile-drawer-heading">
            <div><span className="reader-profile-drawer-eyebrow">YOUR ACCOUNT</span><h2 id="reader-profile-title">Reader Profile</h2></div>
            <button type="button" aria-label="Close profile panel" onClick={() => setProfileOpen(false)}><X size={19} /></button>
          </header>
          <section className="reader-profile-summary">
            <span className="reader-profile-avatar">{initials}</span>
            <div><strong>{account?.name || firstName}</strong><span>{account?.email || "reader@example.com"}</span><small><span /> Reader account</small></div>
          </section>
          <div className="reader-profile-drawer-stats">
            <span><strong>{savedIds.length}</strong><small>Saved books</small></span>
            <span><strong>{itemCount}</strong><small>Cart items</small></span>
            <span><strong>{account?.genres?.length || 0}</strong><small>Interests</small></span>
          </div>
          <section className="reader-profile-details">
            <h3>Profile details</h3>
            <div><span>Country / Region</span><strong>{account?.country || "India"}</strong></div>
            <div><span>Email address</span><strong>{account?.email || "reader@example.com"}</strong></div>
            <div><span>Reading interests</span><strong>{account?.genres?.length ? account.genres.slice(0, 2).join(", ") : "Discover your next genre"}</strong></div>
          </section>
          <section className="reader-profile-shortcuts">
            <h3>Quick links</h3>
            <button type="button" onClick={handleOpenLibrary}><Library size={17} /><span><strong>My Library</strong><small>Continue reading and manage your books</small></span><ChevronDown size={15} className="reader-profile-shortcut-arrow" /></button>
            <button type="button" onClick={() => { setProfileOpen(false); navigate("/publishers/readers/library#account-settings", { state: homeState }); }}><UserRound size={17} /><span><strong>Account settings</strong><small>Manage your reader information</small></span><ChevronDown size={15} className="reader-profile-shortcut-arrow" /></button>
            <button type="button" onClick={() => { setProfileOpen(false); onNotice?.("Notifications will be available when reader accounts are connected."); }}><ShieldCheck size={17} /><span><strong>Privacy & notifications</strong><small>Choose what updates you receive</small></span><ChevronDown size={15} className="reader-profile-shortcut-arrow" /></button>
          </section>
          <div className="reader-profile-drawer-footer">
            <p>Your reader profile and library are private to your account.</p>
            <button type="button" onClick={handleSignOut}><LogOut size={16} /> Sign out</button>
          </div>
        </aside>
      </>}
    </header>
  );
}
