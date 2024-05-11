import { Secret, sign } from "jsonwebtoken";
export default async function generateToken(email: string) {
  const secret: Secret = process.env.SECRET as Secret;

  const token = sign({ email }, secret, {
    expiresIn: "3d",
  });
  return token;
}
