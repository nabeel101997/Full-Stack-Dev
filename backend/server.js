const express = require("express");

const handeler = require("./middlewares/errorHandeler_middleware");
const userRoute = require("./routes/user.route");
const roleRoute = require("./routes/role.route");
const assignRoleRoute = require("./routes/assign_role.route");
const permissionRoute = require("./routes/permission.route");

var cors = require("cors");
const app = express();
require("./config/db");
app.use(express.json({ extended: false }));

app.use(cors({ origin: "*" }));

app.use("/users", userRoute);
app.use("/roles", roleRoute);
app.use("/permissions", permissionRoute);
app.use("/assign", assignRoleRoute);

app.use(handeler.errorHandeler);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log("Server listening on port " + port));
