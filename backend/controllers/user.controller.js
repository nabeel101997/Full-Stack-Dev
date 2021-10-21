const passport = require("passport");
const jwt = require("jsonwebtoken");
const handeler = require("../middlewares/errorHandeler_middleware");
const services = require("../services/user.services");

const Model = require("../models/user.model");

require("dotenv").config();
const crypto = require("crypto");

exports.create = async function (req, res) {
  const userInfo = req.body;
  await services.create(userInfo);
  const success = {
    message: `This user is registered Successfully!: ${userInfo.email} `,
    statusCode: 201,
    data: null,
  }
  return handeler.successHandeler(success, res);
};

exports.all = async function (req, res) {
  const query = req.query;
  var users = await services.all(query)
  const success = {
    message: "Succesfully Users Retrieved",
    data: users,
  }
  return handeler.successHandeler(success, res);
}

exports.details = async function (req, res) {
  const id = req.params.id;
  var user = await services.details(id);
  const success = {
    message: "Succesfully User Retrieved",
    data: user,
  }
  return handeler.successHandeler(success, res);
};

exports.update = async function (req, res) {
  const id = req.params.id;
  const data = req.body;
  var result = await services.update(id, data);
  const success = {
    message: "User information updated Successfully",
    data: result,
  }
  return handeler.successHandeler(success, res);
};

exports.delete = async function (req, res) {
  const id = req.params.id;
  var result = await services.delete(id);
  const success = {
    message: "User deleted Successfully",
    data: result,
  }
  return handeler.successHandeler(success, res);
};

exports.login = (req, res, next) => {
  const userInfo = req.body;
  //  Ensuring that username and password are both input
  if (!userInfo.email || !userInfo.password) {
    const error = new Error("Validation failed, email & password is required");
    error.statusCode = 400;
    throw error;
  }
  return passport.authenticate(
    "local",
    { session: false },
    (err, passportUser, info) => {
      if (err) {
        next(err);
      }
      if (!passportUser) {
        return res.status(400).send(info);
      }
      const user = passportUser;
      accessToken = passportUser.generateJWT();
      refreshToken = passportUser.generateRefreshJWT();
      return res.status(200).json(user.toAuthJSON(accessToken, refreshToken, user));
    }
  )(req, res, next);
};

exports.dashboard = (req, res, next) => {
  var query = Model.findById(req.payload.id);
  query.exec((err, item) => {
    if (err) return next(err);
    if (!item) {
      return handeler.handleMissingRecord(res);
    }
    res.status(200).json({
      userEmail: item.email,
    });
  });
};

exports.forgotPassword = (req, res, next) => {
  const userInfo = req.body;
  if (!userInfo.email) {
    const error = new Error("Validation failed, email is required");
    error.statusCode = 400;
    throw error;
  }
  var token = crypto.randomBytes(16).toString("hex");
  Model.findOne({ email: userInfo.email })
    .then((user) => {
      if (!user) {
        const error = new Error("User not found");
        error.statusCode = 404;
        throw error;
      }
      user.resetPasswordToken = token;
      user.resetPasswordExpires = Date.now() + 3600000; // logic for expiring password
      user.save().catch((err) => {
        next(err);
      });

      res.status(200).json({
        message: "Reset Password token generated",
        token: token,
      });
    })
    .catch((err) => {
      next(err);
    });
};

exports.resetPassword = (req, res, next) => {
  Model.findOne(
    {
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    },
    function (error, user) {
      if (!user) {
        error = new Error("User not found ");
        error.statusCode = 404;
        error.message = "false";
        next(error);
        return res.status(404).json({ msg: false });
      }
      const newPassword = req.body.newPassword;
      user.setPassword(newPassword);
      user
        .save()
        .then(() => {
          res.status(201).json({
            success: `Password reset successfully!: ${user.email} `,
            message: true,
          });
        })
        .catch((err) => {
          next(err);
        });
    }
  );
};

exports.verifyResetPasswordToken = (req, res) => {
  Model.findOne(
    {
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    },
    (user) => {
      if (!user) {

        return res.status(404).json({ msg: false });
      }
      return res.status(200).json({ msg: true });
    }
  );
};

exports.refreshToken = (req, res, next) => {
  const refreshToken = req.body.refreshToken;
  if (!refreshToken) {
    const error = new Error("Refresh token is required");
    error.statusCode = 400;
    throw error;
  }
  jwt.verify(refreshToken, process.env.REFRESH_JWT_SECRET, (err, user) => {
    if (err) return next(err);
    if (user) {
      Model.findOne({ email: user.email })
        .then((user) => {
          if (user) {
            user.accessToken = user.generateJWT();
            res.json({ accessToken: user.accessToken });
          }
        })
        .catch((err) => {
          next(err);
        });
    }
  });
};

exports.logout = (req, res) => {
  // @TODO:: find the logout process for passport-local
  // req.logout();
  req.logout();
  // res.redirect("/");
  // res.status(200).json({ msg: "You have been Logged out" });
};
