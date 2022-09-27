import { configureStore, combineReducers } from "@reduxjs/toolkit";
import signupReducer from "./Slice/SignupSlice";
import TopicReducer from "./Slice/TopicSlice";
import DisplayReducer from "./Slice/EventSlice";
import excelToJsonReducer from "./Slice/ExcelToJson";
import courseReducer from "./Slice/DetailPageSlice.js"

const rootReducer = combineReducers({
  signupInfo: signupReducer,
  topicInfo: TopicReducer,
  eventsInfo: DisplayReducer,
  excelToJsonInfo: excelToJsonReducer,
  courseInfo:courseReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
