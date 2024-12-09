const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const linkSchema = new Schema(
  {
    cskhLink: {
      type: String,
    },
    bannerLink: String,

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Link = mongoose.model("Link", linkSchema);

module.exports = Link;
