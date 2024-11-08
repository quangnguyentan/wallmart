import mongoose from "mongoose";

const Schema = mongoose.Schema;

const StoreSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  follow: Number,
  industry: {
    type: String,
    required: true,
  },
  catergory: {
    type: String,
    required: true,
  },
  logoStore: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  idYourself: {
    type: String,
    required: true,
  },
  emailYourself: {
    type: String,
    required: true,
  },
  identification: [
    {
      front: String,
      backside: String,
      yourFace: String,
    },
  ],
  inforByStore: [
    {
      nameStore: String,
      descriptionStore: String,
    },
  ],
  address: [
    {
      province: String,
      city: String,
      area: String,
      street: String,
    },
  ],
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "product",
    },
  ],
  codeByFriend: String,
  businessLicense: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Store = mongoose.model("store", StoreSchema);

export default Store;
