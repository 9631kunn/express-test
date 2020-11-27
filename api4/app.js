const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require("mongoose");
const app = express();

mongoose.connect();
mongoose.connection.once("open", () => {
  console.log("DB CONNECTED");
});

app.use("/graphql", graphqlHTTP());
app.listen(3000, () => {
  console.log("STARTED!");
});
