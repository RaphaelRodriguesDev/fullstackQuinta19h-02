// const p = new Promise(resolverPromesa => resolverPromesa(3));

// // p.then(valor => console.log(valor));
// p.then(console.log);

const p = new Promise(resolve => {
  resolve([
    {
      id: 1,
      nome: "Carlos",
      idade: 62,
    },
    {
      id: 2,
      nome: "Angela",
      idade: 35,
    },
    {
      id: 3,
      nome: "Alberto",
      idade: 20,
    },
  ]);
});

p
  .then(JSON.stringify) //p.then(valor => JSON.stringify(valor))
  .then(JSON.parse) //.then(valor => JSON.parse(valor))
  .then(valor => valor.forEach(el => {
    console.log(el.nome, el.idade);
  }))

  // .then(console.log)
