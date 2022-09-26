 import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config";

export const  course= createAsyncThunk("list", async (data) => {
    console.log(data)
  return axio.get(`/authenticate/detailpage`,data)

});

// export const courseReducer = createSlice({
//   name: "course",
//   initialState: {
//     courseDetail: [],
//     loading: false,
//   },
//   reducer: {},
//   extraReducers: {
//     [course.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [course.fulfilled]: (state, action) => {
//       console.log(action.payload);
//       state.courseDetail= action.payload;
//       state.loading = false;
//     },
//     [course.rejected]: (state, action) => {
//       state.loading = false;
//     },
//   },
// });

// const courseInfo = courseReducer.reducer;

// export default courseInfo;