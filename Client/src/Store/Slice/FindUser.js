import {createSlice} from '@reduxjs/toolkit';

import axios from "axios";

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.withCredentials = true

export const fetchuser = createAsyncThunk("cred/usercred",
    async() => {
        const {data} = await axios.get("http://localhost:8001/api/finduser",{withCredentials: true})
        return data
    }
)

const getUserCredentials = createSlice({
    name:"TouristDetails",
    initialState: {
        loading: false,
        tourist: []
    },
    extraReducers: {
        [fetchuser.pending]: (state, action) => {
            state.loading = true
        },
        [fetchuser.fulfilled]: (state, action) => {
            state.tourist = action.payload.user;
            state.loading = false
        },
        [fetchuser.rejected]: (state, action) => {
            console.log("why rejected", state, action)
        }
    }
})

const selectedTourist = getUserCredentials.reducer

export default selectedTourist
