import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../config/axios.config";
import {
  IErrorResponse,
  IFormSignInInfo,
  IFormSignUpInfo,
  ILoggedUser,
} from "../../interfaces";
import { RootState } from "../store";
import { toaster } from "../../components/ui/toaster";
import { AxiosError } from "axios";
import MergeLocalCart from "../../services/MergeLocalCart";
import { clearLocalCartAction } from "./LocalCartSlice";

interface IInitialState {
  loggedUser: ILoggedUser;
  isLoading: boolean;
  error: AxiosError<IErrorResponse> | null;
}

const initialState: IInitialState = {
  loggedUser: {
    jwt: "",
    user: {
      username: "",
    },
  },
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
      type: "Sign In" | "Sign Up";
    },
    thunkAPI
  ) => {
    const { rejectWithValue, dispatch, getState } = thunkAPI;
    try {
      const endpoint =
        type === "Sign Up" ? "/auth/local/register" : "/auth/local";
      const { data } = await axiosInstance.post<ILoggedUser>(
        endpoint,
        userInfo
      );
      const {
        localCart: { localCartItems },
      } = getState() as RootState;
      // Merge local cart with the server cart after login
      await MergeLocalCart(data.jwt, localCartItems);
      //clear the local cart now that it's merged
      dispatch(clearLocalCartAction());
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    logoutAction: (state) => {
      state.loggedUser = initialState.loggedUser;
      state.isLoading = false;
      state.error = null;
      toaster.create({
        title: "Logged out successfully",
        type: "success",
        duration: 1500,
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserAuth.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.loggedUser = initialState.loggedUser;
      })
      .addCase(getUserAuth.fulfilled, (state, action) => {
        state.isLoading = false;
        state.loggedUser = action.payload;
        // Determine message based on action meta
        const actionType = action.meta.arg.type;
        const successMessage =
          actionType === "Sign Up"
            ? "Account Created Successfully"
            : "Logged in Successfully";
        toaster.create({
          title: successMessage,
          type: "success",
          duration: 1500,
        });
      })
      .addCase(getUserAuth.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as AxiosError<IErrorResponse>;
        // Determine message based on action meta
        const actionType = action.meta.arg.type;
        const errorMessage = `Failed To ${actionType} : ${
          state.error.response?.data.error.message || "SERVER ERROR"
        }`;
        toaster.create({
          title: errorMessage,
          type: "error",
          duration: 1500,
        });
      });
  },
});
export const { logoutAction } = userAuthSlice.actions;
export const userAuthSelector = ({ userAuth }: RootState) => userAuth;
export default userAuthSlice;
