const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const local = process.env.MONGO_URI_LOCAL;
const atlas = process.env.MONGO_URI_ATLAS;
console.log(atlas);
const db = mongoose
  .connect( atlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Database Connected...");
  })
  .catch((err) => {
    // next(err);
    console.log(err);
  });
