const READER_STATE_KEY = "igbn-reader-reading-state";

const emptyReaderState = {
  page: 1,
  preferences: {
    fontSize: 17,
    fontFamily: "serif",
    theme: "light",
    lineSpacing: "relaxed",
  },
  bookmarks: [],
  highlights: [],
  notes: [],
};

function normalizeReaderState(value) {
  const preferences = value?.preferences || {};
  const rawPage = Number(value?.page);

  return {
    page: Number.isInteger(rawPage) && rawPage > 0 ? rawPage : 1,
    preferences: {
      fontSize: Number.isInteger(preferences.fontSize) ? Math.min(24, Math.max(14, preferences.fontSize)) : emptyReaderState.preferences.fontSize,
      fontFamily: ["serif", "sans", "classic"].includes(preferences.fontFamily) ? preferences.fontFamily : emptyReaderState.preferences.fontFamily,
      theme: ["light", "sepia", "dark"].includes(preferences.theme) ? preferences.theme : emptyReaderState.preferences.theme,
      lineSpacing: ["compact", "relaxed", "spacious"].includes(preferences.lineSpacing) ? preferences.lineSpacing : emptyReaderState.preferences.lineSpacing,
    },
    bookmarks: Array.isArray(value?.bookmarks) ? value.bookmarks.filter((item) => Number.isInteger(item?.page) && item.page > 0) : [],
    highlights: Array.isArray(value?.highlights) ? value.highlights.filter((item) => (
      Number.isInteger(item?.page)
      && item.page > 0
      && typeof item.text === "string"
      && typeof item.color === "string"
    )) : [],
    notes: Array.isArray(value?.notes) ? value.notes.filter((item) => (
      Number.isInteger(item?.page)
      && item.page > 0
      && typeof item.text === "string"
    )) : [],
  };
}

function readAllReaderState() {
  let storedState;

  try {
    storedState = window.localStorage.getItem(READER_STATE_KEY);
  } catch (error) {
    console.error("Unable to read reader preferences from local storage.", error);
    return {};
  }

  if (!storedState) return {};

  try {
    const parsedState = JSON.parse(storedState);
    if (!parsedState || typeof parsedState !== "object" || Array.isArray(parsedState)) {
      throw new TypeError("Saved reader preferences must be an object.");
    }
    return parsedState;
  } catch (error) {
    console.error("Saved reader preferences could not be parsed.", error);
    return {};
  }
}

export function readReaderBookState(bookId) {
  const allState = readAllReaderState();
  return normalizeReaderState(allState[bookId] || emptyReaderState);
}

export function writeReaderBookState(bookId, value) {
  const allState = readAllReaderState();

  try {
    allState[bookId] = normalizeReaderState(value);
    window.localStorage.setItem(READER_STATE_KEY, JSON.stringify(allState));
    return true;
  } catch (error) {
    console.error("Unable to save reader progress and annotations.", error);
    return false;
  }
}

export { emptyReaderState };
