const express = require("express");
const app = express();

const logger = require("./middleware/logger");
const homeRouter = require("./routes/home");
const userRouter = require("./routes/user");

app.set("view engine", "ejs");

app.use(logger);
app.use("/", homeRouter);
app.use("/user", userRouter);

app.listen(3000, console.log("STARTED"));
