const functions = require("firebase-functions");
const express = require("express");

const handeler = require("./middlewares/errorHandeler_middleware");
const userRoute = require("./routes/user.route");

var cors = require("cors");
const app = express();
require("./config/db");
app.use(express.json({ extended: false }));

app.use(cors({ origin: "*" }));

app.use("/users", userRoute);


app.use(handeler.errorHandeler);

exports.darziLiveApi = functions.https.onRequest(app);