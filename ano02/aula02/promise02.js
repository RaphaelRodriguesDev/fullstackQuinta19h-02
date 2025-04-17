// Forma 1
// let p = new Promise(cumprirPromessa => cumprirPromessa(['Ana', 'Bia', 'José', 'Antonio']))

// p
//   .then(valor => valor[0])
//   .then(primeiroValor => primeiroValor[0])
//   .then(primeiraLetra => primeiraLetra.toLowerCase())
//   .then(console.log) //.then(valor => console.log(valor))

//Forma 2
const primeiroElemento = arrayOuString => arrayOuString[0];
const letraMinuscula = letra => letra.toLowerCase();

new Promise(cumprirPromessa =>
  cumprirPromessa(["Ana", "Bia", "José", "Antonio"])
)
  .then(primeiroElemento)
  .then(primeiroElemento)
  .then(letraMinuscula)
  .then(console.log); //.then(valor => console.log(valor))
