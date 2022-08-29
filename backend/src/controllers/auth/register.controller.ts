import { Request } from "express";
import { gql } from "graphql-request";
import client from "../../helpers/gql.client";

const registerController = async (body: Record<string, string>) => {
  const { email, password } = body;

  let { user } = await client.request(
    gql`
      query getUserByEmail($email: String!) {
        user(where: { email: { _eq: $email } }) {
          id
          password
        }
      }
    `,
    {
      email,
    }
  );
  console.log(user)

  return user;
};

export default registerController;
