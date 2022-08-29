import { NextFunction, Request, Response } from "express";

const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`${new Date().toLocaleString()}: ${req.method} ${req.path} - [${req.ip}]`)
    next()
}

export default logger