import { Request } from "express";
import { gql } from "graphql-request";
import client from "../../helpers/gql.client";

const registerController = async (body: Record<string, string>) => {
  const { email, password } = body;

  

  return true;
};

export default registerController;
