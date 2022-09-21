import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../Slice/LoginSlice"



const rootReducer = combineReducers({ User: loginReducer  })


const store = configureStore({

        reducer: rootReducer,

});


export default store;