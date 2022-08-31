import { Request, Response } from "express";
import { ClientError } from "graphql-request";
import validateEmail from "../../helpers/emailValidator";
import { sdk } from "../../helpers/gql.client";
import { verifyPassword } from "../../helpers/password.hash";
import { GetUserByEmailQuery, User } from "../../utils/gql/generated/graphql";

const loginController = async (req: Request, res: Response) => {
  const { identifier, password } = req.body;

  //check if is email
  let user: GetUserByEmailQuery;
  try {
    if (validateEmail(identifier)) {
      user = await sdk.getUserByEmail({ email: identifier });
    } else {
      user = await sdk.getUserByUsername({ username: identifier });
    }
    if (user.user.length > 0) {
      const [{ password: hashedPass }] = user.user;
      const passVerified = await verifyPassword(password, hashedPass);
      passVerified
        ? res.json(user)
        : res.json({ error: "Username/email or password wrong" });
    } else {
      res.json({ error: "Username/email or password wrong" });
    }
  } catch (error) {
    if (error instanceof ClientError) {
      res.json(error);
    } else {
      res.json({ error: "Something went wrong with the request" });
    }
  }

  // const user = await sdk.getUserByEmail({ email: identifier });
};

export default loginController;
