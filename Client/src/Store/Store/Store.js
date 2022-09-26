import { configureStore, combineReducers } from "@reduxjs/toolkit";
import signupReducer from "../Slice/SignupSlice";
import landing from "../Slice/LandingSlice";
import Dipslay from "../Slice/EventSlice";
// import courseInfo from "../Slice/DetailpageSlice";

const rootReducer = combineReducers({ sigupdata: signupReducer,landingInfo :landing ,Events:Dipslay});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
