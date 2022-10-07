import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import axios from "axios";

axios.defaults.withCredentials = true

export const Loggingout = createAsyncThunk('logout',
async() => {
    const {data} = await axios.post("http://localhost:8001/authenticate/logout",null,{withCredentials: true}) 
    if(data.status === 200){
        return data
    }
return new Error("unable to logout")
})

const getlogoutStatus = createSlice({
    name:"loggedout",
    initialState: {
        logStatus: null
    },
    extraReducers:{
        [Loggingout.fulfilled]: (state, action) => {
            state.logStatus = true
        }
    }
})

const statusLog = getlogoutStatus.reducer

export default statusLog
