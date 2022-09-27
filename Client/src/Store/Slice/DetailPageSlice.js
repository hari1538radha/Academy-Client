import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config";

export const  course= createAsyncThunk("list", async () => {
    console.log(course)
  return axio.get(`/authenticate/getcalldetailpage`)

});

export const courseReducer = createSlice({
  name: "course",
  initialState: {
    courseDetail: [],
    loading: false,
    
  },
  reducer: {},
  extraReducers: {
    [course.pending]: (state, action) => {
      state.loading = true;
    },
    [course.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.courseDetail= action.payload.data;
      state.loading = false;
    },
    [course.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

const courseInfo = courseReducer.reducer;

export default courseInfo;
