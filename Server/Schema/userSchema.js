import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userFirstName: {
      type: String,
      required: true,
    },
    userLastName: {
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
