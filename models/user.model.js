import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  address: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Address", required: true },
  ],
  deliveryAddress: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isDeleted: { type: Boolean, default: false },
  deleteDate: { type: Date },
});

const User = mongoose.model("User", userSchema);
export default User;
