import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import axios from 'axios'; // For API calls

const ProductListScreen = () => {
  const [products, setProducts] = useState([]);
  const [pro] = useState([
    {
      id: 1,
      title: 'Product 1',
      price: 29.99,
      image: 'path/to/image1.jpg'
    },
    {
      id: 2,
      title: 'Product 2',
      price: 39.99,
      image: 'path/to/image2.jpg'
    },
   
  ]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

//   useEffect(() => {

//     axios.get('/api/products')
//       .then(response => setProducts(response.data))
//       .catch(error => console.error('Error fetching products:', error));

//     axios.get('/api/categories')
//       .then(response => setCategories(['All', ...response.data]))
//       .catch(error => console.error('Error fetching categories:', error));
//   }, []);

  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="product-list-container">
      <div className="filter-section">
        <h2>Product Categories</h2>
        <ul>
          {categories.map(category => (
            <li
              key={category}
              className={selectedCategory === category ? 'active' : ''}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
      <div className="product-section">
        <h2>Product List</h2>
        <div className="product-grid">
          {filteredProducts.map(product => (
            <div className="product-card" key={product.id}>
              <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>${product.price}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListScreen;
