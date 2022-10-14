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
import addProfilepic from "./Slice/profilepicpost";
import UserProfilepic from "./Slice/getProfilepic";

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
  profilepicInfo:addProfilepic,
  newprofilepicInfo: UserProfilepic
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    })
})

export default store;
