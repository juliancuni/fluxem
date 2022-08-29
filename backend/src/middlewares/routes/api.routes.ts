import { Router, Request, Response } from "express";

const apiRouter = Router()

apiRouter.get("/", (req: Request, res: Response) => {
    res.json({'api': 'routes'})
})

apiRouter.get("/test", (req: Request, res: Response) => {
    res.json({'test': 'route'})
})

export default apiRouter