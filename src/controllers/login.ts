import { Request, Response } from "express";
import { User } from "../model/User";
import generateToken from "../utils/generateToken";

export default async function login(req: Request, res: Response) {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    const token = await generateToken(email);
    res.json({
      token,
      message: "user successfully logged in",
      success: true,
    });
  } else {
    res.json({
      message: " invalid email or password",
      success: false,
    });
  }
}
