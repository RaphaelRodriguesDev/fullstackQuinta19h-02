class Carro {
  constructor (cor, modelo, velocidade) {
    this._cor = cor;// Usamos "_" para indicar que o atributo é "privado"
    this._modelo = modelo;
    this._velocidade = velocidade;
  }
  // Getters e Setters
  get cor() {
    return this._cor;
  }

  set cor(novaCor) {
    this._cor = novaCor;
  }

  mostrarInfo() {
    return `Este é um ${this._modelo}, de cor ${this._cor},
    e sua velocidade máxima é de ${this._velocidade} km/h.`
  }
}

const fiat = new Carro("azul", "Fiat 500", 160)

console.log(fiat.cor);
fiat.cor = "vermelho";
console.log(fiat.cor);