const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
    },
    industry: {
      type: String,
    },
    price: {
      type: Number,
    },
    priceOld: {
      type: Number,
    },
    stockOff: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    store: {
      type: Schema.Types.ObjectId,
      ref: "store",
    },
    inventory: Number,
    photos: [String],
    sold: Number,
    color: [String],
    size: [String],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
