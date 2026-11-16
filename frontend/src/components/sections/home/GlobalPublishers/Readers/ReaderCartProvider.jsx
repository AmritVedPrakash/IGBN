import { useCallback, useMemo, useRef, useState } from "react";
import { ReaderCartContext, getReaderCartItemKey, normalizeCartLine, readStoredCart, writeStoredCart } from "./readerCartStore";

export function ReaderCartProvider({ children }) {
  const [items, setItems] = useState(readStoredCart);
  const itemsRef = useRef(items);
  const [storageError, setStorageError] = useState("");

  const commitItems = useCallback((nextItems) => {
    itemsRef.current = nextItems;
    setItems(nextItems);

    try {
      writeStoredCart(nextItems);
      setStorageError("");
    } catch (error) {
      console.error("Unable to save the reader cart to local storage.", error);
      setStorageError("Cart changes could not be saved on this device.");
    }
  }, []);

  const addItem = useCallback((book, edition = {}) => {
    const item = normalizeCartLine({
      bookId: book.id,
      format: edition.format || "eBook",
      language: edition.language || book.language,
      price: edition.price ?? book.price,
    });

    if (!item) {
      console.error("Unable to add an unknown book to the reader cart.", book);
      return false;
    }

    const itemKey = getReaderCartItemKey(item);
    if (itemsRef.current.some((currentItem) => getReaderCartItemKey(currentItem) === itemKey)) {
      return false;
    }

    commitItems([...itemsRef.current, item]);
    return true;
  }, [commitItems]);

  const removeItem = useCallback((itemKey) => {
    commitItems(itemsRef.current.filter((item) => getReaderCartItemKey(item) !== itemKey));
  }, [commitItems]);

  const clearCart = useCallback(() => commitItems([]), [commitItems]);

  const value = useMemo(() => ({
    items,
    itemCount: items.length,
    storageError,
    addItem,
    removeItem,
    clearCart,
  }), [items, storageError, addItem, removeItem, clearCart]);

  return <ReaderCartContext.Provider value={value}>{children}</ReaderCartContext.Provider>;
}
