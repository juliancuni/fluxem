import {client} from "../../helpers/gql.client";
import { getSdk } from "../../utils/gql/generated/graphql";

const registerController = async (body: Record<string, string>) => {
  const sdk = getSdk(client);

  const { email, password } = body;
  const users = await sdk.allUsers();
  console.log(users)
  return true;
};

export default registerController;
