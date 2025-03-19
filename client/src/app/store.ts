import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userAuthSlice from "./features/AuthSlice";
import LocalCartSlice from "./features/LocalCart";

const store = configureStore({
  reducer: {
    userAuth: userAuthSlice.reducer,
    localCart: LocalCartSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
