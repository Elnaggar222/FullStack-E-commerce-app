import { ICart } from "../interfaces";
/**
 * Calculates the order summary values including subtotal, total price, and total discount.
 *
 * @param {ICart[]} carts - Array of Local Cart Items.
 * @returns {{ subtotal: number, totalDiscount: number, totalPrice: number }}
 *          An object containing:
 *          - `subtotal`: The total original price before discounts.
 *          - `totalDiscount`: The total discount amount applied.
 *          - `totalPrice`: The final total price after discounts.
 */
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

/**
 * Adds an item to the local cart. If the item already exists, it increments its quantity.
 *
 * @param {ICart[]} cartItems - The current array of Local Cart Items.
 * @param {ICart} ItemToAdd - The item to be added to the local cart.
 * @returns {ICart[]} A new array with the updated local cart items.
 */
export const addToCartHandler = (cartItems: ICart[], ItemToAdd: ICart) => {
  const isExisted = cartItems.find(
    (item) => item.product_id === ItemToAdd.product_id
  );

  if (isExisted)
    return cartItems.map((item) =>
      item.product_id === ItemToAdd.product_id
        ? { ...item, quantity: +item.quantity + 1 }
        : item
    );

  return [...cartItems, ItemToAdd];
};
/**
 * Increases the quantity of a specific item in the local cart by 1.
 *
 * @param {ICart[]} cartItems - The current array of local cart items.
 * @param {string} ItemId - The ID of the item whose quantity should be increased.
 * @returns {ICart[]} A new array with the updated local cart items.
 */
export const IncreaseQuantityHandler = (cartItems: ICart[], ItemId: string) =>
  cartItems.map((item) =>
    item.product_id === ItemId ? { ...item, quantity: item.quantity + 1 } : item
  );

/**
 * Decreases the quantity of a specific item in the local cart by 1, ensuring it doesn't go below 1.
 *
 * @param {ICart[]} cartItems - The current array of local cart items.
 * @param {string} ItemId - The ID of the item whose quantity should be decreased.
 * @returns {ICart[]} A new array with the updated local cart items.
 */
export const decreaseQuantityHandler = (cartItems: ICart[], ItemId: string) =>
  cartItems.map((item) =>
    item.product_id === ItemId
      ? { ...item, quantity: item.quantity - 1 < 1 ? 1 : item.quantity - 1 }
      : item
  );

/**
 * Calculates the total number of items in the local cart.
 *
 * @param {ICart[]} cartItems - The current array of local cart items.
 * @returns {number} The total count of all items in the local cart.
 */
export const itemCountHandler = (cartItems: ICart[]): number =>
  cartItems.reduce((acc, item) => acc + +item.quantity, 0);
