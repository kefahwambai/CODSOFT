import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import css from './shop.css';

function Shop({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dbjson-gamma.vercel.app/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, []);

  function handleClick(product) {
    console.log("Product clicked:", product);
  
    if (product) {
      const productExists = cart.find(item => item.productId === product.productId);
  
      if (productExists) {
        console.log("Product already in cart:", product);
      } else {
        setCart([...cart, { ...product, amount: 1 }]); 
        console.log("Updated cart:", [...cart, { ...product, amount: 1 }]);
      }
    }
  }
  

  return (
    <div className="shop">
      <div className="product-grid">
        {products.map((item) => (
          <div key={item.productId} className="product-card">
            <img src={item.productImageUrl} alt={item.productName} className="card-img-top" />
            <div className="card-body">
              <h3 className="card-title">{item.productName}</h3>
              <p>{item.productDescription}</p>
              <p>$ {item.productPrice}</p>
              <button
                className="btn btn-primary"
                disabled={item.stock === 0}
                onClick={() => handleClick(item)}
              >
                {item.stock === 0 ? "Out of Stock" : "Add to Cart"}
              </button>
              <br />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
