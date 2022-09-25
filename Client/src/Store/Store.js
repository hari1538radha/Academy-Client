import { configureStore, combineReducers } from "@reduxjs/toolkit";
import signupReducer from "./Slice/SignupSlice";
import TopicReducer from "./Slice/TopicSlice";
import DisplayReducer from "./Slice/EventSlice";
import excelToJsonReducer from "./Slice/ExcelToJson";

const rootReducer = combineReducers({
  signupInfo: signupReducer,
  topicInfo: TopicReducer,
  eventsInfo: DisplayReducer,
  excelToJsonInfo: excelToJsonReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
