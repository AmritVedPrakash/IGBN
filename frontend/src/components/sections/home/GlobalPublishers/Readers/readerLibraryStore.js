import { readerBooks } from "./readerBooks";

const READER_LIBRARY_KEY = "igbn-reader-library";

function normalizePurchase(item) {
  const book = readerBooks.find((candidate) => candidate.id === item?.bookId);
  if (!book) return null;

  const price = Number(item.price);
  return {
    bookId: book.id,
    format: typeof item.format === "string" ? item.format : "eBook",
    language: typeof item.language === "string" ? item.language : book.language,
    price: Number.isFinite(price) && price >= 0 ? price : book.price,
    purchasedAt: typeof item.purchasedAt === "string" ? item.purchasedAt : "",
    orderId: typeof item.orderId === "string" ? item.orderId : "",
  };
}

export function readReaderPurchases() {
  let storedLibrary;

  try {
    storedLibrary = window.localStorage.getItem(READER_LIBRARY_KEY);
  } catch (error) {
    console.error("Unable to read the reader library from local storage.", error);
    return [];
  }

  if (!storedLibrary) return [];

  try {
    const parsedLibrary = JSON.parse(storedLibrary);
    if (!Array.isArray(parsedLibrary)) {
      throw new TypeError("The saved reader library must be a list.");
    }

    return parsedLibrary.map(normalizePurchase).filter(Boolean);
  } catch (error) {
    console.error("The saved reader library could not be parsed.", error);
    return [];
  }
}

export function recordReaderPurchase(order) {
  const currentPurchases = readReaderPurchases();
  const nextPurchases = [...currentPurchases];

  order.items.forEach((item) => {
    const purchase = normalizePurchase({
      ...item,
      purchasedAt: order.placedAt,
      orderId: order.id,
    });

    if (!purchase) return;

    const existingIndex = nextPurchases.findIndex((current) => (
      current.bookId === purchase.bookId
      && current.format === purchase.format
      && current.language === purchase.language
    ));

    if (existingIndex >= 0) {
      nextPurchases[existingIndex] = purchase;
    } else {
      nextPurchases.unshift(purchase);
    }
  });

  try {
    window.localStorage.setItem(READER_LIBRARY_KEY, JSON.stringify(nextPurchases));
    return true;
  } catch (error) {
    console.error("Unable to save the reader purchase to local storage.", error);
    return false;
  }
}
