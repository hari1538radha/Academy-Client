import { axio } from "../../Config/Config";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getQuizData = createAsyncThunk("quizdata",async(data) => {
    return axio.get("/api/quizdata",data);
})
export const getQuizDataReducer = createSlice(
    {
        name:"quizdatas",
        initialState:{
            getQuizDatas:[],
            getQuizDataLoading:true
        },
        reducers:{},
        extraReducers:{
            [getQuizData.pending] : (state ,action) =>
            {
                state.getQuizDataLoading = true;
            },[getQuizData.fulfilled] : (state ,action) =>
            {
                state.getQuizDataLoading = false;
                state.getQuizDatas = action.payload;
            },
            [getQuizData.pending] : (state ,action) =>
            {
                state.getQuizDataLoading = false;
            }
        
        }
    }
)
const getQuizReducerData =  getQuizDataReducer.reducer
export default getQuizReducerData;