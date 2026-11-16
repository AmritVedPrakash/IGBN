import { useContext } from "react";
import { ReaderCartContext } from "./readerCartStore";

export function useReaderCart() {
  const context = useContext(ReaderCartContext);
  if (!context) {
    throw new Error("useReaderCart must be used inside ReaderCartProvider.");
  }
  return context;
}
