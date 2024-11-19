import React from "react";
import "./Cart.css";

const Cart = ({ allProducts, loading }) => {
  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        allProducts.map((item) => {
          return (
            <div className="cart-container" key={item.id}>
              <img src={item.image} alt={item.title} className="cart-image" />
              <div className="cart-details">
                <h2 className="cart-title">{item.title}</h2>
                <p className="cart-category">{item.category}</p>
                <p className="cart-description">{item.description}</p>
                <p className="cart-rating">
                  Rating: {item.rating.rate} ({item.rating.count} reviews)
                </p>
                <p className="cart-price">${item.price.toFixed(2)}</p>
                <button className="cart-btn">Add to Cart</button>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Cart;
