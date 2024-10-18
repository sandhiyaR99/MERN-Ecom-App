import React, { useState, useEffect } from 'react';
import "../Styles/Cart.css";
import Navbar from '../Components/Navbar';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCartItems = async () => {
    const response = await fetch('http://localhost:5000/cart');
    const data = await response.json();
    setCartItems(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const handleDeleteItem = async (id) => {
    const response = await fetch(`http://localhost:5000/cart/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      setCartItems(cartItems.filter(item => item._id !== id));
    }
  };

  const handleUpdateQuantity = async (id, newQuantity) => {
    const updatedItem = { quantity: newQuantity };

    const response = await fetch(`http://localhost:5000/cart/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedItem),
    });

    if (response.ok) {
      setCartItems(cartItems.map(item => 
        item._id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const handlePlaceOrder = async () => {
    const response = await fetch('http://localhost:5000/cart', {
      method: 'DELETE',
    });

    if (response.ok) {
      alert('Order placed successfully');
      setCartItems([]);
    } 
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Navbar />
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map(item => (
              <li key={item._id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price}</p>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleUpdateQuantity(item._id, e.target.value)}
                  />
                  <button onClick={() => handleDeleteItem(item._id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>

          <div className="total-price">
            <h3>Total Price: ${calculateTotalPrice()}</h3>
          </div>

          <button className="place-order" onClick={handlePlaceOrder}>Place Order</button>
        </>
      )}
    </div>
    </>
  );
};

export default Cart;
