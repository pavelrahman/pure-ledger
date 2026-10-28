import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User Must have a name."],
    unique: true,
  },
  age: Number,
  sex: String,
});

const User = mongoose.model("User", userSchema);

export default User;
