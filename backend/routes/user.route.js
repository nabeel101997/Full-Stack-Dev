const express = require("express");
const router = express.Router();

const validator = require("../validators/user.validation")
const controller = require("../controllers/user.controller");
require("../config/passport").passport;
const auth = require("../middlewares/auth_middleware");
const helpers = require("../middlewares/permission_middleware");

router.get("/", auth.required,  controller.all);
router.post("/", validator.create, controller.create);

router.get("/dashboard", auth.required, controller.dashboard);
router.get("/:id", validator.findRecord, controller.details);
router.put("/:id", validator.findRecord, controller.update);
router.delete("/:id", validator.findRecord, controller.delete);

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
