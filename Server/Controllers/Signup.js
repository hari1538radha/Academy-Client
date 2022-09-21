import bcrypt from "bcrypt";
import { userModel } from "../Schema/userSchema.js";

export const signup = async (req, res) => {
  userModel.findOne({ userEmail: req.body.userEmail }, async (err, data) => {
    if (err) {
      console.log(err);
    } else {
      if (data) {
        res.send({
          message:
            "The Email has been taken already!!! Please enter a new Email ID",
          response: "Invalid Email",
        });
      } else {
        const { userFirstname, userLastname, userEmail, userPassword } =
          req.body;
        if (!(userFirstname && userLastname && userEmail && userPassword)) {
          return res
            .status(429)
            .send({ message: "Inefficient data", response: "Inefficient" });
        }
        const user = new userModel(req.body);
        const salt = await bcrypt.genSalt(10);
        user.userPassword = await bcrypt.hash(user.userPassword, salt);
        user.save((err, data) => {
          if (err) {
            return res.send(err);
          }
          return res.status(200).send({
            message: "User's data have been added successfully!!!",
            response: "success",
          });
        });
      }
    }
  });
};
