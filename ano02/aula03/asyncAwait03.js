const fs = require("fs").promises;
async function lerArquivo() {
  const conteudo = await fs.readFile("arquivo.txt", "utf-8");
  console.log("conteudo do arquivo:", conteudo)
}

lerArquivo()