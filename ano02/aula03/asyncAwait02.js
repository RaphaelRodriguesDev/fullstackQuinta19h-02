function obterDadosDoServidor(id) {
  fetch(`http://pokeapi.co/api/v2/pokemon/${id}`)
    .then(resposta => resposta.json())
    .then(dados => {
      console.log("Nome:", dados.name.toUpperCase())
    })
}

async function obterDadosDoServidor(id) {
  const resposta = await fetch (`http://pokeapi.co/api/v2/pokemon/${id}`);

  const dados = await resposta.json();
  console.log("Nome:", dados.name.toUpperCase());
}

obterDadosDoServidor(180);
