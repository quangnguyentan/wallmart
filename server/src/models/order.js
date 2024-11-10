import mongoose from "mongoose";

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  status: {
    type: String,
    enum: ["waitPay", "delivery", "successfull", "canceled"],
    default: "waitPay",
  },
  adress: {
    type: String,
    required: true,
  },
  shop: {
    type: Schema.Types.ObjectId,
    ref: "store",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("order", OrderSchema);

export default Order;
