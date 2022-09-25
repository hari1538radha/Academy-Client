import "./App.css";
import NavBar from "./component/Login/navBar";
import Login from "./component/Login/Login";
import Userdata from "./component/ExcelToJson/userdata";
import Signup from ".../component/usersdata/ExcelToJson
import Landing from "../src/component/Landing/Landing.js";
import Searchpage from "./component/searchpage/searchpage";
import Quiz from "./component/Quiz/quiz";
import MainQuiz from "./component/Mainquiz/MainQuiz";
import DetailPage from "./component/Detailpage/Main/DetailPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<App />} exact></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/landing" element={<Landing />}></Route>
        <Route path="/quiz" element={<Quiz />}></Route>
        <Route path="/searchpage" element={<Searchpage />}></Route>
        <Route path="/detailPage" element={<DetailPage />}></Route>
        <Route path="/quiz/Startquiz" element={<MainQuiz />}></Route>
        <Route path="/admin" element={<Userdata />}></Route>
      </Routes>
      <NavBar />
      <Login />
    </div>
  );
}

export default App;
