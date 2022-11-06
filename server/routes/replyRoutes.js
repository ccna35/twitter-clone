const express = require("express");
const {
  getReplies,
  createReply,
  updateReply,
  deleteReply,
} = require("../controllers/replyController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.route("/").post(protect, createReply);
router.route("/:id").get(getReplies);

// router.route("/:id").put(protect, updateReply).delete(protect, deleteReply);

module.exports = router;
