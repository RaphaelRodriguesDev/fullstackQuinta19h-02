const express = require("express");
const dotenv = require("dotenv");
const { Sequelize } = require("sequelize");
const cors = require("cors");

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;
const URL = `http://127.0.0.1:${port}`;

app.use(express.json());
app.use(cors());

//Initialize Sequelize
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT || 5432,
  }
);

// Define the Product model
const { DataTypes } = require("sequelize");

const Produto = sequelize.define("Produto", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

// Sync the Product model with the database
sequelize.sync();

// API Rotes
app.get("/produtos", async (req, res) => {
  const produtos = await Produto.findAll(); // TODO - ADICIONANDO AWAIT
  res.json(produtos);
});

app.get("/produtos/:id", async (req, res) => {
  const id = Number(req.params.id);
  const produto = await Produto.findOne({ where: { id } }); // TODO - ADICIONANDO AWAIT

  if (produto) {
    res.json(produto);
  } else {
    res.status(404).json({
      error: "Produto nao encontrado",
    });
  }
});

app.post("/produtos", async (req, res) => {
  const { nome, preco } = req.body; // TODO - CORREÇÃO DO CÓDIGO
  const produto = await Produto.create({ nome, preco }); // TODO - ADICIONANDO AWAIT
  res.status(201).json(produto);
});

app.put("/produtos/:id", async (req, res) => {
  const id = Number(req.params.id);
  const { nome, preco } = req.body;
  const produto = await Produto.findOne({ where: { id } }); // TODO - ADICIONANDO AWAIT

  if (produto) {
    produto.nome = nome;
    produto.preco = preco;
    await produto.save();
    res.json(produto);
  } else {
    res.status(404).json({
      error: "Produto Nao Encontrado",
    });
  }
});

app.delete("/produtos/:id", async (req, res) => {
  const id = Number(req.params.id);
  const produto = await Produto.findOne({ where: { id } }); // TODO - ADICIONANDO AWAIT

  if (produto) {
    await produto.destroy();
    res.sendStatus(204);
  } else {
    res.status(404).json({
      error: "Produto Nao Encontrado",
    });
  }
});

app.listen(port, "127.0.0.1", () => {
  console.log(`Servidor rodando em ${URL}`);
  console.log(`Teste com http://localhost:${port}/produtos`);
  console.log(`Teste com http://127.0.0.1:${port}/produtos`);
});
