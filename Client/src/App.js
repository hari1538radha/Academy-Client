import "./App.css";
import Login from "./component/Login/Login";
import ExcelToJson from "./component/ExcelToJson/ExcelToJson";
import Landing from "../src/component/Landing/Landing.js";
import SearchPage from "./component/searchpage/searchpage.js";
import Quiz from "./component/Quiz/quiz";
import MainQuiz from "./component/Mainquiz/MainQuiz";
import DetailPage from "./component/Detailpage/Main/DetailPage";
import { Route, Routes } from "react-router-dom";
import Signup from './component/Signup/Signup';
import UserProfile from "./component/userProfile/UserProfile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} exact></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/detail" element={<DetailPage />}></Route>
        <Route path="/quiz/start" element={<MainQuiz />}></Route>
        <Route path="/admin" element={<ExcelToJson />}></Route>
        <Route path="/profile" element={<UserProfile/>}></Route>
  </Routes>
    </div>
  );
}

export default App;
