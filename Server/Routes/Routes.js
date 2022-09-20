import express from "express";
import { signup } from "../Controllers/Signup.js";

const Route = express.Router();
Route.post("/signup", signup);

export default Route;
