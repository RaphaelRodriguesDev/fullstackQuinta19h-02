class Veiculo {
  constructor(tipo, cor, velocidade) {
    this.tipo = tipo;
    this.cor = cor;
    this.velocidade = velocidade;
  }
  mostrarInfo() {
    return `Este é um ${this.tipo}, de cor ${this.cor}, e s
    ua velocidade máxima é de ${this.velocidade} km/h.`;
  }
}

// const carro = new Veiculo('Carro', 'preta', 120);
// console.log(carro.mostrarInfo());

class Carro extends Veiculo {
  constructor(cor, modelo, velocidade) {
    super("carro", cor, velocidade); // Chama o construtor da classe "pai" (Veiculo)

    this.modelo = modelo; // A classe "Carro" tem um atributo extra: modelo
  }

  mostrarInfo() {
    console.log(`Este é um ${this.modelo}, de cor ${this.cor}, e
   sua velocidade máxima é de ${this.velocidade} km/h.`);
  }
}

const carro = new Carro("Vermelho", "Porsche 911 Turbo", 420);
console.log(carro.mostrarInfo());
