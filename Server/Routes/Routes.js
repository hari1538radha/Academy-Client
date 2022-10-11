import express from "express";
import { login } from "../Controllers/Login.js";
import { signup } from "../Controllers/Signup.js";
import { uploadData } from "../Controllers/Topics.js";
import { eventData } from "../Controllers/Events.js";
import { topics } from "../Controllers/landingTopic.js";
import { events } from "../Controllers/landingEvents.js";
import { images } from "../Controllers/images.js";
import { userProfileData } from "../Controllers/userProfile.js";
import { detailPage } from "../Controllers/Detail.js";
import { details } from "../Controllers/DetailPage.js";
import { listofPrograms } from "../Controllers/listOf.js";
import { getExcelofEducation } from "../Controllers/readEducation.js";
import { VerifyToken, logout, findUser } from "../Controllers/Logout.js";
import { getUniversities, postUniversities } from "../Controllers/Universities/universities.controller.js";
import { getProgramme, postProgramme } from "../Controllers/Programme/programme.controller.js";

const Route = express.Router();

Route.post("/signup", signup);
Route.post("/login", login);
Route.post("/post-topic", uploadData);
Route.post("/post-event", eventData);
Route.get("/topics", topics);
Route.get("/geteducation", getExcelofEducation);
Route.get("/events", events);
Route.post("/upload-images", images);
Route.post("/listofexcel", listofPrograms);
Route.get("/userProfile", userProfileData);
Route.post("/detailpage", detailPage);
Route.get("/detailpage", details);
Route.post("/exceltojson", postUniversities);
Route.get("/universities", getUniversities);
Route.post("/programme", postProgramme);
Route.get("/programme", getProgramme);
Route.post("/logout", VerifyToken, logout);
Route.get("/finduser", VerifyToken, findUser);

export default Route;
