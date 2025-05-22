const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

const URL = `http://127.0.0.1:${port}`;

app.use(express.json());

const produtos = [
  {
    id: 1,
    nome: "Pregos",
    preco: 5.99
  },
  {
    id: 2,
    nome: "Martelo",
    preco: 12.99
  },
  {
    id: 3,
    nome: "Trena",
    preco: 7.80
  },
]

app.get("/produtos", (req, res) =>{
  res.json(produtos);
});

app.get("/produtos/:id", (req, res) => {
  const id = Number(req.params.id);
  const produto = produtos.find(el => el.id === id);

  if (produto) {
    res.json(produto);
  } else {
    res.status(404).json({
      erro: "Produto não encontrado"
    });
  }
});

app.post("/produtos", (req, res) => {
  const { nome, preco } = req.body;
  const id = produtos.length + 1;
  const novoProduto = { id, nome, preco };
  produtos.push(novoProduto);
  res.status(201).json(novoProduto);
});

app.listen(port, () => console.log(`rodando no link ${URL}`));