const handeler = require("../middlewares/errorHandeler_middleware");
const Model = require("../models/user.model")

exports.create = async function (info) {
  const newModel = new Model({
    email: info.email,
    firstName: info.firstName,
    lastName: info.lastName,
    role: "admin"
  });
  newModel.setPassword(info.password);
  await newModel.save();
}

exports.all = async function (query) {
  return await Model.find(query).select({ local: 0 });
}

exports.update = async function (id, data) {
  return await Model.findByIdAndUpdate(id, { $set: data });
};

exports.details = async function (id) {
  return await Model.findById(id);
};

exports.delete = async function (id) {
  return await Model.findByIdAndRemove(id);
};