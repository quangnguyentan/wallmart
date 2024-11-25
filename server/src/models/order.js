const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    enum: ["waitPay", "waitDelivery", "delivering", "successfull", "canceled"],
    default: "waitPay",
  },
  stress: {
    type: String,
  },
  color: String,
  size: String,
  quantity: Number,
  revicerName: String,
  phone: String,
  province: String,
  houseNumber: String,
  city: String,
  active: {
    type: Boolean,
    default: false,
  },
  store: {
    type: Schema.Types.ObjectId,
    ref: "store",
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "product",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("order", OrderSchema);

module.exports = Order;
