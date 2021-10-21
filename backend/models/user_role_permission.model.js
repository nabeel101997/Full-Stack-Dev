const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Model = new Schema(
  {
    userId:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    roleId:
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
    },
    permissionIds: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Permission",
      },
    ]

  },
  {
    strict: false,
    versionKey: false,
    timestamps: true,
    collection: "user_role_permission",
  }
);


module.exports = mongoose.model("user_role_permission", Model);
