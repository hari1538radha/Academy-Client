import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { axio } from "../../Config/Config";

export const postlistData = createAsyncThunk("list/of-program",
(data) => {
    return axio.post(`/authenticate/listofexcel`, data);
})

const programModel = createSlice({
    name: "programExcel",
    initialState: {
        list: [],
        loading: true
    },
    extraReducers: {
        [postlistData.pending]: (state) => {
            state.loading = true;
        },
        [postlistData.fulfilled]: (state, action) => {
            state.list = action.payload.data;
            state.loading = false
        },
        [postlistData.rejected]: (state, action) => {
            state.loading = false
        }
    }
})

const ListReducer = programModel.reducer;

export default ListReducer;
