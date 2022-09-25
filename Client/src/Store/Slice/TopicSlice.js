import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config";

export const topicInfo = createAsyncThunk("User", async () => {
  return axio.get(`/authenticate/topics`);
});

export const topicReducer = createSlice({
  name: "topic",
  initialState: {
    topicData: [],
    topicLoading: false,
  },
  reducer: {},
  extraReducers: {
    [topicInfo.pending]: (state, action) => {
      state.topicLoading = true;
    },
    [topicInfo.fulfilled]: (state, action) => {
      state.topicData = action.payload.data.data;
      state.topicLoading = false;
    },
    [topicInfo.rejected]: (state, action) => {
      state.topicLoading = false;
    },
  },
});

const topic = topicReducer.reducer;

export default topic;
