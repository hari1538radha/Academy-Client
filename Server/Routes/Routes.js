import express from "express";
import { login } from "../Controllers/Login.js";
import { signup } from "../Controllers/Signup.js";
import { uploadData } from "../Controllers/Topics.js";
import { eventData } from "../Controllers/Events.js";
import { topics } from "../Controllers/landingTopic.js";
import { events } from "../Controllers/landingEvents.js";
import { images } from "../Controllers/images.js";
import { execlToJsonCtrl } from "../Controllers/excelToJson.js";
import { userProfileData } from "../Controllers/userProfile.js";
import { detailPage } from "../Controllers/Detail.js";
import { details} from "../Controllers/DetailPage.js";
import { listofPrograms } from "../Controllers/listOf.js";
import { getExcelofEducation } from "../Controllers/readEducation.js";

const Route = express.Router();
Route.post("/signup", signup);
Route.post("/login", login);
Route.post("/post-topic", uploadData);
Route.post("/post-event", eventData);
Route.get("/topics", topics);
Route.get("/geteducation", getExcelofEducation);
Route.get("/events", events);
Route.post("/upload-images", images);
Route.post("/exceltojson", execlToJsonCtrl);
Route.post("/listofexcel", listofPrograms);
Route.get("/userProfile", userProfileData);
Route.post("/detailpage",detailPage);
Route.get("/detailpage",details);

export default Route;

