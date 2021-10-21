const handeler = require("../middlewares/errorHandeler_middleware");
const services = require("../services/permissions.services")
const Model = require("../models/permission.model");


exports.create = async function (req, res) {
  const info = req.body;
  await services.create(info);
  const success = {
    message: `This permission is created Successfully!: ${info.name} `,
    statusCode: 201,
    data: null,
  }
  return handeler.successHandeler(success, res);
};

exports.all = async function (req, res) {
  const query = req.query;
  var permissions = await services.all(query)
  const success = {
    message: "Permissions Retrieved Succesfully",
    data: permissions,
  }
  return handeler.successHandeler(success, res);
};

exports.details = async function (req, res) {
  const id = req.params.id;
  var permission = await services.details(id);
  const success = {
    message: "Permission Retrieved Succesfully",
    data: permission,
  }
  return handeler.successHandeler(success, res);
};

exports.update = async function (req, res) {
  const id = req.params.id;
  const data = req.body;
  var result = await services.update(id, data);
  const success = {
    message: "Permission information updated Successfully!:",
    data: result,
  }
  return handeler.successHandeler(success, res);
};

exports.delete = async function (req, res) {
  const id = req.params.id;
  var result = await services.delete(id);
  const success = {
    message: "Permission deleted Successfully!:",
    data: result,
  }
  return handeler.successHandeler(success, res);
};
