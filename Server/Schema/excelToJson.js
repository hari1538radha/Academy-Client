import mongoose from "mongoose";

const excelToJsonSchema = new mongoose.Schema({
  Address: {
    type: String,
  },
  City: {
    type: String,
  },
  State: {
    type: String,
  },
  PIN: {
    type: Number,
  },
  University_Type: {
    type: String,
  },
  Village: {
    type: String,
  },
  Yearof_Establishment: {
    type: Number,
  },
  district: {
    type: String,
  },
  location_coordinates: {
    type: String,
  },
  specialisation: {
    type: String,
  },
  uId: {
    type: String,
  },
  universityName: {
    type: String,
  },
  urbanOrRural: {
    type: String,
  },
  url: {
    type: String,
  },
});

export const excelToJsonModel = new mongoose.model(
  "execlToJson",
  excelToJsonSchema
);
