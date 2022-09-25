import { axio } from "../../Config/Config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const uploaduserdata = createAsyncThunk("Userdatas", async (data) => {
    console.log(data)
    return axio.post(`/authenticate/uploaduserdatas`, data)
});
export const userdataReducer = createSlice({
    name: 'userdata',
    initialState: {
        userdata: [],
        loading: false
    },
    reducers: {},
    extraReducers: {

        [uploaduserdata.pending]: (state, action) => {
            state.loading = true;
        },
        [uploaduserdata.rejected]: (state, action) => {
            state.userdata = action.payload;
            state.loading = false
        },
        [uploaduserdata.rejected]: (state, action) => {
            state.loading = false;
        }

    }
})
const userreducer = userdataReducer.reducer;
export default userreducer;