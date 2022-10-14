import mongoose from "mongoose";

const UpdateEventSchema = new mongoose.Schema(
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
    },
    time: {
      type: String,
      required: true
    },
  },
  { timestamps: true }
);
export const updateEventModel = new mongoose.model("updateEvent", UpdateEventSchema);
