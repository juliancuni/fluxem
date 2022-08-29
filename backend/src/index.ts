import express, { Express, Request, Response } from "express";
import dotenv from 'dotenv';
import logger from "./middlewares/logger";

dotenv.config()

const app: Express = express();
const port = process.env.BACKEND_PORT || 3300;
const startedAt = Date.now()

app.use(logger)

app.get("/", (req: Request, res: Response) => {
    const uptime = Date.now() - startedAt;
    res.json({startedAt, uptime: `${uptime/1000} sec`})
})

app.listen(port, () => {
    console.log(`BackEnd is running at port ${port}`);
})