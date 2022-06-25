const express = require("express");
const {
  getTweets,
  createTweet,
  updateTweet,
  deleteTweet,
  likeTweet,
} = require("../controllers/tweetController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(protect, createTweet);

router
  .route("/:id")
  .get(getTweets)
  // .put(protect, updateTweet)
  .put(likeTweet)
  .delete(deleteTweet);

module.exports = router;
