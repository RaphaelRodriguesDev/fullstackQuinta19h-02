const cardsContainer = document.querySelector(".cards-container");

cardsContainer.innerHTML = "";

for (let i = 1; i <= 800; i++){
  fetch(`http://pokeapi.co/api/v2/pokemon/${i}`)
    .then(res => res.json())
    .then(res => {
      let card = document.createElement("div");
      card.setAttribute("class", "card");
      let img = document.createElement("img");
      img.src = res.sprites.other.dream_world.front_default;
      let title = document.createElement("h1");
      title.innerText = res.name;
  
      card.appendChild(img);
      card.appendChild(title);
      cardsContainer.appendChild(card);
    });
}
