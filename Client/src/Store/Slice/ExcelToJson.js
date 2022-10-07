import { axio } from "../../Config/Config";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postUniversitiesData = createAsyncThunk("data/excelData", async (data) => {
  console.log('---',data);
  return axio.post(`/api/exceltojson`, data);
});
const excelToJsonModel = createSlice({
  name: "exceltojson",
  initialState: {
    userdata: [],
    loading: true,
  },
  extraReducers: {
    [postUniversitiesData.pending]: (state, action) => {
      state.loading = true;
    },
    [postUniversitiesData.fulfilled]: (state, action) => {
      state.userdata = action.payload.data;
      state.loading = false;
    },
    [postUniversitiesData.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

const userreducer = excelToJsonModel.reducer;

export default userreducer;
