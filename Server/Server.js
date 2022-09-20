import Express from "express";
import { PORT, mongoUrl } from "./Config/config.js";
import mongoose from "mongoose";

const app = Express();

mongoose.connect(mongoUrl).then(() => console.log("database connected successfully!!"))

app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`);
})
