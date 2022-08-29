import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(process.env.GQL_ENGINE_URL!, {headers: {
    'x-hasura-admin-secret': process.env.GQL_ENGINE_ADMIN_SECRET!
}})

export default client;