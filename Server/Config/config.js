import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();

const PORT = process.env.PORT || 8001;

const logger = morgan("combined");

const mongoUrl = `mongodb+srv://${process.env.DB_userName}:${process.env.DB_password}@academy.ilmon77.mongodb.net/${process.env.DB_name}?retryWrites=true&w=majority`;

export { PORT, logger, mongoUrl };
