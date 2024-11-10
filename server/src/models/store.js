const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
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
  emailYourself: {
    type: String,
  },
  identification: {
    front: String,
    backside: String,
    yourFace: String,
  },

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
  businessLicense: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Store = mongoose.model("store", StoreSchema);

module.exports = Store;
