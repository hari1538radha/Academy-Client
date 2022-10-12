import { userModel } from "../Schema/userSchema.js";
import bcrypt from "bcrypt";
import Jwt from 'jsonwebtoken';

const { sign, verify } = Jwt;

export const login = async (req, res) => {
  const body = req.body;
  const user = await userModel.findOne({ userEmail: body.userEmail });
  console.log('-----',user);

  if (user) {
    const validPassword = await bcrypt.compare(
      body.userPassword,
      user.userPassword
    );
    if (validPassword) {
      res.status(200).send({ message: "Login success", user}
                            );
    } else {
      res.status(400).send({ error: "Invalid Password" });
    }
  } else {
    res.status(401).send({ error: "User does not exist" });
  }
  const token = sign({ id: existingUser._id },"Academy", { expiresIn: "1h" })

    if (req.cookies[`${existingUser._id}`]) {
        req.cookies[`${existingUser._id}`] = "";
      }

    res.cookie(String(existingUser._id), token, {
        path: "/",
        expiresIn: new Date(Date.now() + 1000 * 3600),
        httpOnly: true,
        sameSite: "lax",
    })

    return res.send({
        status: 200,
        message: "Logged in",
        user: existingTourist,
        token
    })

};
