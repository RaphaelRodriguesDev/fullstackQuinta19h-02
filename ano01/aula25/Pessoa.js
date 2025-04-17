class Pessoa {
  constructor (nome, idade){
    this.nome = nome;
    this.idade = idade;
  }
  
  saudacao() {
    return `Ola ${this.nome}! Você tem ${this.idade} anos de idade`;
  }

}

export default Pessoa;