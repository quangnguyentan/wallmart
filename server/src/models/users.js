const mongoose = require("mongoose");
const Order = require("./order");
const Store = require("./store");
const Product = require("./product");
const Address = require("./address");
const Deposit = require("./deposit");
const WithDraw = require("./withDraw");
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
    createdAt : [],
    role: {
      type: String,
      enum: ["user", "admin", "agent", "bot", "botAgent"],
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
userSchema.pre("remove", async function (next) {
  try {
    await Order.deleteMany({ user: this._id });

    await Store.deleteMany({ userId: this._id });

    await Product.deleteMany({ userId: this._id });

    await Address.deleteMany({ user: this._id });

    await Deposit.deleteMany({ user: this._id });
    await WithDraw.deleteMany({ user: this._id });

    next();
  } catch (error) {
    next(error);
  }
});
module.exports = mongoose.model("User", userSchema);
