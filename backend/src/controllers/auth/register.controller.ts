import { sdk } from "../../helpers/gql.client";

const registerController = async (body: Record<string, string>) => {
  

  const { email, password } = body;
  const users = await sdk.allUsers();
  console.log(users);
  return true;
};

export default registerController;
