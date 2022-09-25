import mongoose from "mongoose";

const topicsSchema = new mongoose.Schema(
  {
    topicTitle: {
      type: String,
      required: true,
    },
    topicDescription: {
      type: String,
      requried: true,
    },
    cardId: {
      type: String,
    },
  },
  { timestamps: true }
);
export const topicModel = new mongoose.model("topic", topicsSchema);
