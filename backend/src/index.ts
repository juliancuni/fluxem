import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import logger from "./middlewares/logger";
import router from "./middlewares/routes";
import { initSupertoken, supertokens } from "./utils/supertokens.init";
import { middleware, errorHandler } from "supertokens-node/framework/express";

dotenv.config();

const app: Express = express();
const port = process.env.BACKEND_PORT || 3000;

initSupertoken();

app.use(
  cors({
    origin: "http://localhost:3300",
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(middleware());
app.use(logger, router);
app.use(errorHandler());
app.listen(port, () => {
  console.log(`BackEnd is running at port ${port}`);
});
