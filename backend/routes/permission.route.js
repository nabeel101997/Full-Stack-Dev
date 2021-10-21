const express = require("express");
const router = express.Router();

const validator = require("../validators/permission.validator")
const controller = require("../controllers/permission.controller");

router.get("/", controller.all);
router.post("/", validator.create, controller.create);
router.get("/:id", validator.findRecord, controller.details);
router.put("/:id", validator.findRecord, controller.update);
router.delete("/:id", validator.findRecord, controller.delete);

module.exports = router;
