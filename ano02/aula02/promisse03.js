// setTimeout(() => {
//   console.log("Executando callback...");
//   setTimeout(() => {
//     console.log("Executando callback...");
//     setTimeout(() => {
//       console.log("Executando callback...");
//     }, 2000)
//   }, 2000)
// }, 2000)

// function esperarPor(tempo = 2000) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Executando promise...");
//       resolve();
//     }, tempo);
//   });
// }

// esperarPor()
//   .then(() => esperarPor())
//   .then(esperarPor);

const p = new Promise((resolverPromessa, rejeitarPromessa) => {
  setTimeout(() => {
    rejeitarPromessa("Promessa rejeitada");
  }, 2000);
});


p.catch(console.log);
