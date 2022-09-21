import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const signup = createAsyncThunk("user", async (data) => {
  return axio.post(`/authenticate/signup`, data)
});

  export const SignupReducer = createSlice({
    name: "sign",
    initialState: {
      data: [],
      loading: false,
    },
    reducer: {},
    extraReducers: {
      [signup.pending]: (state, action) => {
        state.data = {
          response : "success"
        }
        state.loading = true;
      },
      [signup.fulfilled]: (state, action) => {
        state.data = action.payload;
        state.loading = false;
      },
      [signup.rejected]: (state, action) => {
        state.loading = false;
      },
    },
  });

const signupReducer = SignupReducer.reducer;
export default signupReducer;
