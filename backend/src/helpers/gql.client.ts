import { GraphQLClient } from "graphql-request";
import { getSdk } from "../utils/gql/generated/graphql";
import dotenv from "dotenv";
dotenv.config()

console.log("new Client");

export const client = new GraphQLClient(
  process.env.GQL_ENGINE_URL || "http://localhost:3000",
  {
    headers: {
      "x-hasura-admin-secret":
        process.env.GQL_ENGINE_ADMIN_SECRET || "changeit",
    },
  }
);

export const sdk = getSdk(client);
