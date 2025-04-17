// Verifique se um ano é bissexto ou não e imprima o resultado na tela

let ano = 2024;

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
  console.log(`O ano ${ano} é bissexto`);
} else {
  console.log(`O ano ${ano} não é bissexto`);
}
