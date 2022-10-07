import { configureStore, combineReducers } from "@reduxjs/toolkit";
import signupReducer from "./Slice/SignupSlice";
import TopicReducer from "./Slice/TopicSlice";
import DisplayReducer from "./Slice/EventSlice";
import excelToJsonReducer from "./Slice/ExcelToJson";
import courseReducer from "./Slice/DetailPageSlice.js";
import LoginReducer from "./Slice/LoginSlice";
import ListReducer from "./Slice/listOf";
import educationDetails from "./Slice/getEducation";
import status from "./Slice/LogoutSlice";
import statusLog from "./Slice/Logout";

const rootReducer = combineReducers({
  signupInfo: signupReducer,
  topicInfo: TopicReducer,
  eventsInfo: DisplayReducer,
  excelToJsonInfo: excelToJsonReducer,
  courseInfo:courseReducer,
  loginInfo:LoginReducer,
  listinfo: ListReducer,
  educationInfo: educationDetails,
  onlineStatus: status,
  loggedout : statusLog
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
