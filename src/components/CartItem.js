import React from 'react';

export default function CartItem({ item }) {
  return (
    <div className="cart-item-contaier">
      <div className="cart-item-img">
        <img src={item.image} alt="Product" />
      </div>
      <div className="cart-item-info">
        <div className="cart-item-title">{item.title}</div>
        <div className="cart-item-price">{item.price}</div>
        <div className="cart-item-quantity">{item.quantity}</div>
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
