import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const landingInfo = createAsyncThunk("landininfo", async () => {
  const urlRes = fetch(`http://localhost:8000/authenticate/events`).then(
    (res) => {
      return res.json();
    }
  );
  console.log(urlRes);
  return urlRes;
});

export const landingReducer = createSlice({
  name: "landinginfo",
  initialState: {
    Dipslay: [],
    loading: false,
  },
  reducer: {},
  extraReducer: {
    [landingInfo.pending]: (state, action) => {
      state.loading = true;
    },
    [landingInfo.fulfilled]: (state, action) => {
      state.Display = action.payload.data;
      state.loading = false;
    },
    [landingInfo.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

const landing = landingReducer.reducer;

export default landing;
