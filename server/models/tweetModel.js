const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tweetSchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    text: {
      type: String,
      required: true,
    },
    likes: {
      type: Array,
      default: [],
    },
    retweets: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;
