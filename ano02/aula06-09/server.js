const express = require("express");
const dotenv = require("dotenv");
const {Sequelize} = require("sequelize");

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;
const URL = `http://127.0.0.1:${port}`;

app.use(express.json());

//Initialize Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

// Define the Product model
const { DataTypes } = require("sequelize");


app.listen(port, () => console.log(`rodando no link ${URL}`));