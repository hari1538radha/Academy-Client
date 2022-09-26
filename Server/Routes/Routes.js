import express from "express";
import { login } from "../Controllers/Login.js";
import { signup } from "../Controllers/Signup.js";
import { uploadData } from "../Controllers/topics.js";
import { eventData } from "../Controllers/Events.js";
import { topics } from "../Controllers/landingTopic.js";
import { events } from "../Controllers/landingEvents.js";
import { detailPage } from "../Controllers/Detail.js";
import { details} from "../Controllers/DetailPage.js";

const Route = express.Router();
Route.post("/signup", signup);
Route.post('/login', login);
Route.post("/topicUpload", uploadData);
Route.post("/topEventsUpload", eventData);
Route.get("/topics", topics);
Route.get("/events", events);
Route.post("/detailpage",detailPage)
Route.get("/detailpage",details);

export default Route;
