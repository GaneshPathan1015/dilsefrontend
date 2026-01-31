// // src/utils/priceBreakup.js

// export const getPriceBreakup = (item) => {
//   const qty = Number(item.itemQuantity || 1);

//   const price = Number(item.price || 0);
//   const makingCharges = Number(item.making_charges || 0);

//   const goldGst = Number(item.gold_gst_amount || 0);
//   const makingGst = Number(item.making_gst_amount || 0);
//   const diamondGst = Number(item.diamond_gst_amount || 0);
//   const totalGst = Number(item.total_gst_amount || 0);

//   const subtotal = price + makingCharges;
//   const grandTotal = Number(item.price_with_tax || subtotal + totalGst);

//   return {
//     basePrice: price * qty,
//     makingCharges: makingCharges * qty,
//     subtotal: subtotal * qty,

//     goldGst: goldGst * qty,
//     makingGst: makingGst * qty,
//     diamondGst: diamondGst * qty,
//     totalGst: totalGst * qty,

//     goldGstRate: item.gold_gst_rate,
//     makingGstRate: item.making_gst_rate,
//     diamondGstRate: item.diamond_gst_rate,

//     grandTotal: grandTotal * qty,
//   };
// };


export const getPriceBreakup = (item) => {
  const qty = Number(item.itemQuantity || 1);
  
  // Initialize variables
  let goldPrice = 0;
  let diamondPrice = 0;
  let makingCharges = Number(item.making_charges || 0);

  // 1. Identify Price Components based on Product Type
  if (item.productType === "combo") {
    // In a combo, price is split between ring (gold) and diamond
    goldPrice = Number(item.ring?.price || 0);
    diamondPrice = Number(item.diamond?.price || 0);
  } else if (item.productType === "diamond") {
    // Only diamond price applies
    diamondPrice = Number(item.price || 0);
    makingCharges = 0; 
  } else if (item.productType === "build") {
    // Usually gold price + making
    goldPrice = Number(item.price || 0);
  } else {
    // Default (Jewelry / Gift)
    goldPrice = Number(item.price || 0);
  }

  // 2. Define GST Rates
  const GOLD_GST_RATE = 3.0;     // 3%
  const MAKING_GST_RATE = 3.0;   // 3%
  const DIAMOND_GST_RATE = 0.25; // 0.25%

  // 3. Calculate GST Amounts
  const goldGstAmount = (goldPrice * GOLD_GST_RATE) / 100;
  const makingGstAmount = (makingCharges * MAKING_GST_RATE) / 100;
  const diamondGstAmount = (diamondPrice * DIAMOND_GST_RATE) / 100;

  const totalGstPerUnit = goldGstAmount + makingGstAmount + diamondGstAmount;
  const subtotalPerUnit = goldPrice + diamondPrice + makingCharges;
  const grandTotalPerUnit = subtotalPerUnit + totalGstPerUnit;

  // 4. Return multiplied by Quantity
  return {
    basePrice: (goldPrice + diamondPrice) * qty,
    makingCharges: makingCharges * qty,
    subtotal: subtotalPerUnit * qty,

    goldGst: goldGstAmount * qty,
    makingGst: makingGstAmount * qty,
    diamondGst: diamondGstAmount * qty,
    totalGst: totalGstPerUnit * qty,

    // Metadata for the UI labels
    goldGstRate: GOLD_GST_RATE,
    makingGstRate: MAKING_GST_RATE,
    diamondGstRate: DIAMOND_GST_RATE,

    grandTotal: grandTotalPerUnit * qty,
  };
};
