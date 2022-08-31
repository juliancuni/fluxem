import { existsSync, mkdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { JWK } from "node-jose";

const keysPath = join(__dirname + "/../../secrets/");
const keyFileName = "keys.json";

const readKeys = async () => {
  if (!existsSync(keysPath)) {
    mkdirSync(keysPath, { recursive: true });
    await generateKeys();
  }
  const jwKeys = readFileSync(join(keysPath, keyFileName));
  return jwKeys;
};

const generateKeys = async () => {
  const keystore = JWK.createKeyStore();
  await keystore
    .generate("RSA", 2048, { alg: "RS256", use: "sig" })
    .then((res) => {
      writeFileSync(
        join(keysPath, keyFileName),
        JSON.stringify(keystore.toJSON(true), null, "  ")
      );
    });
};

export default readKeys;
