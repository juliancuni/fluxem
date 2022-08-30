import { Request } from "express";
import { sdk } from "../../helpers/gql.client";

const loginController = async (req: Request) => {
  const { email, password } = req.body;

  const user = await sdk.getUserByEmail({ email });
  console.log(user);
  return true;
};

export default loginController;
