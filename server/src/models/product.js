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
    shop: 
      {
        type: Schema.Types.ObjectId,
        ref: 'store',
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

const Product = mongoose.model("product", ProductSchema);

module.exports = Product

