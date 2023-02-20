import mongoose from "mongoose";

export interface IUser {
  email: string,
  password: string
}


const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  }
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;