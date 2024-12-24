import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
  fullName: String,
  username: String,
  number: Number,
  email: String,
  avatar_url: String,
  country: String,
  fullAddress: String,
  paymentMethod: String,
  paymendID: String,
  PaymentKey: String,
});


export default mongoose.models.users || model("users", userSchema)