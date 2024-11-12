const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addressSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  stress: {
    type: String,
  },
  revicerName: String,
  phone: String,
  province: String,
  houseNumber: String,
  city: String,
  active: {
    type: Boolean,
    default: false,
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Address = mongoose.model("address", addressSchema);

module.exports = Address;
