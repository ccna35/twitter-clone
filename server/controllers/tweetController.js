const asyncHandler = require("express-async-handler");
const Tweet = require("../models/tweetModel");
const User = require("../models/userModel");

// @desc get all tweets
// @route GET /api/tweets
// @access public

const getTweets = asyncHandler(async (req, res) => {
  const userID = await User.findOne({ username: req.params.id });

  const tweetList = [];

  const tweets = await Tweet.find({ user: userID })
    .sort({
      createdAt: -1,
    })
    .lean();

  tweets.map((tweet) =>
    tweetList.push({
      name: userID.name,
      username: userID.username,
      profilePhoto: userID.profilePhoto,
      isVerified: userID.isVerified,
      ...tweet,
    })
  );

  for (user of userID.following) {
    // console.log(user);
    const userID = await User.findOne({ username: user });
    const tweets = await Tweet.find({ user: userID })
      .sort({
        createdAt: -1,
      })
      .lean();

    tweets.map((tweet) =>
      tweetList.push({
        name: userID.name,
        username: userID.username,
        profilePhoto: userID.profilePhoto,
        isVerified: userID.isVerified,
        ...tweet,
      })
    );

    // tweetList = [...tweetList, ...tweets];
    // console.log(tweets);
  }

  console.log(tweetList);

  // const tweets = await Tweet.find({ user: userID }).sort({
  //   createdAt: -1,
  // });
  res.status(200).json(tweetList);
});

const getTweet = asyncHandler(async (req, res) => {
  const tweet = await Tweet.findOne({ _id: req.params.id });
  res.status(200).json(tweet);
});

// // @desc get all tweets
// // @route GET /api/tweets
// // @access public

// const getRetweedTweets = asyncHandler(async (req, res) => {
//   const userID = await User.findOne({ username: req.params.id });
//   const tweets = await Tweet.find({ user: userID }).sort({
//     createdAt: -1,
//   });
//   res.status(200).json(tweets);
// });

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
    image: req.body.image,
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
    const removeLikeFromTweetDatabase = await Tweet.findByIdAndUpdate(
      JSON.stringify(req.params.id).toString().slice(1, -1),
      { $pull: { likes: req.body.userID } },
      { new: true }
    );

    // Second we remove the tweet from the likedTweets array stored in that user's database.
    const removeTweetFromUserDatabase = await User.findByIdAndUpdate(
      req.body.userID,
      { $pull: { likedTweets: tweet._id } },
      { new: true }
    );

    res.status(200).json(removeLikeFromTweetDatabase);
  } else {
    const addLikeFromTweetDatabase = await Tweet.findByIdAndUpdate(
      JSON.stringify(req.params.id).toString().slice(1, -1),
      { $push: { likes: req.body.userID } },
      { new: true }
    );

    // Second we remove the tweet from the likedTweets array stored in that user's database.
    const addTweetToUserDatabase = await User.findByIdAndUpdate(
      req.body.userID,
      { $push: { likedTweets: tweet._id } },
      { new: true }
    );

    res.status(200).json(addLikeFromTweetDatabase);
  }
});

// @desc update a tweet when someone retweets it
// @route PUT /api/tweets/:id
// @access private

const retweet = asyncHandler(async (req, res) => {
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

  if (req.body.didUserRetweetThisTweet) {
    // First we remove the user ID who retweeted the tweet from the tweet's database.
    const removeRetweetFromTweetDatabase = await Tweet.findByIdAndUpdate(
      JSON.stringify(req.params.id).toString().slice(1, -1),
      { $pull: { retweets: req.body.userID } },
      { new: true }
    );

    // Second we remove the tweet from the retweetedTweets array stored in that user's database.
    const removeRetweetFromUserDatabase = await User.findByIdAndUpdate(
      req.body.userID,
      { $pull: { retweetedTweets: { tweetId: tweet._id } } },
      { new: true }
    );

    res.status(200).json(removeRetweetFromTweetDatabase);
  } else {
    // First we add the user ID who retweeted the tweet to the tweet's database.
    const addRetweetToTweetDatabase = await Tweet.findByIdAndUpdate(
      JSON.stringify(req.params.id).toString().slice(1, -1),
      { $push: { retweets: req.body.userID } },
      { new: true }
    );

    // Second we add the tweet to the retweetedTweets array stored in that user's database.
    const addRetweetToUserDatabase = await User.findByIdAndUpdate(
      req.body.userID,
      { $push: { retweetedTweets: { tweetId: tweet._id } } },
      { new: true }
    );

    res.status(200).json(addRetweetToTweetDatabase);
  }
});

module.exports = {
  getTweets,
  getTweet,
  createTweet,
  updateTweet,
  deleteTweet,
  likeTweet,
  retweet,
};
