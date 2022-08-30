import { GraphQLClient } from "graphql-request";
import { getSdk } from "../utils/gql/generated/graphql";

// export const client = new GraphQLClient(
//   process.env.GQL_ENGINE_URL || "http://localhost:3000",
//   {
//     headers: {
//       "x-hasura-admin-secret":
//         process.env.GQL_ENGINE_ADMIN_SECRET || "changeit",
//     },
//   }
// );

export const client = (gqlUrl: string, secretKey: string) => {
    console.log(process.env.GQL_ENGINE_URL)
  const cl = new GraphQLClient(
    gqlUrl,
    {
      headers: {
        "x-hasura-admin-secret": secretKey,
      },
    }
  );
  return cl
};

export const sdk = getSdk(
    client(
      process.env.GQL_ENGINE_URL!,
      process.env.GQL_ENGINE_ADMIN_SECRET!
    )
);
