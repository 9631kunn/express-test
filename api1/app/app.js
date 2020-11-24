const express = require("express");
const app = express();
const bodyParser = require("body-parser"); // HTMLのform受け取りを簡単にできるやつ（すでに標準装備されてるぽい）
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/ExpressAPI");
mongoose.connection.on("error", (error) => {
  console.error("MongoDB connection error: " + error);
  process.exit(-1);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require("./models/route/v1");
app.use("/api/v1", router);

app.listen(3000);
console.log("STARTED");
