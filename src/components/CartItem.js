import React from 'react';

export default function CartItem({ item }) {
  return (
    <div className="cart-item-container">
      <div className="cart-item-img">
        <img src={item.image} alt="Product" />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-title">{item.title}</div>
        <div className="cart-item-price">${item.price}</div>
        <div className="cart-item-quantity">
          <button type="button" onClick={() => decreaseCartItemQuantity(item)}>
            -
          </button>
          <div>{item.quantity}</div>
          <button type="button" onClick={() => increaseCartItemQuantity(item)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export function getItemsFromStorage() {
  const localStorageKeys = Object.keys(localStorage);
  const items = [];

  localStorageKeys.forEach((key) => {
    const item = localStorage.getItem(key);
    items.push(JSON.parse(item));
  });

  return items;
}

function decreaseCartItemQuantity(item) {
  const product = JSON.parse(localStorage.getItem(item.id));
  product.quantity -= 1;

  //check if item needs to be removed
  if (product.quantity === 0) {
    localStorage.removeItem(item.id);
    window.dispatchEvent(new Event('storage'));
  } else {
    localStorage.setItem(item.id, JSON.stringify(product));
    window.dispatchEvent(new Event('storage'));
  }
}

function increaseCartItemQuantity(item) {
  const product = JSON.parse(localStorage.getItem(item.id));
  product.quantity += 1;
  localStorage.setItem(item.id, JSON.stringify(product));
  window.dispatchEvent(new Event('storage'));
}
