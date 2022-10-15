import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const PostEventData = createAsyncThunk("EventData", async (data) => {
  return axio.post("/api/post-event",  {
    method: "post",
    headers: { "Content-Type": "multipart/form-data; boundary=------WebKitFormBoundary2lZSUsxEA3X5jpYD" },
    body: JSON.stringify({
        "eventName": data.eventName,
        "eventDescription": data.eventDescription,
        "eventDate": data.eventDate,
        "eventTime": data.eventTime,
        "eventImage": data.eventImage
    })
  });
});

export const EventDataReducer = createSlice({
  name: "EventData",
  initialState: {
    eventData: [],
    eventpostloading: false,
  },
  reducer: {},
  extraReducers: {
    [PostEventData.pending]: (state, action) => {
      state.eventpostloading = true;
    },
    [PostEventData.fulfilled]: (state, action) => {
      state.eventpostloading = false;
      state.eventData = action.payload;
    },
    [PostEventData.rejected]: (state, action) => {
      state.eventpostloading = false;
    },
  },
});



const addEventReducer = EventDataReducer.reducer;
export default addEventReducer;