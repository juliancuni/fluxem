// Auth router
import { Router, Request, Response } from "express";
import loginController from "../../../../controllers/auth/login.controller";
import registerController from "../../../../controllers/auth/register.controller";

const authRouter = Router();

authRouter.get("/", (req: Request, res: Response) => {
  res.json({ env: process.env.TEST_ENV });
});

authRouter.post("/login", (req: Request, res: Response) => {
  loginController(req);
  res.json({ test: "route" });
});

authRouter.post("/register", async (req: Request, res: Response) => {
    // console.log(req)
    await registerController(req.body as Record<string, string>);
    res.json({ "test": "route" });
  });

export default authRouter;
