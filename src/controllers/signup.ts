import { Request, Response } from "express";
import { User } from "../model/User";
import generateToken from "../utils/generateToken";

export default async function signup(req: Request, res: Response) {
  const { email, name, password } = req.body;
  const user = await User.findOne({ email});
  if (user) {
    res.status(409).json({ message: "user already exists", success: false });
  } else {
    const newUser = new User({ email, name, password });
    const token = await generateToken(email);
    await newUser.save();
    res.json({
      token,
      message: "user successfully registered",
      success: true,
    });
  }
}
