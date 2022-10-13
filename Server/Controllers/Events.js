import multer from "multer";
import { eventModel } from "../Schema/EventsSchema.js";
import Moment from "moment";

const storage = multer.diskStorage({
  destination: "uploadImage",
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
}).single("eventImage");

// const myDate = Moment().format('YYYY-MM-DD HH:mm')

export const eventData = (req, res) => {
 
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const addImage = new eventModel({
        eventName: req.body.eventName,
        eventDescription: req.body.eventDescription,
        eventImage: req.eventImage,
        eventId: Math.floor(1000 + Math.random() * 9000),
        eventData: req.eventDate,
        eventTime: req.eventTime
      });
      addImage.save((err, data) => {
        if (err) {
          res.send(err);
        }
        res.status(200).send({
          message: "Posted successfully!!!",
        });
      });
    }
  });
};
