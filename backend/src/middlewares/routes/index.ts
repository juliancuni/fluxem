//Main Router
import { Router, Request, Response, NextFunction } from "express";
import apiRouter from "./api/api.routes";

const router = Router()

 /**
  * TODO: Validate all requests by cookie browserid
  */
// router.use((req: Request, res: Response, next: NextFunction) => {
//     if(!req.headers.cookie) {
//         res.redirect('https://google.com')
//     } else {
//         console.log(req.headers.cookie)

//         next()
//     }
// })

router.use('/api', apiRouter)
const startedAt = Date.now()

router.get("/", (req: Request, res: Response) => {
    const uptime = Date.now() - startedAt;
    res.json({startedAt, uptime: `${uptime/1000} sec`})
})

router.get("*", (req:Request, res: Response) => {
  res.statusCode = 404;
  res.statusMessage = "Not FOUND";
  res.json({"error": "Not Found"})
})

export default router