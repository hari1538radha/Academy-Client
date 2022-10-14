import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const UpdateEvent = createAsyncThunk("UpdateData", async (data) => {
  return axio.put("/api/editevent", data);
});

export const UpdateDataReducer = createSlice({
  name: "UpdateData",
  initialState: {
    updateData: [],
    updateloading: false,
  },
  reducer: {},
  extraReducers: {
    [UpdateEvent.pending]: (state, action) => {
      state.updateloading = true;
    },
    [UpdateEvent.fulfilled]: (state, action) => {
      state.updateData = false;
      state.updateData = action.plyload;
    },
    [UpdateEvent.rejected]: (state, action) => {
      state.updateData = false;
    },
  },
});

const UpdateEventData = UpdateDataReducer.reducer;
export default UpdateEventData;
