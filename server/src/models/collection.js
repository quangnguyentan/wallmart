const mongoose = require("mongoose");
const collectionSchema = new mongoose.Schema({
  title: String,
  category: String,
  image: String,
  video: String,
  view: {
    // type: Number,
    // default: 0,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  leftTeamName: String,
  leftTeamImage: String,
  firstHalf: String,
  secondHalf: String,
  outcome: String,
  rightTeamName: String,
  rightTeamImage: String,
  live: {
    type: Boolean,
    default: false,
  },
  videoLive: String,
  upcomingMatch: String,
  commentator: String,
  commentatorImage: String,
  day: String,
  timeStart: String,
  follow: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("Collection", collectionSchema);
