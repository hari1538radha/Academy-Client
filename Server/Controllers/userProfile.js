import { userModel } from "../Schema/userSchema.js";

export const userProfileData = (req, res) => {
  const data = req.query;
  userModel.findOne({ userEmail: data.userEmail }, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send({
        status: 200,
        message: "User found",
        data: data,
      });
    }
  });
};
