import { JWK, JWS } from "node-jose";
import readKeys from "./jwks.helper";
import { serialize } from "cookie";

const generateJWT = async (userId: string) => {
  const ks = await readKeys();
  const keyStore = await JWK.asKeyStore(ks.toString());
  const [key] = keyStore.all({ use: "sig" });
  const opt = { compact: true, jwk: key, fields: { typ: "jwt" } };
  const payload = JSON.stringify({
    iss: "http://localhost:3300/api/auth/login",
    exp: Math.floor(Date.now() / 1000 + 12 * 60 * 60),
    iat: Math.floor(Date.now() / 1000),
    sub: userId,
    "https://hasura.io/jwt/claims": {
      "x-hasura-allowed-roles": ["admin", "user"],
      "x-hasura-default-role": "admin",
      "x-hasura-org-id": "MSA",
    },
  });

  const token = await JWS.createSign(opt, key).update(payload).final();
  return token;
};

const serializeToken = async (userId: string) => {
  const token = await generateJWT(userId);
  const serialized = serialize("token", JSON.stringify(token), {
    httpOnly: true,
    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    maxAge: 3600 * 12,
    path: "/",
    secure: process.env.NODE_ENV === "production" ? true : false,
  });
  return serialized;
};

export { generateJWT, serializeToken };
