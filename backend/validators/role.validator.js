const handeler = require("../middlewares/errorHandeler_middleware");
const Model = require("../models/role.model");

exports.create = (req, res, next) => {
  const roleInfo = req.body;

  // Ensuring that all the fields are being input by the user according to the model's requirements
  if (!roleInfo.name) {
    const error = new Error(
      "Validation failed, name is required"
    );
    error.statusCode = 400;
    throw error;
  }
  //  Ensuring that the role does not already exist

  Model.findOne({ name: roleInfo.name }, (err, item) => {
    if (err) return next(err);
    if (item) {
      return handeler.handleRecord(roleInfo, res);
    }
    next();
  });

};

exports.findRecord = (req, res, next) => {
  Model.findById(req.params.id, (err, item) => {
    if (err) return next(err);
    if (!item) {
      return handeler.handleMissingRecord(res);
    }
  });
  next();
};