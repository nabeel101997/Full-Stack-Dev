const handeler = require("../middlewares/errorHandeler_middleware");
const Model = require("../models/user.model")

exports.create = async function (userInfo) {
  const newModel = new Model({
    email: userInfo.email,
    name: userInfo.name,
    role: "admin"
  });
  newModel.setPassword(userInfo.password);
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