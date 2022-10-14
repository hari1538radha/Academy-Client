import express from "express";
import { login } from "../Controllers/Login.js";
import { signup } from "../Controllers/Signup.js";
import { uploadData } from "../Controllers/Topics.js";
import { eventData } from "../Controllers/Events.js";
import { topics } from "../Controllers/landingTopic.js";
import { events } from "../Controllers/landingEvents.js";
import { AddImages } from "../Controllers/images.js";
import { userProfileData } from "../Controllers/userProfile.js";
import { detailPage } from "../Controllers/Detail.js";
import { details } from "../Controllers/DetailPage.js";
import { listofPrograms } from "../Controllers/listOf.js";
import { getExcelofEducation } from "../Controllers/readEducation.js";
import { getUniversities, postUniversities } from "../Controllers/Universities/universities.controller.js";
import { getProgramme, postProgramme } from "../Controllers/Programme/programme.controller.js";
import { EventById } from "../Controllers/SingleEvent.js";
import multer from "multer";
import { createUser } from "../Controllers/userSignup.js";
import { editevent } from "../Controllers/EditEvents.js";
import { getuserimg } from "../Controllers/getuserimg.js";

const Storages = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'profile')
    },
  
    filename: (req, file, cb) => {
      cb(null, file.originalname)
    }
  });

const Upload = multer({
  storage: Storages,
  limits: {
    fileSize: 90000000,
  },
})

const users = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'profilepic')
  },

  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`)
  }
});

const uploadPic = multer({
  storage: users,
  limits: {
    fileSize: 90000000,
  },
});

const Route = express.Router();

Route.post("/signup", signup);
Route.post("/studentsignup", uploadPic.single("userimage"),createUser)
Route.post("/login", login);
Route.post("/post-topic", uploadData);
Route.post("/post-event", eventData);
Route.get("/userimage", getuserimg);
Route.get("/topics", topics);
Route.get("/geteducation", getExcelofEducation);
Route.get("/events", events);
Route.post("/profilepicture", Upload.single("testImage"), AddImages);
Route.post("/listofexcel", listofPrograms);
Route.get("/userProfile", userProfileData);
Route.post("/detailpage", detailPage);
Route.get("/detailpage", details);
Route.post("/exceltojson", postUniversities);
Route.get("/universities", getUniversities);
Route.post("/programme", postProgramme);
Route.get("/programme", getProgramme);
Route.get("/event/:id", EventById);
Route.put("/editevent", editevent);

export default Route;
