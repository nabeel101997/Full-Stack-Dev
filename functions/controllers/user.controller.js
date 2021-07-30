const passport = require("passport");
const sgMail = require("@sendgrid/mail");
const jwt = require("jsonwebtoken");

const handeler = require("../middlewares/errorHandeler_middleware");

const Model = require("../models/user.model");

require("dotenv").config();
const crypto = require("crypto");
sgMail.setApiKey(process.env.API_KEY);

exports.create = (req, res, next) => {
  const userInfo = req.body;

  console.log(userInfo);

  // Ensuring that all the fields are being input by the user according to the model's requirements
  if (!userInfo.email || !userInfo.password) {
    const error = new Error("Validation failed, email/phone & password is required");
    error.statusCode = 400;
    throw error;
  }

  //  Ensuring that the user does not already exist
  Model.findOne({ email: userInfo.email })
    .then((userDoc) => {
      if (userDoc) {
        const error = new Error(
          `Sorry, a user already exists with the email/phone: ${userInfo.email} `
        );
        error.statusCode = 409;
        throw error;
      }
      // if (expressFileUpload.imageUpload(sampleFile, res) === true) {
      const newModel = new Model({
        email: userInfo.email,
      });
      newModel.setPassword(userInfo.password);
      newModel
        .save()
        .then(async (result) => {
          res.status(201).json({
            message: `This user is registered Successfully!: ${userInfo.email} `,
          });
        })
        .catch((err) => {
          next(err);
        });
      // }
    })
    .catch((err) => {
      next(err);
    });
};

exports.all = (req, res, next) => {
  var query = Model.find(req.query).select({ local: 0 });

  query.exec((err, items) => {
    if (err) return next(err);
    if (!items) {
      return handeler.handleMissingRecord(res);
    }
    res.send(items);
  });
};

exports.details = (req, res, next) => {
  Model.findById(req.params.id, (err, item) => {
    if (err) return next(err);
    if (!item) {
      return handeler.handleMissingRecord(res);
    }
    res.send(item);
  });
};

exports.update = (req, res, next) => {
  Model.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, item) => {
    if (err) return next(err);
    if (!item) {
      return handeler.handleMissingRecord(res);
    }
    res.status(200).json({
      message: "User information updated Successfully!:",
    });
  });
};

exports.delete = (req, res, next) => {
  Model.findByIdAndRemove(req.params.id, (err, item) => {
    if (err) return next(err);
    if (!item) {
      return handeler.handleMissingRecord(res);
    }
    res.status(200).json({
      message: "User deleted Successfully!:",
    });
  });
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
      return res.json(user.toAuthJSON(accessToken, refreshToken, user));
    }
  )(req, res, next);
};

exports.dashboard = (req, res, next) => {
  var query = Model.findById(req.payload.id)
    .populate({
      path: "roleIds",
      model: "Role",
      select: { _id: 1, name: 1 },
    })
    .populate({
      path: "appIds",
      model: "App",
      select: { _id: 1, name: 1 },
    });
  query.exec((err, item) => {
    if (err) return next(err);
    if (!item) {
      return handeler.handleMissingRecord(res);
    }
    res.status(200).json({
      userEmail: item.email,
      username: item.username,
      userRoles: item.roleIds,
      userApps: item.appIds,
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

      const msg = {
        to: userInfo.email,
        from: process.env.EMAIL_FROM,
        templateId: process.env.EMAIL_TEMPLATE_ID_1,
        dynamic_template_data: {
          subject: "Password change request",
          userName: user.username,
          url: `${process.env.FRONT_END_URL}resetpassword/${token}`,
        },
      };
      sgMail
        .send(msg)
        .then(() => {
          res.status(200).json({
            message: "Password Reset Email sent",
            token: token,
          });
        })
        .catch((err) => {
          next(err);
        });
    })
    .catch((err) => {
      next(err);
    });
};

exports.resetPassword = (req, res, next) => {
  //to be reviewed
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
      const msg = {
        to: user.email,
        from: process.env.EMAIL_FROM,
        templateId: process.env.EMAIL_TEMPLATE_ID_2,
        dynamic_template_data: {
          subject: "Password Reset Confirmation",
          userName: user.username,
          userEmail: user.email,
        },
      };
      sgMail.send(msg).catch((err) => {
        next(err);
      });
    }
  );
};

exports.verifyResetPasswordToken = (req, res, next) => {
  //to be reviewed
  Model.findOne(
    {
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    },
    (error, user) => {
      if (!user) {
        // error = new Error(false);
        // error.statusCode = 404;
        // next(error);
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


