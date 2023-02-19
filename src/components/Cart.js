import React from 'react';
import '../styles/Cart.css';

export default function Cart({ setShowCart }) {
  return (
    <div className="darkBG">
      <div className="centered">
        <div className="Cart">
          <div>hello asdfas9oiasj</div>
          <button type="button" onClick={() => setShowCart(false)}>
            x
          </button>
        </div>
      </div>
    </div>
  );
}
