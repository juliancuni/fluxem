import bcrypt from "bcrypt";

const saltRounds = 10;

export const hashPassword = async (rawPass: string) => {
  const hashedPass = await bcrypt.hash(rawPass, saltRounds);
  return hashedPass;
};

export const verifyPassword = async (rawPass: string, hashedPass: string) => {
    const verified = await bcrypt.compare(rawPass, hashedPass);
    return verified;
};