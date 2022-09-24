import { configureStore, combineReducers } from "@reduxjs/toolkit";
import signupReducer from "../Slice/SignupSlice";
import userreducer from "../Slice/userdata";

const rootReducer = combineReducers({ sigupdata: signupReducer ,userdatas:userreducer });

const store = configureStore({
  reducer: rootReducer,
});

export default store;
