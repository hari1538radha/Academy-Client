import express from "express";
import { signup } from "../Controllers/Signup.js";
import { login } from "../Controllers/Login.js";

const Route = express.Router();
Route.post("/signup", signup);
Route.post("/login", login);

export default Route;
