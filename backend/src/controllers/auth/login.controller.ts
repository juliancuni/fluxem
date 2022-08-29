import { Request } from "express";

const loginController = (req: Request) => {
  console.log(req.body);
  return true;
};

export default loginController;