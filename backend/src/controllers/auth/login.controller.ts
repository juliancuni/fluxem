import { Request, Response } from "express";
import { ClientError } from "graphql-request";
import validateEmail from "../../helpers/email.validator";
import { sdk } from "../../helpers/gql.client";
import { serializeToken } from "../../helpers/jwt.helper";
import { verifyPassword } from "../../helpers/password.hash";
import { GetUserByEmailQuery } from "../../utils/gql/generated/graphql";

const loginController = async (req: Request, res: Response) => {
  //User input
  const { identifier, password, platform, coords } = req.body;
  let user: GetUserByEmailQuery;
  try {
    //check if is email (login with email)
    if (validateEmail(identifier)) {
      user = await sdk.getUserByEmail({ email: identifier });
    } else {
      // if is not email (login with username)
      user = await sdk.getUserByUsername({ username: identifier });
    }
    //If user exist by identifier above
    if (user.user.length > 0) {
      const [{ password: hashedPass, id: userId }] = user.user;
      const passVerified = await verifyPassword(password, hashedPass);
      //Verify Password
      if (passVerified) {
        //create token and cookie.
        res.set("Set-Cookie", await serializeToken(userId));
        res.json(req.body);
      } else {
        res.json({ error: "Username/email or password wrong" });
      }
    } else {
      res.json({ error: "Username/email or password wrong" });
    }
  } catch (error: any) {
    if (error instanceof ClientError) {
      res.json(error);
    } else {
      res.json({
        error: "Something went wrong with the request",
        message: error.message,
      });
    }
  }

  // const user = await sdk.getUserByEmail({ email: identifier });
};

export default loginController;
