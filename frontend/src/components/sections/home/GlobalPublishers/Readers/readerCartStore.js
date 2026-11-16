import { createContext } from "react";
import { readerBooks } from "./readerBooks";

const CART_STORAGE_KEY = "igbn-reader-cart";
export const ReaderCartContext = createContext(null);

export function getReaderCartItemKey(item) {
  return `${item.bookId}:${item.format}:${item.language}`;
}

export function normalizeCartLine(item) {
  const rawItem = typeof item === "string" ? { bookId: item } : item;
  const book = readerBooks.find((candidate) => candidate.id === (rawItem?.bookId || rawItem?.id));

  if (!book) return null;

  const price = Number(rawItem.price);

  return {
    bookId: book.id,
    format: typeof rawItem.format === "string" ? rawItem.format : "eBook",
    language: typeof rawItem.language === "string" ? rawItem.language : book.language,
    price: Number.isFinite(price) && price >= 0 ? price : book.price,
  };
}

export function readStoredCart() {
  let storedCart;

  try {
    storedCart = window.localStorage.getItem(CART_STORAGE_KEY);
  } catch (error) {
    console.error("Unable to read the reader cart from local storage.", error);
    return [];
  }

  if (!storedCart) return [];

  try {
    const parsedCart = JSON.parse(storedCart);
    if (!Array.isArray(parsedCart)) {
      throw new TypeError("The saved reader cart must be a list.");
    }

    return parsedCart.map(normalizeCartLine).filter(Boolean);
  } catch (error) {
    console.error("The saved reader cart could not be parsed.", error);
    return [];
  }
}

export function writeStoredCart(items) {
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}
