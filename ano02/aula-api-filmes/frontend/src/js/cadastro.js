document.addEventListener("DOMContentLoaded", () => {
  const movieForm = document.getElementById("movie-form");

  movieForm.addEventListener("submit", async event => {
    event.preventDefault();

    const movieData = {
      title: movieForm.title.value,
      poster: movieForm.poster.value,
      overview: movieForm.overview.value,
    };

    try {
      const response = await fetch("http://localhost:5555/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
      });

      if (response.ok) {
        alert("Filme cadastrado com sucesso!");
        // Limpar os campos após 3 segundos
        setTimeout(() => {
          movieForm.reset();
        }, 1000);
      } else {
        alert("Erro ao cadastrar filme.");
      }
    } catch (error) {
      alert("Erro de conexão.");
    }
  });
});
