import { Schema, model } from "mongoose";

const userSchema = new Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["user", "admin"], default: "user" }
}, { timestamps: true });

export default model("User", userSchema);