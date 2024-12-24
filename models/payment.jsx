import mongoose from "mongoose";
import { Schema, model } from "mongoose";

const paymentSchema = new Schema({
  name: String,
  to_user: String,
  oid: String,
  message: String,
  amount: Number,
  createAt: { type: Date, default: Date.now },
  updateAt: { type: Date, default: Date.now },
  done:Boolean,
})


export default mongoose.models.payments || model("payments", paymentSchema)