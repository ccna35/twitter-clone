const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const replySchema = new Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    tweet: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Tweet",
    },
    text: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    retweets: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Reply = mongoose.model("Reply", replySchema);

module.exports = Reply;
