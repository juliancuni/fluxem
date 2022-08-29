//Api Router
import { Router, Request, Response } from "express";
import authRouter from "./auth/auth.routes";

const apiRouter = Router()

apiRouter.use('/auth', authRouter);

apiRouter.get("/", (req: Request, res: Response) => {
    res.json({'api': 'routes'})
})

// apiRouter.get("/test", (req: Request, res: Response) => {
//     res.json({'test': 'route'})
// })

export default apiRouter