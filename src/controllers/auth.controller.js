import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function login(req, res) {
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return res.status(400).json({ error: "User not found" });
  }

  const isMatch = await bcrypt.compare(req.body.password, user.password);

  if (!isMatch) {
    return res.status(400).json({ error: "Wrong password" });
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
  );

  res.json({ token });
}

export async function register(req, res) {
  const { username, email, password } = req.body;

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hash
  });

  res.json({
    message: "Register success",
    user
  });
}