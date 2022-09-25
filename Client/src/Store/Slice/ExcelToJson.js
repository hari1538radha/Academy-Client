import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const uploaduserdata = createAsyncThunk("Userdatas", async (data) => {
  console.log(data);
  return axio.post(`/authenticate/uploaduserdatas`, data);
});
export const excelToJsonModel = createSlice({
  name: "exceltojson",
  initialState: {
    userdata: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [uploaduserdata.pending]: (state, action) => {
      state.loading = true;
    },
    [uploaduserdata.rejected]: (state, action) => {
      state.userdata = action.payload;
      state.loading = false;
    },
    [uploaduserdata.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
const userreducer = excelToJsonModel.reducer;
export default userreducer;
