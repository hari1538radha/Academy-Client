import mongoose from "mongoose";

const topEventSchema = new mongoose.Schema(
  {
    eventName: {
      type: String,
      required: true
    },
    eventDescription: {
      type: String,
      requried: true
    },
    eventImage: {
      data: Buffer,
      contentType: String
    },
    eventId: {
      type: String
    }
  },
  { timestamps: true }
);
export const eventModel = new mongoose.model("topEvent", topEventSchema);
