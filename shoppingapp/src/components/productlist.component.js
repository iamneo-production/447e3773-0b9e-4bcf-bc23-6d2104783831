import React, { useState, useEffect } from 'react';
import {getLoggedUser, getProductList} from "../services/products-http.service";
import http from '../http-common';
import { Button } from '@mui/material';
import "../css/product.css";
import Navbar from './navbar.component';

function ProductList() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getLoggedUser().then(response => setUser(response.data))
    getProductList().then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error))
  }, []);

  const addToCart = (productId) => {
    if(user == null || JSON.stringify(user) === '{}'){
      window.alert("Please Login");
    }
    else {
      http.get("/cart/" + user.id)
        .then(response => {
          const cart = response.data;
          const updatedProductIds = [...cart.productsid, productId];

          const updatedCart = { ...cart, productsid: updatedProductIds };
          http.put("/cart/" + cart.id, updatedCart)
            .then(response => {
              console.log("Product added to cart");
              window.alert("Product Added to cart");
            })
            .catch(error => console.log("Error updating cart:", error));
        })
        .catch(error => console.log("Error fetching cart:", error));    
    }
  };
  return (
    <div>
      
      <Navbar user={user}/>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
       <> <li key={product.id}><img src={product.image} alt={product.name} style={{ width: '200px', height: '180px' }} />
         <p className="product-price">Price: ${product.price}</p>
          <Button onClick={(e) => addToCart(product.id)} color="primary">
            Add to Cart
          </Button>
        </li>
       </>
       
        ))}
      </ul>
    </div>
  );


}
export default ProductList;
