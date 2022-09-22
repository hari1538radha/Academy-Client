import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config";

export const loginUser = createAsyncThunk("User", async (data) => {
  return axio.get("/authenticate/login", data);
});

export const loginReducer = createSlice({
  name: "userData",
  initialState: {
    loginData: [],
    loading: false,
  },
  reducer: {},
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.loading = true;
    },
    [loginUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.loginData = action.payload.data;
    },
    [loginUser.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

const LoginReducer = loginReducer.reducer;

export default LoginReducer;
