const express = require("express");
const {
  registerController,
  loginController,
  getDataController,
} = require("../controllers/authController");
const { requireSignIn } = require("../middlewares/authmiddleware");
const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.get("/auth-user", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

router.get("/getData", requireSignIn, getDataController);

module.exports = router;
