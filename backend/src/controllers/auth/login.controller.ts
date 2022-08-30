import { Request } from "express";
import { sdk } from "../../helpers/gql.client";

const loginController = async (req: Request) => {
  const users = await sdk.allUsers();
  console.log(users);
  return true;
};

export default loginController;
