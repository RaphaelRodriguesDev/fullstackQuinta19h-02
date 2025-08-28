// Obtém o ID do filme da URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

// Carrega os dados do filme
async function loadMovieData() {
  try {
    const response = await fetch(`http://localhost:5555/movies/${movieId}`);
    const movie = await response.json();
    document.getElementById('title').value = movie.title;
    document.getElementById('poster').value = movie.poster || '';
    document.getElementById('overview').value = movie.overview || '';
  } catch (error) {
    console.error('Erro ao carregar filme:', error);
    alert('Erro ao carregar dados do filme.');
  }
}

// Envia o formulário de edição
document.getElementById('edit-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const poster = document.getElementById('poster').value;
  const overview = document.getElementById('overview').value;

  try {
    const response = await fetch(`http://localhost:5555/movies/${movieId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, poster, overview })
    });
    const result = await response.json();
    alert(result.msg);
    window.location.href = '../index.html'; // Volta para a lista na raiz
  } catch (error) {
    console.error('Erro ao atualizar filme:', error);
    alert('Erro ao atualizar filme.');
  }
});

// Carrega os dados ao iniciar
document.addEventListener('DOMContentLoaded', loadMovieData);