import multer from "multer";
import { eventModel } from "../../Schema/EventsSchema.js";

const storage = multer.diskStorage({
  destination: "uploadImage",
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
}).single("eventImage");

export const uploadEvents = (req, res) => {
 
  upload(req, res, (err) => {
    if (err) {
      console.log(err);
    } else {
      const addImage = new eventModel({
        eventName: req.body.eventName,
        eventDescription: req.body.eventDescription,
        eventImage: {
          data: req.file
        },
        eventId: Math.floor(1000 + Math.random() * 9000),
        eventDate: req.body.eventDate,
        eventTime: req.body.eventTime
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
