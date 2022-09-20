import Express from "express";
import { PORT, mongoUrl } from "./Config/config.js";
import mongoose from "mongoose";
import Routes from "./Routes/Routes.js";
import bodyParser from "body-parser";

const app = Express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/authenticate", routes);

mongoose
  .connect(mongoUrl)
  .then(() => console.log("Database Connection successfully!!!"))
  .catch((err) => console.log("Database Connection Failed!!!", err.message));

app.listen(PORT, () => {
  console.log(`server listening at ${PORT}`);
});
