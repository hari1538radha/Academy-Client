import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loginReducer from "../Slice/LoginSlice";
import signupReducer from "../Slice/SignupSlice";

const rootReducer = combineReducers({ sigupdata: signupReducer, User: loginReducer });

const store = configureStore({
  reducer: rootReducer,
});

export default store;
