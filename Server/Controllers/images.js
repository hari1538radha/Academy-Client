import { ImgSchema } from "../Schema/images.js";
import fs from "fs";
// import { eventData } from "./Events.js";

export const AddImages = (req, res) => {
  const UploadingImage = new ImgSchema({
    profilePic: {
      data: fs.readFileSync("profile/" + req.file.filename),
      contentType: "image/jpg"
    }
  })
  UploadingImage.save((err, data) => {
    if (err) {
      res.send(err)
    }
    res.send({
      status: 200,
      message: "Image is added",
      data: data
    })
  })
};
