import express from "express";
import { login } from "../Controllers/Login.js";
import { signup } from "../Controllers/Signup.js";
import { login } from "../Controllers/Login.js";

const Route = express.Router();
Route.post("/signup", signup);
Route.get('/login',login);

export default Route;
