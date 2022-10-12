import "./App.css";
import Login from "./component/Login/Login";
import PostUniversity from "./component/ExcelToJson/ExcelToJson";
import Landing from "../src/component/Landing/Landing.js";
import SearchPage from "./component/searchpage/searchpage";
import Quiz from "./component/Quiz/quiz";
import MainQuiz from "./component/Mainquiz/MainQuiz";
import DetailPage from "./component/Detailpage/Main/DetailPage";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Signup from './component/Signup/Signup';
import UserProfile from "./component/userProfile/UserProfile";
import Dashboard from "./component/dashboard/dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import EditProfile from "./component/EditProfile/EditProfile.js"
import Dropdown from "./component/Navbar/Dropdown/Dropdown";
// import DropdownNavbar from "./component/DropdownNavbar/DropdownNavbar";
function App() {
  const {isLoggedIn} = useSelector((state) => state.onlineStatus)
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} exact></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        {/* {isLoggedIn && <Route path="/landing" element={<Landing />}></Route>} */}
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/quiz/start" element={<MainQuiz />}></Route>
        <Route path="/admin" element={<PostUniversity />}></Route>
        <Route path="/profile" element={<UserProfile/>}></Route>
        <Route path="/admin/dashboard" element={<Dashboard/>}></Route>
        <Route path="/dropdown" element={<Dropdown/>}></Route>
        <Route path="/editProfile" element={<EditProfile/>}></Route>

        {/* <Route path="/dropdownnavbar" element={<DropdownNavbar/>}></Route> */}
  </Routes>
    </div>
  );
}

export default App;
