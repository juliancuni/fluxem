import { ClientError } from "graphql-request";
import { sdk } from "../../helpers/gql.client";
import { RegisterUserMutation, User_Insert_Input } from "../../utils/gql/generated/graphql";
import { Request, Response } from "express";
import sendMail from "../../helpers/mailer";
import {
  TokenIdentifier,
  verificationTokenGenerator,
} from "../../helpers/verificationToken";

const registerController = async (req: Request, res: Response) => {
  const newUser: User_Insert_Input = req.body;

  try {
    const user = await sdk.registerUser({ user: newUser });
    createEmailVerifyToken(user);
    res.json(user);
  } catch (error) {
    if (error instanceof ClientError) {
      res.json(error);
    }
  }
};

const createEmailVerifyToken = async (user: RegisterUserMutation) => {
  const newToken = verificationTokenGenerator(
    user.insert_user_one?.id,
    TokenIdentifier.EMAIL_VERIFY
  );
  try {
    const token = await sdk.insertVerificationToken({ token: newToken });
    sendMail(user, token);
  } catch (error) {
    console.log(error);
  }
};

export default registerController;
