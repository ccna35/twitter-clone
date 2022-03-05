const asyncHandler = require("express-async-handler");
const Reply = require("../models/replyModel");
const User = require("../models/userModel");

// @desc get all replies
// @route GET /api/replies
// @access private

const getReplies = asyncHandler(async (req, res) => {
  const replies = await Reply.find({ user: req.user.id });

  res.status(200).json(replies);
});

// @desc create new replies
// @route POST /api/replies
// @access private

const createReply = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);

    throw new Error("Please add a text field");
  }

  const reply = await Reply.create({
    text: req.body.text,
    user: req.user.id,
    tweet: "6222aec3d3506927081ec84b",
  });

  res.status(200).json(reply);
});

// @desc update a reply
// @route PUT /api/replies/:id
// @access private

const updateReply = asyncHandler(async (req, res) => {
  const reply = await Reply.findById(req.params.id);

  if (!reply) {
    res.status(400);
    throw new Error("Reply not found");
  }

  const user = await User.findById(req.user.id);

  // Check if user exists
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the reply user
  if (reply.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedReply = await Reply.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedReply);
});

// @desc delete a reply
// @route DELETE /api/replies/:id
// @access private

const deleteReply = asyncHandler(async (req, res) => {
  const reply = await Reply.findById(req.params.id);

  if (!reply) {
    res.status(400);
    throw new Error("Reply not found");
  }

  const user = await User.findById(req.user.id);

  // Check if user exists
  if (!user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the reply user
  if (reply.user.toString() !== user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await Reply.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getReplies,
  createReply,
  updateReply,
  deleteReply,
};
