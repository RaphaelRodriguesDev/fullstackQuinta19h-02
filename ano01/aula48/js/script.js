const square = document.getElementById("square");
const btn = document.getElementById("btn");

const output = document.getElementById("output");

output.innerHTML = "<p> Olá turma </p>";
output.innerText = "Olá turma, tudo bem"
output.textContent = "Mais um texto"

output.style.color = "#0000FF"
output.style.backgroundColor = "#FFFF00"

square.style.width = "150px";
square.style.height = "150px";
square.style.backgroundColor = "#000000";

function trocarCor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  output.style.color = `rgb(${r}, ${g}, ${b})`
}

btn.addEventListener("click", trocarCor);
