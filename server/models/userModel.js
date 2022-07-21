const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    verifiedEmail: {
      type: Boolean,
      default: false,
    },
    profilePhoto: {
      type: String,
      default: null,
    },
    coverPhoto: {
      type: String,
      default: null,
    },
    country: {
      type: String,
      default: null,
    },
    bio: {
      type: String,
      default: null,
    },
    website: {
      type: String,
      default: null,
    },
    profileIntro: {
      type: String,
      default: null,
    },
    birthDate: {
      type: Object,
      required: true,
    },
    joinDate: {
      type: Date,
      default: Date.now(),
    },
    following: {
      type: Number,
      default: 0,
    },
    followers: {
      type: Number,
      default: 0,
    },
    retweetedTweets: {
      type: [
        {
          dateAdded: { type: Date, default: Date.now },
          tweetId: { type: String },
        },
      ],
    },
    likedTweets: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
