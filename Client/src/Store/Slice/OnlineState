import {createSlice} from '@reduxjs/toolkit';

const loginstatus = createSlice({
    name:"onlineStatus",
    initialState:{
        isLoggedIn: false
    },
    reducers: {
        login(state){
            state.isLoggedIn = true
        },
        logout(state){
            state.isLoggedIn = false
        }
    }
})

export const loginAction = loginstatus.actions

const status = loginstatus.reducer

export default status
