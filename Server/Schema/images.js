import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
  Images: {
    type: String,
  },
});

export const ImageModel = new mongoose.model("imageData", imageSchema);
