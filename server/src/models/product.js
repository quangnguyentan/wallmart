import mongoose, { mongo } from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    priceOld: {
      type: Number,
      required: true,
    },
    stockOff: {
      type: Boolean,
      default: false,
    },
    inventory: Number,
    photos: [String],
    sold: Number,
    color: [{ colorName: String, colorImage: String }],
    size: [{ sizeName: String, sizeImage: String }],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("product", ProductSchema);

export default User;
