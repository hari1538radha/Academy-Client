import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const getEventInfo = createAsyncThunk("user", async () => {
  return axio.get(`/api/events`);
});

const eventsReducers = createSlice({
  name: "events",
  initialState: {
    eventsData: [],
    eventLoading: false,
  },
  reducers: {},
  extraReducers: {
    [getEventInfo.pending]: (state, action) => {
      state.eventLoading = true;
    },
    [getEventInfo.fulfilled]: (state, action) => {
      state.eventsData = action.payload.data.data;
      state.eventLoading = false;
    },
    [getEventInfo.rejected]: (state, action) => {
      state.eventLoading = false;
    },
  },
});
const display = eventsReducers.reducer;
export default display;
