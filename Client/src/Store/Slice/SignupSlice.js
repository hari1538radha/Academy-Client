import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signup = createAsyncThunk("user", async (data) => {
  return axio.post(`/authenticate/signup`, data);
});

export const SignupReducer = createSlice({
  name: "signup",
  initialState: {
    signupData: [],
    loading: false,
  },
  reducer: {},
  extraReducers: {
    [signup.pending]: (state, action) => {
      state.loading = true;
      state.signupData = {
        response: "success",
      };
      state.loading = true;
    },
    [signup.fulfilled]: (state, action) => {
      state.signupData = action.payload;
      state.loading = false;
    },
    [signup.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

const signupReducer = SignupReducer.reducer;
export default signupReducer;
