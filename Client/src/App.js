import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import Login from "./component/Login/Login";
import PostUniversity from "./component/ExcelToJson/ExcelToJson";
import Landing from "../src/component/Landing/Landing.js";
import SearchPage from "./component/searchpage/searchpage";
import Quiz from "./component/Quiz/quiz";
import MainQuiz from "./component/Mainquiz/MainQuiz";
import DetailPage from "./component/Detailpage/Main/DetailPage";
import { Route, Routes } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import Signup from './component/Signup/Signup';
import UserProfile from "./component/userProfile/UserProfile";
import Dashboard from "./component/dashboard/dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import EditProfile from "./component/EditProfile/EditProfile.js"
import Dropdown from "./component/Navbar/Dropdown/Dropdown";
import AddEvent from "./component/AddEvent/AddEvent";
import Navbar from "./component/Navbar/navbar";
import EventUpdate from "./component/EventUpdata/EventUpdate.js"
import { useLocation } from "react-router-dom";
import { SuperuserStatus } from "./Store/Slice/confirmAdmin";
// import DropdownNavbar from "./component/DropdownNavbar/DropdownNavbar";
const superuser = "allpass@gmail.com"

function App() {
  const dispatch = useDispatch()
  const [flow, setflow] = useState(false)
  const {IsSuperUser} = useSelector((state) => state.userStatus)
  console.log(IsSuperUser)
  console.log(flow, "flow")
  const {userData,loading} =useSelector(state => state.userProfileInfo);
  console.log(userData)
  const locationState = useLocation().state || [];
  const ref = (Object.values(locationState));
  const compare = (ref[0])

  useEffect(() => {
    if (compare === superuser){
      dispatch(SuperuserStatus.Superuser())
    }
  },[IsSuperUser])

//   const falseval = useMemo(() => {
//     setflow(false)
// }, []);

// (ref[0] === "allpass@gmail.com")? setflow(true) : setflow(false)

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} exact></Route>
        <Route path="/nav" element={<Navbar/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/quiz/start" element={<MainQuiz />}></Route>
       {IsSuperUser === true && <Route path="/admin" element={<PostUniversity />}></Route>}
        <Route path="/profile" element={<UserProfile/>}></Route>
        {IsSuperUser === true && <Route path="/admin/dashboard" element={<Dashboard/>}></Route>}
        <Route path="/dropdown" element={<Dropdown/>}></Route>
        {IsSuperUser === true && <Route path="/editProfile" element={<EditProfile/>}></Route>}
        <Route path="/profile/AddEvent" element={<AddEvent/>}></Route>
        <Route path="/EventUpdate" element={<EventUpdate/>}></Route>
        {/* <Route path="/dropdownnavbar" element={<DropdownNavbar/>}></Route> */}
  </Routes>
    </div>
  );
}

export default App;
