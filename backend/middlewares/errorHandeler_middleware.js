exports.errorHandeler = (error, req, res, next) => {
  let status = error.statusCode;
  let message = error.message;
  if (!error.statusCode) {
    status = 500;
    message = "Network Error " + error.message;
  }
  res.status(status).json({ status: status, message: message });
};

exports.handleRecord = (userInfo, res) => {
  return res.status(409).json({ message: `Sorry, a user already exists with the email/phone: ${userInfo.email} ` });
};

exports.handleMissingRecord = (res) => {
  return res.status(404).json({ message: "Record not Found" });
};

exports.successHandeler = (success, res) => {

  let status = success.statusCode;
  let message = success.message;
  let result = success.data
  if (!success.statusCode) {
    status = 200;
    message = "Success";
  }
  res.status(status).json({ status: status, data: result, message: message });
};
