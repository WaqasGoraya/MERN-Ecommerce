import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, trim: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    role: { type: Number, default: 0 },
  },
  { timestamp: true }
);
const userModel = mongoose.model("users", userSchema);

export default userModel;
