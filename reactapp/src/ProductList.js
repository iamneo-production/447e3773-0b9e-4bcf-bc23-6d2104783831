
import React from 'react';
import products from './products';

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.map(product => (
        // // <div key={product.id} className="product">
        // //   <p>{product.name}</p>
        // //   <p>${product.price}</p>
        // //   <button onClick={() => addToCart(product)}>Add to Cart</button>
        // </div>

        <div className="card text-center" style={{ width: '100%' }}>
          <img id="imgsize" src={product.imgurl}
           className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
      </div>
      <div className="card-body">
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
      ))}
      
    </div>
  );
};

export default ProductList;
