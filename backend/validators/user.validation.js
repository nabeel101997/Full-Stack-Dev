const handeler = require("../middlewares/errorHandeler_middleware");
const Model = require("../models/user.model");

exports.create = (req, res, next) => {
  const userInfo = req.body;

  // Ensuring that all the fields are being input by the user according to the model's requirements
  if (!userInfo.email || !userInfo.password) {
    const error = new Error(
      "Validation failed, email/phone & password is required"
    );
    error.statusCode = 400;
    throw error;
  }
  //  Ensuring that the user does not already exist
  Model.findOne({ email: userInfo.email }, (err, item) => {
    if (err) return next(err);
    if (item) {
      return handeler.handleRecord(userInfo, res);
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
    next();
  });
};
