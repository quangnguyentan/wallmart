const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    email: String,
    phone: String,
    avatar: {
      type: String,
      default: "",
    },
    fullName: String,
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      default: "male",
    },
    nameOfBank: {
      type: String,
    },
    nameOfUser: {
      type: String,
    },
    creditCartOfBank: {
      type: String,
    },
    cart: [
      {
        store: { type: Schema.Types.ObjectId, ref: "store" },
        product: { type: Schema.Types.ObjectId, ref: "product" },
        quantity: Number,
        color: String,
        size: String,
      },
    ],
    wishlist: [{ type: mongoose.Types.ObjectId, ref: "store" }],
    isBlocked: {
      type: Boolean,
      default: false,
    },
    createdAt: Array,
    deposit: {
      type: Number,
      default: 0,
      required: true,
    },
    withDraw: {
      type: Number,
      default: 0,
      required: true,
    },

    role: {
      type: String,
      enum: ["user", "admin", "agent"],
      default: "user",
    },
    password: String,
    vip: {
      type: String,
      default: 0,
    },
    vipThumbnail: {
      type: String,
    },
    accessWithDraw: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User", userSchema);
