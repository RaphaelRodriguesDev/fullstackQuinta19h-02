const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = 4444;
const URL = `http://127.0.0.1:${port}`;

app.listen(port, () => console.log(`rodando no link ${URL}`))