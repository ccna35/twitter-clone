const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
  getUserPublicData,
  getAllUsers,
  updateUserData,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/home", protect, getMe);
router.get("/:username", getUserPublicData);
router.put("/:id", updateUserData);
router.get("/", getAllUsers);

module.exports = router;
