import { axio } from "../../Config/Config";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const postExcelData = createAsyncThunk("data/excelData", async (data) => {
  return axio.post(`/authenticate/exceltojson`, data);
});
const excelToJsonModel = createSlice({
  name: "exceltojson",
  initialState: {
    userdata: [],
    loading: true,
  },
  extraReducers: {
    [postExcelData.pending]: (state, action) => {
      state.loading = true;
    },
    [postExcelData.fulfilled]: (state, action) => {
      state.userdata = action.payload.data;
      state.loading = false;
    },
    [postExcelData.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

const userreducer = excelToJsonModel.reducer;

export default userreducer;
