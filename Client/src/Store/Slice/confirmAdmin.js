import {createSlice} from '@reduxjs/toolkit';

const userAuthority = createSlice({
    name:"confirmAdmin",
    initialState:{
        IsSuperUser: false
    },
    reducers: {
        Superuser(state){
            state.IsSuperUser = true
        },
        NormalUser(state){
            state.IsSuperUser = false
        }
    }
})

export const SuperuserStatus = userAuthority.actions

const Authority = userAuthority.reducer

export default Authority