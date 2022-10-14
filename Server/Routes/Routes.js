import express from "express";
import { login } from "../Controllers/Login.js";
import { signup } from "../Controllers/Signup.js";
import { uploadTopics } from "../Controllers/Topics/Topics.js";
import { uploadEvents } from "../Controllers/Events/Events.js";
import { topics } from "../Controllers/Topics/landingTopic.js";
import { events } from "../Controllers/Events/landingEvents.js";
import { images } from "../Controllers/images.js";
import { userProfileData } from "../Controllers/userProfile.js";
import { detailpage } from "../Controllers/DetailPage/DetailPage.js";
import { detail } from "../Controllers/DetailPage/Detail.js";
import { listofPrograms } from "../Controllers/listOf.js";
import { getExcelofEducation } from "../Controllers/readEducation.js";
import { getUniversities, postUniversities } from "../Controllers/Universities/universities.controller.js";
import { getProgramme, postProgramme } from "../Controllers/Programme/programme.controller.js";
import { EventById } from "../Controllers/Events/SingleEvent.js";
import { editevent } from "../Controllers/Events/EditEvents.js";
import multer from "multer";

const Storages = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'profile')
    },
  
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
  });

const Upload = multer({storage: Storages}).single("testImage")
import { editevent } from "../Controllers/EditEvents.js";

const Route = express.Router();

Route.post("/signup", signup);
Route.post("/login", login);
Route.post("/post-topic", uploadTopics);
Route.post("/post-event", uploadEvents);
Route.get("/topics", topics);
Route.get("/geteducation", getExcelofEducation);
Route.get("/events", events);
Route.post("/profilepicture", Upload, AddImages);
Route.post("/listofexcel", listofPrograms);
Route.get("/userProfile", userProfileData);
Route.get("/detailpage", detailpage);
Route.post("/detailpage", detail);
Route.post("/exceltojson", postUniversities);
Route.get("/universities", getUniversities);
Route.post("/programme", postProgramme);
Route.get("/programme", getProgramme);
Route.get("/event/:id", EventById);
Route.put("/editevent", editevent);

export default Route;
