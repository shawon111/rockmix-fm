import userSchema from "@/schemas/userSchema";
import mongoose from "mongoose";

const User = mongoose.model("User", userSchema);

export default User;