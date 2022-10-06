import mongoose from "mongoose";

const excelToJsonSchema = new mongoose.Schema({
  "S.No": {
    type: Number,
  },
  State: {
    type: String,
  },
  Type: {
    type: String,
  },
  Yrofestab:{
    type: Number,
  },
  Name: {
    type: String,
  },
  Name_1: {
    type: String,
  },
  City: {
    type: String,
  },
  District: {
    type: String,
  },
  PIN: {
    type: mongoose.Mixed,
  },
  url: {
    type: String,
  },
  Phone: {
    type: String,
  }
});

export const excelToJsonModel = new mongoose.model(
  "execlToJson",
  excelToJsonSchema
);
