import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axio } from "../../Config/Config";

export const userProfileData = createAsyncThunk("userdata", async (userEmail) => {
     return axio.post(`/api/userProfile`,userEmail);

});
export const userdataReducer = createSlice({
    name: "userData",
    initialState: {
        userdata: [],
        userdataloading: false
    },
    reducers: {},
    extraReducers:
    {
        [userProfileData.pending]: (state, action) => {
            state.loading = true

        },
        [userProfileData.fulfilled]: (state, action) => {
            state.loading = false
            state.userdata = action.payload.data
        
            

        },
        [userProfileData.rejected]: (state, action) => {
            state.loading = false

        }
    }
})
const userprofiledata = userdataReducer.reducer;

export default userprofiledata;
