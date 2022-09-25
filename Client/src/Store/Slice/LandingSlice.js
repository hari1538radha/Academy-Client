import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config";

export const landingInfo = createAsyncThunk("User", async () => {
  return axio.get(`/authenticate/topics`)

});

export const landingReducer = createSlice({
  name: "landinginfo",
  initialState: {
    Display: [],
    loading: false,
  },
  reducer: {},
  extraReducers: {
    [landingInfo.pending]: (state, action) => {
      state.loading = true;
    },
    [landingInfo.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.Display = action.payload.data.data;
      state.loading = false;
    },
    [landingInfo.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

const landing = landingReducer.reducer;

export default landing;