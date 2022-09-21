import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userFirstname: {
      type: String,
      required: true,
    },
    userLastname: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    userPassword: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const userModel = new mongoose.model("usersData", userSchema);
