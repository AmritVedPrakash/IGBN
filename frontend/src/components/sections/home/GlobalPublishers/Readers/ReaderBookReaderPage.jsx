import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  BookOpen,
  Bookmark,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Highlighter,
  List,
  Maximize,
  MessageSquareText,
  MoreHorizontal,
  Plus,
  Trash2,
  X,
} from "lucide-react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getReaderBookDetails, readerBooks } from "./readerBooks";
import { readReaderBookState, writeReaderBookState } from "./readerReadingStore";
import "./readerBookReader.css";

const chapterNames = [
  "A New Beginning",
  "The Weight We Carry",
  "Moments of Stillness",
  "A Shift in Perspective",
  "Finding Inner Strength",
  "The Power of Letting Go",
  "Gratitude in Everyday Life",
  "Building a More Mindful You",
  "A Kinder World",
  "Continuing the Journey",
];
const highlightColors = ["yellow", "pink", "green", "blue"];
const defaultPreferences = { fontSize: 17, fontFamily: "serif", theme: "light", lineSpacing: "relaxed" };

function createChapters(totalPages) {
  return chapterNames.map((title, index) => ({
    number: index + 1,
    title,
    startPage: Math.floor((index * totalPages) / chapterNames.length) + 1,
  }));
}

function getChapterForPage(chapters, page) {
  return [...chapters].reverse().find((chapter) => page >= chapter.startPage) || chapters[0];
}

function getPageParagraphs(book, details, chapter, page) {
  const pageInChapter = page - chapter.startPage;
  const pageVariant = pageInChapter % 3;
  const chapterName = chapter.title.toLowerCase();

  if (pageVariant === 0) {
    return [
      details.sample,
      `At the start of ${chapterName}, the familiar world seemed to pause. ${book.description} A quiet question stayed in the air: what might change if we chose to look a little closer?`,
      `The answer did not arrive all at once. It appeared in small details — a thoughtful conversation, a remembered promise, and the courage to take one honest step forward.`,
    ];
  }

  if (pageVariant === 1) {
    return [
      `There was no perfect map for what came next. ${book.description} Each new moment offered a chance to listen, to learn, and to understand the people who shared this journey.`,
      `Some days brought easy progress; others asked for patience. Through both, the story found its rhythm in the choices made when no one was watching.`,
      `By evening, the things that once felt distant had become possible. A new perspective was taking shape, built from curiosity and care.`,
    ];
  }

  return [
    `The turning point was quieter than expected. In ${chapterName}, a simple act of kindness changed the way the day was remembered.`,
    `${book.author} invites us to notice how much can grow from a small beginning. The path was still unfolding, but it no longer had to be travelled alone.`,
    `And so the next chapter began — not with certainty, but with a little more hope than before.`,
  ];
}

function renderHighlightedText(text, highlights) {
  const matches = highlights
    .map((highlight) => ({ ...highlight, index: text.indexOf(highlight.text) }))
    .filter((highlight) => highlight.index >= 0)
    .sort((first, second) => first.index - second.index);
  const result = [];
  let cursor = 0;

  matches.forEach((highlight) => {
    if (highlight.index < cursor) return;
    if (highlight.index > cursor) result.push(text.slice(cursor, highlight.index));
    result.push(
      <mark className={`reader-highlight-mark is-${highlight.color}`} key={highlight.id}>
        {highlight.text}
      </mark>,
    );
    cursor = highlight.index + highlight.text.length;
  });

  if (cursor < text.length) result.push(text.slice(cursor));
  return result.length ? result : text;
}

function AnnotationList({ type, items, onOpen, onDelete }) {
  if (!items.length) {
    return <p className="reader-annotation-empty">No {type} yet. Add one while you read.</p>;
  }

  return (
    <div className="reader-annotation-list">
      {items.map((item) => (
        <article className={`reader-annotation-card is-${type}`} key={item.id}>
          <button type="button" className="reader-annotation-open" onClick={() => onOpen(item.page)}>
            <span className="reader-annotation-card-heading">
              <strong>{item.title || item.chapter}</strong>
              <small>Page {item.page}</small>
            </span>
            {item.text && <span className="reader-annotation-card-text">{item.text}</span>}
            {!item.text && <span className="reader-annotation-card-text">{item.chapter}</span>}
          </button>
          <button type="button" className="reader-annotation-delete" aria-label={`Remove ${type}`} onClick={() => onDelete(item.id)}>
            <Trash2 size={14} />
          </button>
        </article>
      ))}
    </div>
  );
}

export default function ReaderBookReaderPage() {
  const { bookId } = useParams();
  const location = useLocation();
  const readerRef = useRef(null);
  const noteInputRef = useRef(null);
  const book = readerBooks.find((item) => item.id === bookId);
  const details = useMemo(() => (book ? getReaderBookDetails(book) : null), [book]);
  const totalPages = details?.pages || 1;
  const [initialReaderState] = useState(() => readReaderBookState(bookId));
  const [page, setPage] = useState(() => Math.min(
    totalPages,
    Math.max(1, initialReaderState.page > 1 ? initialReaderState.page : location.state?.startPage || 1),
  ));
  const [preferences, setPreferences] = useState(initialReaderState.preferences || defaultPreferences);
  const [bookmarks, setBookmarks] = useState(initialReaderState.bookmarks || []);
  const [highlights, setHighlights] = useState(initialReaderState.highlights || []);
  const [notes, setNotes] = useState(initialReaderState.notes || []);
  const [leftTab, setLeftTab] = useState("contents");
  const [rightTab, setRightTab] = useState("notes");
  const [selectedText, setSelectedText] = useState("");
  const [highlightColor, setHighlightColor] = useState("yellow");
  const [draftNote, setDraftNote] = useState("");
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [notice, setNotice] = useState("");
  const chapters = useMemo(() => createChapters(totalPages), [totalPages]);
  const currentChapter = getChapterForPage(chapters, page);
  const currentHighlights = highlights.filter((highlight) => highlight.page === page);
  const currentBookmark = bookmarks.some((bookmark) => bookmark.page === page);
  const visibleAnnotations = rightTab === "notes"
    ? notes
    : rightTab === "highlights"
      ? highlights
      : bookmarks;
  const account = location.state?.account;
  const savedIds = location.state?.savedIds || [];
  const search = location.state?.search || "";

  useEffect(() => {
    if (!book) return;
    const saved = writeReaderBookState(book.id, { page, preferences, bookmarks, highlights, notes });
    if (!saved) setNotice("Reading progress could not be saved on this device.");
  }, [book, page, preferences, bookmarks, highlights, notes]);

  useEffect(() => {
    const handleReaderKeys = (event) => {
      if (event.target instanceof HTMLElement && event.target.matches("input, textarea, select, button")) return;
      if (event.key === "ArrowRight") setPage((current) => Math.min(totalPages, current + 1));
      if (event.key === "ArrowLeft") setPage((current) => Math.max(1, current - 1));
      if (event.key === "Escape") setMoreOpen(false);
    };

    window.addEventListener("keydown", handleReaderKeys);
    return () => window.removeEventListener("keydown", handleReaderKeys);
  }, [totalPages]);

  useEffect(() => {
    if (!isAddingNote) return;
    noteInputRef.current?.focus();
  }, [isAddingNote]);

  useEffect(() => {
    const updateFullscreen = () => setIsFullscreen(document.fullscreenElement === readerRef.current);
    document.addEventListener("fullscreenchange", updateFullscreen);
    return () => document.removeEventListener("fullscreenchange", updateFullscreen);
  }, []);

  if (!book || !details) {
    return (
      <main className="reader-not-found">
        <BookOpen />
        <h1>We couldn't find that book</h1>
        <p>It may have moved or is no longer available in this demo catalog.</p>
        <Link to="/publishers/readers/library"><ArrowLeft size={16} /> Back to My Library</Link>
      </main>
    );
  }

  const previousPage = () => {
    setPage((current) => Math.max(1, current - 1));
    setSelectedText("");
  };
  const nextPage = () => {
    setPage((current) => Math.min(totalPages, current + 1));
    setSelectedText("");
  };

  const showNotice = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 3000);
  };

  const handleSelection = () => {
    const selection = window.getSelection()?.toString().trim() || "";
    setSelectedText(selection.slice(0, 280));
  };

  const addHighlight = () => {
    if (!selectedText) {
      showNotice("Select a passage on the page before adding a highlight.");
      return;
    }

    const exists = highlights.some((highlight) => highlight.page === page && highlight.text === selectedText);
    if (exists) {
      showNotice("That passage is already highlighted.");
      return;
    }

    setHighlights((current) => [
      ...current,
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        page,
        chapter: currentChapter.title,
        text: selectedText,
        color: highlightColor,
      },
    ]);
    setRightTab("highlights");
    showNotice("Passage added to Highlights.");
  };

  const toggleBookmark = () => {
    if (currentBookmark) {
      setBookmarks((current) => current.filter((bookmark) => bookmark.page !== page));
      showNotice("Bookmark removed.");
      return;
    }

    setBookmarks((current) => [
      ...current,
      { id: `${Date.now()}`, page, chapter: currentChapter.title, title: currentChapter.title },
    ]);
    setRightTab("bookmarks");
    showNotice("Page bookmarked.");
  };

  const saveNote = (event) => {
    event.preventDefault();
    const text = draftNote.trim();
    if (!text) {
      showNotice("Write a note before saving.");
      return;
    }

    setNotes((current) => [
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        page,
        chapter: currentChapter.title,
        title: text.length > 38 ? `${text.slice(0, 38)}…` : "My Reflection",
        text,
        quote: selectedText,
        createdAt: new Date().toISOString(),
      },
      ...current,
    ]);
    setDraftNote("");
    setIsAddingNote(false);
    setRightTab("notes");
    showNotice("Your note was saved.");
  };

  const openAnnotation = (targetPage) => setPage(Math.min(totalPages, Math.max(1, targetPage)));
  const removeAnnotation = (id, type) => {
    if (type === "notes") setNotes((current) => current.filter((item) => item.id !== id));
    if (type === "highlights") setHighlights((current) => current.filter((item) => item.id !== id));
    if (type === "bookmarks") setBookmarks((current) => current.filter((item) => item.id !== id));
  };

  const setFontSize = (change) => {
    setPreferences((current) => ({
      ...current,
      fontSize: Math.min(24, Math.max(14, current.fontSize + change)),
    }));
  };

  const cycleHighlightColor = () => {
    const index = highlightColors.indexOf(highlightColor);
    setHighlightColor(highlightColors[(index + 1) % highlightColors.length]);
  };

  const resetPreferences = () => {
    setPreferences(defaultPreferences);
    setMoreOpen(false);
    showNotice("Reading preferences reset.");
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && readerRef.current?.requestFullscreen) {
      readerRef.current.requestFullscreen().catch(() => showNotice("Full screen isn't available in this browser."));
      return;
    }
    if (document.fullscreenElement) document.exitFullscreen();
  };

  const pageParagraphs = getPageParagraphs(book, details, currentChapter, page);

  return (
    <main className={`reader-book-reader theme-${preferences.theme} ${isFullscreen ? "is-fullscreen" : ""}`} ref={readerRef}>
      <header className="reader-reader-header">
        <div className="reader-reader-bookline">
          <Link to={`/publishers/readers/books/${book.id}`} state={{ account, savedIds, search }}><ArrowLeft size={15} /> Back to Book Details</Link>
          <div className="reader-reader-book-meta">
            <img src={book.image} alt="" />
            <span><strong>{book.title}</strong><small>{preferences.fontFamily === "sans" ? "eBook" : "eBook"} <i /> {location.state?.language || book.language} Edition</small></span>
            <button type="button" onClick={() => showNotice("Edition options are managed from book details.")}>Change Edition <ChevronDown size={13} /></button>
          </div>
        </div>

        <div className="reader-reader-toolbar">
          <div className="reader-toolbar-group reader-font-controls" aria-label="Font size">
            <button type="button" aria-label="Decrease font size" onClick={() => setFontSize(-1)}>A−</button>
            <button type="button" aria-label="Reset font size" onClick={() => setPreferences((current) => ({ ...current, fontSize: 17 }))}>A</button>
            <button type="button" aria-label="Increase font size" onClick={() => setFontSize(1)}>A+</button>
          </div>
          <label className="reader-toolbar-select"><span>Font Style</span><select value={preferences.fontFamily} onChange={(event) => setPreferences((current) => ({ ...current, fontFamily: event.target.value }))}><option value="serif">Serif</option><option value="sans">Sans Serif</option><option value="classic">Classic</option></select><ChevronDown size={13} /></label>
          <div className="reader-toolbar-group reader-theme-controls" aria-label="Display theme">
            {["light", "sepia", "dark"].map((theme) => <button type="button" className={preferences.theme === theme ? "is-active" : ""} key={theme} onClick={() => setPreferences((current) => ({ ...current, theme }))}>{theme.charAt(0).toUpperCase() + theme.slice(1)}</button>)}
          </div>
          <label className="reader-toolbar-select reader-spacing-select"><span>Line Spacing</span><select value={preferences.lineSpacing} onChange={(event) => setPreferences((current) => ({ ...current, lineSpacing: event.target.value }))}><option value="compact">Compact</option><option value="relaxed">Relaxed</option><option value="spacious">Spacious</option></select><ChevronDown size={13} /></label>
          <span className="reader-toolbar-divider" />
          <div className="reader-toolbar-actions">
            <button type="button" className={currentBookmark ? "is-active" : ""} onClick={toggleBookmark}><Bookmark size={17} fill={currentBookmark ? "currentColor" : "none"} /><span>{currentBookmark ? "Bookmarked" : "Bookmark"}</span></button>
            <div className="reader-highlight-control">
              <button type="button" onClick={addHighlight}><Highlighter size={17} /><span>Highlight</span></button>
              <button type="button" className={`reader-highlight-color is-${highlightColor}`} onClick={cycleHighlightColor} aria-label={`Highlight color: ${highlightColor}; change color`} />
            </div>
            <button type="button" onClick={() => { setRightTab("notes"); setIsAddingNote(true); }}><MessageSquareText size={17} /><span>Notes</span></button>
            <div className="reader-more-wrap">
              <button type="button" aria-expanded={moreOpen} onClick={() => setMoreOpen((open) => !open)}><MoreHorizontal size={18} /><span>More</span></button>
              {moreOpen && <div className="reader-more-menu">
                <button type="button" onClick={toggleFullscreen}><Maximize size={14} /> Toggle full screen</button>
                <button type="button" onClick={resetPreferences}>Reset reading preferences</button>
                <p>Demo reader content is provided for layout preview.</p>
              </div>}
            </div>
          </div>
        </div>
      </header>

      <div className="reader-reader-workspace">
        <aside className="reader-reader-outline">
          <div className="reader-reader-outline-tabs" role="tablist" aria-label="Book navigation">
            {[
              { id: "contents", label: "Contents" },
              { id: "bookmarks", label: "Bookmarks" },
              { id: "highlights", label: "Highlights" },
              { id: "notes", label: "Notes" },
            ].map((tab) => <button type="button" role="tab" aria-selected={leftTab === tab.id} className={leftTab === tab.id ? "is-active" : ""} key={tab.id} onClick={() => setLeftTab(tab.id)}>{tab.label}</button>)}
          </div>
          {leftTab === "contents" && <nav className="reader-chapter-list" aria-label="Table of contents">
            {chapters.map((chapter) => <button type="button" key={chapter.number} className={currentChapter.number === chapter.number ? "is-active" : ""} onClick={() => setPage(chapter.startPage)}>
              <ChevronRight size={14} /><span><strong>Chapter {chapter.number}</strong><small>{chapter.title}</small></span><i>{chapter.startPage}</i>
            </button>)}
          </nav>}
          {leftTab === "bookmarks" && <AnnotationList type="bookmarks" items={bookmarks} onOpen={openAnnotation} onDelete={(id) => removeAnnotation(id, "bookmarks")} />}
          {leftTab === "highlights" && <AnnotationList type="highlights" items={highlights} onOpen={openAnnotation} onDelete={(id) => removeAnnotation(id, "highlights")} />}
          {leftTab === "notes" && <AnnotationList type="notes" items={notes} onOpen={openAnnotation} onDelete={(id) => removeAnnotation(id, "notes")} />}
          <div className="reader-outline-footer"><BookOpen size={14} /><span>{chapters.length} chapters <i /> {totalPages} pages</span></div>
        </aside>

        <section className="reader-reader-center" aria-label="Book page">
          <div className={`reader-paper-wrap font-${preferences.fontFamily} spacing-${preferences.lineSpacing}`}>
            <article
              className="reader-paper"
              style={{ "--reader-page-font-size": `${preferences.fontSize}px` }}
              onMouseUp={handleSelection}
              onTouchEnd={handleSelection}
            >
              <div className="reader-paper-kicker">Chapter {currentChapter.number}</div>
              <h1>{currentChapter.title}</h1>
              <span className="reader-paper-flourish" />
              <div className="reader-paper-content">
                {pageParagraphs.map((paragraph, index) => <p key={`${currentChapter.number}-${page}-${index}`}>{renderHighlightedText(paragraph, currentHighlights)}</p>)}
              </div>
              <div className="reader-paper-page-number">{page}</div>
              <div className="reader-demo-content-label">Sample reader · Demo text</div>
            </article>
          </div>

          <footer className="reader-page-controls">
            <div className="reader-page-position"><span>Page {page} of {totalPages}</span><input aria-label="Reading progress" type="range" min="1" max={totalPages} value={page} onChange={(event) => setPage(Number(event.target.value))} /><strong>{Math.round((page / totalPages) * 100)}%</strong></div>
            <div className="reader-page-buttons">
              <button type="button" onClick={previousPage} disabled={page <= 1}><ChevronLeft size={16} /> Previous</button>
              <button type="button" onClick={nextPage} disabled={page >= totalPages}>Next <ChevronRight size={16} /></button>
            </div>
          </footer>
        </section>

        <aside className="reader-reader-annotations">
          <div className="reader-annotation-tabs" role="tablist" aria-label="Reading annotations">
            {[
              { id: "notes", label: "Notes", count: notes.length },
              { id: "highlights", label: "Highlights", count: highlights.length },
              { id: "bookmarks", label: "Bookmarks", count: bookmarks.length },
            ].map((tab) => <button type="button" role="tab" aria-selected={rightTab === tab.id} className={rightTab === tab.id ? "is-active" : ""} key={tab.id} onClick={() => setRightTab(tab.id)}>{tab.label} ({tab.count})</button>)}
          </div>
          {rightTab === "notes" && <button className="reader-add-note" type="button" onClick={() => setIsAddingNote((adding) => !adding)}><Plus size={14} /> {isAddingNote ? "Cancel Note" : "Add Note"}</button>}
          {isAddingNote && rightTab === "notes" && <form className="reader-note-composer" onSubmit={saveNote}>
            {selectedText && <blockquote>{selectedText}</blockquote>}
            <textarea ref={noteInputRef} value={draftNote} onChange={(event) => setDraftNote(event.target.value)} placeholder="Write a thought about this page..." rows={4} />
            <button type="submit"><Check size={14} /> Save Note</button>
          </form>}
          <AnnotationList type={rightTab} items={visibleAnnotations} onOpen={openAnnotation} onDelete={(id) => removeAnnotation(id, rightTab)} />
          <div className="reader-annotation-tip"><List size={15} /><span>Select text on the page to highlight it, or add a note to remember a thought.</span></div>
        </aside>
      </div>

      {notice && <div className="reader-reader-toast" role="status">{notice}<button type="button" onClick={() => setNotice("")} aria-label="Dismiss message"><X size={14} /></button></div>}
    </main>
  );
}
