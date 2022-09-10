const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
  getUserPublicData,
  getAllUsers,
  updateUserData,
  followProcess,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/home", protect, getMe);
router.get("/:username", getUserPublicData);
router.put("/:id", updateUserData);
router.put("/followUser/:myUserName", followProcess);
router.get("/", getAllUsers);

module.exports = router;
