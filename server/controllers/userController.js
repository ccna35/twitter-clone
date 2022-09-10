const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// @desc register a new user
// @route POST /api/users
// @access public

const registerUser = asyncHandler(async (req, res) => {
  const { name, username, email, password, birthDate } = req.body;

  // Check if user completed all fields
  if (!name || !username || !email || !password) {
    res.status(400);
    throw new Error("All fields are required!");
  }

  // Check if user exists
  const emailExists = await User.findOne({ email });
  const usernameExists = await User.findOne({ username });

  if (emailExists || usernameExists) {
    res.status(400);
    throw new Error("This user already exists!");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    username,
    email,
    birthDate,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      joinDate: user.joinDate,
      birthDate: user.birthDate,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc authenticate a user
// @route POST /api/users/login
// @access public

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      profilePhoto: user.profilePhoto,
      username: user.username,
      email: user.email,
      following: user.following,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid credentials");
  }
});

// @desc Get user data
// @route GET /api/users/home
// @access private

const getMe = asyncHandler(async (req, res) => {
  const { _id, name, email } = await User.findById(req.user.id);

  res.status(200).json({ id: _id, name, email });
});

// @desc Gets user public data
// @route GET /api/users/:username
// @access public

const getUserPublicData = asyncHandler(async (req, res) => {
  const userData = await User.find({ username: req.params.username });

  res.status(200).json(userData);
});

// @desc updates user public data
// @route PUT /api/users/:id
// @access private

const updateUserData = asyncHandler(async (req, res) => {
  const updatedUserInfo = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  console.log(updatedUserInfo);

  res.status(200).json(updatedUserInfo);
});

// @desc Gets all users
// @route GET /api/users/
// @access public

const getAllUsers = asyncHandler(async (req, res) => {
  const usersList = await User.find().sort({
    createdAt: -1,
  });

  res.status(200).json(usersList);
});

// @desc follow & unfollow users
// @route GET /api/users/followUser/:myUserName
// @access private

const followProcess = asyncHandler(async (req, res) => {
  const myUser = await User.findOne({ username: req.body.myUserName });
  const otherUser = await User.findOne({
    username: req.body.otherUserName,
  });

  // Check if user exists
  if (!myUser || !otherUser) {
    res.status(401);
    throw new Error("User not found");
  }

  if (req.body.didIfollowThisUser) {
    // First, we remove the user from my "following" list.
    const removeOtherUserFromMyFollowingList = await User.findByIdAndUpdate(
      myUser._id.toString(),
      { $pull: { following: req.body.otherUserName } },
      { new: true }
    );

    // Second, remove my user from the other user's "followers" list.
    const removeMyUserFromHisFollowersList = await User.findByIdAndUpdate(
      otherUser._id.toString(),
      { $pull: { followers: req.body.myUserName } },
      { new: true }
    );
  } else {
    // First, add the user to my "following" list.
    const addOtherUserToMyFollowingList = await User.findByIdAndUpdate(
      myUser._id.toString(),
      { $push: { following: req.body.otherUserName } },
      { new: true }
    );

    // Second, add my user to the other user's "followers" list.
    const addMyUserToHisFollowersList = await User.findByIdAndUpdate(
      otherUser._id.toString(),
      { $push: { followers: req.body.myUserName } },
      { new: true }
    );
  }
});

// Generate JWT

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
  getUserPublicData,
  getAllUsers,
  updateUserData,
  followProcess,
};
