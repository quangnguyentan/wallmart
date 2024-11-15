const mongoose = require("mongoose");
const Product = require("./product");
const Order = require("./order");

const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  active: {
    type: String,
  },
  follow: Number,
  industry: {
    type: String,
  },
  catergory: {
    type: String,
  },
  logoStore: {
    type: String,
  },
  fullname: {
    type: String,
  },
  phone: {
    type: String,
  },
  idYourself: {
    type: String,
  },
  service: String,
  emailYourself: {
    type: String,
  },
  identification: {
    front: String,
    backside: String,
    yourFace: String,
  },

  businessLicense: String,
  cart: [
    {
      product: { type: Schema.Types.ObjectId, ref: "product" },
      quantity: Number,
      color: String,
      size: String,
      status : {
        type: String,
        enum: ["paid", "not_paid"],
        default: "not_paid",
      },
    },
  ],
  inforByStore: {
    nameStore: String,
    descriptionStore: String,
  },

  address: {
    province: String,
    city: String,
    area: String,
    street: String,
  },

  codeByFriend: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
StoreSchema.pre("remove", async function (next) {
  try {
    await Order.deleteMany({ store: this._id });
    await Product.deleteMany({ store: this._id });

    next();
  } catch (error) {
    next(error);
  }
});
const Store = mongoose.model("store", StoreSchema);

module.exports = Store;
