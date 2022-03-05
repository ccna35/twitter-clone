const express = require("express");
const {
  getTweets,
  createTweet,
  updateTweet,
  deleteTweet,
} = require("../controllers/tweetController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").get(protect, getTweets).post(protect, createTweet);

router.route("/:id").put(protect, updateTweet).delete(protect, deleteTweet);

module.exports = router;
