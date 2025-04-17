function primeiraFuncao() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Esperou isso aqui");
      resolve();
    }, 1000)
  })
}

function segundaFuncao() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Esperou isso aqui tambem");
      resolve();
    }, 3000)
  })
}

async function terceiraFuncao() {
  console.log("Iniciou");
  await primeiraFuncao();
  await segundaFuncao();
  console.log("Finalizou a Função AsyncAwait");
}

terceiraFuncao();
