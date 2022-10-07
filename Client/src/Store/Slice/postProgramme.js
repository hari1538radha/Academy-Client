import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axio } from "../../Config/Config";

export const postProgrammeData = createAsyncThunk("programme",
(data) => {
    return axio.post(`/api/programme`, data);
})

const postProgramme = createSlice({
    name: "programme",
    initialState: {
        programme: [],
        programmeLoading: true
    },
    extraReducers: {
        [postProgrammeData.pending]: (state) => {
            state.programmeLoading = true;
        },
        [postProgrammeData.fulfilled]: (state, action) => {
            state.programme = action.payload.data;
            state.programmeLoading = false
        },
        [postProgrammeData.rejected]: (state, action) => {
            state.programmeLoading = false
        }
    }
})

export default postProgramme.reducer;
