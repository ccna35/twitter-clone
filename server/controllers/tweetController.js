const asyncHandler = require("express-async-handler");
const Tweet = require("../models/tweetModel");
const User = require("../models/userModel");

// @desc get all tweets
// @route GET /api/tweets
// @access private

const getTweets = asyncHandler(async (req, res) => {
  const userID = await User.findOne({ username: req.params.id });
  const tweets = await Tweet.find({ user: userID }).sort({
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
  console.log(req.user);

  const tweet = await Tweet.findById(req.params.id);

  if (!tweet) {
    res.status(400);
    throw new Error("Tweet not found");
  }

  // const user = await User.findById(req.user.id);

  // // Check if user exists
  // if (!user) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  // // Make sure the logged in user matches the tweet user
  // if (tweet.user.toString() !== user.id) {
  //   res.status(401);
  //   throw new Error("User not authorized");
  // }

  await Tweet.findByIdAndDelete({ _id: req.params.id });

  res.status(200).json({ id: req.params.id });
});

// @desc update a tweet when someone likes it
// @route PUT /api/tweets/:id
// @access private

const likeTweet = asyncHandler(async (req, res) => {
  const tweet = await Tweet.findById(
    JSON.stringify(req.params.id).toString().slice(1, -1)
  );

  if (!tweet) {
    res.status(400);
    throw new Error("Tweet not found");
  }

  // const user = await User.findById(req.user.id);

  // // Check if user exists
  // if (!user) {
  //   res.status(401);
  //   throw new Error("User not found");
  // }

  if (req.body.didUserLikeThisTweet) {
    const removeLike = await Tweet.findByIdAndUpdate(
      JSON.stringify(req.params.id).toString().slice(1, -1),
      { $pull: { likes: req.body.userID } },
      { new: true }
    );

    res.status(200).json(removeLike);
  } else {
    const addLike = await Tweet.findByIdAndUpdate(
      JSON.stringify(req.params.id).toString().slice(1, -1),
      { $push: { likes: req.body.userID } },
      { new: true }
    );

    res.status(200).json(addLike);
  }
});

module.exports = {
  getTweets,
  createTweet,
  updateTweet,
  deleteTweet,
  likeTweet,
};
