import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import logger from "./middlewares/logger";
import router from "./middlewares/routes";
import cors from "cors";

dotenv.config();

const app: Express = express();
const port = process.env.BACKEND_PORT || 3000;

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);
app.use(bodyParser.json());
app.use(logger, router);

app.listen(port, () => {
  console.log(`BackEnd is running at port ${port}`);
});
