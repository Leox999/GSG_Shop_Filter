import React, { useState } from 'react';
import ProductList from './ProductList';
import './index.css';

const productsData = [
  { name: 'Dining Table', category: 'Furniture', price: 1200 },
  { name: 'Bookshelf', category: 'Furniture', price: 300 },
  { name: 'Refrigerator', category: 'Appliances', price: 1500 },
  { name: 'Microwave', category: 'Appliances', price: 200 },
  { name: 'Sofa Set', category: 'Furniture', price: 900 },
  { name: 'Washing Machine', category: 'Appliances', price: 600 }
];

function App() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filterProducts = () => {
    if (activeCategory === 'All') {
      return productsData;
    } else {
      return productsData.filter(product => product.category === activeCategory);
    }
  };

  const handleFilterChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div>
      <h1>Furniture and Appliances Filterable List</h1>
      <ProductList
        products={filterProducts()}
        activeCategory={activeCategory}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}

export default App;
