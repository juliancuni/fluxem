import { ClientError } from "graphql-request";
import { sdk } from "../../helpers/gql.client";
import { User, User_Insert_Input } from "../../utils/gql/generated/graphql";
import {Request, Response} from 'express';
import sendMail from "../../helpers/mailer";
const registerController = async (req: Request, res: Response) => {
  const newUser: User_Insert_Input = req.body;
  await sendMail();
  try {
    const user = await sdk.registerUser({ user: newUser });
    res.json(user)
  } catch (error) {
    if(error instanceof ClientError) {
      res.json(error)
    }
  }
};

export default registerController;
