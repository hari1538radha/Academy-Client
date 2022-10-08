import mongoose from "mongoose";

const programSchema = new mongoose.Schema({
  SNo: {
    type: Number,
  },
  ProgrammeType: {
    type: String,
  },
  Programme: {
    type: String,
  },
  Name: {
    type: String,
  },
  Discipline: {
    type: String
  }
});

export const programSchemaModel = new mongoose.model(
  "program",
  programSchema
);
