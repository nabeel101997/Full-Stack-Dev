const repositries = require("../repositries/user.repositries")

exports.create = function (userInfo) {
  repositries.create(userInfo);
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