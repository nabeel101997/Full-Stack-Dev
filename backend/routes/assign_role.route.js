const express = require("express");
const router = express.Router();

const controller = require("../controllers/user_role_permission");
const auth = require("../middlewares/auth_middleware");
const helpers = require("../middlewares/permission_middleware");

router.get("/current-user", auth.required, controller.currentUser);
router.get("/detail", controller.details);
router.post("/role", auth.required, helpers.checkPermission, controller.create);

module.exports = router;