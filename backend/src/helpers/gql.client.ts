import { GraphQLClient } from "graphql-request";

console.log(process.env.GQL_ENGINE_URL)
export const client = new GraphQLClient(process.env.GQL_ENGINE_URL || 'http://localhost:3000', {
  headers: {
    "x-hasura-admin-secret": process.env.GQL_ENGINE_ADMIN_SECRET || 'changeit',
  },
});


