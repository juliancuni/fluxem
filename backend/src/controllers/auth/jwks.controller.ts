import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import jose from "node-jose";

const jwksController = async (req: Request, res: Response) => {
    const ks = fs.readFileSync(__dirname + "/../../../secrets/keys.json");
    const keyStore = await jose.JWK.asKeyStore(ks.toString());

  res.json(keyStore.toJSON());
};

const generateKeys = async () => {
  const keystore = jose.JWK.createKeyStore();
  await keystore
    .generate("RSA", 2048, { alg: "RS256", use: "sig" })
    .then((res) => {
      fs.writeFileSync(
        __dirname + "/../../../secrets/keys.json",
        JSON.stringify(keystore.toJSON(true), null, "  ")
      );
    });
};

export default jwksController;
