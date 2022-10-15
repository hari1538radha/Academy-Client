import { configureStore, combineReducers } from "@reduxjs/toolkit";
import signupReducer from "./Slice/SignupSlice";
import TopicReducer from "./Slice/TopicSlice";
import DisplayReducer from "./Slice/EventSlice";
import postUniversitiesReducer from "./Slice/ExcelToJson";
import courseReducer from "./Slice/DetailPageSlice.js";
import LoginReducer from "./Slice/LoginSlice";
import postProgrammeReducer from "./Slice/postProgramme";
import getProgrammeReducer from "./Slice/getProgramme";
import educationDetails from "./Slice/getEducation";
import userprofileReducer from "./Slice/UserprofilePageSlice"
import addEventReducer from "./Slice/AddEventSlice"
import universitiesReducer from "./Slice/getUniversities";
import quizuploadReducer from "./Slice/uploadQuizSlice";
const rootReducer = combineReducers({
  signupInfo: signupReducer,
  topicInfo: TopicReducer,
  eventsInfo: DisplayReducer,
  postUniversitiesInfo: postUniversitiesReducer,
  courseInfo: courseReducer,
  loginInfo: LoginReducer,
  postProgrammeInfo: postProgrammeReducer,
  educationInfo: educationDetails,
  universitiesInfo: universitiesReducer,
  getProgrammeInfo: getProgrammeReducer,
  userProfileInfo:userprofileReducer,
  postEventInfo:addEventReducer,
  quizUploadInfo:quizuploadReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
