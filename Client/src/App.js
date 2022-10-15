import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Login from "./component/Login/Login";
import PostUniversity from "./component/ExcelToJson/ExcelToJson";
import Landing from "../src/component/Landing/Landing";
import SearchPage from "./component/SearchPage/searchpage";
import Quiz from "./component/Quiz/quiz";
import MainQuiz from "./component/MainQuiz/MainQuiz";
import DetailPage from "./component/Detailpage/Main/DetailPage";
import Signup from "./component/Signup/Signup";
import UserProfile from "./component/userProfile/UserProfile";
import Dashboard from "./component/dashboard/dashboard";
import EditProfile from "./component/EditProfile/EditProfile";
import Dropdown from "./component/Navbar/Dropdown/Dropdown";
import AddEvent from "./component/AddEvent/AddEvent";
import Navbar from "./component/Navbar/navbar";
import EventUpdate from "./component/EventUpdata/EventUpdate";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { userData, loading } = useSelector((state) => state.userProfileInfo);
  const locationState = useLocation().state || [];
  console.log(userData);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} exact></Route>
        {/* <Route path="/nav" element={<Navbar />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/quiz/start" element={<MainQuiz />}></Route>
        <Route path="/profile" element={<UserProfile />}></Route>
        <Route path="/dropdown" element={<Dropdown />}></Route>
        <Route path="/editProfile" element={<EditProfile />}></Route>
        <Route path="/profile/AddEvent" element={<AddEvent />}></Route>
        <Route path="/EventUpdate" element={<EventUpdate />}></Route>
        {userData?.data?.superAdminStatus === true && (
          <Route path="/admin" element={<PostUniversity />}></Route>
        )}
        {userData?.data?.superAdminStatus === true && (
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
