import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios.config";
import {
  IErrorResponse,
  IFormSignInInfo,
  IFormSignUpInfo,
} from "../../interfaces";
import { RootState } from "../store";
import { toaster } from "../../components/ui/toaster";
import { AxiosError } from "axios";
import CookieService from "../../services/CookieService";

interface IInitialState {
  jwt: string;
  isLoading: boolean;
  error: AxiosError<IErrorResponse> | null;
}

const initialState: IInitialState = {
  jwt: "",
  isLoading: false,
  error: null,
};

// Used For signIn and SignUp
export const getUserAuth = createAsyncThunk(
  "userAuth/getUserAuth",
  async (
    {
      userInfo,
      type,
    }: {
      userInfo: IFormSignUpInfo | IFormSignInInfo;
      type: "signIn" | "signUp";
    },
    thunkAPI
  ) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const endpoint =
        type === "signUp" ? "/auth/local/register" : "/auth/local";
      const { data } = await axiosInstance.post(endpoint, userInfo);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserAuth.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.jwt = "";
      })
      .addCase(getUserAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.jwt = action.payload.jwt;

        // Determine message based on action meta
        const actionType = action.meta.arg.type;
        const successMessage =
          actionType === "signUp"
            ? "Account Created Successfully"
            : "Logged in Successfully";

        const DateNow = new Date();
        const In_Days = 3;
        // Expiration Date in Milliseconds
        const ExpIn_Days = DateNow.setTime(
          DateNow.getTime() + 24 * 60 * 60 * 1000 * In_Days
        );
        const options = { path: "/", expires: new Date(ExpIn_Days) };
        CookieService.setCookie("jwt", state.jwt, options);

        toaster.create({
          title: successMessage,
          type: "success",
          duration: 1500,
        });
      })
      .addCase(getUserAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as AxiosError<IErrorResponse>;
        toaster.create({
          title: state.error.response?.data.error.message ?? "SERVER ERROR",
          type: "error",
          duration: 1500,
        });
      });
  },
});
export const userAuthSelector = ({ userAuth }: RootState) => userAuth;
export default userAuthSlice;
