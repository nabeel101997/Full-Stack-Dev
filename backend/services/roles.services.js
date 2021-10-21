const repositries = require("../repositries/roles.repositries")

exports.create = function (info) {
  repositries.create(info);
}

exports.details = function (id) {
  return repositries.details(id);
}

exports.all = function (query) {
  return repositries.all(query)
}

exports.update = function (id, data) {
  return repositries.update(id, data)
};

exports.delete = function (id) {
  return repositries.delete(id);
};