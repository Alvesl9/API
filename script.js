// Seleciona o contêiner onde os produtos serão exibidos
const productContainer = document.getElementById('product-container');

// Função para consumir os dados da API
async function fetchProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products');
    
    // Verifica se a resposta está correta
    if (response.status === 200) {
      const data = await response.json();
      displayProducts(data.products);
    } else {
      console.error('Erro ao buscar os produtos:', response.status);
      productContainer.innerHTML = `<p>Erro ao carregar produtos. Código: ${response.status}</p>`;
    }
  } catch (error) {
    console.error('Erro na requisição:', error);
    productContainer.innerHTML = `<p>Erro inesperado ao carregar os produtos. Tente novamente mais tarde.</p>`;
  }
}

// Função para exibir os produtos na tela
function displayProducts(products) {
  productContainer.innerHTML = ''; // Limpa o contêiner

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <h2>${product.title}</h2>
      <p>${product.description}</p>
      <span>$${product.price.toFixed(2)}</span>
    `;

    productContainer.appendChild(productCard);
  });
}

// Chama a função para buscar e exibir os produtos ao carregar a página
fetchProducts();
