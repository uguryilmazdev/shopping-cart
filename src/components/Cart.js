import React from 'react';
import CartItem from './CartItem';
import { getItemsFromStorage } from './CartItem';
import '../styles/Cart.css';

export default function Cart({ setShowCart }) {
  const items = getItemsFromStorage();

  return (
    <div className="darkBG">
      <div className="centered">
        <div className="Cart">
          <button
            type="button"
            className="exit-btn"
            onClick={() => setShowCart(false)}
          >
            X
          </button>
          <div className="cart-title">Your Shopping Bag</div>
          <div className="shopping-bag-container">
            {items.map((item) => {
              return <CartItem item={item} key={item.id} />;
            })}
            <button
              type="button"
              className="checkout-btn"
              onClick={() => setShowCart(false)}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
