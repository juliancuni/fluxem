import { Verification_Token_Insert_Input } from "../utils/gql/generated/graphql";
import crypto from "crypto";

export enum TokenIdentifier {
  EMAIL_VERIFY = "email_verify",
  PASSWORD_RESET = "password_reset",
}

export const verificationTokenGenerator = (
  user_id: string,
  identifier: TokenIdentifier
) => {
  const token = crypto.randomBytes(32).toString("hex");
  const expires = new Date(
    new Date().setMinutes(
      new Date().getMinutes() +
        parseInt(process.env.VERIFICATION_TOKEN_VALIDIDY_TIME || "15")
    )
  );

  const verification_token: Verification_Token_Insert_Input = {
    expires,
    identifier,
    token,
    user_id,
  };
  return verification_token;
};
