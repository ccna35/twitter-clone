const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
  getUserPublicData,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/", registerUser);
router.post("/login", loginUser);
router.get("/home", protect, getMe);
router.get("/:username", getUserPublicData);

module.exports = router;
