async function fetchProducts() {
  try {
    const response = await fetch("https://127.0.0.1:4444/produtos");

    if (!response.ok) {
      throw new Error("Erro ao buscar produtos");
    }

    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    showError(error.message);
  }
}

function displayProducts(products) {
  const productBody = document.getElementById("productBody");
  const loading = document.getElementById("loading");
  const table = document.getElementById("productTable");

  productBody.innerHTML = ""; // limpa a tabela
  loading.style.display = "none";
  table.style.display = "table";

  if (products.length === 0) {
    showError("Nenhum Produto Encontrado");
    return;
  }

  products.forEach(product => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${product.id}</td>
      <td>${product.nome}</td>
      <td>RS${product.preco.toFixed(2)}</td>
    `
    
  });
}