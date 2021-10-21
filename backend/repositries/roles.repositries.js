const handeler = require("../middlewares/errorHandeler_middleware");
const Model = require("../models/permission.model")

exports.create = async function (info) {
  let newModel = new Model(info);
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