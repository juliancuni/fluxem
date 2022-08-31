import { Request, Response } from "express";
import { JWK } from "node-jose";
import readKeys from "../../helpers/jwks.helper";

//TODO: Check for header. Make a decorator.
const jwksController = async (req: Request, res: Response) => {
  const ks = await readKeys();
  const keyStore = await JWK.asKeyStore(ks.toString());
  res.json(keyStore.toJSON());
};

export default jwksController;
