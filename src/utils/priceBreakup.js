// src/utils/priceBreakup.js

export const getPriceBreakup = (item) => {
  const qty = Number(item.itemQuantity || 1);

  const price = Number(item.price || 0);
  const makingCharges = Number(item.making_charges || 0);

  const goldGst = Number(item.gold_gst_amount || 0);
  const makingGst = Number(item.making_gst_amount || 0);
  const diamondGst = Number(item.diamond_gst_amount || 0);
  const totalGst = Number(item.total_gst_amount || 0);

  const subtotal = price + makingCharges;
  const grandTotal = Number(item.price_with_tax || subtotal + totalGst);

  return {
    basePrice: price * qty,
    makingCharges: makingCharges * qty,
    subtotal: subtotal * qty,

    goldGst: goldGst * qty,
    makingGst: makingGst * qty,
    diamondGst: diamondGst * qty,
    totalGst: totalGst * qty,

    goldGstRate: item.gold_gst_rate,
    makingGstRate: item.making_gst_rate,
    diamondGstRate: item.diamond_gst_rate,

    grandTotal: grandTotal * qty,
  };
};
