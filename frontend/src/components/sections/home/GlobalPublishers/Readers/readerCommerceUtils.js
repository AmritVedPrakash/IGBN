export const readerDiscountRates = {
  READ10: 0.1,
  WELCOME15: 0.15,
};

export function calculateReaderTotals(items, promoCode = "") {
  const subtotal = items.reduce((total, item) => total + item.price, 0);
  const discountRate = readerDiscountRates[promoCode] || 0;
  const discount = subtotal * discountRate;
  const taxableAmount = subtotal - discount;
  const tax = taxableAmount * 0.12;

  return {
    subtotal,
    discount,
    tax,
    total: taxableAmount + tax,
    discountRate,
  };
}
