import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config.js";

export const Events = createAsyncThunk("user", async () => {
  return axio.get(`/authenticate/events`);
});

export const eventsReducers = createSlice({
  name: "events",
  initialState: {
    eventsData: [],
    eventLoading: false,
  },
  reducers: {},
  extraReducers: {
    [Events.pending]: (state, action) => {
      state.eventLoading = true;
    },
    [Events.fulfilled]: (state, action) => {
      state.eventsData = action.payload.data.data;
      state.eventLoading = false;
    },
    [Events.rejected]: (state, action) => {
      state.eventLoading = false;
    },
  },
});
export const Dipslay = eventsReducers.reducer;
export default Dipslay;
