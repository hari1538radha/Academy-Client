import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Signup from "../src/component/Signup/Signup"
import Quiz from './component/Quiz/quiz';
import reportWebVitals from './reportWebVitals';
import Searchpage from './component/searchpage/searchpage';
import {BrowserRouter, Route, Routes} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <React.StrictMode>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<App/>} exact ></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
        <Route path='/Searchpage' element={<Searchpage/>}></Route>
       </Routes>
       </BrowserRouter>

  </React.StrictMode>


);
reportWebVitals();
