document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("tbody");

  fetch("http://localhost:5555/movies")
    .then(response => response.json())
    .then(data => {
      tableBody.innerHTML = ""; // limpa a tela
      data.forEach(movie => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${movie.title}</td>
          <td><img src="${movie.poster}" alt="${movie.title}" width="100"></td>
          <td>${movie.overview}</td>
          <td>
            <button data-id="${movie.id}" class="btn-editar">Editar</button>
            <button data-id="${movie.id}" data-title="${movie.title}" class="btn-deletar">Deletar</button>
          </td>

        `;
        tableBody.appendChild(row);
      });

      //Adiciona eventos aos botões
      const editButtons = document.querySelectorAll(".btn-editar");
      editButtons.forEach(button => {
        button.addEventListener("click", handleEditClick);
      });

      const deleteButtons = document.querySelectorAll(".btn-deletar");
      deleteButtons.forEach(button => {
        button.addEventListener("click", handleDeleteClick);
      });
    })
    .catch(error => console.error("Erro ao buscar filmes:", error));
});

function handleEditClick(event) {
  const movieId = event.target.getAttribute("data-id");
  window.location.href = `views/editar.html?id=${movieId}`;
}

async function handleDeleteClick(event) {
  const movieId = event.target.getAttribute("data-id");
  const movieTitle = event.target.getAttribute("data-title");

  if (confirm(`Tem certeza que deseja deletar o filme "${movieTitle}"?`)) {
    try {
      const response = await fetch(`http://localhost:5555/movies/${movieId}`, {
        method: "DELETE",
      });
      const result = await response.json();
      alert(result.msg);
      // Recarrega a página para atualizar a tabela
      window.location.reload();
    } catch (error) {
      console.error("Erro ao deletar filme:", error);
      alert("Erro ao deletar filme.");
    }
  }
}


