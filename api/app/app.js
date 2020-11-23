const express = require("express");
const app = express();
const bodyParser = require("body-parser"); // HTMLのform受け取りを簡単にできるやつ（すでに標準装備されてるぽい）

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require("./models/route/v1");
app.use("/api/v1", router);

app.listen(3000);
console.log("STARTED");
