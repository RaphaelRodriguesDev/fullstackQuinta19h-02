// Fetch API vs XMLHttpRequest
// const cardsContainer = document.querySelector(".cards-container");
// cardsContainer.innerHTML = "";

// for (let i = 1; i <= 649; i++) {
//   fetch(`http://pokeapi.co/api/v2/pokemon/${i}`)
//     .then(res => res.json())
//     .then(res => {
//       let card = document.createElement("div");
//       card.setAttribute("class", "card");
//       let img = document.createElement("img");
//       img.src = res.sprites.other.dream_world.front_default;
//       let title = document.createElement("h1");
//       title.innerText = res.name;

//       card.appendChild(img);
//       card.appendChild(title);
//       cardsContainer.appendChild(card);
//     });
// }

const cardsContainer = document.querySelector(".cards-container");
cardsContainer.innerHTML = "";

async function loadPokemonCards() {
  for (let i = 1; i <= 649; i++) {
    try {
      const res = await fetch(`http://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await res.json();

      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const img = document.createElement("img");
      img.src = data.sprites?.other?.dream_world?.front_default || "";

      const title = document.createElement("h1");
      title.innerText = data.name;

      card.appendChild(img);
      card.appendChild(title);
      cardsContainer.appendChild(card);
    } catch (error) {
      console.error(`Erro ao carregar o Pokémon ${i}:`, error);
    }
  }
}

loadPokemonCards();
