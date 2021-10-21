const handeler = require("../middlewares/errorHandeler_middleware");
const services = require("../services/roles.services");

exports.create = async function (req, res) {
  const info = req.body;
  await services.create(info);
  const success = {
    message: `This role is created Successfully!: ${roleInfo.name} `,
    statusCode: 201,
    data: null,
  }
  return handeler.successHandeler(success, res);
};

exports.all = async function (req, res) {
  const query = req.query;
  var roles = await services.all(query)
  const success = {
    message: "Roles Retrieved Succesfully",
    data: roles,
  }
  return handeler.successHandeler(success, res);
};

exports.details = async function (req, res) {
  const id = req.params.id;
  var role = await services.details(id);
  const success = {
    message: "Role Retrieved Succesfully",
    data: role,
  }
  return handeler.successHandeler(success, res);
};

exports.update = async function (req, res) {
  const id = req.params.id;
  const data = req.body;
  var result = await services.update(id, data);
  const success = {
    message: "Role information updated Successfully!:",
    data: result,
  }
  return handeler.successHandeler(success, res);
};

exports.delete = async function (req, res) {
  const id = req.params.id;
  var result = await services.delete(id);
  const success = {
    message: "Role deleted Successfully!:",
    data: result,
  }
  return handeler.successHandeler(success, res);
};
