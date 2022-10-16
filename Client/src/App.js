import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./component/Login/Login";
import PostUniversity from "./component/ExcelToJson/ExcelToJson";
import Landing from "../src/component/Landing/Landing";
import SearchPage from "./component/searchpage/searchpage";
import Quiz from "./component/Quiz/quiz";
import AddQuiz from "./component/AddQuiz/AddQuiz";
import MainQuiz from "./component/Mainquiz/MainQuiz";
import DetailPage from "./component/Detailpage/Main/DetailPage";
import Signup from "./component/Signup/Signup";
import UserProfile from "./component/userProfile/UserProfile";
import Dashboard from "./component/dashboard/dashboard";
import EditProfile from "./component/EditProfile/EditProfile.js";
import Dropdown from "./component/Navbar/Dropdown/Dropdown";
import AddEvent from "./component/AddEvent/AddEvent";
import Navbar from "./component/Navbar/navbar";
import EventUpdate from "./component/EventUpdata/EventUpdate.js";
import TopUniversity from "./component/TopUniversity/TopUniversity";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import UniversityCardDetails from "./component/TopUniversity/UniversityCardDetails/UniversityCardDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} exact></Route>
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
        <Route path="/admin" element={<PostUniversity />}></Route>
        <Route path="/admin/dashboard" element={<Dashboard />}></Route>
        <Route path="/editProfile" element={<EditProfile />}></Route>
        <Route path="/profile/addevent" element={<AddEvent />}></Route>
        <Route path="/EventUpdate" element={<EventUpdate />}></Route>
        <Route path="/addquiz" element={<AddQuiz />}></Route>
        <Route path="/universities" element={<TopUniversity />}></Route>
        <Route path="/universities/details" element={<UniversityCardDetails />}></Route>
        {/* <Route path="/dropdownnavbar" element={<DropdownNavbar/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
