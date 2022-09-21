import express from "express";
import { login } from "../Controllers/Login.js";
import { signup } from "../Controllers/Signup.js";
import { uploadData } from "../Controllers/topics.js";

const Route = express.Router();
Route.post("/signup", signup);
Route.get('/login', login);
Route.post("/topicUpload", uploadData);

export default Route;
