import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Signup from "../src/component/Signup/Signup"
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <React.StrictMode>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<App/>} exact ></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
       </Routes>
       </BrowserRouter>

  </React.StrictMode>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
