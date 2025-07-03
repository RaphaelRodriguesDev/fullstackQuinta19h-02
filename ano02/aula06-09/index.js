async function fetchProducts() {
  try {
    const response = await fetch("http://127.0.0.1:4444/produtos"); // Ajustado para porta 4444 conforme erro anterior
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

  productBody.innerHTML = ""; // Limpa a tabela
  loading.style.display = "none";
  table.style.display = "table";

  if (products.length === 0) {
    showError("Nenhum produto encontrado");
    return;
  }

  products.forEach(product => {
    const row = document.createElement("tr");
    row.innerHTML = `
                    <td>${product.id}</td>
                    <td>${product.nome}</td>
                    <td>R$${product.preco.toFixed(2)}</td>
                `;
    productBody.appendChild(row);
  });
}

function showError(message) {
  const errorDiv = document.getElementById("error");
  const loading = document.getElementById("loading");
  const table = document.getElementById("productTable");

  errorDiv.textContent = message;
  errorDiv.style.display = "block";
  loading.style.display = "none";
  table.style.display = "none";
}

document.addEventListener("DOMContentLoaded", fetchProducts);
