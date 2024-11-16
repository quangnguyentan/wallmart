const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const depositSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    money: {
      type: String,
    },
    reason: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Deposit = mongoose.model("deposit", depositSchema);

module.exports = Deposit;
