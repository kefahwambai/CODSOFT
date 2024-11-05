import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Home/homepage";
import Cart from "./components/Cart/Cart";
import About from "./components/About/About";
import ContactUs from "./components/Contact Us/ContactUs";
import Shop from "./components/shop/shop";
import "./App.css";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = sessionStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);


  const sessionTimeout = 45 * 60 * 1000; 

  useEffect(() => {
    const sessionStart = sessionStorage.getItem("sessionStart");
    const now = new Date().getTime();
    if (sessionStart && now - sessionStart < sessionTimeout) {
      console.log("Session is still active");
    } else {
      sessionStorage.clear();
      setCart([]); 
      console.log("Session expired, cleared storage");
    }
    sessionStorage.setItem("sessionStart", now);
  }, []);

  const handleClick = (item) => {
    if (!cart.some(cartItem => cartItem.productId === item.productId)) {
      setCart([...cart, { ...item, amount: 1 }]);
    } else {
      console.log("Item already in cart");
    }
  };

  const handleChange = (item, delta) => {
    setCart(cart.map(cartItem => {
      if (cartItem.productId === item.productId) {
        const newAmount = Math.max(1, (cartItem.amount || 1) + delta);
        return { ...cartItem, amount: newAmount };
      }
      return cartItem;
    }));
  };

  return (
    <div className="App">
      <Homepage cart={cart} />
      <Routes>
        <Route
          path="/"
          element={<Shop setCart={setCart} cart={cart} handleClick={handleClick} />}
        />
        <Route
          path="/cart"
          element={<Cart setCart={setCart} cart={cart} handleChange={handleChange} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
