export const getDiscountedPrice = (price, discount) => {
  const result = price - (price * discount) / 100;
  return result.toFixed(2);
};
