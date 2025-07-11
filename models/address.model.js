import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  number: { type: Number, required: true },
  rue: { type: String, required: true },
  complement: { type: String },
  ville: { type: String, required: true },
  codePostal: { type: String, required: true, length: 5 },
});

const Address = mongoose.model("Address", addressSchema);
export default Address;