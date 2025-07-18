const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const express = require("express");
const routes = require("../../routes");

const app = express();
app.use(cors());

app.use(express.json({ limit: "50mb" }));
app.use(routes);

module.exports = app;
