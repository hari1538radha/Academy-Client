import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axio } from "../../Config/Config";

export const postLoginUser = createAsyncThunk("User", async (data) => {
  return axio.post("/api/login", data);
});

export const loginReducer = createSlice({
  name: "login",
  initialState: {
    loginData: [],
    loading: true,
  },
  reducer: {},
  extraReducers: {
    [postLoginUser.pending]: (state, action) => {
      state.loading = true;
    },
    [postLoginUser.fulfilled]: (state, action) => {
      state.loading = false;

      state.loginData.push(action.payload.data);
    },
    [postLoginUser.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

const LoginReducer = loginReducer.reducer;

export default LoginReducer;
