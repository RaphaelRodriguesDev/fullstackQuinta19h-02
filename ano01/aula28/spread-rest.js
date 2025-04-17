const numeros = [1, 2, 3, 4, 5];

// Rest (...)
// const [n1, ...n2] = numeros;
// console.log(n1, n2);

const numeros2 = [ ...numeros, 6, 7, 8]

// console.log(numeros2);

const [n1, ...n2] = numeros;

console.log(n1, n2);