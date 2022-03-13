const asyncHandler = require("express-async-handler");
const Tweet = require("../models/tweetModel");
const User = require("../models/userModel");

// @desc get all tweets
// @route GET /api/tweets
// @access private

const getTweets = asyncHandler(async (req, res) => {
  const tweets = await Tweet.find({ user: req.params.id }).sort({
    createdAt: -1,
  });

  res.status(200).json(tweets);
});

// @desc create new tweets
// @route POST /api/tweets
// @access private

const createTweet = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);

    throw new Error("Please add a text field");
  }

  const tweet = await Tweet.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(tweet);
});

// @desc update a tweet
// @route PUT /api/tweets/:id
// @access private

const updateTweet = asyncHandler(async (req, res) => {
  const tweet = await Tweet.findById(req.params.id);

  if (!tweet) {
    res.status(400);
    throw new Error("Tweet not found");
  }

  const user = await User.findById(req.user.id);

  // Check if user exists
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the tweet user
  if (tweet.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedTweet = await Tweet.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedTweet);
});

// @desc delete a tweet
// @route DELETE /api/tweets/:id
// @access private

const deleteTweet = asyncHandler(async (req, res) => {
  const tweet = await Tweet.findById(req.params.id);

  if (!tweet) {
    res.status(400);
    throw new Error("Tweet not found");
  }

  const user = await User.findById(req.user.id);

  // Check if user exists
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the tweet user
  if (tweet.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await Tweet.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getTweets,
  createTweet,
  updateTweet,
  deleteTweet,
};