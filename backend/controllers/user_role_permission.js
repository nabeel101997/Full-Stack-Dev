const Model = require("../models/user_role_permission.model");
var ObjectId = require('mongodb').ObjectID;

exports.create = (req, res, next) => {
  const info = req.body;

  if (!info.userId || !info.roleId) {
    const error = new Error("Validation failed, userId and roleId both are required");
    error.statusCode = 400;
    throw error;
  }

  Model.findOne({ userId: ObjectId(info.userId), roleId: ObjectId(info.roleId) }).then(async (doc) => {
    if (doc) {
      await Model.findOneAndUpdate({ userId: ObjectId(info.userId), roleId: ObjectId(info.roleId) }, { $push: { permissionIds: info.permissionIds } }).then(() => {
        res.status(201).json({
          message: "Permissions Updated Successfully!:",
          status: 201,
        });
      })
    } else {
      const newModel = new Model({
        userId: info.userId,
        roleId: info.roleId,
        permissionIds: info.permissionIds
      });
      newModel
        .save()
        .then(async () => {
          res.status(201).json({
            message: "Role Assigned Successfully!:",
            status: 201,
          });
        })
        .catch((err) => {
          next(err);
        });
    }
  })
    .catch((err) => {
      next(err);
    });

};

exports.details = (req, res, next) => {
  var query = Model.find({ userId: req.body.userId })
    .populate({
      path: "userId",
      model: "User",
      select: { _id: 1, name: 1 },
    })
    .populate({
      path: "roleId",
      model: "Role",
      select: { _id: 1, name: 1 },
    })
    .populate({
      path: "permissionIds",
      model: "Permission",
      select: { _id: 1, name: 1 },
    });
  query.exec((err, items) => {
    if (err) return next(err);
    if (!items) {
      return handeler.handleMissingRecord(res);
    }
 
    const obj =
      items.map(item => ({
        id: item.userId._id,
        name: item.userId.name,
        roles: [{
          id: item.roleId._id,
          name: item.roleId.name,
          permissions: [
            item.permissionIds.map(permissionId => ({
              id: permissionId._id,
              name: permissionId.name
            }))
          ]
        }]
      }
      ))

    const obj2 = obj.reduce((acc, item) => {
      return ({
        ...acc,
        ...item,
        roles: [
          ...acc.roles,
          ...item.roles,
        ]
      });
    }, { roles: [] });

    res.json(obj2)

  });
};

exports.currentUser = (req, res, next) => {
  const userId = req.payload.id;
  var query = Model.find({ userId: userId })
    .populate({
      path: "userId",
      model: "User",
      select: { _id: 1, name: 1 },
    })
    .populate({
      path: "roleId",
      model: "Role",
      select: { _id: 1, name: 1 },
    })
    .populate({
      path: "permissionIds",
      model: "Permission",
      select: { _id: 1, name: 1 },
    });
  query.exec((err, items) => {
    if (err) return next(err);
    if (!items) {
      return handeler.handleMissingRecord(res);
    }

    const obj =
      items.map(item => ({
        id: item.userId._id,
        name: item.userId.name,
        roles: [{
          id: item.roleId._id,
          name: item.roleId.name,
          permissions: [
            item.permissionIds.map(permissionId => ({
              id: permissionId._id,
              name: permissionId.name
            }))
          ]
        }]
      }
      ))

    const obj2 = obj.reduce((acc, item) => {
      return ({
        ...acc,
        ...item,
        roles: [
          ...acc.roles,
          ...item.roles,
        ]
      });
    }, { roles: [] });

    res.json(obj2)

  });
};