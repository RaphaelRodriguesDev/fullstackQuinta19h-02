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
})

app.listen(port, () => console.log(`rodando no link ${URL}`))