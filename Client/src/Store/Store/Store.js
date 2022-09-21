import { configureStore, combineReducers } from "@reduxjs/toolkit";
import signupReducer from "../Slice/SignupSlice";

const rootReducer = combineReducers({ sigupdata: signupReducer });

const store = configureStore({
  reducer: rootReducer,
});

export default store;
