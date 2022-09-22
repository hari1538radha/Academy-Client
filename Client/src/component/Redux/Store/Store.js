import { configureStore, combineReducers } from "@reduxjs/toolkit";


const rootReducer = combineReducers({landingInfo :landing})

const store = configureStore({
  reducer: rootReducer,
});

export default store;
