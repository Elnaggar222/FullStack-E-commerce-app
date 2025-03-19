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
export const IncreaseQuantityHandler = (cartItems: ICart[], ItemId: string) =>
  cartItems.map((item) =>
    item.product_id === ItemId ? { ...item, quantity: item.quantity + 1 } : item
  );

export const decreaseQuantityHandler = (cartItems: ICart[], ItemId: string) =>
  cartItems.map((item) =>
    item.product_id === ItemId
      ? { ...item, quantity: item.quantity - 1 < 1 ? 1 : item.quantity - 1 }
      : item
  );

// ✅ Calculate cart items count safely
export const itemCountHandler = (cartItems: ICart[]): number =>
  cartItems.reduce((acc, item) => acc + +item.quantity, 0);
