import React from 'react';
import './ProductCard.css'; 

const ProductCard = ({ product }) => {

  const handleAddToCart = async () => {
    const cartItem = {
      productId: product._id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    };

    const response = await fetch('http://localhost:5000/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    });

    
    if (response.ok) {
      alert(`${product.title} added to cart!`);
    } else {
      alert('Error adding product to cart.');
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} className="product-image" />
      <h2 className="product-title">{product.title}</h2>
      <p className="product-description">{product.description}</p>
      <div className="product-price-add">
        <span className="product-price">${product.price}</span>
        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
