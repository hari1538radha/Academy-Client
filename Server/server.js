import Express from "express";
import { PORT, mongoUrl } from "./Config/config.js";
import mongoose from "mongoose";
import Routes from "./Routes/Routes.js";
import bodyParser from "body-parser";

const app = Express();

    // using body-parser
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/authenticate",Routes);

mongoose.connect(mongoUrl).then(() => console.log("database connected successfully!!"))

app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`);
})
