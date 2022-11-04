import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getUniversityInfoByName = createAsyncThunk(
  "Universities",
  async (data) => {
    console.log(data);
    return axio.get(`/api/search`, data);
  }
);

const searchUniversityReducer = createSlice({
  name: "Universities",
  initialState: {
    SearcheUniversity: [],
    SearcheUniversityLoading: true,
  },
  reducers: {},
  extraReducers: {
    [getUniversityInfoByName.pending]: (state, action) => {
      state.SearcheUniversityLoading = true;
    },
    [getUniversityInfoByName.fulfilled]: (state, action) => {
      state.SearcheUniversity = action.payload;
      state.SearcheUniversityLoading = false;
    },
    [getUniversityInfoByName.rejected]: (state, action) => {
      state.SearcheUniversityLoading = false;
    },
  },
});

const searchUniversityByName = searchUniversityReducer.reducer;
export default searchUniversityByName;
