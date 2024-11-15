const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const withDrawSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    money: {
      type: String,
    },
    reason: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Đợi duyệt", "Thành công", "Không thành công"],
      default: "Đợi duyệt",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const WithDraw = mongoose.model("withDraw", withDrawSchema);

module.exports = WithDraw;
