const express = require("express");
const app = express();

app.use(require("./middleware/logger.js"));

app.get("/", (req, res) => {
  // res.writeHead(200);
  // res.write("HELLO WORLD");
  // res.end();

  // 以下上記内容をexpressで書き直し

  res.status(200).send("HELLO WORLD");
});
app.listen(3000, console.log("STARTED"));
