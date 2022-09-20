import  Express from "express";
import { login } from "../Controllers/Login.js";

const Route = Express.Router();

Route.get('/login',login);

export default Route;
