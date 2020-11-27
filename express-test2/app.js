const express = require("express");
const app = express();

const logger = require("./middleware/logger");
const userRouter = require("./middleware/user");

app.use(logger);
app.use("/user", userRouter);

app.listen(3000, console.log("STARTED"));
