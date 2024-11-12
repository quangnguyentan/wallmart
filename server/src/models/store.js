const mongoose = require("mongoose");

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

const Store = mongoose.model("store", StoreSchema);

module.exports = Store;
