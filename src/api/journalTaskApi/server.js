const express = require("express");
const serverless = require("serverless-http");
const bodyParser = require("body-parser");
const journalTasks = require("./routes/journalTasks");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use("/.netlify/functions/server", journalTasks);

module.exports = app;
module.exports.handler = serverless(app);
