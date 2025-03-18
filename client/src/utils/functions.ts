import { ICart } from "../interfaces";

// Calculate order summary values
export const calculateSummary = (carts: ICart[]) => {
  // Subtotal: sum of original prices (before discount)
  const subtotal = carts.reduce((acc, item) => {
    // If there's a discount, original price is price + (price * discountPercentage/100)
    const originalPrice =
      item.discountPercentage > 0
        ? item.price + item.price * (item.discountPercentage / 100)
        : item.price;
    return acc + originalPrice * item.quantity;
  }, 0);

  // Total Price: sum of final (discounted) prices
  const totalPrice = carts.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Total Discount: difference between subtotal and total price
  const totalDiscount = subtotal - totalPrice;

  return { subtotal, totalDiscount, totalPrice };
};
