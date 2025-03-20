import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart } from "../../interfaces";
import {
  addToCartHandler,
  decreaseQuantityHandler,
  IncreaseQuantityHandler,
} from "../../utils/functions";
import { RootState } from "../store";
interface IInitialState {
  localCartItems: ICart[];
}
const initialState: IInitialState = {
  localCartItems: [],
};

export const LocalCartSlice = createSlice({
  name: "localCart",
  initialState,
  reducers: {
    addToCartAction: (state, action: PayloadAction<ICart>) => {
      state.localCartItems = addToCartHandler(
        state.localCartItems,
        action.payload
      );
    },
    removeItemAction: (state, action: PayloadAction<string>) => {
      state.localCartItems = state.localCartItems.filter(
        (item) => item.product_id !== action.payload
      );
    },
    increaseQuantityAction: (state, action: PayloadAction<string>) => {
      state.localCartItems = IncreaseQuantityHandler(
        state.localCartItems,
        action.payload
      );
    },
    decreaseQuantityAction: (state, action: PayloadAction<string>) => {
      state.localCartItems = decreaseQuantityHandler(
        state.localCartItems,
        action.payload
      );
    },
    clearLocalCartAction: (state) => {
      state.localCartItems = [];
    },
  },
});

export const {
  addToCartAction,
  decreaseQuantityAction,
  increaseQuantityAction,
  removeItemAction,
  clearLocalCartAction,
} = LocalCartSlice.actions;
export const localCartSelector = ({ localCart }: RootState) => localCart;
export default LocalCartSlice;
