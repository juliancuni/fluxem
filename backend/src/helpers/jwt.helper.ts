import { readFileSync } from "fs";
import { join } from "path";
import { JWK, JWS } from "node-jose";
const keysPath = join(__dirname + "/../../secrets/keys.json");

const generateJWT = async () => {
  const jwKeys = readFileSync(keysPath);
  const keyStore = await JWK.asKeyStore(jwKeys.toString());
  const [key] = keyStore.all({ use: "sig" });
  const opt = { compact: true, jwk: key, fields: { typ: "jwt" } };
  const payload = JSON.stringify({
    exp: Math.floor(Date.now() / 1000 + 24 * 60 * 60),
    iat: Math.floor(Date.now() / 1000),
    sub: "MeTheTeThashe",
    "https://hasura.io/jwt/claims": {
    "x-hasura-allowed-roles": ["admin", "user"],
    "x-hasura-default-role": "admin",
    "x-hasura-user-id": "1234567890",
    "x-hasura-org-id": "123",
    "x-hasura-custom": "custom-value"
  }
  });

  const token = await JWS.createSign(opt, key).update(payload).final();
  return token;
};

export {generateJWT}
