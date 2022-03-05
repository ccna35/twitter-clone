const express = require("express");
const {
  getReplies,
  createReply,
  updateReply,
  deleteReply,
} = require("../controllers/replyController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").get(protect, getReplies).post(protect, createReply);

router.route("/:id").put(protect, updateReply).delete(protect, deleteReply);

module.exports = router;
