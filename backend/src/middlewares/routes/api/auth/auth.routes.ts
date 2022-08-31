// Auth router
import { Router, Request, Response } from "express";
import jwksController from "../../../../controllers/auth/jwks.controller";
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

authRouter.get("/jwks", async (req: Request, res: Response) => {
  await jwksController(req, res);
});

export default authRouter;
