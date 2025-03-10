import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userAuthSlice from "./features/AuthSlice";

const store = configureStore({
  reducer: {
    userAuth: userAuthSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
