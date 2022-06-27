const express = require("express");
const {
  getTweets,
  createTweet,
  updateTweet,
  deleteTweet,
  likeTweet,
  retweet,
} = require("../controllers/tweetController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(protect, createTweet);
router.route("/likes/:id").put(likeTweet);
router.route("/retweets/:id").put(retweet);

router.route("/:id").get(getTweets).delete(deleteTweet);

module.exports = router;
