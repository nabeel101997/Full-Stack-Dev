const express = require("express");
const router = express.Router();

const controller = require("../controllers/user.controller");
require("../config/passport").passport;
const auth = require("../middlewares/auth_middleware");

router.get("/", controller.all);
router.post("/", controller.create);

router.get("/dashboard", auth.required, controller.dashboard);
router.get("/:id", controller.details);
router.put("/:id", controller.update);
router.delete("/:id", controller.delete);

router.post("/login", controller.login);
router.post("/forgot-password", controller.forgotPassword);
router.post("/reset-password/:token", controller.resetPassword);
router.get(
  "/verify-forgot-password-token/:token",
  controller.verifyResetPasswordToken
);
router.post("/refresh-token", controller.refreshToken);
router.get("/logout", controller.logout);

module.exports = router;
