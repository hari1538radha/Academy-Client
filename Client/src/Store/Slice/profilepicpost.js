import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const PostProfilepic = createAsyncThunk("Pic/ProfilePic", async (data) => {
  return axio.post("/api/profilepicture", data);
});

const EventProfilepicture = createSlice({
    name: "Profileimg",
    initialState: {
        picData: [],
        picLoading: true
    },
    extraReducers: {
        [PostProfilepic.pending]: (state, action) => {
            state.picLoading = true
        },
        [PostProfilepic.fulfilled]: (state, action) => {
            state.picData = action.payload.data;
            state.picLoading = false
        },
        [PostProfilepic.rejected]: (state, action) => {
            state.picLoading = false
        }
    }
})

const addProfilepic = EventProfilepicture.reducer

export default addProfilepic

