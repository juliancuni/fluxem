// Auth router
import { Router, Request, Response } from "express";
import loginController from "../../../../controllers/auth/login.controller";
import registerController from "../../../../controllers/auth/register.controller";

const authRouter = Router();

authRouter.get("/", (req: Request, res: Response) => {
  res.json({ env: process.env.TEST_ENV });
});

authRouter.post("/login", async (req: Request, res: Response) => {
  await loginController(req, res);
});

authRouter.post("/register", async (req: Request, res: Response) => {
    await registerController(req, res);
  });

export default authRouter;
