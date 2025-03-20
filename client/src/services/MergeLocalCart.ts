import { AxiosError } from "axios";
import axiosInstance from "../config/axios.config";
import { ICart, IErrorResponse } from "../interfaces";
import { toaster } from "../components/ui/toaster";

/**
 * Merges local cart items with the user's server cart.
 * For each local item, calls the /carts API endpoint.
 * The backend controller will update the quantity if the product exists,
 * or create a new cart item otherwise.
 *
 * @param jwt - The authenticated user's JWT token.
 * @param localCart - Array of local cart items to merge.
 */
const MergeLocalCart = async (jwt: string, localCartItems: ICart[]) => {
  if (!localCartItems || localCartItems.length === 0) return;
  try {
    for (const cartItem of localCartItems) {
      await axiosInstance.post(
        "/carts",
        { data: cartItem },
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
    }
  } catch (error) {
    const errorData = error as AxiosError<IErrorResponse>;
    toaster.create({
      title: errorData?.response?.data.error.message
        ? `Error merging local cart items: : ${errorData?.response?.data.error.message}`
        : "Error merging local cart items: : SERVER ERROR",
      type: "error",
      duration: 1500,
    });
  }
};
export default MergeLocalCart;
