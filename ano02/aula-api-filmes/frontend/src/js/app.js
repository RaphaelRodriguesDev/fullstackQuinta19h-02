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
    });
});
