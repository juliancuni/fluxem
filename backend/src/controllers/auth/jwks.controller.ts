import { Request, Response } from "express";
import { existsSync, writeFileSync, readFileSync } from "fs";
import { join } from "path";
import { JWK } from "node-jose";
import { generateJWT } from "../../helpers/jwt.helper";

const keysPath = join(__dirname + "/../../../secrets/keys.json");

const jwksController = async (req: Request, res: Response) => {
  if (!existsSync(keysPath)) await generateKeys();

  const ks = readFileSync(keysPath);
  const keyStore = await JWK.asKeyStore(ks.toString());
    // const jwt = await generateJWT()
//   res.json({jwt});
  res.json(keyStore.toJSON());
};

const generateKeys = async () => {
  const keystore = JWK.createKeyStore();
  await keystore
    .generate("RSA", 2048, { alg: "RS256", use: "sig" })
    .then((res) => {
      writeFileSync(keysPath, JSON.stringify(keystore.toJSON(true), null, "  "));
    });
};

export default jwksController;
