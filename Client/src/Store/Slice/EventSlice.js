import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axio} from "../../Config/Config.js";


export const Events = createAsyncThunk("user",async()=>{
    return axio.get(`/authenticate/events`)
},)

export const eventsReducers = createSlice({
    name:"Events",
    initialState:{
        Show :[],
        loadingData:false,
    },
   reducers : {},
    extraReducers: {
        [Events.pending]:(state,action)=>{
            state.loadingData=true;

        },
        [Events.fulfilled]:(state,action)=>{
            console.log(action.payload);
            state.Show = action.payload.data.data;
            state.loadingData=false;


        },
        [Events.rejected]:(state,action)=>{
            state.loadingData=false;

        },
    }

})
export const Dipslay = eventsReducers.reducer;
export default Dipslay;