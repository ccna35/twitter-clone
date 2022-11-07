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

router.route("/reply/:id").put(protect, updateReply).delete(deleteReply);

module.exports = router;
