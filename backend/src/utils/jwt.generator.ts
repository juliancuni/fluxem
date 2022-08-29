import { SignOptions, sign } from "jsonwebtoken";

const JWT_SECRET = {
  type: process.env.JWT_SECRET_TYPE!,
  key: process.env.JWT_SECRET_KEY!,
};

const JWT_CONFIG: SignOptions = {
  algorithm: JWT_SECRET.type as "HS256" | "RS512",
  expiresIn: "10h",
};

interface GenerateJWTParams {
  defaultRole: string;
  allowedRoles: string[];
  otherClaims?: Record<string, string | string[]>;
}

const generateJWT = (params: GenerateJWTParams) => {
  const payload = {
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": params.allowedRoles,
      "x-hasura-default-role": params.defaultRole,
      ...params.otherClaims,
    },
  };
  return sign(payload, JWT_SECRET.key, JWT_CONFIG);
};

export default generateJWT;
