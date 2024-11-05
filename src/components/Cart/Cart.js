import React, { useState, useEffect } from "react";
import { Table, Button } from "react-bootstrap";
import "./Cart.css";

function Cart({ cart, setCart, handleChange, handleRemove }) {
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cart.reduce((sum, item) => {
      return sum + (item.productPrice || 0) * (item.amount || 1);
    }, 0);
    setTotalPrice(total);
  }, [cart]);

  const handlePlaceOrder = () => {
    // Your order placement logic here...
  };

  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <div className="empty-cart">No items in cart</div>
      ) : (
        <>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Item Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const price = item.productPrice || 0;
                const amount = item.amount || 1;
                const total = (price * amount).toFixed(2);

                return (
                  <tr key={item.productId}>
                    <td>{item.productName}</td>
                    <td>Ksh {price.toFixed(2)}</td>
                    <td>
                      <Button variant="outline-secondary" size="sm" className="mr-2" onClick={() => handleChange(item, -1)}>-</Button>
                      <span className="quantity">{amount}</span>
                      <Button variant="outline-secondary" size="sm" className="ml-2" onClick={() => handleChange(item, 1)}>+</Button>
                    </td>
                    <td>KSh {total}</td>
                    <td>
                      <Button variant="danger" size="sm" onClick={() => handleRemove(item)}>Remove</Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <div className="total-price">Total Price: Ksh {totalPrice.toFixed(2)}</div>
          <Button className="place-order-btn" variant="primary" disabled={isPlacingOrder} onClick={handlePlaceOrder}>
            {isPlacingOrder ? "Placing Order..." : "Place Order"}
          </Button>
        </>
      )}
    </div>
  );
}

export default Cart;
