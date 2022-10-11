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

const myDate = Moment().format('YYYY-MM-DD HH:mm')

export const eventData = (req, res) => {
 
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const addImage = new eventModel({
        eventName: req.body.eventName,
        eventDescription: req.body.eventDescription,
        eventImage: {
          data: req.file.filename,
          
        },
        eventId: Math.floor(1000 + Math.random() * 9000),
        time: myDate,
      });
      addImage.save((err, data) => {
        if (err) {
          res.send(err);
        }
        res.status(200).send({
          message: "Posted sucessfully!!!",
        });
      });
    }
  });
};
