const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Model = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    strict: false,
    versionKey: false,
    timestamps: true,
    collection: "permissions",
  }
);


module.exports = mongoose.model("Permission", Model);
