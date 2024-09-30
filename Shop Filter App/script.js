const products = [
    { name: "Dining Table", category: "Furniture", price: 1200 },
    { name: "Bookshelf", category: "Furniture", price: 300 },
    { name: "Refrigerator", category: "Appliances", price: 1500 },
    { name: "Microwave", category: "Appliances", price: 200 },
    { name: "Sofa Set", category: "Furniture", price: 900 },
    { name: "Washing Machine", category: "Appliances", price: 600 }
  ];

function displayProducts(filteredProducts) {
    const productDisplay = document.querySelector('.product-display');
    productDisplay.innerHTML = '';

    filteredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        productCard.innerHTML = `
        <div class="product-name">${product.name}</div>
        <div class="product-category">${product.category}</div>
        <div class="product-price">$${product.price}</div>
      `;

        productDisplay.appendChild(productCard);
    });
}

function filterProducts(category) {
    if (category === 'All') {
        displayProducts(products);
    } else {
        const filtered = products.filter(product => product.category === category);
        displayProducts(filtered);
    }
}

document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        filterProducts(category);

        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

filterProducts('All');
